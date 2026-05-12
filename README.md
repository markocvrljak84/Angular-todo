# Stars Peak — holiday home (demo)

Next.js App Router site with **three locales**: `/en`, `/hr`, `/de`. Visiting `/` redirects to **`/en`** (default).

## Pages

| Path | |
|------|---|
| `/{locale}` | Home |
| `/{locale}/about` | About |
| `/{locale}/gallery` | Gallery (mock images via Picsum) |
| `/{locale}/contact` | Contact (mock form + fake address) |

Copy and images live in `src/i18n/messages.ts` (per language). Replace gallery `Image` `src` with files under `public/` when you have real photos.

## Scripts

- `npm run dev` — http://localhost:3000 → redirects to `/en`
- `npm run build` / `npm run start`

## Vercel

`vercel.json` keeps `"framework": "nextjs"`. `.vercel` and `.env*.local` stay gitignored.
