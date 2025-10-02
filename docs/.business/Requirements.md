# MusLunar Portfolio Requirements
---
## 1. Vision and Motivation

### 1.1 Identifying Needs
- **Core problem:** There is no owned channel to tell the MusLunar story, showcase paired developer and designer skills, or convert visitors into clients and recruiters.
- **True needs:** Deliver a personal storytelling site; attract recruiters for high-value roles; win freelance clients with proof of capability; express a distinctive dual-persona brand with 3D, AI, and multiverse styling; highlight both developer and designer contributions equally.
- **Primary stakeholders:** Quan (developer), Nguyet (designer), family members who rely on future income, and potential collaborators.

### 1.2 Goals and Success Criteria
- **Ultimate goal:** Impress and convert viewers (recruiters, clients, peers) by clearly communicating who we are, what we do, and why it matters.
- **Why it matters:** Direct impact on income growth, career trajectory, and long-term happiness.
- **Success metrics:** Unique visitors; engagement rate (time on site, interactions); shares and referrals; first freelance contract worth ~20M VND; inbound interview requests.
- **Timeline:** Kick-off 27/09/2025; MVP online 10/11/2025; full feature set 27/03/2026; public launch 28/03/2026; admin suite by 30/04/2026.
- **Who notices success:** Family, community, recruiters, clients, creative peers.

### 1.3 Motivation and Values
- **Why we pursue it:** Prove capabilities, build a lasting personal brand, unlock dream jobs and freelance engagements, and lay groundwork for future ventures.
- **Life impact:** More earning channels, goal fulfilment, stronger confidence.
- **Value alignment:** Resonates with personal values around creativity, discipline, and shared partnership; inspired by family and mutual support.
- **Motivation profile:** Balanced mix of intrinsic passion and external accountability, backed by full commitment.

### 1.4 Commitment and Resources
- **Time investment:** ~9 hours per week (weeknights and weekends).
- **Financial investment:** 3M VND per year with intent to grow revenue to cover costs.
- **Support system:** 1 developer, 1 designer, AI tools, online communities.
- **Start date:** 27/09/2025 with self-imposed accountability (50K VND penalty per missed day).
- **Feasibility:** 60% resource confidence but high determination to close gaps.

### 1.5 Long-term Impact
- **Future pathway:** Establishes a platform for new products, career expansion, and brand-driven opportunities.
- **Post-launch plan:** Continuous content updates, new projects, refreshed storytelling, evolving visual themes.
- **Extended beneficiaries:** Family and partner gain alternative income streams and professional visibility.
- **Sustainability:** Yes, ongoing value through maintenance and iteration.
- **Opportunity creation:** Unlocks new roles, freelance gigs, and business prospects.

### 1.6 Cost, Risk, and Benefit Analysis
- **Direct costs:** 3-5M VND/year for hosting, domains, and services.
- **Time cost:** 432 hours/year (9h x 48 weeks) with 60-86M VND opportunity cost.
- **Key risks:** Low traffic; misaligned positioning; strong competition; sunk cost if direction falters.
- **Benefit scenarios:** Average, 46M VND/year (1 freelance + salary lift); Outstanding, 50-150M VND/year plus brand equity; Worst case, skills and experience only, reusable next cycle.
- **Conclusion:** Long-term benefits outweigh risks; breaking even within year one is realistic with disciplined execution.

---
## 2. Product Scope and Experience Principles

### 2.1 Product Vision
- Deliver a dual-protagonist, gamified portfolio that merges technology and art, adapts to audience roles, and feels like a living story rather than a static CV.
- Combine premium UX, narrative depth, and measurable conversion paths for both careers and business.

### 2.2 Audience Roles
| Role | Primary Objective | Critical Content |
| ---- | ----------------- | ---------------- |
| Recruiter | Validate skills, experience, credibility quickly. | Bio, skills matrix, timeline, flagship projects, CV. |
| Client | Assess team fit, services, proofs, and next steps. | Team profile, services, case studies, pricing, testimonials, contact. |
| Visitor | Explore the MusLunar universe, enjoy storytelling. | Dual home, timeline, blog, shop, art, theme play. |

### 2.3 Experience Principles
- Personalization first: choose role once, adapt content everywhere, allow seamless switching.
- Duality without confusion: honour both personas yet keep navigation frictionless.
- Show, do not tell: rich visuals, interactive storytelling, data-backed achievements.
- Conversion clarity: every page surfaces the most relevant CTA per role.
- Maintainability: all dynamic content manageable through admin without code.

