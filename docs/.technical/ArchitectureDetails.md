# MusLunar Portfolio - Architecture Details

## Runtime Layout
- **Frontend:** Next.js (App Router) on Vercel Edge; SSR/ISR for SEO pages, client-side for interactive scenes.
- **Backend:** Go (Echo) modular monolith in a Docker container on VPS behind nginx.
- **Data/Assets:** Supabase Postgres (auth/DB), Cloudinary (images/CDN), Google Drive (large downloads/backups).

## Module Boundaries
- Frontend modules: Showcase, Storytelling, Shop, Shared UI. Cross-cutting: theme/role state, analytics.
- Backend modules: `project`, `timeline`, `contact`, `shop` (optional). Each owns use cases, delivery handlers, repositories.

## Deployment Topology
- Vercel handles static/edge delivery; nginx proxies `/api` to Go on port 8080.
- Go container talks directly to Supabase over TLS; assets fetched via Cloudinary URLs or Drive API.
- CI/CD: GitHub Actions builds and ships images to GHCR, then pulls/restarts on VPS.

## Data Flows
- Read-heavy: FE -> Go -> Postgres; results cached briefly at edge and by HTTP cache headers.
- Writes: contact form posts -> Go validation -> Postgres insert -> optional email/Telegram alert.
- Assets: FE requests Cloudinary URLs; large zip downloads redirect to Drive links.

## Performance
- Use ISR/SSR for hero pages; React Query caching for data lists.
- Go: connection pooling, prepared statements via sqlc, pagination on all list endpoints.
- Compression: gzip/brotli via nginx; image transformations via Cloudinary.

## Security
- HTTPS end-to-end; HSTS on nginx.
- JWT/Bearer for admin endpoints; role-based filtering for public data (recruiter/client/viewer).
- Input validation at handler boundary; audit logs for admin mutations.
- Secrets stored in env/CI secrets; no secrets in repo.

## Observability
- Structured logging (Zap) with `request_id`, latency, status.
- Basic uptime and error alerts via lightweight webhook (Telegram/email) for 5xx spikes.
- Access logs at nginx; application logs via `docker logs` or mounted volume.

## Scalability Path
- Vertical: bump VPS CPU/RAM; enable Redis cache.
- Horizontal: move Go container to Cloud Run/ECS; Supabase read replicas when needed.
- Frontend already edge-distributed; asset/CDN scales independently.
