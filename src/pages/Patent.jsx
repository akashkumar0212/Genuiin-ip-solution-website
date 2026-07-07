import React, { useState } from 'react';
import SEO from "../components/SEO";
import { Shield, FileText, Search, RefreshCw, Scale, DollarSign, ArrowRight, BookOpen, AlertCircle } from 'lucide-react';

export const Patent = () => {
  const [activeTab, setActiveTab] = useState('drafting');

  const tabs = [
    { id: 'drafting', label: 'Drafting & Prosecution', icon: <FileText size={16} /> },
    { id: 'prior-art', label: 'Prior Art Search', icon: <Search size={16} /> },
    { id: 'renewal', label: 'Patent Renewal', icon: <RefreshCw size={16} /> },
    { id: 'litigation', label: 'Patent Litigation', icon: <Scale size={16} /> },
    { id: 'valuation', label: 'Valuation & Transfer', icon: <DollarSign size={16} /> }
  ];

  return (
    <>
      <SEO
        title="Patent Filing in India | Patent Registration Services"
        description="Professional patent filing and registration services in India. Patent drafting, prosecution, patent search, IP consulting, and legal support."
        keywords="Patent Filing India, Patent Registration India, Patent Drafting Services, Patent Attorney India, Patent Prosecution, Patent Agent India, Patent Filing for Startups, Patent Filing for Universities"
      />
    <div className="container section-padding fade-in-up">
      <div style={{ marginBottom: '48px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--brand-gold-dark)', fontWeight: '600', fontSize: '13px', textTransform: 'uppercase', marginBottom: '12px' }}>
          <Shield size={16} /> IP Service Detail
        </div>
        <h1 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '16px' }}>Patent Solutions</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '800px', lineHeight: '1.6' }}>
          End-to-end patent support services designed to help inventors, legal firms, and corporations secure, evaluate, and enforce technological assets globally.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="tab-nav">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Contents */}
      <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', padding: '40px', minHeight: '400px' }}>
        {activeTab === 'drafting' && (
          <div>
            <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Patent Drafting, Filing & Prosecution</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '24px' }}>
              Genuiin IP Solutions has momentous experience supporting its clients through the patent application drafting, filing, and prosecution procedure in compliance with IPO, USPTO, EPO, and WIPO standards. Our patent analytics team applies an approach with structured questionnaires to save the client’s precious time and make them aware of the entire process, either completing entire drafts or relevant portions as required.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '40px' }}>
              <div style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '24px' }}>
                <h3 style={{ fontSize: '18px', marginBottom: '16px' }}>Patent Application Drafting</h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--text-secondary)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--brand-gold-dark)' }}></span>
                    Patentability Assessment
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--text-secondary)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--brand-gold-dark)' }}></span>
                    Claims Construction & Strategy
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--text-secondary)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--brand-gold-dark)' }}></span>
                    Specifications, Summary, and Abstract writing
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--text-secondary)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--brand-gold-dark)' }}></span>
                    Formal Drawing preparation
                  </li>
                </ul>
              </div>

              <div style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '24px' }}>
                <h3 style={{ fontSize: '18px', marginBottom: '16px' }}>Patent Illustration</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '12px' }}>
                  Patent drawings are critical to any application, which is why our technical staff provides the highest quality output in a timely fashion to IP professionals, attorneys, and law firms. Our team can prepare drawings in accordance with Patent and Trademark Office specifications, in a broad range of technical fields.
                </p>
              </div>
            </div>

            {/* horizontal timeline */}
            <div style={{ marginTop: '48px', borderTop: '1px solid var(--border-color)', paddingTop: '40px' }}>
              <h3 style={{ fontSize: '20px', marginBottom: '24px' }}>India Patent Filing Requirements & Timeline</h3>
              
              <div className="timeline-track">
                <div className="timeline-node">
                  <div className="timeline-dot">1</div>
                  <h4 className="timeline-title">Filing Application</h4>
                  <p className="timeline-desc">National, International PCT, PCT National Phase, or Convention filing. No initial docs are mandatory at the exact time of filing.</p>
                </div>
                
                <div className="timeline-node">
                  <div className="timeline-dot">2</div>
                  <h4 className="timeline-title">Power of Attorney</h4>
                  <p className="timeline-desc">A simply signed Power of Attorney can be submitted subsequent to the initial filing of the application.</p>
                </div>

                <div className="timeline-node">
                  <div className="timeline-dot">3</div>
                  <h4 className="timeline-title">Inventor Declaration</h4>
                  <p className="timeline-desc">A signed inventor declaration or notarized assignment copy must be filed within 6 months of filing to avoid petitions.</p>
                </div>

                <div className="timeline-node">
                  <div className="timeline-dot">4</div>
                  <h4 className="timeline-title">Foreign Details</h4>
                  <p className="timeline-desc">Details of corresponding patent filings in other countries must be declared on an ongoing basis within 6 months.</p>
                </div>
              </div>

              <div style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '20px', display: 'flex', gap: '16px', marginTop: '32px' }}>
                <AlertCircle size={24} color="var(--brand-gold-dark)" style={{ flexShrink: 0 }} />
                <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  <strong>Important Examination Deadline:</strong> The Request for Examination has to be filed within <strong>forty-eight (48) months</strong> from the date of priority or date of filing of the application, whichever is earlier.
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'prior-art' && (
          <div>
            <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Prior Art Search & Patent Intelligence Analysis</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '32px' }}>
              Genuiin IP Solutions Prior Art Search services include an extensive analysis over the patent scenario. We understand the needs of our clients and accordingly customize search options to assess patentability, freedom to operate, or potential infringement domains.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              <div style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '24px', transition: 'all 0.3s' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '12px', color: 'var(--brand-gold-dark)' }}>Patentability Assessment</h3>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  Conducted to assess the patentability of a technology in terms of novelty, non-obviousness, and commercial applicability. Saves significant R&D money if findings indicate non-patentability.
                </p>
              </div>

              <div style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '24px', transition: 'all 0.3s' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '12px', color: 'var(--brand-gold-dark)' }}>Freedom to Operate (FTO)</h3>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  Jurisdiction-specific searches that evaluate the degrees of liberty to commercialize a technology with respect to active existing patents in target markets.
                </p>
              </div>

              <div style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '24px', transition: 'all 0.3s' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '12px', color: 'var(--brand-gold-dark)' }}>Infringement Analysis</h3>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  In-depth analyzed reports comparing claims of active patents with your technology to outline and reduce the risk of infringement claims.
                </p>
              </div>

              <div style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '24px', transition: 'all 0.3s' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '12px', color: 'var(--brand-gold-dark)' }}>Invalidation Analysis</h3>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  Evidence-based research to challenge an existing competitor patent or specific claim by finding prior art (patent or non-patent) that existed before the priority date.
                </p>
              </div>

              <div style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '24px', transition: 'all 0.3s' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '12px', color: 'var(--brand-gold-dark)' }}>Claims Mapping</h3>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  Overlap analysis mapping technological features against active claims to examine infringement or keep track of competitor patent scopes.
                </p>
              </div>

              <div style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '24px', transition: 'all 0.3s' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '12px', color: 'var(--brand-gold-dark)' }}>State of the Art & Landscape</h3>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  Surveys current R&D filing trends, key competitors, and technological domains to structure business development directions.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'renewal' && (
          <div>
            <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Patent Renewal & Maintenance</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '24px' }}>
              To enforce and keep a patent active, regular maintenance fees (annuities) must be paid to the respective patent offices. Missing critical deadlines can result in the loss of intellectual property rights.
            </p>
            <div style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700' }}>Active Annuity Vigilance</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Genuiin IP Solutions pays strict attention to all the deadlines of payment of renewal fees (annuities) globally. We notify clients well in advance and handle processing transactions securely to enforce rights.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'litigation' && (
          <div>
            <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Patent Litigation Support</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '24px' }}>
              Enforcing your rights or defending against infringement claims requires rigorous techno-legal support and analysis. Our experts collaborate directly with legal counsel to provide key backing.
            </p>
            <div style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '32px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '16px' }}>End-to-End Litigation Backing</h3>
              <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', paddingLeft: '0' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--text-secondary)' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--brand-gold-dark)' }}></span>
                  Pre-Trial Investigation
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--text-secondary)' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--brand-gold-dark)' }}></span>
                  Techno-legal document analysis
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--text-secondary)' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--brand-gold-dark)' }}></span>
                  Review of Inventor's Notebooks
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--text-secondary)' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--brand-gold-dark)' }}></span>
                  Assistance in Claim Construction
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--text-secondary)' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--brand-gold-dark)' }}></span>
                  Claim Chart Preparation
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--text-secondary)' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--brand-gold-dark)' }}></span>
                  Alliance with Expert Witnesses
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'valuation' && (
          <div>
            <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Patent Valuation & Technology Transfer</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '24px' }}>
              IP valuation is one of the most important characteristics of IP commercialization. Value assessment is not merely a bookkeeping act, but rather an effort to reunite information pertaining to a specified IP, which involves development costs, near-future generated income, comparative advantages, and market data, for the purpose of making better strategic decisions to launch its product into the target market.
            </p>
            <div style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '32px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>Turning Ideas into Profits</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                We offer a whole bunch of services to evaluate IP assets and design tech-transfer licensing programs to commercialize innovations in a better way, turning ideas into commercial profit.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  </>
  );
};
export default Patent;
