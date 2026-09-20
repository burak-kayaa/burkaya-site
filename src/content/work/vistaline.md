---
company: "VistaLine"
role: "Freelance Backend Developer"
dateStart: "02/01/2026"
dateEnd: "Present"
---

B2B quotation & pricing platform · Python/FastAPI · PostgreSQL · Docker · React · Istanbul

- Designed and built the Python/FastAPI backend of a B2B quotation platform serving the company's full dealer network, with a rule-based pricing engine that computes cost across 22 product families from dimensions, material specs and live FX rates pulled from an external rate API.
- Replaced a manual, spreadsheet-driven quoting process with dealer self-service, cutting quote preparation from hours to seconds and removing the internal bottleneck of pricing every dealer request by hand.
- Implemented role-based access control with Clerk across dealer and admin roles, managing the full quote lifecycle (draft → sent → approved / rejected / cancelled) with per-quote manual overrides and a token-protected read-only quote preview.
- Modelled the PostgreSQL schema for products, pricing variables and quote history; built a centralised admin layer where shared parameters (material, paint, glass, VAT, FX) propagate across all product families.
- Built three audience-specific PDF outputs from a shared quote model — an internal itemised cost breakdown, a production sheet with per-material quantities and images served from S3-compatible storage, and a client-facing quote — alongside inventory tracking and Resend-based transactional email on status changes.
- Containerised the stack with Docker and deployed on Railway with a CI/CD pipeline; configured Nginx reverse proxy and environment management. Defined REST API contracts and led backend–frontend integration with one front-end collaborator.
