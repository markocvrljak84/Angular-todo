# Next.js (SSG)

Basic [Next.js](https://nextjs.org) App Router project with a statically prerendered home route (`force-static` — HTML produced at build time).

## Scripts

- `npm run dev` — local dev server ([http://localhost:3000](http://localhost:3000))
- `npm run build` — production build
- `npm run start` — run production build locally

## Vercel

This repo keeps Vercel-oriented ignores (`.vercel`, `.env*.local`) and includes `vercel.json` with `"framework": "nextjs"`. Link or redeploy the same Vercel project you used before; the framework preset matches Next.js defaults.

## TypeScript

Path alias: `@/*` → `./src/*`.
