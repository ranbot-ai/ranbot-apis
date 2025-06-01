import React, { useState, useEffect } from 'react';
import styles from './MetaPage.module.css';
import { usePageMeta } from '../components/usePageMeta';
import { toast } from 'react-toastify';
import { API_URL } from '../utils/constants';

const META_FIELDS = [
  'author', 'audio', 'date', 'description', 'iframe', 'image',
  'lang', 'logo', 'publisher', 'title', 'url', 'video'
];

const MetaChecklist: React.FC<{ meta: any }> = ({ meta }) => {
  return (
    <div className={styles.checklist}>
      {META_FIELDS.map(field => (
        <div key={field} className={styles.checkItem}>
          {meta && meta[field] ? (
            <span className={styles.checkIcon}>&#10003;</span>
          ) : (
            <span className={styles.checkIconEmpty} />
          )}
          <span className={styles.checkLabel}>{field}</span>
        </div>
      ))}
    </div>
  );
};

const MetaPage: React.FC = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [meta, setMeta] = useState<any>(null);
  const [copied, setCopied] = useState(false);

  usePageMeta('Mate | RanBOT', 'Extract meta tags, Open Graph, Twitter cards, and more from any website instantly with RanBOT.');

  useEffect(() => {
    document.title = 'Mate | RanBOT';
  }, []);

  const handleCopy = async () => {
    if (meta) {
      await navigator.clipboard.writeText(JSON.stringify(meta, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    }
  };

  const validateAndSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!url) {
      toast.error("Please enter a URL");
    } else if (!url.startsWith('http://') && !url.startsWith('https://')) {
      toast.error("Please enter a valid URL including http:// or https://");
    } else {
      fetchMetaData(event);
    }
  };

  const fetchMetaData = async (e: React.FormEvent) => {
    setLoading(true);
    setMeta(null);
    try {
      const response = await fetch(`${API_URL}/api/meta?url=${encodeURIComponent(url)}`);
      if (!response.ok) toast.error('Failed to extract meta');
      const data = await response.json();
      setMeta(data);
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className='hero heroBackgroundImage'>
        <h1 className='heroTitle'>Unified Metadata</h1>
        <p className='heroDescription'>
          Meta tags are the HTML elements that define the metadata of a webpage.
          <br />
          This tool allows you to extract the meta tags from a webpage and see them in a structured format.
        </p>
        <form className={styles.metaForm} onSubmit={validateAndSubmit}>
          <input
            type="text"
            value={url}
            onChange={e => setUrl(e.target.value)}
            placeholder="Paste your URL (e.g. https://example.com)"
          />
          <button type="submit" disabled={loading}>{loading ? 'Extracting...' : 'Extract Meta'}</button>
        </form>
      </section>

      <div className={styles.metaLayout}>
        <div className={styles.metaMain}>
          <div className={styles.metaPreview}>
            {loading && <div className={styles.spinner}></div>}
            {meta && (
              <div className={styles.copyBar}>
                <button className={styles.copyButton} onClick={handleCopy} type="button">
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            )}
            {meta && (
              <pre className={styles.metaCode}>{JSON.stringify(meta, null, 2)}</pre>
            )}
          </div>
        </div>
        <div className={styles.metaSidebar}>
          <MetaChecklist meta={meta} />
        </div>
      </div>
    </div>
  );
};

export default MetaPage;