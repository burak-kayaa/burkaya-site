export type Role = {
  title: string;
  company: string;
  subtitle: string;
  start: string;
  end: string;
  location: string;
  bullets: string[];
};

export type Project = {
  name: string;
  context: string;
  period: string;
  stack: string[];
  bullets: string[];
  href?: string;
};

export const summary =
  "Backend engineer with 2+ years building secure, scalable SaaS systems in Java/Spring Boot and Python/FastAPI. Owns services end to end — from API design and PostgreSQL data modelling to pricing engine logic, event-driven architecture and production operations. Hands-on experience integrating AI capabilities (RAG, embedding-based retrieval, agentic workflows) into real backend platforms. Comfortable driving architecture and trade-off decisions, and shipping reliable systems serving 20+ tenants and ~50K daily requests.";

export const experience: Role[] = [
  {
    title: "Freelance Backend Developer",
    company: "VistaLine",
    subtitle: "B2B quotation & pricing platform · Python/FastAPI · PostgreSQL · Docker · React",
    start: "Feb 2026",
    end: "Present",
    location: "Istanbul, Turkey",
    bullets: [
      "Designed and built the Python/FastAPI backend of a B2B quotation platform serving the company's full dealer network, with a rule-based pricing engine that computes cost across 22 product families from dimensions, material specs and live FX rates pulled from an external rate API.",
      "Replaced a manual, spreadsheet-driven quoting process with dealer self-service, cutting quote preparation from hours to seconds and removing the internal bottleneck of pricing every dealer request by hand.",
      "Implemented role-based access control with Clerk across dealer and admin roles, managing the full quote lifecycle (draft → sent → approved / rejected / cancelled) with per-quote manual overrides and a token-protected read-only quote preview.",
      "Modelled the PostgreSQL schema for products, pricing variables and quote history; built a centralised admin layer where shared parameters (material, paint, glass, VAT, FX) propagate across all product families.",
      "Built three audience-specific PDF outputs from a shared quote model — an internal itemised cost breakdown, a production sheet with per-material quantities and images served from S3-compatible storage, and a client-facing quote — alongside inventory tracking and Resend-based transactional email on status changes.",
      "Containerised the stack with Docker and deployed on Railway with a CI/CD pipeline; configured Nginx reverse proxy and environment management. Defined REST API contracts and led backend–frontend integration with one front-end collaborator.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Bear Analytica",
    subtitle: "Backend engineering · Multi-tenant SaaS",
    start: "Sep 2024",
    end: "Feb 2026",
    location: "Istanbul, Turkey",
    bullets: [
      "Architected and shipped a multi-tenant phishing-simulation SaaS on Spring Boot serving 20+ tenants, designing tenant isolation that prevented cross-tenant data leakage across all accounts.",
      "Designed PostgreSQL schemas and indexing for high-volume tracking events, sustaining 5M+ events/month and cutting key report query times by ~60% (from ~2.5s to under 900ms).",
      "Built and maintained RESTful APIs for campaign management, recipient tracking and analytics, handling ~50K requests/day with p95 latency under 200ms.",
      "Implemented identity and token-based access control with Keycloak and Clerk, standardising auth across 6 microservices and reducing auth-related incidents.",
      "Developed RAG pipelines with embedding-based retrieval, improving answer relevance and reducing manual lookup effort by ~40%.",
      "Built agentic AI workflows with LangChain and LangGraph enabling multi-step reasoning and tool use, automating report generation and triage previously done manually.",
      "Designed event-driven backend components for a real-time vision analytics platform using NATS and MinIO, decoupling 5 services and improving throughput and resilience.",
      "Containerised services with Docker / Docker Compose; configured Nginx reverse proxy with Cloudflare DNS and SSL/TLS for secure deployments.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "OBSS Technology",
    subtitle: "AI-native mock interview platform · Spring Boot · FastAPI · Ollama",
    start: "Jul 2026",
    end: "Sep 2026",
    location: "Istanbul, Turkey",
    bullets: [
      "Contributed to an AI-native mock interview platform where candidates practice against target job listings and receive AI-generated evaluation reports; worked across a Spring Boot core backend, an independent user service and a stateless Python/FastAPI AI service.",
      "Owned the AI service layer: Ollama-based question generation and evaluation, structured prompt design with versioning, Pydantic runtime/contract validation, error normalisation, timeout/retry policies and token cost tracking.",
      "Implemented a provider abstraction (port-adapter pattern) to decouple the LLM dependency from business logic; used structured JSON output and deterministic AI stubs to improve testability and provider independence.",
      "Applied contract-first design, ATDD/TDD, automated acceptance gates, graceful degradation and continuous refactoring.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Real-time Communication & Social Platform",
    context: "Graduation project · Marmara University",
    period: "2025 – 2026",
    stack: ["Microservices", "WebSocket", "PostGIS", "RabbitMQ", "Keycloak", "RAG"],
    bullets: [
      "Designed a microservices architecture decomposed into 8 independently deployable services communicating via RabbitMQ and event streams.",
      "Implemented real-time messaging and presence over WebSocket and location-based features with PostGIS, supporting 1K+ concurrent connections.",
      "Integrated Keycloak for authentication and built AI-powered features using RAG across the platform.",
    ],
  },
  {
    name: "Medical image anomaly detection",
    context: "TÜBİTAK 1002 research project · Technical lead",
    period: "2024 – 2025",
    stack: ["PyTorch", "Nested U-Net (UNet++)", "Optuna"],
    bullets: [
      "Led technical design and implementation of an AI-based medical image anomaly detection system, owning model design, experimentation and evaluation end to end.",
      "Built a Python CLI on PyTorch implementing UNet++, reaching a Dice score of ~0.87 on the target segmentation dataset.",
      "Extensive preprocessing / augmentation and Optuna-based hyperparameter tuning improved segmentation Dice by ~12% over the baseline.",
    ],
  },
  {
    name: "ft_transcendence",
    context: "École 42 Istanbul · Team project",
    period: "Jan 2023 – Feb 2023",
    stack: ["WebSockets", "Full-stack"],
    bullets: [
      "Built real-time multiplayer features over WebSockets with state synchronisation, plus auth, matchmaking and game-state APIs; deployed in a production-like environment.",
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Java", "Python", "C/C++", "TypeScript", "SQL"] },
  {
    group: "Backend",
    items: ["Spring Boot", "Spring Security", "FastAPI", "REST API design", "Hibernate/JPA", "Flyway", "Multi-tenant architecture"],
  },
  {
    group: "Architecture",
    items: ["Event-driven & async systems", "Microservices", "Pricing engine design", "Port-adapter pattern", "RabbitMQ", "NATS"],
  },
  {
    group: "AI & Data",
    items: ["RAG", "Embedding-based retrieval", "LangChain", "LangGraph", "Ollama", "PyTorch", "U-Net / CNN", "Optuna"],
  },
  { group: "Auth & Security", items: ["Keycloak", "Clerk", "JWT / token-based access", "RBAC", "Vault"] },
  { group: "Databases", items: ["PostgreSQL (PostGIS, JSONB)", "MongoDB", "MinIO / S3-compatible storage"] },
  {
    group: "DevOps & Cloud",
    items: ["Docker", "Docker Compose", "Nginx", "Cloudflare", "Railway", "CI/CD", "Linux deployments"],
  },
  { group: "Testing", items: ["TDD / ATDD", "Pytest", "Testcontainers", "Contract-first design"] },
];

export const education = [
  {
    degree: "B.Sc. Software Engineering",
    school: "École 42 Istanbul",
    period: "2023 – 2025",
    note: "Peer-to-peer, project-based curriculum in C/C++: a custom UNIX-like shell (process management, piping, signals) and a personal C standard library; strong focus on algorithms, data structures and clean code.",
  },
  {
    degree: "B.Sc. Mechatronics Engineering",
    school: "Marmara University",
    period: "2020 – 2024",
    note: "Coursework across AI, data structures, operating systems, computer hardware, electrical circuits and CAD.",
  },
];

export const certifications = [
  {
    name: "Agile Project Management and Scrum Methodology",
    issuer: "Yıldız Technical University",
    date: "Dec 2024",
  },
];

export const languages = ["Turkish (native)", "English (B2)"];
