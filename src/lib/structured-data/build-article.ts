import type { Locale } from "@/i18n/config";
import type { JournalArticle } from "@/i18n/journal-content";
import { journalArticlePath } from "@/i18n/journal-content";
import { getSiteUrl } from "@/lib/site-url";

export function buildArticleJsonLd(locale: Locale, article: JournalArticle) {
  const pageUrl = `${getSiteUrl()}${journalArticlePath(locale, article.categoryId, article.slug)}`;

  return {
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline: article.title,
    description: article.seoDescription ?? article.teaser,
    url: pageUrl,
    inLanguage: "en-US",
    author: {
      "@type": "Organization",
      name: "Stars Peak",
    },
    publisher: {
      "@type": "Organization",
      name: "Stars Peak",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
    },
  };
}
