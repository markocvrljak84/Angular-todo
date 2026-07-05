import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JournalCategoryPage } from "@/components/journal-category-page";
import { PageJsonLd } from "@/components/page-json-ld";
import { JsonLdScript } from "@/components/json-ld-script";
import {
  JOURNAL_CATEGORY_IDS,
  getJournalCategory,
  getJournalContent,
  isJournalCategoryId,
  journalCategoryPath,
} from "@/i18n/journal-content";
import { getMessages } from "@/i18n/messages";
import { activeLocales } from "@/i18n/config";
import { resolveLocale } from "@/lib/locale-page";
import { buildBreadcrumbListJsonLd } from "@/lib/structured-data/build-breadcrumb-list";
import { buildWebPageJsonLd } from "@/lib/structured-data/build-web-page";
import { canonicalAbsoluteUrl } from "@/lib/site-url";

export const dynamic = "force-static";

export function generateStaticParams() {
  const params: { locale: string; category: string }[] = [];

  for (const locale of activeLocales) {
    for (const categoryId of JOURNAL_CATEGORY_IDS) {
      params.push({ locale, category: categoryId });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}): Promise<Metadata> {
  const { locale: l, category: categoryId } = await params;
  const locale = await resolveLocale(Promise.resolve({ locale: l }));
  if (!isJournalCategoryId(categoryId)) return {};

  const category = getJournalCategory(locale, categoryId);
  if (!category) return {};

  const pageUrl = canonicalAbsoluteUrl(journalCategoryPath(locale, categoryId));

  return {
    title: `${category.title} — Journal · Stars Peak`,
    description: category.intro,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: `${category.title} — Journal`,
      description: category.intro,
      url: pageUrl,
    },
  };
}

type Props = { params: Promise<{ locale: string; category: string }> };

export default async function JournalCategoryRoute({ params }: Props) {
  const { locale: l, category: categoryId } = await params;
  const locale = await resolveLocale(Promise.resolve({ locale: l }));

  if (!isJournalCategoryId(categoryId)) notFound();

  const journal = getJournalContent(locale);
  const category = getJournalCategory(locale, categoryId);
  if (!category) notFound();

  const t = getMessages(locale);
  const pageUrl = canonicalAbsoluteUrl(journalCategoryPath(locale, categoryId));
  const breadcrumbItems = [
    { name: t.nav.home, page: "home" as const },
    { name: journal.title, page: "journal" as const },
    { name: category.title },
  ];

  const graph = [
    buildWebPageJsonLd(locale, "journal", pageUrl, {
      name: `${category.title} — Journal · Stars Peak`,
      description: category.intro,
    }),
    buildBreadcrumbListJsonLd(locale, t, breadcrumbItems, pageUrl),
  ];

  return (
    <>
      <PageJsonLd locale={locale} messages={t} page="journal" />
      <JsonLdScript id={`journal-category-json-ld-${categoryId}`} data={graph} />

      <div className="flat-section flat-section--page">
        <div className="flat-wrap flat-wrap--narrow">
          <JournalCategoryPage content={journal} category={category} locale={locale} />
        </div>
      </div>
    </>
  );
}
