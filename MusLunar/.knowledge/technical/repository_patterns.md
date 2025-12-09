# Data Fetching Patterns (Frontend)

## Overview
- Treat `lib/axios` + feature services as the single gateway for remote data.
- Keep response shaping (mapping, defaults) inside services/hooks, not in UI components.

## Implementation
- Services return typed data (e.g., `Project[]`) and let hooks manage loading/error states.
- For lists, support query params (role, locale) via options object; avoid building URLs inline.
- Centralize error message extraction (already in axios interceptor) to keep components lean.

## Performance
- Cache/reuse data with lightweight state (Zustand or React cache) when practical.
- Avoid duplicate requests by sharing hooks per page section; consider suspense/streaming when adding server data fetching.

## Error Handling
- Map network errors to user-friendly copy; log technical details in dev console only.
- Distinguish empty state vs error state in UI components.
