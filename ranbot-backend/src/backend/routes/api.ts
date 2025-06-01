import { Router, Request, Response } from 'express';
import { scrapeWebpage } from '../services/scraper';
import { captureScreenshot } from '../services/screenshot';
import { extractMeta } from '../services/meta';
import { generatePdfFromText, generatePdfFromUrl } from '../services/pdf';
import { getWebsiteLogos } from '../services/logo';
import path from 'path';
import rateLimit from 'express-rate-limit';

const router = Router();

// --- Middleware: API Key Auth ---
const API_KEY = 'RANBOT_KEY';
function requireApiKey(req: Request, res: Response, next: Function) {
  const key = req.headers['x-api-key'];
  if (key !== API_KEY) {
    return res.status(401).json({ error: 'Unauthorized: Invalid API key' });
  }
  next();
}

// --- Middleware: Rate Limiting ---
const pdfRateLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10, // limit each IP to 10 requests per windowMs
  message: { error: 'Too many requests, please try again later.' },
});

// --- Middleware: Logging ---
function logRequest(req: Request, res: Response, next: Function) {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} from ${req.ip}`);
  next();
}

// Scrape endpoint
router.get('/scrape', async (req: Request, res: Response) => {
  const url = req.query.url as string;
  if (!url) return res.status(400).json({ error: 'Missing url parameter' });
  try {
    const result = await scrapeWebpage(url);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Failed to scrape webpage', details: (err as Error).message });
  }
});

// Screenshot endpoint (GET, legacy)
router.get('/screenshot', async (req: Request, res: Response) => {
  const url = req.query.url as string;
  if (!url) return res.status(400).json({ error: 'Missing url parameter' });
  try {
    const imageBuffer = await captureScreenshot({ url });
    res.set('Content-Type', 'image/png');
    res.send(imageBuffer);
  } catch (err) {
    res.status(500).json({ error: 'Failed to capture screenshot', details: (err as Error).message });
  }
});

// Screenshot endpoint (POST, advanced)
router.post('/screenshot', async (req: Request, res: Response) => {
  const { url, fullPage, device, waitForSelector, waitForTimeout } = req.body;
  if (!url) return res.status(400).json({ error: 'Missing url in request body' });
  try {
    const imageBuffer = await captureScreenshot({ url, fullPage, device, waitForSelector, waitForTimeout });
    res.set('Content-Type', 'image/png');
    res.send(imageBuffer);
  } catch (err) {
    res.status(500).json({ error: 'Failed to capture screenshot', details: (err as Error).message });
  }
});

// Meta endpoint
router.get('/meta', async (req: Request, res: Response) => {
  const url = req.query.url as string;
  if (!url) return res.status(400).json({ error: 'Missing url parameter' });
  try {
    const meta = await extractMeta(url);
    res.json(meta);
  } catch (err) {
    res.status(500).json({ error: 'Failed to extract meta', details: (err as Error).message });
  }
});

// PDF endpoint
router.post('/pdf', async (req: Request, res: Response) => {
  const text = req.body.text as string;
  if (!text) return res.status(400).json({ error: 'Missing text in request body' });
  try {
    const pdfBytes = await generatePdfFromText(text);
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="generated.pdf"',
    });
    res.send(Buffer.from(pdfBytes));
  } catch (err) {
    res.status(500).json({ error: 'Failed to generate PDF', details: (err as Error).message });
  }
});

// --- PDF from URL endpoint (GET & POST) ---
async function handlePdfFromUrl(req: Request, res: Response) {
  const url = req.method === 'GET' ? (req.query.url as string) : req.body.url;
  if (!url) return res.status(400).json({ error: 'Missing url parameter' });
  try {
    const pdfBuffer = await generatePdfFromUrl(url);
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="webpage.pdf"',
    });
    res.send(pdfBuffer);
  } catch (err) {
    console.error('PDF generation error:', err);
    res.status(500).json({ error: 'Failed to generate PDF from URL', details: (err as Error).message });
  }
}

router.get('/pdf/url', logRequest, requireApiKey, pdfRateLimiter, handlePdfFromUrl);
router.post('/pdf/url', logRequest, requireApiKey, pdfRateLimiter, handlePdfFromUrl);


// Website logo (favicon) endpoint
router.get('/logo/icons', logRequest, async (req: Request, res: Response) => {
  const url = req.query.url as string;
  if (!url) return res.status(400).json({ error: 'Missing url parameter' });
  try {
    const logos = await getWebsiteLogos(url);
    res.json({ logos });
  } catch (err) {
    console.error('Logo extraction error:', err);
    res.status(500).json({ error: 'Failed to extract website logos', details: (err as Error).message });
  }
});

router.post('/logo/icons', logRequest, async (req: Request, res: Response) => {
  const url = req.body.url;
  if (!url) return res.status(400).json({ error: 'Missing url in request body' });
  try {
    const logos = await getWebsiteLogos(url);
    res.json({ logos });
  } catch (err) {
    console.error('Logo extraction error:', err);
    res.status(500).json({ error: 'Failed to extract website logos', details: (err as Error).message });
  }
});

export default router;
