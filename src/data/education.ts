export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  score: string;
  scoreLabel: string;
  isCurrentOrRecent?: boolean;
  highlights: string[];
}

export const educationData: EducationItem[] = [
  {
    id: "be-computer",
    degree: "Bachelor of Engineering in Computer Engineering",
    institution:
      "SNJB's Late Sau. Kantabai Bhavarlalji Jain College of Engineering, Chandwad",
    location: "Chandwad, Nashik, Maharashtra",
    duration: "2022 – 2026",
    score: "8.72 / 10.0",
    scoreLabel: "CGPA",
    isCurrentOrRecent: true,
    highlights: [
      "Coursework: DSA, Java OOP, DBMS, Computer Networks, and Operating Systems.",
      "Active participant in 20+ hackathons, technical symposiums, and project showcases.",
    ],
  },
  {
    id: "hsc-science",
    degree: "Higher Secondary Certificate (HSC) — Science",
    institution:
      "Junior College / State Board of Secondary and Higher Secondary Education",
    location: "Maharashtra, India",
    duration: "Completed",
    score: "72.33%",
    scoreLabel: "Percentage",
    isCurrentOrRecent: false,
    highlights: [
      "Core subjects: Physics, Chemistry, Mathematics, and Computer Science.",
    ],
  },
];
