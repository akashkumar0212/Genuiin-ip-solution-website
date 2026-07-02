import React from 'react';
import { AlertTriangle } from 'lucide-react';

export const Disclaimer = () => {
  return (
    <div className="container section-padding fade-in-up" style={{ maxWidth: '800px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', color: 'var(--brand-gold-dark)' }}>
          <AlertTriangle size={24} />
        </div>
        <h1 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '12px' }}>Disclaimer</h1>
        <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', textTransform: 'uppercase', fontWeight: '600' }}>Legal Notice</span>
      </div>

      <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', padding: '40px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
        <p style={{ marginBottom: '20px' }}>
          Genuiin-ip.com and its associated websites provide information based on sources believed to be correct and reliable. Users are responsible for seeking the advice of professionals, as appropriate, regarding the information, opinions, advice, or content available at Genuiin IP Solutions.
        </p>
        <p style={{ marginBottom: '20px' }}>
          Genuiin IP Solutions makes no representations and disclaims all warranties, whether express, implied, or statutory, including but not limited to warranties as to accuracy, reliability, usefulness, completeness, merchantability, or fitness of information for any particular purpose, non-infringement, and any damages ensuing thereby.
        </p>
        <p>
          In no event shall Genuiin IP Solutions or its founders, directors, officers, agents, employees, or content providers be liable for any direct, indirect, special, incidental, exemplary, punitive, or consequential damages, whether or not advised of the possibility of such damages including without limitation, those pertaining to lost profits to any Genuiin IP Solutions LLP subscriber, participant, customer, or other person or entity for furnishing of information or arising from the contents/use of this website.
        </p>
      </div>
    </div>
  );
};
export default Disclaimer;
