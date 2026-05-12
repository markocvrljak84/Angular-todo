import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { LangHtml } from "@/components/lang-html";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: l } = await params;
  if (!isLocale(l)) return {};
  const m = getMessages(l);
  return {
    title: { default: m.meta.siteName, template: `%s · ${m.meta.siteName}` },
    description: m.meta.siteDescription,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: l } = await params;
  if (!isLocale(l)) notFound();
  const locale = l as Locale;
  const messages = getMessages(locale);

  return (
    <>
      <LangHtml locale={locale} />
      <div className="page-shell">
        <SiteHeader locale={locale} t={messages} />
        <main className="page-main">{children}</main>
        <SiteFooter t={messages} locale={locale} />
      </div>
    </>
  );
}
