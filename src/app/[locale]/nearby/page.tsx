import type { Metadata } from "next";
import { InnerPageHeader } from "@/components/inner-page-header";
import { NearbySection } from "@/components/nearby-section";
import { getMessages } from "@/i18n/messages";
import { getPageHeaderContent } from "@/lib/inner-page-content";
import {
  localeStaticParams,
  resolveLocale,
} from "@/lib/locale-page";
import { PageJsonLd } from "@/components/page-json-ld";
import { buildPageMetadata } from "@/lib/page-metadata";

export const dynamic = "force-static";

export function generateStaticParams() {
  return localeStaticParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return buildPageMetadata(locale, "nearby");
}

type Props = { params: Promise<{ locale: string }> };

export default async function NearbyPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const t = getMessages(locale);
  const header = getPageHeaderContent(locale, "nearby");

  return (
    <>
      <PageJsonLd locale={locale} messages={t} page="nearby" />

      <InnerPageHeader {...header} />

      <div className="flat-section">
        <NearbySection t={t} compact />
      </div>
    </>
  );
}
