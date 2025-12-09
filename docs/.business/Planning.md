
# MusLunar Portfolio Development Plan

## 1. Summary

**Goal:** Deliver a dual-personality, interactive portfolio (Dev + Designer) that integrates 3D storytelling, e-commerce, and gamification to convert visitors into clients/recruiters.

**Method:** Agile Iterative (Kanban)  
**Management Tool:** Notion  
**Team:** 1 Developer (Quan), 1 Designer (Nguyet)  
**Docs Completion:** 07/12/2025  
**Development Kick-off:** 08/12/2025 (Monday)

---

## 2. SDLC Method & Workflow

### Methodology: Agile-lite (Kanban)
We prioritize **speed and adaptability**. No rigid Sprints, but clear Milestones.

**Workflow States (Notion Board):**
1.  **To Do:** Defined tasks from Backlog.
2.  **Design:** Wireframe/UI/Assets creation.
3.  **Dev:** Implementation (FE/BE).
4.  **Review:** Deploy to Staging (Vercel Preview / VPS Test).
5.  **Done:** Merged to `main` & Live.

---

## 3. Detailed Roadmap & Phasing

### Phase 0: Preparation & Architecture (Today - 07/12/2025)
**Goal:** Clear the path for coding. No "guessing" during development.
-   [x] Finalize `ARCHITECTURE.md` (Hybrid: Vercel + VPS).
-   [x] Finalize `DB_SCHEMA.md` (Postgres tables).
-   [x] Finalize `API_SPECS.md` (Core endpoints).
-   [ ] **Infra Setup:**
    - [ ] Register CloudFly VPS & Install Docker/Nginx.
        CloudFly will register later because waiting for information from vietinix and will do it during the deployment phase
    - [X] Create Supabase Project & Get Connection String.
        Link: [MusLunar Portfolio](https://supabase.com/dashboard/project/rsjurhdfotkixjiiedws)
    - [X] Init GitHub Repo (Single Repo structure:frontend/,backend/,docs/).
        Link: [MusLunar Portfolio](https://github.com/NPMinhQuan1506/MusLunar_Portfolio)
---

### Sprint 1: The Core MVP (08/12/2025 – 31/12/2025)
**Goal:** A deployed "Dual-Protagonist" website with basic Role Selection and Contact capability.

#### **Week 1 (08/12 - 14/12): Skeleton & Foundation**
*   **Dev:**
    *   Init Next.js Project + Shadcn UI + Tailwind.
    *   Init Go Backend (Echo) + Sqlc + Clean Arch structure.
    *   Setup CI/CD (GitHub Actions) to deploy Hello World to VPS & Vercel.
*   **Design:**
    *   Finalize Avatars (Quan/Nguyet).
    *   UI for Landing (Role Selector) & Dual Home.

#### **Week 2 (15/12 - 21/12): The "Dual" Logic**
*   **Dev:**
    *   Implement **Role Selector** (Zustand State).
    *   Implement **Home Page** with Drag/Switch interaction (Framer Motion).
    *   Backend: Auth API (Guest/Recruiter login logic), Basic User Profile API.
*   **Design:**
    *   UI for Timeline (Static version).
    *   Assets for Project Cards.

#### **Week 3 (22/12 - 28/12): Content & Connection**
*   **Dev:**
    *   **Project Showcase:** List & Detail pages (Static data or Basic API).
    *   **Contact Form:** Connect to Backend -> Save to DB -> Send Telegram/Email.
    *   **Timeline (Basic):** Vertical list implementation (No 3D game yet).
*   **Design:**
    *   Social Banners, CV Layout.

#### **Week 4 (29/12 - 31/12): MVP Launch**
*   **All:**
    *   Content population (Real text, real projects).
    *   Mobile Responsiveness Check.
    *   **GO LIVE.**

---

### Sprint 2: Ecosystem & Gamification (01/01/2026 – 27/03/2026)
**Goal:** Add the "Wow" factor and Monetization.

*   **January:** **Commerce Module.**
    *   Shop UI, Cart Logic (Zustand), Backend Order processing.
    *   Google Drive integration for digital downloads.
*   **February:** **Storytelling Module.**
    *   Interactive 3D Timeline (R3F).
    *   Game logic (Unlock milestones).
*   **March:** **Expansion.**
    *   Blog System.
    *   Multi-language (VI/EN).
    *   AI Chatbot integration (Postgres Vector).

---

### Sprint 3: Admin Dashboard (CMS) (28/03/2026 – 30/04/2026)
**Goal:** Stop touching DB manually.
*   Build `/admin` route in Next.js.
*   CRUD Interface for Products, Blogs, Projects.
*   Analytics Dashboard.

---

## 4. Task Checklist (Technical Kick-off)

### 4.1. Infrastructure (07/12)
- [ ] Buy/Config VPS (CloudFly).
- [ ] Setup Docker & Nginx on VPS.
- [ ] Setup Supabase (Tables: `users`, `audit_logs`).
- [ ] Connect Domain (`muslunar.com` & `api.muslunar.com`).

### 4.2. Frontend Base (08/12 - 10/12)
- [ ] `npx create-next-app`
- [ ] Install Tailwind, Framer Motion, Zustand, React Query.
- [ ] Setup `src/modules` folder structure.
- [ ] Configure Shadcn UI components (Button, Input, Card).

### 4.3. Backend Base (08/12 - 10/12)
- [ ] `go mod init`
- [ ] Setup Echo Framework + Middlewares (CORS, Logger).
- [ ] Setup `internal/` structure (Clean Arch).
- [ ] Config `sqlc` for Postgres.

---

## 5. Workflow & Rituals

*   **Communication:** Telegram Group ("MusLunar War Room").
*   **Task Management:** Notion Board.
*   **Code Review:** Direct PR review (since it's a small team, focus on logic check).
*   **Deployment:**
    *   **Frontend:** Auto-deploy on push to `main` (Vercel).
    *   **Backend:** Auto-deploy via GitHub Actions (Docker -> VPS).

---

## 6. Risks & Mitigation

| Risk | Impact | Strategy |
| :--- | :--- | :--- |
| **Backend Go learning curve** | Medium | Use simple code first, optimize later. Stick to `sqlc`. |
| **VPS Out of Memory** | High | Limit Go container RAM. Offload Frontend to Vercel. |
| **Feature Creep** | High | **Strict MVP:** If it's not in Sprint 1 list, it moves to 2026. |

---

## 7. Milestones Summary

| Date | Event | Deliverable |
| :--- | :--- | :--- |
| **07/12/2025** | **Pre-Game** | Architecture, DB Schema, Infra Ready. |
| **08/12/2025** | **Kick-off** | Start Coding (Day 1). |
| **31/12/2025** | **MVP Launch** | Site Live (Home, Projects, Contact, Basic Auth). |
| **27/03/2026** | **Full Release** | Shop, 3D Game, Blog, AI. |
| **30/04/2026** | **Admin CMS** | Complete Management Dashboard. |
