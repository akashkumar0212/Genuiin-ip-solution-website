import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="footer-wrap">
      <div className="container">
        <div className="footer-grid">
          <div>
          <Link to="/" className="footer-logo">
            <div className="footer-logo-icon">
              <img src="/Genuiin_logo.jpeg" alt="Genuiin Logo" className="logo-icon" />
            </div>
            <div className="footer-logo-text">
              Genuiin IP <span>Solution LLP</span>
            </div>
          </Link>
            <p className="footer-desc">
              Provides world-class IP research analysis and consultancy services across the globe. 
              Our primary focus is to protect all kinds of Intellectual Property creations to help clients maximize their value.
            </p>
          </div>

          <div>
            <h4 className="footer-heading">IP Services</h4>
            <div className="footer-links">
              <Link to="/services/patent" className="footer-link">Patent protection</Link>
              <Link to="/services/trademark" className="footer-link">Trademark services</Link>
              <Link to="/services/industrial-design" className="footer-link">Industrial Design</Link>
              <Link to="/services/copyright" className="footer-link">Copyright protections</Link>
              <Link to="/services/geographical-indication" className="footer-link">Geographical Indication</Link>
              <Link to="/services/plant-protection" className="footer-link">Plant Variety protection</Link>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Company & Training</h4>
            <div className="footer-links">
              <Link to="/about" className="footer-link">About Us</Link>
              <Link to="/training" className="footer-link">IP Academy & Training</Link>
              <Link to="/helpline" className="footer-link">Free IPR Helpline</Link>
              <Link to="/career" className="footer-link">Careers</Link>
              <Link to="/contact" className="footer-link">Contact Us</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear() === 2015 ? '2015' : '2015-' + new Date().getFullYear()} Genuiin Intellectual Property Solutions LLP. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <Link to="/disclaimer" style={{ color: 'var(--text-tertiary)', transition: 'color var(--transition-fast)' }} onMouseOver={(e) => e.target.style.color = 'var(--text-primary)'} onMouseOut={(e) => e.target.style.color = 'var(--text-tertiary)'}>Disclaimer</Link>
            <span>|</span>
            <Link to="/privacy" style={{ color: 'var(--text-tertiary)', transition: 'color var(--transition-fast)' }} onMouseOver={(e) => e.target.style.color = 'var(--text-primary)'} onMouseOut={(e) => e.target.style.color = 'var(--text-tertiary)'}>Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
