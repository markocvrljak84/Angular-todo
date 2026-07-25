import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";
import type { UtilityPagesContent } from "@/i18n/utility-pages";
import {
  localePath,
  SITE_PAGE_NAV_KEYS,
  type SitePageKey,
} from "@/config/site-routes";

type Props = {
  content: UtilityPagesContent["htmlSitemap"];
  locale: Locale;
  t: Messages;
};

function pageLabel(t: Messages, page: SitePageKey): string {
  return t.nav[SITE_PAGE_NAV_KEYS[page]];
}

export function HtmlSitemapSections({ content, locale, t }: Props) {
  return (
    <section className="flat-section flat-section--tint" aria-label={content.title}>
      <div className="flat-wrap flat-wrap--narrow html-sitemap">
        {content.groups.map((group) => (
          <div key={group.title} className="html-sitemap__group">
            <h2 className="flat-section__title flat-section__title--start">
              {group.title}
            </h2>
            <ul className="html-sitemap__list">
              {group.pages.map((page) => (
                <li key={page}>
                  <Link href={localePath(locale, page)}>{pageLabel(t, page)}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
