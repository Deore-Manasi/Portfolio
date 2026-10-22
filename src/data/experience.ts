export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: 'Current Role' | 'Internship' | 'Training / Internship' | 'Past Experience';
  description: string;
  highlights: string[];
  technologies: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: 'autoappy',
    company: 'AutoAppy',
    role: 'Software Developer / Automation Trainee',
    period: '2026 – Present',
    location: 'Pune, India',
    type: 'Current Role',
    description:
      'Building API-driven business automations, WhatsApp Cloud & Instagram API workflows, and custom mini-apps.',
    highlights: [
      'Integrated Meta WhatsApp Cloud API & Instagram APIs for automated customer messaging and social media workflows.',
      'Engineered custom client mini-apps (CRMs, fintech wallet, appointment booking) with CRUD REST APIs and webhooks.',
    ],
    technologies: ['WhatsApp Cloud API', 'Meta Graph API', 'REST APIs', 'Webhooks', 'React.js', 'Node.js'],
  },
  {
    id: 'nexmize',
    company: 'Nexmize',
    role: 'AI Developer Intern',
    period: 'Jan 2025 – Mar 2025',
    location: 'Nashik, India',
    type: 'Internship',
    description:
      'Engineered AI chatbots and automation workflows using RAG pipelines, n8n, and Make.com.',
    highlights: [
      'Built automated multi-node workflows using n8n, Make.com, and event-driven webhook listeners.',
      'Deployed conversational RAG chatbots with custom document retrieval and prompt tuning.',
    ],
    technologies: ['n8n', 'RAG Pipelines', 'Make.com', 'LangChain', 'AI Chatbots'],
  },
  {
    id: 'scalefull',
    company: 'Scalefull',
    role: 'DevOps Intern',
    period: 'Jan 2025 – Feb 2025',
    location: 'Remote',
    type: 'Internship',
    description:
      'Practical training in Linux environments, CI/CD pipelines, and modern containerization.',
    highlights: [
      'Configured automated CI/CD deployment pipelines and Git version control workflows.',
      'Explored Docker containerization fundamentals and Linux server management.',
    ],
    technologies: ['Docker', 'CI/CD', 'Linux', 'Git', 'DevOps'],
  },
  {
    id: 'aicte',
    company: 'AICTE Full Stack Internship',
    role: 'Full Stack Web Developer Intern',
    period: 'Oct 2024 – Dec 2024',
    location: 'Remote / Pune',
    type: 'Training / Internship',
    description:
      'Built a full-stack hotel rating and property booking web application with the MERN stack.',
    highlights: [
      'Developed responsive React interfaces backed by Express.js REST APIs and MVC architecture.',
      'Designed MongoDB schemas with indexing for user reviews and property listings.',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
  },
];
