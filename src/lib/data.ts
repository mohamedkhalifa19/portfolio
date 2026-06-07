// ─── Types ───────────────────────────────────────────────────────────────────

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  role: "Frontend" | "Backend" | "Full Stack";
  techs: string[];
  githubUrl: string;
  liveUrl?: string;
  gradient: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  level: number; // 0–100
  icon?: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  color: string;
  skills: Skill[];
}

export interface TimelineEntry {
  id: string;
  year: string;
  title: string;
  institution: string;
  description: string;
  type: "education" | "experience" | "achievement";
  badge?: string;
}

// ─── Content ─────────────────────────────────────────────────────────────────

export const OWNER = {
  name: "Mohamed Ahmed Khalifa",
  firstName: "Mohamed",
  role: "React Front-End Developer",
  tagline: "Building responsive, high-performance web interfaces.",
  location: "Badr City, Beheira, Egypt",
  email: "muhamed.ahmed.khalifa@gmail.com",
  github: "https://github.com/mohamedkhalifa19",
  linkedin: "https://www.linkedin.com/in/mohamed-ahmed-khalifa-5b833024a/",
  available: true,
};

export const PROJECTS: Project[] = [
  {
    id: "sumcap",
    title: "SumCap",
    subtitle: "Graduation Project",
    description:
      "An AI-powered lecture summarization platform. I served as Backend Developer, building a robust Node.js/Express API that handles audio ingestion, processing pipelines, and delivers structured summaries to the React front-end.",
    role: "Backend",
    techs: ["Node.js", "Express.js", "REST API", "JavaScript", "MongoDB"],
    githubUrl: "https://github.com/mohamedkhalifa19/FinalProject",
    gradient: "from-violet-600/20 via-purple-500/10 to-transparent",
    featured: true,
  },
  {
    id: "ecommerce",
    title: "E-Commerce App",
    subtitle: "Full Shopping Experience",
    description:
      "A fully-featured e-commerce SPA with cart management, product filtering, and user authentication. Built using React Hooks and Context API for global state, with React Router for client-side navigation.",
    role: "Frontend",
    techs: ["React.js", "Context API", "React Router", "Hooks", "CSS3"],
    githubUrl: "https://github.com/mohamedkhalifa19/ecommerece",
    gradient: "from-sky-600/20 via-cyan-500/10 to-transparent",
    featured: true,
  },
  {
    id: "nassar-perfumes-store",
    title: "Nassar Perfumes Store",
    subtitle: "E-Commerce Perfume Store",
    description:
      "Developed a modern and fully responsive e-commerce platform for Nassar Perfumes, featuring product browsing, category filtering, detailed product pages, and an optimized shopping experience across all devices.",
    techs: ["Next.js", "Tailwind CSS", "shadcn/ui"],
    githubUrl: "https://github.com/mohamedkhalifa19/NASSAR-Fragrances",
    gradient: "from-amber-600/20 via-orange-500/10 to-transparent",
    role: "Frontend",
  },
];

export const SKILLS: SkillCategory[] = [
  {
    id: "frontend",
    label: "Front-End",
    color: "text-sky-400",
    skills: [
      { name: "React.js", level: 90 },
      { name: "JavaScript (ES6+)", level: 88 },
      { name: "TypeScript", level: 72 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 92 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Bootstrap", level: 80 },
    ],
  },
  {
    id: "backend",
    label: "Back-End",
    color: "text-violet-400",
    skills: [
      { name: "Node.js", level: 70 },
      { name: "Express.js", level: 68 },
      { name: "Strapi CMS", level: 60 },
      { name: "REST APIs", level: 82 },
    ],
  },
  {
    id: "tools",
    label: "Tools & More",
    color: "text-emerald-400",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "Next.js", level: 65 },
      { name: "Figma", level: 60 },
      { name: "Responsive Design", level: 92 },
    ],
  },
];

export const TIMELINE: TimelineEntry[] = [
  {
    id: "degree",
    year: "2020 – 2024",
    title: "B.Sc. Computer Science",
    institution: "Sadat City University",
    description:
      "Graduated with a grade of Very Good (B+). Final-year capstone project: SumCap — an AI lecture summarization system built with a Node.js backend and React front-end.",
    type: "education",
    badge: "Very Good / B+",
  },
  {
    id: "frontend-focus",
    year: "2022 – 2023",
    title: "Front-End Specialization",
    institution: "Self-Directed Learning",
    description:
      "Deep-dived into the React ecosystem: hooks, Context API, React Router, and component architecture. Built the E-Commerce and Real Estate projects as portfolio anchors.",
    type: "experience",
  },
  {
    id: "backend-capstone",
    year: "2024",
    title: "Backend Development — SumCap",
    institution: "Graduation Project",
    description:
      "Architected and implemented the Express.js API for SumCap, integrating audio processing pipelines and delivering a structured REST API consumed by the React front-end.",
    type: "achievement",
    badge: "Graduation Project",
  },
];
