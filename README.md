# Shreyas Shende — Portfolio

Personal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion. Single scrollable page with a sticky nav that highlights the section you're on.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command             | What it does                                   |
| -------------------- | ----------------------------------------------- |
| `npm run dev`        | Start the local dev server                      |
| `npm run build`      | Production build                                 |
| `npm run start`      | Serve the production build locally               |
| `npm run lint`       | ESLint                                            |
| `npm run typecheck`  | TypeScript, no output emitted                     |
| `npm run test`       | Run the test suite once (Vitest)                  |
| `npm run test:watch` | Run tests in watch mode                           |

Before deploying or opening a PR, all four of `typecheck`, `lint`, `test`, and `build` should pass clean.

## Editing content

All real content (bio, skills, experience, projects, certificates, interests) lives in typed files under [`data/`](data) — not inside the components. To update anything on the site, edit the matching file in `data/` and the page picks it up automatically. See [CONTENT_GUIDE.md](CONTENT_GUIDE.md) for details on each file, plus which image assets still need to be dropped into `public/`.

## Project structure

```
app/                  Next.js App Router entry (layout, page, global styles)
components/           UI components
  sections/           One component per page section (Hero, Skills, Projects, ...)
  theme/               Dark/light mode provider + toggle
data/                  All site content (edit here, not in components)
lib/                   Shared types + small hooks (scrollspy, etc.)
public/                Static assets (resume, profile photo, certificate badges)
```

## Manual verification checklist

Automated tests cover the interactive pieces (nav, theme toggle, skill tree, easter egg). Everything else is presentational and should be spot-checked in a browser after content changes:

- [ ] Every nav link scrolls to and highlights the right section
- [ ] Resume link downloads the current PDF
- [ ] All external links (GitHub, LinkedIn, project repos) open correctly
- [ ] Dark/light toggle works and persists on reload
- [ ] Mobile viewport: hamburger menu, skills list, and cards all remain readable
- [ ] `prefers-reduced-motion` disables the scroll-reveal animation
- [ ] Konami code (↑ ↑ ↓ ↓ ← → ← → b a) shows the easter-egg toast

## Deployment

Deployed on Vercel from this repo's root — no special root-directory configuration needed, since `package.json` lives at the repo root.
