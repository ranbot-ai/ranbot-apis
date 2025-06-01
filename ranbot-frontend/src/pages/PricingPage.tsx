import React, { useEffect } from 'react';
import styles from './PricingPage.module.css';

const PRICING_FAQ = [
  {
    q: 'Is there a free trial for Pro or Enterprise?',
    a: 'Yes! All new users start on the Free plan and can upgrade anytime. Contact us for a custom Enterprise trial.'
  },
  {
    q: 'Can I upgrade, downgrade, or cancel anytime?',
    a: 'Absolutely. You can change your plan at any time from your dashboard. No long-term contracts.'
  },
  {
    q: 'What payment methods are accepted?',
    a: 'We accept all major credit cards. For Enterprise, we also support invoicing and wire transfers.'
  },
  {
    q: 'Are there custom plans or discounts for nonprofits?',
    a: 'Yes! Contact us for custom plans, volume pricing, or nonprofit discounts.'
  },
  {
    q: 'Is my data secure?',
    a: 'All plans include enterprise-grade security, encryption, and privacy compliance.'
  }
];

const PricingPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Pricing | RanBOT';
  }, []);

  return (
    <main>
      <section className='hero heroBackgroundImage'>
        <h1 className='heroTitle'>Simple, Transparent Pricing</h1>
        <p className='heroDescription'>
          Start for free. Upgrade as you grow. No hidden fees, no surprises—just powerful web data tools for every team.
        </p>
      </section>

      <section className={styles.pricingSection}>
        <h2 className={styles.pricingTitle}>Choose Your Plan</h2>
        <div className={styles.pricing}>
          <div className={styles.plan}>
            <h3>Free</h3>
            <div className={styles.price}>$0</div>
            <ul>
              <li>100 pages/month</li>
              <li>Basic web extraction</li>
              <li>AI-powered summaries</li>
              <li>Email support</li>
            </ul>
            <button className={styles.ctaButton} disabled>Current Plan</button>
          </div>
          <div className={styles.plan}>
            <h3>Pro</h3>
            <div className={styles.price}>$29/mo</div>
            <ul>
              <li>10,000 pages/month</li>
              <li>Advanced extraction & analytics</li>
              <li>Custom summary models</li>
              <li>Priority support</li>
            </ul>
            <button className={styles.ctaButton}>Upgrade to Pro</button>
          </div>
          <div className={styles.plan}>
            <h3>Enterprise</h3>
            <div className={styles.price}>Contact Us</div>
            <ul>
              <li>Unlimited usage</li>
              <li>Dedicated infrastructure</li>
              <li>Custom integrations</li>
              <li>SLAs & compliance</li>
            </ul>
            <button className={styles.ctaButton}>Contact Sales</button>
          </div>
        </div>

        <div style={{textAlign:'center', marginTop:32, color:'#888', fontSize:'1.08rem'}}>
          All plans include enterprise-grade security, privacy, and access to all core APIs.<br />
          Need a custom plan or higher volume? <a href="mailto:support@ranbot.online" style={{color:'#4f46e5', textDecoration:'underline'}}>Contact us</a>.
        </div>
      </section>

      <section className={styles.faq}>
        <h2 style={{textAlign:'center', color:'#4f46e5', fontSize:'2rem', margin:'0 0 2rem 0'}}>Pricing FAQ</h2>
        {PRICING_FAQ.map((item, i) => (
          <div className={styles.faqItem} key={i}>
            <h4>{item.q}</h4>
            <p>{item.a}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default PricingPage;