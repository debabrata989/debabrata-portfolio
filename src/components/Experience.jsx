import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Briefcase size={14} />
            <span>Practical Experience</span>
          </div>
          <h2 className="section-title">
            Industry Experience & <span className="gradient-text">Internships</span>
          </h2>
          <p className="section-subtitle">
            Hands-on technical experience building scalable MERN stack web applications and training real-world AI/ML models.
          </p>
        </div>

        {/* Experience Cards List */}
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="card-glass"
              style={{
                padding: '32px',
                border: '1px solid var(--border-subtle)',
                position: 'relative'
              }}
            >
              {/* Top Row: Role + Type */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '12px',
                  marginBottom: '12px'
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: '1.35rem',
                      color: 'var(--text-primary)',
                      marginBottom: '6px'
                    }}
                  >
                    {exp.role}
                  </h3>
                  <div
                    style={{
                      fontSize: '1.05rem',
                      color: 'var(--accent-cyan-light)',
                      fontWeight: '600'
                    }}
                  >
                    {exp.company}
                  </div>
                </div>

                <span
                  style={{
                    padding: '6px 14px',
                    borderRadius: '9999px',
                    fontSize: '0.78rem',
                    fontFamily: 'var(--font-mono)',
                    background: 'rgba(139, 92, 246, 0.12)',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                    color: 'var(--accent-violet-light)'
                  }}
                >
                  {exp.type}
                </span>
              </div>

              {/* Meta: Duration & Location */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '18px',
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
                  marginBottom: '20px'
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Calendar size={15} color="var(--accent-cyan)" />
                  {exp.duration} ({exp.period})
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <MapPin size={15} color="var(--accent-cyan)" />
                  {exp.location}
                </span>
              </div>

              {/* Summary */}
              <p
                style={{
                  fontSize: '0.96rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                  marginBottom: '20px'
                }}
              >
                {exp.summary}
              </p>

              {/* Responsibilities */}
              <div style={{ marginBottom: '24px' }}>
                <div
                  style={{
                    fontSize: '0.88rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '12px'
                  }}
                >
                  Key Contributions & Outcomes:
                </div>
                <ul
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                  }}
                >
                  {exp.responsibilities.map((resp, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        fontSize: '0.92rem',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      <CheckCircle2
                        size={17}
                        color="var(--accent-emerald)"
                        style={{ flexShrink: 0, marginTop: '3px' }}
                      />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="badge-pill"
                    style={{
                      borderColor: 'rgba(6, 182, 212, 0.25)',
                      color: 'var(--accent-cyan-light)'
                    }}
                  >
                    {skill}
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
