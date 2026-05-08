export type Link = {
  label: string;
  href: string;
};

export type ExperienceEntry = {
  company: string;
  companyHref?: string;
  role: string;
  dates: string;
  location?: string;
  brandLogo?: string;
  summary: string;
  bullets: string[];
};

export type ProjectEntry = {
  name: string;
  description: string;
  tech: string[];
  href?: string;
  logo?: string;
  accent?: 'primary' | 'cyan' | 'magenta';
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type BrandEntry = {
  name: string;
  src: string;
  href: string;
  variant: 'image' | 'svg';
  shape?: 'wide' | 'square';
  invert?: boolean;
};

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const profile = {
  name: 'Austin Betts',
  title: 'Senior Software & AI Engineer',
  roles: [
    'Full Stack Engineer',
    'AI Engineer',
    'Platform Builder',
    'Dev-Ex Engineer',
  ],
  location: 'Portland, OR',
  phone: '208-870-8445',
  email: 'a.james.betts@gmail.com',
  headshot: asset('headshot.jpg'),
  tagline:
    'I build high-impact platforms at the intersection of full-stack engineering and agentic AI - from API ecosystems and developer copilots to systems that actually ship.',
  summary:
    'Seasoned and dedicated Full Stack, Senior-level Software/AI Engineer specializing in API ecosystems, developer tooling, and emerging AI-driven workflows. Known for building and scaling high-impact applications from concept to launch, including enterprise-grade platforms featured in keynote presentations. Combines deep back-end expertise with modern front-end development to deliver intuitive, high-performance solutions that improve developer experience and accelerate product adoption.',
  available: true,
};

export const links = {
  linkedin: 'https://www.linkedin.com/in/austin-betts-a392b31bb/',
  github: 'https://github.com/Flashlock',
  sponsor: 'https://github.com/sponsors/Flashlock',
  workday: 'https://www.workday.com/',
  workdayDeveloper: 'https://developer.workday.com/about',
  scaffold: 'https://scaffai.co/',
  kahnQueue: 'https://flashlock.github.io/kahn-queue/',
  evraz: 'https://www.evrazna.com/',
  email: 'mailto:a.james.betts@gmail.com',
  phone: 'tel:+12088708445',
};

export const stats: { label: string; value: string }[] = [
  { value: '5+ yrs', label: 'Shipping production software' },
  { value: '95%+', label: 'Test coverage on flagship app' },
  { value: 'Keynote', label: 'Featured at Workday DevCon 2025' },
  { value: 'AI-first', label: 'Agentic & API-driven workflows' },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    items: ['TypeScript', 'Java', 'Kotlin', 'Python', 'C#', 'C', 'SQL', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Frameworks & UI',
    items: ['React', 'Spring Boot', 'Koog', 'Angular', 'Electron', 'MUI Joy', 'Framer Motion'],
  },
  {
    title: 'Platforms & Infra',
    items: ['Workday', 'Temporal', 'n8n', 'Firebase', 'PostgreSQL', 'Docker', 'Linux', 'GitHub Actions'],
  },
  {
    title: 'AI & Agentic',
    items: ['Koog', 'LLM Tooling', 'Cursor', 'Claude Code', 'Agentic Workflows', 'Developer Copilots'],
  },
  {
    title: 'Tools & Practice',
    items: ['REST Explorer', 'Figma', 'Git', 'IntelliJ', 'Visual Studio', 'Agile Delivery'],
  },
];

export const experience: ExperienceEntry[] = [
  {
    company: 'Workday',
    companyHref: links.workday,
    role: 'Senior Associate Software Engineer (P2)',
    dates: '2024 - 2026',
    brandLogo: asset('brands/Workday_Logo_1.png'),
    summary:
      'Founding contributor to the API Tooling Team, driving developer and agent-based interactions with Workday\'s API ecosystem.',
    bullets: [
      'Spearheaded development and successful launch of REST Explorer, improving accessibility of Workday\'s core API ecosystem.',
      'Led greenfield front-end architecture for Developer Copilot for APIs - now the team\'s flagship product, featured in a company-wide keynote.',
      'Delivered Copilot with 95%+ test coverage, ensuring stability, reliability, and production readiness.',
      'Engineered a frontend service provider framework simulating backend functionality, accelerating delivery under tight constraints.',
      'Translated complex API capabilities into intuitive user-facing applications across engineering and product teams.',
    ],
  },
  {
    company: 'EVRAZ NA',
    companyHref: links.evraz,
    role: 'Full Stack Software Engineer',
    dates: '2023 - 2024',
    location: 'Portland, OR',
    brandLogo: asset('brands/Evraz logo.png'),
    summary:
      'Owned end-to-end development across multiple enterprise applications, modernizing legacy systems and improving operational efficiency.',
    bullets: [
      'Directed full lifecycle of the Order Approval Modernization platform across sales, engineering, and operations.',
      'Re-architected the EDI Generator Framework, reducing the codebase footprint ~80% while supporting multiple EDI formats.',
      'Built RESTful services with Spring Boot, integrating LDAP and Active Directory authentication.',
      'Designed cross-platform front-ends with Angular and Electron, improving usability and accessibility.',
      'Produced UI/UX designs in Figma, streamlining development workflows and product clarity.',
    ],
  },
  {
    company: 'No Money Studios LLC',
    role: 'Founder & Full Stack Engineer',
    dates: '2021 - 2022',
    location: 'Vancouver, WA',
    summary:
      'Founded an independent game development studio - oversaw product, business operations, and go-to-market.',
    bullets: [
      'Built and launched a mobile game on Google Play, validating product-market fit.',
      'Developed full-stack web apps using React and Firebase to support distribution and engagement.',
      'Established foundational systems for scalable game development and deployment.',
    ],
  },
];

export const projects: ProjectEntry[] = [
  {
    name: 'Scaffold (Scaffai.co)',
    description:
      'AI-driven full-stack platform built on Koog and Temporal - exploring agentic workflows and intelligent automation by orchestrating complex backend processes for scalable AI-powered interactions.',
    tech: ['Koog', 'Temporal', 'React', 'TypeScript'],
    href: links.scaffold,
    logo: asset('brands/scaffold.ico'),
    accent: 'primary',
  },
  {
    name: 'Developer Copilot for APIs',
    description:
      'Flagship customer-facing Workday application enabling natural-language interaction with Workday APIs. Built micro front-end infrastructure from scratch and rapid prototyping rails to hit aggressive timelines.',
    tech: ['React', 'Kotlin', 'Spring Boot', 'MFE'],
    href: links.workdayDeveloper,
    logo: asset('brands/Workday_Logo_1.png'),
    accent: 'cyan',
  },
  {
    name: 'REST Explorer',
    description:
      'Centralized API exploration tool for Workday\'s REST services - improving discoverability and usability for developers and future AI-driven integrations.',
    tech: ['React', 'TypeScript', 'API Tooling'],
    href: links.workdayDeveloper,
    logo: asset('brands/Workday_Logo_1.png'),
    accent: 'cyan',
  },
  {
    name: 'Kahn Queue',
    description:
      'Open-source scheduler/coordinator library based on topological ordering - lightweight orchestration primitives for animation and async work.',
    tech: ['OPEN SOURCE', 'TypeScript', 'Java', 'Python'],
    href: links.kahnQueue,
    logo: asset('brands/kahn-queue.svg'),
    accent: 'magenta',
  },
  {
    name: 'Order Approval Modernization',
    description:
      'Replaced legacy EVRAZ workflows with a scalable Angular + Spring Boot platform, improving cross-functional collaboration and operational efficiency.',
    tech: ['Angular', 'Spring Boot', 'PostgreSQL'],
    href: links.evraz,
    logo: asset('brands/evraz flag.png'),
    accent: 'primary',
  },
  {
    name: 'Slide (Mobile Game)',
    description:
      'Unity-based mobile game published on Google Play - full development lifecycle from concept to release under No Money Studios.',
    tech: ['Unity', 'C#', 'Mobile'],
    logo: asset('brands/Slide.jpg'),
    accent: 'magenta',
  },
];

export const brands: BrandEntry[] = [
  {
    name: 'Workday',
    src: asset('brands/Workday_Logo_1.png'),
    href: links.workday,
    variant: 'image',
    shape: 'wide',
  },
  {
    name: 'EVRAZ',
    src: asset('brands/Evraz logo.png'),
    href: links.evraz,
    variant: 'image',
    shape: 'wide',
  },
  {
    name: 'Scaffold',
    src: asset('brands/scaffold.ico'),
    href: links.scaffold,
    variant: 'image',
    shape: 'square',
  },
  {
    name: 'Kahn Queue',
    src: asset('brands/kahn-queue.svg'),
    href: links.kahnQueue,
    variant: 'svg',
    shape: 'square',
  },
];

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const education = {
  degree: 'B.S. Computer Science',
  school: 'Washington State University',
  minors: ['Mathematics', 'Spanish'],
};
