import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/config/site-routes";
import {
  type JournalArticle,
  type JournalCategory,
  journalCategoryPath,
} from "@/i18n/journal-content";

type Props = {
  category: JournalCategory;
  article: JournalArticle;
  locale: Locale;
  experiencesHref: string;
  accommodationHref: string;
};

export function JournalArticlePage({
  category,
  article,
  locale,
  experiencesHref,
  accommodationHref,
}: Props) {
  return (
    <article className="journal-article">
      <nav className="journal-breadcrumb" aria-label="Breadcrumb">
        <Link href={localePath(locale, "journal")}>Journal</Link>
        <span aria-hidden="true"> / </span>
        <Link href={journalCategoryPath(locale, category.id)}>{category.title}</Link>
        <span aria-hidden="true"> / </span>
        <span>{article.title}</span>
      </nav>

      <header className="journal-article__header">
        <p className="journal-article__eyebrow">{category.title}</p>
        <h1 className="journal-article__title">{article.title}</h1>
        <p className="journal-article__teaser">{article.teaser}</p>
      </header>

      <div className="journal-article__body">
        {article.paragraphs?.map((paragraph) => (
          <p key={paragraph} className="journal-article__paragraph">
            {paragraph}
          </p>
        ))}
      </div>

      <aside className="journal-article__related">
        <p className="journal-article__related-label">Continue exploring</p>
        <ul className="journal-article__related-links">
          <li>
            <Link href={experiencesHref}>Experiences & trails</Link>
          </li>
          <li>
            <Link href={accommodationHref}>Book your stay at Stars Peak</Link>
          </li>
          <li>
            <Link href={journalCategoryPath(locale, category.id)}>
              More in {category.title}
            </Link>
          </li>
        </ul>
      </aside>
    </article>
  );
}
