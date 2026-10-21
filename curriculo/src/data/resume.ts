import type { Experience, PortfolioContent, Project, SkillGroup } from '../types/portfolio';
import type { ResumeData, ResumeLabels } from '../types/resume';
import { profile } from './profile';

const featuredProjectSlugs = ['chronos', 'las-monolith', 'nexus'];

const labelsByLocale: Record<PortfolioContent['locale'], ResumeLabels> = {
  pt: {
    summary: 'Resumo profissional',
    skills: 'Competências técnicas',
    experience: 'Experiência profissional',
    projects: 'Projetos de engenharia selecionados',
    education: 'Formação acadêmica',
    courses: 'Cursos relevantes',
    languages: 'Idiomas',
    problem: 'Foco de engenharia',
    solution: 'Arquitetura',
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
    projects: 'Selected engineering projects',
    education: 'Education',
    courses: 'Relevant coursework',
    languages: 'Languages',
    problem: 'Engineering focus',
    solution: 'Architecture',
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
  pt: 'Engenheiro de Software com foco em backend, experiência na evolução e modernização de sistemas em produção, desenvolvimento de APIs e implementação de regras de negócio orientadas a dados. Atua profissionalmente com PHP, SQL Server e arquiteturas legadas, complementando essa experiência com projetos em TypeScript, Node.js, PostgreSQL e Python. Foco em sistemas backend sustentáveis, engenharia de dados, infraestrutura cloud e arquitetura de software aplicada.',
  en: 'Backend Software Engineer experienced in maintaining and modernizing production systems, building APIs, and implementing database-driven business logic. Professional experience with PHP, SQL Server, and legacy application architectures, complemented by software projects using TypeScript, Node.js, PostgreSQL, and Python. Focused on maintainable backend systems, data engineering, cloud infrastructure, and practical software architecture.',
};

const roleByLocale: Record<PortfolioContent['locale'], string> = {
  pt: 'Engenheiro de Software Backend | Dados, APIs & Cloud',
  en: 'Backend Software Engineer | Data & Cloud',
};

const skillsByLocale: Record<PortfolioContent['locale'], SkillGroup[]> = {
  pt: [
    {
      title: 'Backend Engineering',
      description: 'Serviços, APIs e regras de negócio.',
      skills: ['Node.js', 'TypeScript', 'Fastify', 'PHP', 'Python', 'REST APIs', 'Integrações'],
    },
    {
      title: 'Databases & Data',
      description: 'Modelagem, persistência e consultas.',
      skills: ['SQL', 'PostgreSQL', 'SQL Server', 'MongoDB', 'Prisma', 'Data Modeling'],
    },
    {
      title: 'Data Engineering & Analytics',
      description: 'Ingestão, processamento e análise.',
      skills: ['Python', 'Polars', 'Pandas', 'Data Ingestion', 'Data Processing', 'Analytics'],
    },
    {
      title: 'Cloud & Infrastructure',
      description: 'Entrega e operação.',
      skills: ['AWS', 'Docker', 'CI/CD', 'Cloudflare'],
    },
    {
      title: 'Architecture & Engineering',
      description: 'Limites e evolução sustentável.',
      skills: ['API Design', 'Arquitetura modular', 'SOLID', 'Observabilidade', 'RabbitMQ'],
    },
    {
      title: 'AI & Automation',
      description: 'Modelos, agentes e automação.',
      skills: ['OpenAI', 'Gemini', 'AI Integration', 'Automação', 'Data Workflows'],
    },
    {
      title: 'Frontend complementar',
      description: 'Interfaces conectadas aos serviços.',
      skills: ['React', 'JavaScript', 'HTML', 'CSS'],
    },
  ],
  en: [
    {
      title: 'Backend Engineering',
      description: 'Services, APIs, and business rules.',
      skills: ['Node.js', 'TypeScript', 'Fastify', 'PHP', 'Python', 'REST APIs', 'Integrations'],
    },
    {
      title: 'Databases & Data',
      description: 'Modeling, persistence, and queries.',
      skills: ['SQL', 'PostgreSQL', 'SQL Server', 'MongoDB', 'Prisma', 'Data Modeling'],
    },
    {
      title: 'Data Engineering & Analytics',
      description: 'Ingestion, processing, and analysis.',
      skills: ['Python', 'Polars', 'Pandas', 'Data Ingestion', 'Data Processing', 'Analytics'],
    },
    {
      title: 'Cloud & Infrastructure',
      description: 'Delivery and operations.',
      skills: ['AWS', 'Docker', 'CI/CD', 'Cloudflare'],
    },
    {
      title: 'Architecture & Engineering',
      description: 'Boundaries and sustainable evolution.',
      skills: ['API Design', 'Modular Architecture', 'SOLID', 'Observability', 'RabbitMQ'],
    },
    {
      title: 'AI & Automation',
      description: 'Models, agents, and automation.',
      skills: ['OpenAI', 'Gemini', 'AI Integration', 'Automation', 'Data Workflows'],
    },
    {
      title: 'Complementary Frontend',
      description: 'Interfaces connected to services.',
      skills: ['React', 'JavaScript', 'HTML', 'CSS'],
    },
  ],
};

const experienceByLocale: Record<PortfolioContent['locale'], Experience[]> = {
  pt: [
    {
      company: 'Web Horizon',
      role: 'Desenvolvimento de software e produtos',
      period: '2025 — agora',
      description:
        'Desenvolvimento de produtos web e soluções empresariais, conectando arquitetura, integrações e entrega em cloud.',
      highlights: [
        'Estruturo soluções técnicas a partir de objetivos de negócio, definindo arquitetura e integrações.',
        'Desenvolvo e publico produtos web com TypeScript, Node.js e React.',
        'Conduzo decisões técnicas do conceito ao deploy, conciliando serviços, interfaces e infraestrutura cloud.',
      ],
      technologies: ['Node.js', 'TypeScript', 'Cloud', 'React'],
    },
    {
      company: 'Ilumimais Gestão Inteligente',
      role: 'Desenvolvedor de Software Full Stack',
      period: 'Desde abril de 2023',
      description:
        'Desenvolvimento e manutenção de um sistema de gestão em produção, com foco em regras de negócio, backend e persistência de dados.',
      highlights: [
        'Desenvolvo e mantenho módulos do sistema integrando regras de negócio, backend PHP e SQL Server.',
        'Evoluo funcionalidades em uma base existente com entregas incrementais e controle de versão.',
        'Integro persistência de dados e interfaces web para sustentar os fluxos operacionais do sistema.',
      ],
      technologies: ['PHP', 'SQL', 'SQL Server', 'JavaScript', 'HTML', 'CSS'],
    },
  ],
  en: [
    {
      company: 'Web Horizon',
      role: 'Software and product development',
      period: '2025 — Present',
      description:
        'Designing and developing digital products and business software, translating requirements into maintainable architecture and implementation.',
      highlights: [
        'Building web applications and backend integrations with TypeScript, Node.js, React, and cloud services.',
        'Making technical decisions across APIs, data persistence, application structure, and deployment.',
        'Delivering software solutions focused on modularity, maintainability, and business requirements.',
      ],
      technologies: ['Node.js', 'TypeScript', 'Cloud', 'React'],
    },
    {
      company: 'Ilumimais Gestão Inteligente',
      role: 'Full Stack Software Developer',
      period: 'Apr 2023 — Present',
      description:
        'Maintaining and evolving a production management system built on a legacy PHP MVC architecture, implementing business rules and database-integrated features.',
      highlights: [
        'Developing backend features and data-access logic with PHP and SQL Server for business modules.',
        'Contributing to legacy-system modernization and persistence-layer improvements.',
        'Refactoring incrementally and validating changes while preserving existing workflows and behavior.',
      ],
      technologies: ['PHP', 'SQL', 'SQL Server', 'JavaScript', 'HTML', 'CSS'],
    },
  ],
};

const projectCopyByLocale: Record<
  PortfolioContent['locale'],
  Record<string, Pick<Project, 'description' | 'problem' | 'solution' | 'technologies'>>
> = {
  pt: {
    'las-monolith': {
      description:
        'Plataforma analítica que ingere dados competitivos públicos e os transforma em métricas explicáveis para scouting, preparação de partidas e suporte à decisão.',
      problem:
        'Ingestão, modelagem e processamento de grandes volumes de dados externos em workflows analíticos reproduzíveis.',
      solution:
        'API FastAPI, PostgreSQL, pipelines com Polars e processamento assíncrono com Redis e ARQ.',
      technologies: [
        'Python',
        'FastAPI',
        'Polars',
        'PostgreSQL',
        'Redis',
        'ARQ',
        'Docker',
        'React',
      ],
    },
    chronos: {
      description:
        'SaaS de agendamentos para empresas de serviços, com regras para duração de serviços, disponibilidade de profissionais e reservas sem conflitos.',
      problem:
        'Coordenar múltiplos serviços e profissionais, respeitando duração, disponibilidade e janelas de atendimento.',
      solution:
        'Fluxo de agendamento com validação de disponibilidade e regras de negócio para reservas de serviços.',
      technologies: ['TypeScript', 'Fastify', 'PostgreSQL', 'Prisma', 'Redis'],
    },
    nexus: {
      description:
        'Plataforma de planejamento com IA que combina agentes especializados, memória persistente, contexto e execução estruturada de planos.',
      problem:
        'Gerenciamento de contexto, histórico de decisões, tarefas e recursos durante o planejamento de projetos complexos.',
      solution:
        'API Fastify, MongoDB, comunicação em tempo real e agentes Python com Agno integrados ao Gemini.',
      technologies: ['TypeScript', 'Fastify', 'MongoDB', 'Python', 'Agno', 'Gemini', 'React'],
    },
  },
  en: {
    'las-monolith': {
      description:
        'Analytics platform that ingests public competitive data and turns it into explainable metrics for scouting, match preparation, and decision support.',
      problem:
        'Ingesting, modeling, and processing large external datasets through reproducible analytics workflows.',
      solution:
        'FastAPI API, PostgreSQL, Polars pipelines, and asynchronous processing with Redis and ARQ.',
      technologies: [
        'Python',
        'FastAPI',
        'Polars',
        'PostgreSQL',
        'Redis',
        'ARQ',
        'Docker',
        'React',
      ],
    },
    chronos: {
      description:
        'Appointment scheduling SaaS for service businesses, with rules for service duration, staff availability, and conflict-free bookings.',
      problem:
        'Coordinate multiple services and staff while respecting service duration, availability, and appointment windows.',
      solution:
        'Booking flow with availability validation and business rules for service reservations.',
      technologies: ['TypeScript', 'Fastify', 'PostgreSQL', 'Prisma', 'Redis'],
    },
    nexus: {
      description:
        'AI planning platform combining specialized agents, persistent memory, context management, and structured plan execution.',
      problem:
        'Managing context, decision history, tasks, and resources throughout complex project planning.',
      solution:
        'Fastify API, MongoDB, real-time communication, and Python Agno agents integrated with Gemini.',
      technologies: ['TypeScript', 'Fastify', 'MongoDB', 'Python', 'Agno', 'Gemini', 'React'],
    },
  },
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
    const resumeCopy = projectCopyByLocale[content.locale][slug];
    return project && resumeCopy ? [{ ...project, ...resumeCopy }] : [];
  });
}

export function buildResumeData(content: PortfolioContent): ResumeData {
  const isPt = content.locale === 'pt';

  return {
    locale: content.locale,
    fileName: getResumeFileName(content.locale),
    personal: {
      fullName: profile.fullName,
      role: roleByLocale[content.locale],
      location: `${profile.location.city}, ${profile.location.region}, ${isPt ? 'Brasil' : 'Brazil'}`,
      email: profile.email,
      linkedin: profile.links.linkedin,
      portfolio: profile.links.portfolio,
    },
    summary: summaryByLocale[content.locale],
    skills: skillsByLocale[content.locale],
    experience: experienceByLocale[content.locale].map((item) => ({
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
