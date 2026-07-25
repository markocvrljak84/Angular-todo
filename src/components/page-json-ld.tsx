import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";
import {
  isSeoTopicPageKey,
  type SitePageKey,
} from "@/config/site-routes";
import { JsonLdScript } from "@/components/json-ld-script";
import {
  type BreadcrumbItem,
  breadcrumbItemsForPage,
  buildBreadcrumbListJsonLd,
} from "@/lib/structured-data/build-breadcrumb-list";
import { buildFaqPageJsonLd } from "@/lib/structured-data/build-faq-page";
import { buildTopicFaqJsonLd } from "@/lib/structured-data/build-topic-faq";
import { buildWebPageJsonLd } from "@/lib/structured-data/build-web-page";
import { localePath } from "@/config/site-routes";
import { getTopicPageContent } from "@/i18n/topic-pages";
import { canonicalAbsoluteUrl } from "@/lib/site-url";

type Props = {
  locale: Locale;
  messages: Messages;
  page: SitePageKey;
  breadcrumbItems?: BreadcrumbItem[];
  pageUrl?: string;
};

export function PageJsonLd({
  locale,
  messages,
  page,
  breadcrumbItems,
  pageUrl,
}: Props) {
  const resolvedPageUrl =
    pageUrl ?? canonicalAbsoluteUrl(localePath(locale, page));
  const items = breadcrumbItems ?? breadcrumbItemsForPage(page, messages);

  const graph: Record<string, unknown>[] = [
    buildWebPageJsonLd(locale, page, resolvedPageUrl),
    buildBreadcrumbListJsonLd(locale, messages, items, resolvedPageUrl),
  ];

  if (page === "goodToKnow" || page === "accommodation") {
    graph.push(buildFaqPageJsonLd(locale, page));
  }

  if (isSeoTopicPageKey(page)) {
    graph.push(
      buildTopicFaqJsonLd(resolvedPageUrl, getTopicPageContent(locale, page).faqs),
    );
  }

  return <JsonLdScript id={`page-json-ld-${page}`} data={graph} />;
}
