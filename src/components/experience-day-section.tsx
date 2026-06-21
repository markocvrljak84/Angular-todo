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
      </div>
    </section>
  );
}