### 2.4 Core Workflow
- Landing animation -> Role selection -> Role-specific home -> Timeline mini-game -> Projects/Blog/Shop -> Contact/Conversion.
- Cross-cutting layers: theme switcher, language toggle, AI guide, analytics, admin dashboard.

---
## 3. Page-Level and System Requirements

### 3.1 Landing and Role Selector
- **Purpose & KPIs:** Clarify value proposition within 5 seconds; drive >=80% role selections; monitor bounce rate.
- **Primary roles:** Recruiter, Client, Visitor (defaults to Viewer if no choice).
- **Core content & modules:** Animated intro, dual-character reveal, mission statement, role cards with micro-copy, skip/auto-detect fallback.
- **Interactions & states:** Animation sequencing <8 seconds with ability to skip; role choice persists via localStorage/session; keyboard-accessible controls.
- **Data & CMS:** Manage hero copy, background media, role labels, microcopy, analytics events.
- **Technical & QA:** Lazy-load heavy assets, ensure animation degrades gracefully, test storage persistence and SSR hydration.

### 3.2 Global Navigation and Role Switcher
- **Purpose & KPIs:** Keep primary sections one click away; role switches complete <1 second; zero dead links.
- **Core content & modules:** Sticky top bar (logo, nav, theme toggle, language toggle, role pill, CTA), mobile drawer, breadcrumb hints in subpages.
- **Interactions & states:** Role switch reveals snackbar confirmation; nav adapts options per role; responsive layouts for touch and keyboard navigation.
- **Technical & QA:** Implement global state store for role/theme/lang; ensure accessibility roles/ARIA; analytics for nav interactions.

### 3.3 Home (Dual Protagonist Hub)
- **Purpose & KPIs:** Communicate MusLunar identity; encourage deeper exploration (CTR >=60% to next section); highlight both personas.
- **Core content & modules:** Hero split view, drag-to-focus slider, persona spotlight cards (bio, quick stats, signature project), testimonials carousel, CTA tiles.
- **Interactions & states:** Drag and click toggles; role-specific emphasis (Recruiter sees achievements, Client sees services, Visitor sees story); blend mode fuses visuals.
- **Data & CMS:** Persona bios, stats, featured media, quotes maintained via admin.
- **Technical & QA:** Smooth 60fps animations, fallback vertical stack, test on touch devices, ensure stat numbers animate once per session.

### 3.4 Timeline and Story Mode
- **Purpose & KPIs:** Showcase growth journey; track completion rate; differentiate by role context.
- **Core content & modules:** Map-style timeline/mini-game, milestones with media, branching paths per role, progress indicator, callouts for locked alternate paths.
- **Interactions & states:** Hover/tap reveals detail card; keyboard navigation; save role path progress optionally; visitors can peek other role glimpses with teasers.
- **Data & CMS:** Milestone schema (title, year, role tag, narrative, media, KPI), ordering, unlock rules.
- **Technical & QA:** Use Framer Motion or Canvas-based animation; degrade to list view; ensure performance on mobile; analytics for milestone views.

### 3.5 Projects and Case Studies
- **Purpose & KPIs:** Convert interest into credibility; target >=40% clickthrough to detail pages.
- **Core content & modules:** Filterable project grid, highlight badges (role fit, industry), persona-aligned tags, pagination or infinite scroll, testimonials.
- **Interactions & states:** Role auto-filter; manual filter override; quick preview modal; sort by impact or recency; empty state messaging.
- **Data & CMS:** Project entries (slug, summary, role audience, problem, solution, result metrics, tech/tools, media, testimonials, CTA links).
- **Technical & QA:** Responsive cards, lazy-load media, track filter usage, ensure accessible focus order.

### 3.6 Project Detail Template
- **Purpose & KPIs:** Provide in-depth proof; maintain bounce <30%; add "Next project" navigation.
- **Core content & modules:** Hero (title, role badges, KPIs), challenge/solution/result sections, gallery, process timeline, contributions, download assets.
- **Interactions & states:** Role-specific highlights (Recruiter sees team/tech stack, Client sees outcomes/pricing), share buttons, optional embedded prototype.
- **Data & CMS:** Structured fields for metrics, attachments, collaborator credits.
- **Technical & QA:** Support markdown-rich text, alt text for images, print-friendly layout.

