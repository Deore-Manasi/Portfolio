import React from 'react';
import { ArrowUp, Github, Linkedin, Code2, Heart } from 'lucide-react';
import { profileData } from '../data/profile';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative py-12 bg-[#060B14] border-t border-sky-500/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-sky-500/10">
          
          {/* Brand Monogram */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#0B1324] border border-sky-500/30 text-white font-display font-bold text-base shadow-glow-sm">
              M<span className="text-sky-400">D</span>
            </div>
            <div>
              <span className="font-semibold text-white tracking-wide text-sm block">
                {profileData.name}
              </span>
              <span className="text-[11px] text-[#94A3B8] font-mono">
                Software Developer · Pune, India
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-[#94A3B8]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-sky-300 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-[#0B1324] hover:bg-sky-900/40 text-[#94A3B8] hover:text-white border border-sky-500/20 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-[#0B1324] hover:bg-sky-900/40 text-[#94A3B8] hover:text-white border border-sky-500/20 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={profileData.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-[#0B1324] hover:bg-sky-900/40 text-[#94A3B8] hover:text-white border border-sky-500/20 transition-colors"
              aria-label="LeetCode Profile"
            >
              <Code2 className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-sky-600/30 hover:bg-sky-600/60 text-sky-200 hover:text-white border border-sky-400/30 transition-colors ml-2"
              aria-label="Scroll back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#94A3B8]/70 gap-3">
          <p>
            Designed & built by <span className="text-sky-200 font-medium">Manasi Deore</span>.
          </p>

          <p className="font-mono text-[11px]">
            © {currentYear} All rights reserved. Built with React & Three.js.
          </p>
        </div>
      </div>
    </footer>
  );
};
