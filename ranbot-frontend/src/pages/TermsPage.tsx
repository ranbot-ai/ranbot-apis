import React, { useEffect } from 'react';
import legalStyles from './LegalPage.module.css';

const TermsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Terms of Service | RanBOT';
  }, []);

  return (
    <main>
      <div className='hero heroBackgroundImage'>
        <h1 className='heroTitle'>Terms of Service</h1>
        <p className='heroDescription'>
          Welcome to RanBOT!
          <br />
          By using our website or services, you agree to these terms.
          <br/>
          Please read them carefully—they're designed to be clear, fair, and easy to understand.
        </p>
      </div>

      <div className={legalStyles.legalContainer}>
        <section className={legalStyles.legalSection}>
          <div className={legalStyles.legalSectionTitle}>Using RanBOT</div>
          <ul>
            <li>You may use RanBOT for personal, commercial, or non-commercial purposes.</li>
            <li>Don't misuse, reverse engineer, or remove copyright notices from our service or materials.</li>
            <li>Violation of these terms may result in suspension or termination of your access.</li>
          </ul>
        </section>
        <section className={legalStyles.legalSectionAlt}>
          <div className={legalStyles.legalSectionTitle}>Disclaimer</div>
          <ul>
            <li>RanBOT is provided "as is." We do our best, but can't guarantee accuracy, reliability, or results. Use at your own risk.</li>
          </ul>
        </section>
        <section className={legalStyles.legalSection}>
          <div className={legalStyles.legalSectionTitle}>Limitations of Liability</div>
          <ul>
            <li>RanBOT and its suppliers are not liable for any damages (including loss of data, profit, or business interruption) arising from your use or inability to use our service, even if we have been advised of the possibility of such damages.</li>
          </ul>
        </section>
        <section className={legalStyles.legalSectionAlt}>
          <div className={legalStyles.legalSectionTitle}>Content & Updates</div>
          <ul>
            <li>We may update, change, or remove content on our website at any time without notice.</li>
            <li>We do not guarantee that all information is current, complete, or error-free.</li>
          </ul>
        </section>
        <section className={legalStyles.legalSection}>
          <div className={legalStyles.legalSectionTitle}>Links to Other Sites</div>
          <ul>
            <li>RanBOT may link to external websites. We are not responsible for their content or practices. Visiting those sites is at your own risk.</li>
          </ul>
        </section>
        <section className={legalStyles.legalSectionAlt}>
          <div className={legalStyles.legalSectionTitle}>Changes to These Terms</div>
          <ul>
            <li>We may update these terms at any time. Continued use of RanBOT means you accept the latest version.</li>
          </ul>
        </section>
        <section className={legalStyles.legalSection}>
          <div className={legalStyles.legalSectionTitle}>Governing Law</div>
          <ul>
            <li>These terms are governed by the laws of the European Union. By using RanBOT, you agree to submit to the exclusive jurisdiction of the EU courts.</li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default TermsPage;