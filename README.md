# Python Mastery Hub

A guided "trail" through Python — 100 modules across three roadmaps (Basecamp /
Beginner, Ridge Trail / Intermediate, Summit Push / Advanced), with XP, streaks,
badges, bookmarks, notes, and a printable certificate.

Built with **React + Vite**. Plain CSS (no Tailwind/UI kit), no backend — all
progress is saved to the browser's `localStorage`.

> Created by **Vedansh Verma** — Class 11 Commerce with Informatics Practices (IP) Student

## Status: 20 of 100 lessons are fully written

This build ships the **complete app shell** — routing, theming, gamification,
search, dashboard, certificate — plus **full content for Modules 1–20**
(Intro to Python through if-elif-else). Modules 21–100 already exist as
titled waypoints on the Trail Map; clicking one shows a "not charted yet"
page until content is added.

Not yet built (next phases):
- Lesson content for modules 11–100
- Glossary ("Python Dictionary") page
- Error Handbook page
- Offline/PWA support

## Getting started

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install
npm run dev
```

Then open the URL it prints (usually `http://localhost:5173`).

To build a production version you can deploy anywhere static (GitHub Pages,
Netlify, Vercel, your own server):

```bash
npm run build
```

This outputs a `dist/` folder — upload its contents to any static host.

## Deploying it as a live website (free)

**Easiest option — Netlify Drop:**
1. In the project folder, run `npm run build`. This creates a `dist` folder.
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop) and sign up free
   (sites dropped without an account get deleted after an hour — signing up
   first keeps it live permanently).
3. Drag the `dist` folder straight into the browser drop zone.
4. You'll get a live `*.netlify.app` URL instantly. You can rename it in the
   site settings.
5. To update later: re-run `npm run build` and drag the new `dist` folder
   onto the same site's "Deploys" page.

A `public/_redirects` file is already included so that direct links like
`/lesson/5` or `/dashboard` work correctly on Netlify (without it, refreshing
on any page other than the homepage would 404).

**Alternative — Vercel:** Go to [vercel.com/drop](https://vercel.com/drop) and
drop the whole project folder (or a zip of it, with `package.json` at the
top level) — Vercel detects it's a Vite project and builds it for you. A
`vercel.json` is included for the same deep-link routing fix.

## Project structure

```
src/
  main.jsx              entry point
  App.jsx               routes + footer
  data/
    modules.js           all 100 module titles + tier mapping
    lessons.js            full content for modules 1-10 (add more here)
    levels.js              XP → level thresholds
    badges.js                badge definitions
  context/
    ThemeContext.jsx      light/dark mode (persisted)
    ProgressContext.jsx   XP, streaks, completed modules, bookmarks, notes
  components/             reusable UI pieces (navbar, search, code blocks, etc.)
  pages/                  Home, Roadmap, Lesson, Dashboard, Certificate
  styles/                 tokens.css, global.css, components.css, pages.css
```

## Adding more lessons

Each lesson lives in `src/data/lessons.js`, keyed by its module number, e.g.:

```js
11: {
  id: 11,
  definition: '...',
  easyExplanation: '...',
  analogy: '...',
  syntax: '...',
  example: { code: '...' },
  output: '...',
  commonErrors: [{ error: '...', why: '...', fix: '...' }],
  practice: ['...', '...'],
  quiz: [{ question: '...', options: ['...'], correctIndex: 0, explanation: '...' }],
  summary: '...',
},
```

As soon as an id appears in `LESSONS`, the Roadmap and Lesson pages
automatically treat it as "charted" — no other code changes needed. The
module's title and tier already exist for all 100 ids in `modules.js`.

## Design notes

The whole site is framed as a trail map: Beginner = forest green
("Basecamp"), Intermediate = gold ("Ridge Trail"), Advanced = clay/rust
("Summit Push"). The Roadmap page renders every module as a waypoint marker;
completed ones get a checkmark, bookmarked ones get a ribbon, and
not-yet-written ones show a lock. Typefaces are Space Grotesk (headings),
Work Sans (body), and JetBrains Mono (code), loaded from Google Fonts in
`index.html`.
