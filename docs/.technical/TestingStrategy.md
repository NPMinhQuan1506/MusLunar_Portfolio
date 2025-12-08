# MusLunar Portfolio - Testing Strategy

## Levels
- Unit: Go usecases, utilities; TS helpers/hooks/components (pure functions).
- Integration: HTTP handlers against test DB; React Query data fetching against mocked API.
- E2E: Playwright (or Cypress) for critical flows: landing -> role select -> projects -> contact submit.
- Regression/Smoke: after deploy, verify home, role switch, project list, contact form.
- Performance (optional): k6 or vegeta for top endpoints once traffic grows.

## Tooling
- Backend: `go test`, testify, sqlc fixtures; `staticcheck` for lint.
- Frontend: Vitest/RTL for components and hooks; Playwright for E2E.
- CI: run unit + integration on PR; E2E on main or nightly; smoke on deploy.

## Data and Fixtures
- Use seed SQL for integration tests; reset DB per test suite.
- Mock external services (Cloudinary/Drive) in tests; avoid network calls.

## Coverage Expectations
- Critical usecases and handlers covered; core UI states (loading/success/error) tested.
- Track failures in CI; do not block on percentage-only goals, focus on risk-based coverage.

## Reporting
- CI artifacts: test results, coverage where available.
- Fail fast; block merge on failing unit/integration; E2E failures reviewed before release.
