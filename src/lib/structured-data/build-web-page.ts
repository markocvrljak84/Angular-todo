import type { Locale } from "@/i18n/config";
import type { SitePageKey } from "@/config/site-routes";
import { localePath } from "@/config/site-routes";
import { getPageSeo } from "@/i18n/page-seo";
import { canonicalAbsoluteUrl } from "@/lib/site-url";

function absolutePageUrl(locale: Locale, page: SitePageKey): string {
  return canonicalAbsoluteUrl(localePath(locale, page));
}

export function buildWebPageJsonLd(
  locale: Locale,
  page: SitePageKey,
  pageUrl?: string,
  overrides?: { name?: string; description?: string }
) {
  const resolvedPageUrl = pageUrl ?? absolutePageUrl(locale, page);
  const seo = getPageSeo(locale, page);
  const homeUrl = absolutePageUrl(locale, "home");

  return {
    "@type": "WebPage",
    "@id": `${resolvedPageUrl}#webpage`,
    url: resolvedPageUrl,
    name: overrides?.name ?? seo.title,
    description: overrides?.description ?? seo.description,
    isPartOf: { "@id": `${canonicalAbsoluteUrl("/")}#website` },
    about: { "@id": `${homeUrl}#vacation-rental` },
    breadcrumb: { "@id": `${resolvedPageUrl}#breadcrumb` },
  };
}