### 3.7 Blog and Insights
- **Purpose & KPIs:** Build thought leadership; drive newsletter sign-ups and session length.
- **Core content & modules:** Article list with filters (topic, role relevance), featured posts, tag cloud, newsletter CTA, reading time estimation.
- **Interactions & states:** Role preference surfaces curated feed; article detail shows breadcrumbs, related posts, audio version placeholder.
- **Data & CMS:** Posts (title, summary, cover, role tags, categories, SEO metadata, publish state).
- **Technical & QA:** Markdown/MDX support, SEO schema, comments optional (deferred), social sharing metadata, offline reading caching.

### 3.8 Shop and Offers
- **Purpose & KPIs:** Generate revenue; track add-to-cart rate and completed inquiries.
- **Core content & modules:** Product catalog segmented (digital, handmade), limited-offer banners, pricing tiers, trust indicators, FAQs.
- **Interactions & states:** Role-specific default view (clients see service packages, visitors see merch); cart or inquiry flow; integrate payment or email follow-up; stock states.
- **Data & CMS:** Product inventory (type, price, files, shipping info), availability, upsell bundles.
- **Technical & QA:** Payment integration (Stripe/PayPal or email-based invoice), secure download handling, currency display, legal policies.

### 3.9 Contact and Conversion Hub
- **Purpose & KPIs:** Facilitate outreach; monitor form completion (>=15%), CV downloads, calendar bookings.
- **Core content & modules:** Contact form (role-driven dynamic fields), CV download, social links, map/timezone, meeting scheduler embed.
- **Interactions & states:** Validation, success feedback, spam protection, role-specific copy (recruiter vs client); fallback email link.
- **Data & CMS:** Form recipient routing, downloadable assets, CTA copy, FAQ microcopy.
- **Technical & QA:** Integrate email service (SendGrid/Formspree), GDPR consent, reCAPTCHA or hCaptcha, tracking (submit events).

### 3.10 Theme and Universe Switcher
- **Purpose & KPIs:** Showcase creativity; encourage theme toggles while preserving usability.
- **Core content & modules:** Theme menu (pixel, prehistoric, futuristic, dark, classic), preview thumbnails, auto-theme suggestions per role.
- **Interactions & states:** Smooth transitions with reduced motion option; remember choice per session; fallback to accessible theme.
- **Data & CMS:** Theme definitions (palette, typography, asset pack) stored centrally; toggles accessible to admin.
- **Technical & QA:** Implement theming via CSS variables/design tokens; ensure WCAG contrast; test performance impact.

### 3.11 Multi-language Support
- **Purpose & KPIs:** Serve English and Vietnamese at launch; optional Japanese; ensure translation coverage 100%.
- **Core content & modules:** Language switcher with locale indicator, i18n resource files, localized SEO metadata, fallback copy alerts.
- **Interactions & states:** Language persists per user; server-side rendering respects locale; form validation messages localized.
- **Data & CMS:** Translation management (keys, preview, status), connectors to admin for string updates.
- **Technical & QA:** Use Next.js i18n or similar; ensure dynamic content translatable; double-check text expansion; RTL readiness future-proof.

### 3.12 AI Guide and Chatbot
- **Purpose & KPIs:** Aid navigation and storytelling; track engagement, conversion prompts.
- **Core content & modules:** Floating assistant trigger, welcome scripts per role, curated Q&A knowledge base, ability to deep-link to sections.
- **Interactions & states:** Context-aware suggestions; escalate to contact form; optional voice mode; safe fallback when offline.
- **Data & CMS:** Knowledge base entries, intents, recommended CTAs, analytics events.
- **Technical & QA:** Integrate with hosted LLM or rule-based bot; monitor latency; ensure privacy compliance; guardrails for responses.

### 3.13 Admin Dashboard (CMS-lite)
- **Purpose & KPIs:** Empower non-technical updates; ensure content changes under 5 minutes; audit trail.
- **Core content & modules:** Auth (email/pass + 2FA), dashboard overview, content modules (home, timeline, projects, blog, shop, chatbot, themes), media library, analytics snapshot, export/import.
- **Interactions & states:** CRUD with draft/publish workflows; preview mode; role-based permissions if team grows; undo/versioning minimal.
- **Data & CMS:** Central datastore (headless CMS or custom DB) with schema validations, upload handling, revision history.
- **Technical & QA:** Secure authentication (JWT/NextAuth), rate limiting, logging, access controls, automated testing for CRUD, compliance (GDPR for user data).

