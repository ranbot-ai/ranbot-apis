import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'RanBOT – Unlock Web Data Instantly';
  }, []);

  return (
    <>
      <header className={styles.hero} id="about">
        <div className={styles.heroContent}>
          <h1>Unlock Web Data. Instantly.</h1>
          <p className={styles.heroSubtitle} style={{marginTop: '5rem'}}>
            RanBOT lets you interact with any webpage <br />
            as an API—extract content, metadata, screenshots,
            <br /> and AI-powered insights in one click.
          </p>
        </div>
      </header>
      <section id="features" className={styles.featuresSection}>
        <h2>Why Choose RanBOT?</h2>
        <div className={styles.featureGroup}>
          <div className={styles.feature}>
            <h3>Browser as API</h3>
            <p>Interact with any webpage programmatically—click, scroll, fill forms, and more—just like a real user, but automated.</p>
          </div>
          <div className={styles.feature}>
            <h3>Flexible API</h3>
            <p>Integrate RanBOT into your workflow with a simple, robust API. Works with any language or platform.</p>
          </div>
          <div className={styles.feature}>
            <h3>Scalable &amp; Reliable</h3>
            <p>Built on a global edge network for high availability, low latency, and enterprise-grade reliability.</p>
          </div>
        </div>
        <div className={styles.featureGroup}>
          <div className={styles.feature}>
            <h3>Comprehensive Data Capture</h3>
            <p>Fetch everything: page content, metadata, screenshots, and structured data from any public webpage.</p>
          </div>
          <div className={styles.feature}>
            <h3>Visual Snapshots</h3>
            <p>Instantly capture high-quality screenshots of any webpage for documentation, monitoring, or reporting.</p>
          </div>
          <div className={styles.feature}>
            <h3>Metadata Extraction</h3>
            <p>Retrieve rich metadata (titles, descriptions, keywords, Open Graph, and more) from any page for deeper context and SEO analysis.</p>
          </div>
        </div>
        <div className={styles.featureGroup}>
          <div className={styles.feature}>
            <h3>AI-Powered Summaries</h3>
            <p>Instantly turn raw web data into concise, human-readable summaries using state-of-the-art AI/ML models.</p>
          </div>
          <div className={styles.feature}>
            <h3>Insightful Analytics</h3>
            <p>Go beyond summaries—RanBOT analyzes trends, patterns, and key insights tailored to your needs.</p>
          </div>
          <div className={styles.feature}>
            <h3>Privacy &amp; Security</h3>
            <p>Your data is processed securely and never shared. We comply with industry-leading privacy standards.</p>
          </div>
        </div>
      </section>
      <section id="services" className={styles.servicesSection}>
        <h2>Our Services</h2>
        <div style={{textAlign:'center', color:'#555', fontSize:'1.15rem', margin:'0 0 2.2rem 0'}}>Powerful web data tools for every workflow—no code required.</div>
        <div>
          {/* Logo Service Row */}
          <div className={styles.serviceRow}>
            <div className={styles.serviceLeft}>
              <span className={styles.serviceIcon} aria-label="Logo">🎨</span>
              <span className={styles.serviceName}>Logo</span>
            </div>
            <div style={{flex:1, minWidth:0}}>
              <div className={styles.serviceDesc}>Create or fetch a unique logo for your brand or project in seconds.</div>
              <div className={styles.serviceHighlights}>Instant SVG & PNG output</div>
            </div>
            <div className={styles.serviceAction}>
              <Link to="/logo" className={styles.serviceButton}>Try Logo API</Link>
            </div>
          </div>
          {/* PDF Service Row */}
          <div className={styles.serviceRow}>
            <div className={styles.serviceLeft}>
              <span className={styles.serviceIcon} aria-label="PDF">📄</span>
              <span className={styles.serviceName}>PDF</span>
            </div>
            <div style={{flex:1, minWidth:0}}>
              <div className={styles.serviceDesc}>Generate a PDF from any webpage or HTML content, fully customizable.</div>
              <div className={styles.serviceHighlights}>Custom format & style</div>
            </div>
            <div className={styles.serviceAction}>
              <Link to="/pdf" className={styles.serviceButton}>Try PDF API</Link>
            </div>
          </div>
          {/* Screenshot Service Row */}
          <div className={styles.serviceRow}>
            <div className={styles.serviceLeft}>
              <span className={styles.serviceIcon} aria-label="Screenshot">📸</span>
              <span className={styles.serviceName}>Screenshot</span>
            </div>
            <div style={{flex:1, minWidth:0}}>
              <div className={styles.serviceDesc}>Capture high-quality screenshots of any webpage for documentation, monitoring, or sharing.</div>
              <div className={styles.serviceHighlights}>PNG, instant delivery</div>
            </div>
            <div className={styles.serviceAction}>
              <Link to="/screenshot" className={styles.serviceButton}>Try Screenshot API</Link>
            </div>
          </div>
          {/* Insights Service Row */}
          <div className={styles.serviceRow}>
            <div className={styles.serviceLeft}>
              <span className={styles.serviceIcon} aria-label="Insights">📊</span>
              <span className={styles.serviceName}>Insights</span>
            </div>
            <div style={{flex:1, minWidth:0}}>
              <div className={styles.serviceDesc}>Get actionable insights and performance metrics from any webpage, powered by AI.</div>
              <div className={styles.serviceHighlights}>SEO, speed, and more</div>
            </div>
            <div className={styles.serviceAction}>
              <Link to="/insights" className={styles.serviceButton}>Try Insights API</Link>
            </div>
          </div>
          {/* Meta Service Row */}
          <div className={styles.serviceRow}>
            <div className={styles.serviceLeft}>
              <span className={styles.serviceIcon} aria-label="Meta">🔖</span>
              <span className={styles.serviceName}>Meta</span>
            </div>
            <div style={{flex:1, minWidth:0}}>
              <div className={styles.serviceDesc}>Extract all meta tags and metadata for SEO, sharing, and compliance.</div>
              <div className={styles.serviceHighlights}>Open Graph, Twitter, and more</div>
            </div>
            <div className={styles.serviceAction}>
              <Link to="/meta" className={styles.serviceButton}>Try Meta API</Link>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.faq} id="faq">
        <h2>Frequently Asked Questions</h2>
        <p style={{textAlign:'center', color:'#555', fontSize:'1.08rem', margin:'0 0 1.5rem 0'}}>Everything you need to know about RanBOT and our services.</p>
        <ul style={{listStyle:'none', padding:0, margin:0}}>
          <li className={styles.faqItem}>
            <strong>What is RanBOT?</strong>
            <div>RanBOT is a cloud service that uses a browser-as-an-API to interact with any public webpage, fetch all available data (including metadata, screenshots, and content), and uses AI/ML to summarize and analyze it for actionable insights.</div>
          </li>
          <li className={styles.faqItem}>
            <strong>What types of data can RanBOT fetch?</strong>
            <div>RanBOT can extract page content, metadata, screenshots, and structured data from any public webpage, then summarize and analyze it using AI.</div>
          </li>
          <li className={styles.faqItem}>
            <strong>How does RanBOT use AI?</strong>
            <div>We leverage advanced natural language processing and machine learning models to turn raw web data into concise summaries and deep analytics.</div>
          </li>
          <li className={styles.faqItem}>
            <strong>Is coding required to use RanBOT?</strong>
            <div>No coding is needed! Use our intuitive dashboard or simple API to get started in minutes.</div>
          </li>
          <li className={styles.faqItem}>
            <strong>What types of websites can RanBOT extract from?</strong>
            <div>RanBOT works with any public webpage, including news, blogs, e-commerce, and more. (We respect robots.txt and legal restrictions.)</div>
          </li>
          <li className={styles.faqItem}>
            <strong>How is my data secured?</strong>
            <div>All data is encrypted in transit and at rest. We never share or sell your data, and comply with leading privacy standards.</div>
          </li>
          <li className={styles.faqItem}>
            <strong>Can I try RanBOT for free?</strong>
            <div>Yes! Our Starter plan is free and lets you extract and summarize up to 100 pages per month.</div>
          </li>
          <li className={styles.faqItem}>
            <strong>How do I get support?</strong>
            <div>Contact us anytime via email or through your dashboard. Pro and Enterprise plans include priority support.</div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default HomePage;