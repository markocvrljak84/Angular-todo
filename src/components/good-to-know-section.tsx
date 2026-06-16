import {
  SITE_CONTACT,
  whatsappHref,
} from "@/config/site-contact";
import type { GoodToKnowContent } from "@/i18n/good-to-know";

const WHATSAPP_PHONES = [
  SITE_CONTACT.phone,
  SITE_CONTACT.phoneSecondary,
] as const;

type Props = {
  content: GoodToKnowContent;
};

export function GoodToKnowSection({ content }: Props) {
  return (
    <section
      id="good-to-know"
      className="good-to-know flat-section"
      aria-labelledby="good-to-know-title"
    >
      <div className="flat-wrap">
        <h2 id="good-to-know-title" className="flat-section__title">
          {content.title}
        </h2>
        <p className="flat-section__intro flat-section__intro--lead good-to-know__intro">
          {content.intro}
        </p>

        <div className="good-to-know__grid">
          {content.sections.map((section) => (
            <article
              key={section.title}
              className={`good-to-know__card${
                section.wide ? " good-to-know__card--wide" : ""
              }`}
            >
              <h3 className="good-to-know__card-title">{section.title}</h3>

              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="good-to-know__text">
                  {paragraph}
                </p>
              ))}

              {section.listIntro ? (
                <p className="good-to-know__text">{section.listIntro}</p>
              ) : null}

              {section.listItems?.length ? (
                <ul className="good-to-know__list">
                  {section.listItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}

              {section.paragraphsAfter?.map((paragraph) => (
                <p key={paragraph} className="good-to-know__text">
                  {paragraph}
                </p>
              ))}

              {section.phoneIntro ? (
                <>
                  <p className="good-to-know__text">{section.phoneIntro}</p>
                  <ul className="good-to-know__phones">
                    {WHATSAPP_PHONES.map((phone) => (
                      <li key={phone}>
                        <a
                          href={whatsappHref(phone)}
                          className="good-to-know__phone-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="good-to-know__phone-label">
                            {content.whatsappLinkLabel}
                          </span>
                          {phone}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
