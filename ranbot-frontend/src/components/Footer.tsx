/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <div className={styles.footerCol}>
        <h4>RanBOT</h4>
        <ul>
          <li><Link to="/pricing">Pricing</Link></li>
        </ul>
      </div>
      <div className={styles.footerCol}>
        <h4>Our Services</h4>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/logo">Logo</Link></li>
          <li><Link to="/screenshot">Screenshot</Link></li>
          <li><Link to="/insights">Insights</Link></li>
          <li><Link to="/meta">Meta</Link></li>
          <li><Link to="/pdf">PDF</Link></li>
        </ul>
      </div>
      <div className={styles.footerCol}>
        <h4>Company</h4>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/privacy">Privacy Policy</Link></li>
          <li><Link to="/terms">Terms of Service</Link></li>
        </ul>
      </div>
      <div className={styles.footerCol}>
        <h4>Follow Us</h4>
        <div className={styles.footerSocial}>
          <a href="https://x.com/RanbotAI" target="_blank" aria-label="X"><svg width="1.5em" height="1.5em"
              viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                fill="currentColor" />
            </svg></a>
          <a href="https://linkedin.com/company/ranbot-ai" target="_blank" aria-label="LinkedIn"><svg width="1.5em" height="1.5em"
              viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"
                fill="currentColor" />
            </svg></a>
          <a href="https://github.com/ranbot-ai" target="_blank" aria-label="GitHub"><svg width="1.5em" height="1.5em"
              viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.18 9.18 0 0 1 2.5-.34c.85 0 1.7.11 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"
                fill="currentColor" />
            </svg></a>
        </div>
      </div>
    </div>
    <div className={styles.footerBottom}>
      &copy; {new Date().getFullYear()} RanBOT. All rights reserved.
    </div>
  </footer>
);

export default Footer;