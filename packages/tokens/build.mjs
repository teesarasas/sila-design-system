import StyleDictionary from 'style-dictionary';
import { register } from '@tokens-studio/sd-transforms';
import fs from 'fs';
import path from 'path';

// --- PART 1: Split Token Logic ---

// Line-height multiplier values from global tokens
const LINE_HEIGHT_VALUES = {
  'typography.line-height.none': 1,
  'typography.line-height.tight': 1.25,
  'typography.line-height.snug': 1.375,
  'typography.line-height.normal': 1.5,
  'typography.line-height.relaxed': 1.625,
  'typography.line-height.loose': 2,
};

// Resolve line-height math expressions and convert to rem
// Input: "round((12* {typography.line-height.normal})/4)*4"
// Output: "1.125rem" (18px / 16)
const resolveLineHeightMath = (value) => {
  if (typeof value !== 'string' || !value.includes('round(')) {
    return value;
  }
  
  // Pattern: round((fontSize * {reference})/4)*4
  const match = value.match(/round\(\((\d+)\*\s*\{([^}]+)\}\)\/4\)\*4/);
  if (match) {
    const fontSize = parseFloat(match[1]);
    const refPath = match[2];
    const multiplier = LINE_HEIGHT_VALUES[refPath] || 1.5;
    
    // Calculate: round((fontSize * multiplier) / 4) * 4
    const calculated = Math.round((fontSize * multiplier) / 4) * 4;
    // Convert to rem (divide by 16)
    const remValue = calculated / 16;
    return `${remValue}rem`;
  }
  
  return value;
};

// Recursively process token object to resolve line-height math
const processTokens = (obj) => {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  
  const result = Array.isArray(obj) ? [] : {};
  
  for (const key in obj) {
    if (key === '$value' && typeof obj[key] === 'string') {
      result[key] = resolveLineHeightMath(obj[key]);
    } else if (typeof obj[key] === 'object') {
      result[key] = processTokens(obj[key]);
    } else {
      result[key] = obj[key];
    }
  }
  
  return result;
};

const splitTokenFile = () => {
  const inputPath = path.join(process.cwd(), 'tokens.json');
  const outputDir = path.join(process.cwd(), 'tokens');

  if (!fs.existsSync(inputPath)) {
    console.error(`❌ Error: tokens.json not found at ${inputPath}`);
    return;
  }

  const rawTokens = JSON.parse(fs.readFileSync(inputPath, 'utf-8'));

  if (fs.existsSync(outputDir)) {
    fs.rmSync(outputDir, { recursive: true, force: true });
  }
  fs.mkdirSync(outputDir);

  Object.keys(rawTokens).forEach(key => {
    const content = rawTokens[key];
    if (typeof content !== 'object' || key.startsWith('$')) return;

    // Process tokens to resolve line-height math expressions
    const processedContent = processTokens(content);

    const filePath = path.join(outputDir, `${key}.json`);
    const folderPath = path.dirname(filePath);
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    fs.writeFileSync(filePath, JSON.stringify(processedContent, null, 2));
    console.log(`✅ Extracted: tokens/${key}.json`);
  });
};

splitTokenFile();

// --- PART 2: Register Transforms ---
// ลงทะเบียน transform ของ tokens-studio
register(StyleDictionary);

// Custom: px to rem (V4 Syntax)
// Only converts values that end with 'px', leaves rem values unchanged
StyleDictionary.registerTransform({
  name: 'size/pxToRem',
  type: 'value',
  transitive: true,
  filter: (token) => {
    const type = token.type || token.$type;
    return ['fontSizes', 'spacing', 'borderRadius', 'borderWidth', 'sizing', 'dimension'].includes(type);
  },
  transform: (token) => {
    const value = String(token.value);
    // Skip if already in rem, em, or other units (not px)
    if (value.endsWith('rem') || value.endsWith('em') || value === '0') {
      return token.value;
    }
    // Only convert if value ends with 'px'
    if (!value.endsWith('px')) return token.value;
    const val = parseFloat(value);
    if (isNaN(val)) return token.value;
    return `${val / 16}rem`;
  }
});

// Custom: resolved numeric fontSizes and lineHeights → rem
// Runs after ts/resolveMath, which outputs unitless integers for math-resolved tokens.
// This transform appends the rem unit so values are valid CSS.
StyleDictionary.registerTransform({
  name: 'size/numericToRem',
  type: 'value',
  transitive: true,
  filter: (token) => {
    const type = token.type || token.$type;
    return ['fontSizes', 'lineHeights'].includes(type);
  },
  transform: (token) => {
    const value = token.value;
    // Skip values that already have a unit
    if (typeof value === 'string' && (value.endsWith('rem') || value.endsWith('px') || value.endsWith('em'))) {
      return value;
    }
    const num = parseFloat(value);
    if (!isNaN(num) && num !== 0) {
      return `${num / 16}rem`;
    }
    return value;
  }
});

