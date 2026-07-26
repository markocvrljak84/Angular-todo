import type { ExperienceContent } from "@/i18n/experience-content";

type Props = {
  content: ExperienceContent["taste"];
  /** Nested inside another section — skip full section padding. */
  embedded?: boolean;
};

export function TasteOfVelebitSection({ content, embedded }: Props) {
  return (
    <section
      id="taste"
      className={`taste-velebit${embedded ? " taste-velebit--embedded" : " flat-section"}`}
      aria-labelledby="taste-title"
    >
      <div className="flat-wrap">
        <p className="taste-velebit__badge">{content.badge}</p>
        <h2 id="taste-title" className="flat-section__title">
          {content.title}
        </h2>
        <p className="flat-section__intro flat-section__intro--lead taste-velebit__intro">
          {content.intro}
        </p>

        <ul className="taste-velebit__grid">
          {content.items.map((item) => (
            <li key={item} className="taste-velebit__card">
              {item}
            </li>
          ))}
        </ul>

        <p className="taste-velebit__footnote">{content.footnote}</p>
      </div>
    </section>
  );
}
