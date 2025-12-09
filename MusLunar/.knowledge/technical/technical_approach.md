# Technical Approach

## 1. Introduction
- Goal: Edge-friendly, role-aware Next.js frontend for MusLunar with modular domains and clean data boundaries.

## 2. Architecture Overview
- Framework: Next.js 15 App Router (React 18), TypeScript, Zustand stores.
- Structure: `app` (routes/layout), `components` (shared UI), `modules` (domain features), `lib` (cross-cutting utilities).
- Hosting: Edge-ready; static assets in `public`, API base via `NEXT_PUBLIC_API_URL`.

## 3. UI/Data Principles
- Server Components by default; client components for interactivity and Zustand usage.
- RESTful calls to MusLunarAPI via axios wrapper; keep versioned paths (`/api/v1/...`).
- Consistent status/display states: loading, empty, error, success.

## 4. UX/Design
- Shadcn/ui compatible; add tokens/components in `components/ui`.
- Role-personalized sections (recruiter/client/viewer) driven by state/hook logic in modules.

## Further Reading
- See other `.knowledge/technical/*.md` docs for coding standards, data flow, testing, and use cases.
