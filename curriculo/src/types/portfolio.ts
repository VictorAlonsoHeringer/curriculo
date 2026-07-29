export type Locale = 'pt' | 'en';

export interface NavigationItem {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  problem: string;
  solution: string;
  architecture: string;
  outcome: string;
  technologies: string[];
  url?: string;
  image?: string;
  note?: string;
  status: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface SkillGroup {
  title: string;
  description: string;
  skills: string[];
}

export interface PortfolioContent {
  locale: Locale;
  languageLabel: string;
  alternateLanguageLabel: string;
  meta: {
    title: string;
    description: string;
  };
  navigation: NavigationItem[];
  hero: {
    eyebrow: string;
    title: string;
    accent: string;
    description: string;
    location: string;
    availability: string;
    primaryCta: string;
    secondaryCta: string;
  };
  overview: {
    eyebrow: string;
    title: string;
    description: string;
    metrics: Array<{ value: string; label: string }>;
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    viewProject: string;
    offlineLabel: string;
    items: Project[];
  };
  experience: {
    eyebrow: string;
    title: string;
    items: Experience[];
  };
  skills: {
    eyebrow: string;
    title: string;
    description: string;
    items: SkillGroup[];
  };
  architecture: {
    eyebrow: string;
    title: string;
    description: string;
    principles: Array<{ title: string; description: string }>;
    flow: string[];
  };
  education: {
    eyebrow: string;
    title: string;
    items: Array<{ title: string; institution: string; period: string; description: string }>;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    emailAction: string;
    copyAction: string;
    copied: string;
  };
  ui: {
    menu: string;
    close: string;
    theme: string;
    command: string;
    commandPlaceholder: string;
    noResults: string;
    backToTop: string;
    skipToContent: string;
    footer: string;
  };
}
