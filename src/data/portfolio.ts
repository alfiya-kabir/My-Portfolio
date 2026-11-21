// Edit all portfolio content here.
export const profile = {
  name: "Alfiya K",
  role: "Full-Stack Developer",
  location: "Ajman, UAE",
  headline: "I build the products that power modern businesses.",
  intro:
    "Five years transforming complex business requirements into scalable, intuitive web applications using React, Angular, Next.js, Node.js and TypeScript — spanning dynamic form systems, workflow automation, data-rich dashboards and enterprise SaaS platforms.",
  availability: "Immediate joiner · UAE spouse visa (transferable) · Open to relocation",
  email: "alfiyakabir57@gmail.com",
  phone: "+971 50 475 0014",
  github: "https://github.com/alfiya-kabir/",
  linkedin: "https://www.linkedin.com/in/alfiya-k-2709891a3/",
  resume: "/alfiya-kabir-resume.pdf",
};

export const stats = [
  { value: "4+", label: "Years building for the web" },
  { value: "5+", label: "SaaS & enterprise products shipped" },
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
      "I led development across multiple SaaS and enterprise products in React, Angular, Node.js and TypeScript — dynamic forms, dashboards, workflow automation and scalable state management.",
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
    stack: ["React", "TypeScript", "Tailwind", "Tanstack Query", "React Hook Form", "dnd-kit", "Recharts", "Radix UI", "i18next"],

points: [
  "Contributed as Lead Frontend Developer, shaping the platform from an initial prototype into a configurable, multi-tenant SaaS product, collaborating with clients and backend/QA teams.",
  "Developed a configuration-driven form engine supporting custom fields, reusable templates, dynamic layouts and validation, allowing businesses to customize lead and contact data without code changes.",
  "Built an external no-code form builder with drag-and-drop field configuration, customizable properties and publishing capabilities, enabling businesses to embed lead-capture forms into their own websites.",
  "Implemented a visual workflow automation builder using xyFlow, allowing businesses to configure triggers, conditions and actions for lead-related processes.",
  "Developed lead and contact management modules with customizable Kanban pipelines, drag-and-drop stage transitions, advanced filtering and configurable business fields.",
  "Built interactive analytics dashboards and data visualizations, alongside multi-role access control, responsive layouts and complete LTR/RTL support."
],

  },
  {
    title: "OMai — Renewable Energy",
    tag: "Biogas plant monitoring · US client",
    summary: "Multi-site monitoring for biogas plants with live data, charts and interactive P&ID diagrams.",
    stack: ["Angular 17", "NgRx", "D3.js", "Material UI"],
    points: [
      "Architected the frontend and complex NgRx state for multi-site management.",
      "Built site-specific dashboards with live and historical D3.js / chart visualizations.",
      "Developed interactive P&ID piping diagrams with drag-and-drop labels.",
    ],
  },
  
  {
    title: "LegalZoom",
    tag: "LegalTech · Business formation · US",
    summary: "A production-grade legal-tech platform that helps entrepreneurs establish LLCs and corporations across the United States. Built around state-specific filing workflows, the ecosystem included 10–12 Dockerized applications in a monorepo, supporting white-label client experiences and administrative tools.",
    stack: [
      "Angular",
      "React",
      "TypeScript",
      "Cypress",
      "Cucumber",
      "Jasmine",
      "Docker",
      "Forge",
      "Datadog"
    ],
    points: [
      "Developed and enhanced features across a large, multi-application Dockerized monorepo, extending an established production platform while preserving legacy functionality and avoiding regressions.",
      "Implemented state-specific business rules, dynamic form behaviour, validations and multi-step workflows for LLC and corporation formation processes.",
      "Contributed to multiple white-label applications, delivering client-specific features and enhancements while maintaining consistency across different application experiences.",
      "Worked across frontend applications and supporting administrative tools within the platform, adapting existing functionality to evolving business and client requirements.",
      "Supported Angular modernization by replacing deprecated APIs and patterns, addressing compatibility issues and assisting with framework upgrade efforts.",
      "Integrated REST APIs and implemented frontend enhancements in collaboration with backend developers, translating client requirements into production-ready features.",
      "Wrote and maintained unit tests and end-to-end test scenarios using Jasmine, Cypress and Cucumber to validate functionality and prevent regressions.",
      "Collaborated with clients, developers and QA teams through requirement discussions, daily stand-ups and sprint activities.",
      "Supported the complete feature lifecycle, from development and testing through Forge deployments and production verification.",
      "Used Datadog to monitor application errors, investigate production issues and verify application behaviour following releases."
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
    tag: "Applied AI · LLM Prototypes · NLP",
    summary: "A collection of practical AI prototypes exploring document intelligence, automated content processing, speech recognition and local LLM-powered assistants. Built with Python and Hugging Face models, combining NLP pipelines, lightweight databases and API-driven applications.",
    stack: [
      "Python",
      "Streamlit",
      "FastAPI",
      "Hugging Face",
      "BART",
      "Whisper",
      "Mistral",
      "TinyLlama",
      "Ollama",
      "SQLite"
    ],
    points: [
      "Developed a PDF and document summarization tool using Hugging Face BART, processing lengthy documents through text extraction, chunking and model-based summarization.",
      "Built an RSS-based news aggregation tool to collect articles from multiple feeds, extract content and generate concise AI-powered summaries for easier information discovery.",
      "Explored NLP pipelines for processing and transforming unstructured text into shorter, more readable and useful outputs.",
      "Developed an audio-to-notes application using OpenAI Whisper for speech-to-text transcription, transforming recorded audio into structured, readable notes.",
      "Built a local-model conversational assistant using Mistral and TinyLlama, enabling users to interact with locally hosted language models through a chat interface.",
      "Developed FastAPI backend services to expose AI processing and model interactions through API endpoints.",
      "Created interactive Streamlit interfaces for uploading documents, processing content, viewing summaries and interacting with AI-powered tools.",
      "Used SQLite for lightweight application data persistence across the prototypes."
    ],
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
