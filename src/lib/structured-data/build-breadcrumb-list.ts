import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";
import {
  SITE_PAGE_NAV_KEYS,
  localePath,
  type SitePageKey,
} from "@/config/site-routes";
import { canonicalAbsoluteUrl } from "@/lib/site-url";

export type BreadcrumbItem = {
  name: string;
  page?: SitePageKey;
  href?: string;
};

export function buildBreadcrumbListJsonLd(
  locale: Locale,
  messages: Messages,
  items: BreadcrumbItem[],
  pageUrl?: string
) {
  const resolvedPageUrl =
    pageUrl ??
    (() => {
      const last = [...items].reverse().find((item) => item.page !== undefined);
      return last?.page !== undefined
        ? canonicalAbsoluteUrl(localePath(locale, last.page))
        : canonicalAbsoluteUrl("/");
    })();

  return {
    "@type": "BreadcrumbList",
    "@id": `${resolvedPageUrl}#breadcrumb`,
    itemListElement: items.map((item, index) => {
      const href =
        item.href ??
        (item.page !== undefined
          ? canonicalAbsoluteUrl(localePath(locale, item.page))
          : undefined);

      const listItem: Record<string, unknown> = {
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
      };

      if (href) {
        listItem.item = href;
      }

      return listItem;
    }),
  };
}

export function breadcrumbItemsForPage(
  page: SitePageKey,
  messages: Messages
): BreadcrumbItem[] {
  const nav = messages.nav;
  const home: BreadcrumbItem = { name: nav.home, page: "home" };

  if (page === "home") {
    return [home];
  }

  const navKey = SITE_PAGE_NAV_KEYS[page];
  return [home, { name: nav[navKey], page }];
}
