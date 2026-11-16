// Edit all portfolio content here.
export const profile = {
  name: "Alfiya K",
  role: "Full-Stack Developer",
  location: "Ajman, UAE",
  headline: "I build the interfaces SaaS teams scale on.",
  intro:
    "Five years turning complex business logic into fast, intuitive web apps with React, Angular, Next.js and TypeScript — from no-code form engines and workflow builders to real-time dashboards for clients in the US and UAE.",
  availability: "Immediate joiner · UAE spouse visa (transferable) · Open to relocation",
  email: "alfiyakabir57@gmail.com",
  phone: "+971 50 475 0014",
  github: "https://github.com/alfiya-kabir/",
  linkedin: "https://www.linkedin.com/in/alfiya-k-2709891a3/",
  resume: "#", // TODO: replace with a link to your CV PDF
};

export const stats = [
  { value: "5+", label: "Years building for the web" },
  { value: "6+", label: "SaaS & enterprise products shipped" },
  { value: "US · UAE", label: "Clients collaborated with" },
];

export const heroStack = ["React", "Angular", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Redux / NgRx", "MongoDB", "Cypress", "LLM APIs"];

export const about = [
  "I'm a frontend-focused full-stack developer who loves the hard parts of UI: dynamic forms, drag-and-drop builders, role-based access and data-heavy dashboards that still feel effortless to use.",
  "I've led frontend delivery end-to-end — talking to clients, aligning with backend and QA, architecting state, and mentoring juniors — while keeping code clean, tested and maintainable. Lately I've been weaving LLMs into products to automate the boring parts.",
];

export const experience = [
  {
    role: "Software Developer",
    company: "Seqato Software Solutions",
    period: "May 2023 – May 2026",
    place: "Trivandrum, India",
    points: [
      "I led frontend development across multiple SaaS and enterprise products in React, Angular and TypeScript — dynamic forms, dashboards, workflow automation and scalable state management.",
      "I owned client communication with US and UAE stakeholders, turning requirements into sprint-ready features and on-time releases.",
      "I built and maintained E2E and unit test suites with Cypress, Cucumber, Jest and Karma to keep releases confident.",
      "I integrated LLM APIs into internal tools for document summarization and audio-to-notes conversion.",
      "I mentored junior developers through pair programming and code reviews.",
    ],
  },
  {
    role: "Software Developer L1",
    company: "Accubits Technologies",
    period: "Aug 2021 – Apr 2023",
    place: "Trivandrum, India",
    points: [
      "I delivered features across several React and Angular products with pixel-perfect, responsive, cross-browser UIs.",
      "I integrated REST APIs and Redux state for fintech and e-commerce flows, including real-time chat and community features.",
    ],
  },
];

export type Project = { title: string; tag: string; summary: string; stack: string[]; points: string[]; link?: string };

export const projects: Project[] = [
  {
    title: "Lead Management Platform",
    tag: "Multi-tenant SaaS · Frontend Lead",
    summary: "A domain-independent CRM where every field, form and workflow is driven by configuration — not code.",
    stack: ["React", "TypeScript", "Tailwind", "xyFlow", "dnd-kit", "Recharts", "Radix UI", "i18next"],
    points: [
      "Led the frontend from an AI-generated prototype to a production platform, coordinating client, backend and QA teams.",
      "Built a no-code form engine and external form builder — drag fields, configure properties, publish and capture leads from any website.",
      "Created a drag-and-drop workflow builder with triggers, conditions and actions on xyFlow.",
      "Shipped Kanban lead pipelines, dynamic field templates, analytics dashboards and full LTR/RTL support.",
    ],
  },
  {
    title: "OMai — Renewable Energy",
    tag: "Biogas plant monitoring · US client",
    summary: "Multi-site monitoring for biogas plants with live data, charts and interactive P&ID diagrams.",
    stack: ["Angular 17", "React", "NgRx", "D3.js", "Material UI"],
    points: [
      "Architected the frontend and complex NgRx state for multi-site management.",
      "Built site-specific dashboards with live and historical D3.js / chart visualizations.",
      "Developed interactive P&ID piping diagrams with drag-and-drop labels.",
    ],
  },
  {
    title: "LegalZoom",
    tag: "Company formation platform · US",
    summary: "A live service automating LLC and corporation filings across every US state.",
    stack: ["Angular", "React", "Cypress", "Cucumber", "Jasmine", "Docker"],
    points: [
      "Added features and state-specific business logic to multi-step form workflows in a large Dockerized monorepo.",
      "Wrote E2E tests and owned stories from development through Forge deployment and Datadog verification.",
    ],
    link: "https://www.legalzoom.com/country/ae",
  },
  {
    title: "BAXE",
    tag: "Fintech & e-commerce",
    summary: "A finance and commerce platform with real-time chat, community and rich dashboards.",
    stack: ["React", "Redux", "Ant Design", "getStream"],
    points: [
      "Built responsive UI modules, API integrations and Redux state across dashboard, chat and community features.",
    ],
    link: "https://www.linkedin.com/company/baxe/",
  },
  {
    title: "Internal AI Tools",
    tag: "LLM experiments",
    summary: "PDF & news summarizers, audio-to-notes and a local-model chat assistant.",
    stack: ["Python", "Streamlit", "FastAPI", "Hugging Face", "Whisper", "SQLite"],
    points: [
      "Built summarizers using BART with text chunking, and an RSS news tracker.",
      "Turned Whisper transcriptions into structured notes; built a FastAPI chat assistant on Mistral / TinyLlama.",
    ],
    link: "https://github.com/alfiya-kabir/LLM-Projects",
  },
];

export const skills: Record<string, string[]> = {
  Frontend: ["React", "Angular 17+", "Next.js", "TypeScript", "JavaScript ES6+", "Redux Toolkit", "NgRx", "Zustand", "React Query", "Tailwind CSS", "Material UI", "Ant Design", "shadcn / Radix", "React Hook Form", "SCSS"],
  Backend: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs", "JWT Auth", "MVC", "Python (basic)", "SQL / SQLite"],
  "Visualization & UI": ["D3.js", "Recharts", "xyFlow", "dnd-kit", "i18n (LTR/RTL)", "Micro Frontends"],
  Testing: ["Cypress", "Cucumber", "Jest", "React Testing Library", "Jasmine", "Karma"],
  "AI & Tools": ["LLM APIs", "LangChain", "Ollama", "Hugging Face", "Claude Code", "Cursor", "Git", "Docker", "Vite", "Webpack", "Figma", "JIRA", "Datadog", "Vercel"],
};

export const education = {
  degree: "B.Tech (Hons), Electrical & Electronics Engineering",
  school: "TKM College of Engineering, KTU",
  period: "2017 – 2021",
  grade: "CGPA 8.6 / 10",
  certifications: ["React — The Complete Guide", "Node.js Complete Bootcamp", "Mastering CSS (Udemy)"],
  languages: ["English", "Hindi", "Malayalam"],
};
