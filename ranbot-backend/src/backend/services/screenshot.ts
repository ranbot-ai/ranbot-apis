import puppeteer from 'puppeteer';
import { generateScreenshot } from '../../utils/screenshotPage';
const devices = (puppeteer as any).devices;

export interface ScreenshotOptions {
  url: string;
  fullPage?: boolean;
  device?: string;
  waitForSelector?: string;
  waitForTimeout?: number;
}

export async function captureScreenshot(options: ScreenshotOptions): Promise<Buffer> {
  const { url, fullPage, device, waitForSelector, waitForTimeout } = options;
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    defaultViewport: null
  });
  const page = await browser.newPage();

  if (device && devices && devices[device]) {
    await page.emulate(devices[device]);
  }

  const buffer = await generateScreenshot(page, url, waitForSelector, waitForTimeout);

  await browser.close();
  return buffer as Buffer;
}
