import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { FeaturedProject } from './components/FeaturedProject';
import { Achievements } from './components/Achievements';
import { Education } from './components/Education';
import { CodingProfiles } from './components/CodingProfiles';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { AmbientBackground } from './components/AmbientBackground';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#060B14] text-[#F8FAFC] selection:bg-sky-500/30 selection:text-sky-200">
      {/* Ambient background cursor glow & atmospheric depth */}
      <AmbientBackground />

      {/* Sticky Translucent Navbar */}
      <Navbar onResumeClick={() => setIsResumeOpen(true)} />

      {/* Main Page Content */}
      <main className="relative z-10">
        <Hero onResumeClick={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <FeaturedProject />
        <Achievements />
        <Education />
        <CodingProfiles />
        <Contact onResumeClick={() => setIsResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
