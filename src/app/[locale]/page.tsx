import type { Metadata } from "next";
import { BookCta } from "@/components/book-cta";
import { ExperienceDaySection } from "@/components/experience-day-section";
import { HeroSection } from "@/components/hero-section";
import { NewsletterSignupSection } from "@/components/newsletter-signup-section";
import { TasteOfVelebitSection } from "@/components/taste-of-velebit-section";
import { getExperienceContent } from "@/i18n/experience-content";
import { getMessages } from "@/i18n/messages";
import { localePath } from "@/config/site-routes";
import { SITE_CONTACT } from "@/config/site-contact";
import { MAIN_CAROUSEL_IMAGES } from "@/config/site-images";
import {
  localeStaticParams,
  resolveLocale,
} from "@/lib/locale-page";
import { buildPageMetadata } from "@/lib/page-metadata";
import Link from "next/link";

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
  return buildPageMetadata(locale, "home");
}

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const locale = await resolveLocale(params);
  const t = getMessages(locale);
  const experience = getExperienceContent(locale);

  const heroSlides = MAIN_CAROUSEL_IMAGES.map((file, i) => ({
    file,
    alt: t.home.heroSlideAlts[i] ?? t.home.heroImageAlt,
  }));

  const quickLinks = [
    { page: "about" as const, label: t.nav.about },
    { page: "gallery" as const, label: t.nav.gallery },
    { page: "hiking" as const, label: t.nav.hiking },
    { page: "nearby" as const, label: t.nav.nearby },
    { page: "guides" as const, label: t.nav.guides },
    { page: "contact" as const, label: t.nav.contact },
  ];

  return (
    <>
      <HeroSection
        slides={heroSlides}
        kicker={t.home.heroBadge}
        scriptTitle={SITE_CONTACT.heroTitle}
        centerLine={t.home.heroCenterLine}
        bookCtaLabel={t.header.bookCta}
        carouselPrevLabel={t.home.heroCarouselPrev}
        carouselNextLabel={t.home.heroCarouselNext}
      />

      <ExperienceDaySection content={experience.day} />

      <section className="flat-section" aria-labelledby="explore-title">
        <div className="flat-wrap">
          <h2 id="explore-title" className="flat-section__title">
            {t.footer.exploreTitle}
          </h2>
          <ul className="home-quick-links">
            {quickLinks.map(({ page, label }) => (
              <li key={page}>
                <Link href={localePath(locale, page)} className="home-quick-links__card">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <TasteOfVelebitSection content={experience.taste} />

      <NewsletterSignupSection
        content={experience.signup}
        locale={locale}
        source="home"
        id="newsletter"
      />

      <BookCta
        variant="banner"
        label={t.header.bookCta}
        lead={t.cta.aboutLead}
      />
    </>
  );
}
