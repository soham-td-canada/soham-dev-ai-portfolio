export const profileData = {
  name: "Soham Chakraborty",
  title: "Senior Software Engineer · Tech Lead",
  location: "Vancouver, BC, Canada",
  email: "soham.software.canada@gmail.com",
  github: "https://github.com/soham-td-canada",
  linkedin: "https://www.linkedin.com/in/soham-c-27510011b/",

  headline:
    "Senior / Lead Full-Stack Engineer building AI-powered products.",
  subheadline:
    "10+ years across React, Next.js, Node.js, TypeScript, AWS, BFFs, microservices, and production LLM workflows.",

  techBadges: [
    "React",
    "Next.js",
    "Node.js",
    "AWS",
    "OpenAI",
    "RAG",
    "BFF",
    "Microservices",
  ],

  metrics: [
    { label: "10+ Years", description: "Engineering" },
    { label: "2+ Years", description: "Tech Leadership" },
    { label: "Enterprise", description: "Delivery" },
    { label: "Production", description: "AI/LLM Work" },
  ],

  aboutSummary:
    "I combine deep full-stack engineering expertise with product instincts and system design thinking. I've led teams shipping production systems at scale, integrated cutting-edge LLM workflows into enterprise products, and mentored engineers to raise their game. My work spans high-traffic e-commerce (Sephora, Best Buy), fintech, healthcare (Cross Country), and financial services (Northern Trust).",

  caseStudies: [
    {
      id: "financial-risk-analyst-report-automation",
      title: "Financial Risk Analyst Report Automation",
      summary:
        "GPT-4o + LLM tool-calling workflow for automating financial risk reporting with guardrails and human review.",
      status: "Published",
      tags: [
        "OpenAI GPT-4o",
        "Tool Calling",
        "Risk Reports",
        "Guardrails",
        "Human Review",
      ],
      businessProblem:
        "Risk analysts spent 4+ hours manually aggregating data and writing reports. Error-prone, non-scalable, and couldn't keep pace with deal velocity.",
      techApproach:
        "Built a Node.js + React workflow using GPT-4o with deterministic tool-calling for structured financial analysis. Integrated guardrails, confidence scoring, and human review checkpoints to ensure compliance.",
      whatBuilt: [
        "LLM-powered data aggregation and report generation",
        "Tool-calling interface for structured financial analysis",
        "Human review and approval workflow",
        "Compliance guardrails and audit trail",
      ],
      techStack: [
        "Node.js",
        "Express",
        "React",
        "TypeScript",
        "OpenAI GPT-4o",
        "PostgreSQL",
      ],
      company: "Validus Risk Management",
    },
    {
      id: "internal-rag-knowledge-assistant",
      title: "Internal RAG Knowledge Assistant",
      summary:
        "Retrieval-augmented knowledge assistant using embeddings, semantic retrieval, vector search, and LLM re-ranking for trusted internal knowledge discovery.",
      status: "Published",
      tags: [
        "RAG",
        "Embeddings",
        "Semantic Search",
        "Vector Retrieval",
        "LLM Re-ranking",
      ],
      businessProblem:
        "Teams struggled to find internal knowledge across scattered documents, wikis, resumes, and project specs. Keyword search was brittle when domain concepts had multiple phrasings. Onboarding was slow.",
      techApproach:
        "Built a Next.js + Node.js RAG platform using embeddings to enable semantic search, followed by LLM re-ranking for precision. Integrated two-stage retrieval, deterministic scoring, permission-aware filtering, and structured validation.",
      whatBuilt: [
        "Two-stage RAG: vector retrieval + LLM re-ranking",
        "Semantic chunking to preserve context and meaning",
        "Permission-aware, tenant-isolated document search",
        "LLM-generated explanations with evidence citations",
        "Fallback to keyword/BM25 search for reliability",
      ],
      techStack: [
        "Next.js",
        "React",
        "Node.js",
        "TypeScript",
        "Embeddings API",
        "Vector Store",
        "PostgreSQL",
      ],
      company: "Tech Lead / Full-Stack",
    },
    {
      id: "ai-sales-cockpit",
      title: "AI Sales Cockpit",
      summary:
        "AI-powered account cockpit concept for surfacing vitals, risk, recommendations, serviceability, and next-best actions.",
      status: "Live / In progress",
      tags: [
        "AI UX",
        "BFF",
        "Recommendations",
        "Account Intelligence",
        "Next.js",
      ],
      businessProblem:
        "Sales teams lacked a single source of truth for account health, risk signals, and recommended actions. Decision-making was slow and reactive.",
      techApproach:
        "Designed a React + Next.js UI backed by a BFF that aggregates account data, runs AI-powered analysis, and surfaces recommendations. Focuses on actionable insights over raw data.",
      whatBuilt: [
        "Account health dashboard with AI scoring",
        "Risk signal aggregation and prioritization",
        "AI-powered next-best-action recommendations",
        "Serviceability and renewal intelligence",
        "Mobile-responsive account view",
      ],
      techStack: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "BFF Pattern",
        "AI/ML Scoring",
      ],
      company: "Tech Lead / Full-Stack",
    },
  ],

  experience: [
    {
      company: "Validus Risk Management",
      title: "Senior Software Engineer",
      period: "2025–2026",
      highlights: [
        "Architected real-time financial trading tools using Node.js + Express microservices.",
        "Designed hybrid client-state architecture with Zustand + Redux for complex trading UIs.",
        "Built schema-driven React FormBuilder for dynamic risk reporting.",
        "Engineered AI-assisted financial reporting workflows using GPT-4o and LLM tool-calling.",
        "Led code reviews and mentored junior engineers on production-grade patterns.",
      ],
    },
    {
      company: "EPAM Systems",
      title: "Senior Software Engineer",
      period: "2021–2025",
      highlights: [
        "Ticketmaster: Architected secure payment flows and BFF architecture in React + Node.js, PCI-oriented integrations.",
        "Cross Country Healthcare: Led a pod building SSR-optimized React/Next.js forms backed by AWS Lambda APIs.",
        "Sephora: Optimized high-traffic PDPs in React/Next.js, supported A/B-tested conversion initiatives.",
        "Built internal RAG knowledge assistant using React/Next.js, Node.js, OpenAI embeddings, semantic retrieval.",
        "Led client-facing delivery, code review, SDLC governance, CI/CD, and stakeholder collaboration.",
      ],
    },
    {
      company: "Best Buy Canada",
      title: "Senior React Developer",
      period: "2019–2020",
      highlights: [
        "Optimized product detail pages for high-traffic e-commerce conversion.",
        "Implemented A/B testing and performance instrumentation.",
        "Integrated Bazaarvoice reviews and personalization recommendations.",
        "Mentored frontend engineers on React patterns and performance.",
      ],
    },
    {
      company: "Northern Trust",
      title: "Senior Software Developer",
      period: "Jan 2019 - June 2019",
      highlights: [
        "Built real-time data visualization dashboard using React + AG Grid.",
        "Migrated Java API workloads to AWS Lambda, reducing operational overhead.",
        "Led frontend performance optimization initiatives.",
      ],
    },
    {
      company: "Egen Solutions",
      title: "Software Developer",
      period: "2015–2018",
      highlights: [
        "Full-stack enterprise systems using Angular + Java/Spring Boot for John Deere and Kroger.",
        "Designed REST APIs, PostgreSQL/MySQL databases, Hibernate/JPA ORM patterns.",
        "Wrote comprehensive JUnit/Mockito test suites.",
        "Mentored junior developers on Java and enterprise architecture.",
      ],
    },
  ],

  skillGroups: [
    {
      category: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Redux",
        "Zustand",
        "TanStack Query",
        "Nx",
        "Module Federation",
      ],
    },
    {
      category: "Backend",
      skills: [
        "Node.js",
        "Express",
        "Nest.js",
        "Hapi.js",
        "GraphQL",
        "REST APIs",
        "BFF Architecture",
        "Microservices",
        "API Gateway",
      ],
    },
    {
      category: "Cloud / DevOps",
      skills: [
        "AWS Lambda",
        "AWS S3",
        "AWS CloudFront",
        "AWS CloudWatch",
        "AWS RDS",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "GitHub Actions",
      ],
    },
    {
      category: "AI / LLM Engineering",
      skills: [
        "OpenAI API",
        "GPT-4o",
        "LLM Tool-Calling",
        "RAG",
        "Embeddings",
        "Semantic Retrieval",
        "Prompt Engineering",
        "Guardrails",
        "AI-Assisted Development",
      ],
    },
    {
      category: "Data / Databases",
      skills: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "DynamoDB",
        "SQL",
        "Data Modeling",
      ],
    },
    {
      category: "Leadership / Practices",
      skills: [
        "System Design",
        "Code Review",
        "Team Mentoring",
        "Stakeholder Collaboration",
        "Agile/SDLC",
        "Production Engineering",
        "Performance Optimization",
        "Observability",
      ],
    },
  ],

  selectedWork: [
    {
      title: "Ticketmaster BFF + Payments",
      description:
        "Secure payment flows and BFF architecture for high-volume ticket transactions.",
      tags: ["React", "Node.js", "PCI", "Payments"],
      highlight: "Enterprise payment security at scale",
    },
    {
      title: "Sephora PDP Optimization",
      description:
        "High-traffic product detail page optimization and A/B testing.",
      tags: ["React", "Next.js", "E-commerce", "Performance"],
      highlight: "Sub-second PDP loads, conversion growth",
    },
    {
      title: "Cross Country Healthcare SSR Forms",
      description:
        "Server-side rendered healthcare forms backed by AWS Lambda APIs.",
      tags: ["Next.js", "AWS Lambda", "Healthcare", "TypeScript"],
      highlight: "HIPAA-compliant SSR forms at scale",
    },
    {
      title: "Real-Time Trading Tools",
      description:
        "Real-time financial trading UI with microservices backend.",
      tags: ["React", "Node.js", "Microservices", "Real-time"],
      highlight: "Low-latency trading interface",
    },
  ],

  contactCTA:
    "Looking for a Senior / Lead Full-Stack Engineer who can ship production systems and AI-powered workflows?",
};
