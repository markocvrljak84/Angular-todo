import Image from "next/image";
import Link from "next/link";
import type { HomeContent } from "@/i18n/home-content";

type ZoneImage = {
  src: string;
  alt: string;
};

type Props = {
  content: HomeContent["map"];
  mountainImage: ZoneImage;
  seaImage: ZoneImage;
  id?: string;
};

function PointLink({ href, label }: { href: string; label: string }) {
  const external = /^https?:\/\//i.test(href);

  if (external) {
    return (
      <a
        href={href}
        className="experience-map__point-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className="experience-map__point-link">
      {label}
    </Link>
  );
}

export function ExperienceMapSection({
  content,
  mountainImage,
  seaImage,
  id = "experience-map",
}: Props) {
  return (
    <section
      id={id}
      className="flat-section flat-section--under-header"
      aria-labelledby="experience-map-title"
    >
      <div className="flat-wrap">
        <h2 id="experience-map-title" className="flat-section__title">
          {content.title}
        </h2>
        <p className="flat-section__intro flat-section__intro--lead">{content.intro}</p>

        <div className="experience-map">
          <div className="experience-map__mountain">
            <Image
              src={mountainImage.src}
              alt={mountainImage.alt}
              fill
              className="experience-map__zone-img"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              decoding="async"
            />
            <span className="experience-map__zone experience-map__zone--mountain" aria-hidden="true">
              Velebit
            </span>
          </div>
          <div className="experience-map__sea">
            <Image
              src={seaImage.src}
              alt={seaImage.alt}
              fill
              className="experience-map__zone-img"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
              decoding="async"
            />
            <span className="experience-map__zone experience-map__zone--sea" aria-hidden="true">
              Adriatic
            </span>
          </div>
          <ul className="experience-map__points">
            {content.points.map((point, i) => (
              <li
                key={point.name}
                className={`experience-map__point experience-map__point--${i + 1}`}
              >
                <strong>{point.name}</strong>
                <span>{point.note}</span>
                {point.link ? (
                  <PointLink href={point.link.href} label={point.link.label} />
                ) : null}
              </li>
            ))}
          </ul>
          <div className="experience-map__home">
            <p className="experience-map__home-label">Stars Peak</p>
            <p className="experience-map__home-note">{content.homeNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
