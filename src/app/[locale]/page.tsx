import type { Metadata } from "next";
import { AccommodationBriefSection } from "@/components/accommodation-brief-section";
import { ExperienceDaySection } from "@/components/experience-day-section";
import { FinalCtaSection } from "@/components/final-cta-section";
import { HomeLocalFlavoursSection } from "@/components/home-local-flavours-section";
import { HeroSection } from "@/components/hero-section";
import { HomeEditorialSection } from "@/components/home-editorial-section";
import { HomeWelcomeStrip } from "@/components/home-welcome-strip";
import { NewsletterSignupSection } from "@/components/newsletter-signup-section";
import { WhySpecialSection } from "@/components/why-special-section";
import {
  HERO_LCP_PRELOAD_SRC,
  HERO_LCP_SRCSET,
  HOME_IMAGES,
} from "@/config/site-images";
import { localePath } from "@/config/site-routes";
import { getExperienceContent } from "@/i18n/experience-content";
import { getHomeContent } from "@/i18n/home-content";
import { getMessages } from "@/i18n/messages";
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
  return buildPageMetadata(locale, "home");
}

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const locale = await resolveLocale(params);
  const t = getMessages(locale);
  const home = getHomeContent(locale);
  const experience = getExperienceContent(locale);

  const whySpecialImages = [
    HOME_IMAGES.whySpecial.mountain,
    HOME_IMAGES.whySpecial.sea,
    HOME_IMAGES.whySpecial.stars,
  ] as const;

  const editorialImages = [
    HOME_IMAGES.editorial.surroundings,
    HOME_IMAGES.editorial.interior,
    HOME_IMAGES.editorial.outdoorKitchen,
  ] as const;

  return (
    <>
      <PageJsonLd locale={locale} messages={t} page="home" />

      <link
        rel="preload"
        as="image"
        type="image/webp"
        href={HERO_LCP_PRELOAD_SRC}
        imageSrcSet={HERO_LCP_SRCSET}
        imageSizes="100vw"
        fetchPriority="high"
      />

      <HeroSection
        kicker={t.home.heroBadge}
        hero={home.hero}
        experiencesHref={localePath(locale, "experiences")}
        videoAlt={t.home.heroImageAlt}
      />

      <WhySpecialSection
        content={home.whySpecial}
        images={whySpecialImages}
        hrefs={[
          localePath(locale, "velebitHikingRetreat"),
          localePath(locale, "nearby"),
          localePath(locale, "darkSkyStargazing"),
        ]}
      />

      <HomeEditorialSection
        content={home.editorial}
        images={editorialImages}
        galleryHref={localePath(locale, "gallery")}
        locale={locale}
        experiencesLabel="Explore Experiences"
        journalLabel="Read the Journal"
      />

      <ExperienceDaySection content={experience.day} />

      <HomeWelcomeStrip
        title={home.welcome.title}
        line={home.welcome.line}
        artLabel={home.welcome.artLabel}
      />

      <AccommodationBriefSection
        content={home.accommodation}
        imageSrc={HOME_IMAGES.accommodation}
        accommodationHref={localePath(locale, "accommodation")}
      />

      <NewsletterSignupSection
        content={experience.signup}
        locale={locale}
        source="home"
        id="newsletter"
      />

      <FinalCtaSection content={home.finalCta} />

      <HomeLocalFlavoursSection
        content={home.localFlavours}
        imageSrc={HOME_IMAGES.localFlavours}
      />
    </>
  );
}
