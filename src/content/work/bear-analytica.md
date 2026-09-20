---
company: "Bear Analytica"
role: "Software Engineer"
dateStart: "09/01/2024"
dateEnd: "02/01/2026"
---

Backend engineering · Multi-tenant SaaS · Istanbul

- Architected and shipped a multi-tenant phishing-simulation SaaS on Spring Boot serving 20+ tenants, designing tenant isolation that prevented cross-tenant data leakage across all accounts.
- Designed PostgreSQL schemas and indexing for high-volume tracking events, sustaining 5M+ events/month and cutting key report query times by ~60% (from ~2.5s to under 900ms).
- Built and maintained RESTful APIs for campaign management, recipient tracking and analytics, handling ~50K requests/day with p95 latency under 200ms.
- Implemented identity and token-based access control with Keycloak and Clerk, standardising auth across 6 microservices and reducing auth-related incidents.
- Developed RAG pipelines with embedding-based retrieval, improving answer relevance and reducing manual lookup effort by ~40%.
- Built agentic AI workflows with LangChain and LangGraph enabling multi-step reasoning and tool use, automating report generation and triage previously done manually.
- Designed event-driven backend components for a real-time vision analytics platform using NATS and MinIO, decoupling 5 services and improving throughput and resilience.
- Containerised services with Docker / Docker Compose; configured Nginx reverse proxy with Cloudflare DNS and SSL/TLS for secure deployments.
