import React, { useState, Component, ErrorInfo, ReactNode } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ProjectsBento } from './components/ProjectsBento';
import { TechStackSection } from './components/TechStackSection';
import { ContactSection } from './components/ContactSection';
import { CVModal } from './components/CVModal';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#090D16] text-white flex flex-col items-center justify-center p-6 text-center">
          <div className="p-6 rounded-2xl bg-red-950/40 border border-red-500/40 max-w-lg">
            <h2 className="text-xl font-bold text-red-400 mb-2">Une erreur est survenue</h2>
            <p className="text-xs font-mono text-gray-300 mb-4">{this.state.error?.message}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 rounded-xl bg-cyan-400 text-black font-bold text-xs"
            >
              Recharger la page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export const App: React.FC = () => {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#090D16] text-[#F3F4F6] relative selection:bg-[#00F0FF]/20 selection:text-[#00F0FF]">
        
        {/* Global Background Grid and Ambient Glows */}
        <div className="fixed inset-0 bg-grid-pattern opacity-25 pointer-events-none -z-20" />
        <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[180px] pointer-events-none -z-10" />
        <div className="fixed bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[180px] pointer-events-none -z-10" />

        {/* Navigation Header */}
        <Navbar onOpenCVModal={() => setCvModalOpen(true)} />

        {/* Main Content Sections */}
        <main>
          {/* Section Héro (Impact Immédiat & 3D Interactive Topology) */}
          <Hero onOpenCVModal={() => setCvModalOpen(true)} />

          {/* Section À Propos & Vision */}
          <AboutSection />

          {/* Section Expériences Professionnelles (Timeline interactive) */}
          <ExperienceTimeline />

          {/* Section Projets Clés Data & IA (Grid Bento moderne) */}
          <ProjectsBento />

          {/* Section Stack Technique & Méthodologie (Cartes thématiques) */}
          <TechStackSection />

          {/* Section Contact & CTA Final */}
          <ContactSection onOpenCVModal={() => setCvModalOpen(true)} />
        </main>

        {/* CV Modal */}
        <CVModal 
          isOpen={cvModalOpen} 
          onClose={() => setCvModalOpen(false)} 
        />

      </div>
    </ErrorBoundary>
  );
};

export default App;
