export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  category: 'legal' | 'ti' | 'ai' | 'dev';
  deliverables: string[];
  benefits: string[];
  tools: string[];
  whatsappMessage: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  highlights: string[];
  techStack: string[];
  badge?: string;
  image?: string;
  linkText?: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level: string; description: string }[];
}

export interface DiagnosticState {
  segment: string;
  teamSize: string;
  bottlenecks: string[];
  urgency: string;
}
