import React, { useState } from 'react';
import { BookOpen, Search, GraduationCap, Award, Landmark, Users, Mail, ArrowRight } from 'lucide-react';

export const Training = () => {
  const [activeTab, setActiveTab] = useState('advanced');
  const [searchQuery, setSearchQuery] = useState('');

  const targetSectors = [
    'R & D Sector', 'Business & Commercial Sector', 'SMEs (Small & Medium Enterprises)',
    'IPR & Law Professionals', 'Scientists & Technologists',
    'Government & Policy Makers (Public/Private)', 'Individual Students'
  ];

  const basicCourses = [
    { code: 'IP-B-01', title: 'Basic training on Intellectual Property', level: 'Basic', desc: 'General overview of IP types, registrations, and basic definitions.' }
  ];

  const advancedCourses = [
    { code: 'IP-A-01', title: 'Patent and its registration', level: 'Advanced', desc: 'Step-by-step guidance on domestic patent applications.' },
    { code: 'IP-A-02', title: 'Patent Prosecution', level: 'Advanced', desc: 'Understanding office actions, examination replies, and hearings.' },
    { code: 'IP-A-03', title: 'Patent Drafting', level: 'Advanced', desc: 'Claims construction, specifications, and drawings drafting.' },
    { code: 'IP-A-04', title: 'Patent Information Search', level: 'Advanced', desc: 'Conducting novelty, FTO, and prior art searches.' },
    { code: 'IP-A-05', title: 'Patent Analytics', level: 'Advanced', desc: 'Patent landscapes, mapping, and technical trends.' },
    { code: 'IP-A-06', title: 'PCT System and its advantage', level: 'Advanced', desc: 'Filing international PCT applications.' },
    { code: 'IP-A-07', title: 'Trademark and its registration', level: 'Advanced', desc: 'Filing, classification, and trademark watch basics.' },
    { code: 'IP-A-08', title: 'Copyright and its registration', level: 'Advanced', desc: 'Securing copyright registrations for creative works.' },
    { code: 'IP-A-09', title: 'Industrial Design and its registration', level: 'Advanced', desc: 'Registration procedures for ornamental designs.' },
    { code: 'IP-A-10', title: 'Geographical Indication and its registration', level: 'Advanced', desc: 'Filing for regional geographical designations.' },
    { code: 'IP-A-11', title: 'Intellectual Property Management', level: 'Advanced', desc: 'Managing corporate portfolios, licensing, and Audits.' }
  ];

  const premiumCourses = [
    { code: 'IP-P-01', title: 'Patent Agent Training Program', level: 'Premium', desc: 'Complete prep course to qualify as a Registered Patent Agent before the Indian Patent Office.' },
    { code: 'IP-P-02', title: 'Trademark Agent Training Program', level: 'Premium', desc: 'Strategic prep course to qualify as a Registered Trademark Agent before the Trade Marks Registry.' }
  ];

  const filterCourses = (courses) => {
    return courses.filter(c => 
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      c.code.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <div className="container section-padding fade-in-up">
      {/* Intro */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '60px', alignItems: 'center', marginBottom: '60px' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--brand-gold-dark)', fontWeight: '600', fontSize: '13px', textTransform: 'uppercase', marginBottom: '12px' }}>
            <GraduationCap size={16} /> Academy & Education
          </div>
          <h1 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '16px' }}>Intellectual Property Training</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.7', marginBottom: '16px' }}>
            Intellectual property protection is the driving force for economic growth, adding massive value to the high-technology sector. Genuiin IP Academy bridges the lack of knowledge on how to use the IP system, leverage patent information, and prepare research results for commercial transfer.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.7' }}>
            We bring three targeted training levels in line with corporate, academic, and student requirements.
          </p>
        </div>

        <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', padding: '32px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Users size={18} color="var(--brand-gold-dark)" /> Target Beneficiaries
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {targetSectors.map((sector, idx) => (
              <span key={idx} style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '6px 12px', fontSize: '12px', color: 'var(--text-secondary)', fontWeight: '500' }}>
                {sector}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Course Portal Area */}
      <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '60px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px', marginBottom: '32px', flexWrap: 'wrap' }}>
          <div className="tab-nav" style={{ marginBottom: 0, borderBottom: 'none' }}>
            <button className={`tab-btn ${activeTab === 'basic' ? 'active' : ''}`} onClick={() => setActiveTab('basic')}>Basic Level</button>
            <button className={`tab-btn ${activeTab === 'advanced' ? 'active' : ''}`} onClick={() => setActiveTab('advanced')}>Advanced Level</button>
            <button className={`tab-btn ${activeTab === 'premium' ? 'active' : ''}`} onClick={() => setActiveTab('premium')}>Premium Preparation</button>
          </div>

          {/* Search bar */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '280px' }}>
            <input 
              type="text" 
              placeholder="Search course title or code..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input"
              style={{ paddingLeft: '36px', height: '40px' }}
            />
            <Search size={16} color="var(--text-tertiary)" style={{ position: 'absolute', left: '12px', top: '12px' }} />
          </div>
        </div>

        {/* Course Card Grid */}
        <div style={{ minHeight: '300px' }}>
          {activeTab === 'basic' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
              {filterCourses(basicCourses).length > 0 ? filterCourses(basicCourses).map((c, idx) => (
                <CourseCard key={idx} c={c} />
              )) : <NoResults />}
            </div>
          )}

          {activeTab === 'advanced' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
              {filterCourses(advancedCourses).length > 0 ? filterCourses(advancedCourses).map((c, idx) => (
                <CourseCard key={idx} c={c} />
              )) : <NoResults />}
            </div>
          )}

          {activeTab === 'premium' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
              {filterCourses(premiumCourses).length > 0 ? filterCourses(premiumCourses).map((c, idx) => (
                <CourseCard key={idx} c={c} />
              )) : <NoResults />}
            </div>
          )}
        </div>
      </div>

      {/* Mode & Request Info */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '40px', marginTop: '60px', borderTop: '1px solid var(--border-color)', paddingTop: '60px' }}>
        <div>
          <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>Training Mode & Infrastructure</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6', marginBottom: '12px' }}>
            All training sessions are conducted <strong>online via electronic portals</strong>, supplemented by interactive helplines.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6' }}>
            For corporate clients, we provide <strong>1-to-2 days physical in-house training</strong> seminars customized to corporate project needs.
          </p>
        </div>

        <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>Request Course Syllabus & Fee Structure</h4>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
              Interested in training programs? Contact our academic registry to get detailed brochures and session timelines.
            </p>
          </div>

          <a href="mailto:training@genuiin-ip.com" className="btn btn-primary" style={{ alignSelf: 'flex-start', display: 'inline-flex', gap: '8px' }}>
            Email Academy <Mail size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

const CourseCard = ({ c }) => (
  <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '24px', position: 'relative', overflow: 'hidden' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
      <span style={{ fontSize: '11px', fontWeight: '700', padding: '4px 8px', borderRadius: '4px', backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)', color: 'var(--brand-gold-dark)' }}>
        {c.code}
      </span>
      <span style={{ fontSize: '11px', fontWeight: '500', color: 'var(--text-tertiary)' }}>{c.level} Level</span>
    </div>
    <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '8px' }}>{c.title}</h4>
    <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{c.desc}</p>
  </div>
);

const NoResults = () => (
  <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-tertiary)', gridColumn: 'span 3' }}>
    No training courses match your search query.
  </div>
);

export default Training;
