# Repository Implementation Patterns

## Overview
- Use repositories to isolate data access behind interfaces; keep domain unaware of storage details.

## ORM Implementation Benefits
- Simplifies mapping and migrations; enforces schema via models.

### Performance & Maintainability Improvements
- Parameterized queries to avoid injection; reuse connections via pooling; measure with tracing/metrics.

## Repository Pattern Implementation
- Define repository interfaces in domain/usecase; implement in infrastructure (e.g., memory, Postgres via sqlc).

### ConnectionFactory Usage
- Centralize connection creation; share pooled connections across repositories.

### Query Organization
- Keep queries close to repository implementations; name queries by usecase intent.

### N+1 Query Prevention
- Prefer joined queries or prefetch strategies when returning aggregates; avoid per-row lookups.

## Performance Characteristics
- Capture latency metrics per repository method; budget allocations and DB round-trips.

## Error Handling Patterns
- Return typed errors; map to HTTP status codes at handler layer; wrap low-level errors with context.

### Nullable Return Types
- Return `(entity, bool)` or `(entity, error)` to distinguish not-found vs failure; avoid nil pointer ambiguity.
