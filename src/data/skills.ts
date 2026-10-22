export type SkillLevel = 'Hands-on' | 'Working Knowledge' | 'Learning';

export type SkillCategory =
  | 'All'
  | 'Frontend'
  | 'Backend'
  | 'Programming'
  | 'Databases'
  | 'AI & Automation'
  | 'Tools & Practices';

export interface SkillItem {
  name: string;
  category: SkillCategory;
  level: SkillLevel;
  iconName: string;
  description: string;
}

export const skillCategories: SkillCategory[] = [
  'All',
  'Frontend',
  'Backend',
  'Programming',
  'Databases',
  'AI & Automation',
  'Tools & Practices',
];

export const skillsData: SkillItem[] = [
  // Category A — Frontend
  {
    name: 'React.js',
    category: 'Frontend',
    level: 'Hands-on',
    iconName: 'Atom',
    description: 'Component architecture, state hooks, responsive single-page apps.',
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'Frontend',
    level: 'Hands-on',
    iconName: 'FileCode2',
    description: 'Modern asynchronous JS, DOM manipulation, modular architecture.',
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    level: 'Hands-on',
    iconName: 'Palette',
    description: 'Utility-first modern styling, responsive layouts, dark themes.',
  },
  {
    name: 'Vite',
    category: 'Frontend',
    level: 'Hands-on',
    iconName: 'Zap',
    description: 'Next-gen frontend tooling, lightning fast builds, hot module reload.',
  },
  {
    name: 'HTML5 & CSS3',
    category: 'Frontend',
    level: 'Hands-on',
    iconName: 'Layout',
    description: 'Semantic markup, accessibility basics, flexbox, grid, animations.',
  },

  // Category B — Backend
  {
    name: 'Node.js',
    category: 'Backend',
    level: 'Hands-on',
    iconName: 'Server',
    description: 'Asynchronous event-driven runtime for scalable server logic.',
  },
  {
    name: 'Express.js',
    category: 'Backend',
    level: 'Hands-on',
    iconName: 'Network',
    description: 'RESTful API endpoints, middleware routing, and error handling.',
  },
  {
    name: 'REST APIs',
    category: 'Backend',
    level: 'Hands-on',
    iconName: 'Repeat',
    description: 'API design, CRUD patterns, client-server communication contracts.',
  },
  {
    name: 'MVC Architecture',
    category: 'Backend',
    level: 'Working Knowledge',
    iconName: 'Boxes',
    description: 'Clean separation of models, controllers, and routing structures.',
  },
  {
    name: 'Python',
    category: 'Backend',
    level: 'Working Knowledge',
    iconName: 'Terminal',
    description: 'Scripting, data handling, and AI application prototyping.',
  },
  {
    name: 'FastAPI',
    category: 'Backend',
    level: 'Learning',
    iconName: 'Flame',
    description: 'High-performance Python microservices with type validation.',
  },

  // Category C — Programming
  {
    name: 'Java & Core Java',
    category: 'Programming',
    level: 'Hands-on',
    iconName: 'Coffee',
    description: 'Object-oriented programming, collections framework, exception handling.',
  },
  {
    name: 'Data Structures & Algorithms',
    category: 'Programming',
    level: 'Hands-on',
    iconName: 'Binary',
    description: 'Problem-solving: arrays, linked lists, trees, search & sorting.',
  },
  {
    name: 'C++',
    category: 'Programming',
    level: 'Working Knowledge',
    iconName: 'Cpu',
    description: 'Procedural and OOP fundamentals, memory concepts, competitive coding.',
  },
  {
    name: 'Object-Oriented Programming',
    category: 'Programming',
    level: 'Hands-on',
    iconName: 'ShieldCheck',
    description: 'Encapsulation, inheritance, polymorphism, abstraction patterns.',
  },

  // Category D — Databases
  {
    name: 'MongoDB & Atlas',
    category: 'Databases',
    level: 'Hands-on',
    iconName: 'Database',
    description: 'NoSQL document schemas, Mongoose modeling, cloud Atlas hosting.',
  },
  {
    name: 'MySQL & SQL',
    category: 'Databases',
    level: 'Working Knowledge',
    iconName: 'Table',
    description: 'Relational database queries, joins, constraints, relational tables.',
  },
  {
    name: 'Supabase',
    category: 'Databases',
    level: 'Learning',
    iconName: 'Sparkles',
    description: 'Postgres backend-as-a-service, authentication, and storage.',
  },

  // Category E — AI & Automation
  {
    name: 'Generative AI',
    category: 'AI & Automation',
    level: 'Working Knowledge',
    iconName: 'BrainCircuit',
    description: 'LLM prompting, temperature tuning, and generative workflows.',
  },
  {
    name: 'LangChain & RAG',
    category: 'AI & Automation',
    level: 'Hands-on',
    iconName: 'Compass',
    description: 'Retrieval-Augmented Generation, document chunking, prompt chaining.',
  },
  {
    name: 'FAISS / Chroma',
    category: 'AI & Automation',
    level: 'Working Knowledge',
    iconName: 'Layers3',
    description: 'Vector embeddings storage, similarity search for AI document Q&A.',
  },
  {
    name: 'n8n Workflow Automation',
    category: 'AI & Automation',
    level: 'Hands-on',
    iconName: 'Workflow',
    description: 'Multi-step automation flows, webhook triggers, API orchestrations.',
  },
  {
    name: 'Make (Integromat)',
    category: 'AI & Automation',
    level: 'Working Knowledge',
    iconName: 'Cable',
    description: 'Visual workflow integrations and automated notification triggers.',
  },
  {
    name: 'AI Chatbots & Agents',
    category: 'AI & Automation',
    level: 'Hands-on',
    iconName: 'Bot',
    description: 'Conversational chatflows, knowledge base retrieval, and assistant flows.',
  },

  // Category F — Tools & Practices
  {
    name: 'Git & GitHub',
    category: 'Tools & Practices',
    level: 'Hands-on',
    iconName: 'GitBranch',
    description: 'Version control, branch management, pull requests, and collaboration.',
  },
  {
    name: 'Postman',
    category: 'Tools & Practices',
    level: 'Hands-on',
    iconName: 'Send',
    description: 'API endpoint testing, request inspection, environment variables.',
  },
  {
    name: 'Cloudinary',
    category: 'Tools & Practices',
    level: 'Hands-on',
    iconName: 'CloudUpload',
    description: 'Cloud media uploads, image transformation, and asset delivery.',
  },
  {
    name: 'Webhooks & Integrations',
    category: 'Tools & Practices',
    level: 'Hands-on',
    iconName: 'Radio',
    description: 'Event-driven payload delivery and external third-party integrations.',
  },
  {
    name: 'Docker Fundamentals',
    category: 'Tools & Practices',
    level: 'Learning',
    iconName: 'Container',
    description: 'Containerization concepts, Dockerfiles, and CI/CD deployment basics.',
  },
];
