import React, { useState, useEffect } from 'react';
import styles from './LogoPage.module.css';
import { usePageMeta } from '../components/usePageMeta';
import { toast } from 'react-toastify';
import { API_URL } from '../utils/constants';

const LogoPage: React.FC = () => {
  const [faviconUrl, setFaviconUrl] = useState('');
  const [faviconLoading, setFaviconLoading] = useState(false);
  const [faviconResults, setFaviconResults] = useState<{ [size: string]: string } | null>(null);

  useEffect(() => {
    document.title = 'Logo | RanBOT';
  }, []);

  usePageMeta('Logo | RanBOT', 'Generate or fetch a logo for your project or website instantly with RanBOT.');

  // Fetch logos for a website
  const handleFaviconFetch = async (e: React.FormEvent) => {
    e.preventDefault();
    setFaviconLoading(true);
    setFaviconResults(null);
    try {
      const response = await fetch(`${API_URL}/api/logo/icons`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: faviconUrl })
      });
      if (!response.ok) throw new Error('Failed to fetch logos');
      const data = await response.json();
      setFaviconResults(data.logos);
      toast.success('Logos ready!');
    } catch (err: any) {
      toast.error('Failed to fetch logos');
    } finally {
      setFaviconLoading(false);
    }
  };

  return (
    <>
      <section className='hero heroBackgroundImage'>
        <h1 className='heroTitle'>Company Logos</h1>
        <p className='heroDescription'>
          Fetch and display logos in multiple sizes for any website.
        </p>
        <form className={styles.logoForm} onSubmit={handleFaviconFetch} style={{ marginBottom: 16 }}>
          <input
            type="text"
            value={faviconUrl}
            onChange={e => setFaviconUrl(e.target.value)}
            placeholder="Enter website URL (e.g. https://example.com)"
          />
          <button type="submit" disabled={faviconLoading}>{faviconLoading ? 'Fetching...' : 'Get Logos'}</button>
        </form>
        <div className={styles.logoPreview}>
          {faviconLoading && <span>Fetching logos...</span>}
          {faviconResults && (
            <div style={{ marginTop: 16, display: 'flex', gap: 24 }}>
              {Object.entries(faviconResults).map(([size, src]) => (
                <div key={size} style={{ textAlign: 'center' }}>
                  <img
                    src={`${API_URL}${src}`}
                    alt={`favicon ${size}`}
                    width={parseInt(size)}
                    height={parseInt(size)}
                    style={{ border: '1px solid #eee', borderRadius: 4, background: '#fff' }}
                  />
                  <div style={{ marginTop: 4, fontSize: 12 }}>{size}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <h2 className={styles.sectionTitle}>Features</h2>
      <section className={styles.features}>
        <div className={styles.feature}>
          <h3>Instant Logo</h3>
          <p>Generate a logo for any brand or project in seconds.</p>
        </div>
        <div className={styles.feature}>
          <h3>SVG &amp; PNG Output</h3>
          <p>Download your logo in high-quality SVG or PNG format.</p>
        </div>
        <div className={styles.feature}>
          <h3>Customizable</h3>
          <p>Adjust text, color, and style to fit your brand identity.</p>
        </div>
      </section>
      <h2 className={styles.sectionTitle}>Advanced Options</h2>
      <section className={styles.details}>
        <div className={styles.detail}>
          <h3>SVG Customization</h3>
          <p>Edit SVG code for advanced logo customization.</p>
        </div>
        <div className={styles.detail}>
          <h3>Brand Colors</h3>
          <p>Choose from a palette of modern, accessible colors.</p>
        </div>
        <div className={styles.detail}>
          <h3>API Integration</h3>
          <p>Automate logo generation with a robust API.</p>
        </div>
      </section>
      <section className={styles.infoSection}>
        <h2>How does it work?</h2>
        <p>We generate a logo using a combination of design templates and color theory. Each request is unique and delivered instantly for download or embedding.</p>
        <ul>
          <li>Enter your brand or project name and click Generate Logo.</li>
          <li>Our backend generates a logo based on your input.</li>
          <li>The logo is available for download or embedding immediately.</li>
        </ul>
      </section>
      <section className={styles.infoSection}>
        <h2>Why not run my own solution?</h2>
        <p>Designing and generating logos programmatically is complex and time-consuming. Our service handles all the design, scaling, and delivery, so you can focus on your product.</p>
        <ul>
          <li>No code to maintain, no servers to deploy.</li>
          <li>Optimized hardware and design templates for every request.</li>
          <li>Edge delivery for fast, global access.</li>
        </ul>
      </section>
      <section className={styles.infoSection}>
        <h2>Product Information</h2>
        <div>
          <div className={styles.faqCard}>
            <div className={styles.faqQuestion}>What is it?</div>
            <div className={styles.faqAnswer}>An easy way to generate or fetch a logo for any brand or project using the RanBOT API.</div>
          </div>
          <div className={styles.faqCard}>
            <div className={styles.faqQuestion}>How does it work?</div>
            <div className={styles.faqAnswer}>We generate a logo using design templates and color theory, and deliver it to you instantly.</div>
          </div>
          <div className={styles.faqCard}>
            <div className={styles.faqQuestion}>Why use this service?</div>
            <div className={styles.faqAnswer}>Save time and resources by letting us handle the design, scaling, and delivery for you.</div>
          </div>
          <div className={styles.faqCard}>
            <div className={styles.faqQuestion}>Is it secure?</div>
            <div className={styles.faqAnswer}>Each request is isolated, and no data is shared between requests. Your data is handled securely.</div>
          </div>
          <div className={styles.faqCard}>
            <div className={styles.faqQuestion}>Can I customize the logo?</div>
            <div className={styles.faqAnswer}>Yes! You can set text, color, style, and more.</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LogoPage;