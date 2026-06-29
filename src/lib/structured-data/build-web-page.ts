import type { Locale } from "@/i18n/config";
import type { SitePageKey } from "@/config/site-routes";
import { localePath } from "@/config/site-routes";
import { getPageSeo } from "@/i18n/page-seo";
import { getSiteUrl } from "@/lib/site-url";

function absolutePageUrl(locale: Locale, page: SitePageKey): string {
  const base = getSiteUrl();
  const path = localePath(locale, page);
  return `${base}${path === "/" ? "" : path}`;
}

export function buildWebPageJsonLd(
  locale: Locale,
  page: SitePageKey,
  pageUrl?: string,
  overrides?: { name?: string; description?: string }
) {
  const base = getSiteUrl();
  const resolvedPageUrl = pageUrl ?? absolutePageUrl(locale, page);
  const seo = getPageSeo(locale, page);
  const homeUrl = absolutePageUrl(locale, "home");

  return {
    "@type": "WebPage",
    "@id": `${resolvedPageUrl}#webpage`,
    url: resolvedPageUrl,
    name: overrides?.name ?? seo.title,
    description: overrides?.description ?? seo.description,
    isPartOf: { "@id": `${base}#website` },
    about: { "@id": `${homeUrl}#vacation-rental` },
    breadcrumb: { "@id": `${resolvedPageUrl}#breadcrumb` },
  };
}
