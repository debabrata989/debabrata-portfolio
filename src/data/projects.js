export const projectsData = [
  {
    id: "ai-assistant",
    title: "OmniAI: Conversational AI Voice & Task Assistant",
    subtitle: "Real-Time Multi-Modal AI Copilot with Voice & Context Memory",
    category: "Full Stack & GenAI",
    featured: true,
    summary:
      "An intelligent conversational AI assistant featuring real-time natural language reasoning, bi-directional voice interaction, smart markdown rendering, and conversational context persistence.",
    description:
      "Developed a full-stack AI Assistant application integrated with modern LLM APIs (Gemini / OpenAI). Utilizes Server-Sent Events (SSE) for low-latency token streaming, Web Speech API for real-time speech recognition and audio synthesis, and MongoDB session storage for multi-turn conversational history. Built an ultra-responsive interface with dark mode and code block syntax highlighting.",
    tags: ["React.js", "Node.js", "Express.js", "Gemini / OpenAI API", "Web Speech API", "MongoDB", "Modern CSS"],
    highlights: [
      "Real-time token streaming using Server-Sent Events (SSE) with minimal latency",
      "Hands-free voice interaction utilizing Web Speech API for voice recognition & speech synthesis",
      "Session-based context preservation storing multi-turn chat threads in MongoDB",
      "Interactive code preview with syntax highlighting and instant copy-to-clipboard"
    ],
    metrics: "Sub-140ms time-to-first-token streaming & 98% voice command recognition",
    github: "https://github.com/debabrata989/omni-ai-assistant",
    demo: "https://omni-ai-assistant.demo.app",
    accentColor: "#6366f1"
  },
  {
    id: "college-erp-system",
    title: "EduCampus: College ERP & Student Management System",
    subtitle: "Full-Featured Academic Administration, Attendance & Examination Portal",
    category: "MERN Stack & Enterprise",
    featured: true,
    summary:
      "A comprehensive College ERP and Student Management platform providing role-based access for Admins, Faculty, and Students to manage admissions, daily attendance, semester grades, and fee records.",
    description:
      "Architected an enterprise-grade academic management system with granular Role-Based Access Control (RBAC) across Admin, Faculty, and Student portals. Features dynamic timetable scheduling, automated attendance calculation with 75% eligibility warning indicators, semester GPA/CGPA computation engines, fee payment tracking with receipts, and printable grade cards.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT RBAC", "REST APIs", "Chart.js"],
    highlights: [
      "Multi-tier Role-Based Access Control (RBAC) securing Admin, Faculty, and Student workflows",
      "Automated student attendance tracking with instant low-attendance alert notifications",
      "Examination marks recording engine with dynamic SGPA/CGPA calculation & report card export",
      "Visual fee payment status tracker with invoice receipt generation and analytical graphs"
    ],
    metrics: "Optimized MongoDB indexing handling 1,500+ student profiles under 180ms",
    github: "https://github.com/debabrata989/college-erp-system",
    demo: "https://educampus-erp.demo.app",
    accentColor: "#ec4899"
  },
  {
    id: "student-helper",
    title: "Student Helper / AI Study Assistant",
    subtitle: "AI-Powered Productivity & Note Organization Suite",
    category: "Full Stack & AI",
    featured: true,
    summary:
      "A smart student companion application designed to help university students organize class notes, summarize complex study documents, and schedule assignment timelines with intelligent AI recommendations.",
    description:
      "Engineered a responsive study companion integrating AI endpoints with a clean student-friendly dashboard. Features markdown note editing, flashcard generation, key takeaway extraction, and a dynamic progress tracker that helps learners retain concepts more efficiently.",
    tags: ["React.js", "Node.js", "Express.js", "AI API", "REST APIs", "Modern CSS"],
    highlights: [
      "AI-assisted topic summarization and auto-generated study flashcards",
      "Dynamic note organizer with markdown preview and search filter",
      "Optimized API query handler with debounced inputs to prevent unnecessary rate limiting",
      "Clean dark/light visual design tailored for long study hours"
    ],
    metrics: "Enhanced study session review efficiency by 40% in user testing",
    github: "https://github.com/debabrata989/student-helper-ai",
    demo: "https://student-helper-ai.demo.app",
    accentColor: "#06b6d4"
  },
  {
    id: "food-delivery",
    title: "QuickBite: MERN Food Delivery App",
    subtitle: "Complete Food Ordering & Order Tracking System",
    category: "MERN Stack",
    featured: true,
    summary:
      "A full-stack food delivery web application featuring interactive restaurant menus, shopping cart persistence, coupon codes, and an animated real-time order status tracking pipeline.",
    description:
      "Built an end-to-end MERN stack ecommerce solution. Developed a secure RESTful API in Express/Node with MongoDB schemas for users, menu items, and orders. On the frontend, implemented responsive cart state management, category filters, and intuitive checkout workflows.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT Auth"],
    highlights: [
      "Modular MongoDB schemas with indexing on categories and restaurant IDs",
      "State-managed cart with instant quantity adjustments and persistent session caching",
      "Interactive 5-stage order progress timeline with status animations",
      "Comprehensive REST API with custom error handling middleware"
    ],
    metrics: "Sub-200ms API response times across all catalog & cart endpoints",
    github: "https://github.com/debabrata989/mern-food-delivery",
    demo: "https://quickbite-delivery.demo.app",
    accentColor: "#f59e0b"
  },
  {
    id: "personal-portfolio",
    title: "Developer Portfolio & Interactive Shell",
    subtitle: "Modern Recruiter Showcase & Animated Terminal",
    category: "Frontend & UI/UX",
    featured: true,
    summary:
      "A bespoke, high-performance personal portfolio built for campus placements and technical recruiter evaluations, featuring an interactive developer terminal, GPU animations, and zero framework bloat.",
    description:
      "Crafted with React, Framer Motion, and pure Vanilla CSS variables. Emphasizes clean typography, fluid responsive behavior across all screen breakpoints, keyboard accessibility, dynamic project modals, and an interactive CLI shell allowing users to execute simulated developer commands.",
    tags: ["React.js", "Framer Motion", "Vanilla CSS", "Vite", "SEO & a11y"],
    highlights: [
      "60 FPS GPU-accelerated micro-interactions with Framer Motion spring physics",
      "Custom interactive terminal supporting commands like 'skills', 'contact', 'about', and 'projects'",
      "100/100 Lighthouse performance-minded asset loading and modular component architecture",
      "Single-click copy-to-clipboard contact feedback and interactive modal previews"
    ],
    metrics: "Ultra-fast load time with 0 console warnings and full mobile responsiveness",
    github: "https://github.com/debabrata989/portfolio",
    demo: "https://debabratamalik.dev",
    accentColor: "#8b5cf6"
  },
  {
    id: "aiml-predictive-analytics",
    title: "AI/ML Predictive Model & Analytics Suite",
    subtitle: "Data Preprocessing, Model Training & Visual Insights",
    category: "AI & ML",
    featured: true,
    summary:
      "A data science and machine learning pipeline developed during the CTTC AIML program, featuring exploratory data analysis (EDA), data preprocessing, regression/classification modeling, and accuracy benchmarks.",
    description:
      "Utilized Python, Pandas, Scikit-Learn, and Matplotlib to clean messy real-world datasets, engineer predictive features, handle missing data distributions, and evaluate model performance using Confusion Matrices, Precision, Recall, and ROC-AUC metrics.",
    tags: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "Machine Learning"],
    highlights: [
      "Data preprocessing pipeline: imputation, label encoding, and feature standardization",
      "Supervised ML algorithms comparison (Linear/Logistic Regression, Decision Trees)",
      "Model evaluation charts and diagnostic performance visualization",
      "Modular Python scripts structured for reproducible experiment runs"
    ],
    metrics: "Achieved ~88% cross-validation accuracy on test dataset benchmarks",
    github: "https://github.com/debabrata989/aiml-predictive-model",
    demo: "https://github.com/debabrata989/aiml-predictive-model#notebook-results",
    accentColor: "#10b981"
  }
];
