# ŠKODA — Premium Landing Page

> A modern, animated, single-page concept landing page for the Škoda automotive brand. Built with React 19, TypeScript, Vite 7 and Tailwind CSS v4, with motion design powered by Framer Motion.

<p align="center">
  <img alt="React"        src="https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white" />
  <img alt="TypeScript"   src="https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white" />
  <img alt="Vite"         src="https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind-4-38BDF8?logo=tailwindcss&logoColor=white" />
  <img alt="Framer Motion" src="https://img.shields.io/badge/Framer%20Motion-12-EF4444?logo=framer&logoColor=white" />
</p>

---

## ✨ Features

- **Cinematic hero** with ambient glows and motion-driven calls to action.
- **Featured Models** grid showcasing the Škoda lineup with hover-state interactions.
- **Innovation bento layout** highlighting technology pillars.
- **Interior Experience** section with sustainable-material storytelling.
- **Performance & chassis** section with simulator-style visuals.
- **Configurator & Booking** with model selection, color, wheels, interior options and live price estimation.
- **Testimonials carousel** for the customer-experience story.
- **Laura — virtual concierge**: a floating assistant panel with curated FAQs, smooth auto-scroll messages, and a collapsible suggestions list.
- **Scroll-spy navigation** with an active-section indicator, sticky glass navbar and a polished mobile drawer.
- **Calibration loader** as a brand-aligned intro animation.
- Fully **responsive** with a luxury dark aesthetic, glassmorphism, gradient typography and a brand-emerald accent system.

---

## 🧰 Tech Stack

| Layer           | Tooling                                                            |
| --------------- | ------------------------------------------------------------------ |
| Framework       | [React 19](https://react.dev/) + [TypeScript 5.9](https://www.typescriptlang.org/) |
| Bundler / Dev   | [Vite 7](https://vitejs.dev/) (with `vite-plugin-singlefile`)      |
| Styling         | [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite` |
| Animations      | [Framer Motion 12](https://www.framer.com/motion/)                 |
| Icons           | [Lucide React](https://lucide.dev/)                                |
| Class utilities | `clsx` + `tailwind-merge` (`src/utils/cn.ts`)                      |
| Fonts           | Plus Jakarta Sans (UI) & Sora (display) via Google Fonts           |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.18 (Node 20 LTS recommended)
- **npm** ≥ 9 (or `pnpm` / `yarn` — adjust commands accordingly)

### Installation

```bash
git clone https://github.com/chxb07/skoda-LandingPage.git
cd skoda-LandingPage
npm install
```

### Run the dev server

```bash
npm run dev
```

Vite will start on `http://localhost:5173` (default) with hot module replacement.

### Production build

```bash
npm run build      # outputs to ./dist
npm run preview    # serves the production build locally
```

> The project uses `vite-plugin-singlefile`, which inlines JS, CSS and assets into a **single `dist/index.html`** — ideal for static hosting, offline distribution or embedding.

---

## 📜 Available Scripts

| Script            | Description                                          |
| ----------------- | ---------------------------------------------------- |
| `npm run dev`     | Start the Vite dev server with HMR                   |
| `npm run build`   | Type-check and build the production bundle           |
| `npm run preview` | Preview the production build locally                 |

---

## 📁 Project Structure

```
premium-skoda-landing-page/
├── public/
│   └── images/                  # Static hero & model imagery
├── src/
│   ├── App.tsx                  # Layout, scroll-spy, loader, chat assistant
│   ├── main.tsx                 # React entry point
│   ├── index.css                # Tailwind v4 theme tokens & utilities
│   ├── components/
│   │   ├── Navbar.tsx           # Glass navbar + mobile drawer
│   │   ├── Hero.tsx             # Cinematic hero section
│   │   ├── Models.tsx           # Featured models grid
│   │   ├── Innovation.tsx       # Bento technology section
│   │   ├── Interior.tsx         # Interior storytelling
│   │   ├── Performance.tsx      # Performance / chassis section
│   │   ├── Configurator.tsx     # Interactive build & price
│   │   ├── Testimonials.tsx     # Carousel
│   │   └── Footer.tsx           # Newsletter + back-to-top
│   └── utils/
│       └── cn.ts                # `clsx` + `tailwind-merge` helper
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 🎨 Customization

Brand colors, fonts and surface tokens live in `src/index.css` under the Tailwind v4 `@theme` block:

```css
@theme {
  --font-sans: 'Plus Jakarta Sans', sans-serif;
  --font-display: 'Sora', sans-serif;
  --color-brand-emerald: #00b050;
  --color-brand-dark-green: #006020;
  --color-brand-glow: rgba(0, 176, 80, 0.15);
  --color-luxury-bg: #030303;
  --color-luxury-card: #0d0d0d;
  --color-luxury-border: rgba(255, 255, 255, 0.08);
}
```

Adjust these tokens to re-skin the whole site (e.g., a different brand palette) — every component consumes them via Tailwind utilities like `bg-brand-emerald`, `text-luxury-bg`, etc.

The same file also defines reusable utilities such as `.glass-card`, `.text-gradient`, `.text-gradient-emerald`, and the ambient `animate-glow-*` keyframes.

---

## 🌐 Deployment

Because the production output is a single self-contained `index.html`, you can drop `dist/` on virtually any host:

- **Vercel / Netlify** — import the repo, framework preset = Vite, build = `npm run build`, output = `dist`.
- **GitHub Pages** — push `dist/` to a `gh-pages` branch, or use an action.
- **Static / S3 / CDN** — upload the contents of `dist/`.

---

## ⚖️ Disclaimer

This is an independent **concept / portfolio project**. "ŠKODA", the Škoda logo and any related trademarks are the property of **ŠKODA AUTO a.s.**. This repository is not affiliated with, endorsed by, or sponsored by ŠKODA AUTO. All imagery and copy are used for demonstration purposes only.

---

## 🙌 Acknowledgments

- Design system inspiration: modern premium-automotive web experiences.
- Icons by [Lucide](https://lucide.dev/).
- Motion by [Framer Motion](https://www.framer.com/motion/).
- Typefaces: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) & [Sora](https://fonts.google.com/specimen/Sora).
