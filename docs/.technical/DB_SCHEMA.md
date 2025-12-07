# MusLunar Portfolio - DB Schema (Postgres/Supabase)

## Conventions
- Timestamps in UTC; soft delete via `deleted_at`.
- IDs: UUID (v4) for external-facing tables.
- Auditing: `created_at`, `updated_at`, `created_by`, `updated_by` where relevant.
- Localization: `locale` fields store `en`, `vi` (and future `ja`).

## Tables

### users
- `id` (uuid, pk), `email`, `name`, `role` (enum: visitor/recruiter/client/admin), `avatar_url`.
- `auth_provider` (email/oauth), `last_login_at`, `created_at`, `updated_at`.

### profiles
- `user_id` (fk users), `headline`, `bio`, `links` (jsonb), `preferences` (jsonb: theme, locale).

### projects
- `id` (uuid, pk), `slug` (unique), `title`, `summary`, `body` (markdown/mdx ref), `tags` (text[]).
- `role_focus` (enum: recruiter/client/visitor/mixed), `locale`, `status` (draft/published).
- `hero_image`, `media` (jsonb), `external_links` (jsonb), `published_at`, `created_at`, `updated_at`.

### timeline_entries
- `id` (uuid), `title`, `summary`, `content`, `role_focus`, `locale`, `order_index` (int), `media` (jsonb).

### blog_posts
- `id` (uuid), `slug`, `title`, `excerpt`, `body`, `tags` (text[]), `locale`, `status`, `published_at`.

### products
- `id` (uuid), `slug`, `name`, `description`, `price_cents`, `currency`, `kind` (digital/physical/service), `inventory` (int, nullable), `media` (jsonb), `status` (draft/published/archived).

### orders
- `id` (uuid), `user_id` (nullable for guest checkout), `email`, `line_items` (jsonb), `total_cents`, `currency`, `payment_status` (pending/paid/failed/refunded), `fulfillment_status` (pending/shipped/delivered/cancelled), `created_at`.

### contact_messages
- `id` (uuid), `name`, `email`, `role` (selector), `message`, `consent` (bool), `source` (page/utm), `created_at`.

### ai_sessions (optional)
- `id` (uuid), `session_id`, `user_id` (nullable), `locale`, `user_role`, `context` (jsonb), `created_at`.
- `ai_messages` child table: `id`, `session_id`, `sender` (user/ai), `content`, `tokens`, `created_at`.

### audit_logs
- `id` (uuid), `actor` (user_id or system), `action`, `entity`, `entity_id`, `meta` (jsonb), `created_at`.

## Views / Index Notes
- Index `slug` for projects/products/blog_posts.
- GIN indexes on jsonb arrays where filtered (e.g., tags).
- Partial index on `status = 'published'` for fast listings.
