import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { UtilityPagesContent } from "@/i18n/utility-pages";
import { localePath } from "@/config/site-routes";

type Props = {
  content: UtilityPagesContent["notFound"];
  locale: Locale;
};

export function NotFoundContent({ content, locale }: Props) {
  return (
    <>
      <div className="flat-section flat-section--under-header">
        <div className="flat-wrap flat-wrap--narrow">
          <p className="not-found__code" aria-hidden="true">
            404
          </p>
          <h1 className="flat-section__title flat-section__title--start">{content.title}</h1>
          <p className="flat-section__intro flat-section__intro--lead flat-section__intro--start">
            {content.intro}
          </p>
        </div>
      </div>

      <section className="flat-section flat-section--tint" aria-label={content.title}>
        <div className="flat-wrap flat-wrap--narrow">
          <ul className="not-found__links">
            <li>
              <Link href={localePath(locale, "home")}>{content.homeLabel}</Link>
            </li>
            <li>
              <Link href={localePath(locale, "accommodation")}>{content.stayLabel}</Link>
            </li>
            <li>
              <Link href={localePath(locale, "htmlSitemap")}>{content.sitemapLabel}</Link>
            </li>
            <li>
              <Link href={localePath(locale, "contact")}>{content.contactLabel}</Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
