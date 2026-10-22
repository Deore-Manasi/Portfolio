import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Atom,
  FileCode2,
  Palette,
  Zap,
  Layout,
  Server,
  Network,
  Repeat,
  Boxes,
  Terminal,
  Flame,
  Coffee,
  Binary,
  Cpu,
  ShieldCheck,
  Database,
  Table,
  Sparkles,
  BrainCircuit,
  Compass,
  Layers as LayersIcon,
  Workflow,
  Cable,
  Bot,
  GitBranch,
  Send,
  CloudUpload,
  Radio,
  Container,
} from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { skillCategories, skillsData, SkillCategory, SkillLevel } from '../data/skills';

// Map icon string to Lucide component
const iconMap: Record<string, React.ReactNode> = {
  Atom: <Atom className="w-5 h-5" />,
  FileCode2: <FileCode2 className="w-5 h-5" />,
  Palette: <Palette className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  Layout: <Layout className="w-5 h-5" />,
  Server: <Server className="w-5 h-5" />,
  Network: <Network className="w-5 h-5" />,
  Repeat: <Repeat className="w-5 h-5" />,
  Boxes: <Boxes className="w-5 h-5" />,
  Terminal: <Terminal className="w-5 h-5" />,
  Flame: <Flame className="w-5 h-5" />,
  Coffee: <Coffee className="w-5 h-5" />,
  Binary: <Binary className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
  Table: <Table className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  BrainCircuit: <BrainCircuit className="w-5 h-5" />,
  Compass: <Compass className="w-5 h-5" />,
  Layers3: <LayersIcon className="w-5 h-5" />,
  Workflow: <Workflow className="w-5 h-5" />,
  Cable: <Cable className="w-5 h-5" />,
  Bot: <Bot className="w-5 h-5" />,
  GitBranch: <GitBranch className="w-5 h-5" />,
  Send: <Send className="w-5 h-5" />,
  CloudUpload: <CloudUpload className="w-5 h-5" />,
  Radio: <Radio className="w-5 h-5" />,
  Container: <Container className="w-5 h-5" />,
};

// Styling for proficiency level badges
const levelBadgeStyles: Record<SkillLevel, { bg: string; text: string; border: string }> = {
  'Hands-on': {
    bg: 'bg-emerald-950/40',
    text: 'text-emerald-300',
    border: 'border-emerald-500/30',
  },
  'Working Knowledge': {
    bg: 'bg-sky-950/40',
    text: 'text-sky-300',
    border: 'border-sky-500/30',
  },
  Learning: {
    bg: 'bg-cyan-950/40',
    text: 'text-cyan-300',
    border: 'border-cyan-500/30',
  },
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>('All');

  const filteredSkills = skillsData.filter((skill) => {
    if (selectedCategory === 'All') return true;
    return skill.category === selectedCategory;
  });

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#0B1324]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Competencies & Tools"
          title="Verified"
          highlight="Tech Badges"
          subtitle="A categorized inventory of technologies, frameworks, and tools I actively engineer with."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {skillCategories.map((category) => {
            const isSelected = selectedCategory === category;
            const count =
              category === 'All'
                ? skillsData.length
                : skillsData.filter((s) => s.category === category).length;

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

        {/* Interactive Badge Legend */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10 text-xs font-mono">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Hands-on: Production & Projects</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/40 border border-sky-500/30 text-sky-300">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span>Working Knowledge</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Learning</span>
          </div>
        </div>

        {/* Tech Badges Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const badgeStyle = levelBadgeStyles[skill.level];

              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="group relative p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-[#0F1A30]/90 to-[#0B1324]/90 border border-sky-500/20 hover:border-sky-400 hover:shadow-[0_0_20px_rgba(14,165,233,0.25)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-between gap-3 overflow-hidden backdrop-blur-sm cursor-default"
                >
                  {/* Subtle Light Sweep Shimmer */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-sky-400/10 to-transparent transition-transform duration-700 pointer-events-none" />

                  {/* Left: Icon & Skill Name */}
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-sky-950/60 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:text-white group-hover:scale-110 group-hover:border-sky-400/50 transition-all shrink-0">
                      {iconMap[skill.iconName] || <Sparkles className="w-5 h-5" />}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold text-white group-hover:text-sky-200 transition-colors truncate">
                        {skill.name}
                      </h3>
                      <span className="text-[11px] font-mono text-[#94A3B8] block truncate">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  {/* Right: Level Pill */}
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-medium border shrink-0 ${badgeStyle.bg} ${badgeStyle.text} ${badgeStyle.border}`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        skill.level === 'Hands-on'
                          ? 'bg-emerald-400 animate-pulse'
                          : 'bg-current opacity-80'
                      }`}
                    />
                    {skill.level}
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
