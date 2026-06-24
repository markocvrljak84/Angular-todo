"use client";

import { useMemo, useRef, useState } from "react";
import { FormLoadingOverlay } from "@/components/form-loading-overlay";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";
import {
  type EmailFieldErrors,
  emailFormServerErrorToFields,
  focusFirstField,
  validateEmailField,
} from "@/lib/form-client";

type Props = {
  locale: Locale;
  labels: Messages["forms"];
  emailLabel: string;
  emailPlaceholder: string;
  submitLabel: string;
  submittingLabel: string;
  submitErrorMessage: string;
  privacyNote: string;
  source: "home" | "guides" | "experiences";
};

export function NewsletterSignupForm({
  locale,
  labels,
  emailLabel,
  emailPlaceholder,
  submitLabel,
  submittingLabel,
  submitErrorMessage,
  privacyNote,
  source,
}: Props) {
  const formStartedAt = useMemo(() => Date.now(), []);
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [fieldErrors, setFieldErrors] = useState<EmailFieldErrors>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [gdprConsent, setGdprConsent] = useState(false);
  const honeypotRef = useRef<HTMLInputElement>(null);

  function clearFieldError(field: keyof EmailFieldErrors) {
    setFieldErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setServerError(null);

    const form = event.currentTarget;
    const email = String(new FormData(form).get("email") ?? "").trim();
    const errors: EmailFieldErrors = {};

    const emailError = validateEmailField(email, labels);
    if (emailError) errors.email = emailError;
    if (!gdprConsent) errors.gdpr = labels.gdprRequired;

    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      setStatus("idle");
      if (errors.email) focusFirstField(form, ["email"]);
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          email,
          locale,
          source,
          gdprConsent,
          honeypot: honeypotRef.current?.value ?? "",
          formStartedAt,
        }),
      });

      const payload = (await response.json()) as { error?: string };

      if (!response.ok) {
        const mapped = emailFormServerErrorToFields(payload.error ?? "unknown", labels);
        setFieldErrors(mapped.fieldErrors);
        setServerError(mapped.serverError);
        setStatus(mapped.serverError ? "error" : "idle");
        if (mapped.fieldErrors.email) focusFirstField(form, ["email"]);
        return;
      }

      window.location.href = `/${locale}/guides/thank-you`;
    } catch {
      setStatus("error");
      setServerError(submitErrorMessage);
    }
  }

  return (
    <>
      {status === "submitting" ? <FormLoadingOverlay label={submittingLabel} /> : null}

      <form className="newsletter-signup__form site-form" onSubmit={handleSubmit} noValidate>
      <div className="site-form__honeypot" aria-hidden="true">
        <label htmlFor={`newsletter-hp-${source}`}>Leave blank</label>
        <input
          ref={honeypotRef}
          id={`newsletter-hp-${source}`}
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <label className="newsletter-signup__label site-form__label" htmlFor={`newsletter-email-${source}`}>
        {emailLabel}
      </label>
      <div className="newsletter-signup__row">
        <input
          id={`newsletter-email-${source}`}
          className="newsletter-signup__input site-form__input"
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder={emailPlaceholder}
          aria-invalid={fieldErrors.email ? true : undefined}
          aria-describedby={fieldErrors.email ? `newsletter-email-error-${source}` : undefined}
          disabled={status === "submitting"}
          onChange={() => clearFieldError("email")}
        />
        <button
          type="submit"
          className="newsletter-signup__btn site-form__submit"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? submittingLabel : submitLabel}
        </button>
      </div>
      {fieldErrors.email ? (
        <p id={`newsletter-email-error-${source}`} className="site-form__field-error" role="alert">
          {fieldErrors.email}
        </p>
      ) : null}

      <label className="site-form__checkbox">
        <input
          type="checkbox"
          checked={gdprConsent}
          onChange={(event) => {
            setGdprConsent(event.target.checked);
            clearFieldError("gdpr");
          }}
          required
          aria-invalid={fieldErrors.gdpr ? true : undefined}
          aria-describedby={fieldErrors.gdpr ? `newsletter-gdpr-error-${source}` : undefined}
          disabled={status === "submitting"}
        />
        <span>{labels.gdprConsent}</span>
      </label>
      {fieldErrors.gdpr ? (
        <p id={`newsletter-gdpr-error-${source}`} className="site-form__field-error" role="alert">
          {fieldErrors.gdpr}
        </p>
      ) : null}

      {serverError ? (
        <p className="newsletter-signup__error site-form__error" role="alert">
          {serverError}
        </p>
      ) : null}

      <p className="newsletter-signup__privacy site-form__privacy">{privacyNote}</p>
    </form>
    </>
  );
}
