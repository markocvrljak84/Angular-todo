import Link from "next/link";
import type { Locale } from "@/i18n/config";
import {
  type JournalContent,
  journalArticlePath,
  journalCategoryPath,
} from "@/i18n/journal-content";

type Props = {
  content: JournalContent;
  locale: Locale;
  /** Hub page shows category headers; compact omits page title. */
  compact?: boolean;
};

export function JournalHub({ content, locale, compact }: Props) {
  return (
    <div className="journal-hub">
      {compact ? null : (
        <>
          <h2 className="flat-section__title">{content.title}</h2>
          <p className="flat-section__intro flat-section__intro--lead journal-hub__intro">
            {content.intro}
          </p>
        </>
      )}

      <div className="journal-hub__categories">
        {content.categories.map((category) => (
          <section
            key={category.id}
            id={category.id}
            className="journal-category-block"
            aria-labelledby={`journal-cat-${category.id}`}
          >
            <div className="journal-category-block__head">
              <h3 id={`journal-cat-${category.id}`} className="journal-category-block__title">
                <Link href={journalCategoryPath(locale, category.id)}>
                  {category.title}
                </Link>
              </h3>
              <p className="journal-category-block__intro">{category.intro}</p>
            </div>

            <ul className="journal-hub__grid">
              {category.articles.map((article) => {
                const isPublished = article.status === "published";

                return (
                  <li key={article.slug}>
                    {isPublished ? (
                      <Link
                        href={journalArticlePath(locale, article.categoryId, article.slug)}
                        className="journal-card journal-card--linked"
                      >
                        <span className="journal-card__title">{article.title}</span>
                        <span className="journal-card__teaser">{article.teaser}</span>
                        <span className="journal-card__action">{content.readArticleLabel}</span>
                      </Link>
                    ) : (
                      <article className="journal-card journal-card--soon">
                        <span className="journal-card__badge">{content.comingSoonLabel}</span>
                        <h4 className="journal-card__title">{article.title}</h4>
                        <p className="journal-card__teaser">{article.teaser}</p>
                      </article>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
