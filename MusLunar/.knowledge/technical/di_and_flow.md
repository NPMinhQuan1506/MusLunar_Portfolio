# Data Flow and Dependency Guidance

## Request/Data Flow
- Route component -> feature component -> hook/service -> `lib/axios` -> MusLunarAPI -> normalize data -> render UI.
- Global role/theme state via Zustand providers/hooks inside client components.

## DI / Abstraction Guidelines
- Centralize HTTP client in `lib/axios`; export helpers from feature services (e.g., `modules/showcase/services/api.ts`).
- Avoid embedding fetch logic in components; call service functions instead.
- Keep constants (endpoints, feature flags) in `lib/constants.ts` or module-level constants.

## Client/Server Boundaries
- Server Components should not access `window` or Zustand stores; wrap interactive blocks as Client Components.
- Pass data as props from parent server components to client children when possible.
