import fs from 'fs/promises';
import icojs from 'icojs';

async function main() {
  const [,, icoPath] = process.argv;
  if (!icoPath) {
    console.error('No ICO file path provided');
    process.exit(1);
  }
  try {
    const icoBuffer = await fs.readFile(icoPath);
    const images = await icojs.parseICO(icoBuffer);
    if (!images.length) throw new Error('No images found in ICO');
    const largest = images.reduce((a, b) => (a.width * a.height > b.width * b.height ? a : b));
    if (!largest.buffer) throw new Error('No PNG buffer in ICO');
    // Output as base64 string
    process.stdout.write(Buffer.from(largest.buffer).toString('base64'));
  } catch (err) {
    console.error('ICO to PNG worker error:', err);
    process.exit(1);
  }
}

main();