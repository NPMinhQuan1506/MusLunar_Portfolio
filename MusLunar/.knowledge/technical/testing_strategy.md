# Testing Strategy (Frontend)

## 1. Unit Tests
- Scope: Pure functions, hooks, and components with minimal dependencies.
- Location: Co-locate as `*.test.ts(x)` beside source.
- Tools: Recommended React Testing Library + Jest (to be added); keep DOM queries user-centric.
- Requirements: Cover render states (loading/empty/error/success) and props variations.

## 2. Integration/Component Tests
- Scope: Page/route-level behavior with data fetching mocked.
- Setup: Mock axios (`lib/axios`) or service functions; render via RTL with Next router mocks.
- Assertions: Correct API calls, correct rendering by role/locale filters, error messaging, and request_id handling if surfaced.

## 3. E2E (future)
- Tooling: Playwright/Cypress (TBD) hitting dev server + mock API or real staging API.
- Coverage: Navigation between routes, form submission for contact, cart/products placeholders when implemented.

## 4. Policy
- Every new feature should include at least unit coverage; integration where cross-component behavior matters.
- Keep tests deterministic; avoid network in unit/integration tests.
