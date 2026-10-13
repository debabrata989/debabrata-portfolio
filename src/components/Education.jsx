import React from 'react';
import { GraduationCap, MapPin, CheckCircle } from 'lucide-react';
import { educationData } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="section" style={{ background: 'rgba(255, 255, 255, 0.01)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <GraduationCap size={14} />
            <span>Academic Milestones</span>
          </div>
          <h2 className="section-title">
            Education & <span className="gradient-text">Qualifications</span>
          </h2>
          <p className="section-subtitle">
            Strong foundation in core computer science principles, software engineering methodologies, and mathematical logic.
          </p>
        </div>

        {/* Education Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}
        >
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="card-glass"
              style={{
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span
                  style={{
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    background:
                      idx === 0
                        ? 'rgba(16, 185, 129, 0.1)'
                        : 'rgba(255, 255, 255, 0.05)',
                    border:
                      idx === 0
                        ? '1px solid rgba(16, 185, 129, 0.3)'
                        : '1px solid var(--border-subtle)',
                    color:
                      idx === 0
                        ? 'var(--accent-emerald)'
                        : 'var(--text-muted)'
                  }}
                >
                  {edu.status}
                </span>

                <span
                  style={{
                    fontSize: '0.82rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-muted)'
                  }}
                >
                  {edu.period}
                </span>
              </div>

              <div>
                <h3
                  style={{
                    fontSize: '1.28rem',
                    color: 'var(--text-primary)',
                    marginBottom: '4px'
                  }}
                >
                  {edu.degree}
                </h3>
                <div
                  style={{
                    fontSize: '0.98rem',
                    color: 'var(--accent-cyan-light)',
                    fontWeight: '500',
                    marginBottom: '8px'
                  }}
                >
                  {edu.branch}
                </div>
                <div
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <MapPin size={14} color="var(--accent-cyan)" />
                  {edu.institution}, {edu.location}
                </div>
              </div>

              <div
                style={{
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}
              >
                {edu.highlights.map((h, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px',
                      fontSize: '0.88rem',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    <CheckCircle
                      size={15}
                      color="var(--accent-cyan)"
                      style={{ flexShrink: 0, marginTop: '3px' }}
                    />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
