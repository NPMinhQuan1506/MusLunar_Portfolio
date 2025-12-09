# Dependency Injection and Flow

## Request Flow
- HTTP request enters Echo router -> middleware (logging, recovery) -> handler -> usecase -> repository -> domain models -> response DTO.

## DI Guidelines
- Construct dependencies in `cmd/api/main.go` (or a dedicated wiring package) and pass interfaces into usecases/handlers.
- Keep infrastructure implementations hidden behind interfaces to allow mocking in tests.
- Avoid global state/singletons; prefer explicit wiring.

## Notes
- For new services, define the interface in domain/usecase, implement in infrastructure, and inject into handlers via constructors.
