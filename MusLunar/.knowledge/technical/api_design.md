# Frontend API Consumption and Error Handling

## 1. API Versioning
### Install package and library
- Axios already included via `src/lib/axios.ts`.
### Configuration
- Base URL from `NEXT_PUBLIC_API_URL` (defaults to `http://localhost:8080`).
- Backend versioning via path (`/api/v1/...`); frontend should call versioned routes explicitly.
### Define versioned route usage
- Example: `apiClient.get('/api/v1/projects', { params: { role, locale } })`.
- Detail fetch: `apiClient.get(`/api/v1/projects/${slug}`)`.
### Reference
- Keep alignment with MusLunarAPI README endpoints; update when backend introduces new versions.

## 2. Error Handling and Validation Strategy
To keep UI clean and predictable, centralize network error handling.
### 2.1. Global Error Mapping
- `src/lib/axios.ts` interceptor unwraps backend payload `error.message` and throws `Error` with readable message.
- UI surfaces errors via toasts/inline states; avoid generic alerts.
### 2.2. Request Validation (client-side)
- Validate inputs before calling API (e.g., email format, consent checkbox) to reduce 400s.
- Keep schemas/hooks close to feature module (e.g., `modules/core/contact`).
### 2.3. Loading/Retry Patterns
- Show skeletons or spinners for project lists; allow manual retry on failure.
- Avoid silent failures; log to console only in dev, show user-friendly message in prod.
