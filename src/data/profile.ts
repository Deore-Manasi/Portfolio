export interface ProfileData {
  name: string;
  shortName: string;
  role: string;
  eyebrow: string;
  heroHeading: {
    prefix: string;
    highlight: string;
    suffix: string;
  };
  heroDescription: string;
  aboutIntro: string;
  aboutJourney: string[];
  terminal: {
    whoami: string;
    focus: string;
    philosophy: string;
  };
  highlightCards: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  contactText: string;
  socials: {
    email: string;
    github: string;
    linkedin: string;
    leetcode: string;
  };
  resumeUrl: string;
  availability: string;
  location: string;
  techPills: string[];
}

export const profileData: ProfileData = {
  name: "Manasi Deore",
  shortName: "MD.",
  role: "Software Developer · Full Stack · AI Automation",
  eyebrow: "SOFTWARE DEVELOPER · FULL STACK · AI AUTOMATION",
  heroHeading: {
    prefix: "Crafting Fast Web Apps & ",
    highlight: "AI Automations.",
    suffix: "",
  },
  heroDescription:
    "Hi, I'm Manasi Deore — a software developer building modern web platforms, robust APIs, and intelligent automation workflows.",
  aboutIntro:
    "Computer Engineering graduate specializing in full-stack web development, Java software engineering, and AI workflow automations.",
  aboutJourney: [
    "Core Full-Stack: Building responsive, component-driven web platforms with React, Node.js, and clean REST APIs.",
    "AI & Automation: Constructing RAG pipelines, LLM-powered chatflows, and multi-node workflow automations with n8n.",
    "Engineering Rigor: Practicing algorithmic problem solving with 100+ LeetCode challenges, patent research, and academic publications.",
  ],
  terminal: {
    whoami: "Software Developer",
    focus: "Full Stack | Java | AI Automation",
    philosophy: "Build. Learn. Improve.",
  },
  highlightCards: [
    {
      title: "Full-Stack Web Apps",
      description:
        "Building responsive React frontends backed by Node.js, Express, and MongoDB REST APIs.",
      icon: "Layers",
    },
    {
      title: "AI & Workflow Automation",
      description:
        "Implementing RAG pipelines, n8n automations, LangChain integrations, and intelligent agents.",
      icon: "Cpu",
    },
    {
      title: "Algorithms & Problem Solving",
      description:
        "Strengthening DSA fundamentals with 100+ LeetCode problems in Java and C++.",
      icon: "TerminalSquare",
    },
  ],
  contactText:
    "Interested in full-stack roles, software engineering opportunities, or AI automation projects? Let's connect.",
  socials: {
    email: "manasideore202@gmail.com",
    github: "https://github.com/Deore-Manasi",
    linkedin: "https://www.linkedin.com/in/manasi-deore-1a5398313/",
    leetcode: "https://leetcode.com/u/deoremanasi/",
  },
  resumeUrl: "/resume.pdf",
  availability: "Open to Opportunities",
  location: "Pune / Maharashtra, India",
  techPills: ["React.js", "Java", "Node.js", "MongoDB", "REST APIs", "GenAI"],
};
