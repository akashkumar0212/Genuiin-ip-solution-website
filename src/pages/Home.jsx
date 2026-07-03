import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, BadgeCheck, Layers, Copyright, Globe, TreeDeciduous, ArrowRight, CheckCircle, HelpCircle, Lock, Cpu, Sparkles } from 'lucide-react';
import { FaTrademark } from "react-icons/fa6";

export const Home = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const services = [
    {
      name: 'Patent Protection',
      desc: 'Genuiin IP Solutions has momentous experience supporting application drafting, filing, and prosecution in compliance with IPO, USPTO, EPO, and WIPO standards.',
      icon: <ShieldAlert size={24} />,
      link: '/services/patent',
      sizeClass: 'bento-card-large'
    },
    {
      name: 'Trademark',
      desc: 'Skilled attorneys assisting in registration, watch, oppositions, and maintaining your marks for potential branding growth.',
      icon: <FaTrademark size={24} />,
      link: '/services/trademark',
      sizeClass: ''
    },
    {
      name: 'Copyright',
      desc: 'Comprehensive copyright search, registration, and watch services for original literary, dramatic, musical, or artistic works.',
      icon: <Copyright size={24} />,
      link: '/services/copyright',
      sizeClass: ''
    },
    {
      name: 'Industrial Design',
      desc: 'Advice and protection for shapes, configurations, patterns, and ornaments applied to articles in 2D or 3D forms.',
      icon: <Layers size={24} />,
      link: '/services/industrial-design',
      sizeClass: ''
    },
    {
      name: 'Geographical Indication',
      desc: 'Filing, watch, and prosecution to protect products of a specific geographical origin possessing a unique reputation or quality.',
      icon: <Globe size={24} />,
      link: '/services/geographical-indication',
      sizeClass: ''
    },
    {
      name: 'Plant Variety Protection',
      desc: 'Dedicated support for protecting and filing new plant varieties in India across 15 eligible crop types under national legislation.',
      icon: <TreeDeciduous size={24} />,
      link: '/services/plant-protection',
      sizeClass: 'bento-card-large'
    }
  ];

  const faqs = [
    {
      q: 'What is Intellectual Property (IP)?',
      a: 'Intellectual Property refers to creations of the mind—such as inventions, literary and artistic works, designs, symbols, names, and images used in commerce. It is legally protected by patents, copyrights, and trademarks, enabling creators to earn recognition or financial benefit from their innovations.'
    },
    {
      q: 'Why should I perform a Patentability Assessment?',
      a: 'A patentability assessment (prior art search) analyzes existing patents and non-patent literature to determine if your invention is novel, non-obvious, and industrially applicable. Performing this search early saves significant money and time by identifying potential conflicts before filing fees are paid.'
    },
    {
      q: 'How does Genuiin IP ensure the confidentiality of our data?',
      a: 'We have stringent control mechanisms and physical/digital security measures to preserve the strict confidentiality and safety of all client information. We operate under strict NDA guidelines to protect all R&D details.'
    },
    {
      q: 'What makes a crop variety eligible for Plant Variety Protection in India?',
      a: 'The plant variety must be novel, distinct, uniform, and stable (DUS). The Central Government has notified specific eligible crop categories (such as wheat, cotton, rice, and pulses) that are qualified for legal registration.'
    }
  ];

  return (
    <div className="fade-in-up">
      {/* Hero Section */}
      <section style={{ position: 'relative', padding: '80px 0 80px 0', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(207, 185, 136, 0.12) 0%, transparent 70%)', zIndex: -1 }}></div>
        <div className="container" style={{ textAlign: 'center' }}>
          {/* <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '50px', backgroundColor: 'var(--brand-gold-light)', border: '1px solid var(--border-color)', marginBottom: '24px' }}> */}
            {/* <Sparkles size={14} color="var(--brand-gold-dark)" /> */}
            {/* <span style={{ fontSize: '12px', fontWeight: '600', color: 'var(--text-secondary)' }}>World-Class IP Support & Research</span> */}
          {/* </div> */}
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: '800', maxWidth: '900px', margin: '0 auto 24px auto', letterSpacing: '-1px' }}>
            Protecting Innovation. <span className="text-gradient">Intellectual Property Rights (IPR) .</span>
          </h1>
          <p style={{ fontSize: 'clamp(16px, 2vw, 19px)', color: 'var(--text-secondary)', lineHeight: '1.7', maxWidth: '750px', margin: '0 auto 40px auto' }}>
            Genuiin IP Solutions LLP provides premium intellectual property research analysis, watch, and litigation support services to corporations, law firms, and research universities globally.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/helpline" className="btn btn-primary">
              Get Free Consultation <ArrowRight size={16} />
            </Link>
            <Link to="/about" className="btn btn-secondary">Learn About Us</Link>
          </div>
        </div>
      </section>

      {/* Services Grid (Bento) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>Core IP Protection Services</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
              We cover the entire lifecycle of IP creation, from preliminary analytical search and filing, to litigation watch and valuation.
            </p>
          </div>

          <div className="bento-grid">
          {services.map((svc, idx) => (
            <Link
              key={idx}
              to={svc.link}
              className={`bento-card ${svc.sizeClass}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div>
                <div className="bento-icon">{svc.icon}</div>

                <h3 className="bento-title">{svc.name}</h3>

                <p className="bento-desc">{svc.desc}</p>
              </div>

              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "13px",
                  fontWeight: "700",
                  color: "var(--brand-gold-dark)",
                  marginTop: "24px",
                }}
              >
                Learn More <ArrowRight size={14} />
              </span>
            </Link>
          ))}
          </div>
        </div>
      </section>

      {/* Trust & Features Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '36px', marginBottom: '24px', lineHeight: '1.2' }}>
                Why Global Innovators Trust Genuiin IP
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '32px' }}>
                We understand the value of intellectual property. We retain long-term relationships with our clients by maintaining rigorous quality standards, confidentiality protocols, and affordable legal costs.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--bg-primary)', display: 'flex', alignItems: 'center', justifycenter: 'center', flexShrink: 0, color: 'var(--brand-gold-dark)' }}>
                    <Lock size={18} style={{ margin: 'auto' }} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px' }}>Stringent Confidentiality</h4>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>We implement robust control mechanisms and safety measures to preserve the privacy of your inventions.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--bg-primary)', display: 'flex', alignItems: 'center', justifycenter: 'center', flexShrink: 0, color: 'var(--brand-gold-dark)' }}>
                    <Cpu size={18} style={{ margin: 'auto' }} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px' }}>Experienced Specialists</h4>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Our team comprises professionals from reputed institutes like IIT, CSIR, and top-tier legal organizations.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--bg-primary)', display: 'flex', alignItems: 'center', justifycenter: 'center', flexShrink: 0, color: 'var(--brand-gold-dark)' }}>
                    <CheckCircle size={18} style={{ margin: 'auto' }} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px' }}>Cost-Effective Quality</h4>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>High-standard drafting, search, and watch deliverables priced competitively for corporate startups and SMEs.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual representation card */}
            <div style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-xl)', padding: '40px', boxShadow: 'var(--shadow-lg)' }}>
              <h3 style={{ fontSize: '22px', marginBottom: '24px' }}>Secure IP Lifecycle Support</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ padding: '16px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
                  <span style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--brand-gold-dark)' }}>Stage 01</span>
                  <h4 style={{ fontSize: '15px', fontWeight: '600', margin: '4px 0' }}>Prior Art Analysis</h4>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Identify novelty thresholds and verify freedom-to-operate parameters before drafting.</p>
                </div>
                
                <div style={{ padding: '16px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
                  <span style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--brand-gold-dark)' }}>Stage 02</span>
                  <h4 style={{ fontSize: '15px', fontWeight: '600', margin: '4px 0' }}>Drafting & Prosecution</h4>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Prepare drawing schematics and claim structures matching IPO/USPTO rules.</p>
                </div>

                <div style={{ padding: '16px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
                  <span style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--brand-gold-dark)' }}>Stage 03</span>
                  <h4 style={{ fontSize: '15px', fontWeight: '600', margin: '4px 0' }}>Renewal & Vigilance Watch</h4>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Ongoing tracking of application deadlines and market infringements.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section-padding">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>Frequently Asked Questions</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Find answers to common questions about intellectual property rights and services.</p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`faq-item ${activeFaq === idx ? 'active' : ''}`}
              >
                <div 
                  className="faq-question" 
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.q}</span>
                  <HelpCircle size={18} style={{ color: activeFaq === idx ? 'var(--brand-gold-dark)' : 'var(--text-tertiary)', transform: activeFaq === idx ? 'scale(1.1)' : 'none', transition: 'all 0.3s' }} />
                </div>
                <div className="faq-answer">
                  <div className="faq-answer-inner">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, var(--brand-brown) 0%, var(--brand-brown-dark) 100%)', color: '#FFF', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: '36px', color: '#FFF', marginBottom: '20px' }}>Ready to Protect Your Intellectual Property?</h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)', lineHeight: '1.6', marginBottom: '32px' }}>
            Our free assistance helpline is committed to answering your initial queries within 3 working days. Share your innovation with our specialists.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/helpline" className="btn btn-primary" style={{ background: '#FFF', color: 'var(--brand-brown-dark)', boxShadow: 'none' }}>
              Connect with IPR Helpline
            </Link>
            <Link to="/contact" className="btn btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#FFF' }}>
              Our Locations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
