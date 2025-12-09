# MusLunarAPI (Backend)

Clean-Architecture-aligned Go backend (Echo) matching Architecture.md: Go monolith behind nginx, REST v1, Supabase-ready.

## Project Layout
- `/cmd/api`: entrypoint only (load config, wire deps, start HTTP).
- `/internal/domain`: pure domain entities/errors (no HTTP/DB).
- `/internal/usecase`: interactors (business logic) that depend on domain + repository interfaces.
- `/internal/interface/httpserver`: adapters (Echo handlers/router, middleware wiring).
- `/internal/infrastructure`: implementations (config loader, in-memory repositories; replace with sqlc/Postgres).
- `/pkg`: reserved for shared libraries (none yet).

## Source tree
```text
MusLunarAPI/
|-- cmd/
|   `-- api/
|       `-- main.go                 # bootstrap API server
|-- internal/
|   |-- domain/
|   |   |-- contact/entity.go       # contact aggregate root
|   |   `-- project/                # project entity + errors
|   |       |-- entity.go
|   |       `-- errors.go
|   |-- infrastructure/
|   |   |-- config/config.go        # env/config loading
|   |   `-- repository/project_memory.go  # in-memory repo impl
|   |-- interface/httpserver/
|   |   |-- handlers.go             # Echo handlers/adapters
|   |   `-- router.go               # routes + middleware wiring
|   |-- usecase/
|       |-- contact/interactor.go   # contact usecase
|       `-- project/                # project usecases + DTO
|           |-- dto.go
|           `-- interactor.go
|-- .env.example
|-- go.mod
|-- go.sum
`-- README.md
```

## Features (scaffold)
- Health/version endpoints.
- Projects list/detail with role/locale filter (in-memory seed).
- Contact submission with validation and stubbed ID.

## Run Locally
1) Install Go 1.22+.
2) Install deps: `cd MusLunarAPI && go mod tidy` (generates `go.sum`).
3) Copy env: `cp .env.example .env` (optional; defaults are fine).
4) Start API: `go run ./cmd/api`.

## Endpoints
- `GET /healthz`
- `GET /version`
- `GET /api/v1/projects?role=recruiter&locale=en`
- `GET /api/v1/projects/:slug`
- `POST /api/v1/contact-messages` `{name,email,role,message,consent}`

## Next Steps to Match Full Architecture.md
- Replace memory repo with Postgres/Supabase via sqlc (`internal/infrastructure/repository` + `persistence`).
- Add auth/rate-limit middleware; mount behind nginx reverse proxy on VPS.
- Add worker entrypoints in `/cmd/worker` when background jobs appear.
