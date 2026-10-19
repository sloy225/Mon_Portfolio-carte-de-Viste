import React, { useState } from 'react';
import {
  X,
  Download,
  Printer,
  CheckCircle,
  Copy,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Award,
  Briefcase,
  GraduationCap,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION_ITEMS } from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">

      {/* Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-dark-900 border border-cyan-400/40 shadow-2xl text-gray-200">

        {/* Sticky Header with Actions */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-4 sm:px-8 bg-dark-950/90 backdrop-blur-xl border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono font-semibold text-white">
              CURRICULUM VITAE · ABDOUL-AZIZ OUEDRAOGO
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-xl text-xs font-medium bg-white/[0.05] hover:bg-white/[0.1] text-gray-300 border border-white/10 transition-colors flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Imprimer / PDF</span>
            </button>

            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Recrutement%20/%20Mission%20Data%20-%20Abdoul-Aziz%20Ouedraogo`}
              className="px-3 py-1.5 rounded-xl text-xs font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition-colors flex items-center gap-1.5 shadow-glow-cyan/20"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contacter</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors ml-2"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Printable & Readable Body */}
        <div className="p-6 sm:p-10 space-y-8">

          {/* Top Header Card */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Abdoul-Aziz OUEDRAOGO
                </h1>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  Disponible ASAP
                </span>
              </div>
              <h2 className="text-sm sm:text-base font-semibold text-cyan-400 font-mono">
                Consultant Data Analyst & Analytics Engineer | Specialist Power BI, SQL & GenAI
              </h2>
              <p className="text-xs text-gray-400 mt-1">
                Major  Mastere Big Data & IA (19,25/20) · 3 ans d'expérience en grand compte (SNCF Réseau)
              </p>
            </div>

            {/* Quick Contact info badges */}
            <div className="flex flex-col gap-1.5 text-xs font-mono">
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{PERSONAL_INFO.location} · {PERSONAL_INFO.license}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-300 group">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-cyan-400 underline">
                  {PERSONAL_INFO.email}
                </a>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                  className="text-gray-500 hover:text-white"
                  title="Copier l'email"
                >
                  {copied === 'email' ? <CheckCircle className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>

              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-cyan-400">
                  {PERSONAL_INFO.phoneFormatted}
                </a>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                  className="text-gray-500 hover:text-white"
                  title="Copier le numéro"
                >
                  {copied === 'phone' ? <CheckCircle className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 flex items-center gap-1">
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                <span className="text-gray-600">·</span>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white flex items-center gap-1">
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Profile Summary */}
          <div>
            <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4" />
              <span>SYNTHÈSE DU PROFIL</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed bg-white/[0.02] p-4 rounded-2xl border border-white/5">
              Consultant Data & Analytics Engineer spécialisé dans la conception et l'industrialisation de solutions data de bout-en-bout.
              Solide expertise acquise durant 3 ans de prestation chez <strong>SNCF Réseau</strong> sur la modélisation dimensionnelle (Kimball),
              le développement de dashboards décisionnels <strong>Power BI (DAX, RLS)</strong> et l'optimisation de requêtes <strong>SQL (BigQuery, Azure)</strong>,
              ayant permis de diviser les temps de traitement de <strong>24h à 1h</strong>. Maîtrise des architectures modernes d'<strong>IA Générative (Agents CrewAI, RAG, Vector DB)</strong>
              pour automatiser l'analyse de flux documentaires complexes.
            </p>
          </div>

          {/* Professional Experience */}
          <div>
            <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4" />
              <span>EXPÉRIENCES PROFESSIONNELLES</span>
            </h3>

            <div className="space-y-4">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                    <span className="font-bold text-white text-sm sm:text-base">
                      {exp.role} — <span className="text-cyan-400">{exp.company}</span>
                      {exp.client && ` (${exp.client})`}
                    </span>
                    <span className="text-xs font-mono text-gray-400">{exp.period}</span>
                  </div>

                  {exp.impactMetric && (
                    <div className="text-xs font-mono text-emerald-400 mb-2">
                      ⚡ Impact : {exp.impactMetric}
                    </div>
                  )}

                  <ul className="space-y-1.5 text-xs text-gray-300 list-disc list-inside">
                    {exp.highlights.slice(0, 4).map((h, i) => (
                      <li key={i} className="leading-relaxed">{h}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mt-3 pt-2 border-t border-white/5">
                    {exp.technologies.slice(0, 7).map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-gray-300 border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" />
              <span>FORMATION & EXCELLENCE ACADÉMIQUE</span>
            </h3>

            <div className="space-y-3">
              {EDUCATION_ITEMS.map((edu, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <span className="font-bold text-white text-sm">{edu.degree}</span>
                    <span className="text-xs font-mono text-cyan-400 font-semibold">{edu.period}</span>
                  </div>
                  <div className="text-xs text-gray-300 font-medium mt-0.5">{edu.institution}</div>
                  <div className="text-xs text-gray-400 mt-1">{edu.details}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Summary */}
          <div>
            <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              <span>COMPÉTENCES CLÉS</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="font-bold text-white block mb-1">Analytics & Business Intelligence</span>
                <span className="text-gray-300">Power BI (DAX, RLS, Power Query), Modélisation Kimball (Étoile/Flocon), Storytelling KPI, Tableau.</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="font-bold text-white block mb-1">Data Engineering & Cloud</span>
                <span className="text-gray-300">SQL Avancé, GCP BigQuery, Microsoft Azure, Python (Pandas), PostgreSQL, Docker, Git.</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="font-bold text-white block mb-1">IA Générative & Machine Learning</span>
                <span className="text-gray-300">Agents IA (CrewAI, LangChain), RAG, Vector Databases, FastAPI, Scikit-learn, LLM.</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="font-bold text-white block mb-1">Méthodes & Gestion de Projets</span>
                <span className="text-gray-300">Cadre SAFe / Agile Scrum, Data Quality & Validation, Recueil de besoins, MCO, Conduite du changement.</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
