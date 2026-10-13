import React from 'react';
import { FileDown, Send, Sparkles } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/personalInfo';

export default function ResumeCTA({ onOpenResume }) {
  return (
    <section className="section" style={{ padding: '60px 0' }}>
      <div className="container">
        <div
          className="card-glass"
          style={{
            padding: '48px 36px',
            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
            border: '1px solid rgba(6, 182, 212, 0.3)',
            borderRadius: '20px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Ambient Glow */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '350px',
              height: '350px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(6, 182, 212, 0.18), transparent 70%)',
              pointerEvents: 'none',
              zIndex: 0
            }}
          />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '680px', margin: '0 auto' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '9999px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-subtle)',
                fontSize: '0.82rem',
                color: 'var(--accent-cyan-light)',
                marginBottom: '18px',
                fontFamily: 'var(--font-mono)'
              }}
            >
              <Sparkles size={14} />
              <span>Campus Placement & Internship Season (Batch 2023 - 2027)</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                marginBottom: '16px',
                letterSpacing: '-0.02em'
              }}
            >
              Let's Build <span className="gradient-text">Something Great</span>
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                marginBottom: '32px'
              }}
            >
              I'm currently preparing for software development opportunities and open to connecting with companies, recruiters and fellow developers.
            </p>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '14px'
              }}
            >
              <a
                href="/resume.pdf"
                download="Debabrata_Malik_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onOpenResume}
                className="btn btn-primary"
              >
                <FileDown size={18} />
                <span>View & Download Resume</span>
              </a>

              <a href="#contact" className="btn btn-secondary">
                <Send size={16} />
                <span>Contact Me</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-glow"
              >
                <Linkedin size={16} />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <Github size={16} />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
