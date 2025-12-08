# MusLunar Portfolio - Use Case Example

## Use Case: Recruiter Browses Top Projects and Contacts

### Flow
1) Recruiter lands on portfolio (Vercel, SSR) and selects role "Recruiter".
2) FE stores role in state and calls `GET /api/v1/projects?role=recruiter&locale=en`.
3) nginx proxies to Go app; handler validates query, usecase fetches filtered projects from Postgres via repository.
4) Response cached briefly; FE renders list with Cloudinary image URLs.
5) Recruiter opens a project detail: `GET /api/v1/projects/{slug}` (includes links to code/demo).
6) Recruiter submits contact form: `POST /api/v1/contact-messages` with name/email/message/consent.
7) Go validates, inserts into Postgres, triggers optional Telegram/email alert, returns 201 with request id.

### Happy-Path Outputs
- Projects list: 200 with `data`, `meta`, `request_id`.
- Contact submit: 201 with `id` of message, `request_id`.

### Alternate Paths
- Invalid email/consent -> 400 validation error with field details.
- Rate limit exceeded -> 429 with `Retry-After`.
- Project not found -> 404.

### Notes for Implementation
- Keep responses role-aware (hide shop/fun for recruiter unless explicitly requested).
- Log `request_id`, role, and endpoint for observability.
- Ensure form has basic spam protection (rate limit + honeypot/captcha if needed).
