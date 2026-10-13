export const skillCategories = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Database" },
  { id: "programming", label: "Programming" },
  { id: "tools", label: "Tools" },
  { id: "aiml", label: "AI/ML" }
];

export const skillsData = [
  // Programming
  {
    name: "JavaScript",
    category: "programming",
    level: "Core",
    highlight: "ES6+, Async/Await, Closures, DOM Manipulation, Modern Web APIs",
    icon: "FileCode2"
  },
  {
    name: "Python",
    category: "programming",
    level: "Proficient",
    highlight: "OOP, Data Analysis, Scripting, NumPy/Pandas, ML Pipelines",
    icon: "Terminal"
  },
  {
    name: "SQL",
    category: "programming",
    level: "Proficient",
    highlight: "Joins, Relational Queries, Schema Normalization, Aggregations",
    icon: "Database"
  },

  // Frontend
  {
    name: "React.js",
    category: "frontend",
    level: "Core",
    highlight: "Hooks, Component Architecture, State Management, Custom Hooks",
    icon: "Atom"
  },
  {
    name: "HTML",
    category: "frontend",
    level: "Core",
    highlight: "HTML5, Semantic Markup, SEO Structure, Web Accessibility (a11y)",
    icon: "Layout"
  },
  {
    name: "CSS",
    category: "frontend",
    level: "Core",
    highlight: "CSS3, Flexbox, CSS Grid, Custom Properties, Responsive Design",
    icon: "Palette"
  },
  {
    name: "Bootstrap",
    category: "frontend",
    level: "Proficient",
    highlight: "Grid System, Utility Classes, Rapid Prototyping, Mobile-first Layouts",
    icon: "Layout"
  },
  {
    name: "Framer Motion",
    category: "frontend",
    level: "Proficient",
    highlight: "Spring Physics, Staggered Animations, Interactive Gestures",
    icon: "Sparkles"
  },

  // Backend
  {
    name: "Node.js",
    category: "backend",
    level: "Core",
    highlight: "Event Loop, Streams, File System, REST API Server Architecture",
    icon: "Server"
  },
  {
    name: "Express.js",
    category: "backend",
    level: "Core",
    highlight: "Middleware Pipeline, JWT Authentication, RESTful Routing, Error Cascades",
    icon: "Cpu"
  },

  // Database
  {
    name: "MongoDB",
    category: "database",
    level: "Core",
    highlight: "Document Modeling, Mongoose ODM, Aggregations, Indexing",
    icon: "Layers"
  },
  {
    name: "SQL (MySQL)",
    category: "database",
    level: "Proficient",
    highlight: "Relational Modeling, Foreign Keys, Transaction Management, Query Optimization",
    icon: "HardDrive"
  },
  {
    name: "Supabase",
    category: "database",
    level: "Proficient",
    highlight: "PostgreSQL, Auth, Realtime Database Subscriptions, Storage APIs",
    icon: "Database"
  },

  // Tools
  {
    name: "Git",
    category: "tools",
    level: "Core",
    highlight: "Version Control, Branching, Rebase, Merge Conflict Resolution",
    icon: "GitBranch"
  },
  {
    name: "GitHub",
    category: "tools",
    level: "Core",
    highlight: "Repositories, Pull Requests, Code Reviews, Collaboration, CI/CD",
    icon: "GitBranch"
  },
  {
    name: "VS Code",
    category: "tools",
    level: "Core",
    highlight: "Extensions, Debugger Integration, Git Tooling, Productive Environment",
    icon: "Code2"
  },
  {
    name: "Netlify",
    category: "tools",
    level: "Proficient",
    highlight: "Continuous Deployment, Build Configurations, Headers, Redirects",
    icon: "Zap"
  },

  // AI/ML
  {
    name: "Machine Learning",
    category: "aiml",
    level: "Practicing",
    highlight: "Supervised Learning, Regression, Classification, Model Evaluation Metrics",
    icon: "BrainCircuit"
  },
  {
    name: "Artificial Intelligence",
    category: "aiml",
    level: "Practicing",
    highlight: "AI Concepts, Practical Algorithms, Data Preprocessing, CTTC Training",
    icon: "Binary"
  }
];
