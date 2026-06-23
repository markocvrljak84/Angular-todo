"use client";

import { useMemo, useRef, useState } from "react";
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
};

async function triggerDownload(downloadUrl: string, downloadName: string) {
  try {
    const response = await fetch(downloadUrl);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = downloadName;
    link.click();
    URL.revokeObjectURL(url);
  } catch {
    window.open(downloadUrl, "_blank", "noopener,noreferrer");
  }
}

export function BrochureDownloadForm({
  locale,
  labels,
  emailLabel,
  emailPlaceholder,
  submitLabel,
  submittingLabel,
  submitErrorMessage,
  privacyNote,
}: Props) {
  const formStartedAt = useMemo(() => Date.now(), []);
  const [status, setStatus] = useState<"idle" | "submitting" | "error" | "success">("idle");
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
      const response = await fetch("/api/brochure", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          email,
          locale,
          gdprConsent,
          honeypot: honeypotRef.current?.value ?? "",
          formStartedAt,
        }),
      });

      const payload = (await response.json()) as {
        error?: string;
        downloadUrl?: string;
        downloadName?: string;
      };

      if (!response.ok) {
        const mapped = emailFormServerErrorToFields(payload.error ?? "unknown", labels);
        setFieldErrors(mapped.fieldErrors);
        setServerError(mapped.serverError);
        setStatus(mapped.serverError ? "error" : "idle");
        if (mapped.fieldErrors.email) focusFirstField(form, ["email"]);
        return;
      }

      if (!payload.downloadUrl || !payload.downloadName) {
        setServerError(submitErrorMessage);
        setStatus("error");
        return;
      }

      await triggerDownload(payload.downloadUrl, payload.downloadName);
      setFieldErrors({});
      setStatus("success");
    } catch {
      setStatus("error");
      setServerError(submitErrorMessage);
    }
  }

  return (
    <form className="site-form site-form--brochure" onSubmit={handleSubmit} noValidate>
      <div className="site-form__honeypot" aria-hidden="true">
        <label htmlFor="brochure-hp">Leave blank</label>
        <input
          ref={honeypotRef}
          id="brochure-hp"
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <label className="site-form__label" htmlFor="brochure-email">
        {emailLabel}
      </label>
      <input
        id="brochure-email"
        className="site-form__input"
        type="email"
        name="email"
        required
        autoComplete="email"
        placeholder={emailPlaceholder}
        aria-invalid={fieldErrors.email ? true : undefined}
        aria-describedby={fieldErrors.email ? "brochure-email-error" : undefined}
        disabled={status === "submitting" || status === "success"}
        onChange={() => clearFieldError("email")}
      />
      {fieldErrors.email ? (
        <p id="brochure-email-error" className="site-form__field-error" role="alert">
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
          aria-describedby={fieldErrors.gdpr ? "brochure-gdpr-error" : undefined}
          disabled={status === "submitting" || status === "success"}
        />
        <span>{labels.gdprConsent}</span>
      </label>
      {fieldErrors.gdpr ? (
        <p id="brochure-gdpr-error" className="site-form__field-error" role="alert">
          {fieldErrors.gdpr}
        </p>
      ) : null}

      <button
        type="submit"
        className="newsletter-signup__download site-form__submit"
        disabled={status === "submitting" || status === "success"}
      >
        {status === "submitting" ? submittingLabel : submitLabel}
      </button>

      {serverError ? (
        <p className="site-form__error" role="alert">
          {serverError}
        </p>
      ) : null}

      {status === "success" ? (
        <p className="site-form__success" role="status">
          {labels.downloadStarted}
        </p>
      ) : null}

      <p className="site-form__privacy">{privacyNote}</p>
    </form>
  );
}
