import React, { useState } from 'react';
import { 
  Bot, 
  BarChart3, 
  Database, 
  ExternalLink, 
  Github, 
  Sparkles, 
  Zap, 
  ArrowUpRight,
  CheckCircle,
  Cpu,
  X
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';

export const ProjectsBento: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ai' | 'bi' | 'data-eng'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const isVisible = (category: string) => {
    return activeFilter === 'all' || activeFilter === category;
  };

  return (
    <section id="projects" className="py-20 relative">
      
      {/* Background ambient light */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-xs font-mono text-cyan-400 mb-3">
            <span>03 // RÉALISATIONS & BENTO GRID</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Projets Majeurs <span className="text-gradient-cyan-blue">Data & Intelligence Artificielle</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-400 max-w-2xl">
            Systèmes multi-agents autonomes, architectures RAG, industrialisation décisionnelle Power BI et pipelines haute cadence.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeFilter === 'all'
                  ? 'bg-cyan-500 text-black font-bold shadow-glow-cyan/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              Tous les projets ({PROJECTS.length})
            </button>
            <button
              onClick={() => setActiveFilter('ai')}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 ${
                activeFilter === 'ai'
                  ? 'bg-purple-600 text-white font-bold shadow-glow-purple/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              <Bot className="w-3.5 h-3.5" />
              <span>IA & RAG</span>
            </button>
            <button
              onClick={() => setActiveFilter('bi')}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 ${
                activeFilter === 'bi'
                  ? 'bg-cyan-500 text-black font-bold shadow-glow-cyan/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Business Intelligence</span>
            </button>
            <button
              onClick={() => setActiveFilter('data-eng')}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 ${
                activeFilter === 'data-eng'
                  ? 'bg-blue-600 text-white font-bold shadow-glow-blue/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              <Database className="w-3.5 h-3.5" />
              <span>Data Engineering</span>
            </button>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Bento Card 1: AI Agents & RAG */}
          {isVisible('ai') && (
            <div className={`${activeFilter === 'all' ? 'lg:col-span-7' : 'lg:col-span-12'} rounded-3xl glass-card border-purple-500/30 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-purple-400/50 transition-all duration-300`}>
              <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/15 text-purple-300 border border-purple-500/30 flex items-center gap-1.5">
                    <Bot className="w-3.5 h-3.5" />
                    IA GÉNÉRATIVE & MULTI-AGENTS · 2026
                  </span>
                  <span className="text-xs font-mono text-gray-400">CrewAI · LangChain · RAG</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2 group-hover:text-purple-300 transition-colors">
                  Architectures d’Agents IA & Vector DB (RAG)
                </h3>

                <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">
                  Flux de traitement de documents et données non structurées orchestré par des assistants IA multi-agents autonomes, recherche sémantique par similarité vectorielle et API FastAPI.
                </p>

                {/* Visual Schema: Multi-agent flow diagram */}
                <div className="p-4 rounded-2xl bg-dark-950/70 border border-purple-500/20 mb-6">
                  <div className="text-[11px] font-mono text-purple-400 mb-3 flex items-center justify-between">
                    <span>SCHÉMA DU PIPELINE AGENTIQUE</span>
                    <span className="text-emerald-400">STATUS: READY</span>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-mono">
                    <div className="p-2.5 rounded-xl bg-purple-900/20 border border-purple-500/30">
                      <div className="text-purple-300 font-bold mb-1">Agent Cadrage</div>
                      <div className="text-[10px] text-gray-400">Planification des tâches</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-purple-900/20 border border-purple-500/30">
                      <div className="text-purple-300 font-bold mb-1">Vector DB</div>
                      <div className="text-[10px] text-gray-400">Embeddings & RAG</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-purple-900/20 border border-purple-500/30">
                      <div className="text-purple-300 font-bold mb-1">Agent Analyse</div>
                      <div className="text-[10px] text-gray-400">Raisonnement LLM</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-purple-900/20 border border-purple-500/30">
                      <div className="text-purple-300 font-bold mb-1">FastAPI / UI</div>
                      <div className="text-[10px] text-gray-400">Restitution & Synthèse</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/20 mb-6">
                  <Sparkles className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-purple-200 font-medium">
                    Automatisation de 85% de l'analyse documentaire et recherche contextuelle sub-seconde.
                  </span>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {['Python', 'LangChain', 'CrewAI', 'FastAPI', 'Vector DB', 'RAG', 'Ollama', 'Docker'].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] text-gray-300 border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSelectedProject(PROJECTS[0])}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 transition-colors flex items-center gap-1.5 shadow-glow-purple/20"
                  >
                    <span>Détails de l'architecture</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href="https://github.com/sloy225/AGENT-PROSPECTION-COMMERCIAL-CREWAI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/[0.06] border border-white/10 transition-colors flex items-center gap-1.5 text-xs font-mono"
                  >
                    <Github className="w-4 h-4" />
                    <span>Repo GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Bento Card 2: SNCF Réseau BI Industrialisation */}
          {isVisible('bi') && (
            <div className={`${activeFilter === 'all' ? 'lg:col-span-5' : 'lg:col-span-12'} rounded-3xl glass-card border-cyan-500/30 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-cyan-400/50 transition-all duration-300`}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5">
                    <BarChart3 className="w-3.5 h-3.5" />
                    BUSINESS INTELLIGENCE · GRAND COMPTE
                  </span>
                  <span className="text-xs font-mono text-gray-400">SNCF Réseau</span>
                </div>

                <h3 className="text-2xl font-extrabold text-white tracking-tight mb-2 group-hover:text-cyan-300 transition-colors">
                  Industrialisation BI & Reporting Financier
                </h3>

                <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                  Pilotage des budgets d'État/UE et flux d'investissements via une suite de ~20 tableaux de bord Power BI haute sécurité (RLS) et modélisation Kimball.
                </p>

                {/* Impact Card: 24h -> 1h */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-950/60 to-dark-900 border border-cyan-400/30 mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono text-cyan-400">PERFORMANCE DE TRAITEMENT</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">-96% TEMPS</span>
                  </div>
                  <div className="text-3xl font-extrabold text-white font-mono flex items-center gap-2">
                    <span className="text-red-400/80 line-through text-2xl">24h</span>
                    <span className="text-cyan-400">➔ 1h</span>
                  </div>
                  <p className="text-xs text-gray-300 mt-2">
                    Adoption opérationnelle par plus de 50 directeurs de projets et décideurs financiers.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 mb-6">
                  <div className="text-[11px] font-mono text-gray-400 mb-2 flex justify-between">
                    <span>Modèle Dimensionnel Kimball</span>
                    <span className="text-cyan-400">RLS Sécurisé</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-gray-400">
                      <span className="w-20">DAX Latence</span>
                      <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full bg-cyan-400 rounded-full" style={{ width: '85%' }} />
                      </div>
                      <span className="text-cyan-300">&lt; 300ms</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-mono text-gray-400">
                      <span className="w-20">Fiabilisation</span>
                      <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full bg-emerald-400 rounded-full" style={{ width: '99%' }} />
                      </div>
                      <span className="text-emerald-300">99.9%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {['Power BI', 'DAX', 'RLS', 'SQL', 'BigQuery', 'Azure', 'Kimball'].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] text-gray-300 border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(PROJECTS[1])}
                  className="w-full py-2.5 rounded-xl text-xs font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition-colors flex items-center justify-center gap-1.5 shadow-glow-cyan/20"
                >
                  <span>Consulter l'architecture du projet</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Bento Card 3: Pipelines Data & Ingestion */}
          {isVisible('data-eng') && (
            <div className={`${activeFilter === 'all' ? 'lg:col-span-6' : 'lg:col-span-12'} rounded-3xl glass-card border-blue-500/30 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-blue-400/50 transition-all duration-300`}>
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-500/15 text-blue-300 border border-blue-500/30 flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5" />
                    DATA ENGINEERING & AUTOMATISATION
                  </span>
                  <span className="text-xs font-mono text-gray-400">2024 — 2025</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-blue-300 transition-colors">
                  Optimisation d'Ingestion & Pipelines Data
                </h3>

                <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                  Automatisation et restructuration autonome de scripts de croisement d'inventaires d'actifs et données ferroviaires avec contrôles qualité systématiques.
                </p>

                <div className="p-4 rounded-2xl bg-dark-950/60 border border-white/10 mb-6 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-gray-300">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
                      Suppression des rejets manuels
                    </span>
                    <span className="text-blue-400 font-bold">100% automatisé</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono text-gray-300">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
                      Gain de temps réconciliation
                    </span>
                    <span className="text-blue-400 font-bold">-80% d'effort</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {['Python', 'Pandas', 'SQL', 'PostgreSQL', 'Docker', 'Git', 'CI/CD'].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] text-gray-300 border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSelectedProject(PROJECTS[2])}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors flex items-center gap-1.5"
                  >
                    <span>Détails du pipeline</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Bento Card 4: Customer Support Classification ML */}
          {isVisible('ai') && (
            <div className={`${activeFilter === 'all' ? 'lg:col-span-6' : 'lg:col-span-12'} rounded-3xl glass-card border-white/10 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-cyan-400/30 transition-all duration-300`}>
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5" />
                    MACHINE LEARNING & NLP
                  </span>
                  <span className="text-xs font-mono text-emerald-400">Démo Streamlit Live</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-cyan-300 transition-colors">
                  Classification Prédictive & Routing Support Client
                </h3>

                <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                  Modèle ML supervisé pour la classification instantanée de tickets de support client selon leur criticité et thématique métier avec interface Streamlit interactive.
                </p>

                <div className="p-4 rounded-2xl bg-dark-950/60 border border-white/10 mb-6">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-gray-400">Précision (Accuracy) F1-Score</span>
                    <span className="text-emerald-400 font-bold text-sm">&gt; 91.4%</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {['Python', 'Scikit-learn', 'Streamlit', 'NLP', 'TF-IDF', 'Pandas'].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] text-gray-300 border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/sloy225/customer-support-priority-classification-and-routing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-white/20 transition-colors flex items-center gap-1.5"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Voir le repo & démo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>

      {/* Interactive Project Deep-Dive Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-dark-900 border border-cyan-400/40 p-6 sm:p-8 shadow-2xl">
            
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                {selectedProject.period} · {selectedProject.category.toUpperCase()}
              </span>
              <h3 className="text-2xl font-bold text-white mt-2">
                {selectedProject.title}
              </h3>
              <p className="text-xs font-mono text-cyan-400 mt-1">
                {selectedProject.subtitle}
              </p>
            </div>

            {/* Long description */}
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
              {selectedProject.longDescription}
            </p>

            {/* Impact */}
            <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 mb-6 flex items-start gap-3">
              <Zap className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-mono text-cyan-400 uppercase font-semibold">Impact Mesuré</div>
                <div className="text-sm font-bold text-white">{selectedProject.impact}</div>
              </div>
            </div>

            {/* Architecture Highlights */}
            <div className="mb-6">
              <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-3">
                // COMPOSANTS CLÉS DE L'ARCHITECTURE
              </div>
              <div className="space-y-2">
                {selectedProject.architectureHighlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-gray-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech badges */}
            <div className="mb-6">
              <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">
                // TECHNOLOGIES UTILISÉES
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.05] text-cyan-300 border border-cyan-400/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-white/20 transition-colors flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  <span>Consulter sur GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                </a>
              )}

              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition-colors ml-auto"
              >
                Fermer
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
