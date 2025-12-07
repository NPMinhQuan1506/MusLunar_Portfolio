# MusLunar Portfolio - Deployment & Operations

## Environments
- **Local:** dev mode; `.env.local` for frontend, `.env` for backend. Hot reload; no analytics/payment calls.
- **Staging/Preview:** Vercel preview for frontend PRs; optional VPS preview port for backend. Used for QA and demos.
- **Production:** Vercel (frontend) + VPS (backend). Nginx reverse proxy to containers; HTTPS via Certbot.

## CI/CD (suggested)
- **Frontend (Vercel):** Deploy on every PR to preview; deploy `main` to production. Env vars in Vercel dashboard.
- **Backend (GitHub Actions):**
  - On push to `main`: build Docker image, push to GHCR, SSH to VPS and pull+restart.
  - Example steps: checkout -> set up Go -> tests -> docker build/tag -> docker push -> SSH deploy script.
- **Config needed:** `GHCR_TOKEN`, `VPS_HOST`, `VPS_USER`, `VPS_SSH_KEY`, `VPS_BACKEND_ENV_PATH=/opt/muslunar/backend/.env`.

## Release Flow
1) Merge to `main`.
2) Frontend auto deploy to Vercel; backend pipeline builds/pushes image and restarts container on VPS.
3) Smoke test production: home load, role switch, projects list, contact form submit.
4) Tag release (e.g., `v0.1.0`).

## Rollback
- Frontend: Vercel → Deployments → Rollback to previous deployment.
- Backend: `docker ps` to find previous image tag; `docker run` (or `docker compose up -d` with previous tag). Keep at least one prior image on VPS or pull by tag from GHCR.
- If config regression: swap `.env` to previous backup and restart container.

## Monitoring & Logs
- Frontend: Vercel Analytics (or simple Umami) for traffic/performance.
- Backend: `docker logs -f muslunar-be`; system logs via `journalctl -u nginx -n 200`.
- Alerts (lightweight): Telegram/Email webhook for error spikes (optional).

## Environment Variables (production)
- Frontend: `NEXT_PUBLIC_API_URL`, `NEXT_PUBLIC_APP_URL`.
- Backend: `PORT`, `DATABASE_URL`, `JWT_SECRET` (if auth), `EMAIL_API_KEY`, `TELEGRAM_BOT_TOKEN` (if alerts), `PAYMENT_PROVIDER_KEY` (if shop), `AI_API_KEY` (if chatbot), `RATE_LIMIT_WINDOW`, `RATE_LIMIT_MAX`.
- Store secrets in platform settings (Vercel) and `/opt/muslunar/backend/.env` on VPS; never commit.

## Backups
- Config backup: `tar czf muslunar-configs.tgz /opt/muslunar/nginx /opt/muslunar/backend/.env`.
- DB (if self-hosted): `pg_dump $DATABASE_URL > backup.sql`; schedule cron. Restore with `psql $DATABASE_URL < backup.sql`.
