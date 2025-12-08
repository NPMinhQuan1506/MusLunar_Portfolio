# MusLunar Portfolio - API Specs (v1)

Base path: `/api/v1`

## Conventions
- JSON only; `application/json`.
- Auth: start unauthenticated; add bearer tokens for admin/dashboard later.
- Rate limit public POSTs (contact/order/ai) by IP + session.
- Errors: `{ "error": { "code": "string", "message": "string" } }`.

## Public Content
- `GET /projects` -> list (query: `role`, `locale`, `tag`, `status=published`).
- `GET /projects/:slug` -> detail.
- `GET /timeline` -> list entries (query: `role`, `locale`).
- `GET /blog` -> list (query: `locale`, `tag`); `GET /blog/:slug`.
- `GET /products` -> list published products; `GET /products/:slug`.

## Interactions
- `POST /contact`
  - Body: `{ name, email, role, message, consent, source }`.
  - Response: `{ id, created_at }`.
  - Notes: validate email/length; spam throttle.

- `POST /orders` (optional phase)
  - Body: `{ email, items: [{ product_id, quantity }], currency }`.
  - Response: `{ order_id, payment_intent_id }`.
  - Notes: prices resolved server-side; no client-trusted totals.

- `POST /ai/chat` (optional phase)
  - Body: `{ session_id?, locale, user_role, message, context? }`.
  - Response: `{ session_id, reply, meta }`.
  - Notes: strip PII, cap tokens/length, log trace id.

## Admin (later)
- `POST /admin/login` (if self-hosting auth).
- CRUD endpoints for `projects`, `blog_posts`, `products`, `timeline_entries`.
- `GET /orders` for fulfillment.

## Webhooks (optional)
- `/webhooks/payments` for Stripe/PayPal events.
- `/webhooks/email` for contact form delivery status (if provider supports).
