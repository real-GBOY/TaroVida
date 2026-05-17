# TaroVida-Main — Gap Plan vs WevoProject

This plan maps what **TaroVida-Main** needs to match **WevoProject** (Weavolution) in **structure and features**, while keeping TaroVida’s own brand, copy, and taro/bioeconomy focus.

**Reference project:** `../WevoProject`  
**Target project:** `TaroVida-Main`

---

## Current state summary

| Area | WevoProject | TaroVida-Main |
|------|-------------|---------------|
| Architecture | Multi-page SPA (`react-router-dom`) | Single scrolling landing page |
| Navigation | Fixed navbar + mobile menu | None |
| Pages | 6 routed pages (+ Campaigns file, not wired) | 0 separate routes |
| Products | Catalog + filters + detail pages | 3 cards, no links/details |
| Forms | Contact + partnership forms (UI) | None |
| Footer | 4 columns, links, contact info | Minimal; social buttons not linked |
| Deploy | `vercel.json`, `deploy.sh` | Not configured |
| Strengths | Full site map, conversion paths | Lenis scroll, Problem/Solution flow, SDG badges, custom design |

---

## What to keep (do not remove)

- Lenis smooth scrolling
- Problem → Solution → Products narrative
- Zero-waste flow diagram (`SolutionSection`)
- Animated impact counters + UN SDG badges (`ImpactSection`)
- TaroVida color palette and typography (Cormorant + DM Sans)

---

## Phase 1 — Structure & navigation (highest impact)

**Goal:** Multi-page site with shared chrome, same as Wevo’s app shell.

### Tasks

- [x] Install `react-router-dom`
- [x] Add `src/App.tsx` router layout:
  - `Navbar` (all pages)
  - `<main>` with `<Routes>`
  - `Footer` (all pages)
  - `ScrollToTop` on route change
- [ ] Create `src/components/layout/Navbar.tsx`
  - Links: Home, Products, Impact, Partner, About, Contact
  - Logo + brand name
  - Active route indicator (desktop)
  - Mobile menu (hamburger + drawer)
- [ ] Reorganize folders (suggested):
  - `src/pages/` — route-level pages
  - `src/components/sections/` — home sections (move existing section components)
  - `src/components/layout/` — Navbar, Footer
- [ ] Define routes:

| Route | Page | Source |
|-------|------|--------|
| `/` | Home | Existing sections composed on one page |
| `/products` | Products catalog | New |
| `/products/:id` | Product detail | New |
| `/impact` | Impact | Expand `ImpactSection` |
| `/partner` | Partner | Expand `PartnersSection` |
| `/about` | About | Expand `AboutSection` |
| `/contact` | Contact | New |

- [ ] Add `vercel.json` for SPA rewrites (copy pattern from Wevo)
- [ ] Optional: `deploy.sh` + `preview`/`start` script if deploying like Wevo

### Acceptance criteria

- All nav links work without full page reload
- Scroll resets to top on navigation
- Home still shows current section flow

---

## Phase 2 — Conversion & contact

**Goal:** Clear paths to partner and contact, matching Wevo’s CTAs.

### Tasks

- [ ] **Home hero**
  - Primary CTA (e.g. Explore Products → `/products`)
  - Secondary CTA (e.g. Our Story → `/about` or video modal)
  - Optional: 3 floating stat chips (adapt TaroVida metrics)
- [ ] **`CallToAction` section** on home (before footer)
  - “Become a Partner” → `/partner`
  - “Get in Touch” → `/contact`
- [ ] **`/contact` page**
  - Hero
  - Contact form: name, email, phone, subject, organization, message, newsletter opt-in
  - Contact cards: email, phone, location, hours (TaroVida details)
  - FAQ (4–6 taro/farmer/partnership questions)
  - Social links (real URLs)
- [ ] **Footer upgrade** (`Footer.tsx`)
  - 4-column layout: brand, quick links, products, contact
  - Working social `href`s (Instagram, LinkedIn, email)
  - Copyright + Enactus line
- [ ] **Form backend** (pick one)
  - Wire Supabase (already in `package.json`) for submissions, or
  - Formspree / Netlify Forms / email service

### Acceptance criteria

- User can reach contact from nav, footer, and home CTA
- Social and mail links open correctly

---

## Phase 3 — Products depth

**Goal:** Product discovery and detail pages like Wevo’s `/products` and `/products/:id`.

### Product IDs (TaroVida)

| ID | Product |
|----|---------|
| `taro-milk` | Taro Milk |
| `herbal-leaf` | Herbal Leaf Products |
| `taro-hydrogel` | Taro Hydrogel |

(Add more IDs as products grow.)

### Tasks

- [ ] **`/products` page**
  - Hero
  - Benefit row (e.g. farmer income, zero waste, local processing)
  - Optional category filter (if categories exist later)
  - Product grid with image, title, description, “Learn more”
