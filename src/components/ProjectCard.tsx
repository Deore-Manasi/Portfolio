import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Eye, AlertCircle, Sparkles, Layers } from 'lucide-react';
import { ProjectItem } from '../data/projects';

interface ProjectCardProps {
  project: ProjectItem;
  onOpenModal: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  // Subtle 3D tilt effect on desktop
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -6; // max 6 deg
    const rotY = ((x - centerX) / centerX) * 6;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="perspective-1000"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: 'transform 0.15s ease-out',
        }}
        className="group relative h-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#0F1A30]/80 border border-sky-500/20 hover:border-sky-400/50 hover:bg-[#162544] transition-colors duration-300 shadow-card-glow"
      >
        <div>
          {/* Card Top: Category and Patent/Featured Badges */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-sky-300 bg-sky-950/60 border border-sky-500/20">
              <Layers className="w-3.5 h-3.5 text-sky-400" />
              <span>{project.category}</span>
            </span>

            {project.patentNote && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[10px] font-mono text-emerald-300 bg-emerald-950/40 border border-emerald-500/30">
                <Sparkles className="w-3 h-3 text-emerald-400" />
                Patent Pending
              </span>
            )}
          </div>

          {/* Title & Subtitle */}
          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-sky-300 transition-colors mb-1.5">
            {project.title}
          </h3>

          <p className="text-xs text-[#94A3B8] leading-relaxed mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Key Feature Highlight */}
          <div className="mb-5 px-3 py-2 rounded-xl bg-[#0B1324] border border-sky-500/15 flex items-center gap-2 text-xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span className="text-sky-200/90 truncate font-mono text-[11px]">{project.subtitle}</span>
          </div>
        </div>

        <div>
          {/* Technologies Badges */}
          <div className="pt-3 border-t border-sky-500/15 mb-6 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#0B1324] text-sky-200/90 border border-sky-500/15"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-sky-950/40 text-sky-300 border border-sky-500/20">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>

          {/* Actions: View Details + GitHub + Live Demo */}
          <div className="flex items-center justify-between gap-2 pt-2">
            <button
              onClick={() => onOpenModal(project)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-sky-600/30 hover:bg-sky-600/50 border border-sky-400/30 transition-colors"
            >
              <Eye className="w-3.5 h-3.5 text-sky-300" />
              <span>Details</span>
            </button>

            <div className="flex items-center gap-2">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-[#0B1324] hover:bg-sky-900/30 border border-sky-500/20 hover:border-sky-400/40 text-[#94A3B8] hover:text-white transition-colors"
                  aria-label={`GitHub Repository for ${project.title}`}
                  title="View GitHub Repository"
                >
                  <Github className="w-4 h-4" />
                </a>
              ) : (
                <span
                  className="p-2 rounded-xl bg-[#0B1324]/50 border border-white/5 text-[#94A3B8]/40 cursor-not-allowed"
                  title="Code available on verified request"
                >
                  <Github className="w-4 h-4" />
                </span>
              )}

              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-medium bg-gradient-to-r from-sky-500 to-cyan-500 text-white hover:from-sky-400 hover:to-cyan-400 transition-colors shadow-glow-sm"
                  aria-label={`Live Demo of ${project.title}`}
                >
                  <span>Demo</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <span className="text-[11px] font-mono text-sky-300/50 px-2 py-1">
                  Internal / Academic
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
