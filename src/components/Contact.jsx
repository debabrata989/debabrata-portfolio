import React, { useState } from 'react';
import { Mail, Copy, Check, MapPin, Send, MessageSquare, Loader2, ExternalLink, AlertCircle } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/personalInfo';

export default function Contact({ onShowToast }) {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    if (onShowToast) {
      onShowToast({
        type: 'success',
        message: 'Email address copied to clipboard!'
      });
    }
    setTimeout(() => setCopied(false), 2500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    personalInfo.email
  )}&su=${encodeURIComponent(
    formState.subject?.trim() || (formState.name ? `Portfolio Inquiry from ${formState.name}` : 'Portfolio Inquiry')
  )}&body=${encodeURIComponent(
    `Name: ${formState.name || 'Not provided'}\nEmail: ${formState.email || 'Not provided'}\n\nMessage:\n${formState.message || ''}`
  )}`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      if (onShowToast) {
        onShowToast({
          type: 'error',
          message: 'Please fill in all required fields (Name, Email, Message).'
        });
      }
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Connect to FormSubmit to deliver messages directly to Debabrata's Gmail
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          _replyto: formState.email,
          _subject: formState.subject?.trim()
            ? `[Portfolio Contact] ${formState.subject} (from ${formState.name})`
            : `[Portfolio Contact] New message from ${formState.name}`,
          message: formState.message,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && (data.success === 'true' || data.success === true || !data.error)) {
        setIsSubmitting(false);
        setSubmitStatus({
          type: 'success',
          message: `Message sent directly to ${personalInfo.email}!`
        });

        // Trigger Confetti celebration
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#06b6d4', '#8b5cf6', '#10b981', '#38bdf8']
        });

        if (onShowToast) {
          onShowToast({
            type: 'success',
            message: `Message sent directly to ${personalInfo.email}!`
          });
        }

        setFormState({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(data.message || 'Server error while sending message');
      }
    } catch (err) {
      console.error('Email submission error:', err);
      setIsSubmitting(false);
      setSubmitStatus({
        type: 'error',
        message: 'Could not send message automatically. Please click "Open in Gmail" below to send directly!'
      });

      if (onShowToast) {
        onShowToast({
          type: 'error',
          message: 'Delivery error. Please use "Open in Gmail" button.'
        });
      }
    }
  };

  return (
    <section id="contact" className="section" style={{ background: 'rgba(255, 255, 255, 0.01)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <MessageSquare size={14} />
            <span>Connect</span>
          </div>
          <h2 className="section-title">
            Let's Start a <span className="gradient-text">Conversation</span>
          </h2>
          <p className="section-subtitle">
            Whether you have an upcoming software developer opportunity, campus hiring query, or technical question, my inbox is always open.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '40px',
            maxWidth: '1080px',
            margin: '0 auto'
          }}
          className="contact-grid"
        >
          {/* Left Column: Contact Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Email Card with Copy Action */}
            <div className="card-glass" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '8px',
                      background: 'rgba(6, 182, 212, 0.12)',
                      border: '1px solid rgba(6, 182, 212, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-cyan)'
                    }}
                  >
                    <Mail size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      Direct Email
                    </div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      style={{
                        fontSize: '0.96rem',
                        fontWeight: '600',
                        color: 'var(--text-primary)',
                        wordBreak: 'break-all'
                      }}
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    style={{ padding: '6px 10px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '5px' }}
                    title="Compose email directly in Gmail"
                    aria-label="Compose email directly in Gmail"
                  >
                    <Mail size={14} color="var(--accent-cyan)" />
                    <span>Gmail</span>
                    <ExternalLink size={12} />
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="btn btn-secondary btn-sm"
                    style={{ padding: '6px 12px' }}
                    title="Copy email to clipboard"
                    aria-label="Copy email"
                  >
                    {copied ? <Check size={15} color="var(--accent-emerald)" /> : <Copy size={15} />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* LinkedIn Card - Full Card Clickable with Connect Action */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="card-glass interactive-card"
              style={{
                padding: '20px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                textDecoration: 'none',
                transition: 'all var(--transition-normal)',
                cursor: 'pointer',
                borderColor: 'rgba(10, 102, 194, 0.35)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#0a66c2';
                e.currentTarget.style.boxShadow = '0 0 24px rgba(10, 102, 194, 0.25)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(10, 102, 194, 0.35)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              aria-label="Connect with Debabrata Malik on LinkedIn"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(10, 102, 194, 0.18)',
                    border: '1px solid rgba(10, 102, 194, 0.45)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#38bdf8',
                    flexShrink: 0
                  }}
                >
                  <Linkedin size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Professional Network
                  </div>
                  <div style={{ fontSize: '0.98rem', fontWeight: '600', color: 'var(--text-primary)', marginTop: '2px' }}>
                    Debabrata Malik on LinkedIn
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#38bdf8', fontFamily: 'var(--font-mono)', marginTop: '1px' }}>
                    linkedin.com/in/debabrata-malik-187281352
                  </div>
                </div>
              </div>

              <div
                className="btn btn-outline-glow btn-sm"
                style={{
                  padding: '7px 14px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  borderColor: 'rgba(10, 102, 194, 0.5)',
                  color: '#38bdf8',
                  pointerEvents: 'none',
                  flexShrink: 0
                }}
              >
                <span>Connect</span>
                <ExternalLink size={14} />
              </div>
            </a>

            {/* GitHub Card - Full Card Clickable */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="card-glass interactive-card"
              style={{
                padding: '20px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                textDecoration: 'none',
                transition: 'all var(--transition-normal)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(6, 182, 212, 0.2)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              aria-label="View Debabrata Malik's GitHub Profile"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-primary)',
                    flexShrink: 0
                  }}
                >
                  <Github size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Code Repositories
                  </div>
                  <div style={{ fontSize: '0.98rem', fontWeight: '600', color: 'var(--text-primary)', marginTop: '2px' }}>
                    github.com/debabrata989
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--accent-cyan-light)', fontFamily: 'var(--font-mono)', marginTop: '1px' }}>
                    View Open Source & Projects
                  </div>
                </div>
              </div>

              <div
                className="btn btn-secondary btn-sm"
                style={{
                  padding: '7px 14px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  pointerEvents: 'none',
                  flexShrink: 0
                }}
              >
                <span>View Code</span>
                <ExternalLink size={14} />
              </div>
            </a>

            {/* Location & Academic Base */}
            <div className="card-glass" style={{ padding: '20px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    background: 'rgba(16, 185, 129, 0.12)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-emerald)'
                  }}
                >
                  <MapPin size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    Current Location & College
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-primary)' }}>
                    {personalInfo.location} • GIET Bhubaneswar
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="card-glass" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--text-primary)' }}>
              Send a Direct Message
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
              Fill out the details below and I will respond to your inquiry within 24 hours.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div>
                <label
                  htmlFor="contact-name"
                  style={{
                    display: 'block',
                    fontSize: '0.82rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-secondary)',
                    marginBottom: '6px'
                  }}
                >
                  Your Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Rahul Sharma"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-subtle)',
                    color: '#ffffff',
                    fontSize: '0.92rem',
                    outline: 'none',
                    transition: 'border var(--transition-fast)'
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--accent-cyan)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  style={{
                    display: 'block',
                    fontSize: '0.82rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-secondary)',
                    marginBottom: '6px'
                  }}
                >
                  Your Email Address *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleInputChange}
                  placeholder="name@company.com"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-subtle)',
                    color: '#ffffff',
                    fontSize: '0.92rem',
                    outline: 'none',
                    transition: 'border var(--transition-fast)'
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--accent-cyan)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  style={{
                    display: 'block',
                    fontSize: '0.82rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-secondary)',
                    marginBottom: '6px'
                  }}
                >
                  Subject / Role Opportunity
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formState.subject}
                  onChange={handleInputChange}
                  placeholder="Software Developer Opportunity / Campus Connect"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-subtle)',
                    color: '#ffffff',
                    fontSize: '0.92rem',
                    outline: 'none',
                    transition: 'border var(--transition-fast)'
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--accent-cyan)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  style={{
                    display: 'block',
                    fontSize: '0.82rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-secondary)',
                    marginBottom: '6px'
                  }}
                >
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows="4"
                  value={formState.message}
                  onChange={handleInputChange}
                  placeholder="Hi Debabrata, we came across your portfolio and would like to invite you for an interview..."
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-subtle)',
                    color: '#ffffff',
                    fontSize: '0.92rem',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                    transition: 'border var(--transition-fast)'
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--accent-cyan)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                />
              </div>

              {/* Submission Status Alert */}
              {submitStatus && submitStatus.type === 'success' && (
                <div
                  style={{
                    padding: '14px 16px',
                    borderRadius: '10px',
                    background: 'rgba(16, 185, 129, 0.12)',
                    border: '1px solid rgba(16, 185, 129, 0.35)',
                    color: '#34d399',
                    fontSize: '0.86rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600' }}>
                    <Check size={18} />
                    <span>{submitStatus.message}</span>
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.75)', lineHeight: '1.4' }}>
                    💡 <strong>Gmail Verification:</strong> If this is your first test submission, FormSubmit sends an activation link to <strong>{personalInfo.email}</strong>. Open your Gmail and click "Activate Form" once to verify your inbox!
                  </div>
                </div>
              )}

              {submitStatus && submitStatus.type === 'error' && (
                <div
                  style={{
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: 'rgba(239, 68, 68, 0.12)',
                    border: '1px solid rgba(239, 68, 68, 0.35)',
                    color: '#f87171',
                    fontSize: '0.86rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <AlertCircle size={18} style={{ flexShrink: 0 }} />
                  <span>{submitStatus.message}</span>
                </div>
              )}

              <div style={{ display: 'flex', gap: '10px', marginTop: '6px', flexWrap: 'wrap' }}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{ flex: '1 1 200px' }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="spin-fast" />
                      <span>Sending to Gmail...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <a
                  href={gmailComposeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{
                    flex: '1 1 180px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none'
                  }}
                  title="Open directly in Gmail web composer"
                >
                  <Mail size={16} color="var(--accent-cyan)" />
                  <span>Open in Gmail</span>
                  <ExternalLink size={13} />
                </a>
              </div>

              {/* Direct LinkedIn Connect Link in Form */}
              <div
                style={{
                  marginTop: '16px',
                  paddingTop: '16px',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  flexWrap: 'wrap'
                }}
              >
                <span style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                  Prefer connecting on professional networks?
                </span>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.86rem',
                    fontWeight: '600',
                    color: '#38bdf8',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    textDecoration: 'none'
                  }}
                >
                  <Linkedin size={15} />
                  <span>Connect on LinkedIn</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 860px) {
          .contact-grid {
            grid-template-columns: 1fr 1.2fr !important;
          }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .spin-fast {
          animation: spin 0.8s linear infinite;
        }
      `}</style>
    </section>
  );
}
