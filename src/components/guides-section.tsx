import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { ExperienceContent } from "@/i18n/experience-content";
import { localePath } from "@/config/site-routes";
import type { SitePageKey } from "@/config/site-routes";

type Props = {
  content: ExperienceContent["guides"];
  locale: Locale;
  /** When true, render only the article grid (page supplies h1). */
  compact?: boolean;
};

const HREF_TO_PAGE: Record<string, SitePageKey> = {
  "/hiking": "hiking",
  "/nearby": "nearby",
  "/experience-day": "home",
};

function resolveHref(locale: Locale, href: string): string {
  if (href.startsWith("#")) {
    const key = HREF_TO_PAGE[`/${href.slice(1)}`] ?? "home";
    const base = localePath(locale, key);
    return href.length > 1 ? `${base}${href}` : base;
  }
  if (href.startsWith("/")) {
    const key = HREF_TO_PAGE[href];
    return key ? localePath(locale, key) : `/${locale}${href}`;
  }
  return href;
}

export function GuidesSection({ content, locale, compact }: Props) {
  const grid = (
    <ul className="guides__grid">
      {content.articles.map((article) => (
        <li key={article.title}>
          <Link href={resolveHref(locale, article.href)} className="guides__card">
            <span className="guides__card-badge">{content.comingSoonLabel}</span>
            <h3 className="guides__card-title">{article.title}</h3>
            <p className="guides__card-teaser">{article.teaser}</p>
          </Link>
        </li>
      ))}
    </ul>
  );

  if (compact) return grid;

  return (
    <section className="guides flat-section flat-section--tint" aria-labelledby="guides-title">
      <div className="flat-wrap">
        <h2 id="guides-title" className="flat-section__title">
          {content.title}
        </h2>
        <p className="flat-section__intro flat-section__intro--lead">
          {content.intro}
        </p>
        {grid}
      </div>
    </section>
  );
}
