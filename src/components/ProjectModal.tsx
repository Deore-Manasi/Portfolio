import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Sparkles, CheckCircle2, Layers, Cpu, Code2 } from 'lucide-react';
import { ProjectItem } from '../data/projects';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.4 }}
          className="relative w-full max-w-3xl rounded-3xl bg-[#0B1324] border border-sky-500/30 p-6 sm:p-8 shadow-2xl shadow-sky-950/50 z-10 max-h-[90vh] overflow-y-auto text-left"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-[#0F1A30] text-[#94A3B8] hover:text-white border border-sky-500/20 hover:border-sky-400/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="pr-12 mb-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-sky-300 bg-sky-950/60 border border-sky-500/30">
                <Layers className="w-3.5 h-3.5 text-sky-400" />
                {project.category}
              </span>

              {project.patentNote && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-mono text-emerald-300 bg-emerald-950/40 border border-emerald-500/30">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  {project.patentNote}
                </span>
              )}
            </div>

            <h3 id="modal-title" className="text-2xl sm:text-3xl font-bold text-white mb-1">
              {project.title}
            </h3>
            <p className="text-sm font-medium text-sky-300/80">
              {project.subtitle}
            </p>
          </div>

          {/* Modal Body */}
          <div className="space-y-6 text-sm text-[#94A3B8] leading-relaxed">
            {/* Overview */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-2 text-sky-300">
                Project Overview
              </h4>
              <p className="text-sm sm:text-base text-[#F8FAFC]/90">
                {project.description}
              </p>
            </div>

            {/* Problem & Contribution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#0F1A30] border border-sky-500/15">
                <h5 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-sky-400" />
                  <span>Problem Statement</span>
                </h5>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#0F1A30] border border-sky-500/15">
                <h5 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-emerald-400" />
                  <span>My Specific Contribution</span>
                </h5>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  {project.myContribution}
                </p>
              </div>
            </div>

            {/* Featured Details (if available) */}
            {project.featuredDetails && (
              <div className="p-5 rounded-2xl bg-sky-950/20 border border-sky-500/20 space-y-3">
                <h5 className="font-semibold text-white text-sm">
                  Implementation & Engineering Highlights:
                </h5>
                <ul className="space-y-2 text-xs">
                  {project.featuredDetails.architectureNotes.map((note, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider mb-2.5 text-sky-300">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-[#0F1A30] text-sky-200 border border-sky-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="mt-8 pt-5 border-t border-sky-500/20 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-[#0F1A30] hover:bg-sky-900/40 text-white border border-sky-500/30 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              ) : (
                <span className="text-xs text-[#94A3B8] font-mono">
                  Repository available upon request
                </span>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-white shadow-glow-sm transition-colors"
                >
                  <span>Live Application</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium text-[#94A3B8] hover:text-white transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
