import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';
import { certificationsData } from '../data/certifications';

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <ShieldCheck size={14} />
            <span>Credentials</span>
          </div>
          <h2 className="section-title">
            Certifications & <span className="gradient-text">Workshops</span>
          </h2>
          <p className="section-subtitle">
            Formal recognition of practical skill acquisition in Artificial Intelligence, Machine Learning, and Software Engineering.
          </p>
        </div>

        {/* Certifications Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            maxWidth: '900px',
            margin: '0 auto'
          }}
        >
          {certificationsData.map((cert, index) => (
            <div
              key={index}
              className="card-glass interactive-card"
              style={{
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(139, 92, 246, 0.12)',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-violet-light)'
                  }}
                >
                  <Award size={20} />
                </div>

                <span
                  style={{
                    padding: '4px 10px',
                    borderRadius: '9999px',
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: '600',
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    color: 'var(--accent-emerald)'
                  }}
                >
                  {cert.badge}
                </span>
              </div>

              <div>
                <h3
                  style={{
                    fontSize: '1.2rem',
                    color: 'var(--text-primary)',
                    marginBottom: '6px'
                  }}
                >
                  {cert.title}
                </h3>
                <div
                  style={{
                    fontSize: '0.88rem',
                    color: 'var(--accent-cyan-light)',
                    fontWeight: '500'
                  }}
                >
                  {cert.issuer} • {cert.date}
                </div>
              </div>

              <p
                style={{
                  fontSize: '0.9rem',
                  lineHeight: '1.65',
                  color: 'var(--text-secondary)'
                }}
              >
                {cert.description}
              </p>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px',
                  marginTop: 'auto',
                  paddingTop: '12px',
                  borderTop: '1px solid var(--border-subtle)'
                }}
              >
                {cert.tags.map((t, i) => (
                  <span key={i} className="badge-pill" style={{ fontSize: '0.72rem' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
