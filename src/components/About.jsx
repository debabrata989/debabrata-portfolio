import React from 'react';
import { BookOpen, CheckCircle, Code, Compass, Sparkles, UserCheck, Calendar, GraduationCap, FolderGit2, Cpu } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function About() {
  const stats = [
    { label: "B.Tech Batch", value: "2023-2027", icon: <Calendar size={18} color="var(--accent-cyan)" /> },
    { label: "B.Tech CSE", value: "GIET BBS", icon: <GraduationCap size={18} color="var(--accent-violet-light)" /> },
    { label: "Projects Built", value: "6+ Featured", icon: <FolderGit2 size={18} color="var(--accent-emerald)" /> },
    { label: "Technologies", value: "15+ Stack", icon: <Cpu size={18} color="#38bdf8" /> }
  ];

  return (
    <section id="about" className="section" style={{ background: 'rgba(255, 255, 255, 0.01)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <UserCheck size={14} />
            <span>Profile & Background</span>
          </div>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            A blend of Computer Science foundations, hands-on full-stack development, and a problem-solving mindset.
          </p>
        </div>

        {/* Animated Statistics Cards as specified in prompt */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '18px',
            marginBottom: '40px'
          }}
        >
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="card-glass"
              style={{
                padding: '20px 24px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {s.icon}
              </div>
              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
                  {s.value}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>
                  {s.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '36px'
          }}
          className="about-grid"
        >
          {/* Main Story & Exact Prompt Text */}
          <div className="card-glass" style={{ padding: '36px' }}>
            <h3
              style={{
                fontSize: '1.4rem',
                marginBottom: '16px',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <Compass size={22} color="var(--accent-cyan)" />
              Introduction
            </h3>
            
            <p style={{ fontSize: '1.04rem', lineHeight: '1.8', marginBottom: '18px', color: 'var(--text-primary)' }}>
              I am a Computer Science Engineering student (Batch 2023 - 2027) passionate about software development and modern web technologies. I enjoy transforming ideas into functional, responsive and user-friendly applications.
            </p>

            <p style={{ fontSize: '1.04rem', lineHeight: '1.8', marginBottom: '18px', color: 'var(--text-secondary)' }}>
              My primary focus is Full Stack Development using the <strong style={{ color: 'var(--accent-cyan)' }}>MERN stack</strong> (React.js, Node.js, Express.js, MongoDB) with hands-on internship experience completed at <strong style={{ color: 'var(--accent-cyan-light)' }}>Ephorsys Pvt. Limited</strong>. I also have practical experience in <strong style={{ color: 'var(--accent-violet-light)' }}>Artificial Intelligence and Machine Learning</strong> (practical training completed at CTTC Bhubaneswar).
            </p>

            <p style={{ fontSize: '1.04rem', lineHeight: '1.8', marginBottom: '24px', color: 'var(--text-secondary)' }}>
              I am currently focused on strengthening my problem-solving, development and software engineering skills while preparing for professional opportunities.
            </p>

            {/* Core Competencies Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {[
                'Full Stack MERN',
                'MERN Intern @ Ephorsys',
                'RESTful API Engineering',
                'Data Structures & Algorithms',
                'Database Modeling',
                'AIML Foundations (CTTC)',
                'Clean & Maintainable Code'
              ].map((item, idx) => (
                <div key={idx} className="badge-pill">
                  <CheckCircle size={13} color="var(--accent-emerald)" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Philosophy / Engineering Pillars */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px'
            }}
          >
            {personalInfo.principles.map((principle, idx) => (
              <div
                key={idx}
                className="card-glass"
                style={{
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background:
                      idx === 0
                        ? 'rgba(6, 182, 212, 0.12)'
                        : idx === 1
                        ? 'rgba(139, 92, 246, 0.12)'
                        : 'rgba(16, 185, 129, 0.12)',
                    border:
                      idx === 0
                        ? '1px solid rgba(6, 182, 212, 0.3)'
                        : idx === 1
                        ? '1px solid rgba(139, 92, 246, 0.3)'
                        : '1px solid rgba(16, 185, 129, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color:
                      idx === 0
                        ? 'var(--accent-cyan)'
                        : idx === 1
                        ? 'var(--accent-violet-light)'
                        : 'var(--accent-emerald)'
                  }}
                >
                  {idx === 0 ? <Code size={20} /> : idx === 1 ? <Sparkles size={20} /> : <BookOpen size={20} />}
                </div>

                <h4 style={{ fontSize: '1.15rem', color: 'var(--text-primary)' }}>
                  {principle.title}
                </h4>

                <p style={{ fontSize: '0.92rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
