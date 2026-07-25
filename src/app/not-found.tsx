import type { Metadata } from "next";
import { NotFoundContent } from "@/components/not-found-content";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { defaultLocale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { getUtilityPagesContent } from "@/i18n/utility-pages";

export const metadata: Metadata = {
  title: { absolute: "Page not found — Stars Peak" },
  robots: { index: false, follow: true },
};

export default function RootNotFound() {
  const locale = defaultLocale;
  const t = getMessages(locale);
  const content = getUtilityPagesContent(locale).notFound;

  return (
    <div className="page-shell">
      <SiteHeader locale={locale} t={t} />
      <main className="page-main">
        <NotFoundContent content={content} locale={locale} />
      </main>
      <SiteFooter t={t} locale={locale} />
    </div>
  );
}
