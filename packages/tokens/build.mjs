import StyleDictionary from 'style-dictionary';
import { register } from '@tokens-studio/sd-transforms';
import fs from 'fs';
import path from 'path';

// --- PART 1: Split Token Logic ---
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

    const filePath = path.join(outputDir, `${key}.json`);
    const folderPath = path.dirname(filePath);
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
    console.log(`✅ Extracted: tokens/${key}.json`);
  });
};

splitTokenFile();

// --- PART 2: Register Transforms ---
// ลงทะเบียน transform ของ tokens-studio
register(StyleDictionary);

// Custom: px to rem (V4 Syntax)
StyleDictionary.registerTransform({
  name: 'size/pxToRem',
  type: 'value',
  transitive: true,
  // ใช้ filter แทน matcher
  filter: (token) => {
    const type = token.type || token.$type;
    return ['fontSizes', 'spacing', 'borderRadius', 'borderWidth', 'sizing', 'dimension'].includes(type);
  },
  // ใช้ transform แทน transformer
  transform: (token) => {
    const val = parseFloat(token.value);
    if (isNaN(val)) return token.value;
    return `${val / 16}rem`;
  }
});

// Custom: kebab-case naming (V4 Syntax)
StyleDictionary.registerTransform({
  name: 'name/kebab',
  type: 'name',
  transform: (token) => {
    return token.path.join('-')
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .toLowerCase()
      .replace(/\s+/g, '-');
  }
});

// --- PART 3: Config ---
const getStyleDictionaryConfig = () => {
  return {
    source: [
      "tokens/**/*.json"
    ],
    platforms: {
      css: {
        prefix: "sl",
        transformGroup: "tokens-studio",
        transforms: [
          'ts/descriptionToComment',
          'ts/size/px',
          'ts/opacity',
          'ts/size/lineheight',
          'ts/typography/fontWeight',
          'ts/resolveMath',
          'ts/size/css/letterspacing',
          'ts/color/css/hexrgba',
          'name/kebab',   
          'size/pxToRem'
        ],
        buildPath: "dist/css/",
        files: [
          {
            destination: "variables.css",
            format: "css/variables",
            options: {
              outputReferences: true,
            }
          }
        ]
      }
    }
  };
};

// --- PART 4: Execution (จุดที่แก้!) ---
console.log('\n🏗️  Building Sila Design System...');

// 🔥 FIX: ใช้ new StyleDictionary() และ await แทน .extend()
const runBuild = async () => {
  try {
    const config = getStyleDictionaryConfig();
    const sd = new StyleDictionary(config);
    await sd.buildAllPlatforms(); // V4 เป็น async แล้ว
    console.log('✨ Build Success! Check: packages/tokens/dist/css/variables.css');
  } catch (e) {
    console.error('❌ Build Failed:', e);
  }
};

runBuild();