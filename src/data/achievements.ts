export interface AchievementItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  iconName: string;
  category: 'Patent' | 'Research' | 'Coding' | 'Hackathons' | 'Certifications';
  description: string;
  details?: {
    label: string;
    value: string;
  }[];
  officialLink?: string;
  linkText?: string;
}

export const achievementsData: AchievementItem[] = [
  {
    id: 'patent-lactvivechak',
    title: 'Patent: Smart Milk Quality Analysis',
    subtitle: 'LactVivechak Collaborative Project',
    badge: 'Intellectual Property',
    iconName: 'FileCheck2',
    category: 'Patent',
    description:
      'Co-inventor on patent application for automated milk quality testing and sensor analytics.',
    details: [
      { label: 'Domain', value: 'Smart Agriculture & Sensor Analytics' },
      { label: 'Status', value: 'Patent Filed' },
    ],
    officialLink: '',
    linkText: 'View Patent Filing',
  },
  {
    id: 'research-ayuverse',
    title: 'Research Paper: AyuVerse Platform',
    subtitle: 'Interactive Wellness & Web Computing',
    badge: 'Research Publication',
    iconName: 'BookOpenCheck',
    category: 'Research',
    description:
      'Author of published paper documenting 3D web systems and interactive digital wellness.',
    details: [
      { label: 'Subject', value: 'Interactive Web Systems & 3D Assets' },
      { label: 'Status', value: 'Published & Documented' },
    ],
    officialLink: '',
    linkText: 'Read Publication',
  },
  {
    id: 'leetcode-100',
    title: '100+ LeetCode Problems Solved',
    subtitle: 'Algorithmic Problem Solving & Data Structures',
    badge: 'Competitive Programming',
    iconName: 'Code2',
    category: 'Coding',
    description:
      'Solved 100+ algorithmic problems in Java & C++ covering trees, hash maps, and two-pointers.',
    details: [
      { label: 'Languages', value: 'Java & C++' },
      { label: 'Focus', value: 'DSA, Optimization, OOP Principles' },
    ],
    officialLink: 'https://leetcode.com/u/deoremanasi/',
    linkText: 'Visit LeetCode Profile',
  },
  {
    id: 'hackathons-20',
    title: '20+ Hackathons & Tech Challenges',
    subtitle: 'Rapid Prototyping & Team Collaboration',
    badge: 'Innovation & Teamwork',
    iconName: 'Trophy',
    category: 'Hackathons',
    description:
      'Competed in 20+ national hackathons, building rapid prototypes across web and AI domains.',
    details: [
      { label: 'Events', value: '20+ Hackathons' },
      { label: 'Key Domains', value: 'Full Stack, AI Integrations, AgTech' },
    ],
  },
  {
    id: 'internships-certifications',
    title: 'Industry Internships & Recognized Training',
    subtitle: 'AutoAppy, Nexmize, Scalefull & AICTE',
    badge: 'Practical Experience',
    iconName: 'Award',
    category: 'Certifications',
    description:
      'Completed multiple industry internships spanning AI automation, DevOps, and full-stack web.',
    details: [
      { label: 'Specialization', value: 'AI Automations & Full Stack' },
      { label: 'Programs', value: 'AutoAppy, Nexmize, Scalefull, AICTE' },
    ],
  },
];
