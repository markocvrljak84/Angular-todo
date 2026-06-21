import type { HomeContent } from "@/i18n/home-content";

type Props = {
  content: HomeContent["whySpecial"];
};

export function WhySpecialSection({ content }: Props) {
  return (
    <section className="flat-section flat-section--tint" aria-labelledby="why-special-title">
      <div className="flat-wrap">
        <h2 id="why-special-title" className="flat-section__title">
          {content.title}
        </h2>
        <ul className="why-special__grid">
          {content.cards.map((card) => (
            <li key={card.title} className="why-special__card">
              <h3 className="why-special__card-title">{card.title}</h3>
              <p className="why-special__card-body">{card.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
