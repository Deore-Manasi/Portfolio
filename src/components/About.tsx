import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Cpu, TerminalSquare, CheckCircle2, Copy, Check, Sparkles } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { profileData } from '../data/profile';

export const About: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'focus' | 'philosophy'>('profile');

  const copyTerminal = () => {
    const text = `whoami: ${profileData.terminal.whoami}\nfocus: ${profileData.terminal.focus}\nphilosophy: ${profileData.terminal.philosophy}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const highlightIcons = [
    <Layers className="w-5 h-5 text-sky-400" />,
    <Cpu className="w-5 h-5 text-cyan-400" />,
    <TerminalSquare className="w-5 h-5 text-blue-400" />,
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#060B14]">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-sky-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Background & Identity"
          title="A Little"
          highlight="About Me"
          subtitle="Passionate about building purposeful software systems, bridging engineering fundamentals with practical AI workflows."
        />

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-8">
          
          {/* Left Column: Narrative & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 sm:p-8 rounded-2xl bg-[#0F1A30]/80 border border-sky-500/20 backdrop-blur-md shadow-card-glow"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-sky-400" />
                <span>Engineering with Curiosity & Agency</span>
              </h3>
              
              <p className="text-sm sm:text-base text-[#F8FAFC]/90 font-medium leading-relaxed mb-4">
                {profileData.aboutIntro}
              </p>

              <div className="space-y-2.5 text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                {profileData.aboutJourney.map((item, index) => (
                  <div key={index} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Three Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              {profileData.highlightCards.map((card, idx) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-4 sm:p-5 rounded-xl bg-[#0B1324] border border-sky-500/20 hover:border-sky-400/50 transition-all duration-300 shadow-sm hover:shadow-glow-sm group"
                >
                  <div className="w-9 h-9 rounded-lg bg-sky-950/60 border border-sky-400/25 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
                    {highlightIcons[idx]}
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1 group-hover:text-sky-300 transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Terminal Component */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Terminal Component */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl bg-[#0B1324] border border-sky-500/25 overflow-hidden shadow-card-glow font-mono"
            >
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0F1A30] border-b border-sky-500/20">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs text-[#94A3B8] ml-2">manasi@deore-dev:~</span>
                </div>

                <button
                  onClick={copyTerminal}
                  className="flex items-center gap-1 text-[11px] text-sky-300 hover:text-white p-1 rounded hover:bg-white/5 transition-colors"
                  aria-label="Copy terminal text"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Terminal Interactive Tab Buttons */}
              <div className="flex items-center border-b border-sky-500/15 bg-[#060B14]/80 px-4 py-1.5 text-xs text-sky-300/70 gap-3">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`pb-0.5 border-b-2 transition-colors ${
                    activeTab === 'profile'
                      ? 'border-sky-400 text-sky-200 font-semibold'
                      : 'border-transparent hover:text-sky-200'
                  }`}
                >
                  $ cat whoami
                </button>
                <button
                  onClick={() => setActiveTab('focus')}
                  className={`pb-0.5 border-b-2 transition-colors ${
                    activeTab === 'focus'
                      ? 'border-sky-400 text-sky-200 font-semibold'
                      : 'border-transparent hover:text-sky-200'
                  }`}
                >
                  $ cat focus
                </button>
                <button
                  onClick={() => setActiveTab('philosophy')}
                  className={`pb-0.5 border-b-2 transition-colors ${
                    activeTab === 'philosophy'
                      ? 'border-sky-400 text-sky-200 font-semibold'
                      : 'border-transparent hover:text-sky-200'
                  }`}
                >
                  $ cat philosophy
                </button>
              </div>

              {/* Terminal Body */}
              <div className="p-6 text-sm space-y-4 text-sky-100/90 leading-relaxed">
                <div>
                  <div className="text-sky-400 text-xs">$ whoami</div>
                  <div className="text-white font-medium pl-3 border-l-2 border-sky-500/40 mt-1">
                    {profileData.terminal.whoami}
                  </div>
                </div>

                <div>
                  <div className="text-sky-400 text-xs">$ focus</div>
                  <div className="text-sky-200 pl-3 border-l-2 border-sky-500/40 mt-1">
                    {profileData.terminal.focus}
                  </div>
                </div>

                <div>
                  <div className="text-sky-400 text-xs">$ philosophy</div>
                  <div className="text-emerald-300 pl-3 border-l-2 border-sky-500/40 mt-1">
                    "{profileData.terminal.philosophy}"
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-2 text-xs text-[#94A3B8]">
                  <span className="text-sky-400">status:</span>
                  <span className="inline-flex items-center gap-1.5 text-emerald-400 font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Available for full-time roles & engineering challenges
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
