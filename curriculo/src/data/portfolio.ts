import type { PortfolioContent } from '@/types/portfolio';

const sharedProjects = {
  webHorizon: {
    slug: 'web-horizon',
    title: 'Web Horizon',
    eyebrow: 'Produto digital · 2025',
    technologies: ['React', 'TypeScript', 'Vite', 'Cloudflare'],
    url: 'https://webhorizon.com.br/',
    image: 'projects/web-horizon.jpg',
    status: 'Live',
  },
  agah: {
    slug: 'agah-arquitetura',
    title: 'Agah Arquitetura',
    eyebrow: 'Website institucional · 2024',
    technologies: ['React', 'Tailwind CSS', 'Amazon SES', 'Responsive UI'],
    url: 'https://agah.arq.br/',
    status: 'Entregue',
  },
  hss: {
    slug: 'hss-monolith',
    title: 'Horizon Sales System',
    eyebrow: 'SaaS multi-tenant · Em desenvolvimento',
    technologies: ['Fastify', 'TypeScript', 'PostgreSQL', 'Prisma', 'RabbitMQ', 'Docker'],
    note: 'Produto em desenvolvimento · código privado',
    status: 'Em desenvolvimento',
  },
  las: {
    slug: 'las-monolith',
    title: 'League Analysis System',
    eyebrow: 'Analytics para esports · Em desenvolvimento',
    technologies: ['FastAPI', 'Python', 'PostgreSQL', 'Polars', 'React', 'Docker'],
    note: 'Produto em desenvolvimento · código privado',
    status: 'Em desenvolvimento',
  },
  nexus: {
    slug: 'nexus',
    title: 'Nexus',
    eyebrow: 'Projeto de TCC · Planejamento com IA',
    technologies: ['Fastify', 'TypeScript', 'MongoDB', 'React', 'Python', 'Gemini'],
    note: 'Projeto acadêmico · TCC',
    status: 'TCC',
  },
};

