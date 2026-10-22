import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { projectCategories, projectsData, ProjectFilterCategory, ProjectItem } from '../data/projects';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectFilterCategory>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filteredProjects = projectsData.filter((project) => {
    if (selectedCategory === 'All') return true;
    return project.filterCategory === selectedCategory;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#0B1324]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Portfolio of Work"
          title="Things I've"
          highlight="Built"
          subtitle="Real engineering projects spanning full-stack MERN platforms, RAG-based AI applications, data visualization, and modern frontends."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {projectCategories.map((category) => {
            const isSelected = selectedCategory === category;
            const count =
              category === 'All'
                ? projectsData.length
                : projectsData.filter((p) => p.filterCategory === category).length;

            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                  isSelected
                    ? 'text-white bg-gradient-to-r from-sky-500 to-cyan-500 shadow-glow-sm border border-sky-400/40'
                    : 'text-[#94A3B8] bg-[#0F1A30]/80 hover:bg-[#162544] hover:text-white border border-sky-500/15'
                }`}
              >
                <span>{category}</span>
                <span
                  className={`ml-1.5 px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                    isSelected ? 'bg-black/30 text-white' : 'bg-white/5 text-[#94A3B8]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenModal={(proj) => setActiveModalProject(proj)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal Dialog */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
