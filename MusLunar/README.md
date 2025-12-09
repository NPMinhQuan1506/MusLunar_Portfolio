# MusLunar (Frontend)

Next.js App Router frontend (edge-ready), role-personalized UX, modular by domain (Pragmatic Modular Monolith), shadcn/ui ready, Zustand stores. See `docs/.technical/Architecture.md` for architecture details.

## Quickstart
1. `cd MusLunar`
2. `cp .env.example .env.local` and set `NEXT_PUBLIC_API_URL` to point at MusLunarAPI.
3. `npm install`
4. `npm run dev` (port 3000; deploy via Vercel per architecture docs)

## Source tree
```text
MusLunar/
|- public/
|  |- assets/                  # images/fonts/static
|  |- models/                  # 3D models (placeholder)
|- src/
|  |- app/
|  |  |- (marketing)/page.tsx  # landing page + sections
|  |  |- (shop)/
|  |  |  |- cart/page.tsx
|  |  |  |- products/page.tsx
|  |  |- globals.css
|  |  |- layout.tsx
|  |- components/
|  |  |- ui/                   # shadcn-ready primitives
|  |  |- layout/               # shared layout wrappers
|  |  |- icons/                # reusable icons
|  |- lib/
|  |  |- axios.ts              # axios client wrapper
|  |  |- constants.ts          # app-wide constants
|  |  |- utils.ts              # helper utilities
|  |- modules/                 # domain modules
|     |- core/
|     |  |- auth/              # auth placeholder
|     |  |- roles/roles-store.ts
|     |  |- theme/theme-store.ts
|     |  |- contact/contact-service.ts
|     |- showcase/             # portfolio projects
|     |  |- components/ProjectCard.tsx
|     |  |- hooks/use-projects.ts
|     |  |- services/api.ts
|     |  |- types.ts
|     |- storytelling/store.ts # timeline/game state placeholder
|     |- commerce/
|        |- services/api.ts    # shop API placeholder
|- next.config.ts
|- tsconfig.json
|- package.json
`- README.md
```

## Next steps
- Add shadcn/ui components into `src/components/ui`.
- Wire real commerce data and add React Query provider in `src/app/layout.tsx` if needed.
- Add SEO/analytics per `docs/.technical/Architecture.md`; drop 3D models into `public/models`.
