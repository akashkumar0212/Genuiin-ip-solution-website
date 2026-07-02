import React from 'react';
import { Globe, Search, FileText, CheckCircle, Eye, ShieldAlert, RefreshCw } from 'lucide-react';

export const GeographicalIndication = () => {
  const services = [
    { title: 'Geographical Filing & Registration', desc: 'Secure legal recognition for products whose unique quality or reputation is attributable directly to their geographical origin.', icon: <FileText size={20} /> },
    { title: 'Office Action Responses', desc: 'Prepare statutory arguments and documentation to resolve objections from registrars regarding regional boundary definitions.', icon: <CheckCircle size={20} /> },
    { title: 'Geographical Watch', desc: 'Monitor active markets to ensure unauthorized entities do not exploit protected geographical names or misrepresent origins.', icon: <Eye size={20} /> },
    { title: 'Opposition Proceedings', desc: 'Defend geographic designations and contest registrations by third-parties seeking to register identical or confusingly similar markings.', icon: <ShieldAlert size={20} /> },
    { title: 'Renewal & Maintenance', desc: 'Handle regular maintenance and filings to extend validity and preserve protected geographical indications (GI) indefinitely.', icon: <RefreshCw size={20} /> }
  ];

  return (
    <div className="container section-padding fade-in-up">
      <div style={{ marginBottom: '48px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--brand-gold-dark)', fontWeight: '600', fontSize: '13px', textTransform: 'uppercase', marginBottom: '12px' }}>
          <Globe size={16} /> IP Service Detail
        </div>
        <h1 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '16px' }}>Geographical Indication</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '800px', lineHeight: '1.6' }}>
          Genuiin IP Solutions provides Geographical Indication (GI) services for the protection of products of a particular origin having certain qualities, reputations, or other characteristics which are essentially attributable to their geographical origin.
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
  );
};
export default GeographicalIndication;
