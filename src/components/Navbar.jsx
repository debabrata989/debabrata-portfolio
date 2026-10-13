import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Terminal } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Workflow', href: '#workflow' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'workflow', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(8, 11, 18, 0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        height: 'var(--nav-height)'
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%'
        }}
      >
        {/* Brand Logo */}
        <a
          href="#home"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none'
          }}
          aria-label="Debabrata Malik Portfolio Home"
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, rgba(6,182,212,0.2), rgba(139,92,246,0.2))',
              border: '1px solid rgba(6,182,212,0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-cyan)'
            }}
          >
            <Terminal size={18} />
          </div>
          <div>
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: '700',
                fontSize: '1.15rem',
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              Debabrata <span className="gradient-text">Malik</span>
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--accent-cyan)',
                marginTop: '-2px'
              }}
            >
              Software / Full Stack Dev
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '8px'
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.name.toLowerCase();
            return (
              <a
                key={link.name}
                href={link.href}
                style={{
                  padding: '8px 14px',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  color: isActive ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                  background: isActive ? 'rgba(6, 182, 212, 0.08)' : 'transparent',
                  transition: 'all var(--transition-fast)'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'var(--text-primary)';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'var(--text-secondary)';
                }}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop Resume CTA & Status */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '14px'
          }}
          className="desktop-actions"
        >
          <a
            href="/resume.pdf"
            download="Debabrata_Malik_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onOpenResume}
            className="btn btn-outline-glow btn-sm"
            style={{
              padding: '8px 16px',
              borderRadius: '8px'
            }}
          >
            <FileDown size={16} />
            <span>Resume (PDF)</span>
          </a>

          <a
            href="#contact"
            className="btn btn-primary btn-sm"
            style={{
              padding: '8px 18px',
              borderRadius: '8px'
            }}
          >
            <span>Let's Talk</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '42px',
            height: '42px',
            borderRadius: '10px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-primary)'
          }}
          className="mobile-hamburger"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 'var(--nav-height)',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(8, 11, 18, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            borderTop: '1px solid var(--border-subtle)',
            zIndex: 999,
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 12px',
              background: 'rgba(16, 185, 129, 0.08)',
              border: '1px solid rgba(16, 185, 129, 0.2)',
              borderRadius: '8px',
              marginBottom: '10px'
            }}
          >
            <span className="pulse-beacon" />
            <span style={{ fontSize: '0.8rem', color: 'var(--accent-emerald)', fontWeight: '500' }}>
              B.Tech CSE (Batch 2023 - 2027) • Open for Opportunities
            </span>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMobileMenu}
              style={{
                padding: '14px 16px',
                borderRadius: '10px',
                fontSize: '1.05rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span>{link.name}</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>→</span>
            </a>
          ))}

          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a
              href="/resume.pdf"
              download="Debabrata_Malik_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-glow"
              onClick={(e) => {
                closeMobileMenu();
                if (onOpenResume) onOpenResume(e);
              }}
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <FileDown size={18} />
              <span>Download Resume (PDF)</span>
            </a>
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={closeMobileMenu}
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span>Contact Debabrata</span>
            </a>
          </div>
        </div>
      )}

      {/* Inline styles for responsive nav hiding */}
      <style>{`
        @media (min-width: 860px) {
          .desktop-nav { display: flex !important; }
          .desktop-actions { display: flex !important; }
          .mobile-hamburger { display: none !important; }
        }
      `}</style>
    </header>
  );
}
