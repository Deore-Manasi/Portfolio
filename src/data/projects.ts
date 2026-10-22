export type ProjectFilterCategory = 'All' | 'Full Stack' | 'Frontend' | 'AI/GenAI' | 'Other';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  filterCategory: ProjectFilterCategory;
  description: string;
  problemStatement: string;
  myContribution: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  isFeatured?: boolean;
  featuredDetails?: {
    overview: string;
    challenge: string;
    approach: string;
    architectureNotes: string[];
    outcomes: string[];
  };
  metrics?: string[];
  patentNote?: string;
}

export const projectCategories: ProjectFilterCategory[] = [
  'All',
  'Full Stack',
  'Frontend',
  'AI/GenAI',
  'Other',
];

export const projectsData: ProjectItem[] = [
  {
    id: 'ayuverse',
    title: 'AyuVerse',
    subtitle: 'Wellness Platform with 3D Assets & Speech Synthesis',
    category: 'Full-Stack MERN Application',
    filterCategory: 'Full Stack',
    isFeatured: true,
    description:
      'A wellness-focused web application inspired by Ayurveda, bringing together interactive wellness experiences, personalized content, and modern web technologies.',
    problemStatement:
      'Holistic health and Ayurvedic knowledge often feel inaccessible, static, and fragmented for young adults seeking engaging, interactive daily wellness guidance.',
    myContribution:
      'Engineered full-stack features using React and Node.js/Express APIs, structured MongoDB collections for user profiles and wellness logs, integrated interactive 3D GLB assets, and implemented browser speech synthesis for guided audio walkthroughs.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', '3D GLB Assets', 'Web Speech API', 'REST APIs', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Deore-Manasi/AyuVerse',
    liveUrl: '', // Configurable: provided when live URL is verified
    featuredDetails: {
      overview:
        'AyuVerse bridges traditional Ayurvedic lifestyle practices with cutting-edge web technologies, featuring interactive wellness questionnaires, personalized routine trackers, and immersive 3D visual representations.',
      challenge:
        'Designing a fluid interface that balances real-time 3D asset rendering, audio speech synthesis events, and asynchronous REST communication without bogging down mobile performance.',
      approach:
        'Decoupled 3D model asset loading with progressive loading states, modularized Express API controllers with structured Mongoose schemas, and wrapped browser speech synthesis in custom React state hooks for predictable playback.',
      architectureNotes: [
        'Component-driven UI with responsive state persistence across sessions.',
        'RESTful API routing connecting client views with MongoDB Atlas collections.',
        'Optimized GLB 3D asset rendering with fallback imagery for reduced-motion users.',
        'Web Speech API integration providing natural audio guidance during meditation and wellness checks.',
      ],
      outcomes: [
        'Formed the foundation for a published research paper on interactive wellness systems.',
        'Delivered an immersive, tactile digital experience combining audio, 3D graphics, and responsive full-stack services.',
      ],
    },
  },
  {
    id: 'lactvivechak',
    title: 'LactVivechak',
    subtitle: 'Smart Agriculture & Milk Quality Testing Interface',
    category: 'Smart Agriculture / Hardware + Software',
    filterCategory: 'Full Stack',
    isFeatured: false,
    description:
      'A collaborative milk-testing project that combines software interfaces and hardware-based data collection to support milk quality analysis.',
    problemStatement:
      'Traditional laboratory milk testing in rural dairy collection centers is slow and cumbersome. Farmers require rapid, accessible digital feedback to verify quality parameters transparently.',
    myContribution:
      'Contributed to project planning and system design, and worked on the MERN-based frontend for displaying hardware test data and results. (Hardware sensors, Raspberry Pi orchestration, and OpenCV/Random Forest ML models were developed in collaboration with team members).',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MERN Stack', 'Raspberry Pi Context', 'Data Visualization', 'REST APIs'],
    patentNote: 'Co-inventor / team patent application filed for integrated milk quality analysis mechanism.',
    githubUrl: '', // Verified: Collaborative academic project, code available on verified request
    liveUrl: '',
  },
  {
    id: 'legalease',
    title: 'LegalEase',
    subtitle: 'AI-Assisted Legal Document Exploration & RAG',
    category: 'AI-Powered Application',
    filterCategory: 'AI/GenAI',
    isFeatured: false,
    description:
      'An AI-assisted legal document exploration project designed to help users interact with document content through retrieval-based question answering.',
    problemStatement:
      'Legal contracts and policy documents contain dense clauses, ambiguous legal jargon, and extensive page counts, creating high cognitive load for readers trying to locate relevant clauses.',
    myContribution:
      'Built the interactive frontend in React and TypeScript, connected to FastAPI backend services, integrated PDF text chunking, and utilized vector search via FAISS / Chroma for contextual retrieval-augmented answers.',
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'Supabase', 'PDF Processing', 'RAG', 'FAISS / Chroma'],
    githubUrl: 'https://github.com/Deore-Manasi/Chat_model',
    liveUrl: '',
  },
  {
    id: 'hotel-rating-app',
    title: 'Airbnb / Hotel Rating Platform',
    subtitle: 'Full-Stack Property Listings & Review System',
    category: 'Full-Stack Web Application',
    filterCategory: 'Full Stack',
    isFeatured: false,
    description:
      'A property and hotel-rating web application built to explore listings, manage user interactions, and organize property-related data.',
    problemStatement:
      'Dynamic lodging directories need robust MVC structures to manage high-resolution photo uploads, user review threads, and property queries reliably.',
    myContribution:
      'Designed the MVC backend architecture using Express and Node.js, established MongoDB Atlas data models, configured Cloudinary media pipelines for image uploads, and implemented property review endpoints with authentication routing.',
    technologies: ['Node.js', 'Express.js', 'MongoDB Atlas', 'MVC Architecture', 'Cloudinary', 'REST Routing', 'EJS/React'],
    githubUrl: 'https://github.com/Deore-Manasi/Airbnb',
    liveUrl: '',
  },
  {
    id: 'college-navigation',
    title: 'College Navigation System',
    subtitle: 'Campus Directory & Navigation Web Portal',
    category: 'Web Application',
    filterCategory: 'Other',
    isFeatured: false,
    description:
      'A college navigation project designed to help users access useful campus information through a structured web interface.',
    problemStatement:
      'Navigating expansive campus blocks, departments, faculty offices, and academic labs is challenging for first-year students and external visitors.',
    myContribution:
      'Developed responsive directory views, query filters, and relational database tables using PHP and MySQL, providing structured campus mapping and searchable department information.',
    technologies: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
    githubUrl: 'https://github.com/Deore-Manasi/COLLEGE-NAVIGATION-SYSTEM',
    liveUrl: '',
  },
  {
    id: 'portfolio-website',
    title: 'Interactive 3D Portfolio',
    subtitle: 'Component-Driven Digital Experience & 3D Visualizer',
    category: 'Frontend Engineering',
    filterCategory: 'Frontend',
    isFeatured: false,
    description:
      'A responsive personal portfolio built to demonstrate component-driven development, modern UI design, animation, and frontend engineering.',
    problemStatement:
      'Standard template portfolios fail to communicate genuine technical craft, interactive design thinking, and attention to detail required by high-growth engineering teams.',
    myContribution:
      'Designed and developed the complete application using React 18, TypeScript, Tailwind CSS, Three.js / React Three Fiber interactive orbital core, Framer Motion transitions, and fully responsive layouts.',
    technologies: ['React.js', 'TypeScript', 'Three.js', 'React Three Fiber', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    githubUrl: 'https://github.com/Deore-Manasi/My_Portfolio',
    liveUrl: '',
  },
];
