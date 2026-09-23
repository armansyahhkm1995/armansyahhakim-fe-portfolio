// Download Google Fonts as WOFF2 for self-hosting
// Run: node scripts/download-fonts.js

const https = require('https');
const fs = require('fs');
const path = require('path');

const FONTS_DIR = path.join(__dirname, '..', 'public', 'fonts');

const fonts = [
  { family: 'Instrument Serif', weights: ['400'], filename: 'instrument-serif' },
  { family: 'Inter Tight', weights: ['400', '500', '600', '700'], filename: 'inter-tight' },
  { family: 'JetBrains Mono', weights: ['400', '500', '600', '700'], filename: 'jetbrains-mono' },
  { family: 'Work Sans', weights: ['400', '500', '600', '700'], filename: 'work-sans' },
];

function fetchCSS(font) {
  const weightsStr = font.weights.join(',');
  const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(font.family)}:wght@${weightsStr}&subset=latin&display=swap`;
  
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let css = '';
      res.on('data', chunk => css += chunk);
      res.on('end', () => resolve(css));
    }).on('error', reject);
  });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
      file.on('error', reject);
    }).on('error', reject);
  });
}

async function downloadFont(font) {
  console.log(`\n${font.family}:`);
  const css = await fetchCSS(font);
  
  // Extract WOFF2 URLs from CSS
  const regex = /url\((https:\/\/fonts\.gstatic\.com\/s\/[^)]+\.woff2)\)/g;
  const matches = [...css.matchAll(regex)];
  
  if (matches.length === 0) {
    console.log('  No WOFF2 URLs found in CSS');
    console.log('  CSS preview:', css.slice(0, 500));
    return;
  }
  
  for (const match of matches) {
    const url = match[1];
    const weightMatch = url.match(/\/([^/]+)-latin-(\d+)-normal\.woff2/);
    const weight = weightMatch ? weightMatch[2] : 'unknown';
    const filename = `${font.filename}-${weight}.woff2`;
    const dest = path.join(FONTS_DIR, filename);
    
    await downloadFile(url, dest);
    console.log(`  Downloaded: ${filename}`);
  }
}

async function main() {
  if (!fs.existsSync(FONTS_DIR)) {
    fs.mkdirSync(FONTS_DIR, { recursive: true });
  }
  
  console.log('Downloading fonts from Google Fonts...');
  
  for (const font of fonts) {
    try {
      await downloadFont(font);
    } catch (e) {
      console.error(`Failed ${font.family}:`, e.message);
    }
  }
  
  console.log('\n✅ Font download complete!');
  console.log(`Fonts saved to: ${FONTS_DIR}`);
}

main();