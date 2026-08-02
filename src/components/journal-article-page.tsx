import Image from "next/image";
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
        <h1 className="flat-section__title flat-section__title--start">{article.title}</h1>
        <p className="journal-article__teaser">{article.teaser}</p>
      </header>

      <div className={`journal-article__content${article.image ? " journal-article__content--with-image" : ""}`}>
        <div className="journal-article__body">
          {article.paragraphs?.map((paragraph) => (
            <p key={paragraph} className="journal-article__paragraph">
              {paragraph}
            </p>
          ))}
        </div>

        {article.image && (
          <div className="journal-article__image">
            <Image
              src={article.image.src}
              alt={article.image.alt}
              width={article.image.width ?? 1200}
              height={article.image.height ?? 900}
              className="journal-article__image-img"
              sizes="(min-width: 1100px) 40vw, (min-width: 860px) 38vw, 100vw"
              priority
            />
          </div>
        )}
      </div>

      {article.externalLinks?.length ? (
        <aside className="journal-article__external">
          <p className="journal-article__related-label">External links</p>
          <ul className="journal-article__related-links">
            {article.externalLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      ) : null}

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
