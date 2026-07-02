import React, { useState } from 'react';
import { Mail, Phone, MapPin, Landmark, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

export const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
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
    <div className="container section-padding fade-in-up">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '60px', alignItems: 'flex-start' }}>
        
        {/* Left Side: Info */}
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--brand-gold-dark)', fontWeight: '600', fontSize: '13px', textTransform: 'uppercase', marginBottom: '12px' }}>
            <Landmark size={16} /> Get In Touch
          </div>
          <h1 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '24px' }}>Contact Us</h1>
          
          <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.7', marginBottom: '32px' }}>
            Have a project, a case, or an invention you'd like to protect? Get in touch with our Delhi office to connect with IPR agents and attorneys.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--brand-gold-dark)' }}>
                <MapPin size={20} style={{ margin: 'auto' }} />
              </div>
              <div>
                <h4 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '4px' }}>India Office (Registered Address)</h4>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                  J-16, Ground Floor, Vishnu Garden,<br />
                  New Delhi, India - 110018
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--brand-gold-dark)' }}>
                <Phone size={20} style={{ margin: 'auto' }} />
              </div>
              <div>
                <h4 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '4px' }}>Phone Contact</h4>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                  +91-9160775550
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--brand-gold-dark)' }}>
                <Mail size={20} style={{ margin: 'auto' }} />
              </div>
              <div>
                <h4 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '4px' }}>Electronic Mail</h4>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                  <a href="mailto:info@genuiin-ip.com" style={{ color: 'var(--brand-gold-dark)', fontWeight: '600' }}>info@genuiin-ip.com</a>
                </p>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div style={{ height: '200px', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--text-tertiary)', gap: '8px' }}>
            <MapPin size={32} />
            <span style={{ fontSize: '13px', fontWeight: '500' }}>New Delhi, India</span>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', padding: '40px' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', padding: '30px 0' }}>
              <CheckCircle2 size={56} color="var(--brand-gold-dark)" />
              <div>
                <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '8px' }}>Thank You!</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  Your message has been sent successfully. A legal consultant will contact you back using your submitted email coordinate within 24 hours.
                </p>
              </div>
              <button className="btn btn-secondary" style={{ width: '200px' }} onClick={() => setSubmitted(false)}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '700', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>
                Contact Inquiry Form
              </h3>

              <div className="form-group">
                <label className="form-label" htmlFor="con-name">Your Full Name *</label>
                <input 
                  type="text" 
                  id="con-name"
                  className="form-input" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="con-email">Your E-mail Address *</label>
                <input 
                  type="email" 
                  id="con-email"
                  className="form-input" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="con-subject">Subject / Matter of Interest *</label>
                <input 
                  type="text" 
                  id="con-subject"
                  className="form-input" 
                  required 
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Patent Filing consultation / Trademark Opposition query"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="con-message">Your Comments / Inquiry Details *</label>
                <textarea 
                  id="con-message"
                  className="form-input" 
                  required 
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Detail your requirements..."
                  style={{ resize: 'vertical' }}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ display: 'flex', gap: '8px', alignSelf: 'flex-start', marginTop: '10px' }} disabled={loading}>
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
  );
};
export default ContactUs;
