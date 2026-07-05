import type { MetadataRoute } from "next";
import {
  INDEXABLE_PAGE_KEYS,
  SITEMAP_CHANGE_FREQUENCY,
  SITEMAP_PAGE_PRIORITY,
  localePath,
  type IndexablePageKey,
} from "@/config/site-routes";
import { defaultLocale } from "@/i18n/config";
import {
  JOURNAL_CATEGORY_IDS,
  getPublishedJournalArticles,
  journalArticlePath,
  journalCategoryPath,
} from "@/i18n/journal-content";
import { getSiteUrl, canonicalAbsoluteUrl } from "@/lib/site-url";

export type IndexableUrlEntry = {
  path: string;
  url: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

/** All public paths eligible for indexing (relative, no locale prefix). */
export function getIndexablePaths(): string[] {
  const paths: string[] = [];

  for (const page of INDEXABLE_PAGE_KEYS) {
    paths.push(localePath(defaultLocale, page));
  }

  for (const categoryId of JOURNAL_CATEGORY_IDS) {
    paths.push(journalCategoryPath(defaultLocale, categoryId));
  }

  for (const article of getPublishedJournalArticles(defaultLocale)) {
    paths.push(journalArticlePath(defaultLocale, article.categoryId, article.slug));
  }

  return [...new Set(paths)];
}

export function getIndexableUrlEntries(): IndexableUrlEntry[] {
  const entries: IndexableUrlEntry[] = [];

  for (const page of INDEXABLE_PAGE_KEYS) {
    const path = localePath(defaultLocale, page);
    entries.push({
      path,
      url: canonicalAbsoluteUrl(path),
      changeFrequency: SITEMAP_CHANGE_FREQUENCY[page],
      priority: SITEMAP_PAGE_PRIORITY[page],
    });
  }

  for (const categoryId of JOURNAL_CATEGORY_IDS) {
    const path = journalCategoryPath(defaultLocale, categoryId);
    entries.push({
      path,
      url: canonicalAbsoluteUrl(path),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  for (const article of getPublishedJournalArticles(defaultLocale)) {
    const path = journalArticlePath(defaultLocale, article.categoryId, article.slug);
    entries.push({
      path,
      url: canonicalAbsoluteUrl(path),
      changeFrequency: "monthly",
      priority: 0.75,
    });
  }

  return entries;
}

export function buildSitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return getIndexableUrlEntries().map((entry) => ({
    url: entry.url,
    lastModified: now,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}

/** Human-readable audit list for deploy / Search Console checks. */
export function formatIndexableUrlReport(baseUrl = getSiteUrl()): string {
  const lines = getIndexableUrlEntries().map(
    (entry, i) => `${String(i + 1).padStart(2, "0")}. ${entry.url}`
  );

  return [
    `Site: ${baseUrl}`,
    `Indexable URLs: ${lines.length}`,
    "",
    ...lines,
  ].join("\n");
}

export function isIndexablePageKey(page: string): page is IndexablePageKey {
  return (INDEXABLE_PAGE_KEYS as readonly string[]).includes(page);
}
