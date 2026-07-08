import React, { useState } from 'react';
import SEO from "../components/SEO";
import { MessageSquare, Mail, Send, CheckCircle2, Clock } from 'lucide-react';

export const Helpline = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <>
    <SEO
    title="IP Helpline"
    description="Speak with experienced Intellectual Property professionals for expert guidance."
    />
    <div className="container section-padding fade-in-up">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '60px', alignItems: 'flex-start' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--brand-gold-dark)', fontWeight: '600', fontSize: '13px', textTransform: 'uppercase', marginBottom: '12px' }}>
            <MessageSquare size={16} /> Free Advisory Service
          </div>
          <h1 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '20px' }}>IPR Helpline</h1>
          
          <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.7', marginBottom: '16px' }}>
            Do you have an intellectual property query? Genuiin IP Solutions provides first-line assistance on Intellectual Property Rights (IPRs) related queries in accordance with Indian IP legislation and practices.
          </p>

          <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '24px', display: 'flex', gap: '16px', marginBottom: '24px' }}>
            <Clock size={24} color="var(--brand-gold-dark)" style={{ flexShrink: 0 }} />
            <div>
              <h4 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '4px' }}>Free of Charge & Fast Response</h4>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Our helpline service is completely free and committed to responding to your queries within <strong>3 working days</strong>.</p>
            </div>
          </div>

          <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
            You can write to us directly at <a href="mailto:helpline@genuiin-ip.com" style={{ fontWeight: '600', color: 'var(--brand-gold-dark)' }}>helpline@genuiin-ip.com</a> or use the query assistant form to outline your enquiry.
          </p>
        </div>

        {/* Query Assistant Form */}
        <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', padding: '40px' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', padding: '20px 0' }}>
              <CheckCircle2 size={56} color="var(--brand-gold-dark)" />
              <div>
                <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '8px' }}>Query Submitted</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  Thank you for contacting our IPR helpline. A copy of your query has been logged. Our specialists will review the legal parameters and email you within 3 working days.
                </p>
              </div>
              <button className="btn btn-secondary" style={{ width: '200px' }} onClick={() => setSubmitted(false)}>
                Submit Another Query
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '700', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>
                Helpline Query Form
              </h3>

              <div className="form-group">
                <label className="form-label" htmlFor="help-name">Your Name *</label>
                <input 
                  type="text" 
                  id="help-name"
                  className="form-input" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Jane Smith"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="help-email">Your E-mail *</label>
                <input 
                  type="email" 
                  id="help-email"
                  className="form-input" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jane@example.com"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="help-subject">Subject / Area of IPR *</label>
                <input 
                  type="text" 
                  id="help-subject"
                  className="form-input" 
                  required 
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Patent Filing Timeline / Trademark search query"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="help-message">Describe Your Query in Detail *</label>
                <textarea 
                  id="help-message"
                  className="form-input" 
                  required 
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please specify technological area, invention draft status, or branding logo name..."
                  style={{ resize: 'vertical' }}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ display: 'flex', gap: '8px', alignSelf: 'flex-start' }} disabled={loading}>
                {loading ? 'Sending...' : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
    </>
  );
};
export default Helpline;
