import React, { useEffect } from 'react';
import legalStyles from './LegalPage.module.css';

const PrivacyPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Privacy Policy | RanBOT';
  }, []);

  return (
    <main>
      <div className='hero heroBackgroundImage'>
        <h1 className='heroTitle'>Privacy Policy</h1>
        <p className='heroDescription'>
          Your privacy is our priority. This page explains what data we collect, how we use it, and your rights as a RanBOT user. We are committed to transparency and security.
        </p>
      </div>
      <div className={legalStyles.legalContainer}>
        <section className={legalStyles.legalSection}>
          <div className={legalStyles.legalSectionTitle}>What We Collect</div>
          <ul>
            <li><strong>Basic usage data:</strong> We log anonymized IP addresses, browser/device info, and pages visited for analytics and security.</li>
            <li><strong>Account & payments:</strong> If you sign up or pay, we collect your email and payment details to process your order and provide support.</li>
            <li><strong>API usage:</strong> We log API requests for error detection, performance, and to improve our service.</li>
          </ul>
        </section>
        <section className={legalStyles.legalSectionAlt}>
          <div className={legalStyles.legalSectionTitle}>How We Use Your Data</div>
          <ul>
            <li>To provide, maintain, and improve our services.</li>
            <li>To process payments and manage your account.</li>
            <li>To analyze usage, detect errors, and prevent abuse.</li>
            <li>To comply with legal obligations and protect your rights.</li>
          </ul>
        </section>
        <section className={legalStyles.legalSection}>
          <div className={legalStyles.legalSectionTitle}>Your Rights & Choices</div>
          <ul>
            <li>You can request access to, correction, or deletion of your personal data at any time.</li>
            <li>You can withdraw consent for data processing (where applicable).</li>
            <li>We will notify you of any significant changes to this policy.</li>
          </ul>
        </section>
        <section className={legalStyles.legalSectionAlt}>
          <div className={legalStyles.legalSectionTitle}>Data Security</div>
          <ul>
            <li>We use industry-standard security measures to protect your data.</li>
            <li>No method of transmission or storage is 100% secure—use strong passwords and keep your account confidential.</li>
          </ul>
        </section>
        <section className={legalStyles.legalSection}>
          <div className={legalStyles.legalSectionTitle}>Third-Party Links</div>
          <ul>
            <li>Our website may link to external sites. We are not responsible for their privacy practices or content. Please review their policies if you visit those sites.</li>
          </ul>
        </section>
        <section className={legalStyles.legalSectionAlt}>
          <div className={legalStyles.legalSectionTitle}>Contact & Updates</div>
          <ul>
            <li>Have questions or concerns? Reach out to our team anytime at <a href="mailto:support@ranbot.online" style={{color:'#4f46e5'}}>support@ranbot.online</a>.</li>
            <li>This policy may be updated from time to time. Continued use of RanBOT means you accept the latest version.</li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPage;