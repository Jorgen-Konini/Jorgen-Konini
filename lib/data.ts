// All site content lives here — edit this file to update the site.

export const site = {
  name: "Jorgen Konini",
  role: "Software Engineer — React & React Native",
  email: "koninijorgen@gmail.com",
  github: "https://github.com/Jorgen-Konini",
  githubLabel: "github.com/Jorgen-Konini",
  linkedin: "https://www.linkedin.com/in/jorgen-konini-635722255",
  linkedinLabel: "linkedin.com/in/jorgen-konini",
  location: "Based in Albania",
  availability: "Open to remote",
  years: "5+ years experience",
};

export const about = {
  heading: "Engineer with a product mindset.",
  paragraphs: [
    "I work across the whole stack — React and React Native frontends in TypeScript, Go and PostgreSQL backends — but what sets my work apart is the product layer in between: breaking down requirements, writing user stories, running stakeholder demos, and shipping on two-week cycles.",
    "Over the last five-plus years I have delivered production platforms for US healthcare, HR, and legal companies — leading migrations, rewrites, and frontend teams along the way.",
  ],
  stats: [
    { value: "5+", label: "years building production software" },
    { value: "3", label: "industries shipped for — healthcare, HR, legal" },
    { value: "2", label: "major legacy rewrites led — AngularJS→React, jQuery→React" },
  ],
};

export const experience = [
  {
    title: "Software Engineer · Ritech International",
    period: "20XX — 20XX", // TODO: fill in real dates
    tagline: "US healthcare & HR platforms",
    bullets: [
      "Built a patient pharmacy app and an HRA reimbursement platform in React Native, React, and TypeScript, serving US healthcare providers.",
      "Led a full TypeScript migration and an AngularJS-to-React rewrite across the product.",
      "Ran sprint planning, requirements definition, and stakeholder demos on two-week delivery cycles.",
    ],
    tags: ["React Native", "React", "TypeScript"],
  },
  {
    title: "Frontend Lead · Rightsearch & Advocar",
    period: "20XX — 20XX", // TODO: fill in real dates
    tagline: "Legal services platform rebuild",
    bullets: [
      "Led the frontend team through a ground-up React and TypeScript rewrite of a legacy jQuery/CakePHP stack.",
    ],
    tags: ["React", "TypeScript", "Team lead"],
  },
];

export const projects = [
  {
    name: "gymplatform-backend",
    url: "https://github.com/jorgenPersonal/gymplatform-backend",
    description:
      "Multi-tenant gym SaaS backend in Go — PostgreSQL row-level security for tenant isolation, RBAC, Redis job queue, AI coaching via Claude with token budgets and output validation, OpenTelemetry, and testcontainers integration tests.",
    tags: ["Go", "PostgreSQL", "Redis", "Claude API"],
  },
  {
    name: "gymplatform-frontend",
    url: "https://github.com/jorgenPersonal/gymplatform-frontend",
    description:
      "React and React Native client for the gym platform — one TypeScript codebase serving members and coaches on web and mobile.",
    tags: ["React", "React Native", "TypeScript"],
  },
  {
    name: "Pharmacy app & HRA platform",
    url: null,
    description:
      "Patient pharmacy app and HRA reimbursement platform serving US healthcare providers — built at Ritech International, including a full TypeScript migration and AngularJS-to-React rewrite.",
    tags: ["React Native", "React", "TypeScript"],
  },
  {
    name: "Legal services platform",
    url: null,
    description:
      "Ground-up rebuild of a legal services platform for Rightsearch & Advocar — led the frontend team replacing a legacy jQuery/CakePHP stack with React and TypeScript.",
    tags: ["React", "TypeScript"],
  },
];

export const skills = [
  { group: "Frontend", items: ["React", "React Native", "TypeScript", "JavaScript", "HTML5", "CSS3"] },
  { group: "Backend", items: ["Go", "REST APIs", "C#", "PHP / Laravel"] },
  { group: "Data", items: ["PostgreSQL", "MySQL", "Redis"] },
  { group: "AI", items: ["LLM integration", "AI agents", "Prompt engineering"] },
  { group: "Tooling", items: ["Git", "Docker", "Xcode", "Android Studio", "Jira"] },
  { group: "Product", items: ["Sprint planning", "User stories", "Stakeholder demos", "Agile / Scrum"] },
];
