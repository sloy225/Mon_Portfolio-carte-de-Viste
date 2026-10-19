import React from 'react';
import {
  Sparkles,
  ArrowRight,
  FileDown,
  Award,
  Zap,
  LayoutDashboard,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { PERSONAL_INFO, KEY_METRICS } from '../data/portfolioData';
import { InteractiveDataGraph } from './InteractiveDataGraph';

interface HeroProps {
  onOpenCVModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCVModal }) => {
  const getMetricIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <Award className="w-5 h-5 text-cyan-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-400" />;
      case 'LayoutDashboard':
        return <LayoutDashboard className="w-5 h-5 text-blue-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-purple-400" />;
      default:
        return <TrendingUp className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">

      {/* Background radial spotlights & glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-hero-glow pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Tagline Badge */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-cyan-400/30 backdrop-blur-md text-xs font-mono text-cyan-300 shadow-glow-cyan/15">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
            <span className="font-semibold uppercase tracking-wider">CONSULTANT DATA ANALYST & ANALYTICS ENGINEER</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-400/25 backdrop-blur-md text-xs font-mono text-purple-300">
            <Cpu className="w-3.5 h-3.5 text-purple-400" />
            <span>Spécialiste Power BI, SQL & GenAI</span>
          </div>
        </div>

        {/* Main Grid: Left copy & Right 3D Interactive Topology */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column (60% on desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-center">

            {/* Giant H1 Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-extrabold tracking-tight text-white leading-[1.08] mb-6">
              VALORISER LA <span className="text-gradient-cyan-blue">DONNÉE</span>.<br className="hidden sm:inline" />
              PROPULSER L'<span className="text-gradient-cyan-blue">IA</span>.
            </h1>

            {/* Subtitle with bold emphasis */}
            <p className="text-base sm:text-lg md:text-xl text-gray-300 font-normal leading-relaxed mb-8 max-w-2xl">
              Consultant Data & Analytics Engineer fort de <strong className="text-white font-semibold underline decoration-cyan-400/50 underline-offset-4">3 ans d'expérience en grand compte (SNCF Réseau)</strong>.
              Spécialiste de la chaîne de valeur bout-en-bout : modélisation <strong className="text-white font-semibold">Power BI (DAX, RLS)</strong>, optimisation <strong className="text-white font-semibold">SQL (BigQuery, Azure)</strong> et architectures d'<strong className="text-cyan-400 font-semibold">Agents IA autonomes (GenAI, RAG)</strong>.
            </p>

            {/* Profile Snapshot Bar with photo */}
            <div className="flex items-center gap-4 p-3.5 mb-8 rounded-2xl glass-card gradient-border-glow max-w-xl">
              <div className="relative flex-shrink-0">
                <img
                  src={PERSONAL_INFO.photo}
                  alt={PERSONAL_INFO.name}
                  className="w-14 h-14 rounded-xl object-cover border border-cyan-400/40 shadow-glow-cyan/20"
                  onError={(e) => {
                    // Fallback to avatar if file issue
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-dark-900" />
              </div>

              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white truncate">{PERSONAL_INFO.name}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    BAC+5
                  </span>
                </div>
                <div className="text-xs text-gray-400 truncate">
                  Chargé d'études Data Analyst / Data Engineer · Prestation SNCF Réseau / ALCYON-E
                </div>
                <div className="flex items-center gap-2 mt-1 text-[11px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Disponible immédiatement (ASAP) · Île-de-France (Neuilly-Plaisance)</span>
                </div>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl font-bold text-sm text-black bg-cyan-400 hover:bg-cyan-300 transition-all duration-200 flex items-center gap-2 shadow-glow-cyan/30 hover:shadow-glow-cyan active:scale-95"
              >
                <span>Explorer mes projets majeurs</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </a>

              <button
                onClick={onOpenCVModal}
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-white glass-card hover:bg-white/[0.08] border border-white/15 hover:border-cyan-400/40 transition-all duration-200 flex items-center gap-2 active:scale-95 group"
              >
                <FileDown className="w-4 h-4 text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
                <span>Télécharger le CV (PDF)</span>
              </button>

              <a
                href="#contact"
                className="px-5 py-3.5 rounded-xl font-medium text-sm text-gray-300 hover:text-white hover:bg-white/[0.04] transition-colors flex items-center gap-1.5"
              >
                <span>Me contacter</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive 3D Canvas Visualization (50% on desktop) */}
          <div className="lg:col-span-5 relative">
            <InteractiveDataGraph />
          </div>

        </div>

        {/* Major Key Metrics Grid (4 items) */}
        <div className="mt-14 pt-10 border-t border-white/[0.08]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {KEY_METRICS.map((metric, idx) => (
              <div
                key={idx}
                className={`relative p-5 rounded-2xl glass-card transition-all duration-300 hover:-translate-y-1 group overflow-hidden ${metric.highlight
                  ? 'border-cyan-400/30 shadow-glow-cyan/10'
                  : 'border-white/[0.08]'
                  }`}
              >
                {/* Subtle corner highlight */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-bl-3xl pointer-events-none" />

                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-cyan-400/40 transition-colors">
                    {getMetricIcon(metric.iconName)}
                  </div>
                  {metric.highlight && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                      Key Impact
                    </span>
                  )}
                </div>

                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1 font-mono group-hover:text-cyan-400 transition-colors">
                  {metric.value}
                </div>

                <div className="text-sm font-semibold text-gray-200 mb-0.5">
                  {metric.label}
                </div>

                <div className="text-xs text-gray-400">
                  {metric.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
