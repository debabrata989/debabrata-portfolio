import React, { useState } from 'react';
import {
  Code2,
  FileCode2,
  Terminal,
  Database,
  Atom,
  Layout,
  Palette,
  Sparkles,
  Server,
  Cpu,
  Network,
  Layers,
  HardDrive,
  GitBranch,
  Zap,
  Send,
  BrainCircuit,
  Binary,
  Layers2
} from 'lucide-react';
import { skillCategories, skillsData } from '../data/skills';

// Safe icon mapper
const iconMap = {
  FileCode2: <FileCode2 size={22} />,
  Terminal: <Terminal size={22} />,
  Database: <Database size={22} />,
  Atom: <Atom size={22} />,
  Layout: <Layout size={22} />,
  Palette: <Palette size={22} />,
  Sparkles: <Sparkles size={22} />,
  Server: <Server size={22} />,
  Cpu: <Cpu size={22} />,
  Network: <Network size={22} />,
  Layers: <Layers size={22} />,
  HardDrive: <HardDrive size={22} />,
  GitBranch: <GitBranch size={22} />,
  Zap: <Zap size={22} />,
  Send: <Send size={22} />,
  Code2: <Code2 size={22} />,
  BrainCircuit: <BrainCircuit size={22} />,
  Binary: <Binary size={22} />
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredSkills =
    selectedCategory === 'all'
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedCategory);

  const getLevelBadge = (level) => {
    switch (level) {
      case 'Core':
        return {
          bg: 'rgba(6, 182, 212, 0.12)',
          border: 'rgba(6, 182, 212, 0.3)',
          color: 'var(--accent-cyan-light)',
          label: 'Core Competency'
        };
      case 'Proficient':
        return {
          bg: 'rgba(139, 92, 246, 0.12)',
          border: 'rgba(139, 92, 246, 0.3)',
          color: 'var(--accent-violet-light)',
          label: 'Proficient'
        };
      default:
        return {
          bg: 'rgba(16, 185, 129, 0.12)',
          border: 'rgba(16, 185, 129, 0.3)',
          color: 'var(--accent-emerald)',
          label: 'Practicing & Applied'
        };
    }
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Layers2 size={14} />
            <span>Technical Competencies</span>
          </div>
          <h2 className="section-title">
            Technologies & <span className="gradient-text">Developer Toolkit</span>
          </h2>
          <p className="section-subtitle">
            Curated through university coursework at GIET Bhubaneswar, intensive MERN stack project engineering, and practical AI/ML training at CTTC.
          </p>
        </div>

        {/* Category Filters */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '42px'
          }}
        >
          {skillCategories.map((category) => {
            const isSelected = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '9999px',
                  fontSize: '0.88rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                  background: isSelected ? 'var(--gradient-primary)' : 'rgba(255, 255, 255, 0.04)',
                  color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                  border: isSelected ? '1px solid transparent' : '1px solid var(--border-subtle)',
                  boxShadow: isSelected ? '0 4px 14px rgba(6, 182, 212, 0.3)' : 'none'
                }}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '20px'
          }}
        >
          {filteredSkills.map((skill, index) => {
            const badge = getLevelBadge(skill.level);
            return (
              <div
                key={index}
                className="card-glass interactive-card"
                style={{
                  padding: '22px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-cyan)'
                    }}
                  >
                    {iconMap[skill.icon] || <Code2 size={22} />}
                  </div>

                  <span
                    style={{
                      padding: '4px 10px',
                      borderRadius: '9999px',
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: '600',
                      background: badge.bg,
                      border: `1px solid ${badge.border}`,
                      color: badge.color
                    }}
                  >
                    {badge.label}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginTop: '4px'
                  }}
                >
                  {skill.name}
                </h3>

                <p
                  style={{
                    fontSize: '0.84rem',
                    color: 'var(--text-muted)',
                    lineHeight: '1.5'
                  }}
                >
                  {skill.highlight}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
