# MusLunar Portfolio - DI and Request Flow

## Dependency Injection (Go Backend)
- Tooling: Google Wire to assemble providers per module.
- Providers:
  - Config loader (Viper) -> DB pool -> repositories (sqlc-based) -> usecases -> delivery handlers.
  - Shared: logger (Zap), HTTP server (Echo), middleware stack (request id, recover, CORS, rate limit).
- Rules: constructor functions return interfaces; no globals; module boundaries enforced by interface exposure.

## Request Flow (Read)
1) Client (Vercel FE) calls `/api/v1/projects?role=recruiter&locale=en`.
2) nginx proxies to Go app on port 8080.
3) Echo middleware attaches `request_id`, parses auth (if any), enforces rate limits.
4) Handler validates query, invokes usecase.
5) Usecase queries repository (sqlc) with filters and pagination.
6) Result mapped to DTO, returned as JSON with meta, logged with latency.

## Request Flow (Write - Contact Form)
1) FE posts to `/api/v1/contact-messages`.
2) nginx -> Go handler; body validation (name/email/consent).
3) Usecase inserts into Postgres; optional async notification (email/Telegram) via small goroutine/queue stub.
4) Respond with 201 and request id; rate limiter protects from spam.

## Frontend Data Flow
- Role/state stored in Zustand; data fetched with React Query.
- ISR/SSR for SEO pages; client hydration adds interactive pieces (3D, theme).
- Error boundaries for network failures; retry/backoff for transient errors.

## Wiring Checklist
- Provide module-specific Wire sets (repository + usecase + handler).
- Main Wire injector assembles app container; `wire gen` before build.
- Keep constructor side-effect free; prefer functional options for config.
