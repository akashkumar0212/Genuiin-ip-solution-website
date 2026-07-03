import React from 'react';
import { Award, Search, FileText, CheckCircle, Clock, ShieldAlert } from 'lucide-react';
import { FaTrademark } from "react-icons/fa6";

export const Trademark = () => {
  const services = [
    {
      title: 'Trademark Search',
      desc: 'Comprehensive searching to verify trademark availability. We offer three tiers of search based on client urgency: Standard Search, Express Search, and Urgent Search.',
      icon: <Search size={20} />
    },
    {
      title: 'Filing & Registration',
      desc: 'Preparation and filing of trademark applications locally and internationally to secure exclusive rights to your names, logos, and taglines.',
      icon: <FileText size={20} />
    },
    {
      title: 'Office Action Responses',
      desc: 'Crafting legal responses and arguments against objections raised by registrar examiners during the examination process.',
      icon: <CheckCircle size={20} />
    },
    {
      title: 'Statement of Use & Affidavits',
      desc: 'Filing declaration statements, affidavits of use, and evidentiary proofs to keep trademark registrations active.',
      icon: <Clock size={20} />
    },
    {
      title: 'Maintenance & Renewal',
      desc: 'Tracking and executing renewal filings and maintenance payments to guarantee perpetual trademark protections.',
      icon: <Award size={20} />
    },
    {
      title: 'Trademark Watch & Oppositions',
      desc: 'Monitoring trademark gazettes to identify conflicting marks and representing clients in opposition proceedings.',
      icon: <ShieldAlert size={20} />
    }
  ];

  return (
    <div className="container section-padding fade-in-up">
      <div style={{ marginBottom: '48px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--brand-gold-dark)', fontWeight: '600', fontSize: '13px', textTransform: 'uppercase', marginBottom: '12px' }}>
          <FaTrademark size={16} /> IP Service Detail
        </div>
        <h1 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '16px' }}>Trademark Solutions</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '800px', lineHeight: '1.6' }}>
          Genuiin IP Solutions suggests a wide variety of trademark services to its clients to achieve their requirements and business goals, advising them with the right approach. Our Trademark team consists of well-skilled trademark attorneys & agents who assist in the registration of clients' marks and make them aware of potential uses.
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
export default Trademark;
