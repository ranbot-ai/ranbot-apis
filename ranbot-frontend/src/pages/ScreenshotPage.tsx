import React, { useState, useEffect } from 'react';
import styles from './ScreenshotPage.module.css';
import { usePageMeta } from '../components/usePageMeta';
import { toast } from 'react-toastify';
import { API_URL } from '../utils/constants';

const ScreenshotPage: React.FC = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [screenshotUrl, setScreenshotUrl] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Screenshot | RanBOT';
  }, []);

  usePageMeta('Screenshot | RanBOT', 'Capture a screenshot of any webpage as a PNG image instantly with RanBOT.');

  const validateAndSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) {
      toast.error('Please enter a URL');
    } else if (!url.startsWith('http://') && !url.startsWith('https://')) {
      toast.error('Please enter a valid URL including http:// or https://');
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    setScreenshotUrl(null);
    try {
      const response = await fetch(`${API_URL}/api/screenshot`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      });
      if (!response.ok) throw new Error('Failed to capture screenshot');
      const blob = await response.blob();
      const imgUrl = URL.createObjectURL(blob);
      setScreenshotUrl(imgUrl);
      toast.success('Screenshot ready!');
    } catch (err: any) {
      toast.error('Failed to capture screenshot');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className='hero heroBackgroundImage'>
        <h1 className='heroTitle'>Easy Screenshot</h1>
        <p className='heroDescription'>
          Capture a screenshot of any webpage as a PNG image instantly with RanBOT.
        </p>
        <form className={styles.screenshotForm} onSubmit={validateAndSubmit}>
          <input
            type="text"
            value={url}
            onChange={e => setUrl(e.target.value)}
            placeholder="Paste your URL (e.g. https://example.com)"
          />
          <button type="submit" disabled={loading}>{loading ? 'Capturing...' : 'Take Screenshot'}</button>
        </form>
        <div className={styles.screenshotPreview}>
          {loading && <div className={styles.spinner}></div>}
          {screenshotUrl && <img src={screenshotUrl} alt="Screenshot" style={{ maxWidth: '100%', borderRadius: 8, boxShadow: '0 2px 8px #0001' }} />}
        </div>
      </section>

      <section id="features" className={styles.featuresSection}>
        {/* Pricing section moved to PricingPage.tsx */}
      </section>
    </>
  );
};

export default ScreenshotPage;