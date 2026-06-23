import { NextResponse } from "next/server";
import {
  VELEBIT_BROCHURE_DOWNLOAD_NAME,
  VELEBIT_BROCHURE_PDF,
} from "@/config/site-brochure";
import { deliverFormEmail, verifyFormGuard } from "@/lib/form-api";
import { isValidEmail, sanitizeText } from "@/lib/form-security";

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

  const email = sanitizeText(body.email, 254).toLowerCase();
  const locale = sanitizeText(body.locale, 8);

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "invalidEmail" }, { status: 400 });
  }

  const sent = await deliverFormEmail("Stars Peak — brochure download", {
    email,
    locale,
    gdprConsent: "yes",
  });

  if (!sent.ok) {
    return NextResponse.json({ error: sent.error }, { status: sent.error === "mailNotConfigured" ? 503 : 502 });
  }

  return NextResponse.json({
    ok: true,
    downloadUrl: VELEBIT_BROCHURE_PDF,
    downloadName: VELEBIT_BROCHURE_DOWNLOAD_NAME,
  });
}
