"use client";

import { useMemo, useRef, useState } from "react";
import { ContactSuccessModal } from "@/components/contact-success-modal";
import { FormLoadingOverlay } from "@/components/form-loading-overlay";
import { localePath } from "@/config/site-routes";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";
import {
  type ContactFieldErrors,
  contactServerErrorToFields,
  focusFirstField,
  validateContactFields,
} from "@/lib/form-client";

type Props = {
  locale: Locale;
  labels: Messages["forms"];
  contactForm: Messages["contactForm"];
};

const FIELD_ORDER = ["firstName", "lastName", "email", "message"] as const;

export function ContactForm({ locale, labels, contactForm }: Props) {
  const formStartedAt = useMemo(() => Date.now(), []);
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [successOpen, setSuccessOpen] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [gdprConsent, setGdprConsent] = useState(false);
  const honeypotRef = useRef<HTMLInputElement>(null);

  function clearFieldError(field: keyof ContactFieldErrors) {
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
    const data = new FormData(form);

    const fields = {
      firstName: String(data.get("firstName") ?? "").trim(),
      lastName: String(data.get("lastName") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    const errors = validateContactFields(fields, gdprConsent, labels);
    setFieldErrors(errors);

    if (Object.keys(errors).length > 0) {
      setStatus("idle");
      if (errors.firstName || errors.lastName || errors.email || errors.message) {
        focusFirstField(
          form,
          FIELD_ORDER.filter((name) => errors[name])
        );
      }
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...fields,
          locale,
          gdprConsent,
          honeypot: honeypotRef.current?.value ?? "",
          formStartedAt,
        }),
      });

      const payload = (await response.json()) as { error?: string };

      if (!response.ok) {
        const mapped = contactServerErrorToFields(payload.error ?? "unknown", labels);
        setFieldErrors(mapped.fieldErrors);
        setServerError(mapped.serverError);
        setStatus(mapped.serverError ? "error" : "idle");
        if (Object.keys(mapped.fieldErrors).length > 0) {
          focusFirstField(
            form,
            FIELD_ORDER.filter((name) => mapped.fieldErrors[name])
          );
        }
        return;
      }

      form.reset();
      setGdprConsent(false);
      setFieldErrors({});
      setStatus("idle");
      setSuccessOpen(true);
    } catch {
      setServerError(labels.submitError);
      setStatus("error");
    }
  }

  return (
    <>
      {status === "submitting" ? <FormLoadingOverlay label={labels.submitting} /> : null}

      {successOpen ? (
        <ContactSuccessModal
          message={contactForm.successMessage}
          homeHref={localePath(locale, "home")}
          homeLabel={contactForm.successHomeLabel}
          closeLabel={contactForm.successCloseLabel}
          onClose={() => setSuccessOpen(false)}
        />
      ) : null}

      <aside className="contact-form-panel" aria-labelledby="contact-form-title">
        <h2 id="contact-form-title" className="contact-form-panel__title">
          {contactForm.title}
        </h2>
        <p className="contact-form-panel__intro">{contactForm.intro}</p>

        <form className="site-form" onSubmit={handleSubmit} noValidate>
          <div className="site-form__honeypot" aria-hidden="true">
            <label htmlFor="contact-hp">Leave blank</label>
            <input
              ref={honeypotRef}
              id="contact-hp"
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="site-form__grid">
            <div className="site-form__field">
              <label className="site-form__label" htmlFor="contact-first-name">
                {contactForm.firstNameLabel}
              </label>
              <input
                id="contact-first-name"
                className="site-form__input"
                type="text"
                name="firstName"
                autoComplete="given-name"
                required
                aria-invalid={fieldErrors.firstName ? true : undefined}
                aria-describedby={fieldErrors.firstName ? "contact-first-name-error" : undefined}
                disabled={status === "submitting"}
                onChange={() => clearFieldError("firstName")}
              />
              {fieldErrors.firstName ? (
                <p id="contact-first-name-error" className="site-form__field-error" role="alert">
                  {fieldErrors.firstName}
                </p>
              ) : null}
            </div>

            <div className="site-form__field">
              <label className="site-form__label" htmlFor="contact-last-name">
                {contactForm.lastNameLabel}
              </label>
              <input
                id="contact-last-name"
                className="site-form__input"
                type="text"
                name="lastName"
                autoComplete="family-name"
                required
                aria-invalid={fieldErrors.lastName ? true : undefined}
                aria-describedby={fieldErrors.lastName ? "contact-last-name-error" : undefined}
                disabled={status === "submitting"}
                onChange={() => clearFieldError("lastName")}
              />
              {fieldErrors.lastName ? (
                <p id="contact-last-name-error" className="site-form__field-error" role="alert">
                  {fieldErrors.lastName}
                </p>
              ) : null}
            </div>
          </div>

          <div className="site-form__field">
            <label className="site-form__label" htmlFor="contact-email">
              {contactForm.emailLabel}
            </label>
            <input
              id="contact-email"
              className="site-form__input"
              type="email"
              name="email"
              autoComplete="email"
              required
              aria-invalid={fieldErrors.email ? true : undefined}
              aria-describedby={fieldErrors.email ? "contact-email-error" : undefined}
              disabled={status === "submitting"}
              onChange={() => clearFieldError("email")}
            />
            {fieldErrors.email ? (
              <p id="contact-email-error" className="site-form__field-error" role="alert">
                {fieldErrors.email}
              </p>
            ) : null}
          </div>

          <div className="site-form__field">
            <label className="site-form__label" htmlFor="contact-message">
              {contactForm.messageLabel}
            </label>
            <textarea
              id="contact-message"
              className="site-form__textarea"
              name="message"
              rows={5}
              minLength={10}
              maxLength={5000}
              required
              placeholder={contactForm.messagePlaceholder}
              aria-invalid={fieldErrors.message ? true : undefined}
              aria-describedby={fieldErrors.message ? "contact-message-error" : undefined}
              disabled={status === "submitting"}
              onChange={() => clearFieldError("message")}
            />
            {fieldErrors.message ? (
              <p id="contact-message-error" className="site-form__field-error" role="alert">
                {fieldErrors.message}
              </p>
            ) : null}
          </div>

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
              aria-describedby={fieldErrors.gdpr ? "contact-gdpr-error" : undefined}
              disabled={status === "submitting"}
            />
            <span>{labels.gdprConsent}</span>
          </label>
          {fieldErrors.gdpr ? (
            <p id="contact-gdpr-error" className="site-form__field-error" role="alert">
              {fieldErrors.gdpr}
            </p>
          ) : null}

          <button
            type="submit"
            className="site-form__submit"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? labels.submitting : contactForm.submitLabel}
          </button>

          {serverError ? (
            <p className="site-form__error" role="alert">
              {serverError}
            </p>
          ) : null}

          <p className="site-form__privacy">{labels.gdprNotice}</p>
        </form>
      </aside>
    </>
  );
}
