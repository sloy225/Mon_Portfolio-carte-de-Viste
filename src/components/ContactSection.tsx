import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Send, 
  CheckCircle, 
  Copy, 
  MapPin, 
  Calendar, 
  Sparkles, 
  ArrowUpRight,
  ShieldCheck,
  FileDown
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenCVModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenCVModal }) => {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    // Build mailto string with populated fields
    const subject = encodeURIComponent(formState.subject || `Prise de contact via portfolio - ${formState.name}`);
    const body = encodeURIComponent(
      `Nom: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 8000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-xs font-mono text-cyan-400 mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>DISPONIBLE IMMÉDIATEMENT (ASAP)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Un projet Data ou une <span className="text-gradient-cyan-blue">opportunité d'embauche ?</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
            Je suis à l'écoute d'opportunités en <strong>CDI</strong> ou <strong>prestation grand compte</strong> en Île-de-France (ou hybride / full remote).
            Discutons de vos enjeux et de la valeur que je peux apporter à vos équipes.
          </p>
        </div>

        {/* Contact Layout: Left Info Cards & Right Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct channels (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Email Card with 1-click copy */}
            <div className="p-6 rounded-3xl glass-card border-white/10 hover:border-cyan-400/40 transition-all duration-300 group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-gray-400 uppercase">Adresse Email Directe</div>
                    <a 
                      href={`mailto:${PERSONAL_INFO.email}`} 
                      className="text-sm sm:text-base font-bold text-white hover:text-cyan-400 transition-colors break-all"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                  className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-cyan-500/20 text-gray-400 hover:text-cyan-300 border border-white/10 hover:border-cyan-400/30 transition-all"
                  title="Copier l'email"
                >
                  {copiedType === 'email' ? (
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {copiedType === 'email' && (
                <div className="mt-3 text-xs font-mono text-emerald-400 flex items-center gap-1.5 animate-in fade-in">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Email copié dans le presse-papier !</span>
                </div>
              )}
            </div>

            {/* Phone Card with 1-click copy */}
            <div className="p-6 rounded-3xl glass-card border-white/10 hover:border-blue-400/40 transition-all duration-300 group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/25 text-blue-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-gray-400 uppercase">Téléphone Mobile</div>
                    <a 
                      href={`tel:${PERSONAL_INFO.phone}`} 
                      className="text-sm sm:text-base font-bold text-white hover:text-blue-400 transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                  className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-blue-500/20 text-gray-400 hover:text-blue-300 border border-white/10 hover:border-blue-400/30 transition-all"
                  title="Copier le numéro"
                >
                  {copiedType === 'phone' ? (
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {copiedType === 'phone' && (
                <div className="mt-3 text-xs font-mono text-emerald-400 flex items-center gap-1.5 animate-in fade-in">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Numéro copié dans le presse-papier !</span>
                </div>
              )}
            </div>

            {/* Social Network Links (LinkedIn & GitHub) */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl glass-card border-white/10 hover:border-cyan-400/40 hover:bg-white/[0.05] transition-all group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div>
                  <div className="text-xs font-mono text-gray-400">Réseau Pro</div>
                  <div className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                    LinkedIn
                  </div>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl glass-card border-white/10 hover:border-purple-400/40 hover:bg-white/[0.05] transition-all group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
                    <Github className="w-5 h-5" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div>
                  <div className="text-xs font-mono text-gray-400">Code & Repos</div>
                  <div className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors">
                    GitHub
                  </div>
                </div>
              </a>
            </div>

            {/* CV Direct Download Banner */}
            <div className="p-5 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-dark-900 to-indigo-950/40 border border-cyan-400/30 flex items-center justify-between gap-4">
              <div>
                <div className="text-xs font-mono text-cyan-400">DOSSIER DE CANDIDATURE</div>
                <div className="text-sm font-bold text-white">Curriculum Vitae (PDF)</div>
              </div>
              <button
                onClick={onOpenCVModal}
                className="px-4 py-2 rounded-xl text-xs font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition-colors flex items-center gap-1.5 shadow-glow-cyan/20"
              >
                <FileDown className="w-4 h-4" />
                <span>Ouvrir</span>
              </button>
            </div>

          </div>

          {/* Right Column: Direct Message Form (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl glass-card border-white/10">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <span>Envoyer un message direct</span>
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 mb-6">
              Remplissez ce formulaire pour me joindre directement via votre messagerie ou recevoir une réponse sous 24h.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1.5">
                    Votre nom / Société *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Ex: Sophie Martin (Cabinet / Entreprise)"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-400 text-white placeholder-gray-500 text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1.5">
                    Votre adresse email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="sophie.martin@entreprise.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-400 text-white placeholder-gray-500 text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-300 mb-1.5">
                  Objet du message
                </label>
                <input
                  type="text"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="Ex: Proposition de poste Data Analyst / Mission Power BI & IA"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-400 text-white placeholder-gray-500 text-sm outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-300 mb-1.5">
                  Votre message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Bonjour Abdoul-Aziz, nous avons découvert votre profil et souhaitons échanger sur..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-400 text-white placeholder-gray-500 text-sm outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-sm text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all flex items-center justify-center gap-2 shadow-glow-cyan/30 active:scale-98"
                >
                  <Send className="w-4 h-4 text-black" />
                  <span>Envoyer mon message</span>
                </button>
              </div>

              {submitted && (
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-2 animate-in fade-in">
                  <CheckCircle className="w-4 h-4" />
                  <span>Votre client de messagerie a été ouvert avec le message pré-rempli. À très bientôt !</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>© 2026 {PERSONAL_INFO.name} · Tous droits réservés.</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#hero" className="hover:text-cyan-400 transition-colors">Retour en haut ↑</a>
            <span className="text-gray-700">|</span>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <span className="text-gray-700">|</span>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </footer>

      </div>
    </section>
  );
};
