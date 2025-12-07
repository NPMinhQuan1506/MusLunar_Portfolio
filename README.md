# MusLunar Portfolio

A gamified, story-driven, and fully personalized portfolio website for [Quan Nguyen] & [Nguyet Nguyen] - built to impress, inspire, and connect.

---

## Purpose

- Showcase both developer (logic, product mindset) and designer (creativity, visual art) as dual protagonists
- Attract recruiters, clients, and like-minded peers through interactive storytelling and advanced UI/UX
- Build a personal brand and open up new career, freelance, and partnership opportunities

---

## User Journey Highlights

- Animated intro with micro-story: invites users to choose their role (`Recruiter`, `Client`, `Visitor`)
- Home: Dual-character design - drag to focus on Quan (tech/logic) or Nguyet (art/design), or blend both
- Timeline mini-game: Users explore a career/story timeline with milestones, branching by role
- Project/Product: Dynamic list and detail, filtered by user role (job-fit, business, creativity)
- Blog: Articles and insights, beautiful and readable
- Shop: Order digital products or handmade art
- Contact: Quick connect form, download CV, social links
- Universe/Theme switch: Pixel, prehistoric, futuristic, dark, and more
- AI chatbot/guide: Navigate, answer questions, tell extra stories
- Multilingual: English, Vietnamese, (optionally Japanese)

---

## Main Features (scope)

- Animated storytelling intro and role selector for tailored user flow
- Dual-character home with drag-and-switch theme
- Interactive timeline/mini-game with milestone events
- Project/product showcase with filters by user type
- Blog and shop modules
- Dynamic multi-theme and universe switch
- Multilingual support
- AI chatbot/guide for navigation and story
- Fully responsive, SEO-friendly, and accessible

---

## Timeline & Planning

- **Docs Completion:** 07/12/2025
- **Dev Kick-off:** 08/12/2025 (Monday)
- **MVP Release:** 31/12/2025
- **Full Release:** 27/03/2026
- **Admin CMS:** 30/04/2026

Method: Agile-lite (Kanban on Notion). See [Planning.md](./docs/.business/Planning.md) for details.

---

## Demo

[https://muslunar.com](https://muslunar.com)

---

## Tech Stack

- **Frontend:** React (Next.js), TailwindCSS, Framer Motion
- **Backend:** Go (Echo) via Docker on VPS (API, auth, contact/shop/AI proxy)
- **Data:** Supabase/Postgres (schema in `DB_SCHEMA.md`)
- **Hosting:** Vercel (FE) + VPS (CloudFly) with Nginx reverse proxy
- **Tools:** Figma (UI/UX), Notion (tasks/docs), Excalidraw/Mermaid (diagram), AI (content/gen)

---

## Process & Collaboration

- **SDLC tracking:** Trello board (Kanban: Backlog -> Ready -> In Progress -> In Review -> Done) with sprint labels, or GitHub Projects if you want to stay repo-centric.
- **Communication:** Slack/Discord channels (`#general`, `#design`, `#dev`), short async updates, and a weekly 30-minute standup.
- **Design handoff:** Figma files linked in tasks; track approvals in Trello/GitHub Projects to keep design and dev in sync.

---

## Authors

- **Quan Nguyen** - Developer
- **Nguyet Nguyen** - Designer

---

## Documentation

### Business & Requirements
- [Planning.md](./docs/.business/Planning.md)
- [Requirements.md](./docs/.business/Requirements.md)
- [Questionare.md](./docs/.business/Questionare.md)
- [Role_based_ux.md](./docs/.business/Role_based_ux.md)

### Agile & Scrum
- [ProjectCharter.md](./docs/.agileScrum/1.%20ProjectCharter.md)
- [Definition_of_Ready.md](./docs/.agileScrum/2.%20Definition_of_Ready.md)
- [Definition_of_Done.md](./docs/.agileScrum/3.%20Definition_of_Done.md)
- [RTM.md](./docs/.agileScrum/4.%20RTM.md)
- [KPIs_Summary.md](./docs/.agileScrum/5.%20KPIs_Summary.md)
- [Agile_Overview.md](./docs/.agileScrum/6.%20Agile_Overview.md)
- [Kanban_Workflow.md](./docs/.agileScrum/7.%20Kanban_Workflow.md)

### Technical (status)
- [Architecture.md](./docs/.technical/Architecture.md)
- [DB_SCHEMA.md](./docs/.technical/DB_SCHEMA.md)
- [API_SPECS.md](./docs/.technical/API_SPECS.md)
- [Infrastructure.md](./docs/.technical/Infrastructure.md)
- [Deployment.md](./docs/.technical/Deployment.md)
- Design.md *(missing: UI system, flows, component inventory, animation rules, accessibility)*

### General
- [FAQ.md](./docs/FAQ.md)
- [sumary.md](./sumary.md) (all docs concatenated)

---

> MusLunar Portfolio is not just a CV - it's a creative playground, a dual-brand metaverse, and an ongoing story of two passionate makers.
