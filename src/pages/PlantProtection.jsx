import React from 'react';
import SEO from "../components/SEO";
import { TreeDeciduous, Wheat, Flame, HelpCircle } from 'lucide-react';

export const PlantProtection = () => {
  const cropCategories = [
    {
      category: 'Cereals & Grains',
      icon: <Wheat size={24} color="var(--brand-gold-dark)" />,
      crops: [
        { name: 'Bread Wheat', desc: 'Critical food security staple variety.' },
        { name: 'Maize', desc: 'High-yield grain cultivar protection.' },
        { name: 'Pearl Millet', desc: 'Arid-zone nutrition grain crop.' },
        { name: 'Rice', desc: 'Primary staple paddy variety protection.' },
        { name: 'Sorghum', desc: 'Coarse cereal and fodder crop cultivar.' }
      ]
    },
    {
      category: 'Pulses & Legumes',
      icon: <TreeDeciduous size={24} color="var(--brand-gold-dark)" />,
      crops: [
        { name: 'Black Gram', desc: 'Nutrient-rich legume crop.' },
        { name: 'Chickpea', desc: 'High-protein pulse cultivar protection.' },
        { name: 'Field Pea', desc: 'Cool-season legume variety.' },
        { name: 'Green Gram', desc: 'Fast-maturing pulse cultivar.' },
        { name: 'Kidney Bean', desc: 'High-nutrition legume crop.' },
        { name: 'Lentil', desc: 'Staple pulse variety protection.' },
        { name: 'Pigeon Pea', desc: 'Long-duration legume crop protection.' }
      ]
    },
    {
      category: 'Fibre & Cash Crops',
      icon: <Flame size={24} color="var(--brand-gold-dark)" />,
      crops: [
        { name: 'Cotton (Tetraploid)', desc: 'Premium long-staple cotton cultivar.' },
        { name: 'Cotton (Diploid)', desc: 'Resilient native cotton variety.' },
        { name: 'Jute', desc: 'Golden fibre cash crop protection.' }
      ]
    }
  ];

  return (
    <>
    <SEO
    title="Plant Variety Protection Registration"
    description="Plant Variety Protection registration and legal assistance for breeders and agricultural innovators."
    keywords="Plant Variety Protection, Plant Protection Registration, PPVFR"
    />
    <div className="container section-padding fade-in-up">
      <div style={{ marginBottom: '48px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--brand-gold-dark)', fontWeight: '600', fontSize: '13px', textTransform: 'uppercase', marginBottom: '12px' }}>
          <TreeDeciduous size={16} /> IP Service Detail
        </div>
        <h1 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '16px' }}>Plant Variety Protection</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '800px', lineHeight: '1.6' }}>
          Genuiin IP Solutions assists its clients in filing and protecting new plant varieties in India under the Plant Variety Protection (PVP) framework, ensuring intellectual rights over agricultural innovations.
        </p>
      </div>

      <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', padding: '40px', marginBottom: '48px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '12px' }}>Eligible Crops Registered in India</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6', marginBottom: '32px', maxWidth: '700px' }}>
          The Central Government of India has notified specific crop types eligible for registration of varieties. Below is the list of 15 crop varieties we currently support for PVP filing:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {cropCategories.map((cat, idx) => (
            <div key={idx} style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid var(--border-color)', paddingBottom: '16px', marginBottom: '20px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {cat.icon}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '700' }}>{cat.category}</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {cat.crops.map((crop, cIdx) => (
                  <div key={cIdx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--brand-gold-dark)', marginTop: '8px', flexShrink: 0 }}></div>
                    <div>
                      <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '2px' }}>{crop.name}</h4>
                      <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: '1.4' }}>{crop.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '24px', display: 'flex', gap: '16px' }}>
        <HelpCircle size={24} color="var(--brand-gold-dark)" style={{ flexShrink: 0 }} />
        <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
          <strong>Registration Benefits:</strong> Protecting new plant varieties grants exclusive rights to produce, sell, market, distribute, and import the protected variety, guarding breeders against unauthorized exploitation.
        </div>
      </div>
    </div>
    </>
  );
};
export default PlantProtection;
