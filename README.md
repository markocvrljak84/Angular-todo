# Stars Peak — holiday home (demo)

Next.js App Router **one-pager** with **three locales**: `/en`, `/hr`, `/de`. Visiting `/` redirects to **`/en`**.

## Structure

Single scroll page: **hero banner** (full-width image + CTA panel) → **gallery** grid → **about** → **contact** (details + form). Anchors: `#top`, `#gallery`, `#about`, `#contact`.

Legacy URLs `/{locale}/about`, `/gallery`, `/contact` redirect to `/{locale}#…`.

Copy lives in `src/i18n/messages.ts`. Hero and gallery use Picsum placeholders — swap for images in `public/` when ready.

## Scripts

- `npm run dev` — http://localhost:3000 → `/en` (hot reload enabled; polls for file changes)
- `npm run dev:turbo` — faster builds via Turbopack (use if `dev` feels slow)
- `npm run build` / `npm run start` — production; **no hot reload** — use only to test production builds

### Hot reload not updating?

1. Run **`npm run dev`**, not `npm run start` (production mode never hot-reloads).
2. Stop any old server, then start fresh: `npm run dev`.
3. In VS Code / Cursor: **Terminal → Run Task → Next.js: dev server**.
4. If changes still do not appear, hard-refresh the browser once (`Cmd+Shift+R`).

## Vercel

`vercel.json` uses `"framework": "nextjs"`. `.vercel` and `.env*.local` stay gitignored.
