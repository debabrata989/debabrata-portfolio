import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, TrendingUp, Cpu } from 'lucide-react';
import { Github } from './Icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        background: 'rgba(5, 8, 15, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)'
      }}
      onClick={onClose}
    >
      <div
        className="card-glass"
        style={{
          width: '100%',
          maxWidth: '680px',
          maxHeight: '90vh',
          overflowY: 'auto',
          background: 'rgba(11, 16, 28, 0.98)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '18px',
          padding: '32px',
          boxShadow: 'var(--shadow-lg)',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-secondary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
          aria-label="Close project modal"
        >
          <X size={20} />
        </button>

        {/* Category & Status */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: project.accentColor || 'var(--accent-cyan)',
              background: 'rgba(255, 255, 255, 0.04)',
              padding: '4px 10px',
              borderRadius: '6px'
            }}
          >
            {project.category}
          </span>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.8rem',
              color: 'var(--accent-emerald)',
              fontWeight: '500'
            }}
          >
            <span className="pulse-beacon" style={{ width: '6px', height: '6px' }} />
            Ready for Demo
          </span>
        </div>

        {/* Title */}
        <h3 style={{ fontSize: '1.75rem', marginBottom: '8px', color: 'var(--text-primary)' }}>
          {project.title}
        </h3>
        <p style={{ fontSize: '0.98rem', color: 'var(--accent-cyan-light)', marginBottom: '20px', fontWeight: '500' }}>
          {project.subtitle}
        </p>

        {/* Description */}
        <div style={{ marginBottom: '24px' }}>
          <p style={{ fontSize: '0.96rem', lineHeight: '1.7', color: 'var(--text-secondary)', marginBottom: '16px' }}>
            {project.description}
          </p>
          <div
            style={{
              padding: '12px 16px',
              borderRadius: '10px',
              background: 'rgba(6, 182, 212, 0.06)',
              border: '1px solid rgba(6, 182, 212, 0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '0.88rem',
              color: 'var(--accent-cyan-light)'
            }}
          >
            <TrendingUp size={18} />
            <span><strong>Engineering Impact:</strong> {project.metrics}</span>
          </div>
        </div>

        {/* Technical Highlights */}
        <div style={{ marginBottom: '26px' }}>
          <h4 style={{ fontSize: '1.05rem', marginBottom: '12px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Cpu size={18} color="var(--accent-violet-light)" />
            Key Architecture & Features
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {project.highlights.map((h, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={16} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Pills */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '10px', textTransform: 'uppercase' }}>
            Technologies Used:
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.tags.map((tag, i) => (
              <span key={i} className="badge-pill" style={{ color: 'var(--text-primary)', borderColor: 'rgba(255,255,255,0.12)' }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', borderTop: '1px solid var(--border-subtle)', paddingTop: '20px' }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
          >
            <Github size={16} />
            <span>View Source Code</span>
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            <ExternalLink size={16} />
            <span>Live Demonstration</span>
          </a>
        </div>
      </div>
    </div>
  );
}
