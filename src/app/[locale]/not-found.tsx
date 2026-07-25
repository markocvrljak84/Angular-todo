import type { Metadata } from "next";
import { NotFoundContent } from "@/components/not-found-content";
import { defaultLocale } from "@/i18n/config";
import { getUtilityPagesContent } from "@/i18n/utility-pages";

export const metadata: Metadata = {
  title: { absolute: "Page not found — Stars Peak" },
  robots: { index: false, follow: true },
};

export default function LocaleNotFound() {
  const locale = defaultLocale;
  const content = getUtilityPagesContent(locale).notFound;

  return <NotFoundContent content={content} locale={locale} />;
}
