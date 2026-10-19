import React from 'react';
import {
  Award,
  MapPin,
  Calendar,
  Car,
  CheckCircle2,
  Sparkles,
  Briefcase,
  Target,
  Brain,
  Layers,
  ShieldCheck
} from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_ITEMS } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: <Briefcase className="w-5 h-5 text-cyan-400" />,
      title: "Rigueur Conseil Grand Compte",
      description: "3 ans d'immersion au sein de la SNCF Réseau. Maîtrise des environnements à haute exigence de gouvernance, méthodologie SAFe, MCO et qualité des flux de données critiques."
    },
    {
      icon: <Award className="w-5 h-5 text-amber-400" />,
      title: "Excellence Académique (19,25/20)",
      description: "Major en Mastère Big Data & Intelligence Artificielle (Bac+5). Solides bases mathématiques, algorithmiques, modélisation dimensionnelle et architectures distribuées."
    },
    {
      icon: <Brain className="w-5 h-5 text-purple-400" />,
      title: "Synergie Unique BI & GenAI",
      description: "Capacité rare à conjuguer la précision décisionnelle de Business Intelligence (Power BI, DAX) avec la puissance d'agents intelligents autonomes (LangChain, CrewAI, RAG)."
    },
    {
      icon: <Target className="w-5 h-5 text-emerald-400" />,
      title: "Culture du Résultat & Impact Métier",
      description: "Obsession pour l'efficacité opérationnelle : optimisation drastique des temps de calcul (24h à 1h), fiabilisation des KPIs et adoption immédiate par les directions financières et projets."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-xs font-mono text-cyan-400 mb-3">
            <span>01 // PROFIL & VISION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            À propos de <span className="text-gradient-cyan-blue">mon parcours</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-400 max-w-2xl">
            Du traitement de données brutes aux architectures d'intelligence décisionnelle et générative.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left: Bio & Logistics Cards (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">

            {/* Bio Card */}
            <div className="p-6 sm:p-8 rounded-3xl glass-card relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span>Transformer la complexité data en valeur business</span>
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                <p>
                  Je suis <strong>Consultant Data Analyst & Analytics Engineer</strong> basé en Île-de-France.
                  Ma vocation est d'orchestrer la chaîne de valeur de la donnée de bout-en-bout : de l'ingestion
                  et du nettoyage de volumes massifs jusqu'au storytelling décisionnel et au déploiement d'assistants IA spécialisés.
                </p>

                <p>
                  Au cours de mes <strong>3 années de prestation pour la SNCF Réseau</strong> (via le cabinet ALCYON-E),
                  j'ai conçu et pérennisé une vingtaine de tableaux de bord Power BI hautement sécurisés (RLS), restructuré
                  des modèles de données selon l'approche <strong>Kimball</strong>, et automatisé des pipelines SQL/Python
                  qui ont fait passer les délais de génération de rapports de <strong>24 heures à moins d'une heure</strong>.
                </p>

                <p>
                  Diplômé d'un <strong>MSc Big Data & Intelligence Artificielle</strong> en tant que <strong>Major (19,25/20)</strong>,
                  j'intègre activement les technologies d'<strong>IA Générative (systèmes multi-agents CrewAI, pipelines RAG et bases vectorielles)</strong>
                  afin d'automatiser le traitement de données non structurées et concevoir les outils d'aide à la décision de demain.
                </p>
              </div>

              {/* Logistics & Availability pill grid */}
              <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-gray-400">Disponibilité</div>
                    <div className="text-xs font-semibold text-emerald-400">Immédiate (ASAP)</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-gray-400">Localisation</div>
                    <div className="text-xs font-semibold text-white">Île-de-France (Neuilly-Plaisance, 93)</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                    <Car className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-gray-400">Mobilité</div>
                    <div className="text-xs font-semibold text-white">Permis B · Mobilité IDF / Télétravail</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-gray-400">Type de contrat ciblé</div>
                    <div className="text-xs font-semibold text-purple-300">CDI / Prestation Conseil</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Academic Background Highlights */}
            <div className="p-6 rounded-3xl glass-card border-cyan-500/20">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-cyan-400" />
                <h4 className="text-base font-bold text-white uppercase tracking-wider font-mono">
                  Formation & Diplômes
                </h4>
              </div>

              <div className="space-y-4">
                {EDUCATION_ITEMS.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-400/30 transition-colors">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <span className="font-bold text-white text-sm sm:text-base">{item.degree}</span>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                        {item.period}
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-cyan-400 mb-1">
                      {item.institution}
                    </div>
                    <div className="text-xs text-gray-400">
                      {item.details}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right: 4 Pillars of Excellence (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 px-1">
              // CE QUE J'APPORTE À VOTRE ÉQUIPE
            </div>

            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl glass-card hover:bg-white/[0.05] border border-white/[0.08] hover:border-cyan-400/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 group-hover:scale-110 group-hover:border-cyan-400/50 transition-all">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Quick quote / guarantee card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-950/40 via-dark-900 to-indigo-950/30 border border-cyan-500/30 shadow-glow-cyan/10">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>ENGAGEMENT QUALITÉ & LIVRABLE</span>
              </div>
              <p className="text-xs text-gray-300 italic">
                « Un bon tableau de bord ou un bon pipeline ne se mesure pas au nombre de lignes de code, mais à la clarté et à la vitesse avec lesquelles il permet de prendre la bonne décision business. »
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
