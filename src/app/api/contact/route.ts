import { NextResponse } from "next/server";
import { deliverFormEmail, verifyFormGuard } from "@/lib/form-api";
import {
  isValidEmail,
  isValidMessage,
  isValidName,
  sanitizeText,
} from "@/lib/form-security";
import { SITE_CONTACT } from "@/config/site-contact";

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "invalidPayload" }, { status: 400 });
  }

  const guard = await verifyFormGuard(body, { requireHumanCheck: false });
  if (!guard.ok) {
    return NextResponse.json({ error: guard.error }, { status: 400 });
  }

  const firstName = sanitizeText(body.firstName, 80);
  const lastName = sanitizeText(body.lastName, 80);
  const email = sanitizeText(body.email, 254).toLowerCase();
  const message = sanitizeText(body.message, 5000);
  const locale = sanitizeText(body.locale, 8);

  if (!isValidName(firstName) || !isValidName(lastName)) {
    return NextResponse.json({ error: "invalidName" }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "invalidEmail" }, { status: 400 });
  }

  if (!isValidMessage(message)) {
    return NextResponse.json({ error: "invalidMessage" }, { status: 400 });
  }

  const sent = await deliverFormEmail(
    "Stars Peak — contact form",
    {
      firstName,
      lastName,
      email,
      message,
      locale,
      gdprConsent: "yes",
    },
    { replyTo: email }
  );

  if (!sent.ok) {
    return NextResponse.json(
      {
        error: sent.error,
        fallbackEmail: SITE_CONTACT.email,
        ...(sent.detail ? { detail: sent.detail } : {}),
      },
      { status: sent.error === "mailNotConfigured" ? 503 : 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
