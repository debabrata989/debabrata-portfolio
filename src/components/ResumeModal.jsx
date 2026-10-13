import React, { useEffect } from 'react';
import { X, FileDown, Printer, ExternalLink, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

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
        padding: '16px',
        background: 'rgba(5, 8, 15, 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)'
      }}
      onClick={onClose}
    >
      <div
        className="card-glass"
        style={{
          width: '100%',
          maxWidth: '850px',
          maxHeight: '92vh',
          display: 'flex',
          flexDirection: 'column',
          background: '#0d1322',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-lg)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '14px 20px',
            background: 'rgba(255, 255, 255, 0.03)',
            borderBottom: '1px solid var(--border-subtle)'
          }}
        >
          <div>
            <div style={{ fontWeight: '700', fontSize: '1.05rem', color: 'var(--text-primary)' }}>
              Debabrata Malik &bull; Curriculum Vitae (CV)
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--accent-cyan-light)', fontFamily: 'var(--font-mono)' }}>
              ATS-Optimized &bull; B.Tech CSE (2023 - 2027) &bull; Verified Resume
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* Download Official PDF */}
            <a
              href="/resume.pdf"
              download="Debabrata_Malik_Resume.pdf"
              className="btn btn-primary btn-sm"
              style={{
                padding: '6px 14px',
                borderRadius: '8px',
                fontSize: '0.82rem'
              }}
            >
              <FileDown size={15} />
              <span>Download PDF</span>
            </a>

            {/* Print Button */}
            <button
              onClick={() => window.print()}
              className="btn btn-secondary btn-sm"
              style={{
                padding: '6px 12px',
                borderRadius: '8px',
                fontSize: '0.82rem'
              }}
              title="Print Resume"
            >
              <Printer size={15} />
              <span className="hide-mobile-text">Print</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)'
              }}
              aria-label="Close CV Viewer"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Content */}
        <div
          style={{
            overflowY: 'auto',
            padding: '24px',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {/* Printable White Sheet Document */}
          <div
            style={{
              background: '#ffffff',
              color: '#1e293b',
              padding: '40px 36px',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              lineHeight: '1.5'
            }}
          >
            {/* 1. Resume Header */}
            <div style={{ borderBottom: '2px solid #0284c7', paddingBottom: '12px', marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
                <div>
                  <h1 style={{ fontSize: '1.85rem', fontWeight: '800', color: '#0f172a', margin: '0 0 4px 0', letterSpacing: '-0.02em' }}>
                    DEBABRATA MALIK
                  </h1>
                  <div style={{ fontSize: '1rem', fontWeight: '700', color: '#0284c7' }}>
                    Full Stack Software Developer &bull; B.Tech CSE (Batch 2023 &ndash; 2027)
                  </div>
                </div>

                <div style={{ fontSize: '0.82rem', color: '#475569', textAlign: 'right', lineHeight: '1.4' }}>
                  <div><b>Email:</b> <a href="mailto:debabratamalik989@gmail.com" style={{ color: '#0284c7', textDecoration: 'none' }}>debabratamalik989@gmail.com</a></div>
                  <div><b>Location:</b> Bhubaneswar, Odisha, India</div>
                  <div><b>GitHub:</b> <a href="https://github.com/debabrata989" target="_blank" rel="noopener noreferrer" style={{ color: '#0284c7', textDecoration: 'none' }}>github.com/debabrata989</a></div>
                  <div><b>LinkedIn:</b> <a href="https://www.linkedin.com/in/debabrata-malik-187281352/" target="_blank" rel="noopener noreferrer" style={{ color: '#0284c7', textDecoration: 'none' }}>linkedin.com/in/debabrata-malik-187281352</a></div>
                </div>
              </div>
            </div>

            {/* 2. Professional Summary */}
            <div style={{ marginBottom: '16px' }}>
              <h2 style={{ fontSize: '0.95rem', fontWeight: '800', color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #cbd5e1', paddingBottom: '3px', marginBottom: '6px' }}>
                Professional Summary
              </h2>
              <p style={{ fontSize: '0.85rem', color: '#334155', margin: 0, lineHeight: '1.6' }}>
                Motivated <b>Computer Science & Engineering undergraduate (Batch 2023&ndash;2027)</b> at GIET Bhubaneswar with practical industry internship experience in <b>MERN Stack Development at Ephorsys Pvt. Limited</b> and technical training in <b>AI/ML at CTTC Bhubaneswar</b>. Hands-on expertise building scalable web applications, robust RESTful APIs, and database models using <b>React.js, Node.js, Express.js, and MongoDB</b>. Strong foundations in Data Structures, Algorithms, and clean software architecture.
              </p>
            </div>

            {/* 3. Technical Skills */}
            <div style={{ marginBottom: '16px' }}>
              <h2 style={{ fontSize: '0.95rem', fontWeight: '800', color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #cbd5e1', paddingBottom: '3px', marginBottom: '8px' }}>
                Technical Skills
              </h2>
              <div style={{ fontSize: '0.84rem', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div><b>&bull; Frontend:</b> React.js, JavaScript (ES6+), HTML5, CSS3, Responsive Design, Framer Motion, Context API</div>
                <div><b>&bull; Backend:</b> Node.js, Express.js, RESTful Architecture, JWT Authentication, Middleware, Postman</div>
                <div><b>&bull; Databases:</b> MongoDB, Mongoose ODM, MySQL (Relational DB & SQL Queries)</div>
                <div><b>&bull; Languages:</b> JavaScript, Python, SQL, C / C++ Fundamentals</div>
                <div><b>&bull; Developer Tools:</b> Git, GitHub, Vite, VS Code, Scikit-Learn, Pandas, NumPy, Agile Workflows</div>
              </div>
            </div>

            {/* 4. Industry Internships & Experience */}
            <div style={{ marginBottom: '16px' }}>
              <h2 style={{ fontSize: '0.95rem', fontWeight: '800', color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #cbd5e1', paddingBottom: '3px', marginBottom: '8px' }}>
                Industry Experience & Internships
              </h2>

              {/* Ephorsys */}
              <div style={{ marginBottom: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                  <div style={{ fontWeight: '700', fontSize: '0.9rem', color: '#0f172a' }}>
                    MERN Stack Developer Intern &bull; <span style={{ color: '#0284c7' }}>Ephorsys Pvt. Limited</span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: '600' }}>
                    2024 &ndash; 2025 | Bhubaneswar / Remote
                  </div>
                </div>
                <ul style={{ margin: '4px 0 0 16px', padding: 0, fontSize: '0.83rem', color: '#334155', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  <li>Developed modular, responsive frontend components in <b>React.js</b> with reusable architecture and modern state management.</li>
                  <li>Designed and integrated secure <b>RESTful APIs</b> with <b>Node.js & Express.js</b>, implementing JWT auth and request validation.</li>
                  <li>Engineered <b>MongoDB</b> schemas via Mongoose ODM for reliable document storage, indexing, and high-performance CRUD queries.</li>
                  <li>Tested API routes with <b>Postman</b> and managed version control workflows using <b>Git & GitHub</b> in an agile setting.</li>
                </ul>
              </div>

              {/* CTTC */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                  <div style={{ fontWeight: '700', fontSize: '0.9rem', color: '#0f172a' }}>
                    Artificial Intelligence & Machine Learning Intern &bull; <span style={{ color: '#0284c7' }}>CTTC Bhubaneswar</span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: '600' }}>
                    2024 | Bhubaneswar, Odisha
                  </div>
                </div>
                <ul style={{ margin: '4px 0 0 16px', padding: 0, fontSize: '0.83rem', color: '#334155', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  <li>Completed training on <b>Python scientific computing</b>, data preprocessing pipelines, and exploratory data analysis (EDA).</li>
                  <li>Trained and benchmarked supervised machine learning models (Linear/Logistic Regression, Decision Trees) with <b>Scikit-Learn</b>.</li>
                  <li>Utilized <b>Pandas & NumPy</b> for data cleansing, missing value handling, outlier detection, and performance evaluation.</li>
                </ul>
              </div>
            </div>

            {/* 5. Featured Software Projects */}
            <div style={{ marginBottom: '16px' }}>
              <h2 style={{ fontSize: '0.95rem', fontWeight: '800', color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #cbd5e1', paddingBottom: '3px', marginBottom: '8px' }}>
                Featured Software Projects
              </h2>

              {/* OmniAI Assistant */}
              <div style={{ marginBottom: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                  <div style={{ fontWeight: '700', fontSize: '0.88rem', color: '#0f172a' }}>
                    OmniAI: Conversational AI Voice & Task Assistant <span style={{ fontWeight: '500', color: '#64748b', fontSize: '0.8rem' }}>| React.js, Node.js, LLM API, Web Speech API</span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Full Stack & GenAI</div>
                </div>
                <div style={{ fontSize: '0.82rem', color: '#334155', marginTop: '2px' }}>
                  &bull; Built real-time multi-modal conversational AI copilot with SSE token streaming, voice-to-text / TTS, and MongoDB chat persistence.
                </div>
              </div>

              {/* EduCampus College ERP */}
              <div style={{ marginBottom: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                  <div style={{ fontWeight: '700', fontSize: '0.88rem', color: '#0f172a' }}>
                    EduCampus: College ERP & Student Management System <span style={{ fontWeight: '500', color: '#64748b', fontSize: '0.8rem' }}>| React.js, Node.js, Express, MongoDB, RBAC</span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>MERN Stack Enterprise</div>
                </div>
                <div style={{ fontSize: '0.82rem', color: '#334155', marginTop: '2px' }}>
                  &bull; Architected multi-role ERP portal (Admin/Faculty/Student) with automated attendance calculations, semester SGPA/CGPA engine, and fee tracking.
                </div>
              </div>

              {/* Food Delivery */}
              <div style={{ marginBottom: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                  <div style={{ fontWeight: '700', fontSize: '0.88rem', color: '#0f172a' }}>
                    MERN Food Delivery Application <span style={{ fontWeight: '500', color: '#64748b', fontSize: '0.8rem' }}>| React.js, Node.js, Express, MongoDB, JWT</span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Full Stack Web App</div>
                </div>
                <div style={{ fontSize: '0.82rem', color: '#334155', marginTop: '2px' }}>
                  &bull; Engineered full-stack food delivery application with user authentication, live cart state, restaurant listings, and order workflows.
                </div>
              </div>

              {/* Student Helper */}
              <div style={{ marginBottom: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                  <div style={{ fontWeight: '700', fontSize: '0.88rem', color: '#0f172a' }}>
                    Student Helper & AI Study Assistant <span style={{ fontWeight: '500', color: '#64748b', fontSize: '0.8rem' }}>| React.js, Node.js, AI API, Modern CSS</span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>EdTech Web Solution</div>
                </div>
                <div style={{ fontSize: '0.82rem', color: '#334155', marginTop: '2px' }}>
                  &bull; Created educational assistant allowing students to query academic topics, generate study notes, and track exam schedules with responsive UI.
                </div>
              </div>

              {/* Developer Portfolio */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                  <div style={{ fontWeight: '700', fontSize: '0.88rem', color: '#0f172a' }}>
                    Developer Portfolio & Interactive Shell <span style={{ fontWeight: '500', color: '#64748b', fontSize: '0.8rem' }}>| React 19, Vite, Framer Motion, Vanilla CSS</span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Personal Portfolio</div>
                </div>
                <div style={{ fontSize: '0.82rem', color: '#334155', marginTop: '2px' }}>
                  &bull; Designed 100/100 responsive developer portfolio with custom CSS tokens, smooth scrolling, and custom interactive terminal emulator.
                </div>
              </div>
            </div>

            {/* 6. Education */}
            <div style={{ marginBottom: '14px' }}>
              <h2 style={{ fontSize: '0.95rem', fontWeight: '800', color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #cbd5e1', paddingBottom: '3px', marginBottom: '8px' }}>
                Education
              </h2>

              <div style={{ marginBottom: '6px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                  <div style={{ fontWeight: '700', fontSize: '0.88rem', color: '#0f172a' }}>
                    Bachelor of Technology (B.Tech) in Computer Science & Engineering
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: '700' }}>
                    Batch 2023 &ndash; 2027
                  </div>
                </div>
                <div style={{ fontSize: '0.83rem', color: '#0284c7', fontWeight: '600' }}>
                  Gandhi Institute for Education and Technology (GIET), Bhubaneswar, Odisha
                </div>
                <div style={{ fontSize: '0.8rem', color: '#475569', marginTop: '1px' }}>
                  &bull; <i>Relevant Coursework:</i> Data Structures & Algorithms, Object-Oriented Programming (OOP), DBMS, Computer Networks, OS.
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                  <div style={{ fontWeight: '700', fontSize: '0.88rem', color: '#0f172a' }}>
                    Higher Secondary Certificate (+2 Science) &bull; Bhadrak Autonomous College
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                    Completed
                  </div>
                </div>
              </div>
            </div>

            {/* 7. Certifications */}
            <div>
              <h2 style={{ fontSize: '0.95rem', fontWeight: '800', color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #cbd5e1', paddingBottom: '3px', marginBottom: '6px' }}>
                Certifications
              </h2>
              <div style={{ fontSize: '0.82rem', color: '#334155', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                <div>&bull; <b>MERN Stack Development Internship Certificate</b> &ndash; Ephorsys Pvt. Limited (2024 &ndash; 2025)</div>
                <div>&bull; <b>Artificial Intelligence & Machine Learning Certificate</b> &ndash; Central Tool Room & Training Centre (CTTC), Bhubaneswar (2024)</div>
                <div>&bull; <b>Workshop on Practical Machine Learning with Python</b> &ndash; Technical Training Division (2024)</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .hide-mobile-text {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
