# Architecture Details

## 1. Layer Breakdown (Next.js App Router)
- `src/app`: routes/layouts; uses React Server Components by default, Client Components where needed (stateful/UI interactions).
- `src/components`: shared UI primitives (ui/layout/icons), shadcn-ready but minimal scaffold now.
- `src/modules`: domain-oriented features (core, showcase, storytelling, commerce) grouping components/hooks/services.
- `src/lib`: cross-cutting utilities (axios client, constants, utils).

## 2. Flow in practice
- Route (e.g., `(marketing)/page.tsx`) composes feature components.
- Feature component uses hooks/services from its module (e.g., `modules/showcase/hooks/use-projects`).
- Services call API via `lib/axios` and return typed data; hooks manage loading/error/state.
- Zustand stores (core/roles, core/theme) provide global reactive state for role/theme.

## 3. Rendering Model
- Prefer Server Components for static/SEO sections; mark interactive pieces with `'use client'`.
- Defer heavy logic to client hooks to keep SSR fast; guard browser-only APIs.

## 4. Styling/Design System
- Currently using global CSS; ready for shadcn/ui integration under `components/ui`.
- Keep design tokens/utilities centralized when added; avoid scattered inline styles for reusable patterns.

## 5. Data Boundaries
- All HTTP calls go through `lib/axios`. Do not fetch directly in random components.
- Keep module boundaries: showcase (portfolio data), core (roles/theme/contact), commerce/storytelling (placeholders).
