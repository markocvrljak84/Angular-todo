import { notFound } from "next/navigation";
import { isLocale, locales, type Locale } from "@/i18n/config";

export const dynamic = "force-static";

export function localeStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function resolveLocale(
  params: Promise<{ locale: string }>
): Promise<Locale> {
  const { locale: l } = await params;
  if (!isLocale(l)) notFound();
  return l;
}
