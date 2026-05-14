import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, isLocale } from "@/i18n/config";

const LEGACY_SECTIONS = new Set([
  "about",
  "gallery",
  "contact",
  "things",
  "itinerary",
  "film",
  "nearby",
]);

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const segments = path.split("/").filter(Boolean);
  const first = segments[0];

  if (segments.length >= 2 && isLocale(segments[0])) {
    const section = segments[1];
    if (section && LEGACY_SECTIONS.has(section)) {
      const u = request.nextUrl.clone();
      u.pathname = `/${segments[0]}`;
      u.hash =
        section === "things"
          ? "about"
          : section === "itinerary"
            ? "nearby"
            : section;
      return NextResponse.redirect(u);
    }
  }

  if (first && isLocale(first)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${path === "/" ? "" : path}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml)$).*)",
  ],
};
