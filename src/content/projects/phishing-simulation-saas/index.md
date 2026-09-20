---
title: "Multi-tenant phishing-simulation SaaS"
summary: "Spring Boot platform serving 20+ tenants and ~50K requests a day, with RAG pipelines and agentic workflows for report generation and triage."
date: "Sep 01 2024"
draft: false
tags:
- Java
- Spring Boot
- PostgreSQL
- Keycloak
- NATS
- LangChain
---

The core product I worked on at Bear Analytica: a multi-tenant phishing-simulation SaaS on Spring Boot.

- **Tenant isolation** designed so that no cross-tenant data leakage occurred across 20+ tenants.
- **PostgreSQL at volume.** Schemas and indexing for 5M+ tracking events a month; key report queries cut by ~60%, from ~2.5s to under 900ms.
- **APIs** for campaign management, recipient tracking and analytics at ~50K requests a day with p95 latency under 200ms.
- **Auth** standardised across 6 microservices with Keycloak and Clerk.
- **AI features.** RAG pipelines with embedding-based retrieval (~40% less manual lookup), and LangChain/LangGraph agents that automated report generation and triage.
- **Event-driven components** for a real-time vision analytics platform with NATS and MinIO, decoupling 5 services.