### 3.14 Analytics and Experimentation Layer
- **Purpose & KPIs:** Measure behaviour, conversions, theme usage.
- **Core content & modules:** Event tracking plan, dashboards (Mixpanel/GA4), heatmaps (Hotjar optional), A/B testing hooks.
- **Interactions & states:** Role-specific funnels, campaign tagging, error monitoring (Sentry).
- **Data & CMS:** Data retention policies, consent management, ability to export insights.
- **Technical & QA:** Cookie consent banner, privacy-compliant tracking, documentation of events.

---
## 4. Feature Inventory

### 4.1 Must-have (MVP to Full Release)
- Animated landing intro with role selection and persistence.
- Global navigation with adaptive role switcher.
- Dual-character home with drag-to-focus and persona stats.
- Role-tailored timeline mini-game with milestones.
- Projects area with role filters and rich detail templates.
- Blog listing and article detail with subscriptions.
- Shop catalog supporting digital download and inquiry flow.
- Contact hub with dynamic form, CV download, social links.
- Theme/universe switcher with at least three ready themes.
- English and Vietnamese localization.
- AI guide with curated Q&A and deep links.
- Responsive design, SEO baseline, accessibility compliance.
- Admin dashboard for content, media, themes, chatbot data.
- Analytics instrumentation, consent management, deployment pipeline.

### 4.2 Nice-to-have / Stretch
- User accounts or progress saving across visits.
- Easter eggs and unlockable content for engaged visitors.
- Community feedback wall or guestbook.
- Interactive prototype embeds, AR previews.
- Automated theme recommendations driven by behaviour.
- Advanced AI features (voice, personalized follow-up emails).

---
## 5. User Stories

- As a **recruiter**, I can scan a concise skills matrix, review flagship projects, and download a CV within two clicks so I can shortlist candidates quickly.
- As a **client**, I can browse service packages, read proof-driven case studies, and submit a project brief without friction so I feel confident initiating work.
- As a **visitor**, I can explore the MusLunar universe, swap themes, and follow the timeline story at my own pace so I stay engaged and share the site.
- As a **design enthusiast**, I can view artwork, add handmade items to cart, and follow social channels so I remain part of the community.
- As an **admin**, I can log in securely, update timeline milestones, publish new projects, and adjust chatbot responses without redeploying code so the site stays fresh.
- As an **admin**, I can toggle themes, configure languages, and view analytics snapshots so I can adapt the experience to business goals in real time.
- As a **bot user**, I can ask the AI guide for help navigating to recruiter-specific content so I find relevant information instantly.

---
## 6. Non-functional Requirements

- **Performance:** Core Web Vitals within green thresholds; page load <2.5s on 4G; animations capped at 60fps with reduced-motion fallback.
- **Accessibility:** WCAG 2.1 AA compliance; full keyboard navigation; descriptive alt text; high-contrast themes.
- **SEO:** Semantic HTML, structured data for articles/projects, meta tags per locale, sitemap and Open Graph coverage.
- **Security:** HTTPS enforced, secure headers, form validation/sanitization, rate limiting, audit logging for admin actions.
- **Reliability:** Target 99.5% uptime; automated backups for content and media; rollback strategy.
- **Scalability:** Modular architecture (Next.js + headless CMS + serverless functions) allowing future features without major refactor.
- **Maintainability:** Component documentation, Storybook (optional), testing pyramid (unit/integration/e2e), CI/CD with linting and automated tests.

---
## 7. Analytics and Success Measurement

- Track role selection conversions, timeline completion, project detail views, CTA clicks, form submissions, shop conversions, chatbot sessions.
- Set goal dashboards for recruiter, client, and visitor funnels; monitor drop-offs and iterate.
- Log theme and language usage to prioritise future design work.
- Define quarterly review cadence to compare metrics against targets and adjust backlog.

---
## 8. Roadmap and Dependencies

- **Sprint 1 (MVP):** Landing, role selection, home hub, baseline timeline, contact form, initial analytics.
- **Sprint 2 (Full Feature):** Expanded timeline branching, projects, blog, shop, themes, localization, AI guide, advanced animations.
- **Sprint 3 (Admin Suite):** CMS dashboard, content workflows, analytics integration, optimization polish.
- **Dependencies:** Figma designs, storytelling scripts, content inventory, asset creation, chosen CMS/hosting stack, payment provider selection, AI/chatbot vendor decision.

---
## 9. Acceptance and Review

- Requirements approved when each page/module has clear purpose, content schema, interaction notes, and measurable outcomes.
- Design handoff must reference these requirements; deviations logged as change requests.
- Post-implementation review compares delivered experience against KPIs, funnels, and user feedback to iterate roadmap.
