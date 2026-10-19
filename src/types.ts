export interface MetricItem {
  value: string;
  label: string;
  sublabel: string;
  iconName: string;
  highlight?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  client?: string;
  period: string;
  badge: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
  impactMetric?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'ai' | 'bi' | 'data-eng';
  featured: boolean;
  period: string;
  description: string;
  longDescription: string;
  technologies: string[];
  impact: string;
  githubUrl?: string;
  demoUrl?: string;
  architectureHighlights: string[];
}

export interface SkillGroup {
  category: string;
  icon: string;
  accentColor: string;
  description: string;
  skills: {
    name: string;
    level: string;
    highlight?: boolean;
  }[];
}
