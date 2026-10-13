import React from 'react';
import { ArrowUp, Mail, Terminal } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/personalInfo';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        background: 'rgba(5, 8, 15, 0.95)',
        padding: '48px 0 32px 0',
        position: 'relative',
        zIndex: 2
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            marginBottom: '32px'
          }}
        >
          {/* Brand Info */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-heading)',
                fontWeight: '700',
                fontSize: '1.2rem',
                marginBottom: '6px'
              }}
            >
              <Terminal size={18} color="var(--accent-cyan)" />
              <span>Debabrata <span className="gradient-text">Malik</span></span>
            </div>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
              B.Tech CSE • GIET Bhubaneswar (Batch 2023 - 2027) • Software Developer
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)'
              }}
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)'
              }}
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)'
              }}
              aria-label="Send Email"
            >
              <Mail size={18} />
            </a>

            <button
              onClick={scrollToTop}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: 'rgba(6, 182, 212, 0.1)',
                border: '1px solid rgba(6, 182, 212, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-cyan)',
                cursor: 'pointer'
              }}
              aria-label="Scroll back to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.04)',
            paddingTop: '24px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            fontSize: '0.82rem',
            color: 'var(--text-dim)'
          }}
        >
          <div>
            © {new Date().getFullYear()} Debabrata Malik. Built for campus placements & software engineering roles.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a
              href="/resume.pdf"
              onClick={onOpenResume}
              style={{ color: 'var(--accent-cyan-light)', textDecoration: 'underline' }}
            >
              Curriculum Vitae (PDF)
            </a>
            <span style={{ fontFamily: 'var(--font-mono)' }}>
              React 19 • Vite • Vanilla CSS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
