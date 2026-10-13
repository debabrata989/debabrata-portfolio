import React, { useState } from 'react';
import { FolderGit2, ArrowUpRight, Info } from 'lucide-react';
import { Github } from './Icons';
import { projectsData } from '../data/projects';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section" style={{ background: 'rgba(255, 255, 255, 0.015)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <FolderGit2 size={14} />
            <span>Portfolio Highlights</span>
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Software Projects</span>
          </h2>
          <p className="section-subtitle">
            Demonstrating full-stack engineering, clean REST API design, database schemas, and AI/ML model integration.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px'
          }}
          className="projects-grid"
        >
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="card-glass interactive-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                border: '1px solid var(--border-subtle)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              {/* Card Banner / Mockup Header */}
              <div
                style={{
                  height: '140px',
                  background: `linear-gradient(135deg, ${project.accentColor}22 0%, rgba(13, 18, 31, 0.95) 100%)`,
                  borderBottom: '1px solid var(--border-subtle)',
                  padding: '16px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Decorative Glowing Circle */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-30px',
                    right: '-30px',
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    background: project.accentColor,
                    filter: 'blur(45px)',
                    opacity: 0.25
                  }}
                />

                {/* Top Row: Category + Featured Tag */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 1 }}>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      color: project.accentColor,
                      background: 'rgba(8, 11, 18, 0.7)',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      border: `1px solid ${project.accentColor}44`
                    }}
                  >
                    {project.category}
                  </span>

                  <span
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    Production Ready
                  </span>
                </div>

                {/* Bottom Tagline */}
                <div style={{ zIndex: 1 }}>
                  <span
                    style={{
                      fontSize: '0.84rem',
                      color: 'var(--text-secondary)',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: '500'
                    }}
                  >
                    {project.subtitle}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div
                style={{
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1
                }}
              >
                <h3
                  style={{
                    fontSize: '1.3rem',
                    marginBottom: '10px',
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.01em'
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.92rem',
                    lineHeight: '1.65',
                    color: 'var(--text-secondary)',
                    marginBottom: '20px',
                    flex: 1
                  }}
                >
                  {project.summary}
                </p>

                {/* Metrics Highlight */}
                <div
                  style={{
                    fontSize: '0.82rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--accent-emerald)',
                    background: 'rgba(16, 185, 129, 0.08)',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    border: '1px solid rgba(16, 185, 129, 0.2)',
                    marginBottom: '18px'
                  }}
                >
                  ⚡ {project.metrics}
                </div>

                {/* Tech Pills */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px',
                    marginBottom: '24px'
                  }}
                >
                  {project.tags.slice(0, 4).map((tag, i) => (
                    <span key={i} className="badge-pill" style={{ fontSize: '0.74rem' }}>
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="badge-pill" style={{ fontSize: '0.74rem' }}>
                      +{project.tags.length - 4} more
                    </span>
                  )}
                </div>

                {/* Footer Buttons */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderTop: '1px solid var(--border-subtle)',
                    paddingTop: '16px'
                  }}
                >
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn btn-outline-glow btn-sm"
                    style={{ padding: '6px 14px' }}
                  >
                    <Info size={15} />
                    <span>View Architecture</span>
                  </button>

                  <div style={{ display: 'flex', gap: '8px' }}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '8px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--text-secondary)'
                      }}
                      title="View GitHub Repository"
                      aria-label="GitHub Repository"
                    >
                      <Github size={16} />
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '8px',
                        background: 'rgba(6, 182, 212, 0.1)',
                        border: '1px solid rgba(6, 182, 212, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent-cyan)'
                      }}
                      title="Live Demonstration"
                      aria-label="Live Demo"
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
}
