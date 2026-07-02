import React from 'react';
import { Shield } from 'lucide-react';

export const Privacy = () => {
  return (
    <div className="container section-padding fade-in-up" style={{ maxWidth: '800px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', color: 'var(--brand-gold-dark)' }}>
          <Shield size={24} />
        </div>
        <h1 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '12px' }}>Privacy Statement</h1>
        <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', textTransform: 'uppercase', fontWeight: '600' }}>Confidentiality Guidelines</span>
      </div>

      <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', padding: '40px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
        <p style={{ marginBottom: '20px' }}>
          Genuiin IP Solutions believes that privacy is important to you to understand how we treat the information received by you. Your access and use of this website is subject to this Privacy Policy and all applicable laws. By accessing and using this website, you accept and agree to this Privacy Policy without any limitation or qualification.
        </p>
        <p style={{ marginBottom: '20px' }}>
          In general, you can visit Genuiin IP Solutions on the World Wide Web without telling us who you are or revealing any information about yourself. Our Web servers collect the domain names, not the e-mail addresses, of visitors. This information is aggregated to measure the number of visits, average time spent on the site, pages viewed, etc. Genuiin IP Solutions uses this information to measure the use of our site and to improve the content of our site. Your accessing our site signifies your unconditional consent to allow the collection of your domain names.
        </p>
        <p style={{ marginBottom: '20px' }}>
          There are times, however, when we may need information from you, such as your name and e-mail IDs. When information is needed, we will try (but are not obligated) to let you know at the time of collection, how we will use the personal information. Usually, the personal information we collect is used only by us to respond to your inquiry, process an order, or allow you to access specific account information. Genuiin IP Solutions will never make the e-mail addresses, of those who provide information, available to third-parties without the providers' express consent.
        </p>
        <p style={{ marginBottom: '20px' }}>
          You recognize and understand that there is no compulsion on you to provide us with your personal information and any and all personal information provided by you to us is with your full consent, own volition, and desire to provide such personal information. You also understand that we are under no obligation to verify the source from which the personal information about you is provided to us, and they are deemed to be provided by you, unless you demonstrate to us within a period of fifteen days from the date of providing such information, to our satisfaction, that the information was provided to us without your free consent.
        </p>
        <p>
          The Genuiin IP web site may contain links to other sites. While we try to link only to sites that share our high standards and respect for privacy, we are not responsible for the content or the privacy practices employed by other sites.
        </p>
      </div>
    </div>
  );
};
export default Privacy;
