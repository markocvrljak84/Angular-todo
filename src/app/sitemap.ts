import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import {
  SITE_PAGE_KEYS,
  SITE_PAGE_SEGMENTS,
} from "@/config/site-routes";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of SITE_PAGE_KEYS) {
      const segment = SITE_PAGE_SEGMENTS[page];
      const path = segment ? `/${locale}/${segment}` : `/${locale}`;
      entries.push({
        url: `${base}${path}`,
        lastModified: now,
        changeFrequency: page === "home" ? "weekly" : "monthly",
        priority:
          page === "home" ? (locale === "en" ? 1 : 0.9) : locale === "en" ? 0.85 : 0.8,
      });
    }
  }

  return entries;
}
