import {
  isFormTimingValid,
  isHoneypotClean,
  parseBoolean,
} from "@/lib/form-security";
import { sendFormEmail, type SendFormEmailResult } from "@/lib/mail";
import { turnstileConfigured, verifyTurnstileToken } from "@/lib/turnstile";

export type FormGuardPayload = {
  honeypot?: unknown;
  formStartedAt?: unknown;
  gdprConsent?: unknown;
  humanConfirmed?: unknown;
  turnstileToken?: unknown;
};

export type FormGuardResult =
  | { ok: true }
  | { ok: false; error: string };

export async function verifyFormGuard(
  payload: FormGuardPayload,
  options: { requireHumanCheck?: boolean } = {}
): Promise<FormGuardResult> {
  const { requireHumanCheck = true } = options;

  if (!isHoneypotClean(payload.honeypot)) {
    return { ok: false, error: "humanCheckFailed" };
  }

  if (!isFormTimingValid(payload.formStartedAt)) {
    return { ok: false, error: "humanCheckFailed" };
  }

  if (!parseBoolean(payload.gdprConsent)) {
    return { ok: false, error: "gdprRequired" };
  }

  if (requireHumanCheck) {
    if (turnstileConfigured()) {
      const valid = await verifyTurnstileToken(payload.turnstileToken);
      if (!valid) return { ok: false, error: "humanCheckFailed" };
    } else if (!parseBoolean(payload.humanConfirmed)) {
      return { ok: false, error: "humanCheckFailed" };
    }
  }

  return { ok: true };
}

export async function deliverFormEmail(
  subject: string,
  fields: Record<string, string>,
  options: { replyTo?: string } = {}
): Promise<SendFormEmailResult> {
  return sendFormEmail(subject, fields, options);
}
