import type { EducationItem, Experience, Locale, Project, SkillGroup } from './portfolio';

export interface ResumeLabels {
  summary: string;
  skills: string;
  experience: string;
  projects: string;
  education: string;
  courses: string;
  languages: string;
  problem: string;
  solution: string;
  technologies: string;
  present: string;
  backToPortfolio: string;
  printDocument: string;
  preparing: string;
  printError: string;
  documentHint: string;
}

export interface ResumePersonalInformation {
  fullName: string;
  role: string;
  location: string;
  email: string;
  linkedin: string;
  portfolio: string;
  phone?: string;
  github?: string;
}

export interface ResumeData {
  locale: Locale;
  fileName: string;
  personal: ResumePersonalInformation;
  summary: string;
  skills: SkillGroup[];
  experience: Experience[];
  projects: Project[];
  education: EducationItem[];
  courses: EducationItem[];
  languages: EducationItem[];
  labels: ResumeLabels;
  export: {
    label: string;
    ariaLabel: string;
    preparing: string;
    error: string;
  };
}
