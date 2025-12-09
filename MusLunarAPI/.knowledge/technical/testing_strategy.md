# Testing Strategy

To ensure code quality, reliability, and maintainability, the project adheres to a comprehensive testing strategy.

## 1. Unit Tests
- **Scope**: Focus on a single unit of work (function or method) in isolation from dependencies.
- **Location**: Co-located `_test.go` files near the code under test.
- **Frameworks**: Go testing package; testify for assertions/mocks if needed.
- **Requirements**: Cover happy path, edge cases, and error handling. Validate that domain errors are preserved (`ErrNotFound`).
- **Examples**: `usecase/project` with mocked repository; `usecase/contact` validation paths; utility functions in `infrastructure/config`.

## 2. Integration Tests
- **Scope**: Verify that multiple components work together (handler -> usecase -> repository).
- **Setup**: Spin up Echo router with in-memory repositories; seed data fixtures; exercise HTTP via `httptest`.
- **Assertions**: Status codes, JSON schema fields, request_id present, and filtering logic (role/locale).
- **Data**: Keep fixtures minimal and deterministic.

## 3. Contract / Behavior Tests (optional)
- When adding breaking changes, pin responses with golden files or OpenAPI examples.

## 4. General Policy
- All new features and bug fixes must be accompanied by relevant unit and/or integration tests.
- Pull requests without adequate testing may be rejected during review.
- CI (TBD) should run `go test ./...` and report coverage; aim for meaningful coverage on usecases and handlers.
