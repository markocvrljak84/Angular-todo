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

type Props = {
  locale: Locale;
  messages: Messages;
  page: SitePageKey;
  /** Override default Home → page trail (e.g. thank-you subpage). */
  breadcrumbItems?: BreadcrumbItem[];
};

export function PageJsonLd({
  locale,
  messages,
  page,
  breadcrumbItems,
}: Props) {
  const graph: Record<string, unknown>[] = [
    buildBreadcrumbListJsonLd(
      locale,
      messages,
      breadcrumbItems ?? breadcrumbItemsForPage(page, messages)
    ),
  ];

  if (page === "home" || page === "goodToKnow") {
    graph.push(buildFaqPageJsonLd(locale, page));
  }

  return <JsonLdScript id={`page-json-ld-${page}`} data={graph} />;
}
