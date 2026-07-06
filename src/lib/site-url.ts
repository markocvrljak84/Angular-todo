/**
 * Canonical site origin for metadata, sitemap, JSON-LD, and Open Graph.
 * Set `NEXT_PUBLIC_SITE_URL=https://www.velebit-starspeak.com` in production (no trailing slash).
 */
export const CANONICAL_SITE_HOST = "www.velebit-starspeak.com";
export const APEX_SITE_HOST = "velebit-starspeak.com";
export const CANONICAL_SITE_ORIGIN = `https://${CANONICAL_SITE_HOST}`;

function normalizeSiteOrigin(url: string): string {
  try {
    const parsed = new URL(url);
    if (parsed.hostname === APEX_SITE_HOST) {
      parsed.hostname = CANONICAL_SITE_HOST;
    }
    return parsed.origin;
  } catch {
    return url.replace(/\/$/, "");
  }
}

export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (fromEnv) return normalizeSiteOrigin(fromEnv);

  // Production: always emit www canonicals even if env var is missing on Vercel.
  if (process.env.VERCEL === "1" || process.env.NODE_ENV === "production") {
    return CANONICAL_SITE_ORIGIN;
  }

  if (process.env.VERCEL_URL) {
    return normalizeSiteOrigin(`https://${process.env.VERCEL_URL.replace(/\/$/, "")}`);
  }
  return "http://localhost:3000";
}

export function getMetadataBase(): URL {
  return new URL(`${getSiteUrl()}/`);
}

/** Relative path (from localePath, journalArticlePath, etc.) → absolute canonical URL. */
export function canonicalAbsoluteUrl(path: string): string {
  const base = getSiteUrl();
  if (!path || path === "/") {
    return `${base}/`;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

export function isApexHost(hostname: string): boolean {
  return hostname === APEX_SITE_HOST;
}
