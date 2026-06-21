import type { Metadata } from "next";
import { NearbySection } from "@/components/nearby-section";
import { PageBanner } from "@/components/page-banner";
import { getMessages } from "@/i18n/messages";
import {
  localeStaticParams,
  resolveLocale,
} from "@/lib/locale-page";
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

  return (
    <>
      <PageBanner locale={locale} page="nearby" />

      <div className="flat-section flat-section--page-nearby">
        <NearbySection t={t} compact />
      </div>
    </>
  );
}
