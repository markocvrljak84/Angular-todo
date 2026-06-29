import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/config/site-routes";
import {
  type JournalCategory,
  type JournalContent,
  journalArticlePath,
  journalCategoryPath,
} from "@/i18n/journal-content";

type Props = {
  content: JournalContent;
  category: JournalCategory;
  locale: Locale;
};

export function JournalCategoryPage({ content, category, locale }: Props) {
  return (
    <div className="journal-category-page">
      <nav className="journal-breadcrumb" aria-label="Breadcrumb">
        <Link href={localePath(locale, "journal")}>{content.title}</Link>
        <span aria-hidden="true"> / </span>
        <span>{category.title}</span>
      </nav>

      <h1 className="journal-category-page__title">{category.title}</h1>
      <p className="journal-category-page__intro">{category.intro}</p>

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
                  <h2 className="journal-card__title">{article.title}</h2>
                  <p className="journal-card__teaser">{article.teaser}</p>
                </article>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
