---
title: "VistaLine B2B quotation platform"
summary: "Dealer self-service quoting with a rule-based pricing engine across 22 product families, RBAC, and three PDF outputs from one quote model."
date: "Feb 01 2026"
draft: false
tags:
- Python
- FastAPI
- PostgreSQL
- Docker
- Railway
---

A freelance build for VistaLine: a Python/FastAPI backend that replaced a manual, spreadsheet-driven quoting process for the company's full dealer network.

- **Pricing engine.** Rule-based cost computation across 22 product families from dimensions, material specs and live FX rates pulled from an external rate API. Quote preparation went from hours to seconds.
- **Quote lifecycle.** Draft → sent → approved / rejected / cancelled, with per-quote manual overrides and a token-protected read-only preview for clients. Role-based access with Clerk across dealer and admin roles.
- **Data model.** PostgreSQL schema for products, pricing variables and quote history, with a centralised admin layer where shared parameters (material, paint, glass, VAT, FX) propagate across all product families.
- **Outputs.** Three audience-specific PDFs from one quote model: an internal itemised cost breakdown, a production sheet with per-material quantities and images from S3-compatible storage, and a client-facing quote. Inventory tracking and Resend-based transactional email on status changes.
- **Operations.** Docker, Railway with a CI/CD pipeline, Nginx reverse proxy; REST contracts defined up front and backend–frontend integration led with one front-end collaborator.
