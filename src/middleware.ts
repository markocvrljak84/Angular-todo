import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, isLocale } from "@/i18n/config";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const segments = path.split("/").filter(Boolean);
  const first = segments[0];

  if (first && isLocale(first)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${path === "/" ? "" : path}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpe?g|JPE?G|gif|webp|ico|txt|xml|gpx)$).*)",
  ],
};
