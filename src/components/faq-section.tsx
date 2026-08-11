import {
  SITE_CONTACT,
  whatsappHref,
} from "@/config/site-contact";
import type { GoodToKnowContent, GoodToKnowSection } from "@/i18n/good-to-know";
import type { OffGridMindfulContent } from "@/i18n/off-grid-mindful";
import { OffGridMindfulNotice } from "@/components/off-grid-mindful-notice";

const WHATSAPP_PHONES = [
  SITE_CONTACT.phone,
  SITE_CONTACT.phoneSecondary,
] as const;

type Props = {
  content: GoodToKnowContent;
  /** When true, page banner supplies the title — render only accordion + intro */
  compact?: boolean;
  /** When true, render accordion body only — no outer section or wrap */
  embedded?: boolean;
  /** Important note shown directly under the Good to know title */
  mindfulNotice?: OffGridMindfulContent;
};

function FaqAccordionPanel({
  section,
  whatsappLinkLabel,
}: {
  section: GoodToKnowSection;
  whatsappLinkLabel: string;
}) {
  return (
    <div className="faq__panel">
      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph} className="faq__text">
          {paragraph}
        </p>
      ))}

      {section.listIntro ? <p className="faq__text">{section.listIntro}</p> : null}

      {section.listItems?.length ? (
        <ul className="faq__list">
          {section.listItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}

      {section.paragraphsAfter?.map((paragraph) => (
        <p key={paragraph} className="faq__text">
          {paragraph}
        </p>
      ))}

      {section.phoneIntro ? (
        <>
          <p className="faq__text">{section.phoneIntro}</p>
          <ul className="faq__phones">
            {WHATSAPP_PHONES.map((phone) => (
              <li key={phone}>
                <a
                  href={whatsappHref(phone)}
                  className="faq__phone-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="faq__phone-label">{whatsappLinkLabel}</span>
                  {phone}
                </a>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  );
}

export function FaqSection({ content, compact, embedded, mindfulNotice }: Props) {
  const body = (
    <>
      {compact ? (
        <>
          {mindfulNotice ? (
            <OffGridMindfulNotice content={mindfulNotice} compact />
          ) : null}
          <p className="flat-section__intro flat-section__intro--lead faq__intro">
            {content.intro}
          </p>
        </>
      ) : (
        <>
          <h2 id="good-to-know-title" className="flat-section__title">
            {content.title}
          </h2>
          {mindfulNotice ? (
            <OffGridMindfulNotice content={mindfulNotice} compact />
          ) : null}
          <p className="flat-section__intro flat-section__intro--lead faq__intro">
            {content.intro}
          </p>
        </>
      )}

      <div className="faq__accordion">
        {content.sections.map((section, index) => (
          <details
            key={section.title}
            className="faq__item"
            open={index === 0}
          >
            <summary className="faq__summary">{section.title}</summary>
            <FaqAccordionPanel
              section={section}
              whatsappLinkLabel={content.whatsappLinkLabel}
            />
          </details>
        ))}
      </div>
    </>
  );

  if (embedded) {
    return body;
  }

  return (
    <section
      id="good-to-know"
      className="faq flat-section"
      aria-labelledby={compact ? undefined : "good-to-know-title"}
    >
      <div className="flat-wrap flat-wrap--narrow">{body}</div>
    </section>
  );
}
