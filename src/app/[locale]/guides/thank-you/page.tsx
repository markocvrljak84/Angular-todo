import type { Metadata } from "next";
import Link from "next/link";
import { PageJsonLd } from "@/components/page-json-ld";
import { localePath } from "@/config/site-routes";
import { getExperienceContent } from "@/i18n/experience-content";
import { getMessages } from "@/i18n/messages";
import {
  localeStaticParams,
  resolveLocale,
} from "@/lib/locale-page";

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
  const content = getExperienceContent(locale).signup;

  return {
    title: content.thankYouTitle,
    robots: { index: false, follow: false },
  };
}

type Props = { params: Promise<{ locale: string }> };

export default async function NewsletterThankYouPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const t = getMessages(locale);
  const content = getExperienceContent(locale).signup;

  return (
    <>
      <PageJsonLd
        locale={locale}
        messages={t}
        page="guides"
        breadcrumbItems={[
          { name: t.nav.home, page: "home" },
          { name: t.nav.guides, page: "guides" },
          { name: content.thankYouTitle },
        ]}
      />

      <section className="newsletter-thanks flat-section flat-section--page">
        <div className="flat-wrap flat-wrap--narrow">
          <div className="newsletter-signup__panel newsletter-signup__panel--success">
            <p className="newsletter-thanks__badge" aria-hidden="true">
              ✓
            </p>
            <h1 className="newsletter-signup__title">{content.thankYouTitle}</h1>
            <p className="newsletter-signup__intro">{content.successMessage}</p>

            <p className="newsletter-thanks__back">
              <Link href={localePath(locale, "guides")}>{content.backToGuidesLabel}</Link>
              {" · "}
              <Link href={localePath(locale, "home")}>{content.backToHomeLabel}</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
