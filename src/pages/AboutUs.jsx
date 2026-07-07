import React from 'react';
import SEO from "../components/SEO";
import { Shield, Sparkles, Clock, DollarSign, Award, ThumbsUp, GitMerge, FileCheck } from 'lucide-react';

export const AboutUs = () => {
  const values = [
    { title: 'Expert Team', desc: 'Highly qualified professionals from premier institutes (IIT, CSIR) combining legal and analytical backgrounds.', icon: <Award size={20} /> },
    { title: 'Confidentiality', desc: 'Stringent security control measures to preserve the privacy of all client research data.', icon: <Shield size={20} /> },
    { title: 'High Quality', desc: 'Momentous technical accuracy and compliance with global patent/trademark standards.', icon: <Sparkles size={20} /> },
    { title: 'Timely Delivery', desc: 'Committed to strictly meeting calendar dates and client timelines.', icon: <Clock size={20} /> },
    { title: 'Cost Effective', desc: 'World-class legal support services priced affordably for startups and corporations.', icon: <DollarSign size={20} /> },
    { title: 'Tailored Solutions', desc: 'Customized analytical and watch strategies structured to serve the client’s best interest.', icon: <ThumbsUp size={20} /> },
    { title: 'Conflict Management', desc: 'Rigorous vetting to ensure clean clearance and representation guidelines.', icon: <GitMerge size={20} /> },
    { title: 'Discount Policies', desc: 'Strategic policies supporting educational universities and scaling businesses.', icon: <FileCheck size={20} /> }
  ];

  return (
    <>
    <SEO
    title="About Genuiin IP Solutions LLP"
    description="Learn about Genuiin IP Solutions LLP, India's trusted Intellectual Property consulting firm."
    keywords="About Genuiin IP Solutions, Patent Attorneys India"
    />
    <div className="container section-padding fade-in-up">
      {/* Intro section */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '60px', alignItems: 'center', marginBottom: '80px' }}>
        <div>
          <h1 style={{ fontSize: '46px', fontWeight: '800', marginBottom: '24px', lineHeight: '1.1' }}>
            Our People Are Our <span className="text-gradient">Greatest Strength</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.8', marginBottom: '20px' }}>
            Genuiin IP Solutions team comprises highly qualified and experienced professionals with inexhaustible skills in diverse multi-disciplinary technical domains from reputed institutes like IIT, CSIR, and premier law universities.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.8' }}>
            Our core team includes IP Attorneys, Registered Patent & Trademark Agents, engineers, medical professionals, and research associates who acquire legal knowledge as well as analytical understandings. We believe in building long-term relationships with clients across the globe.
          </p>
        </div>

        {/* Stats / Highlight Card */}
        <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', padding: '40px', textAlign: 'center' }}>
          <span style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--brand-gold-dark)', display: 'block', marginBottom: '8px' }}>Our Mission</span>
          <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '16px' }}>Client Satisfaction</h2>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '24px' }}>
            "Client’s satisfaction is our only goal. Genuiin IP Solution's working strategies provide utmost contentment to the client with assurance of brilliance and quality in a cost-effective manner under strict data security."
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'space-around', borderTop: '1px solid var(--border-color)', paddingTop: '24px', marginTop: '12px' }}>
            <div>
              <div style={{ fontSize: '32px', fontWeight: '800', color: 'var(--brand-brown)' }} className="text-gradient">2015</div>
              <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', textTransform: 'uppercase', fontWeight: '600' }}>Incorporated</div>
            </div>
            <div>
              <div style={{ fontSize: '32px', fontWeight: '800', color: 'var(--brand-brown)' }} className="text-gradient">100%</div>
              <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', textTransform: 'uppercase', fontWeight: '600' }}>Confidential</div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values grid */}
      <section style={{ borderTop: '1px solid var(--border-color)', paddingTop: '60px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '12px' }}>Our Core Pillars</h2>
          <p style={{ color: 'var(--text-secondary)' }}>How we retain long-term relationships with clients across the globe.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
          {values.map((val, idx) => (
            <div key={idx} style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '24px', transition: 'all 0.3s' }} onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--brand-gold)'} onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>
              <div style={{ width: '38px', height: '38px', borderRadius: '6px', backgroundColor: 'var(--bg-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-gold-dark)', marginBottom: '16px' }}>
                {val.icon}
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '8px' }}>{val.title}</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{val.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
    </>
  );
};
export default AboutUs;
