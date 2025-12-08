# MusLunar Portfolio - Technical Approach

## Architectural Stance
- Hybrid modular monolith: Next.js on Vercel (edge/SSR) + Go monolith on VPS behind nginx.
- Modules aligned to business domains; clean boundaries to ease future service extraction.
- Leverage managed services (Supabase, Cloudinary, Drive) to stay lean.

## Delivery Model
- CI/CD: Vercel for frontend previews/production; GitHub Actions builds Go Docker image, pushes to GHCR, redeploys on VPS.
- Environments: local (hot reload), preview/staging (Vercel), production (Vercel + VPS).

## Data and APIs
- RESTful JSON APIs (v1) with role-aware filters and locale support.
- Supabase Postgres as source of truth; sqlc for type-safe access; minimal caching at HTTP level.
- DTO sharing between Go and TS to reduce drift.

## Performance and UX
- SSR/ISR for SEO surfaces; React Query caching for dynamic lists.
- Optimize media via Cloudinary; lazy-load heavy 3D where possible.
- Backend: tight pooling, pagination everywhere, structured logging with request ids.

## Security and Compliance
- HTTPS end-to-end; JWT for admin; input validation at handlers.
- Secrets in env/CI only; audit logs for admin actions; rate limit public writes.

## Evolution Path
- Vertical scaling first (VPS size, Redis cache); horizontal later (Cloud Run/ECS).
- Easy module extraction thanks to clean architecture and repository interfaces.
