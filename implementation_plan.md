# Personal Portfolio — Full-Stack Implementation Plan

## Overview

A full-stack personal portfolio website for a Computer Engineering student specializing in AI/ML, full-stack development, and technical workshops.

**Creative Direction Chosen: "Generative/Data Aesthetic"** — since the background is AI/ML, the portfolio will feature a live interactive particle/neural-net canvas that reacts to mouse movement, paired with a distinctive editorial type system (large serif headlines + tight mono/sans body). The color language is a deep charcoal base with electric cyan/lime accent nodes — evoking a neural network visualization. Every section uses consistent spacing tokens and the same scroll-triggered motion vocabulary (slide-in + stagger, not generic fades).

---

## Proposed Changes

### Project Structure

```
c:\Portfolio
├── frontend/           # Vite + React + TypeScript + Tailwind + Framer Motion
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/       # Navbar, Footer, ThemeToggle
│   │   │   ├── canvas/       # NeuralCanvas (generative art)
│   │   │   ├── sections/     # Hero, About, Projects, Skills, Experience, Contact
│   │   │   └── ui/           # Card, Modal, Tag, Button, SectionTitle
│   │   ├── hooks/            # useTheme, useScrollAnimation, useApi
│   │   ├── lib/              # api.ts (axios wrappers), motion.ts (shared variants)
│   │   ├── types/            # shared TypeScript interfaces
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── tailwind.config.ts
│   ├── vite.config.ts
│   ├── .env.example
│   └── README.md
│
├── backend/            # FastAPI + Pydantic + SQLite
│   ├── app/
│   │   ├── main.py           # FastAPI app, CORS, startup
│   │   ├── database.py       # SQLite + SQLAlchemy setup
│   │   ├── models.py         # SQLAlchemy ORM models
│   │   ├── schemas.py        # Pydantic request/response schemas
│   │   ├── routers/
│   │   │   ├── projects.py
│   │   │   ├── skills.py
│   │   │   ├── experience.py
│   │   │   └── contact.py
│   │   └── seed.py           # Seed placeholder data
│   ├── .env.example
│   ├── requirements.txt
│   └── README.md
```

---

### Backend — FastAPI

#### [NEW] `backend/app/main.py`
- FastAPI app with CORS middleware (allows `http://localhost:5173`)
- Includes all routers
- On startup: creates DB tables, seeds placeholder data

#### [NEW] `backend/app/database.py`
- SQLAlchemy with SQLite (`portfolio.db`)
- `get_db` dependency injection

#### [NEW] `backend/app/models.py`
- `Project`: id, title, description, tech_stack (JSON), github_url, demo_url, case_study
- `Skill`: id, name, category (ML_AI | Backend | Frontend | Tools), level
- `Experience`: id, title, org, type (hackathon | research | workshop), start_date, end_date, description
- `ContactMessage`: id, name, email, subject, message, created_at

#### [NEW] `backend/app/schemas.py`
- Pydantic v2 models for all CRUD responses and the contact form
- Contact form: email validation, required fields, max lengths → returns 422 with clean messages on bad input

#### [NEW] `backend/app/routers/contact.py`
- `POST /api/contact` — validates + saves, optionally sends SMTP email
- Returns `{ message: "sent" }` on success, structured 422 on validation failure

#### [NEW] `backend/requirements.txt`
```
fastapi>=0.111
uvicorn[standard]>=0.29
sqlalchemy>=2.0
pydantic[email]>=2.7
python-dotenv>=1.0
```

---

### Frontend — React + Vite

#### Design System (Tailwind config)
- **Colors**: `void` (charcoal `#0d0d0f`), `node` (cyan `#00e5ff`), `synapse` (lime `#b8ff57`), `wire` (neutral grays)
- **Fonts**: `Playfair Display` (headings), `Inter` (body), `JetBrains Mono` (code/tags)
- **Motion**: Shared Framer Motion variants — `fadeSlideUp`, `staggerContainer`, `scaleIn`

#### [NEW] `frontend/src/components/canvas/NeuralCanvas.tsx`
- Full-viewport `<canvas>` behind all content
- ~80 nodes with random positions; edges drawn when nodes are within threshold distance
- Nodes drift slowly; nearest ~5 to mouse cursor repel/attract gently
- Brightness of edges scales with inverse distance
- Adapts to theme: dimmer in light mode

#### [NEW] `frontend/src/components/sections/Hero.tsx`
- Animated name reveal (letter-by-letter stagger via Framer Motion)
- One-line identity statement with a typewriter cursor blink
- Scroll-down indicator (SVG chevron with bounce)

#### [NEW] `frontend/src/components/sections/Projects.tsx`
- Fetches from `GET /api/projects` on mount
- Masonry-ish grid (CSS grid, 1→2→3 cols)
- Each card: title, description, tech stack pill tags, GitHub/demo links
- Click → `ProjectModal` (Framer Motion AnimatePresence) showing case study

#### [NEW] `frontend/src/components/sections/Skills.tsx`
- 4 columns (ML/AI, Backend, Frontend, Tools)
- Each skill rendered as a horizontal bar with animated fill on scroll-enter
- Not logos — typographic with level indicator

#### [NEW] `frontend/src/components/sections/Experience.tsx`
- Vertical timeline with alternating left/right cards
- Each card: org, role, date range, description, type badge

#### [NEW] `frontend/src/components/sections/Contact.tsx`
- Controlled form → `POST /api/contact`
- Loading spinner on submit
- Success: inline success message with checkmark animation
- Error: inline error message (no `alert()`)

#### [NEW] `frontend/src/components/layout/Navbar.tsx`
- Fixed top, blurs background on scroll
- Section jump links (smooth scroll)
- Dark/Light toggle (sun/moon icon, persisted to localStorage)

---

## Verification Plan

### Automated
```bash
# Backend
cd backend && uvicorn app.main:app --reload   # runs on :8000
curl http://localhost:8000/api/projects        # returns JSON array
curl http://localhost:8000/api/skills

# Frontend
cd frontend && npm run dev                     # runs on :5173
```

### Manual Verification
- [ ] Neural canvas visible and reacting to mouse movement
- [ ] Dark/light mode toggle persists across refresh
- [ ] Projects cards load from API (not hardcoded)
- [ ] Contact form submits, shows success state, stores in SQLite
- [ ] Fully responsive at 375px, 768px, 1440px
- [ ] Keyboard navigation works (tab order, focus rings)