// Custom: kebab-case naming with level prefix (global, semantic, component)
StyleDictionary.registerTransform({
  name: 'name/kebab-with-level',
  type: 'name',
  transform: (token) => {
    // Get the file path to determine the level (global, semantic, component)
    const filePath = token.filePath || '';
    
    // Extract level from file path (e.g., "tokens/global/color.json" -> "global")
    // or "tokens/semantic/light.json" -> "semantic"
    // or "tokens/component/button.json" -> "component"
    let level = '';
    if (filePath.includes('/global/') || filePath.includes('\\global\\')) {
      level = 'global';
    } else if (filePath.includes('/semantic/') || filePath.includes('\\semantic\\')) {
      level = 'semantic';
    } else if (filePath.includes('/component/') || filePath.includes('\\component\\')) {
      level = 'component';
    }
    
    // Build the token name with level prefix
    const tokenPath = token.path.join('-')
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .toLowerCase()
      .replace(/\s+/g, '-');
    
    // Return with level prefix if found
    return level ? `${level}-${tokenPath}` : tokenPath;
  }
});

// --- PART 3: Config ---
const getStyleDictionaryConfig = (theme = 'light') => {
  // Determine which semantic color file to include based on theme
  const themeFile = theme === 'dark' ? 'tokens/semantic/dark.json' : 'tokens/semantic/light.json';
  
  return {
    log: {
      verbosity: 'default'
    },
    source: [
      "tokens/global/**/*.json",
      "tokens/semantic/spacing.json",
      "tokens/semantic/border.json",
      "tokens/semantic/elevation.json",
      "tokens/semantic/icon.json",
      "tokens/semantic/size.json",
      "tokens/semantic/aspect-ratio.json",
      "tokens/semantic/typography.json",
      themeFile,
      "tokens/component/**/*.json"
    ],
    platforms: {
      css: {
        prefix: "sl",
        transformGroup: "tokens-studio",
        transforms: [
          'ts/descriptionToComment',
          'ts/opacity',
          'ts/size/lineheight',
          'ts/typography/fontWeight',
          'ts/resolveMath',
          'size/numericToRem',
          'ts/size/css/letterspacing',
          'ts/color/css/hexrgba',
          'name/kebab-with-level'
        ],
        buildPath: "dist/css/",
        files: [
          {
            destination: theme === 'light' ? "variables.css" : `variables-${theme}.css`,
            format: "css/variables",
            options: {
              outputReferences: (token) => {
                const raw = token.original?.value ?? token.value;
                const type = token.type || token.$type;
                const filePath = token.filePath || '';
                const isComponent = filePath.includes('/component/') || filePath.includes('\\component\\');

                // Component tokens always reference semantic tokens via var() — preserve the chain.
                if (isComponent) return true;

                // Math expressions can't be evaluated with var() references — resolve at build time.
                if (typeof raw === 'string' && (raw.includes('round(') || raw.includes('^'))) {
                  return false;
                }

                // Semantic fontSizes/lineHeights that reference global number tokens (unitless)
                // must resolve to concrete values so size/numericToRem can apply rem units.
                if (['fontSizes', 'lineHeights'].includes(type)) {
                  return false;
                }

                return true;
              },
              selector: theme === 'light' ? ':root' : `[data-theme="${theme}"], .${theme}`
            }
          }
        ]
      }
    }
  };
};

// --- PART 4: Execution ---
console.log('\n🏗️  Building Sila Design System...');

const runBuild = async () => {
  try {
    // Build light theme (default)
    console.log('\n📦 Building light theme...');
    const lightConfig = getStyleDictionaryConfig('light');
    const sdLight = new StyleDictionary(lightConfig);
    await sdLight.buildAllPlatforms();
    
    // Build dark theme
    console.log('\n🌙 Building dark theme...');
    const darkConfig = getStyleDictionaryConfig('dark');
    const sdDark = new StyleDictionary(darkConfig);
    await sdDark.buildAllPlatforms();
    
    console.log('\n✨ Build Success! Check: packages/tokens/dist/css/');
    console.log('   - variables.css (light theme)');
    console.log('   - variables-dark.css (dark theme)');
  } catch (e) {
    console.error('❌ Build Failed:', e);
  }
};

runBuild();