# MusLunar Portfolio - API Design

## Guiding Principles
- RESTful JSON APIs; consistent nouns (`projects`, `timeline`, `contact-messages`).
- Versioned in path (`/api/v1/...`); backward-compatible changes preferred.
- Auth: Bearer JWT where required; public read for portfolio lists, protected write for admin.
- Locale-aware via `Accept-Language` header; default `en`.
- Pagination: `?page=1&limit=20`; include `total` in response meta.
- Time in ISO8601 UTC; IDs are UUIDv4.

## Resource Sketch (v1)
- `GET /api/v1/projects?role=recruiter|client|viewer&locale=en|vi`
- `GET /api/v1/projects/{slug}`
- `GET /api/v1/timeline?role=...&locale=...`
- `POST /api/v1/contact-messages` (body: name, email, role, message, consent, source)
- `GET /api/v1/products` (if shop enabled)

## Response Shape
```json
{
  "data": [{ "id": "...", "title": "...", "role_focus": "recruiter" }],
  "meta": { "page": 1, "limit": 20, "total": 57 },
  "request_id": "uuid"
}
```

## Errors
```json
{
  "error": {
    "code": "validation_error",
    "message": "email is invalid",
    "details": { "email": "invalid format" }
  },
  "request_id": "uuid"
}
```
- Use standard HTTP status codes; 429 when rate limited; 401/403 for auth failures.

## Contracts and Docs
- OpenAPI/Swagger generated from Echo handlers and DTOs.
- DTOs shared as TypeScript types for frontend to prevent drift.

## Rate Limits and Idempotency
- Contact form: soft rate limit per IP/email (e.g., 10/minute); return 429 with `Retry-After`.
- Idempotency keys optional for future payment endpoints.

## Caching
- Public GETs: short CDN cache (60-300s) with `ETag`.
- Avoid caching personalized or admin responses.

## Observability
- Include `X-Request-ID`; log all requests with latency and outcome.
- Surface minimal technical error to clients; full stack in logs only.
