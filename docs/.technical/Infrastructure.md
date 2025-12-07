# MusLunar Portfolio - Infrastructure & Deployment (VPS + Docker)

## VPS Setup Checklist (Ubuntu)
- Update base packages: `sudo apt update && sudo apt upgrade -y`.
- Install essentials: `sudo apt install -y curl git ufw`.
- Install Docker: `curl -fsSL https://get.docker.com | sh`; add user to docker group: `sudo usermod -aG docker $USER`.
- Install Docker Compose plugin: `sudo apt install -y docker-compose-plugin` (or download from Docker if needed).
- Firewall (ufw):
  - `sudo ufw default deny incoming && sudo ufw default allow outgoing`
  - Allow SSH `22/tcp`, HTTP `80/tcp`, HTTPS `443/tcp`.
  - `sudo ufw enable` then `sudo ufw status`.
- Create app folders: `/opt/muslunar/{frontend,backend,nginx,logs}`.
- Set correct timezone: `sudo timedatectl set-timezone Asia/Ho_Chi_Minh` (optional but recommended).

## Nginx (reverse proxy)
- Install: `sudo apt install -y nginx`.
- Basic site config (example):
  ```
  server {
    listen 80;
    server_name muslunar.com api.muslunar.com;

    location / {
      proxy_pass http://127.0.0.1:3000; # frontend container/host port
      proxy_set_header Host $host;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header X-Forwarded-Proto $scheme;
    }
  }
  ```
- Test and reload: `sudo nginx -t && sudo systemctl reload nginx`.
- TLS: use `certbot --nginx` when domain is ready.

## Docker deploy (pattern)
- Build images locally or on the VPS.
- Example run:
  - Frontend: `docker run -d --name muslunar-fe -p 3000:3000 ghcr.io/yourorg/muslunar-fe:tag`
  - Backend: `docker run -d --name muslunar-be -p 8080:8080 --env-file /opt/muslunar/backend/.env ghcr.io/yourorg/muslunar-be:tag`
- Prefer Compose for both:
  ```yaml
  services:
    frontend:
      image: ghcr.io/yourorg/muslunar-fe:tag
      restart: unless-stopped
      ports: ["3000:3000"]
    backend:
      image: ghcr.io/yourorg/muslunar-be:tag
      restart: unless-stopped
      env_file: /opt/muslunar/backend/.env
      ports: ["8080:8080"]
  ```
- Logs: `docker logs -f muslunar-fe` (or mount to `/opt/muslunar/logs`).

## Production Environment Variables (examples)
- Shared: `NODE_ENV=production`
- Frontend: `NEXT_PUBLIC_API_URL=https://api.muslunar.com`, `NEXT_PUBLIC_APP_URL=https://muslunar.com`
- Backend:
  - `PORT=8080`
  - `DATABASE_URL=postgres://user:pass@host:5432/dbname`
  - `JWT_SECRET=...` (if auth used)
  - `RATE_LIMIT_WINDOW=60`, `RATE_LIMIT_MAX=100`
  - `EMAIL_API_KEY=...` (if using email)
  - `TELEGRAM_BOT_TOKEN=...` (if using Telegram alert)
  - `PAYMENT_PROVIDER_KEY=...` (if shop enabled)
  - `AI_API_KEY=...` (if chatbot enabled)
- Never commit .env; store them in `/opt/muslunar/backend/.env` (server) and in CI/CD secrets (GitHub/Vercel).

## SSH & Ops Quick Reference
- Connect: `ssh user@server_ip` (or `ssh -i /path/key.pem user@server_ip`).
- Docker status: `docker ps -a`; restart container: `docker restart muslunar-fe`.
- Nginx: `sudo systemctl status nginx`; reload: `sudo nginx -t && sudo systemctl reload nginx`.
- Firewall: `sudo ufw status`; open a port (if needed): `sudo ufw allow 3000/tcp`.
- Disk/health: `df -h`, `htop` (install via `sudo apt install -y htop`), `journalctl -u nginx -n 200`.

## Backup/Restore (lightweight)
- Backup configs: `tar czf muslunar-configs.tgz /opt/muslunar/nginx /opt/muslunar/backend/.env`.
- DB (if self-hosted Postgres): `pg_dump $DATABASE_URL > backup.sql`; restore with `psql $DATABASE_URL < backup.sql`.
