# Stars Peak — holiday home (demo)

Next.js App Router **one-pager** with **three locales**: `/en`, `/hr`, `/de`. Visiting `/` redirects to **`/en`**.

## Structure

Single scroll page: **hero banner** (full-width image + CTA panel) → **gallery** grid → **about** → **contact** (details + form). Anchors: `#top`, `#gallery`, `#about`, `#contact`.

Legacy URLs `/{locale}/about`, `/gallery`, `/contact` redirect to `/{locale}#…`.

Copy lives in `src/i18n/messages.ts`. Hero and gallery use Picsum placeholders — swap for images in `public/` when ready.

## Scripts

- `npm run dev` — http://localhost:3000 → `/en`
- `npm run build` / `npm run start`

## Vercel

`vercel.json` uses `"framework": "nextjs"`. `.vercel` and `.env*.local` stay gitignored.
