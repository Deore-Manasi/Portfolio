import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Layers, Cpu, Volume2, Database, Github, ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../data/projects';

export const FeaturedProject: React.FC = () => {
  const ayuverse = projectsData.find((p) => p.id === 'ayuverse') || projectsData[0];
  const [activeTab, setActiveTab] = useState<'architecture' | 'experience' | 'data'>('architecture');

  return (
    <section className="py-24 relative overflow-hidden bg-[#060B14] border-t border-b border-sky-500/15">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Eyebrow */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
          <span className="text-xs font-mono tracking-widest uppercase text-sky-300">
            Featured Deep Dive · Engineering Case Study
          </span>
        </div>

        {/* Split-screen Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Interactive Product Mockup & Architecture Preview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Interactive Mockup Container */}
            <div className="rounded-3xl bg-[#0B1324] border border-sky-500/30 overflow-hidden shadow-2xl shadow-sky-950/40 p-6 sm:p-8 relative">
              {/* Mockup Header */}
              <div className="flex items-center justify-between pb-4 border-b border-sky-500/15 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/70" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/70" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                  <span className="text-xs text-[#94A3B8] font-mono ml-2">ayuverse.app/wellness-core</span>
                </div>

                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-sky-950/50 text-sky-300 border border-sky-500/20">
                  MERN + 3D + Speech
                </span>
              </div>

              {/* Mockup Interactive Navigation */}
              <div className="flex items-center gap-2 mb-6">
                <button
                  onClick={() => setActiveTab('architecture')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeTab === 'architecture'
                      ? 'bg-sky-600 text-white shadow-glow-sm'
                      : 'bg-[#0F1A30] text-[#94A3B8] hover:text-white'
                  }`}
                >
                  System Architecture
                </button>
                <button
                  onClick={() => setActiveTab('experience')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeTab === 'experience'
                      ? 'bg-sky-600 text-white shadow-glow-sm'
                      : 'bg-[#0F1A30] text-[#94A3B8] hover:text-white'
                  }`}
                >
                  3D & Speech UX
                </button>
                <button
                  onClick={() => setActiveTab('data')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeTab === 'data'
                      ? 'bg-sky-600 text-white shadow-glow-sm'
                      : 'bg-[#0F1A30] text-[#94A3B8] hover:text-white'
                  }`}
                >
                  Data Flow
                </button>
              </div>

              {/* Mockup Interactive Content Canvas */}
              <div className="p-5 rounded-2xl bg-[#060B14]/90 border border-sky-500/20 min-h-[260px] flex flex-col justify-center">
                {activeTab === 'architecture' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono text-sky-300">
                      <span>Frontend Client (React)</span>
                      <span>⇄ RESTful APIs ⇄</span>
                      <span>Express & MongoDB</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center text-xs">
                      <div className="p-3 rounded-xl bg-sky-950/40 border border-sky-500/30">
                        <Layers className="w-5 h-5 mx-auto mb-1 text-sky-400" />
                        <span className="text-white font-medium">React UI</span>
                        <p className="text-[10px] text-[#94A3B8]">Hooks & State</p>
                      </div>

                      <div className="p-3 rounded-xl bg-sky-950/40 border border-sky-500/30">
                        <Cpu className="w-5 h-5 mx-auto mb-1 text-cyan-400" />
                        <span className="text-white font-medium">Node / Express</span>
                        <p className="text-[10px] text-[#94A3B8]">Middleware & Auth</p>
                      </div>

                      <div className="p-3 rounded-xl bg-sky-950/40 border border-sky-500/30">
                        <Database className="w-5 h-5 mx-auto mb-1 text-emerald-400" />
                        <span className="text-white font-medium">MongoDB Atlas</span>
                        <p className="text-[10px] text-[#94A3B8]">Mongoose Schemas</p>
                      </div>
                    </div>

                    <p className="text-xs text-[#94A3B8] text-center pt-2">
                      Decoupled client-server design for independent scaling and maintainability.
                    </p>
                  </div>
                )}

                {activeTab === 'experience' && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-sky-950/30 border border-sky-500/20">
                      <div className="w-8 h-8 rounded-lg bg-sky-900/60 flex items-center justify-center text-sky-300">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <h6 className="text-xs font-semibold text-white">Interactive 3D GLB Asset Rendering</h6>
                        <p className="text-[11px] text-[#94A3B8]">Optimized low-poly models with ambient lighting and rotation controls.</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-xl bg-sky-950/30 border border-sky-500/20">
                      <div className="w-8 h-8 rounded-lg bg-sky-900/60 flex items-center justify-center text-sky-300">
                        <Volume2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h6 className="text-xs font-semibold text-white">Browser Web Speech Synthesis</h6>
                        <p className="text-[11px] text-[#94A3B8]">Natural audio guidance for guided meditations and mindful wellness reflections.</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'data' && (
                  <div className="space-y-3 text-xs font-mono text-[#94A3B8]">
                    <div className="p-2.5 rounded-lg bg-[#0B1324] border border-sky-500/15">
                      <span className="text-sky-400">POST /api/v1/wellness/assess</span>
                      <p className="text-[11px] mt-1 text-sky-200">Payload: Dosha indicators & lifestyle factors</p>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#0B1324] border border-sky-500/15">
                      <span className="text-emerald-400">200 OK Response</span>
                      <p className="text-[11px] mt-1 text-sky-200">Personalized regimen, suggested dietary balance & audio track cues</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Research Badge Callout */}
              <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-sky-950/40 to-cyan-950/40 border border-sky-500/25 flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-white block">Published Research Paper</span>
                  <span className="text-[11px] text-[#94A3B8]">Work derived from AyuVerse was accepted & documented in academic research.</span>
                </div>
                <Sparkles className="w-5 h-5 text-sky-400 shrink-0 ml-3" />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative, Problem, Approach & Engineering Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-sky-400">
                Full-Stack MERN Case Study
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mt-1 mb-3">
                AyuVerse: Interactive Wellness Platform
              </h3>
              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                {ayuverse.description}
              </p>
            </div>

            {/* Key Engineering Decisions */}
            <div className="p-5 rounded-2xl bg-[#0B1324] border border-sky-500/20">
              <h4 className="text-sm font-semibold text-sky-300 uppercase tracking-wider mb-3">
                Key Engineering Decisions
              </h4>
              <div className="space-y-2.5">
                <div className="flex items-start gap-2.5 text-xs text-[#94A3B8]">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span><strong>Low-Poly 3D Assets:</strong> Progressive GLB loading with optimized lighting for fluid mobile rendering.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#94A3B8]">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span><strong>Decoupled MERN APIs:</strong> Modular Express.js controllers and structured Mongoose schemas for wellness data.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#94A3B8]">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span><strong>Web Speech Audio:</strong> Browser Web Speech API integration with custom React state hooks for audio walkthroughs.</span>
                </div>
              </div>
            </div>

            {/* Technologies Used */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-sky-300/80 mb-3">
                Core Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {ayuverse.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-[#0B1324] text-sky-200 border border-sky-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              {ayuverse.githubUrl && (
                <a
                  href={ayuverse.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 shadow-glow-sm transition-all border border-sky-400/40"
                >
                  <Github className="w-4 h-4" />
                  <span>Explore Source Code</span>
                </a>
              )}

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-sky-300 hover:text-white transition-colors"
              >
                <span>Discuss this project</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
