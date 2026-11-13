import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { LinkedInModal } from './components/LinkedInModal';

export const App: React.FC = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isLinkedInModalOpen, setIsLinkedInModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col relative selection:bg-brand-purple/30 selection:text-white">
      {/* Global Ambient Glow Overlays */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-brand-violet/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="fixed bottom-1/3 right-10 w-96 h-96 bg-brand-blue/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      {/* Top Navbar */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero 
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
          onOpenLinkedInModal={() => setIsLinkedInModalOpen(true)}
        />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Education />
        <Contact 
          onOpenLinkedInModal={() => setIsLinkedInModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
        onOpenLinkedInModal={() => setIsLinkedInModalOpen(true)}
      />

      {/* Interactive Modals */}
      <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={() => setIsResumeModalOpen(false)} 
      />
      <LinkedInModal 
        isOpen={isLinkedInModalOpen} 
        onClose={() => setIsLinkedInModalOpen(false)} 
      />
    </div>
  );
};

export default App;
