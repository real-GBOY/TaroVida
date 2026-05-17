# TaroVida

**From Waste to Worth — A Bioeconomy Born in Shanawan**

Official marketing website for **TaroVida**, an Enactus Menoufia University social enterprise transforming Egypt's taro heartland into a zero-waste bioeconomy. The project processes the full taro plant — corms, leaves, and starch — into value-added products that stabilize farmer income and reduce post-harvest waste in Shanawan, Menoufia Governorate.

---

## About the Project

Shanawan supplies over **60% of Egypt's taro crop**, yet farmers face seasonal oversupply, trader monopolies, and up to **30% post-harvest loss**. TaroVida addresses this through circular processing:

| Input | Product |
|-------|---------|
| Taro corms | Taro Milk |
| Taro leaves | Herbal leaf products |
| Taro starch | Taro Hydrogel |

The site tells this story, showcases products and impact, and provides paths for partnerships and contact.

---

## Features

- **Multi-page SPA** with client-side routing (Home, Products, Impact, Partner, About, Contact)
- **Product catalog** with category filters and dedicated detail pages
- **Impact tracking** — animated counters, UN SDG badges, timeline, and environmental benefits
- **Partnership & contact flows** with branded forms (UI-ready for backend integration)
- **Smooth scrolling** on the home page via Lenis
- **Motion design** with Framer Motion scroll and entrance animations
- **Responsive layout** — mobile navigation, adaptive grids, accessible focus states
- **404 handling** — branded not-found page for unknown routes and invalid product URLs
- **Vercel-ready** — SPA rewrites, asset caching, production build configuration

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React 18 + TypeScript |
| Build tool | Vite 8 |
| Styling | Tailwind CSS 3 |
| Routing | React Router 7 |
| Animation | Framer Motion |
| Smooth scroll | Lenis |
| Icons | Lucide React |
| Deployment | Vercel |

---

## Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Landing page — hero, problem, solution, products preview, impact, about, partners, CTA |
| `/products` | Full product catalog with category filters |
| `/products/:id` | Product detail — specs, applications, impact, quote/sample CTAs |
| `/impact` | Impact metrics, environmental benefits, project timeline |
| `/partner` | Partnership types, process, partners, request form |
| `/about` | Mission, vision, story, values |
| `/contact` | Contact cards, message form, FAQ |
| `*` | 404 — page not found |

**Product IDs:** `taro-milk` · `herbal-leaf` · `taro-hydrogel`

---

## Project Structure

```
TaroVida-Main/
├── public/                 # Static assets (if any)
├── src/
│   ├── components/
│   │   ├── forms/          # Contact & partnership forms
│   │   ├── layout/         # Navbar, Footer, PageHero, ScrollToTop
│   │   └── sections/       # Home page sections
│   ├── data/               # Site config, products, partners
│   ├── hooks/              # useLenis
│   ├── pages/              # Route-level pages
│   ├── animations.ts       # Framer Motion variants
│   ├── App.tsx             # Router shell
│   └── main.tsx
├── vercel.json             # Vercel SPA rewrites & headers
├── tailwind.config.js      # Brand color tokens
└── vite.config.ts
```

---

## Getting Started

### Prerequisites

- **Node.js** 18+ (20+ recommended)
- **npm** 9+

### Install & run

```bash
# Clone the repository and enter the project folder
cd TaroVida-Main

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Other scripts

```bash
npm run build      # Production build → dist/
npm run preview    # Preview production build locally
npm run start      # Preview on port 4173 (all interfaces)
npm run typecheck  # TypeScript check
npm run lint       # ESLint
```

---

## Deployment (Vercel)

This project is configured for [Vercel](https://vercel.com) out of the box.

1. Push the repo to GitHub.
2. Import the project in Vercel.
3. Set **Root Directory** to `TaroVida-Main` if the repo contains multiple folders.
4. Confirm settings (auto-detected):
   - **Framework:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Deploy.

`vercel.json` includes SPA rewrites so direct links (e.g. `/products/taro-milk`) resolve correctly. Static assets under `/assets/` are cached with long-lived headers.

**CLI deploy:**

```bash
npx vercel
```

---

## Configuration

| File | Purpose |
|------|---------|
| `src/data/site.ts` | Site name, contact email, phone, location, social URLs |
| `src/data/products.ts` | Product catalog and detail content |
| `src/data/partners.ts` | Partners and partnership types |
| `.env.example` | Optional env vars (e.g. Supabase) |

Update social links in `site.ts` before going live. Forms currently show a client-side thank-you message; wire to Supabase or a form service when ready.

---

## Brand

| Token | Value |
|-------|-------|
| Purple | `#3a1c36` |
| Olive | `#6d6f21` |
| Forest | `#354125` |
| Cream | `#e7e7d3` |

**Typography:** Cormorant Garamond (headings) · DM Sans (body)

---

## Credits

| Role | |
|------|---|
| **Project** | TaroVida — Enactus Menoufia University |
| **Location** | Shanawan, Menoufia Governorate, Egypt |
| **Website developed by** | **JINX** |

---

## License

This project is private and maintained for the TaroVida / Enactus Menoufia initiative. All rights reserved unless otherwise agreed by the project team.

---

<p align="center">
  <strong>TaroVida</strong> · Turning Agriculture into Opportunity
</p>
