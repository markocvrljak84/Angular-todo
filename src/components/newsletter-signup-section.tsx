import type { Locale } from "@/i18n/config";
import type { ExperienceContent } from "@/i18n/experience-content";
import { GUIDE_SIGNUP_FORM_ACTION } from "@/config/site-contact";
import { localePath } from "@/config/site-routes";
import { getSiteUrl } from "@/lib/site-url";

type Props = {
  content: ExperienceContent["signup"];
  locale: Locale;
  /** Where the signup form is shown — forwarded to FormSubmit for inbox context. */
  source: "home" | "guides";
  /** Optional section id for in-page anchors. */
  id?: string;
};

export function NewsletterSignupSection({ content, locale, source, id }: Props) {
  const thankYouPath = `${getSiteUrl()}${localePath(locale, "guides")}/thank-you`;

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

          <form
            className="newsletter-signup__form"
            action={GUIDE_SIGNUP_FORM_ACTION}
            method="POST"
          >
            <input type="hidden" name="_subject" value="Stars Peak — newsletter signup" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value={thankYouPath} />
            <input type="hidden" name="locale" value={locale} />
            <input type="hidden" name="source" value={source} />

            <label className="newsletter-signup__label" htmlFor={`newsletter-email-${source}`}>
              {content.emailLabel}
            </label>
            <div className="newsletter-signup__row">
              <input
                id={`newsletter-email-${source}`}
                className="newsletter-signup__input"
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder={content.emailPlaceholder}
              />
              <button type="submit" className="newsletter-signup__btn">
                {content.submitLabel}
              </button>
            </div>
          </form>

          <p className="newsletter-signup__privacy">{content.privacyNote}</p>
          <p className="newsletter-signup__brochure-note">{content.brochureLanguageNote}</p>
        </div>
      </div>
    </section>
  );
}
