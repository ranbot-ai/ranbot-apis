import axios from 'axios';
import * as cheerio from 'cheerio';

export async function scrapeWebpage(url: string): Promise<{ title: string; description: string }> {
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  const title = $('title').text() || '';
  const description = $('meta[name="description"]').attr('content') || '';
  return { title, description };
}
