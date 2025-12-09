# Architecture Details

## 1. Layer Breakdown

### 1.1. Solution Structure Example
- `cmd`: entrypoints for API/worker/cron.
- `internal/interface`: inbound adapters (HTTP handlers/router/middleware).
- `internal/usecase`: application services/interactors orchestrating domain logic.
- `internal/domain`: domain models and interfaces only (no dependencies on other layers).
- `internal/infrastructure`: implementations (config, repositories, external services).

### 1.2. How it works in practice
- Request enters `interface/httpserver` -> routed to usecase -> uses repositories defined by domain interfaces -> returns DTOs to handler.
- Domain: Domain models and interfaces only (no dependencies on other layers).
- Infrastructure: concrete adapters (DB, cache, external APIs) implementing domain interfaces.
- Usecase: coordinates domain operations, enforces business rules, handles transactions.
