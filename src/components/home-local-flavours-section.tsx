import Image from "next/image";
import type { HomeContent } from "@/i18n/home-content";

type Props = {
  content: HomeContent["localFlavours"];
  imageSrc: string;
};

export function HomeLocalFlavoursSection({ content, imageSrc }: Props) {
  return (
    <section
      className="flat-section local-flavours"
      aria-labelledby="local-flavours-title"
    >
      <div className="flat-wrap local-flavours__grid">
        <div className="local-flavours__body">
          <p className="local-flavours__badge">{content.badge}</p>
          <h2 id="local-flavours-title" className="sr-only">
            {content.items.join(" ")}
          </h2>
          <ul className="local-flavours__lines" aria-labelledby="local-flavours-title">
            {content.items.map((line) => (
              <li key={line} className="local-flavours__line">
                {line}
              </li>
            ))}
          </ul>
          <p className="local-flavours__closing">{content.closing}</p>
        </div>
        <div className="local-flavours__media">
          <Image
            src={imageSrc}
            alt={content.imageAlt}
            width={640}
            height={427}
            className="local-flavours__img"
            sizes="(max-width: 900px) 100vw, 55vw"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
