const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Generate valid standard PDF
function createPDF() {
  const lines = [
    'MANASI DEORE - SOFTWARE DEVELOPER',
    'Email: manasideore202@gmail.com | LinkedIn: linkedin.com/in/manasi-deore-1a5398313 | GitHub: github.com/Deore-Manasi',
    'Location: Pune, Maharashtra, India | Open to Software Development & AI Automation Roles',
    '',
    'PROFESSIONAL SUMMARY',
    'Software developer with experience in full-stack web engineering, Java development, and AI automations.',
    'Experienced in building responsive React applications, designing RESTful APIs, and implementing RAG pipelines.',
    '',
    'TECHNICAL SKILLS',
    'Frontend: React.js, JavaScript, Tailwind CSS, Vite, HTML5, CSS3',
    'Backend: Node.js, Express.js, REST APIs, MVC Architecture, Python, FastAPI',
    'Programming: Java, Core Java, Object-Oriented Programming, C++, Data Structures & Algorithms',
    'Databases: MongoDB, MongoDB Atlas, MySQL, SQL, Supabase',
    'AI & Automation: LangChain, Retrieval-Augmented Generation (RAG), FAISS / Chroma, n8n, Make, Webhooks',
    'Tools: Git, GitHub, Postman, Cloudinary, Docker fundamentals',
    '',
    'PROFESSIONAL EXPERIENCE & INTERNSHIPS',
    '1. Nexmize - AI Developer Intern (Jan 2025 - Mar 2025)',
    '   - Built automated workflows using n8n and webhook orchestrations.',
    '   - Implemented conversational chatbots with RAG pipelines and prompt engineering.',
    '2. Scalefull - DevOps Intern (Jan 2025 - Feb 2025)',
    '   - Gained foundational exposure to CI/CD pipelines and software delivery workflows.',
    '3. AICTE Web Full Stack Internship (Oct 2024 - Dec 2024)',
    '   - Developed hotel rating web application with React, Express, and MongoDB.',
    '4. AutoAppy, Pune - Software Development / Automation Intern (Past Role)',
    '   - Worked on frontend UI components, REST API integrations, and business automation workflows.',
    '',
    'PROJECTS & INTELLECTUAL PROPERTY',
    'AyuVerse: Full-stack MERN wellness platform with interactive 3D assets and browser speech synthesis.',
    'LactVivechak: Milk testing software/hardware project; co-patent application filed for quality analysis.',
    'LegalEase: AI-assisted legal document exploration system with FastAPI, Supabase, and RAG.',
    '',
    'EDUCATION',
    'Bachelor of Engineering in Computer Engineering (2022 - 2026) | CGPA: 8.52 / 10.0',
    "SNJB's Late Sau. Kantabai Bhavarlalji Jain College of Engineering, Chandwad",
    'Higher Secondary Certificate (HSC) - Science | 72.33%',
    '',
    'ACHIEVEMENTS',
    '- 100+ LeetCode algorithmic challenges solved in Java and C++',
    '- 20+ Hackathons and collegiate tech competitions participated',
    '- Published research paper associated with AyuVerse interactive wellness system'
  ];

  let stream = 'BT\n/F1 10 Tf\n50 740 Td\n14 TL\n';
  lines.forEach((line) => {
    // Escape parentheses
    const escaped = line.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
    if (line.startsWith('MANASI DEORE')) {
      stream += `/F1 16 Tf (${escaped}) Tj /F1 10 Tf T*\n`;
    } else if (line === 'PROFESSIONAL SUMMARY' || line === 'TECHNICAL SKILLS' || line === 'PROFESSIONAL EXPERIENCE & INTERNSHIPS' || line === 'PROJECTS & INTELLECTUAL PROPERTY' || line === 'EDUCATION' || line === 'ACHIEVEMENTS') {
      stream += `/F1 12 Tf T* (${escaped}) Tj /F1 10 Tf T*\n`;
    } else {
      stream += `(${escaped}) Tj T*\n`;
    }
  });
  stream += 'ET\n';

  const streamLen = Buffer.byteLength(stream);

  const obj1 = '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n';
  const obj2 = '2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n';
  const obj3 = '3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\nendobj\n';
  const obj4 = `4 0 obj\n<< /Length ${streamLen} >>\nstream\n${stream}endstream\nendobj\n`;
  const obj5 = '5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n';

  let offset = 9; // "%PDF-1.4\n".length
  const o1 = offset;
  offset += Buffer.byteLength(obj1);
  const o2 = offset;
  offset += Buffer.byteLength(obj2);
  const o3 = offset;
  offset += Buffer.byteLength(obj3);
  const o4 = offset;
  offset += Buffer.byteLength(obj4);
  const o5 = offset;
  offset += Buffer.byteLength(obj5);

  const xrefOffset = offset;
  const pad = (n) => String(n).padStart(10, '0');

  const xref = `xref\n0 6\n0000000000 65535 f \n${pad(o1)} 00000 n \n${pad(o2)} 00000 n \n${pad(o3)} 00000 n \n${pad(o4)} 00000 n \n${pad(o5)} 00000 n \n`;
  const trailer = `trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

  const pdf = `%PDF-1.4\n${obj1}${obj2}${obj3}${obj4}${obj5}${xref}${trailer}`;
  fs.writeFileSync(path.join(publicDir, 'resume.pdf'), pdf);
  console.log('Successfully wrote public/resume.pdf');
}

createPDF();
