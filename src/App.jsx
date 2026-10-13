import React, { useState, useEffect } from 'react';
import './styles/index.css';
import './styles/animations.css';

import BackgroundGlow from './components/BackgroundGlow';
import CustomCursor from './components/CustomCursor';
import Toast from './components/Toast';
import ResumeModal from './components/ResumeModal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import HowIBuild from './components/HowIBuild';
import ResumeCTA from './components/ResumeCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [toast, setToast] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    // Prevent browser from restoring previous scroll position down the page
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // If page is loaded or refreshed with a hash (e.g. #contact), clear it so it starts from top
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }

    // Scroll to the very beginning of the portfolio
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const showToast = ({ type, message }) => {
    setToast({ type, message });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  const openResume = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setIsResumeOpen(true);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Background Ambient Glow & Grid */}
      <BackgroundGlow />

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Global Notification Toast */}
      <Toast toast={toast} onClose={() => setToast(null)} />

      {/* Interactive In-App Resume / CV Viewer Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      {/* Sticky Header Navigation */}
      <Navbar onOpenResume={openResume} />

      {/* Main Portfolio Sections */}
      <main id="main-content">
        <Hero onOpenResume={openResume} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <HowIBuild />
        <ResumeCTA onOpenResume={openResume} />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer onOpenResume={openResume} />
    </div>
  );
}
