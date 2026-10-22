# Manasi Deore — Premium Interactive 3D Developer Portfolio

A production-grade, highly interactive personal portfolio website for **Manasi Deore**, Software Developer and AI Automation enthusiast. Built with React 18, TypeScript, Tailwind CSS, Three.js, React Three Fiber, Drei, and Framer Motion.

---

## 🚀 Live Tech Stack

- **Framework**: React 18 with Vite
- **Language**: TypeScript (strict type safety)
- **Styling**: Tailwind CSS with custom design system tokens
- **3D Graphics**: Three.js, `@react-three/fiber`, and `@react-three/drei`
- **Animations**: Framer Motion (page transitions, layout animations, modals, scroll reveals)
- **Icons**: Lucide React
- **Hosting Compatibility**: Frontend-only, static hosting ready (Vercel, Netlify, GitHub Pages)

---

## 🎨 Visual Identity & Design System

- **Primary Background**: `#09090F` (Obsidian space)
- **Secondary Background**: `#101019`
- **Card Background**: `#141420`
- **Primary Accent**: `#8B5CF6` (Violet)
- **Bright Accent**: `#A78BFA`
- **Neon Highlight**: `#C4B5FD`
- **Text Primary**: `#F8FAFC`
- **Text Secondary**: `#A1A1B5`
- **Borders**: `rgba(167, 139, 250, 0.18)`
- **Typography**: Space Grotesk, Inter, JetBrains Mono

---

## 📂 Project Structure

```
d:/Myportfolio/
├── public/
│   ├── favicon.svg             # Custom MD monogram SVG favicon
│   └── resume.pdf              # Real standard-compliant PDF resume
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── SectionHeading.tsx  # Reusable section header with gradient accents
│   │   ├── Navbar.tsx          # Sticky glassmorphic navbar with active indicator & mobile drawer
│   │   ├── Hero.tsx            # Striking hero with 3 CTAs & tech toolkit pills
│   │   ├── Floating3DScene.tsx # Interactive Three.js energetic core, orbital rings & sparkfield
│   │   ├── About.tsx           # Developer story, 3 highlight cards & interactive terminal
│   │   ├── Skills.tsx          # Technical toolkit with category filters & bento grid
│   │   ├── Experience.tsx      # Polished vertical timeline with verified roles & internships
│   │   ├── Projects.tsx        # Project gallery with animated filter categories
│   │   ├── ProjectCard.tsx     # Card with desktop 3D tilt, problem, contribution & links
│   │   ├── ProjectModal.tsx    # Accessible modal with architecture breakdown & details
│   │   ├── FeaturedProject.tsx # Editorial deep-dive case study on AyuVerse
│   │   ├── Achievements.tsx    # Milestones: patent, published paper, 100+ LeetCode, hackathons
│   │   ├── Education.tsx       # B.E. Computer Engineering (SNJB) & HSC details
│   │   ├── CodingProfiles.tsx  # LeetCode profile showcase & interactive code editor
│   │   ├── Contact.tsx         # Direct contact channels, copy-email & client-side mailto form
│   │   ├── Footer.tsx          # Minimalist footer with dynamic year & back-to-top button
│   │   ├── ResumeModal.tsx     # Resume download modal with fallback handling
│   │   └── AmbientBackground.tsx # Cursor spotlight glow with touch/reduced-motion fallback
│   ├── data/
│   │   ├── profile.ts          # Central personal bio, contact info & links
│   │   ├── skills.ts           # Categorized skills with truthful exposure levels
│   │   ├── experience.ts       # Internships (Nexmize, Scalefull, AICTE, AutoAppy)
│   │   ├── projects.ts         # 6 authentic projects with engineering contributions
│   │   ├── achievements.ts     # Patent, research publication & milestones
│   │   └── education.ts        # Degree, institutions, scores
│   ├── hooks/
│   │   ├── useActiveSection.ts # Section tracking on scroll
│   │   ├── useReducedMotion.ts # prefers-reduced-motion accessibility detection
│   │   └── useMousePosition.ts # Desktop cursor tracking for ambient lighting
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🛠️ Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Build for production
```bash
npm run build
```
Creates an optimized static build in `dist/` ready for immediate deployment.

---

## ⚙️ Customization Guide: Details to Replace

All personal content is centralized in `src/data/` so you do **not** need to touch presentation components:

1. **Email Address**:
   - Location: `src/data/profile.ts` (`socials.email`)
   - Current: `"manasideore202@gmail.com"`
   - Replace with: Your verified personal or professional email address.

2. **LinkedIn URL**:
   - Location: `src/data/profile.ts` (`socials.linkedin`)
   - Current: `"https://linkedin.com/in/manasi-deore"`
   - Replace with: Your exact LinkedIn profile URL.

3. **GitHub URL**:
   - Location: `src/data/profile.ts` (`socials.github`)
   - Current: `"https://github.com/manasideore"`
   - Replace with: Your exact GitHub profile URL.

4. **LeetCode Profile URL**:
   - Location: `src/data/profile.ts` (`socials.leetcode`)
   - Current: `"https://leetcode.com/manasideore"`
   - Replace with: Your active LeetCode username / URL.

5. **Projects GitHub & Live URLs**:
   - Location: `src/data/projects.ts`
   - Update `githubUrl` and `liveUrl` for each project (AyuVerse, LactVivechak, LegalEase, etc.) as your public links go live.
   - If a project does not have a live URL, leave `liveUrl: ''` and the UI will automatically display a clean non-clickable indicator ("Internal / Academic").

6. **Patent & Research Links**:
   - Location: `src/data/achievements.ts`
   - Update `officialLink` with your patent publication link or DOI paper link when published.

7. **Resume PDF File**:
   - Location: `public/resume.pdf`
   - Replace this file with your customized official resume PDF whenever you want to update it.

---

## 🚢 Deployment

### Vercel
1. Push this repository to GitHub.
2. Import project in Vercel.
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Deploy!

### Netlify
1. Connect repository in Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy!

### GitHub Pages
1. In `vite.config.ts`, set `base: '/<repository-name>/'`.
2. Build with `npm run build` and deploy the `dist` folder via GitHub Actions or `gh-pages`.
