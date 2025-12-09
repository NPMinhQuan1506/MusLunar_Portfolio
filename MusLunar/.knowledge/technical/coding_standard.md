# Coding Standard (Frontend: Next.js/React/TS)

## 1. General Principles
- Follow modular structure: routes in `src/app`, shared UI in `src/components`, domain features in `src/modules`.
- Keep components small and composable; prefer pure components with props over global state.
- Use TypeScript everywhere; keep types close to modules (e.g., `modules/showcase/types.ts`).

## 2. Project Structure & Layering
- App Router handles routing/layout; feature logic lives in `modules/*` services/hooks; shared utilities live in `lib`.
- Avoid cross-module imports unless via shared abstractions; keep UI primitives in `components/ui`.

## 3. Naming Conventions
- Components/React files PascalCase (`ProjectCard.tsx`); hooks `useX`; stores `something-store.ts`.
- Routes use folder-based names; dynamic segments `route/[param]/page.tsx` when added.
- State stores (Zustand) named `<feature>-store` with selector hooks `useFeatureStore`.
- Files in `components/ui` should match component name; icons lowercase-kebab if many.
- Endpoint paths follow REST (see api_design); avoid verbs in paths.

## 4. File & Folder Organization
- One main component/hook per file when possible.
- Group by feature under `modules/<feature>/{components,hooks,services,types}`.
- Keep client-specific components marked with `'use client'` at top.

## 5. Next.js/React Features
- Use Server Components by default; add `'use client'` only when state/effect is needed.
- Use `useEffect` sparingly; prefer server data fetch or static props where possible.
- Handle errors with UI fallbacks; leverage streaming/suspense when adding data fetching.
- Keep environment access via `process.env.NEXT_PUBLIC_*` only on client.

## 6. Testing Conventions (future)
- Prefer React Testing Library for components and Playwright for e2e (to be added).
- Co-locate tests under the same directory with `.test.tsx`/`.spec.tsx` suffix.
