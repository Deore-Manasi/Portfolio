import React from 'react';
import { motion } from 'framer-motion';
import {
  FileCheck2,
  BookOpenCheck,
  Code2,
  Trophy,
  Award,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { achievementsData, AchievementItem } from '../data/achievements';

const iconMap: Record<string, React.ReactNode> = {
  FileCheck2: <FileCheck2 className="w-5 h-5 text-emerald-400" />,
  BookOpenCheck: <BookOpenCheck className="w-5 h-5 text-cyan-400" />,
  Code2: <Code2 className="w-5 h-5 text-sky-400" />,
  Trophy: <Trophy className="w-5 h-5 text-amber-400" />,
  Award: <Award className="w-5 h-5 text-sky-400" />,
};

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-[#060B14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Recognitions & Research"
          title="Milestones &"
          highlight="Achievements"
          subtitle="Key academic, intellectual property, research, and competitive programming highlights from my developer journey."
        />

        {/* Bento Grid of Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
          {achievementsData.map((item: AchievementItem, idx: number) => {
            const isWide = item.category === 'Patent' || item.category === 'Research';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative p-6 sm:p-7 rounded-2xl bg-[#0F1A30]/80 border border-sky-500/20 hover:border-sky-400/40 hover:bg-[#162544] transition-all duration-300 shadow-card-glow flex flex-col justify-between ${
                  isWide ? 'md:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Card Header: Icon & Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#0B1324] border border-sky-500/25 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {iconMap[item.iconName] || <Sparkles className="w-5 h-5 text-sky-400" />}
                    </div>

                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-sky-950/50 text-sky-300 border border-sky-500/20">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-sky-300 transition-colors mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-sky-300/80 mb-4 font-mono">
                    {item.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Structured Details */}
                  {item.details && (
                    <div className="space-y-2 mb-5 p-3 rounded-xl bg-[#0B1324] border border-sky-500/15">
                      {item.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex justify-between items-start text-xs">
                          <span className="text-[#94A3B8]/70 font-mono">{detail.label}:</span>
                          <span className="text-sky-200 font-medium text-right max-w-[60%]">
                            {detail.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer Link if available */}
                <div className="pt-3 border-t border-sky-500/10">
                  {item.officialLink ? (
                    <a
                      href={item.officialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-sky-300 hover:text-white transition-colors"
                    >
                      <span>{item.linkText || 'Learn More'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono text-emerald-400/80 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Documented & Verified Milestone
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
