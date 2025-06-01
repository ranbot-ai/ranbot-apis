import axios from 'axios';
import * as cheerio from 'cheerio';
import sharp from 'sharp';
import path from 'path';
import { spawn } from 'child_process';
import fs from 'fs/promises';
import os from 'os';

export async function getWebsiteLogos(url: string): Promise<{ [size: string]: string }> {
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  let faviconUrl =
    $('link[rel="icon"]').attr('href') ||
    $('link[rel="shortcut icon"]').attr('href') ||
    '/favicon.ico';
  if (faviconUrl.startsWith('/')) {
    const { origin } = new URL(url);
    faviconUrl = origin + faviconUrl;
  } else if (!faviconUrl.startsWith('http')) {
    const { origin } = new URL(url);
    faviconUrl = origin + '/' + faviconUrl.replace(/^\//, '');
  }
  console.log('[LOGO] Resolved favicon URL:', faviconUrl);
  let faviconBuffer: Buffer | null = null;
  let isIco = false;
  let contentType = '';
  try {
    const response = await axios.get(faviconUrl, { responseType: 'arraybuffer' });
    faviconBuffer = Buffer.from(response.data);
    contentType = response.headers['content-type'] || '';
    console.log('[LOGO] Favicon downloaded, content-type:', contentType);
    if (faviconUrl.endsWith('.ico') || contentType.includes('image/x-icon')) {
      isIco = true;
    }
  } catch (e) {
    console.log('[LOGO] Failed to download favicon:', e);
    faviconBuffer = null;
  }
  const sizes = [16, 32, 64, 128];
  const logos: { [size: string]: string } = {};
  if (faviconBuffer) {
    const { hostname } = new URL(url);
    let pngBuffer = faviconBuffer;
    if (isIco) {
      // Use worker script for ICO to PNG conversion
      const tmpDir = os.tmpdir();
      const icoPath = path.join(tmpDir, `favicon_${Date.now()}.ico`);
      try {
        await fs.writeFile(icoPath, faviconBuffer);
        console.log('[LOGO] Written ICO to temp file:', icoPath);
        const worker = spawn('node', [path.resolve('ico-to-png-worker.mjs'), icoPath], { stdio: ['ignore', 'pipe', 'pipe'] });
        let stdout = Buffer.alloc(0);
        let stderr = Buffer.alloc(0);
        worker.stdout.on('data', (data) => { stdout = Buffer.concat([stdout, data]); });
        worker.stderr.on('data', (data) => { stderr = Buffer.concat([stderr, data]); });
        const exitCode: number = await new Promise((resolve) => worker.on('close', resolve));
        await fs.unlink(icoPath);
        if (exitCode !== 0) {
          console.log('[LOGO] ICO worker failed:', stderr.toString());
          return logos;
        }
        pngBuffer = Buffer.from(stdout.toString(), 'base64');
        console.log('[LOGO] Extracted PNG from ICO using worker, size:', pngBuffer.length);
      } catch (e) {
        console.log('[LOGO] ICO conversion with worker failed:', e);
        try { await fs.unlink(icoPath); } catch {}
        return logos;
      }
    }
    for (const size of sizes) {
      const outPath = path.join(__dirname, '../../public/favicons', `${hostname}_${size}.png`);
      await sharp(pngBuffer).resize(size, size).toFile(outPath);
      logos[`${size}x${size}`] = `/favicons/${hostname}_${size}.png`;
    }
  } else {
    console.log('[LOGO] No favicon buffer found for', faviconUrl);
  }
  return logos;
}
