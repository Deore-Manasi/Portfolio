import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileDown, MessageSquare, Sparkles } from 'lucide-react';
import { profileData } from '../data/profile';
import { Floating3DScene } from './Floating3DScene';

interface HeroProps {
  onResumeClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onResumeClick }) => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden bg-grid-pattern radial-glow-hero"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/60 border border-sky-400/30 text-xs sm:text-sm font-mono tracking-wider text-sky-200 mb-6 backdrop-blur-md shadow-glow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
              <span>{profileData.eyebrow}</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-4"
            >
              {profileData.heroHeading.prefix}
              <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-300 bg-clip-text text-transparent underline decoration-sky-500/30 underline-offset-8">
                {profileData.heroHeading.highlight}
              </span>
            </motion.h1>

            {/* Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg text-[#94A3B8] leading-relaxed max-w-xl mb-7"
            >
              {profileData.heroDescription}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto"
            >
              {/* Primary CTA */}
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, 'projects')}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 shadow-glow-md hover:shadow-glow-lg transition-all duration-300 border border-sky-300/40"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 text-sky-100 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary CTA */}
              <button
                onClick={onResumeClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-[#F8FAFC] bg-[#0F1A30] hover:bg-[#15223E] border border-sky-500/30 hover:border-sky-400/50 shadow-card-glow transition-all duration-300"
              >
                <FileDown className="w-4 h-4 text-sky-300" />
                <span>Download Resume</span>
              </button>

              {/* Additional Link */}
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-medium text-sky-300 hover:text-sky-100 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-sky-400" />
                <span>Let's Connect</span>
              </a>
            </motion.div>

            {/* Compact Tech Labels Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 border-t border-sky-500/20 w-full"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs uppercase font-mono tracking-wider text-sky-400/90 mr-2">
                  Toolkit:
                </span>
                {profileData.techPills.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono text-sky-200/95 bg-[#0F1A30]/85 border border-sky-400/25"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive 3D Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex items-center justify-center relative"
          >
            <Floating3DScene />
          </motion.div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-sky-300/70 pointer-events-none"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll Down</span>
        <div className="w-5 h-9 rounded-full border-2 border-sky-500/35 flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 rounded-full bg-sky-400"
          />
        </div>
      </motion.div>
    </section>
  );
};
