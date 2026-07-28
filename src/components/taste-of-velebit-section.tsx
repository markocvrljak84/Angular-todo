import Image from "next/image";
import type { ExperienceContent } from "@/i18n/experience-content";

type Props = {
  content: ExperienceContent["taste"];
  /** Nested inside another section — skip full section padding; title becomes h3. */
  embedded?: boolean;
};

export function TasteOfVelebitSection({ content, embedded }: Props) {
  const TitleTag = embedded ? "h3" : "h2";

  return (
    <section
      id="taste"
      className={`taste-velebit${embedded ? " taste-velebit--embedded" : " flat-section"}`}
      aria-labelledby="taste-title"
    >
      <div className={embedded ? "taste-velebit__inner" : "flat-wrap"}>
        <p className="taste-velebit__badge">{content.badge}</p>
        <TitleTag id="taste-title" className="taste-velebit__title">
          {content.title}
        </TitleTag>
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

type AgroProps = {
  title: string;
  intro: string;
  taste: ExperienceContent["taste"];
};

/** Future agrotourism block: dominant title, strawberry motif, then Taste of Velebit. */
export function ExperiencesAgroSection({ title, intro, taste }: AgroProps) {
  return (
    <section id="agro" className="flat-section experiences-agro" aria-labelledby="exp-agro">
      <div className="flat-wrap experiences-agro__inner">
        <h2 id="exp-agro" className="experiences-agro__title">
          {title}
        </h2>
        <p className="experiences-agro__intro">{intro}</p>

        <div className="experiences-agro__motif" aria-hidden="true">
          <Image
            className="experiences-agro__motif-img"
            src="/img/illustrations/header-wild-strawberry.webp"
            alt=""
            width={800}
            height={800}
            sizes="(min-width: 768px) 8.5rem, 6.5rem"
            loading="lazy"
            decoding="async"
          />
        </div>

        <TasteOfVelebitSection content={taste} embedded />
      </div>
    </section>
  );
}
