import React from 'react';
import SEO from "../components/SEO";
import { CopyrightIcon, Search, FileCode, CheckCircle, Eye, ShieldAlert } from 'lucide-react';

export const Copyright = () => {
  const services = [
    { title: 'Copyright Search', desc: 'Verify ownership credentials and search existing databases to prevent duplication before submitting registration filings.', icon: <Search size={20} /> },
    { title: 'Filing & Registration', desc: 'Secure original authorship filings for literary, dramatic, musical, artistic, cinematographic, or software-based works.', icon: <FileCode size={20} /> },
    { title: 'Office Action Responses', desc: 'Address objections or discrepancies flagged by the copyright registrar to clear applications for registration.', icon: <CheckCircle size={20} /> },
    { title: 'Copyright Watch Services', desc: 'Proactively monitor active marketplaces and online platforms to detect copyright violations and piracy.', icon: <Eye size={20} /> },
    { title: 'Opposition Proceedings', desc: 'Filing counter-statements, handling ownership disputations, and managing contest hearings.', icon: <ShieldAlert size={20} /> }
  ];

  return (
    <>
    <SEO
    title="Copyright Registration in India"
    description="Copyright registration services for software, books, music, artwork, architecture, and digital content."
    keywords="Copyright Registration India, Software Copyright, Copyright Protection, Copyright Lawyer"
    />
    <div className="container section-padding fade-in-up">
      <div style={{ marginBottom: '48px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--brand-gold-dark)', fontWeight: '600', fontSize: '13px', textTransform: 'uppercase', marginBottom: '12px' }}>
          <CopyrightIcon size={16} /> IP Service Detail
        </div>
        <h1 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '16px' }}>Copyright Solutions</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '800px', lineHeight: '1.6' }}>
          Genuiin IP Solutions proposes copyright services for the protection of original works including literary, dramatic, musical, artistic, but not limited to it. Our Copyright team understands client needs and acts accordingly.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
        {services.map((svc, idx) => (
          <div key={idx} style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '32px', transition: 'all 0.3s' }} onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--brand-gold)'; e.currentTarget.style.transform = 'translateY(-3px)'; }} onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.transform = 'none'; }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: 'var(--bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-brown)', marginBottom: '20px' }}>
              {svc.icon}
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>{svc.title}</h3>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{svc.desc}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};
export default Copyright;
