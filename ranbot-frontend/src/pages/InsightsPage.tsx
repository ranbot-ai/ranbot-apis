import React, { useState, useEffect } from 'react';
import styles from './InsightsPage.module.css';
import { usePageMeta } from '../components/usePageMeta';
import { toast } from 'react-toastify';
import { API_URL } from '../utils/constants';

const InsightsPage: React.FC = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [insights, setInsights] = useState<string | null>(null);

  usePageMeta('Insights | RanBOT', 'Get instant, actionable insights and performance metrics for any website with RanBOT.');

  useEffect(() => {
    document.title = 'Insights | RanBOT';
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setInsights(null);
    try {
      const response = await fetch(`${API_URL}/api/insights`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      });
      if (!response.ok) throw new Error('Failed to fetch insights');
      const data = await response.json();
      setInsights(JSON.stringify(data, null, 2));
      toast.success('Insights ready!');
    } catch (err: any) {
      toast.error('Failed to fetch insights');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className='hero heroBackgroundImage'>
        <h1 className='heroTitle'>Company Insights</h1>
        <p className='heroDescription'>
          Get instant, actionable insights for any website.
          <br />
          Paste a URL below to analyze and extract structured data, SEO, and more.
        </p>
        <form className={styles.insightsForm} onSubmit={handleSubmit}>
          <input
            type="text"
            value={url}
            onChange={e => setUrl(e.target.value)}
            placeholder="Paste your URL (e.g. https://example.com)"
          />
          <button type="submit" disabled={loading}>{loading ? 'Analyzing...' : 'Analyze'}</button>
        </form>
        <div className={styles.insightsPreview}>
          {loading && <span>Analyzing...</span>}
          {insights && <pre>{insights}</pre>}
        </div>
      </section>
      <h2 className={styles.sectionTitle}>Features</h2>
      <section className={styles.features}>
        <div className={styles.feature}><h3>SEO Analysis</h3><p>Get a full SEO report, including meta tags, Open Graph, Twitter cards, and more.</p></div>
        <div className={styles.feature}><h3>Performance Metrics</h3><p>Analyze page speed, load time, and key web vitals for any site.</p></div>
        <div className={styles.feature}><h3>Structured Data</h3><p>Extract JSON-LD, Microdata, and Schema.org markup for rich results.</p></div>
        <div className={styles.feature}><h3>Content Extraction</h3><p>Pull out main content, headings, images, and links for further analysis.</p></div>
        <div className={styles.feature}><h3>Mobile Friendly</h3><p>Check mobile responsiveness and viewport configuration.</p></div>
        <div className={styles.feature}><h3>Security Checks</h3><p>Detect HTTPS, security headers, and potential vulnerabilities.</p></div>
        <div className={styles.feature}><h3>Social Media Cards</h3><p>Preview how your site appears on Twitter, Facebook, and more.</p></div>
        <div className={styles.feature}><h3>Accessibility</h3><p>Audit for accessibility best practices and ARIA compliance.</p></div>
        <div className={styles.feature}><h3>API Ready</h3><p>All insights are available via a simple API for automation.</p></div>
      </section>
      <h2 className={styles.sectionTitle}>Advanced Options</h2>
      <section className={styles.details}>
        <div className={styles.detail}><h3>Custom User Agent</h3><p>Analyze as Googlebot, Bingbot, or any custom user agent.</p></div>
        <div className={styles.detail}><h3>Geo Location</h3><p>Test from different countries or regions for geo-specific results.</p></div>
        <div className={styles.detail}><h3>Custom Headers</h3><p>Send custom HTTP headers for advanced analysis.</p></div>
      </section>
      <section className={styles.infoSection}>
        <h2>How does it work?</h2>
        <p>We analyze the page using a real browser and extract structured data, SEO, and performance metrics for you.</p>
        <ul>
          <li>Paste your URL and click Analyze.</li>
          <li>Our backend loads the page and extracts insights.</li>
          <li>The insights are available for review or download immediately.</li>
        </ul>
      </section>
      <section className={styles.infoSection}>
        <h2>Why not run my own solution?</h2>
        <p>Web analysis at scale is complex. We handle all the infrastructure, scaling, and delivery so you can focus on your product.</p>
        <ul>
          <li>No code to maintain, no servers to deploy.</li>
          <li>Optimized hardware and analysis settings for every request.</li>
          <li>Edge delivery for fast, global access.</li>
        </ul>
      </section>
      <section className={styles.infoSection + ' ' + styles.qa}>
        <h2>Product Information</h2>
        <div>
          <div className={styles.faqCard}>
            <div className={styles.faqQuestion}>What is it?</div>
            <div className={styles.faqAnswer}>An easy way to get instant insights for any website using the RanBOT API.</div>
          </div>
          <div className={styles.faqCard}>
            <div className={styles.faqQuestion}>How does it work?</div>
            <div className={styles.faqAnswer}>We analyze the page using a real browser and deliver structured data, SEO, and performance metrics instantly.</div>
          </div>
          <div className={styles.faqCard}>
            <div className={styles.faqQuestion}>Why use this service?</div>
            <div className={styles.faqAnswer}>Save time and resources by letting us handle the analysis and delivery for you.</div>
          </div>
          <div className={styles.faqCard}>
            <div className={styles.faqQuestion}>Is it secure?</div>
            <div className={styles.faqAnswer}>Each request is isolated, and no data is shared between requests. Your data is handled securely.</div>
          </div>
          <div className={styles.faqCard}>
            <div className={styles.faqQuestion}>Can I customize the analysis?</div>
            <div className={styles.faqAnswer}>Yes! You can set user agent, geo, headers, and more.</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InsightsPage;