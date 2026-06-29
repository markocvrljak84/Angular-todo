import type { MetadataRoute } from "next";
import { activeLocales } from "@/i18n/config";
import {
  INDEXABLE_PAGE_KEYS,
  SITEMAP_CHANGE_FREQUENCY,
  SITEMAP_PAGE_PRIORITY,
  localePath,
} from "@/config/site-routes";
import {
  JOURNAL_CATEGORY_IDS,
  getPublishedJournalArticles,
  journalArticlePath,
  journalCategoryPath,
} from "@/i18n/journal-content";
import type { Locale } from "@/i18n/config";
import { getSiteUrl } from "@/lib/site-url";

function absoluteUrl(path: string): string {
  const base = getSiteUrl();
  return `${base}${path === "/" ? "" : path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of activeLocales) {
    for (const page of INDEXABLE_PAGE_KEYS) {
      const path = localePath(locale, page);
      entries.push({
        url: absoluteUrl(path),
        lastModified: now,
        changeFrequency: SITEMAP_CHANGE_FREQUENCY[page],
        priority: SITEMAP_PAGE_PRIORITY[page],
      });
    }

    const loc = locale as Locale;

    for (const categoryId of JOURNAL_CATEGORY_IDS) {
      entries.push({
        url: absoluteUrl(journalCategoryPath(loc, categoryId)),
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }

    for (const article of getPublishedJournalArticles(loc)) {
      entries.push({
        url: absoluteUrl(journalArticlePath(loc, article.categoryId, article.slug)),
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.75,
      });
    }
  }

  return entries;
}
