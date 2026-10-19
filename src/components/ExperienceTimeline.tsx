import React, { useState } from 'react';
import { 
  Building2, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Zap, 
  ChevronRight, 
  Layers, 
  Award,
  TrendingUp,
  Cpu,
  Clock
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  const [selectedExp, setSelectedExp] = useState<string>(EXPERIENCES[0].id);

  return (
    <section id="experience" className="py-20 relative bg-dark-900/40">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-xs font-mono text-cyan-400 mb-3">
            <span>02 // PARCOURS & MISSIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Expériences <span className="text-gradient-cyan-blue">Professionnelles</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-400 max-w-2xl">
            3 ans de prestation conseil en environnement grand compte et conception de solutions data robustes.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Vertical Glowing Timeline Line */}
          <div className="hidden md:block absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600/30" />

          <div className="space-y-10">
            {EXPERIENCES.map((exp, idx) => {
              const isSelected = selectedExp === exp.id;

              return (
                <div 
                  key={exp.id}
                  className="relative md:pl-20 transition-all duration-300"
                >
                  {/* Timeline Node Bullet */}
                  <div className="hidden md:flex absolute left-5 top-7 w-6 h-6 rounded-full bg-dark-950 border-2 border-cyan-400 items-center justify-center -translate-x-1/2 shadow-glow-cyan">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  </div>

                  {/* Main Card */}
                  <div 
                    onClick={() => setSelectedExp(exp.id)}
                    className={`p-6 sm:p-8 rounded-3xl glass-card transition-all duration-300 cursor-pointer overflow-hidden ${
                      isSelected 
                        ? 'border-cyan-400/40 bg-white/[0.04] shadow-glow-cyan/15 ring-1 ring-cyan-400/20' 
                        : 'border-white/[0.08] hover:border-white/20'
                    }`}
                  >
                    {/* Header Row */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
                      
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/25">
                            {exp.badge}
                          </span>
                          {exp.client && (
                            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-500/10 text-blue-300 border border-blue-500/25">
                              Client : {exp.client}
                            </span>
                          )}
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {exp.role}
                        </h3>

                        <div className="text-sm sm:text-base font-semibold text-cyan-400 mt-1 flex items-center gap-2">
                          <Building2 className="w-4 h-4" />
                          <span>{exp.company}</span>
                          {exp.client && (
                            <span className="text-gray-400 font-normal">pour {exp.client}</span>
                          )}
                        </div>
                      </div>

                      {/* Period & Location metadata */}
                      <div className="flex flex-row lg:flex-col items-start lg:items-end gap-2 text-xs font-mono text-gray-400">
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.03] border border-white/5">
                          <Clock className="w-3.5 h-3.5 text-cyan-400" />
                          <span className="text-gray-200 font-medium">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.03] border border-white/5">
                          <MapPin className="w-3.5 h-3.5 text-gray-400" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                    </div>

                    {/* Impact Metric Banner if present */}
                    {exp.impactMetric && (
                      <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-cyan-950/60 via-blue-950/40 to-dark-900 border border-cyan-500/30 flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-cyan-400/20 text-cyan-300">
                          <Zap className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">
                            RÉSULTAT CHIFFRÉ MAJEUR
                          </div>
                          <div className="text-sm sm:text-base font-bold text-white">
                            {exp.impactMetric}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Description Paragraph */}
                    <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Bullet Points with sleek icons */}
                    <div className="mb-6 space-y-3">
                      <div className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                        // RÉALISATIONS CLÉS & RESPONSABILITÉS
                      </div>
                      <div className="grid grid-cols-1 gap-2.5">
                        {exp.highlights.map((item, hIdx) => (
                          <div 
                            key={hIdx} 
                            className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] transition-colors"
                          >
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies Pills */}
                    <div>
                      <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-2.5">
                        // STACK TECHNIQUE MOBILISÉE
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, tIdx) => (
                          <span 
                            key={tIdx}
                            className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.04] hover:bg-cyan-500/10 text-gray-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-400/30 transition-all"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
