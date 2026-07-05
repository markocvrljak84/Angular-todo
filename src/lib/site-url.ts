/**
 * Canonical site origin for metadata, sitemap, and JSON-LD.
 * Set `NEXT_PUBLIC_SITE_URL` in production (e.g. https://www.example.com — no trailing slash).
 */
const CANONICAL_WWW_HOST = "www.velebit-starspeak.com";

function normalizeSiteOrigin(url: string): string {
  try {
    const parsed = new URL(url);
    if (parsed.hostname === "velebit-starspeak.com") {
      parsed.hostname = CANONICAL_WWW_HOST;
    }
    return parsed.origin;
  } catch {
    return url.replace(/\/$/, "");
  }
}

export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (fromEnv) return normalizeSiteOrigin(fromEnv);
  if (process.env.VERCEL_URL) {
    return normalizeSiteOrigin(`https://${process.env.VERCEL_URL.replace(/\/$/, "")}`);
  }
  return "http://localhost:3000";
}

export function getMetadataBase(): URL {
  return new URL(`${getSiteUrl()}/`);
}
