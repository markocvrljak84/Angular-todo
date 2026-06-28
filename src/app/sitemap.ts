import type { MetadataRoute } from "next";
import { activeLocales } from "@/i18n/config";
import {
  SITE_PAGE_KEYS,
  localePath,
} from "@/config/site-routes";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of activeLocales) {
    for (const page of SITE_PAGE_KEYS) {
      const path = localePath(locale, page);
      entries.push({
        url: `${base}${path === "/" ? "" : path}`,
        lastModified: now,
        changeFrequency: page === "home" ? "weekly" : "monthly",
        priority: page === "home" ? 1 : 0.85,
      });
    }
  }

  return entries;
}
