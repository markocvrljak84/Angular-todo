import type { Locale } from "@/i18n/config";
import type { ExperienceContent } from "@/i18n/experience-content";
import { getMessages } from "@/i18n/messages";
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
  const forms = getMessages(locale).forms;

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

          <NewsletterSignupForm
            locale={locale}
            labels={forms}
            emailLabel={content.emailLabel}
            emailPlaceholder={content.emailPlaceholder}
            submitLabel={content.submitLabel}
            submittingLabel={content.submittingLabel}
            submitErrorMessage={content.submitErrorMessage}
            privacyNote={content.privacyNote}
            source={source}
          />

          <p className="newsletter-signup__brochure-note">{content.brochureLanguageNote}</p>
        </div>
      </div>
    </section>
  );
}
