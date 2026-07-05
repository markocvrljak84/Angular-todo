import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";
import type { SitePageKey } from "@/config/site-routes";
import { JsonLdScript } from "@/components/json-ld-script";
import {
  type BreadcrumbItem,
  breadcrumbItemsForPage,
  buildBreadcrumbListJsonLd,
} from "@/lib/structured-data/build-breadcrumb-list";
import { buildFaqPageJsonLd } from "@/lib/structured-data/build-faq-page";
import { buildWebPageJsonLd } from "@/lib/structured-data/build-web-page";
import { localePath } from "@/config/site-routes";
import { canonicalAbsoluteUrl } from "@/lib/site-url";

type Props = {
  locale: Locale;
  messages: Messages;
  page: SitePageKey;
  /** Override default Home → page trail (e.g. thank-you subpage). */
  breadcrumbItems?: BreadcrumbItem[];
  /** Override page URL for WebPage / Breadcrumb @id (e.g. thank-you subpage). */
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

  return <JsonLdScript id={`page-json-ld-${page}`} data={graph} />;
}
