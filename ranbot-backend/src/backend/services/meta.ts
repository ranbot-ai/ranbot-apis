import axios from 'axios';
import * as cheerio from 'cheerio';

export interface MetaResult {
  metaTags: Array<{ name: string; content: string }>;
  links: Array<{ name: string; content: string }>;
}

export async function extractMeta(url: string): Promise<MetaResult> {
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  const metaTags: Array<{ name: string; content: string }> = [];
  const links: Array<{ name: string; content: string }> = [];

  $('meta').each((_, el) => {
    const name = $(el).attr('name') || $(el).attr('property');
    const content = $(el).attr('content');
    if (name && content) {
      metaTags.push({ name, content });
    }
  });

  $('a').each((_, el) => {
    const href = $(el).attr('href');
    if (href && href !== 'javascript:;') {
      links.push({ name: $(el).text().trim(), content: href });
    }
  });

  return { metaTags, links };
}
