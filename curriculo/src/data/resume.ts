import type { PortfolioContent } from '../types/portfolio';
import type { ResumeData, ResumeLabels } from '../types/resume';
import { profile } from './profile';

const featuredProjectSlugs = ['hss-monolith', 'las-monolith', 'nexus'];

const labelsByLocale: Record<PortfolioContent['locale'], ResumeLabels> = {
  pt: {
    summary: 'Resumo profissional',
    skills: 'Competências técnicas',
    experience: 'Experiência profissional',
    projects: 'Projetos em destaque',
    education: 'Formação acadêmica',
    courses: 'Cursos relevantes',
    languages: 'Idiomas',
    problem: 'Contexto',
    solution: 'Solução',
    technologies: 'Tecnologias',
    present: 'Atualmente',
    backToPortfolio: 'Voltar ao portfólio',
    printDocument: 'Salvar como PDF',
    preparing: 'Preparando currículo…',
    printError: 'Não foi possível abrir a impressão. Tente novamente.',
    documentHint: 'Use “Salvar como PDF” na janela de impressão.',
  },
  en: {
    summary: 'Professional summary',
    skills: 'Technical skills',
    experience: 'Professional experience',
    projects: 'Selected projects',
    education: 'Education',
    courses: 'Relevant coursework',
    languages: 'Languages',
    problem: 'Context',
    solution: 'Solution',
    technologies: 'Technologies',
    present: 'Present',
    backToPortfolio: 'Back to portfolio',
    printDocument: 'Print or save PDF',
    preparing: 'Preparing résumé…',
    printError: 'The print dialog could not be opened. Please try again.',
    documentHint: 'Choose “Save as PDF” in the print dialog.',
  },
};

const summaryByLocale: Record<PortfolioContent['locale'], string> = {
  pt: 'Backend Developer com experiência na modernização e evolução de sistemas em produção e na construção de produtos ponta a ponta. Atua com Node.js, TypeScript, Fastify, PHP, PostgreSQL e SQL Server, combinando APIs, integrações, arquitetura modular, AWS, Docker, automação e aplicações de inteligência artificial.',
  en: 'Backend Developer experienced in modernizing and evolving production systems and delivering end-to-end products. Works with Node.js, TypeScript, Fastify, PHP, PostgreSQL, and SQL Server across APIs, integrations, modular architecture, AWS, Docker, automation, and applied artificial intelligence.',
};

export function getResumeFileName(locale: PortfolioContent['locale']) {
  return locale === 'pt'
    ? 'Victor-Alonso-Heringer-Curriculo-PT.pdf'
    : 'Victor-Alonso-Heringer-Resume-EN.pdf';
}

export function formatResumePeriod(period: string) {
  return period.trim().replace(/\s+/g, ' ');
}

export function selectFeaturedProjects(content: PortfolioContent) {
  return featuredProjectSlugs.flatMap((slug) => {
    const project = content.projects.items.find((item) => item.slug === slug);
    return project ? [project] : [];
  });
}

export function buildResumeData(content: PortfolioContent): ResumeData {
  const isPt = content.locale === 'pt';

  return {
    locale: content.locale,
    fileName: getResumeFileName(content.locale),
    personal: {
      fullName: profile.fullName,
      role: profile.role,
      location: `${profile.location.city}, ${profile.location.region}, ${isPt ? 'Brasil' : 'Brazil'}`,
      email: profile.email,
      linkedin: profile.links.linkedin,
      portfolio: profile.links.portfolio,
    },
    summary: summaryByLocale[content.locale],
    skills: content.skills.items,
    experience: content.experience.items.map((item) => ({
      ...item,
      period: formatResumePeriod(item.period),
    })),
    projects: selectFeaturedProjects(content),
    education: content.education.items.filter((item) => item.category === 'degree'),
    courses: content.education.items.filter((item) => item.category === 'course'),
    languages: content.education.items.filter((item) => item.category === 'language'),
    labels: labelsByLocale[content.locale],
    export: {
      label: isPt ? 'Exportar currículo' : 'Download résumé',
      ariaLabel: isPt
        ? 'Exportar currículo profissional em PDF'
        : 'Download professional résumé as PDF',
      preparing: isPt ? 'Preparando currículo…' : 'Preparing résumé…',
      error: isPt
        ? 'Não foi possível gerar o currículo. Tente novamente.'
        : 'The résumé could not be generated. Please try again.',
    },
  };
}
