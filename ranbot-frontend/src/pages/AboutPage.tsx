import React from 'react';
import styles from './AboutPage.module.css';

const TEAM = [
  { name: 'Encore Shao', role: 'CEO & Founder', bio: 'Loves building tools that empower people to do more with web data.' },
  { name: 'Jiaqi Li', role: 'CTO & Co-Founder', bio: 'Passionate about scalable APIs and beautiful user experiences.' },
  { name: 'Yihan Wang', role: 'AI/ML Specialist', bio: 'Turns data into insights and automates the boring stuff.' },
];

const FAQ = [
  { q: 'Who is RanBOT for?', a: 'Anyone who needs fast, reliable web data—developers, analysts, marketers, and teams of all sizes.' },
  { q: 'Is my data secure?', a: 'Yes! We use industry best practices for security and privacy. Each request is isolated and encrypted.' },
  { q: 'Can I contribute?', a: 'Absolutely! Check out our GitHub or contact us to get involved.' },
  { q: 'How do I get support?', a: 'Email support@ranbot.online or open an issue on GitHub. We\'re here to help.' },
];

const AboutPage: React.FC = () => (
  <main>
    <section className='hero heroBackgroundImage'>
      <h1 className='heroTitle'>About RanBOT</h1>
      <p style={{fontSize:'1.18rem', color:'#444', maxWidth:600, margin:'0 auto'}}>Empowering everyone to extract, analyze, and use web data instantly—no hassle, no limits.</p>
    </section>

    <section className={styles.aboutSection}>
      <h2 className={styles.sectionTitle}>Our Mission</h2>
      <p style={{fontSize:'1.08rem', color:'#555', maxWidth:700, margin:'0 auto'}}>We believe web data should be accessible, actionable, and easy for everyone. RanBOT was created to break down barriers—making it simple to capture, transform, and use information from any website, for any purpose.</p>
    </section>

    <section className={styles.aboutSection}>
      <h2 className={styles.sectionTitle}>What We Do</h2>
      <div className={styles.aboutGrid}>
        <div className={styles.aboutCard}>
          <h3>All-in-One Extraction</h3>
          <p>Get content, metadata, screenshots, PDFs, and more from any public webpage—instantly.</p>
        </div>
        <div className={styles.aboutCard}>
          <h3>Actionable Insights</h3>
          <p>Turn raw data into summaries, analytics, and SEO reports with built-in AI/ML tools.</p>
        </div>
        <div className={styles.aboutCard}>
          <h3>Developer Friendly</h3>
          <p>Simple REST API, clear docs, and open-source spirit. Integrate RanBOT into any workflow.</p>
        </div>
        <div className={styles.aboutCard}>
          <h3>Privacy & Security</h3>
          <p>Your data is never shared. We use strong encryption and best practices for every request.</p>
        </div>
      </div>
    </section>

    <section className={styles.aboutSection}>
      <h2 className={styles.sectionTitle}>Meet the Team</h2>
      <div className={styles.teamGrid}>
        {TEAM.map((member, i) => (
          <div className={styles.teamCard} key={i}>
            <div className={styles.teamAvatar} style={{background:'#e0e7ff',display:'inline-block'}}>
              <span role="img" aria-label="avatar" style={{fontSize:'2.2rem',lineHeight:'64px'}}>{member.name.charAt(0)}</span>
            </div>
            <div className={styles.teamName}>{member.name}</div>
            <div className={styles.teamRole}>{member.role}</div>
            <div className={styles.teamBio}>{member.bio}</div>
          </div>
        ))}
      </div>
    </section>

    <section className={styles.aboutSection}>
      <h2 className={styles.sectionTitle}>FAQ</h2>
      {FAQ.map((item, i) => (
        <div className={styles.faqCard} key={i}>
          <div className={styles.faqQuestion}>{item.q}</div>
          <div className={styles.faqAnswer}>{item.a}</div>
        </div>
      ))}
    </section>
  </main>
);

export default AboutPage;