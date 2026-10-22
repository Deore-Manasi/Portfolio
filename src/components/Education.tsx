import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2, BookOpen } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { educationData } from '../data/education';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#0B1324]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Academic Background"
          title="Formal"
          highlight="Education"
          subtitle="Foundational training in computer engineering, algorithmic thinking, and modern software design principles."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto mt-12">
          {educationData.map((edu, idx) => {
            const isPrimary = edu.isCurrentOrRecent;

            return (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`p-6 sm:p-8 rounded-3xl bg-[#0F1A30]/80 border ${
                  isPrimary
                    ? 'border-sky-400/40 shadow-card-glow lg:col-span-7'
                    : 'border-sky-500/15 lg:col-span-5'
                } flex flex-col justify-between`}
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-sky-300 bg-sky-950/60 border border-sky-500/20">
                      <Calendar className="w-3.5 h-3.5 text-sky-400" />
                      <span>{edu.duration}</span>
                    </span>

                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-semibold text-emerald-300 bg-emerald-950/40 border border-emerald-500/30">
                      <Award className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{edu.scoreLabel}: {edu.score}</span>
                    </span>
                  </div>

                  {/* Degree Name */}
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-sky-950/60 border border-sky-500/20 flex items-center justify-center text-sky-300 shrink-0 mt-1">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                        {edu.degree}
                      </h3>
                      <p className="text-sm text-sky-200/90 font-medium mt-1">
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-[#94A3B8] mb-5 pl-13">
                    <MapPin className="w-3.5 h-3.5 text-sky-400" />
                    <span>{edu.location}</span>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#94A3B8]">
                    {edu.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {isPrimary && (
                  <div className="mt-6 pt-4 border-t border-sky-500/15 flex items-center justify-between text-xs font-mono text-sky-300">
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-sky-400" />
                      Core: DSA, DBMS, OS & Networks
                    </span>
                    <span className="text-emerald-400">Class of 2026</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