export const pt: PortfolioContent = {
  locale: 'pt',
  languageLabel: 'Português',
  alternateLanguageLabel: 'English',
  meta: {
    title: 'Victor Heringer — Backend Developer',
    description:
      'Backend Developer em Vitória, Brasil. APIs, integrações, arquitetura e produtos digitais com Node.js, PHP, bancos de dados e cloud.',
  },
  navigation: [
    { label: 'Visão geral', href: '#sobre' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Engenharia', href: '#engenharia' },
    { label: 'Contato', href: '#contato' },
  ],
  hero: {
    eyebrow: 'Backend Developer · Vitória, Brasil',
    title: 'Construo sistemas que',
    accent: 'continuam simples ao crescer.',
    description:
      'Desenvolvedor focado em backend, APIs e integrações. Transformo necessidades de produto em software confiável, organizado e pronto para evoluir.',
    location: 'Vitória · ES · Brasil',
    availability: 'Disponível para oportunidades remotas e internacionais',
    primaryCta: 'Conhecer meu trabalho',
    secondaryCta: 'Entrar em contato',
  },
  overview: {
    eyebrow: 'Perfil',
    title: 'Produto na superfície. Engenharia por baixo.',
    description:
      'Minha experiência combina desenvolvimento de produto, manutenção de sistemas reais e construção de soluções ponta a ponta. Trabalho entre regras de negócio, APIs, dados, infraestrutura e interfaces — com atenção especial à clareza da arquitetura.',
    metrics: [
      { value: '2023', label: 'Início da experiência profissional' },
      { value: '5', label: 'Produtos digitais em destaque' },
      { value: 'B2', label: 'Inglês para colaboração global' },
      { value: 'APIs', label: 'Foco em integrações e arquitetura' },
    ],
  },
  projects: {
    eyebrow: 'Selected work',
    title: 'Projetos tratados como produtos.',
    description:
      'Uma seleção de trabalhos em que tecnologia, experiência e objetivos de negócio foram pensados como um único sistema.',
    viewProject: 'Visitar produto',
    offlineLabel: 'Case entregue · domínio indisponível',
    items: [
      {
        ...sharedProjects.hss,
        description:
          'O Horizon Sales System é uma plataforma SaaS multi-tenant para operações de vendas, com processos e módulos configuráveis para diferentes segmentos.',
        problem:
          'Centralizar operações comerciais complexas sem transformar regras específicas de cada segmento em acoplamento estrutural.',
        solution:
          'Domínios modulares para CRM, workflows, aprovações, formulários e notificações, conectados por contratos explícitos.',
        architecture:
          'Monólito modular em monorepo, API e worker Fastify, PostgreSQL com Prisma e RLS, outbox com RabbitMQ e frontend React.',
        outcome:
          'Uma base arquitetural preparada para evolução incremental, isolamento multi-tenant e integrações assíncronas observáveis.',
      },
      {
        ...sharedProjects.las,
        description:
          'Plataforma para análise competitiva e preparação pré-jogo de equipes de League of Legends, conectando dados, scouting e suporte à decisão.',
        problem:
          'Transformar grandes volumes de dados competitivos em informações explicáveis e úteis para analistas, treinadores e equipes.',
        solution:
          'Ingestão de dados públicos, métricas transparentes, scouting, gestão de roster e apoio ao draft em tempo real.',
        architecture:
          'Monorepo com frontend React, API FastAPI, PostgreSQL, pipelines analíticos com Polars e processamento assíncrono com Redis e ARQ.',
        outcome:
          'Uma base analítica reproduzível para preparação de partidas, com recomendações ligadas às evidências que as sustentam.',
      },
      {
        ...sharedProjects.nexus,
        description:
          'Plataforma de planejamento baseada em IA criada como Trabalho de Conclusão de Curso, combinando agentes especializados, memória e execução estruturada de planos.',
        problem:
          'Apoiar o planejamento de projetos complexos sem perder contexto, histórico de decisões ou visibilidade sobre tarefas, prazos e recursos.',
        solution:
          'Assistentes de IA com memória persistente, chat contextual e ferramentas para organizar planos, marcos, tarefas, calendário, orçamento e visualização Kanban.',
        architecture:
          'Frontend React e TypeScript, API Fastify, MongoDB, comunicação em tempo real e agentes Python com Agno integrados ao Gemini.',
        outcome:
          'Um ambiente único para transformar objetivos em planos acionáveis e acompanhar sua evolução com suporte contextual de IA.',
      },
      {
        ...sharedProjects.webHorizon,
        description:
          'Presença digital para uma empresa de tecnologia e inovação, concebida como uma experiência de marca imersiva e diferenciada.',
        problem:
          'Apresentar serviços digitais sem recorrer ao padrão visual genérico de agências e software houses.',
        solution:
          'Uma experiência narrativa com direção visual espacial, interação progressiva e pontos de contato claros.',
        architecture:
          'Aplicação web componentizada, entrega estática otimizada e distribuição global pela borda.',
        outcome:
          'Uma identidade digital própria que posiciona a empresa e transforma a navegação em demonstração de capacidade técnica.',
      },
      {
        ...sharedProjects.agah,
        description:
          'Landing page responsiva para um escritório de arquitetura, criada para transformar portfólio visual em uma jornada comercial clara.',
        problem:
          'Organizar projetos arquitetônicos e gerar contato qualificado sem comprometer a força das imagens.',
        solution:
          'Hierarquia editorial, navegação responsiva e fluxo de contato direto integrado ao serviço de email.',
        architecture:
          'Frontend em React, sistema visual com Tailwind CSS e envio transacional usando Amazon SES.',
        outcome:
          'Produto entregue com experiência consistente em diferentes dispositivos e canal de contato integrado.',
      },
    ],
  },
  experience: {
    eyebrow: 'Trajetória',
    title: 'Experiência construída em sistemas reais.',
    items: [
      {
        company: 'Web Horizon',
        role: 'Tecnologia e desenvolvimento de produtos',
        period: '2025 — agora',
        description:
          'Atuação na construção de experiências e soluções digitais para empresas, conectando estratégia, produto e engenharia.',
        highlights: [
          'Estruturação de soluções digitais orientadas aos objetivos do negócio.',
          'Desenvolvimento de produtos web do conceito à publicação.',
          'Decisões de arquitetura, integração e experiência do usuário.',
        ],
        technologies: ['TypeScript', 'React', 'Node.js', 'Cloud'],
      },
      {
        company: 'Ilumimais Gestão Inteligente',
        role: 'Desenvolvimento de software',
        period: 'Desde abril de 2023',
        description:
          'Desenvolvimento e manutenção de um sistema de gestão em produção, atuando entre regras de negócio, banco de dados e interface.',
        highlights: [
          'Manutenção e evolução de funcionalidades em um sistema existente.',
          'Integração entre backend, SQL Server e experiências web.',
          'Colaboração com controle de versão e entrega incremental.',
        ],
        technologies: ['PHP', 'SQL Server', 'JavaScript', 'HTML', 'CSS'],
      },
    ],
  },
  skills: {
    eyebrow: 'Capabilities',
    title: 'Uma stack organizada por responsabilidade.',
    description:
      'Ferramentas mudam. O que permanece é a capacidade de modelar problemas, definir limites e entregar sistemas compreensíveis.',
    items: [
      {
        title: 'Backend',
        description: 'Serviços e regras de negócio previsíveis.',
        skills: ['Node.js', 'Fastify', 'PHP', 'REST APIs', 'Integrações'],
      },
      {
        title: 'Frontend',
        description: 'Interfaces responsivas conectadas ao produto.',
        skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind'],
      },
      {
        title: 'Dados',
        description: 'Modelagem, persistência e consultas.',
        skills: ['PostgreSQL', 'SQL Server', 'MongoDB', 'Prisma'],
      },
      {
        title: 'Cloud & DevOps',
        description: 'Entrega reproduzível e operação pragmática.',
        skills: ['AWS', 'Docker', 'CI/CD', 'GitHub', 'Cloudflare'],
      },
      {
        title: 'Arquitetura',
        description: 'Limites claros e evolução sustentável.',
        skills: ['Clean Architecture', 'API Design', 'SOLID', 'Observabilidade'],
      },
      {
        title: 'AI & Automação',
        description: 'Integrações úteis, seguras e mensuráveis.',
        skills: ['OpenAI', 'Automação', 'Python', 'Data workflows'],
      },
    ],
  },
  architecture: {
    eyebrow: 'Engineering approach',
    title: 'Arquitetura é tornar mudanças mais baratas.',
    description:
      'Começo pelo fluxo de valor e separo responsabilidades onde a mudança realmente acontece. O objetivo não é criar camadas por estética, mas manter decisões locais, testáveis e observáveis.',
    principles: [
      {
        title: 'Contratos antes de implementação',
        description:
          'APIs, tipos e estados de erro explícitos diminuem ambiguidades entre sistemas e pessoas.',
      },
      {
        title: 'Observabilidade desde o início',
        description:
          'Logs úteis, métricas e rastreabilidade fazem parte do produto — não são uma correção posterior.',
      },
      {
        title: 'Complexidade proporcional',
        description:
          'A solução mais simples que preserva a evolução vence. Abstrações precisam justificar o próprio custo.',
      },
    ],
    flow: ['Interface', 'API', 'Serviços', 'Dados', 'Cloud', 'Monitoramento'],
  },
  education: {
    eyebrow: 'Formação',
    title: 'Base acadêmica e aprendizado contínuo.',
    items: [
      {
        title: 'MBA em Data Science e Analytics',
        institution: 'ESALQ · Universidade de São Paulo',
        period: 'MBA',
        description:
          'Pós-graduação voltada à aplicação de dados, analytics e tomada de decisão em contextos de negócio.',
      },
      {
        title: 'Bacharelado em Sistemas de Informação',
        institution: 'Universidade Vila Velha — UVV',
        period: '2021 — 2025',
        description: 'Formação em engenharia de software, sistemas, dados e gestão de tecnologia.',
      },
      {
        title: 'Data Science',
        institution: 'Pearson · Londres',
        period: 'Janeiro de 2023',
        description:
          'Programa intensivo com Python, análise de dados, Power BI, Pandas e fundamentos de machine learning.',
      },
      {
        title: 'Inglês B2',
        institution: 'UFES · Núcleo de Línguas',
        period: 'Concluído',
        description: 'Proficiência para comunicação e colaboração em ambientes internacionais.',
      },
    ],
  },
  contact: {
    eyebrow: 'Contato',
    title: 'Vamos construir algo que dure?',
    description:
      'Estou disponível para oportunidades remotas e internacionais em desenvolvimento backend e engenharia de produto.',
    emailAction: 'Enviar email',
    copyAction: 'Copiar email',
    copied: 'Email copiado',
  },
  ui: {
    menu: 'Menu',
    close: 'Fechar',
    theme: 'Alternar tema',
    command: 'Abrir busca e comandos',
    commandPlaceholder: 'Navegue pelo portfólio…',
    noResults: 'Nenhum resultado encontrado.',
    backToTop: 'Voltar ao topo',
    skipToContent: 'Ir para o conteúdo',
    footer: 'Projetado e desenvolvido com intenção.',
  },
};

export const en: PortfolioContent = {
  ...pt,
  locale: 'en',
  languageLabel: 'English',
  alternateLanguageLabel: 'Português',
  meta: {
    title: 'Victor Heringer — Backend Developer',
    description:
      'Backend Developer based in Vitória, Brazil. APIs, integrations, architecture and digital products with Node.js, PHP, databases and cloud.',
  },
  navigation: [
    { label: 'Overview', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Engineering', href: '#engineering' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    eyebrow: 'Backend Developer · Vitória, Brazil',
    title: 'I build systems that',
    accent: 'stay simple as they grow.',
    description:
      'Backend developer focused on APIs and integrations. I turn product needs into reliable, organized software built to evolve.',
    location: 'Vitória · ES · Brazil',
    availability: 'Open to remote and international opportunities',
    primaryCta: 'Explore my work',
    secondaryCta: 'Get in touch',
  },
  overview: {
    eyebrow: 'Profile',
    title: 'Product on the surface. Engineering underneath.',
    description:
      'My experience brings together product development, production-system maintenance, and end-to-end delivery. I work across business rules, APIs, data, infrastructure, and interfaces—with a strong focus on architectural clarity.',
    metrics: [
      { value: '2023', label: 'Professional journey started' },
      { value: '5', label: 'Featured digital products' },
      { value: 'B2', label: 'English for global collaboration' },
      { value: 'APIs', label: 'Focus on integrations and architecture' },
    ],
  },
  projects: {
    eyebrow: 'Selected work',
    title: 'Projects approached as products.',
    description:
      'A selection of work where technology, experience, and business goals were designed as a single system.',
    viewProject: 'Visit product',
    offlineLabel: 'Delivered case · domain unavailable',
    items: [
      {
        ...sharedProjects.hss,
        eyebrow: 'Multi-tenant SaaS · In development',
        note: 'Product in development · private codebase',
        status: 'In development',
        description:
          'Horizon Sales System is a multi-tenant SaaS platform for sales operations, with configurable processes and modules for different industries.',
        problem:
          'Centralize complex commercial operations without turning industry-specific rules into structural coupling.',
        solution:
          'Modular domains for CRM, workflows, approvals, forms, and notifications connected through explicit contracts.',
        architecture:
          'Modular monolith in a monorepo, Fastify API and worker, PostgreSQL with Prisma and RLS, RabbitMQ outbox, and React frontend.',
        outcome:
          'An architectural foundation built for incremental evolution, tenant isolation, and observable asynchronous integrations.',
      },
      {
        ...sharedProjects.las,
        eyebrow: 'Esports analytics · In development',
        note: 'Product in development · private codebase',
        status: 'In development',
        description:
          'A competitive analytics and pre-game preparation platform for League of Legends teams, connecting data, scouting, and decision support.',
        problem:
          'Turn large competitive datasets into explainable and useful information for analysts, coaches, and teams.',
        solution:
          'Public-data ingestion, transparent metrics, scouting, roster management, and real-time draft support.',
        architecture:
          'Monorepo with a React frontend, FastAPI API, PostgreSQL, Polars analytics pipelines, and asynchronous processing with Redis and ARQ.',
        outcome:
          'A reproducible analytics foundation for match preparation, with recommendations linked to the evidence behind them.',
      },
      {
        ...sharedProjects.nexus,
        eyebrow: 'Capstone project · AI planning',
        note: 'Academic project · capstone',
        status: 'Capstone',
        description:
          'An AI-powered planning platform created as a capstone project, combining specialized agents, memory, and structured plan execution.',
        problem:
          'Support complex project planning without losing context, decision history, or visibility into tasks, timelines, and resources.',
        solution:
          'AI assistants with persistent memory, contextual chat, and tools for plans, milestones, tasks, calendars, budgets, and Kanban views.',
        architecture:
          'React and TypeScript frontend, Fastify API, MongoDB, real-time communication, and Python Agno agents integrated with Gemini.',
        outcome:
          'A unified environment for turning goals into actionable plans and following their evolution with contextual AI support.',
      },
      {
        ...sharedProjects.webHorizon,
        eyebrow: 'Digital product · 2025',
        description:
          'Digital presence for a technology and innovation company, designed as an immersive and distinctive brand experience.',
        problem:
          'Present digital services without relying on the generic visual language of software agencies.',
        solution:
          'A narrative experience with space-inspired art direction, progressive interaction, and clear contact points.',
        architecture:
          'Component-driven web app, optimized static delivery, and global edge distribution.',
        outcome:
          'A distinctive digital identity that positions the company and turns navigation into a demonstration of technical capability.',
      },
      {
        ...sharedProjects.agah,
        eyebrow: 'Company website · 2024',
        status: 'Delivered',
        description:
          'Responsive landing page for an architecture studio, built to turn a visual portfolio into a clear commercial journey.',
        problem:
          'Organize architecture projects and generate qualified contacts without compromising the visual work.',
        solution:
          'Editorial hierarchy, responsive navigation, and a direct contact flow connected to an email service.',
        architecture:
          'React frontend, Tailwind CSS visual system, and transactional delivery through Amazon SES.',
        outcome:
          'A delivered product with consistent multi-device UX and an integrated contact channel.',
      },
    ],
  },
  experience: {
    eyebrow: 'Journey',
    title: 'Experience built on real systems.',
    items: [
      {
        company: 'Web Horizon',
        role: 'Technology and product development',
        period: '2025 — present',
        description:
          'Building digital experiences and solutions for businesses by connecting strategy, product, and engineering.',
        highlights: [
          'Shaping digital solutions around concrete business goals.',
          'Developing web products from concept through release.',
          'Making architecture, integration, and user-experience decisions.',
        ],
        technologies: ['TypeScript', 'React', 'Node.js', 'Cloud'],
      },
      {
        company: 'Ilumimais Gestão Inteligente',
        role: 'Software development',
        period: 'Since April 2023',
        description:
          'Developing and maintaining a production management system across business rules, databases, and interface.',
        highlights: [
          'Maintaining and evolving features in an established system.',
          'Integrating backend services, SQL Server, and web experiences.',
          'Collaborating through version control and incremental delivery.',
        ],
        technologies: ['PHP', 'SQL Server', 'JavaScript', 'HTML', 'CSS'],
      },
    ],
  },
  skills: {
    eyebrow: 'Capabilities',
    title: 'A stack organized by responsibility.',
    description:
      'Tools change. What remains is the ability to model problems, define boundaries, and deliver systems people can understand.',
    items: [
      {
        title: 'Backend',
        description: 'Predictable services and business rules.',
        skills: ['Node.js', 'Fastify', 'PHP', 'REST APIs', 'Integrations'],
      },
      {
        title: 'Frontend',
        description: 'Responsive interfaces connected to product goals.',
        skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind'],
      },
      {
        title: 'Data',
        description: 'Modeling, persistence, and queries.',
        skills: ['PostgreSQL', 'SQL Server', 'MongoDB', 'Prisma'],
      },
      {
        title: 'Cloud & DevOps',
        description: 'Reproducible delivery and pragmatic operations.',
        skills: ['AWS', 'Docker', 'CI/CD', 'GitHub', 'Cloudflare'],
      },
      {
        title: 'Architecture',
        description: 'Clear boundaries and sustainable evolution.',
        skills: ['Clean Architecture', 'API Design', 'SOLID', 'Observability'],
      },
      {
        title: 'AI & Automation',
        description: 'Useful, safe, and measurable integrations.',
        skills: ['OpenAI', 'Automation', 'Python', 'Data workflows'],
      },
    ],
  },
  architecture: {
    eyebrow: 'Engineering approach',
    title: 'Architecture makes change less expensive.',
    description:
      'I start from the value flow and separate responsibilities where change actually happens. The goal is not layering for aesthetics—it is keeping decisions local, testable, and observable.',
    principles: [
      {
        title: 'Contracts before implementation',
        description:
          'Explicit APIs, types, and error states reduce ambiguity between systems and people.',
      },
      {
        title: 'Observability from day one',
        description:
          'Useful logs, metrics, and traceability are part of the product—not an afterthought.',
      },
      {
        title: 'Proportional complexity',
        description:
          'The simplest solution that preserves evolution wins. Every abstraction must justify its cost.',
      },
    ],
    flow: ['Interface', 'API', 'Services', 'Data', 'Cloud', 'Monitoring'],
  },
  education: {
    eyebrow: 'Education',
    title: 'Academic foundations and continuous learning.',
    items: [
      {
        title: 'MBA in Data Science and Analytics',
        institution: 'ESALQ · University of São Paulo',
        period: 'MBA',
        description:
          'Graduate program focused on applying data, analytics, and decision-making in business contexts.',
      },
      {
        title: 'BSc in Information Systems',
        institution: 'Universidade Vila Velha — UVV',
        period: '2021 — 2025',
        description:
          'Education across software engineering, systems, data, and technology management.',
      },
      {
        title: 'Data Science',
        institution: 'Pearson · London',
        period: 'January 2023',
        description:
          'Intensive program covering Python, data analysis, Power BI, Pandas, and machine-learning fundamentals.',
      },
      {
        title: 'English B2',
        institution: 'UFES · Language Center',
        period: 'Completed',
        description:
          'Working proficiency for communication and collaboration in global environments.',
      },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Let’s build something that lasts.',
    description:
      'I am open to remote and international opportunities in backend development and product engineering.',
    emailAction: 'Send an email',
    copyAction: 'Copy email',
    copied: 'Email copied',
  },
  ui: {
    menu: 'Menu',
    close: 'Close',
    theme: 'Toggle theme',
    command: 'Open search and commands',
    commandPlaceholder: 'Navigate the portfolio…',
    noResults: 'No results found.',
    backToTop: 'Back to top',
    skipToContent: 'Skip to content',
    footer: 'Designed and engineered with intent.',
  },
};

export const portfolioByLocale = { pt, en } as const;
