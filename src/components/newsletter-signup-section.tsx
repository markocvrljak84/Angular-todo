import Image from "next/image";
import type { Locale } from "@/i18n/config";
import type { ExperienceContent } from "@/i18n/experience-content";
import { getMessages } from "@/i18n/messages";
import { NewsletterSignupForm } from "@/components/newsletter-signup-form";

type Props = {
  content: ExperienceContent["signup"];
  locale: Locale;
  /** Where the signup form is shown — forwarded to FormSubmit for inbox context. */
  source: "home" | "journal" | "experiences";
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
      <div className="flat-wrap newsletter-signup__layout">
        <Image
          className="newsletter-signup__motif newsletter-signup__motif--left"
          src="/img/illustrations/motif-degenija.webp"
          alt=""
          width={400}
          height={400}
          aria-hidden="true"
        />

        <div className="newsletter-signup__panel">
          <h2 id="newsletter-signup-title" className="flat-section__title newsletter-signup__title">
            {content.title}
          </h2>
          <p className="newsletter-signup__intro">{content.intro}</p>
          <p className="newsletter-signup__detail">{content.detail}</p>

          <NewsletterSignupForm
            locale={locale}
            labels={forms}
            emailLabel={content.emailLabel}
            emailPlaceholder={content.emailPlaceholder}
            submitLabel={content.submitLabel}
            submittingLabel={content.submittingLabel}
            submitErrorMessage={content.submitErrorMessage}
            gdprConsentLabel={content.gdprConsent}
            privacyNote={content.privacyNote}
            source={source}
          />
        </div>

        <Image
          className="newsletter-signup__motif newsletter-signup__motif--right"
          src="/img/illustrations/motif-bear-print.webp"
          alt=""
          width={400}
          height={400}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
