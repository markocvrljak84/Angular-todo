import { notFound } from "next/navigation";
import { activeLocales, isActiveLocale, isLocale, type Locale } from "@/i18n/config";

export const dynamic = "force-static";

export function localeStaticParams() {
  return activeLocales.map((locale) => ({ locale }));
}

export async function resolveLocale(
  params: Promise<{ locale: string }>
): Promise<Locale> {
  const { locale: l } = await params;
  if (!isLocale(l) || !isActiveLocale(l)) notFound();
  return l;
}
