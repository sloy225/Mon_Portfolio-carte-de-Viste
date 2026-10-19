import React, { useState } from 'react';
import { 
  BarChart3, 
  Database, 
  BrainCircuit, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  Cpu, 
  Terminal,
  Server,
  Cloud,
  SlidersHorizontal,
  Workflow
} from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';

export const TechStackSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const getCategoryIcon = (icon: string) => {
    switch (icon) {
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-cyan-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-blue-400" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-purple-400" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative bg-dark-900/30">
      
      {/* Background ambient light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-xs font-mono text-cyan-400 mb-3">
            <span>04 // STACK TECHNIQUE & MÉTHODOLOGIE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Compétences & <span className="text-gradient-cyan-blue">Écosystème Technologique</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-400 max-w-2xl">
            Une expertise équilibrée couvrant la Business Intelligence de pointe, l'ingénierie des données Cloud, l'IA générative et les méthodes agiles.
          </p>
        </div>

        {/* 4 Thematic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-14">
          {SKILL_GROUPS.map((group, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 rounded-3xl glass-card transition-all duration-300 relative overflow-hidden group ${
                idx === 0 ? 'border-cyan-400/30 shadow-glow-cyan/5' :
                idx === 1 ? 'border-blue-400/30 shadow-glow-blue/5' :
                idx === 2 ? 'border-purple-400/30 shadow-glow-purple/5' :
                'border-emerald-400/30'
              }`}
            >
              {/* Category glow spot */}
              <div 
                className="absolute top-0 right-0 w-44 h-44 rounded-full blur-3xl pointer-events-none opacity-20"
                style={{ backgroundColor: group.accentColor }}
              />

              {/* Card Header */}
              <div className="flex items-start gap-4 mb-5">
                <div 
                  className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 group-hover:scale-110 transition-transform"
                  style={{ color: group.accentColor }}
                >
                  {getCategoryIcon(group.icon)}
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    {group.category}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    {group.description}
                  </p>
                </div>
              </div>

              {/* Skills List with Level Tags */}
              <div className="space-y-2.5">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className={`flex items-center justify-between p-2.5 rounded-xl transition-colors ${
                      skill.highlight 
                        ? 'bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.07]' 
                        : 'bg-white/[0.015] border border-white/[0.03] hover:bg-white/[0.04]'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span 
                        className="w-1.5 h-1.5 rounded-full" 
                        style={{ backgroundColor: skill.highlight ? group.accentColor : '#64748B' }} 
                      />
                      <span className={`text-xs sm:text-sm font-medium ${skill.highlight ? 'text-white' : 'text-gray-300'}`}>
                        {skill.name}
                      </span>
                    </div>

                    <span 
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-md ${
                        skill.highlight 
                          ? 'bg-white/[0.08] text-gray-200 border border-white/10 font-bold' 
                          : 'bg-white/[0.03] text-gray-400'
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Pipeline Architecture Banner: The End-to-End Data Workflow */}
        <div className="p-6 sm:p-8 rounded-3xl glass-card border-white/10 relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/25">
                <Workflow className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  Chaîne de Valeur Data & IA de Bout-en-Bout
                </h4>
                <p className="text-xs text-gray-400">
                  Comment j'articule les outils pour transformer la donnée brute en action stratégique.
                </p>
              </div>
            </div>

            <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-cyan-400">
              Architecture Robuste & Évolutive
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="text-xs font-mono text-cyan-400 mb-1">01 / INGESTION & PIPELINE</div>
              <div className="text-sm font-bold text-white mb-2">Sources & Cloud</div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Extraction Python & SQL, connecteurs APIs REST, orchestration BigQuery / Azure, validation d'intégrité à la volée.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="text-xs font-mono text-blue-400 mb-1">02 / MODÉLISATION</div>
              <div className="text-sm font-bold text-white mb-2">Kimball & Entrepôt</div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Schémas en étoile unifiés, tables de faits & dimensions, dédoublonnage, standardisation des règles métier.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="text-xs font-mono text-purple-400 mb-1">03 / IA GÉNÉRATIVE</div>
              <div className="text-sm font-bold text-white mb-2">Agents IA & RAG</div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Vectorisation (Vector DB), extraction sémantique des documents non structurés, agents d'analyse automatisés.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="text-xs font-mono text-emerald-400 mb-1">04 / RESTITUTION & MCO</div>
              <div className="text-sm font-bold text-white mb-2">Power BI & Décision</div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Tableaux de bord dynamiques, mesures DAX complexes, sécurité RLS stricte, suivi MCO et adoption métier.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
