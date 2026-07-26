import Image from "next/image";

type Props = {
  title: string;
  line: string;
  artLabel: string;
};

export function HomeWelcomeStrip({ title, line, artLabel }: Props) {
  return (
    <section className="home-welcome" aria-label={title}>
      <div className="home-welcome__inner">
        <div className="home-welcome__copy">
          <p className="home-welcome__title">{title}</p>
          <p className="home-welcome__line">{line}</p>
        </div>
        <div className="home-welcome__rule" aria-hidden="true" />
        <div className="home-welcome__visual">
          <Image
            className="home-welcome__art"
            src="/img/illustrations/welcome-bear.webp"
            alt={artLabel}
            width={900}
            height={900}
            sizes="(min-width: 768px) 15.5rem, 13.5rem"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
