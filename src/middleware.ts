import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, isLocale } from "@/i18n/config";

export function middleware(request: NextRequest) {
  const first = request.nextUrl.pathname.split("/")[1];
  if (first && isLocale(first)) {
    return NextResponse.next();
  }
  const url = request.nextUrl.clone();
  const path = request.nextUrl.pathname;
  url.pathname = `/${defaultLocale}${path === "/" ? "" : path}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml)$).*)",
  ],
};
