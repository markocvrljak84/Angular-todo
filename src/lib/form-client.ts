import type { Messages } from "@/i18n/messages";
import { isValidEmail, isValidMessage, isValidName } from "@/lib/form-security";

export type ContactFieldErrors = Partial<
  Record<"firstName" | "lastName" | "email" | "message" | "gdpr", string>
>;

export type EmailFieldErrors = Partial<Record<"email" | "gdpr", string>>;

export function formErrorMessage(code: string, labels: Messages["forms"]): string {
  switch (code) {
    case "invalidName":
      return labels.invalidName;
    case "invalidEmail":
      return labels.invalidEmail;
    case "invalidMessage":
      return labels.invalidMessage;
    case "gdprRequired":
      return labels.gdprRequired;
    default:
      return labels.submitError;
  }
}

export function validateEmailField(
  email: string,
  labels: Messages["forms"]
): string | undefined {
  if (!email) return labels.requiredField;
  if (!isValidEmail(email)) return labels.invalidEmail;
  return undefined;
}

export function validateContactFields(
  fields: {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
  },
  gdprConsent: boolean,
  labels: Messages["forms"]
): ContactFieldErrors {
  const errors: ContactFieldErrors = {};

  if (!fields.firstName) errors.firstName = labels.requiredField;
  else if (!isValidName(fields.firstName)) errors.firstName = labels.invalidName;

  if (!fields.lastName) errors.lastName = labels.requiredField;
  else if (!isValidName(fields.lastName)) errors.lastName = labels.invalidName;

  const emailError = validateEmailField(fields.email, labels);
  if (emailError) errors.email = emailError;

  if (!fields.message) errors.message = labels.requiredField;
  else if (!isValidMessage(fields.message)) errors.message = labels.invalidMessage;

  if (!gdprConsent) errors.gdpr = labels.gdprRequired;

  return errors;
}

export function contactServerErrorToFields(
  code: string,
  labels: Messages["forms"]
): { fieldErrors: ContactFieldErrors; serverError: string | null } {
  switch (code) {
    case "invalidEmail":
      return { fieldErrors: { email: labels.invalidEmail }, serverError: null };
    case "invalidMessage":
      return { fieldErrors: { message: labels.invalidMessage }, serverError: null };
    case "invalidName":
      return { fieldErrors: { firstName: labels.invalidName }, serverError: null };
    case "gdprRequired":
      return { fieldErrors: { gdpr: labels.gdprRequired }, serverError: null };
    default:
      return { fieldErrors: {}, serverError: formErrorMessage(code, labels) };
  }
}

export function emailFormServerErrorToFields(
  code: string,
  labels: Messages["forms"]
): { fieldErrors: EmailFieldErrors; serverError: string | null } {
  switch (code) {
    case "invalidEmail":
      return { fieldErrors: { email: labels.invalidEmail }, serverError: null };
    case "gdprRequired":
      return { fieldErrors: { gdpr: labels.gdprRequired }, serverError: null };
    default:
      return { fieldErrors: {}, serverError: formErrorMessage(code, labels) };
  }
}

export function focusFirstField(form: HTMLFormElement, fieldOrder: string[]) {
  for (const name of fieldOrder) {
    const field = form.elements.namedItem(name);
    if (field instanceof HTMLElement) {
      field.focus();
      return;
    }
  }
}
