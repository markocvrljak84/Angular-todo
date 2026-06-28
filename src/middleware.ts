import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  defaultLocale,
  isLocale,
  localePrefixInUrl,
} from "@/i18n/config";
import { LEGACY_ROUTE_REDIRECTS } from "@/config/site-routes";

function legacyRedirectTarget(segments: string[]): string | undefined {
  if (localePrefixInUrl) {
    if (segments.length >= 2 && isLocale(segments[0])) {
      return LEGACY_ROUTE_REDIRECTS[segments[1]];
    }
    return undefined;
  }

  if (segments.length >= 2 && isLocale(segments[0])) {
    return LEGACY_ROUTE_REDIRECTS[segments[1]];
  }

  const section = segments[0];
  if (section && !isLocale(section)) {
    return LEGACY_ROUTE_REDIRECTS[section];
  }

  return undefined;
}

function legacyRedirectPath(segments: string[], redirectTo: string): string {
  if (localePrefixInUrl) {
    const locale = isLocale(segments[0]) ? segments[0] : defaultLocale;
    return `/${locale}/${redirectTo}`;
  }
  return `/${redirectTo}`;
}

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  if (path.startsWith("/api") || path.startsWith("/_next")) {
    return NextResponse.next();
  }

  const segments = path.split("/").filter(Boolean);
  const first = segments[0];

  const legacyTarget = legacyRedirectTarget(segments);
  if (legacyTarget) {
    const url = request.nextUrl.clone();
    url.pathname = legacyRedirectPath(segments, legacyTarget);
    return NextResponse.redirect(url, 301);
  }

  if (!localePrefixInUrl) {
    if (first && isLocale(first)) {
      const url = request.nextUrl.clone();
      const rest = segments.slice(1).join("/");
      url.pathname = rest ? `/${rest}` : "/";
      return NextResponse.redirect(url, 301);
    }

    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${path === "/" ? "" : path}`;
    return NextResponse.rewrite(url);
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
