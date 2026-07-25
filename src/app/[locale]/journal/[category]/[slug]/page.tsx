import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JournalArticlePage } from "@/components/journal-article-page";
import { JsonLdScript } from "@/components/json-ld-script";
import { localePath } from "@/config/site-routes";
import {
  getJournalArticle,
  getJournalCategory,
  getJournalContent,
  getPublishedJournalArticles,
  isJournalCategoryId,
  journalArticlePath,
  journalCategoryPath,
} from "@/i18n/journal-content";
import { getMessages } from "@/i18n/messages";
import { activeLocales, type Locale } from "@/i18n/config";
import { resolveLocale } from "@/lib/locale-page";
import { buildArticleJsonLd } from "@/lib/structured-data/build-article";
import { buildBreadcrumbListJsonLd } from "@/lib/structured-data/build-breadcrumb-list";
import { buildWebPageJsonLd } from "@/lib/structured-data/build-web-page";
import { canonicalAbsoluteUrl } from "@/lib/site-url";

export const dynamic = "force-static";

export function generateStaticParams() {
  const params: { locale: string; category: string; slug: string }[] = [];

  for (const locale of activeLocales) {
    for (const article of getPublishedJournalArticles(locale)) {
      params.push({
        locale,
        category: article.categoryId,
        slug: article.slug,
      });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; category: string; slug: string }>;
}): Promise<Metadata> {
  const resolved = await params;
  const locale = await resolveLocale(Promise.resolve({ locale: resolved.locale }));
  const { category: categoryId, slug } = resolved;

  if (!isJournalCategoryId(categoryId)) return {};

  const article = getJournalArticle(locale, categoryId, slug);
  if (!article || article.status !== "published") return {};

  const pageUrl = canonicalAbsoluteUrl(journalArticlePath(locale, categoryId, slug));

  return {
    title: { absolute: `${article.title} — Journal · Stars Peak` },
    description: article.seoDescription ?? article.teaser,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.seoDescription ?? article.teaser,
      url: pageUrl,
    },
  };
}

type Props = { params: Promise<{ locale: string; category: string; slug: string }> };

export default async function JournalArticleRoute({ params }: Props) {
  const resolved = await params;
  const locale = await resolveLocale(Promise.resolve({ locale: resolved.locale }));
  const { category: categoryId, slug } = resolved;

  if (!isJournalCategoryId(categoryId)) notFound();

  const journal = getJournalContent(locale);
  const category = getJournalCategory(locale, categoryId);
  const article = getJournalArticle(locale, categoryId, slug);

  if (!category || !article || article.status !== "published") notFound();

  const t = getMessages(locale);
  const pageUrl = canonicalAbsoluteUrl(journalArticlePath(locale, categoryId, slug));
  const crumbs = [
    { name: t.nav.home, page: "home" as const },
    { name: journal.title, page: "journal" as const },
    {
      name: category.title,
      href: canonicalAbsoluteUrl(journalCategoryPath(locale, categoryId)),
    },
    { name: article.title },
  ];

  const graph = [
    buildWebPageJsonLd(locale, "journal", pageUrl, {
      name: `${article.title} — Journal · Stars Peak`,
      description: article.seoDescription ?? article.teaser,
    }),
    buildArticleJsonLd(locale, article),
    buildBreadcrumbListJsonLd(locale, t, crumbs, pageUrl),
  ];

  return (
    <>
      <JsonLdScript id={`journal-article-json-ld-${slug}`} data={graph} />

      <div className="flat-section flat-section--page">
        <div className="flat-wrap flat-wrap--narrow">
          <JournalArticlePage
            category={category}
            article={article}
            locale={locale}
            experiencesHref={localePath(locale, "experiences")}
            accommodationHref={localePath(locale, "accommodation")}
          />
        </div>
      </div>
    </>
  );
}
