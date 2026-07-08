import React, { useState } from 'react';
import SEO from "../components/SEO";
import { Award, Briefcase, Mail, Upload, FileCheck, CheckCircle2 } from 'lucide-react';

export const Career = () => {
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', role: 'Patent Analyst', cover: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const roles = [
    { title: 'Patent Analyst', dept: 'Patent Analytics', desc: 'Requirements: Technical background (B.Tech/M.Tech/Ph.D), experience in drafting, prior art searching, and claims mapping.' },
    { title: 'Trademark & Design Associate', dept: 'Brand Protection', desc: 'Requirements: Experience handling filings, replies to office actions, oppositions, and watch services.' },
    { title: 'Research Associate', dept: 'IP Research & Mining', desc: 'Requirements: Experience in technological data mining, literature surveys, landscape research, and market analysis.' }
  ];

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <>
    <SEO
    title="Careers | Genuiin IP Solutions LLP"
    description="Join Genuiin IP Solutions LLP and build your career in Intellectual Property."
    />
    <div className="container section-padding fade-in-up">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'flex-start', marginBottom: '60px' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--brand-gold-dark)', fontWeight: '600', fontSize: '13px', textTransform: 'uppercase', marginBottom: '12px' }}>
            <Briefcase size={16} /> Join Genuiin IP
          </div>
          <h1 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '20px' }}>Careers</h1>
          
          <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.7', marginBottom: '20px' }}>
            Genuiin IP Solutions always seeks qualified aspirants with strong technical backgrounds and experience in Patent drafting, searching, data mining, market research, and/or the legal industry.
          </p>

          <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.7', marginBottom: '32px' }}>
            If you are interested in developing your skills in a challenging, professional environment, submit your details using the form, or email your resume and cover letter to <a href="mailto:careers@genuiin-ip.com" style={{ fontWeight: '600', color: 'var(--brand-gold-dark)' }}>careers@genuiin-ip.com</a>.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: '700' }}>Desired Candidate Profiles</h3>
            {roles.map((r, idx) => (
              <div key={idx} style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <h4 style={{ fontSize: '16px', fontWeight: '700' }}>{r.title}</h4>
                  <span style={{ fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', color: 'var(--brand-gold-dark)' }}>{r.dept}</span>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Application submission card */}
        <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', padding: '40px' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', padding: '40px 0' }}>
              <CheckCircle2 size={56} color="var(--brand-gold-dark)" />
              <div>
                <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '8px' }}>Application Received</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  Thank you for applying to Genuiin IP. We have received your candidacy details and file resume. Our talent recruitment desk will review your profile credentials and reach out if there is a matching role.
                </p>
              </div>
              <button className="btn btn-secondary" style={{ width: '200px' }} onClick={() => { setSubmitted(false); setFile(null); }}>
                Back to Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '700', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>
                Online Application Portal
              </h3>

              <div className="form-group">
                <label className="form-label" htmlFor="app-name">Your Full Name *</label>
                <input 
                  type="text" 
                  id="app-name"
                  className="form-input" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Jane Doe"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="app-email">Your E-mail *</label>
                <input 
                  type="email" 
                  id="app-email"
                  className="form-input" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jane.doe@example.com"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="app-role">Role of Interest *</label>
                <select 
                  id="app-role"
                  className="form-input"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                >
                  <option value="Patent Analyst">Patent Analyst</option>
                  <option value="Trademark & Design Associate">Trademark & Design Associate</option>
                  <option value="Research Associate">Research Associate</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="app-cover">Cover Letter Summary *</label>
                <textarea 
                  id="app-cover"
                  className="form-input" 
                  required 
                  rows="4"
                  value={formData.cover}
                  onChange={(e) => setFormData({ ...formData, cover: e.target.value })}
                  placeholder="Highlight your academic qualifications, IPR certifications, or drafting experience..."
                  style={{ resize: 'vertical' }}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Upload Resume (PDF/DOCX) *</label>
                <div style={{ position: 'relative', border: '2px dashed var(--border-color)', borderRadius: 'var(--radius-sm)', padding: '24px', textAlign: 'center', backgroundColor: 'var(--bg-primary)', cursor: 'pointer', transition: 'all 0.3s' }} onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--brand-gold)'} onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>
                  <input 
                    type="file" 
                    required 
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
                  />
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    {file ? (
                      <>
                        <FileCheck size={32} color="var(--brand-gold-dark)" />
                        <span style={{ fontSize: '13px', fontWeight: '600' }}>{file.name}</span>
                        <span style={{ fontSize: '11px', color: 'var(--text-tertiary)' }}>Click to replace file</span>
                      </>
                    ) : (
                      <>
                        <Upload size={32} color="var(--text-tertiary)" />
                        <span style={{ fontSize: '13px', fontWeight: '500' }}>Drag & drop or click to browse</span>
                        <span style={{ fontSize: '11px', color: 'var(--text-tertiary)' }}>Supports PDF, DOCX up to 5MB</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-primary" style={{ display: 'flex', gap: '8px', alignSelf: 'flex-start', marginTop: '10px' }} disabled={loading}>
                {loading ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
    </>
  );
};
export default Career;
