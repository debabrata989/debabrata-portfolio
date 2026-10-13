import React, { useState, useEffect } from 'react';
import { 
  FileDown, 
  ArrowRight, 
  Code2, 
  Cpu, 
  Sparkles, 
  GraduationCap, 
  MapPin, 
  CheckCircle2, 
  Terminal, 
  User, 
  Mail,
  ExternalLink
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/personalInfo';
import profileImg from '../assets/profile.jpg';

export default function Hero({ onOpenResume }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeMainTab, setActiveMainTab] = useState('profile'); // 'profile' | 'ide'
  const [activeCodeTab, setActiveCodeTab] = useState('profile.js');

  const currentRole = personalInfo.roles[roleIndex];

  // Typewriter effect
  useEffect(() => {
    let timer;
    const typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayedText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayedText === '') {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
      }, 200);
    } else {
      timer = setTimeout(() => {
        setDisplayedText((prev) =>
          isDeleting
            ? currentRole.substring(0, prev.length - 1)
            : currentRole.substring(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRole]);

  return (
    <section id="home" className="section" style={{ paddingTop: '130px', minHeight: '92vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '48px',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          {/* Left Column: Hero Introduction Content */}
          <div>
            {/* Status & Mini Profile Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '6px 16px 6px 8px',
                borderRadius: '9999px',
                background: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                marginBottom: '24px'
              }}
            >
              {/* Mini avatar thumbnail */}
              <div
                style={{
                  position: 'relative',
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '1.5px solid var(--accent-emerald)'
                }}
              >
                <img
                  src={profileImg}
                  alt={personalInfo.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}
                  onError={(e) => {
                    e.currentTarget.src = '/profile.jpg';
                  }}
                />
              </div>

              <span className="pulse-beacon" style={{ width: '8px', height: '8px' }} />
              <span
                style={{
                  fontSize: '0.84rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--accent-emerald)',
                  fontWeight: '600'
                }}
              >
                {personalInfo.availabilityStatus}
              </span>
            </div>

            {/* Main Greeting */}
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 4.8vw, 4rem)',
                lineHeight: '1.12',
                marginBottom: '14px',
                letterSpacing: '-0.03em'
              }}
            >
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            {/* Typewriter Dynamic Title */}
            <div
              style={{
                fontSize: 'clamp(1.2rem, 2.6vw, 1.75rem)',
                fontFamily: 'var(--font-heading)',
                fontWeight: '600',
                color: 'var(--text-secondary)',
                marginBottom: '20px',
                minHeight: '2.4rem',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <span style={{ color: 'var(--accent-cyan-light)' }}>{displayedText}</span>
              <span className="typing-caret" />
            </div>

            {/* Rich Introduction Bio */}
            <p
              style={{
                fontSize: '1.06rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.75',
                maxWidth: '600px',
                marginBottom: '22px'
              }}
            >
              <strong style={{ color: 'var(--text-primary)' }}>Computer Science Engineering student at GIET Bhubaneswar (Batch 2023 - 2027)</strong>. I engineer scalable, high-performance web apps, clean REST APIs, and modern user experiences using the <strong style={{ color: 'var(--accent-cyan)' }}>MERN Stack</strong> (React.js, Node.js, Express, MongoDB) with hands-on <strong style={{ color: 'var(--accent-cyan-light)' }}>MERN Stack internship experience at Ephorsys Pvt. Limited</strong> and <strong style={{ color: 'var(--accent-violet-light)' }}>AI/ML practical training</strong> from CTTC Bhubaneswar.
            </p>

            {/* Key Information Chips */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                marginBottom: '32px'
              }}
            >
              <div className="badge-pill" style={{ background: 'rgba(6, 182, 212, 0.08)', borderColor: 'rgba(6, 182, 212, 0.25)', color: 'var(--accent-cyan-light)' }}>
                <GraduationCap size={14} />
                <span>GIET Bhubaneswar (2023 - 2027)</span>
              </div>
              <div className="badge-pill">
                <MapPin size={13} color="var(--accent-emerald)" />
                <span>Bhubaneswar, Odisha</span>
              </div>
              <div className="badge-pill">
                <CheckCircle2 size={13} color="var(--accent-violet-light)" />
                <span>Open for SDE / Full-Stack</span>
              </div>
            </div>

            {/* Call to Actions & Social Links */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '14px',
                marginBottom: '36px'
              }}
            >
              <a href="#projects" className="btn btn-primary">
                <span>Explore Projects</span>
                <ArrowRight size={18} />
              </a>

              <a
                href="/resume.pdf"
                download="Debabrata_Malik_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onOpenResume}
                className="btn btn-outline-glow"
              >
                <FileDown size={18} />
                <span>View & Download CV</span>
              </a>

              <a href="#contact" className="btn btn-secondary">
                <span>Contact Me</span>
              </a>

              {/* Social Quick Links */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: '6px' }}>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-secondary)',
                    transition: 'all var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--text-primary)';
                    e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  }}
                  title="GitHub Profile"
                  aria-label="GitHub"
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
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-secondary)',
                    transition: 'all var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--text-primary)';
                    e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  }}
                  title="LinkedIn Profile"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-secondary)',
                    transition: 'all var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--text-primary)';
                    e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  }}
                  title="Send Email"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

            {/* Quick Stat Highlights */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '14px',
                paddingTop: '20px',
                borderTop: '1px solid var(--border-subtle)',
                maxWidth: '600px'
              }}
            >
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx}>
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.25rem',
                      fontWeight: '700',
                      color: 'var(--accent-cyan-light)'
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: '0.78rem',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Developer Showcase Card (Photo & IDE Tabs) */}
          <div style={{ position: 'relative' }}>
            {/* Ambient Glow */}
            <div
              style={{
                position: 'absolute',
                inset: '-10px',
                background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.25), rgba(139, 92, 246, 0.25))',
                filter: 'blur(34px)',
                borderRadius: '24px',
                zIndex: 0
              }}
            />

            {/* Main Interactive Showcase Card */}
            <div
              className="card-glass"
              style={{
                position: 'relative',
                zIndex: 1,
                border: '1px solid rgba(255, 255, 255, 0.14)',
                background: 'rgba(11, 16, 28, 0.92)',
                boxShadow: 'var(--shadow-lg)',
                borderRadius: '20px',
                overflow: 'hidden'
              }}
            >
              {/* Card Top Window Bar with Switchable Tabs */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 18px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderBottom: '1px solid var(--border-subtle)'
                }}
              >
                {/* Traffic lights */}
                <div style={{ display: 'flex', gap: '7px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }} />
                </div>

                {/* Primary Mode Switcher: Photo Profile vs Live IDE */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    background: 'rgba(0, 0, 0, 0.25)',
                    padding: '3px',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.06)'
                  }}
                >
                  <button
                    onClick={() => setActiveMainTab('profile')}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '5px 12px',
                      borderRadius: '6px',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      fontFamily: 'var(--font-heading)',
                      background: activeMainTab === 'profile' ? 'var(--gradient-primary)' : 'transparent',
                      color: activeMainTab === 'profile' ? '#ffffff' : 'var(--text-secondary)',
                      boxShadow: activeMainTab === 'profile' ? '0 2px 10px rgba(6, 182, 212, 0.4)' : 'none',
                      transition: 'all var(--transition-fast)'
                    }}
                  >
                    <User size={13} />
                    <span>Profile & Photo</span>
                  </button>

                  <button
                    onClick={() => setActiveMainTab('ide')}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '5px 12px',
                      borderRadius: '6px',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      fontFamily: 'var(--font-heading)',
                      background: activeMainTab === 'ide' ? 'var(--gradient-primary)' : 'transparent',
                      color: activeMainTab === 'ide' ? '#ffffff' : 'var(--text-secondary)',
                      boxShadow: activeMainTab === 'ide' ? '0 2px 10px rgba(6, 182, 212, 0.4)' : 'none',
                      transition: 'all var(--transition-fast)'
                    }}
                  >
                    <Terminal size={13} />
                    <span>Live Code IDE</span>
                  </button>
                </div>

                {/* Active Indicator */}
                <div style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-emerald)' }} />
                  <span style={{ display: 'none' }} className="status-label-desktop">ready</span>
                </div>
              </div>

              {/* TAB 1: PHOTO & PROFILE SHOWCASE */}
              {activeMainTab === 'profile' && (
                <div style={{ padding: '24px' }}>
                  {/* Portrait Showcase Container */}
                  <div
                    style={{
                      position: 'relative',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      background: 'radial-gradient(circle at 50% 30%, rgba(6, 182, 212, 0.15), rgba(11, 16, 28, 0.95))',
                      border: '1px solid rgba(6, 182, 212, 0.3)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.45)',
                      maxHeight: '360px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {/* Developer High-Res Photo */}
                    <img
                      src={profileImg}
                      alt="Debabrata Malik - Software Developer"
                      style={{
                        width: '100%',
                        height: '360px',
                        objectFit: 'cover',
                        objectPosition: 'center 20%',
                        display: 'block',
                        filter: 'brightness(1.02) contrast(1.02)'
                      }}
                      onError={(e) => {
                        e.currentTarget.src = '/profile.jpg';
                      }}
                    />

                    {/* Gradient Overlay at Bottom of Image */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(11, 16, 28, 0.92) 0%, rgba(11, 16, 28, 0.2) 40%, transparent 100%)',
                        pointerEvents: 'none'
                      }}
                    />

                    {/* Verified Developer Pill (Top Left Overlay) */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '14px',
                        left: '14px',
                        background: 'rgba(8, 11, 18, 0.85)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(16, 185, 129, 0.35)',
                        borderRadius: '9999px',
                        padding: '5px 12px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.78rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--accent-emerald)',
                        fontWeight: '600',
                        boxShadow: 'var(--shadow-sm)'
                      }}
                    >
                      <CheckCircle2 size={13} color="var(--accent-emerald)" />
                      <span>Verified SDE Candidate</span>
                    </div>

                    {/* Overlay Identity at Image Bottom */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '16px',
                        left: '18px',
                        right: '18px',
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div>
                        <div
                          style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '1.4rem',
                            fontWeight: '700',
                            color: '#ffffff',
                            letterSpacing: '-0.02em',
                            textShadow: '0 2px 8px rgba(0,0,0,0.8)'
                          }}
                        >
                          Debabrata Malik
                        </div>
                        <div
                          style={{
                            fontSize: '0.84rem',
                            color: 'var(--accent-cyan-light)',
                            fontFamily: 'var(--font-mono)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px'
                          }}
                        >
                          <span>Full Stack Developer</span>
                          <span>•</span>
                          <span>GIET (2023 - 2027)</span>
                        </div>
                      </div>

                      <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={onOpenResume}
                        className="btn btn-outline-glow btn-sm"
                        style={{
                          padding: '6px 14px',
                          borderRadius: '8px',
                          fontSize: '0.8rem',
                          background: 'rgba(8, 11, 18, 0.75)',
                          backdropFilter: 'blur(8px)'
                        }}
                      >
                        <ExternalLink size={13} />
                        <span>View CV</span>
                      </a>
                    </div>
                  </div>

                  {/* Profile Highlights Underneath */}
                  <div
                    style={{
                      marginTop: '18px',
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      gap: '10px',
                      textAlign: 'center'
                    }}
                  >
                    <div
                      style={{
                        padding: '10px 8px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.025)',
                        border: '1px solid var(--border-subtle)'
                      }}
                    >
                      <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>DEGREE</div>
                      <div style={{ fontSize: '0.88rem', fontWeight: '700', color: 'var(--text-primary)', marginTop: '2px' }}>B.Tech CSE</div>
                    </div>

                    <div
                      style={{
                        padding: '10px 8px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.025)',
                        border: '1px solid var(--border-subtle)'
                      }}
                    >
                      <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>COLLEGE</div>
                      <div style={{ fontSize: '0.88rem', fontWeight: '700', color: 'var(--text-primary)', marginTop: '2px' }}>GIET BBS</div>
                    </div>

                    <div
                      style={{
                        padding: '10px 8px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.025)',
                        border: '1px solid var(--border-subtle)'
                      }}
                    >
                      <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>BATCH</div>
                      <div style={{ fontSize: '0.88rem', fontWeight: '700', color: 'var(--accent-cyan-light)', marginTop: '2px' }}>2023 - 2027</div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: INTERACTIVE CODE IDE */}
              {activeMainTab === 'ide' && (
                <div>
                  {/* Secondary File Tabs */}
                  <div
                    style={{
                      display: 'flex',
                      gap: '6px',
                      padding: '8px 18px',
                      background: 'rgba(0, 0, 0, 0.3)',
                      borderBottom: '1px solid var(--border-subtle)'
                    }}
                  >
                    {['profile.js', 'skills.json', 'status.sh'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveCodeTab(tab)}
                        style={{
                          padding: '4px 10px',
                          borderRadius: '6px',
                          fontSize: '0.78rem',
                          fontFamily: 'var(--font-mono)',
                          background: activeCodeTab === tab ? 'rgba(6, 182, 212, 0.15)' : 'transparent',
                          color: activeCodeTab === tab ? 'var(--accent-cyan-light)' : 'var(--text-muted)',
                          border: activeCodeTab === tab ? '1px solid rgba(6, 182, 212, 0.3)' : '1px solid transparent'
                        }}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  {/* Code Editor Body */}
                  <div
                    style={{
                      padding: '20px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.86rem',
                      lineHeight: '1.7',
                      overflowX: 'auto',
                      color: '#e2e8f0',
                      minHeight: '340px'
                    }}
                  >
                    {activeCodeTab === 'profile.js' && (
                      <pre style={{ margin: 0 }}>
                        <code>
                          <span style={{ color: '#818cf8' }}>const</span> candidate = {'{\n'}
                          {'  '}name: <span style={{ color: '#34d399' }}>'Debabrata Malik'</span>,{'\n'}
                          {'  '}education: <span style={{ color: '#34d399' }}>'B.Tech CSE (GIET Bhubaneswar)'</span>,{'\n'}
                          {'  '}batch: <span style={{ color: '#f59e0b' }}>'2023 - 2027'</span>,{'\n'}
                          {'  '}graduating: <span style={{ color: '#f59e0b' }}>2027</span>,{'\n'}
                          {'  '}roleTarget: [<span style={{ color: '#34d399' }}>'Software Dev'</span>, <span style={{ color: '#34d399' }}>'Full Stack Dev'</span>],{'\n'}
                          {'  '}coreStack: [<span style={{ color: '#38bdf8' }}>'React.js'</span>, <span style={{ color: '#38bdf8' }}>'Node.js'</span>, <span style={{ color: '#38bdf8' }}>'Express'</span>, <span style={{ color: '#38bdf8' }}>'MongoDB'</span>],{'\n'}
                          {'  '}internships: [<span style={{ color: '#34d399' }}>'MERN @ Ephorsys'</span>, <span style={{ color: '#34d399' }}>'AI/ML @ CTTC'</span>],{'\n'}
                          {'  '}isOpenForOffers: <span style={{ color: '#10b981' }}>true</span>,{'\n'}
                          {'  '}quickContact: () =&gt; <span style={{ color: '#818cf8' }}>window</span>.<span style={{ color: '#f43f5e' }}>open</span>(<span style={{ color: '#34d399' }}>'/resume.pdf'</span>){'\n'}
                          {'}'};
                        </code>
                      </pre>
                    )}

                    {activeCodeTab === 'skills.json' && (
                      <pre style={{ margin: 0 }}>
                        <code>
                          {`{
  "frontend": ["React.js", "JavaScript ES6+", "HTML5/CSS3", "Framer Motion"],
  "backend": ["Node.js", "Express.js", "REST APIs", "JWT"],
  "databases": ["MongoDB", "Mongoose", "MySQL"],
  "languages": ["JavaScript", "Python", "SQL"],
  "versionControl": "Git & GitHub",
  "ai_ml_tools": ["Scikit-Learn", "Pandas", "CTTC Practical Training"]
}`}
                        </code>
                      </pre>
                    )}

                    {activeCodeTab === 'status.sh' && (
                      <pre style={{ margin: 0 }}>
                        <code>
                          <span style={{ color: '#64748b' }}># Placement readiness check</span>{'\n'}
                          $ <span style={{ color: '#38bdf8' }}>check-status</span> --candidate <span style={{ color: '#34d399' }}>"Debabrata Malik"</span>{'\n'}
                          <span style={{ color: '#10b981' }}>✔ Academic Record: B.Tech CSE @ GIET (2023-2027)</span>{'\n'}
                          <span style={{ color: '#10b981' }}>✔ Ephorsys Pvt. Ltd: MERN Stack Internship Verified</span>{'\n'}
                          <span style={{ color: '#10b981' }}>✔ CTTC Bhubaneswar: AI/ML Training Verified</span>{'\n'}
                          <span style={{ color: '#10b981' }}>✔ Resume PDF: Ready for Recruiter Download</span>{'\n'}
                          <span style={{ color: '#f59e0b' }}>➜ Status: 100% Interview Ready</span>
                        </code>
                      </pre>
                    )}
                  </div>
                </div>
              )}

              {/* Card Footer Bar */}
              <div
                style={{
                  padding: '12px 20px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)'
                }}
              >
                <span>UTF-8 • Full Stack MERN Portfolio</span>
                <span style={{ color: 'var(--accent-cyan)' }}>GIET Bhubaneswar (2023 - 2027)</span>
              </div>
            </div>

            {/* Floating Tech Badges */}
            <div
              className="float-subtle"
              style={{
                position: 'absolute',
                top: '-16px',
                right: '-10px',
                background: 'rgba(13, 18, 31, 0.95)',
                border: '1px solid rgba(6, 182, 212, 0.4)',
                borderRadius: '10px',
                padding: '6px 12px',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--accent-cyan-light)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: 'var(--shadow-md)',
                zIndex: 2
              }}
            >
              <Code2 size={14} />
              <span>React.js + Node.js</span>
            </div>

            <div
              className="float-subtle"
              style={{
                position: 'absolute',
                bottom: '-14px',
                left: '-10px',
                background: 'rgba(13, 18, 31, 0.95)',
                border: '1px solid rgba(139, 92, 246, 0.4)',
                borderRadius: '10px',
                padding: '6px 12px',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--accent-violet-light)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: 'var(--shadow-md)',
                zIndex: 2,
                animationDelay: '-2.5s'
              }}
            >
              <Cpu size={14} />
              <span>AIML @ CTTC</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .hero-grid {
            grid-template-columns: 1.15fr 1fr !important;
          }
          .status-label-desktop {
            display: inline !important;
          }
        }
      `}</style>
    </section>
  );
}
