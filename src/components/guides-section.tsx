import Link from "next/link";
import type { ExperienceContent } from "@/i18n/experience-content";

type Props = {
  content: ExperienceContent["guides"];
  /** When true, render only the article grid (page supplies h1). */
  compact?: boolean;
  /** Link to the full blog/guides page (shown on homepage). */
  blogHref?: string;
};

export function GuidesSection({ content, compact, blogHref }: Props) {
  const grid = (
    <ul className="guides__grid">
      {content.articles.map((article) => (
        <li key={article.title}>
          <article className="guides__card guides__card--soon" aria-label={article.title}>
            <span className="guides__card-badge">{content.comingSoonLabel}</span>
            <h3 className="guides__card-title">{article.title}</h3>
            <p className="guides__card-teaser">{article.teaser}</p>
          </article>
        </li>
      ))}
    </ul>
  );

  if (compact) return grid;

  return (
    <section
      id="guides"
      className="guides flat-section flat-section--tint"
      aria-labelledby="guides-title"
    >
      <div className="flat-wrap">
        <h2 id="guides-title" className="flat-section__title">
          {content.title}
        </h2>
        <p className="flat-section__intro flat-section__intro--lead">
          {content.intro}
        </p>
        {grid}
        {blogHref ? (
          <p className="guides__cta">
            <Link href={blogHref} className="guides__cta-link">
              {content.viewAllLabel}
            </Link>
          </p>
        ) : null}
      </div>
    </section>
  );
}
