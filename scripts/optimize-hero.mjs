/**
 * Regenerate hero WebP assets after changing /public/img/main-carousel JPGs.
 * Usage: node scripts/optimize-hero.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(root, "..", "public", "img", "main-carousel");

const carousel = [
  "581480514_122107015833084437_6966149935686680015_n.jpg",
  "571275863_122102378865084437_4800487342368999167_n.jpg",
  "578265540_122104807869084437_5111680495021054907_n.jpg",
  "585009655_122107017075084437_1671659401079838438_n.jpg",
];

const lcpSource = carousel[0];

for (const width of [640, 1280, 1920]) {
  const out = path.join(dir, `hero-lcp-${width}.webp`);
  await sharp(path.join(dir, lcpSource))
    .rotate()
    .resize(width, null, { withoutEnlargement: true })
    .webp({ quality: 76, effort: 4 })
    .toFile(out);
  console.log(`wrote ${out} (${(fs.statSync(out).size / 1024).toFixed(1)} KB)`);
}

for (const file of carousel) {
  const base = file.replace(/\.jpg$/i, "");
  const out = path.join(dir, `${base}-1280.webp`);
  await sharp(path.join(dir, file))
    .rotate()
    .resize(1280, null, { withoutEnlargement: true })
    .webp({ quality: 76, effort: 4 })
    .toFile(out);
  console.log(`wrote ${out} (${(fs.statSync(out).size / 1024).toFixed(1)} KB)`);
}
