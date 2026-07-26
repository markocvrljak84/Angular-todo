import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/config/site-routes";
import {
  type JournalContent,
  journalArticlePath,
  journalCategoryPath,
} from "@/i18n/journal-content";

type Props = {
  content: JournalContent;
  locale: Locale;
  experiencesHref: string;
  /** Tighter vertical padding when stacked under another section. */
  compact?: boolean;
};

export function JournalTeaserSection({ content, locale, experiencesHref, compact }: Props) {
  const featured = content.categories
    .flatMap((category) => category.articles)
    .find((article) => article.status === "published");

  return (
    <section
      id="journal"
      className={`flat-section journal-teaser${compact ? " journal-teaser--compact" : ""}`}
      aria-labelledby="journal-teaser-title"
    >
      <div className="flat-wrap">
        <div className="journal-teaser__head">
          <p className="journal-teaser__eyebrow">From the mountain</p>
          <h2 id="journal-teaser-title" className="flat-section__title">
            {content.title}
          </h2>
          <p className="flat-section__intro">{content.intro}</p>
        </div>

        {featured ? (
          <div className="journal-teaser__featured">
            <p className="journal-teaser__featured-label">Latest</p>
            <h3 className="journal-teaser__featured-title">
              <Link
                href={journalArticlePath(locale, featured.categoryId, featured.slug)}
              >
                {featured.title}
              </Link>
            </h3>
            <p className="journal-teaser__featured-teaser">{featured.teaser}</p>
            <Link
              href={journalArticlePath(locale, featured.categoryId, featured.slug)}
              className="journal-teaser__featured-link"
            >
              {content.readArticleLabel}
            </Link>
          </div>
        ) : null}

        <ul className="journal-teaser__categories">
          {content.categories.map((category) => (
            <li key={category.id}>
              <Link href={journalCategoryPath(locale, category.id)} className="journal-teaser__cat">
                {category.title}
              </Link>
            </li>
          ))}
        </ul>

        <p className="journal-teaser__footer">
          <Link href={localePath(locale, "journal")} className="journal-teaser__all">
            Explore the full Journal
          </Link>
          <span className="journal-teaser__sep" aria-hidden="true">
            ·
          </span>
          <Link href={experiencesHref} className="journal-teaser__experiences">
            Back to Experiences
          </Link>
        </p>
      </div>
    </section>
  );
}
