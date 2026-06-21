import type { Locale } from "@/i18n/config";
import type { ExperienceContent } from "@/i18n/experience-content";
import { NewsletterSignupForm } from "@/components/newsletter-signup-form";

type Props = {
  content: ExperienceContent["signup"];
  locale: Locale;
  /** Where the signup form is shown — forwarded to FormSubmit for inbox context. */
  source: "home" | "guides" | "experiences";
  /** Optional section id for in-page anchors. */
  id?: string;
};

export function NewsletterSignupSection({ content, locale, source, id }: Props) {
  return (
    <section
      id={id}
      className="newsletter-signup flat-section"
      aria-labelledby="newsletter-signup-title"
    >
      <div className="flat-wrap flat-wrap--narrow">
        <div className="newsletter-signup__panel">
          <h2 id="newsletter-signup-title" className="newsletter-signup__title">
            {content.title}
          </h2>
          <p className="newsletter-signup__intro">{content.intro}</p>

          <NewsletterSignupForm content={content} locale={locale} source={source} />

          <p className="newsletter-signup__privacy">{content.privacyNote}</p>
          <p className="newsletter-signup__brochure-note">{content.brochureLanguageNote}</p>
        </div>
      </div>
    </section>
  );
}
