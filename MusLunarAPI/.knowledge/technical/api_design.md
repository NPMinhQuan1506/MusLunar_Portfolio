# API Design and Error Handling

## 1. API Versioning
### Install package and library
- TODO: Add router/middleware dependencies if versioning helpers are needed (Echo core is already used).
### Configuration
- Base path uses `/api/v1`; bump major versions with `/api/v2` while keeping a deprecation window documented.
- Version should be discoverable in OpenAPI and responses (e.g., `X-API-Version`).
### Define versioned route in Controller
- Example (Echo):
  - `v1 := e.Group("/api/v1")`
  - `v1.GET("/projects", handler)`
### Reference
- Keep OpenAPI/Swagger spec in `docs` (TBD) and update alongside code.

## 2. Error Handling and Validation Strategy
To ensure consistency, maintainability, and clean controllers, the project adopts a centralized approach for validation and error handling.
### 2.1. Global Exception Handler
**Middleware**
- **Responsibility**: This middleware catches all unhandled errors in the request pipeline.
- **Behavior**: Maps known errors to typed responses (400/401/404) and maps unknown errors to `500 Internal Server Error` with a generic, non-revealing message in production.
- **Benefit**: This keeps controller actions free of try-catch blocks and focused on the happy path logic.
### 2.2. Request Validation
**Library**: `FluentValidation` is the standard for all request DTO validation.
Validation rules, including error codes (e.g., `ERR-XXX`), are defined within these validator classes.
**Benefit**: This decouples validation logic from DTOs (unlike data annotations), allows for more complex and testable validation rules, and centralizes validation logic.
