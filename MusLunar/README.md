# MusLunar (Frontend)

Next.js App Router scaffold aligned với Architecture.md: edge-hosted frontend, role-personalized UX, tiêu chuẩn Pragmatic Modular Monolith (modules by domain), Shadcn-ready UI layer, Zustand stores.

## Quickstart
1) `cd MusLunar`
2) `cp .env.example .env.local` và set `NEXT_PUBLIC_API_URL` trỏ về MusLunarAPI.
3) `npm install`
4) `npm run dev` (port 3000; deploy Vercel theo system design)

## Folder layout (rút gọn)
- `public/assets`, `public/models`: static assets + 3D models.
- `src/app/(marketing)`: landing/root route; role switch, projects, contact.
- `src/app/(shop)`: placeholder routes for shop/cart.
- `src/components/ui|layout|icons`: shared UI layer (Shadcn-ready).
- `src/modules/core`: auth/roles/theme/contact logic (Zustand).
- `src/modules/showcase`: portfolio projects (components/hooks/services/types).
- `src/modules/storytelling`: timeline/game state placeholder.
- `src/modules/commerce`: shop services placeholder.
- `src/lib`: axios client, constants, utils.

## Next steps
- Thêm Shadcn UI components vào `src/components/ui`.
- Kết nối commerce thực tế; thêm React Query providers ở `src/app/layout.tsx` nếu dùng.
- Bổ sung SEO/analytics per Architecture.md; tối ưu 3D vào `public/models`.
