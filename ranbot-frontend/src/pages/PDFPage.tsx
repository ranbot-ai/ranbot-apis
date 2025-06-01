import React, { useState, useEffect } from 'react';
import styles from './PDFPage.module.css';
import { usePageMeta } from '../components/usePageMeta';
import { toast } from 'react-toastify';
import { API_URL } from '../utils/constants';

const PDFPage: React.FC = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'PDF | RanBOT';
  }, []);

  usePageMeta('PDF | RanBOT', 'Generate a PDF from any webpage or HTML content instantly with RanBOT.');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setPdfUrl(null);
    try {
      const response = await fetch(`${API_URL}/api/pdf`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      });
      if (!response.ok) throw new Error('Failed to generate PDF');
      const blob = await response.blob();
      const fileUrl = URL.createObjectURL(blob);
      setPdfUrl(fileUrl);
      toast.success('PDF ready!');
    } catch (err: any) {
      toast.error('Failed to generate PDF');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className='hero heroBackgroundImage'>
        <h1 className='heroTitle'>PDF Generator</h1>
        <p className='heroDescription'>
          Simplify your workflow, turn websites into PDFs in an easy way.
          <br />
          Paste a URL below to generate a PDF instantly.
        </p>
        <form className={styles.pdfForm} onSubmit={handleSubmit}>
          <input
            type="text"
            value={url}
            onChange={e => setUrl(e.target.value)}
            placeholder="Paste your URL (e.g. https://example.com)"
          />
          <button type="submit" disabled={loading}>{loading ? 'Generating...' : 'Generate PDF'}</button>
        </form>
        <div className={styles.pdfPreview}>
          {loading && <span>Generating PDF...</span>}
          {pdfUrl && (
            <>
              <a className={styles.pdfLink} href={pdfUrl} download="document.pdf">Download PDF</a>
              <iframe src={pdfUrl} title="PDF Preview" width="100%" height="500px" style={{border:'none',marginTop:'1rem',maxWidth:'700px'}}></iframe>
            </>
          )}
        </div>
      </section>
      <h2 className={styles.sectionTitle}>Features</h2>
      <section className={styles.features}>
        <div className={styles.feature}><h3>Always fresh</h3><p>Every request generates a fresh PDF, reflecting the latest content of the target URL.</p></div>
        <div className={styles.feature}><h3>Embed Mode</h3><p>Generate PDFs on-demand and embed them directly in your HTML markup.</p></div>
        <div className={styles.feature}><h3>Fully adaptable</h3><p>Set paper format, margins, scale, orientation, and more for your PDFs.</p></div>
      </section>
      <h2 className={styles.sectionTitle}>Advanced Options</h2>
      <section className={styles.details}>
        <div className={styles.detail}><h3>Delay</h3><p>Wait a quantity of time, selector, or event to preload content before generating the document.</p></div>
        <div className={styles.detail}><h3>Page Ranges</h3><p>Select specific page ranges to print, removing unnecessary content.</p></div>
        <div className={styles.detail}><h3>Scale</h3><p>Customize the scale of the webpage rendering, adjusting the zoom level.</p></div>
        <div className={styles.detail}><h3>Orientation</h3><p>Switch between portrait or landscape to fit your needs.</p></div>
        <div className={styles.detail}><h3>CSS/JS Injection</h3><p>Inject custom CSS styles or JS code into the page before generating the PDF.</p></div>
        <div className={styles.detail}><h3>Page Format</h3><p>Choose from a set of different paper format sizes.</p></div>
      </section>
      <section className={styles.infoSection}>
        <h2>How does it work?</h2>
        <p>We use a real browser to render the page, wait for it to load, and then generate a PDF. You get a high-quality document instantly.</p>
        <ul>
          <li>Paste your URL and click Generate PDF.</li>
          <li>Our backend loads the page and generates a PDF.</li>
          <li>The PDF is available for download or embedding immediately.</li>
        </ul>
      </section>
      <section className={styles.infoSection}>
        <h2>Why not run my own solution?</h2>
        <p>Running browsers at scale is hard. We handle all the infrastructure, scaling, and delivery so you can focus on your product.</p>
        <ul>
          <li>No code to maintain, no servers to deploy.</li>
          <li>Optimized hardware and browser settings for every request.</li>
          <li>Edge delivery for fast, global access.</li>
        </ul>
      </section>
      <section className={styles.infoSection + ' ' + styles.qa}>
        <h2>Product Information</h2>
        <div>
          <div className={styles.faqCard}>
            <div className={styles.faqQuestion}>What is it?</div>
            <div className={styles.faqAnswer}>An easy way to generate a PDF from any webpage using the RanBOT API.</div>
          </div>
          <div className={styles.faqCard}>
            <div className={styles.faqQuestion}>How does it work?</div>
            <div className={styles.faqAnswer}>We use a real browser to load the page and generate a PDF, delivered instantly.</div>
          </div>
          <div className={styles.faqCard}>
            <div className={styles.faqQuestion}>Why use this service?</div>
            <div className={styles.faqAnswer}>Save time and resources by letting us handle the browser automation and delivery for you.</div>
          </div>
          <div className={styles.faqCard}>
            <div className={styles.faqQuestion}>Is it secure?</div>
            <div className={styles.faqAnswer}>Each request is isolated, and no data is shared between requests. Your data is handled securely.</div>
          </div>
          <div className={styles.faqCard}>
            <div className={styles.faqQuestion}>Can I customize the PDF?</div>
            <div className={styles.faqAnswer}>Yes! You can set delay, scale, orientation, CSS/JS, and more.</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PDFPage;