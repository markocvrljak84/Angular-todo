import { BookCta } from "@/components/book-cta";
import type { TopicPageContent } from "@/i18n/topic-pages";

type Props = {
  content: TopicPageContent;
  bookLabel: string;
};

export function TopicPageSections({ content, bookLabel }: Props) {
  return (
    <>
      <section className="flat-section flat-section--tint" aria-label={content.title}>
        <div className="flat-wrap flat-wrap--narrow">
          {content.blocks.map((block) => (
            <article key={block.title} className="topic-page__block">
              <h2 className="flat-section__title flat-section__title--start">{block.title}</h2>
              <p className="topic-page__body">{block.body}</p>
            </article>
          ))}

          <div className="topic-page__points">
            <p className="topic-page__points-label">{content.pointsLabel}</p>
            <ul className="stay-checklist">
              {content.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="flat-section topic-page__faq" aria-labelledby="topic-faq-title">
        <div className="flat-wrap flat-wrap--narrow">
          <h2 id="topic-faq-title" className="flat-section__title">
            {content.faqTitle}
          </h2>
          <div className="faq__accordion">
            {content.faqs.map((faq) => (
              <details key={faq.question} className="faq__item">
                <summary className="faq__summary">{faq.question}</summary>
                <div className="faq__panel">
                  <p className="faq__text">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <BookCta variant="banner" label={bookLabel} lead={content.ctaLead} />
    </>
  );
}
