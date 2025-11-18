# Planning.md – MusLunar Portfolio

## 1. Summary

**Goal:** Deliver a dual-personality, interactive portfolio (dev + designer) that impresses, tells a story, and wins jobs/clients.

**Method:** Agile mini-Scrum + Kanban  
**Team:** 1 developer, 1 designer  
**Start:** 15/10/2025

---


## 2. SDLC Method & Workflow

## Development Methodology

### Agile-lite / Mini Scrum + Kanban (2 Sprints)

---

#### **Backlog (Major Features/Tasks)**

- Animated intro & micro storytelling
- Role selector (Recruiter, Client, Visitor)
- Dual-character home with drag-to-theme switch
- Timeline mini-game with milestones (role-based branching)
- Project/product list & detail (role-based filtering)
- Blog page (article list, visually appealing layout)
- Shop page (digital and handmade products)
- Contact page (form, CV download, social links)
- Multi-theme selector (universe switcher)
- Multi-language support
- AI chatbot/agent for guide & Q&A
- Smooth animations, dynamic UI/UX
- Responsive design, SEO, accessibility
- All visual assets (avatars, icons, banners, project images)
- Prepare story scripts and branching content
- **Admin / Settings Page (CMS-lite):**  
  - Secure login/dashboard  
  - CRUD for all content (profile, projects, blog, shop, etc.)  
  - Live site configuration (themes, language, chatbot, etc.)  
  - Analytics and stats (optional)
---

#### **Sprint 1: MVP Delivery**

_Timeline: 15/10/2025 – 15/12/2025_

- **Goal:** Deliver MVP with all core features  
  (Animated intro, role selector, dual home, basic timeline, contact page)
- Focus on top-priority tasks from backlog
- Manage workflow on Kanban board: **Backlog → Doing → Review → Done**
- Developer & Designer work in parallel, cross-review each module
- Weekly short check-in (15–30 min): update progress, resolve blockers, ensure early working prototype

---

#### **Sprint 2: Full Feature & Polish**

_Timeline: 16/12/2025 – 27/03/2026_

- **Goal:** Complete all advanced features and polish UI/UX  
  (Full role branching, advanced timeline, shop, blog, multi-theme, multi-language, advanced animation, AI chatbot)
- Continue working through the remaining backlog items, ongoing review and optimization
- Optimize, bugfix, and expand documentation
- Prepare for launch, collect user feedback, iterate & update

---

### Sprint 3: Admin/Config Page (CMS-lite, Content/Settings Management)

- **Timeline:** 28/03/2026 – 30/04/2026

- **Goal:**  
  Build a secure admin dashboard for easy content and settings management (profile, projects, blog, shop, themes, chatbot data, etc.)

- **Deliverables:**
    - Admin login/authentication page
    - Dashboard UI
    - CRUD functionality for all main content (profile, projects, blog posts, shop items, etc.)
    - Live site configuration (themes, chatbot, language, etc.)
    - Analytics/usage stats (optional)

---

#### **Working Rhythm**

- Weekly short check-in (30 minutes per week, online or offline)
- Mid-week design/dev hand-off and feedback via chat
- Continuous Kanban board update
- Always prioritize “working prototype early”, then iterate and improve

---

```mermaid
flowchart TD
    A[Planning:<br>Clarify vision, persona, workflow,<br>set scope & milestones] --> 
    B[Requirements:<br>Detail features, userflow,<br>use case scenarios, style guide] --> 
    C[Design:<br>Wireframe, UI/UX, prototype,<br>final asset prep, theme] -->
    D[Implementation:<br>Build MVP (Home, timeline, projects),<br>add advanced features, test] --> 
    E[Testing:<br>Review, cross-device test,<br>bugfix, user feedback] -->
    F[Deployment:<br>Live deploy, domain, analytics] --> 
    G[Maintenance:<br>Promote, update, collect feedback, iterate]
```
---
## 3. Milestones

| Stage              | Target Date   | Deliverables                                                           | Owner      |
|--------------------|--------------|------------------------------------------------------------------------|------------|
| Kick-off/Planning  | 15/10/2025   | Requirements.md, userflow, workflow, wireframe                         | All        |
| Design/Asset Prep  | 15/10/2025   | Figma prototype, visual assets, theme guide                            | Designer   |
| MVP Release        | 15/12/2025   | Animated intro, role select, dual home, timeline (basic), contact      | Dev/Des    |
| Full Feature       | 27/03/2026   | All role branches, project detail, shop, blog, multi-theme/lang, AI chatbot | Dev/Des    |
| **Admin/Config Page** | **30/04/2026** | **Admin dashboard (CMS-lite), content/settings management** | **Dev**    |
| Public Launch      | 01/05/2026   | Live, announce, collect feedback                                       | All        |

---

## 4. Task Checklist

- [ ] Clarify purpose, target user, dual-character brand
- [ ] Draft user journey, usecase flow (from Requirements.md)
- [ ] Sketch & confirm all sections (Home, Timeline, Project, Blog, Shop, Contact)
- [ ] Write/prepare story script for intro, timeline, branching
- [ ] Design UI/UX for every state/role (Figma/Excalidraw)
- [ ] Prepare all visual assets (avatars, icons, banners, milestones, project images)
- [ ] Set up project repo, Kanban board
- [ ] Code Home page (dual character drag/switch)
- [ ] Code role selector & story-telling intro
- [ ] Implement timeline mini-game (role-based path)
- [ ] Build project/product section (role-based filter)
- [ ] Implement blog & shop pages
- [ ] Add multi-theme & multi-language support
- [ ] Add AI chatbot/agent feature
- [ ] Test across devices/browsers, fix bugs
- [ ] Setup SEO, analytics, deploy to Vercel/Netlify
- [ ] Launch & announce on social channels
- [ ] Collect feedback, iterate, update
...

- [ ] Design and build **Admin / Settings Page**:
    - [ ] Secure admin login/authentication
    - [ ] Create dashboard UI for managing site content and settings
    - [ ] CRUD for profile, projects, blog posts, shop items
    - [ ] Theme/universe and language configuration management
    - [ ] Update chatbot/AI agent content
    - [ ] Analytics/stats display (optional)
    - [ ] Test admin functions for security and usability
---

## 5. Workflow / Responsibility

- **Dev:** App logic, interactive/animation, timeline, project/shop logic, multi-theme/lang, chatbot integration, deploy
- **Designer:** UI/UX, character art, theme illustration, storyboarding, animation assets, review all states
- **Review:** Cross-review all sections, pair programming where needed

---

## 6. Weekly Rhythm

- Quick weekly meeting (30 mins, online/offline)
- Board update, assign new priorities
- Mid-week check-in via chat, design hand-off, feedback loop

---

## 7. Risk & Adaptation

- Buffer for technical/design blockers (1 week per major phase)
- Weekly review: re-prioritize features if blocked
- Collect user feedback for improvement after MVP launch
