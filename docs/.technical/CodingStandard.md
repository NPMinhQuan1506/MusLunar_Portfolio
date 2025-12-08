# MusLunar Portfolio - Coding Standard

## General
- ASCII-only text; UTF-8 files; avoid smart quotes.
- Lint/format mandatory: `eslint --fix` + `prettier` for frontend, `gofmt` for Go.
- Small, focused PRs with clear commits; meaningful messages (feat/fix/chore/docs/test).

## TypeScript/Next.js
- Use TypeScript everywhere; no `any` unless justified with comment.
- Components: function components with hooks; keep presentational vs container separation minimal but clear.
- State: prefer Zustand for global (theme/role/cart), React Query for server state.
- Styling: Tailwind utility-first; avoid deep nesting; use design tokens where possible.
- Accessibility: proper semantic tags, `aria-*`, keyboard focus; no div-only buttons.
- Error handling: guard async calls, show user-safe messages, log to console only in dev.

## Go (Backend)
- Format with `gofmt`; `staticcheck` where available.
- Package layout per module: `internal/<module>/{delivery,usecase,repository}`.
- Dependency Injection via Google Wire for construction; avoid global state.
- Error handling: wrap with context (`fmt.Errorf("op: %w", err)`); log at boundary, return typed errors to delivery layer.
- Context: accept `context.Context` in public funcs; respect cancellation/timeouts.
- DTOs vs Entities: keep transport structs in delivery; domain models in usecase.

## Testing Expectations
- Unit tests for usecase logic (Go), utilities/hooks (TS).
- Integration tests for handlers hitting a test DB or stubbed repo.
- E2E/Playwright for critical flows: landing -> role select -> projects -> contact.

## Documentation and Comments
- Keep comments for non-obvious logic or business rules; avoid restating code.
- Update README/Architecture docs when adding new modules/endpoints.
