# Coding Standard for project (Go/Echo)

## 1. General Principles
- Follow Clean Architecture: strict separation of interface, usecase, domain, infrastructure.
- Domain-Driven Design (DDD): model core business logic in the domain layer using ubiquitous language.
- SOLID Principles: keep components cohesive and decoupled.
- Testability: favor dependency injection and interfaces; mock at boundaries.
- Single Responsibility: each file/type has one clear job.

## 2. Project Structure & Layering
- Interface -> Usecase -> Domain is the dependency direction; infrastructure implements domain interfaces.
- No cross-layer dependencies except through interfaces/contracts.

## 3. Naming Conventions
- Go style: packages ngắn, lowercase, không underscores; files lower_snake_case khi cần.
- Types/structs PascalCase; methods PascalCase for exported, camelCase for unexported.
- Interfaces mô tả capability (e.g., `ProjectRepository`), impl phản ánh backend (e.g., `MemoryProjectRepository`).
- HTTP handler functions: `handleX`, grouping trong struct `HTTPServer`; DTOs kết thúc bằng `Request`/`Response`.
- Endpoint/path theo RESTful: danh từ số nhiều, phiên bản rõ `"/api/v1/projects"`; dùng slug/ID `"/api/v1/projects/:slug"`. Tránh verb trong path (`/create`), thay vào verb HTTP.

### REST Endpoint Naming
- Base: `"/api/v{n}/"`; resources là danh từ số nhiều (`projects`, `contact-messages`).
- Lấy chi tiết: `GET /api/v1/projects/:slug`.
- Tạo mới: `POST /api/v1/contact-messages` (không thêm `/create`).
- Bộ lọc dùng query params: `/api/v1/projects?role=recruiter&locale=en`.
- Hành động con (nếu có) dùng sub-resource: `/api/v1/projects/:slug/comments`.

## 4. File & Folder Organization
- One primary type per file when practical.
- Group by feature/domain under `internal/<layer>/<feature>`.
- Keep DTOs close to usecases; keep adapters close to interface layer.

## 5. Go and Echo Features
- Target modern Go (1.22+); use generics and contexts where appropriate.
- Use Echo middleware for recovery, logging, and request ID; prefer structured logging.
- Prefer `errors.Is/As` for error handling and wrap with context.

## 6. C# 12/.NET 8 Features (reference if cross-stack work is needed)
- Use file-scoped namespaces and record types for immutable DTOs/entities.
- Prefer async/await for I/O-bound operations.
- Use modern features (pattern matching, collection expressions) for clarity when working in .NET adjuncts.
