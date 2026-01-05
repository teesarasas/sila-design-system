import StyleDictionary from 'style-dictionary';
import { register } from '@tokens-studio/sd-transforms';
import fs from 'fs';
import path from 'path';

// --- 1. Utility: Split Logic ---
const splitTokenFile = () => {
  const inputPath = path.join(process.cwd(), './tokens.json');
  const outputDir = path.join(process.cwd(), 'tokens');

  // อ่านไฟล์ JSON ก้อนใหญ่
  if (!fs.existsSync(inputPath)) {
    console.error(`❌ file not found ${inputPath}`);
    return;
  }
  
  const rawTokens = JSON.parse(fs.readFileSync(inputPath, 'utf-8'));

  // clear existing folder (Optional)
  if (fs.existsSync(outputDir)) {
    fs.rmSync(outputDir, { recursive: true, force: true });
  }

  // Loop extract files
  for (const fullKey in rawTokens) {
    const parts = fullKey.split('/'); 
    
    // if no / found, skip or collect in root
    if (parts.length < 2) continue;

    const fileName = parts.pop(); // last part is file name
    const folderPath = parts.join('/'); // previous path is name
    
    const dirPath = path.join(outputDir, folderPath);
    const filePath = path.join(dirPath, `${fileName}.json`);
    const content = rawTokens[fullKey];

    fs.mkdirSync(dirPath, { recursive: true });
    fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
    console.log(`✅ Saved: tokens/${folderPath}/${fileName}.json`);
  }
};

// run the split function
splitTokenFile();

// --- 2. Register Transforms Tokens Studio ---
register(StyleDictionary); 

// --- 3. Custom Format ---
StyleDictionary.registerFormat({
  name: 'css/sila-variables',
  format: function ({ dictionary, platform }) {
    return `:root {
  /* Sila Design System - Generated Variables */
${dictionary.allTokens.map((token) => {
    // Naming logic
    let tokenName = token.name.replace(`${platform.prefix}-`, '');
    
    // Tier categorization
    if (token.filePath.includes('semantic')) {
        tokenName = `sem-${tokenName}`; 
    } else if (token.filePath.includes('component')) {
        tokenName = `comp-${tokenName}`;
    } else if (token.filePath.includes('global')) {
        tokenName = `base-${tokenName}`;
    }

    return `  --${platform.prefix}-${tokenName}: ${token.value};`;
}).join('\n')}
}`;
}
});

// --- 4. Main Config ---
export default {
  "source": [
    "tokens/global/**/*.json",
    "tokens/semantic/**/*.json",
    "tokens/components/**/*.json",
    "!tokens/global/mobile/**/*.json" // 👈 Exclude Mobile to prevent confliction with desktop
  ],
  "platforms": {
    "css": {
      "prefix": "sl",
      "transformGroup": "tokens-studio", 
      "buildPath": "build/css/",
      "files": [
        {
          "destination": "_variables.css",
          "format": "css/sila-variables"
        }
      ]
    }
  }
};