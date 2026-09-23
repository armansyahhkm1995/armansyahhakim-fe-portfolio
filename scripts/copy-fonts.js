// Copy font files from @fontsource packages to public/fonts

const fs = require('fs');
const path = require('path');

const SRC_BASE = path.join(__dirname, '..', 'node_modules', '@fontsource');
const DEST_DIR = path.join(__dirname, '..', 'public', 'fonts');

const fontsToCopy = [
  // Instrument Serif - weight 400 normal
  {
    src: 'instrument-serif/files/instrument-serif-latin-400-normal.woff2',
    dest: 'instrument-serif-400.woff2',
  },
  // Inter Tight - weights 400, 500, 600, 700 (latin subset)
  {
    src: 'inter-tight/files/inter-tight-latin-400-normal.woff2',
    dest: 'inter-tight-400.woff2',
  },
  {
    src: 'inter-tight/files/inter-tight-latin-500-normal.woff2',
    dest: 'inter-tight-500.woff2',
  },
  {
    src: 'inter-tight/files/inter-tight-latin-600-normal.woff2',
    dest: 'inter-tight-600.woff2',
  },
  {
    src: 'inter-tight/files/inter-tight-latin-700-normal.woff2',
    dest: 'inter-tight-700.woff2',
  },
  // JetBrains Mono - weights 400, 500, 600, 700
  {
    src: 'jetbrains-mono/files/jetbrains-mono-latin-400-normal.woff2',
    dest: 'jetbrains-mono-400.woff2',
  },
  {
    src: 'jetbrains-mono/files/jetbrains-mono-latin-500-normal.woff2',
    dest: 'jetbrains-mono-500.woff2',
  },
  {
    src: 'jetbrains-mono/files/jetbrains-mono-latin-600-normal.woff2',
    dest: 'jetbrains-mono-600.woff2',
  },
  {
    src: 'jetbrains-mono/files/jetbrains-mono-latin-700-normal.woff2',
    dest: 'jetbrains-mono-700.woff2',
  },
  // Work Sans - weights 400, 500, 600, 700
  {
    src: 'work-sans/files/work-sans-latin-400-normal.woff2',
    dest: 'work-sans-400.woff2',
  },
  {
    src: 'work-sans/files/work-sans-latin-500-normal.woff2',
    dest: 'work-sans-500.woff2',
  },
  {
    src: 'work-sans/files/work-sans-latin-600-normal.woff2',
    dest: 'work-sans-600.woff2',
  },
  {
    src: 'work-sans/files/work-sans-latin-700-normal.woff2',
    dest: 'work-sans-700.woff2',
  },
];

if (!fs.existsSync(DEST_DIR)) {
  fs.mkdirSync(DEST_DIR, { recursive: true });
}

let copied = 0;
let missing = 0;

for (const font of fontsToCopy) {
  const srcPath = path.join(SRC_BASE, font.src);
  const destPath = path.join(DEST_DIR, font.dest);
  
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`✅ ${font.dest}`);
    copied++;
  } else {
    console.log(`❌ MISSING: ${font.src}`);
    missing++;
  }
}

console.log(`\nCopied: ${copied}, Missing: ${missing}`);
console.log(`Fonts saved to: ${DEST_DIR}`);