- [ ] **`/products/:id` page**
  - Breadcrumb: Home / Products / {name}
  - Image, title, description, key features
  - Technical specs table (yield, processing, target users)
  - Applications list
  - Environmental / social impact block (per product)
  - CTAs: Request quote, Get sample → `/contact`
  - Link back to all products
- [ ] **Home `ProductsSection`**
  - Link each card to `/products/{id}`
  - Optional: “View all products” → `/products`
- [ ] Replace placeholder Pexels images with real TaroVida assets when available

### Acceptance criteria

- Every product on home opens a dedicated detail page
- Detail pages share consistent layout across all products

---

## Phase 4 — Page depth (Partner, About, Impact)

**Goal:** Standalone pages with Wevo-level content depth, TaroVida copy.

### `/partner`

- [ ] Hero
- [ ] “Why partner with TaroVida” (3 benefit cards)
- [ ] Partnership types (adapt to taro context), e.g.:
  - Farmers / cooperatives
  - Food & beverage buyers
  - Research / universities
  - Community / NGOs
- [ ] 4-step partnership process
- [ ] Partner grid (expand beyond current 3)
- [ ] Partnership request form (same fields pattern as Wevo)

### `/about`

- [ ] Hero with logo
- [ ] Mission & vision
- [ ] Our story (Shanawan, 60% stat, Enactus)
- [ ] Values grid (4 values)
- [ ] Bottom CTAs → `/partner`, `/contact`

### `/impact`

- [ ] Keep animated counters + SDGs from current section
- [ ] Add environmental benefits block + image
- [ ] Add journey timeline / milestones (TaroVida dates)
- [ ] Optional: extra stat cards if data exists

### Acceptance criteria

- Each route feels like a full page, not a stretched section
- Copy is taro/agriculture focused, not textile recycling

---

## Phase 5 — Optional enhancements

### Campaigns (Wevo has file, route not wired)

- [ ] Decide if TaroVida needs campaigns (field days, university outreach, etc.)
- [ ] If yes: `src/pages/Campaigns.tsx` + route + footer link
- [ ] Active / upcoming / completed campaign cards

### Supabase

- [ ] Remove `@supabase/supabase-js` if unused, **or**
- [ ] Use for: contact form, partnership form, newsletter

### Content & assets

- [ ] Favicon / `public/` assets
- [ ] Open Graph meta tags in `index.html`
- [ ] Real photography for Shanawan, products, team

### QA

- [ ] `npm run typecheck` clean
- [ ] `npm run lint` clean
- [ ] Mobile nav + all breakpoints
- [ ] Lenis behavior on multi-page (enable only on home or globally — test)

---

## File checklist (new / moved)

```
src/
  App.tsx                 # Router shell
  pages/
    Home.tsx
    Products.tsx
    ProductDetail.tsx
    Impact.tsx
    Partner.tsx
    About.tsx
    Contact.tsx
    Campaigns.tsx         # optional
  components/
    layout/
      Navbar.tsx
      Footer.tsx          # upgraded
    sections/
      HeroSection.tsx     # moved
      ProblemSection.tsx
      SolutionSection.tsx
      ProductsSection.tsx
      ImpactSection.tsx
      AboutSection.tsx
      PartnersSection.tsx
      CallToAction.tsx    # new
  data/
    products.ts           # shared product definitions
    partners.ts           # optional
vercel.json
```

---

## Content rules (do not copy from Wevo)

| Wevo (textile) | TaroVida (use instead) |
|----------------|-------------------------|
| 3D filament, yarn, MDF, furniture | Taro milk, herbal leaf, hydrogel |
| Textile manufacturers | Farmers, cooperatives, food buyers |
| 3M tons textile waste | Shanawan / taro oversupply / post-harvest loss |
| Weavolution branding | TaroVida branding |

---

## Suggested implementation order

1. Phase 1 — Router + Navbar + Footer + page shells  
2. Phase 2 — Contact page + CTAs + footer links  
3. Phase 3 — Products catalog + detail pages  
4. Phase 4 — Partner / About / Impact page expansion  
5. Phase 5 — Campaigns, Supabase, assets, QA  

---

## Progress tracker

| Phase | Status | Notes |
|-------|--------|-------|
| 1 — Structure | Done | Router, navbar, footer, 7 routes, `vercel.json` |
| 2 — Conversion | Done | Hero CTAs, CallToAction, contact page, footer links |
| 3 — Products | Done | Catalog, filters, detail pages, shared `data/products.ts` |
| 4 — Page depth | Done | Full About, Partner, Impact (timeline + benefits) |
| 5 — Optional | Partial | Forms are UI-only; update social URLs in `data/site.ts` |

---

*Last updated: May 2026*
