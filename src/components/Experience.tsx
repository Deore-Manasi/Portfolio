import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { experienceData } from '../data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#060B14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Career Timeline"
          title="Experience &"
          highlight="Internships"
          subtitle="Hands-on engineering experience spanning AI automation workflows, DevOps delivery, and full-stack web applications."
        />

        {/* Vertical Timeline */}
        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Central glowing vertical timeline line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-sky-500 via-cyan-500/50 to-sky-950/10 pointer-events-none" />

          <div className="space-y-12">
            {experienceData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-[#0B1324] border-2 border-sky-400 shadow-glow-sm z-20">
                    <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse" />
                  </div>

                  {/* Spacer for Alternate Desktop Columns */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Timeline Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30, y: 15 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`w-full sm:w-[calc(50%-2.5rem)] pl-12 sm:pl-0 ${
                      isEven ? 'sm:pr-10' : 'sm:pl-10'
                    }`}
                  >
                    <div className="group p-6 sm:p-7 rounded-2xl bg-[#0F1A30]/80 border border-sky-500/20 hover:border-sky-400/40 hover:bg-[#162544] transition-all duration-300 shadow-card-glow">
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-sky-300 bg-sky-950/60 border border-sky-500/20">
                          <Calendar className="w-3.5 h-3.5 text-sky-400" />
                          <span>{item.period}</span>
                        </span>

                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-[#0B1324] text-[#94A3B8] border border-white/5">
                          {item.type}
                        </span>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                        {item.role}
                      </h3>
                      
                      <div className="flex items-center gap-2 text-sm font-medium text-sky-200/90 mb-4 mt-1">
                        <Building2 className="w-4 h-4 text-sky-400" />
                        <span>{item.company}</span>
                        <span className="text-[#94A3B8]/40">•</span>
                        <span className="flex items-center gap-1 text-xs text-[#94A3B8]">
                          <MapPin className="w-3 h-3 text-[#94A3B8]" />
                          {item.location}
                        </span>
                      </div>

                      {/* Main Description */}
                      <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Key Highlights */}
                      <ul className="space-y-2 mb-5 text-xs text-[#94A3B8]">
                        {item.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technology Tags */}
                      <div className="pt-3 border-t border-sky-500/15 flex flex-wrap gap-1.5">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-[#0B1324] text-sky-200/80 border border-sky-500/15"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
