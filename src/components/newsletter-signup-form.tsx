"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Locale } from "@/i18n/config";
import type { ExperienceContent } from "@/i18n/experience-content";
import { GUIDE_SIGNUP_FORM_AJAX_ACTION } from "@/config/site-contact";
import { localePath } from "@/config/site-routes";

type Props = {
  content: ExperienceContent["signup"];
  locale: Locale;
  source: "home" | "guides";
};

export function NewsletterSignupForm({ content, locale, source }: Props) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch(GUIDE_SIGNUP_FORM_AJAX_ACTION, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Newsletter signup failed");
      }

      router.push(`${localePath(locale, "guides")}/thank-you`);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="newsletter-signup__form" onSubmit={handleSubmit}>
      <input type="hidden" name="_subject" value="Stars Peak — newsletter signup" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
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
          disabled={status === "submitting"}
        />
        <button
          type="submit"
          className="newsletter-signup__btn"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? content.submittingLabel : content.submitLabel}
        </button>
      </div>

      {status === "error" ? (
        <p className="newsletter-signup__error" role="alert">
          {content.submitErrorMessage}
        </p>
      ) : null}
    </form>
  );
}
