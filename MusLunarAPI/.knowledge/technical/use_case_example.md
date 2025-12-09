# Use Case Example

## Submit contact message (end-to-end)
- **Actor**: Visitor fills contact form on MusLunar frontend.
- **Entry**: `POST /api/v1/contact-messages` with JSON payload `{name,email,role,message,consent}`.
- **Flow**:
  1) Echo router maps to `handleSubmitContact`.
  2) Handler binds JSON -> `contactRequest`, basic bad-body check.
  3) Handler calls `contactUC.Submit(domain.Message{...})`.
  4) Usecase validates required fields and consent; returns typed error on failure.
  5) On success, usecase returns generated ID (random hex for now).
  6) Handler responds `201` with `{id, request_id}`.
- **Validation Rules**:
  - `name` non-empty; `email` must contain `@`; `consent` must be true.
  - Future: stronger email regex, role allowlist, message length caps.
- **Error Mapping**:
  - Bind error -> `400 invalid_body`.
  - Validation error -> `400 validation_error` with message.
  - Unexpected -> `500` generic message (add middleware later).
- **Data Persistence**: Currently none (stubbed ID); future: write to repository/queue and audit log.
- **Observability**: Echo request ID header is echoed in response for tracing; log on handler entry/exit (to be added).
