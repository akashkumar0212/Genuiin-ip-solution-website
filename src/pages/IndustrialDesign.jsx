import React from 'react';
import SEO from "../components/SEO";
import { Layers, Search, FileText, CheckCircle, RefreshCw, Eye, ShieldAlert } from 'lucide-react';

export const IndustrialDesign = () => {
  const services = [
    { title: 'Design Search', desc: 'Pre-filing searches to verify that the shape, configuration, or pattern applied to the article is novel and has not been registered previously.', icon: <Search size={20} /> },
    { title: 'Filing & Registration', desc: 'Securing structural designs and ornamental drawings in two or three-dimensional formats matching registrar criteria.', icon: <FileText size={20} /> },
    { title: 'Office Action Responses', desc: 'Resolving objections raised by design registries regarding distinctiveness or category classifications.', icon: <CheckCircle size={20} /> },
    { title: 'Maintenance & Renewals', desc: 'Monitoring timeline deadlines to extend design protections (usually up to 15 years in India).', icon: <RefreshCw size={20} /> },
    { title: 'Design Watch Services', desc: 'Keeping track of newly published designs in the marketplace to identify potential copycats or infringers.', icon: <Eye size={20} /> },
    { title: 'Opposition Proceedings', desc: 'Filing representation petitions and managing claims to contest infringing applications.', icon: <ShieldAlert size={20} /> }
  ];

  return (
    <>
    <SEO
    title="Industrial Design Registration in India"
    description="Protect your product designs with Industrial Design Registration and Design Protection services."
    keywords="Industrial Design Registration, Design Registration India, Design Protection,	Product Design Registration"
    />
    <div className="container section-padding fade-in-up">
      <div style={{ marginBottom: '48px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--brand-gold-dark)', fontWeight: '600', fontSize: '13px', textTransform: 'uppercase', marginBottom: '12px' }}>
          <Layers size={16} /> IP Service Detail
        </div>
        <h1 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '16px' }}>Industrial Design</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '800px', lineHeight: '1.6' }}>
          Genuiin IP Solutions advises its clients on the protection of Industrial Designs, which refers to features of shape, configuration, pattern, ornamentation, or composition of lines or colors applied to any article, whether in two-dimensional or three-dimensional (or both) forms. Our Design team is expert to emphasize client desires and act accordingly.
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
export default IndustrialDesign;
