import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import puppeteer from 'puppeteer';

export async function generatePdfFromText(text: string): Promise<Uint8Array> {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage();
  const { width, height } = page.getSize();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontSize = 18;
  page.drawText(text, {
    x: 50,
    y: height - 50 - fontSize,
    size: fontSize,
    font,
    color: rgb(0, 0, 0),
    maxWidth: width - 100,
  });
  return await pdfDoc.save();
}

export async function generatePdfFromUrl(url: string): Promise<Buffer> {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  try {
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      displayHeaderFooter: true,
      headerTemplate: `<div style='width:100%;text-align:center;font-size:10px;color:#888;'>RanBOT</div>`,
      footerTemplate: `<div style='width:100%;text-align:center;font-size:10px;color:#888;'>RanBOT</div>`,
      margin: { top: '60px', bottom: '60px' },
    });
    await page.close();
    return pdfBuffer as Buffer;
  } finally {
    await browser.close();
  }
}
