import React, { useState } from 'react';
import { MessageSquare, X, Send, CheckCircle2 } from 'lucide-react';

export const FeedbackWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    query: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.query) return;

    setLoading(true);
    // Mock API submission delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', contact: '', query: '' });
    }, 1000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={`feedback-widget ${isOpen ? 'active' : ''}`}>
      <button 
        className="feedback-trigger" 
        onClick={() => {
          setIsOpen(!isOpen);
          if (submitted) setSubmitted(false);
        }}
        aria-label="Toggle helpline form"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      <div className="feedback-panel">
        {submitted ? (
          <div style={{ textAlign: 'center', padding: '16px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <CheckCircle2 size={48} color="var(--brand-gold-dark)" />
            <h4 style={{ fontFamily: 'Outfit', fontSize: '18px', fontWeight: '700' }}>Thank You!</h4>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
              Your feedback/query has been submitted successfully. Our team will get back to you shortly.
            </p>
            <button 
              className="btn btn-secondary" 
              style={{ width: '100%', marginTop: '8px', padding: '8px' }}
              onClick={() => {
                setSubmitted(false);
                setIsOpen(false);
              }}
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>
              <h4 style={{ fontFamily: 'Outfit', fontSize: '16px', fontWeight: '700' }}>Quick Inquiry Helpline</h4>
              <span style={{ fontSize: '11px', color: 'var(--brand-gold-dark)', fontWeight: '600', textTransform: 'uppercase' }}>Free Assistance</span>
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="feed-name">Your Name *</label>
              <input 
                type="text" 
                id="feed-name"
                name="name" 
                className="form-input" 
                required 
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="feed-email">Your E-mail *</label>
              <input 
                type="email" 
                id="feed-email"
                name="email" 
                className="form-input" 
                required 
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="feed-contact">Contact No.</label>
              <input 
                type="tel" 
                id="feed-contact"
                name="contact" 
                className="form-input" 
                value={formData.contact}
                onChange={handleChange}
                placeholder="+1 (555) 019-2834"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="feed-query">Your Comments/Queries *</label>
              <textarea 
                id="feed-query"
                name="query" 
                className="form-input" 
                required 
                rows="3"
                value={formData.query}
                onChange={handleChange}
                placeholder="Tell us about your IP protection needs..."
                style={{ resize: 'none' }}
              />
            </div>

            <button 
              type="submit" 
              className="btn btn-primary" 
              style={{ width: '100%', marginTop: '8px', padding: '10px 16px', fontSize: '14px' }}
              disabled={loading}
            >
              {loading ? 'Submitting...' : (
                <>
                  Submit Query <Send size={14} />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
