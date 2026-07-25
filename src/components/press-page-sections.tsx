import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { PressPageContent } from "@/i18n/press-content";
import { localePath } from "@/config/site-routes";

type Props = {
  content: PressPageContent;
  locale: Locale;
};

function resolveInternalHref(locale: Locale, href: string): string {
  if (href === "/about") return localePath(locale, "about");
  if (href === "/velebit-hiking-retreat") return localePath(locale, "velebitHikingRetreat");
  if (href === "/photography-retreat") return localePath(locale, "photographyRetreat");
  return href;
}

export function PressPageSections({ content, locale }: Props) {
  return (
    <div className="flat-section flat-section--tint">
      <div className="flat-wrap flat-wrap--narrow press-page">
        <section className="press-page__section" aria-labelledby="press-featured-title">
          <h2 id="press-featured-title" className="flat-section__title flat-section__title--start">
            {content.featuredTitle}
          </h2>
          <ul className="press-page__links">
            {content.featured.map((item) => (
              <li key={item.href}>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.name}
                </a>
                <p>{item.note}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="press-page__section" aria-labelledby="press-partners-title">
          <h2 id="press-partners-title" className="flat-section__title flat-section__title--start">
            {content.partnersTitle}
          </h2>
          <p className="press-page__body">{content.partnersIntro}</p>
          <ul className="press-page__links">
            {content.partners.map((item) => (
              <li key={item.href}>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.name}
                </a>
                <p>{item.note}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="press-page__section" aria-labelledby="press-audiences-title">
          <h2 id="press-audiences-title" className="flat-section__title flat-section__title--start">
            {content.audiencesTitle}
          </h2>
          {content.audiences.map((audience) => (
            <article key={audience.title} className="press-page__audience">
              <h3 className="press-page__audience-title">{audience.title}</h3>
              <p className="press-page__body">{audience.body}</p>
              <ul className="stay-checklist">
                {audience.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              {audience.relatedHref && audience.relatedLabel ? (
                <p className="press-page__related">
                  <Link href={resolveInternalHref(locale, audience.relatedHref)}>
                    {audience.relatedLabel}
                  </Link>
                </p>
              ) : null}
            </article>
          ))}
        </section>

        <section className="press-page__section" aria-labelledby="press-facts-title">
          <h2 id="press-facts-title" className="flat-section__title flat-section__title--start">
            {content.factsTitle}
          </h2>
          <ul className="press-page__facts">
            {content.facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </section>

        <section className="press-page__section" aria-labelledby="press-outreach-title">
          <h2 id="press-outreach-title" className="flat-section__title flat-section__title--start">
            {content.outreachTitle}
          </h2>
          <p className="press-page__body">{content.outreachBody}</p>
          <p className="press-page__contact-lead">{content.contactLead}</p>
          <a className="press-page__email" href={`mailto:${content.contactEmailLabel}`}>
            {content.contactEmailLabel}
          </a>
        </section>
      </div>
    </div>
  );
}
