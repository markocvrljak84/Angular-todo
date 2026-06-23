const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME_RE = /^[\p{L}\s'.-]{1,80}$/u;

export function sanitizeText(input: unknown, maxLen: number): string {
  if (typeof input !== "string") return "";
  return input
    .replace(/[\0-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "")
    .replace(/<[^>]*>/g, "")
    .trim()
    .slice(0, maxLen);
}

export function isValidEmail(email: string): boolean {
  return email.length >= 5 && email.length <= 254 && EMAIL_RE.test(email);
}

export function isValidName(name: string): boolean {
  return name.length >= 2 && NAME_RE.test(name);
}

export function isValidMessage(message: string): boolean {
  return message.length >= 10 && message.length <= 5000;
}

export function isHoneypotClean(value: unknown): boolean {
  if (value == null) return true;
  if (typeof value !== "string") return false;
  return value.trim() === "";
}

export function isFormTimingValid(startedAt: unknown, minMs = 3000, maxMs = 86_400_000): boolean {
  if (typeof startedAt !== "number" || !Number.isFinite(startedAt)) return false;
  const elapsed = Date.now() - startedAt;
  return elapsed >= minMs && elapsed <= maxMs;
}

export function parseBoolean(value: unknown): boolean {
  return value === true || value === "true" || value === "on";
}
