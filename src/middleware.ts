import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, isLocale } from "@/i18n/config";
import { LEGACY_ROUTE_REDIRECTS } from "@/config/site-routes";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // API and Next internals must not get a locale prefix.
  if (path.startsWith("/api") || path.startsWith("/_next")) {
    return NextResponse.next();
  }

  const segments = path.split("/").filter(Boolean);
  const first = segments[0];

  if (segments.length >= 2 && isLocale(segments[0])) {
    const section = segments[1];
    const redirectTo = section ? LEGACY_ROUTE_REDIRECTS[section] : undefined;
    if (redirectTo) {
      const url = request.nextUrl.clone();
      url.pathname = `/${segments[0]}/${redirectTo}`;
      return NextResponse.redirect(url, 301);
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
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpe?g|JPE?G|gif|webp|ico|txt|xml|gpx|pdf)$).*)",
  ],
};
