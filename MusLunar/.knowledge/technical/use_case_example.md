# Use Case Example (Frontend)

## List projects by role/locale
- **Actor**: Visitor selects a role (recruiter/client/viewer) and locale.
- **Entry**: Landing page `(marketing)/page.tsx` renders projects section (using showcase module).
- **Flow**:
  1) Component calls `useProjects({ role, locale })` (client hook).
  2) Hook calls `modules/showcase/services/api.ts` -> `apiClient.get('/api/v1/projects', { params })`.
  3) Service returns typed `Project[]`; hook exposes `{data, isLoading, error}`.
  4) UI renders skeleton while loading; cards when data; empty state when none; error copy on failure.
- **Validation**: Role/locale normalized to lowercase before request.
- **Error Handling**: Axios interceptor maps backend error; UI shows friendly text and retry button.
- **Observability**: Use console debug only in dev; attach request_id if returned when showing support/debug info.

## Submit contact message
- **Actor**: Visitor submits contact form.
- **Flow**:
  1) Client component collects `name/email/role/message/consent`.
  2) Basic validation on client (required fields, email contains `@`, consent checked).
  3) Call `apiClient.post('/api/v1/contact-messages', payload)`.
  4) On success, show confirmation with returned `id`; on error, show inline error.
- **States**: Disabled submit during request; handle `400 validation_error` vs generic failure differently.
