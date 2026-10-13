import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, CornerDownLeft, RotateCcw } from 'lucide-react';
import { engineeringWorkflow, terminalCommands } from '../data/workflow';

export default function HowIBuild() {
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'system', text: "Welcome to Debabrata Malik's Interactive Developer Shell." },
    { type: 'system', text: "Type 'help' or click any quick command chip below to explore." }
  ]);
  const [inputVal, setInputVal] = useState('');
  const terminalBodyRef = useRef(null);
  const isFirstRender = useRef(true);

  const executeCommand = (cmdText) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setTerminalHistory([]);
      setInputVal('');
      return;
    }

    const output = terminalCommands[trimmed] || [
      `Command not recognized: '${trimmed}'.`,
      "Type 'help' to see valid commands (bio, skills, projects, experience, contact, clear)."
    ];

    setTerminalHistory((prev) => [
      ...prev,
      { type: 'input', text: `$ ${trimmed}` },
      ...output.map((line) => ({ type: 'output', text: line }))
    ]);

    setInputVal('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTo({
        top: terminalBodyRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [terminalHistory]);

  return (
    <section id="workflow" className="section" style={{ background: 'rgba(255, 255, 255, 0.015)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Engineering Process</span>
          </div>
          <h2 className="section-title">
            How I <span className="gradient-text">Build Software</span>
          </h2>
          <p className="section-subtitle">
            From problem discovery and database schemas to clean code, testing, and production deployment.
          </p>
        </div>

        {/* 6-Stage Roadmap Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
            marginBottom: '64px'
          }}
        >
          {engineeringWorkflow.map((stage, idx) => (
            <div
              key={idx}
              className="card-glass"
              style={{
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.2rem',
                    fontWeight: '800',
                    color: 'var(--accent-cyan)'
                  }}
                >
                  {stage.step}
                </span>

                <span
                  style={{
                    fontSize: '0.74rem',
                    fontFamily: 'var(--font-mono)',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    color: 'var(--text-muted)'
                  }}
                >
                  Stage {stage.step}
                </span>
              </div>

              <div>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '4px' }}>
                  {stage.phase}
                </h3>
                <div style={{ fontSize: '0.82rem', color: 'var(--accent-violet-light)', fontWeight: '500' }}>
                  {stage.tagline}
                </div>
              </div>

              <p style={{ fontSize: '0.88rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                {stage.description}
              </p>

              <div
                style={{
                  marginTop: 'auto',
                  paddingTop: '14px',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px'
                }}
              >
                {stage.deliverables.map((del, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      background: 'rgba(6, 182, 212, 0.06)',
                      border: '1px solid rgba(6, 182, 212, 0.2)',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      color: 'var(--accent-cyan-light)'
                    }}
                  >
                    ✓ {del}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Recruiter Terminal */}
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div
            className="card-glass"
            style={{
              background: 'rgba(8, 12, 22, 0.96)',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            {/* Terminal Window Header */}
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ef4444' }} />
                <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#f59e0b' }} />
                <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#10b981' }} />
                <span
                  style={{
                    marginLeft: '8px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    color: 'var(--text-muted)'
                  }}
                >
                  debabrata@recruiter-shell: ~ (bash)
                </span>
              </div>

              <button
                onClick={() => setTerminalHistory([])}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  fontSize: '0.74rem',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-mono)'
                }}
                title="Clear console"
              >
                <RotateCcw size={12} />
                clear
              </button>
            </div>

            {/* Quick Command Chips */}
            <div
              style={{
                padding: '10px 18px',
                background: 'rgba(0, 0, 0, 0.25)',
                borderBottom: '1px solid var(--border-subtle)',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                Quick Run:
              </span>
              {['help', 'bio', 'skills', 'projects', 'experience', 'contact'].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => executeCommand(cmd)}
                  style={{
                    padding: '3px 9px',
                    borderRadius: '5px',
                    fontSize: '0.74rem',
                    fontFamily: 'var(--font-mono)',
                    background: 'rgba(6, 182, 212, 0.1)',
                    border: '1px solid rgba(6, 182, 212, 0.25)',
                    color: 'var(--accent-cyan-light)',
                    cursor: 'pointer'
                  }}
                >
                  {cmd}
                </button>
              ))}
            </div>

            {/* Terminal Body */}
            <div
              ref={terminalBodyRef}
              style={{
                padding: '18px',
                minHeight: '220px',
                maxHeight: '340px',
                overflowY: 'auto',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                lineHeight: '1.65',
                color: '#e2e8f0'
              }}
            >
              {terminalHistory.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    color:
                      item.type === 'input'
                        ? 'var(--accent-cyan)'
                        : item.type === 'system'
                        ? 'var(--accent-emerald)'
                        : '#cbd5e1',
                    marginBottom: '4px',
                    whiteSpace: 'pre-wrap'
                  }}
                >
                  {item.text}
                </div>
              ))}
            </div>

            {/* Terminal Input Form */}
            <form
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '12px 18px',
                borderTop: '1px solid var(--border-subtle)',
                background: 'rgba(0, 0, 0, 0.2)'
              }}
            >
              <span style={{ color: 'var(--accent-cyan)', marginRight: '10px', fontFamily: 'var(--font-mono)' }}>
                $
              </span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Type 'help', 'projects', 'skills'..."
                style={{
                  flex: 1,
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#ffffff',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.86rem'
                }}
              />
              <button
                type="submit"
                style={{
                  color: 'var(--accent-cyan)',
                  padding: '4px 8px',
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
                aria-label="Send command"
              >
                <CornerDownLeft size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
