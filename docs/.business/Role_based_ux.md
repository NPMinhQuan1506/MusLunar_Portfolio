# Role-Personalized UX - MusLunar Portfolio

Creative site, but flows and content are personalized by role to avoid confusing high-intent users.

---

## 1. Pain Points
- Dual-persona portfolio (Dev + Designer) with different audiences.
- Clients need fast, clear info: who you are, what you do, proof of similar work. Minimal animation; credibility first.
- Recruiters scan quickly: about, skills/stack, experience timeline, top projects, contact/CV. Creative theme is fine if navigation stays obvious.
- Viewers/General users: free exploration, playful themes, see both dev and design sides.
- A single universal flow frustrates clients/recruiters and hurts conversions.
- Role choice must be made once, remembered for the session, and switchable anytime.

---

## 2. UX/Flow Solution
### Role selection (landing/intro)
- Ask once: "Who are you? This helps us personalize your experience."
- Buttons: Recruiter ("See profile, experience, projects"), Client ("See team, products, services"), Just Exploring ("Discover the MusLunar universe").
- Note: "You can change your choice anytime from the menu." Persist via localStorage/state.

### After role selection
#### A. Client
- Landing: value/credibility, clean layout.
- Section 1: Who are we? (team profile, experience, values, testimonials). CTAs: "See similar products", "Request quote".
- Section 2: Products/portfolio filtered to business-relevant work; 2-3 case studies (problem/solution/result).
- Section 3: Workflow/guarantees (speed, on-time, aftercare).
- Section 4: Contact/quote CTA.
- Minimize long timeline or heavy animation; link out if needed.

#### B. Recruiter
- Landing: concise about (Quan Dev / Nguyet Designer), skills/stack table, CTAs: "Download CV", "Book interview", "See top projects".
- Section 2: Timeline of key milestones (compact).
- Section 3: Projects auto-filtered to role; 3-5 highlights with code/demo/dribbble links.
- Section 4: Contact/CV download.
- Hide/minimize shop/art/fun unless a "See creative side" link is clicked.

#### C. Viewer
- Full exploration: colorful UI, more animation, all dev + design content, theme switching, blend personas for fun.

---

## 3. Navigation
- Always show "Viewing as: <Role> | Switch role".
- Clear shortcuts per role:
  - Recruiter: About | Skills | Timeline | Projects | Download CV | Contact
  - Client: Team | Services | Products | Pricing | Request Quote
  - Viewer: Explore Dev | Explore Design | Team | Themes | Blog | Shop

---

## 4. Dual-Brand Focus
- Role auto-focuses content:
  - Recruiter: choose Quan or Nguyet focus, or teamwork if relevant.
  - Client: default to whole team with outcomes.
- Show only relevant sections; keep an optional "See more creative/team side" link.

---

## 5. Flow Summary
- Landing/Intro: animation + dual avatar -> "Who are you?" -> route to role page.
- Layout differs by role:
  - Recruiter: about, skills, timeline, projects, contact.
  - Client: team, services, products, case studies, contact.
  - Viewer: full creative dual-theme experience.
- CTAs per role:
  - Recruiter: CV / call / interview / project.
  - Client: service / quote / order.
  - Viewer: connect / explore.
- Role can be switched anytime without leaving the current context.
