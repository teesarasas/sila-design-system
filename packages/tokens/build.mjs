import StyleDictionary from 'style-dictionary';
import { register } from '@tokens-studio/sd-transforms';

// 1. Register Tokens Studio Transforms
register(StyleDictionary);

// 2. ✅ Custom Transform: "size/pxToRem" (แปลง px เป็น rem)
StyleDictionary.registerTransform({
  name: 'size/pxToRem',
  type: 'value',
  transitive: true,
  filter: (token) => {
    const type = token.type || token.$type;
    return ['fontSizes', 'spacing', 'borderRadius', 'borderWidth', 'sizing', 'dimension'].includes(type);
  },
  transform: (token) => {
    const val = parseFloat(token.value);
    if (isNaN(val)) return token.value;
    return `${val / 16}rem`;
  }
});

// 3. ✅ Custom Transform: "name/kebab" (ตั้งชื่อตัวแปรแบบ CSS แท้ๆ)
StyleDictionary.registerTransform({
  name: 'name/kebab',
  type: 'name',
  transform: (token) => {
    // วนลูปทุกส่วนของชื่อ (Path) มาแปลงร่าง
    return token.path.map(part => {
      return part
        // 1. แปลง camelCase เป็น kebab-case (เช่น fontSize -> font-size)
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        // 2. แปลงทุกอย่างเป็นตัวเล็ก
        .toLowerCase()
        // 3. แทนที่ช่องว่างด้วยขีด (เผื่อมี)
        .replace(/\s+/g, '-');
    }).join('-'); // เอามาต่อกันด้วยขีด
  }
});

// 4. ฟังก์ชัน Config
function getStyleDictionaryConfig(themeName, sources) {
  return {
    source: sources,
    platforms: {
      css: {
        transforms: [
          'ts/descriptionToComment',
          'ts/size/px',
          'ts/opacity',
          'ts/size/lineheight',
          'ts/typography/fontWeight',
          'ts/resolveMath',
          'ts/size/css/letterspacing',
          'ts/color/css/hexrgba',
          'name/kebab',   // 👈 ใช้ตัวใหม่ที่เราเพิ่งอัปเกรด logic
          'size/pxToRem'
        ],
        prefix: 'sl',
        buildPath: 'build/css/',
        files: [
          {
            destination: `${themeName}.css`,
            format: 'css/variables',
            options: {
              outputReferences: true,
            }
          }
        ]
      }
    }
  };
}

// --- 5. Main Execution ---
console.log('🏗️  Building Sila Design System (SD v4)...');

try {
  // A. Global
  const globalSD = new StyleDictionary(
    getStyleDictionaryConfig('global', [
      'tokens/global/**/*.json',
      'tokens/semantic/**/*.json',
      'tokens/components/**/*.json',
      '!tokens/global/mobile/**/*.json',
      '!tokens/global/desktop/**/*.json'
    ])
  );
  await globalSD.buildAllPlatforms();

  // B. Mobile
  const mobileSD = new StyleDictionary(
    getStyleDictionaryConfig('theme-mobile', [
      'tokens/global/mobile/**/*.json'
    ])
  );
  await mobileSD.buildAllPlatforms();

  // C. Desktop
  const desktopSD = new StyleDictionary(
    getStyleDictionaryConfig('theme-desktop', [
      'tokens/global/desktop/**/*.json'
    ])
  );
  await desktopSD.buildAllPlatforms();

  console.log('✅ Build Success! Files generated in build/css/');

} catch (e) {
  console.error('❌ Build Failed:', e);
}