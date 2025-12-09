# Business Problem
- MusLunar needs a unified backend to serve dynamic portfolio content (projects, role-based views) and capture contacts without relying on manual updates or heavy infra.
- The system must be expansion-ready (shop, storytelling) and deployable quickly on a VPS/nginx with a path to Postgres/Supabase.

# Pain Points
- Projects are updated manually, no standard API for the frontend -> data drift between site and reality.
- Contacts via forms/emails are fragmented, missing request_id tracking, hard to measure conversion, and responses are slow.
- No standard versioning/logging/validation, so errors are hard to control and adding new channels (mobile, kiosk) is risky.
- No central repository for technical/business standards, causing inconsistency when onboarding new devs.

# Business Objectives
- Provide a stable portfolio API with response time <300ms P95 (in-memory now, then Postgres).
- Standardize contact intake, attach request_id, and respond 50% faster than current.
- Enable easy expansion to commerce/analytics: keep Clean Architecture so backend swap (memory -> Postgres) happens within <1 sprint.
- Maintain clear knowledge base so new devs onboard in <1 day and reduce config/infra mistakes.
