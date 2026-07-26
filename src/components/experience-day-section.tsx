import Image from "next/image";
import {
  EXPERIENCE_DAY_IMAGE,
  EXPERIENCE_DAY_IMAGE_QUALITY,
} from "@/config/site-images";
import type { ExperienceContent } from "@/i18n/experience-content";

type Props = {
  content: ExperienceContent["day"];
};

export function ExperienceDaySection({ content }: Props) {
  return (
    <section
      id="experience-day"
      className="experience-day flat-section flat-section--tint"
      aria-labelledby="experience-day-title"
    >
      <div className="flat-wrap flat-wrap--narrow">
        <h2 id="experience-day-title" className="flat-section__title">
          {content.title}
        </h2>
        <p className="flat-section__intro flat-section__intro--lead">
          {content.intro}
        </p>
      </div>

      <div className="flat-wrap experience-day__layout-wrap">
        <div className="experience-day__layout">
          <ol className="experience-day__timeline">
            {content.steps.map((step) => (
              <li key={step.time} className="experience-day__step">
                <time className="experience-day__time" dateTime={step.time}>
                  {step.time}
                </time>
                <div className="experience-day__body">
                  <h3 className="experience-day__step-title">{step.title}</h3>
                  <p className="experience-day__step-text">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <figure className="experience-day__media">
            <Image
              src={EXPERIENCE_DAY_IMAGE}
              alt={content.imageAlt}
              fill
              quality={EXPERIENCE_DAY_IMAGE_QUALITY}
              sizes="(max-width: 767px) 100vw, min(680px, 50vw)"
              className="experience-day__img"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
