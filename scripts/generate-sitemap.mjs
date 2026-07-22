/**
 * Export sitemap.xml for Google Search Console (same URLs as app/sitemap.ts).
 * Run: node scripts/generate-sitemap.mjs
 * Output: public/sitemap-export.xml
 *
 * After deploy, prefer submitting: https://www.velebit-starspeak.com/sitemap.xml
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const OUT = path.join(root, "public/sitemap-export.xml");
const BASE = "https://www.velebit-starspeak.com";
const NOW = new Date().toISOString();

/** Mirrors INDEXABLE_PAGE_KEYS + priorities in src/config/site-routes.ts */
const PAGES = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/accommodation", priority: "0.95", changefreq: "weekly" },
  { path: "/experiences", priority: "0.9", changefreq: "weekly" },
  { path: "/about", priority: "0.8", changefreq: "monthly" },
  { path: "/gallery", priority: "0.85", changefreq: "monthly" },
  { path: "/good-to-know", priority: "0.8", changefreq: "monthly" },
  { path: "/journal", priority: "0.85", changefreq: "monthly" },
  { path: "/contact", priority: "0.75", changefreq: "monthly" },
];

/** Mirrors JOURNAL_CATEGORY_IDS */
const JOURNAL_CATEGORIES = [
  "hiking",
  "nature",
  "stargazing",
  "places",
  "seasons",
];

/**
 * Published journal articles only (status: published in journal-content.ts).
 * Keep in sync when publishing new posts.
 */
const PUBLISHED_ARTICLES = [
  ["hiking", "hiking-on-velebit"],
  ["hiking", "bacic-kuk-hike"],
  ["hiking", "dabarski-kukovi"],
  ["places", "karlobag"],
  ["places", "zavratnica"],
  ["places", "pag"],
  ["places", "baske-ostarije"],
  ["seasons", "spring"],
  ["seasons", "summer"],
  ["seasons", "autumn"],
  ["seasons", "winter"],
];

function urlEntry(loc, { priority, changefreq }) {
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${NOW}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const urls = [];

for (const page of PAGES) {
  urls.push(
    urlEntry(`${BASE}${page.path === "/" ? "/" : page.path}`, {
      priority: page.priority,
      changefreq: page.changefreq,
    }),
  );
}

for (const categoryId of JOURNAL_CATEGORIES) {
  urls.push(
    urlEntry(`${BASE}/journal/${categoryId}`, {
      priority: "0.7",
      changefreq: "monthly",
    }),
  );
}

for (const [categoryId, slug] of PUBLISHED_ARTICLES) {
  urls.push(
    urlEntry(`${BASE}/journal/${categoryId}/${slug}`, {
      priority: "0.75",
      changefreq: "monthly",
    }),
  );
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;

await mkdir(path.dirname(OUT), { recursive: true });
await writeFile(OUT, xml, "utf8");

console.log(`Wrote ${urls.length} URLs → ${path.relative(root, OUT)}`);
console.log("");
console.log("Google Search Console:");
console.log("  1. Deploy the site (live sitemap): https://www.velebit-starspeak.com/sitemap.xml");
console.log("  2. Sitemaps → add URL: sitemap.xml");
console.log("  3. Or use this export file if you need a downloadable copy.");
