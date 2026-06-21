import type { Metadata } from "next";
import { AccommodationBriefSection } from "@/components/accommodation-brief-section";
import { ExperienceDaySection } from "@/components/experience-day-section";
import { ExperienceMapSection } from "@/components/experience-map-section";
import { FaqSection } from "@/components/faq-section";
import { FinalCtaSection } from "@/components/final-cta-section";
import { GuidesSection } from "@/components/guides-section";
import { HeroSection } from "@/components/hero-section";
import { HomeEditorialSection } from "@/components/home-editorial-section";
import { NewsletterSignupSection } from "@/components/newsletter-signup-section";
import { WhySpecialSection } from "@/components/why-special-section";
import { HOME_IMAGES, MAIN_CAROUSEL_IMAGES } from "@/config/site-images";
import { localePath } from "@/config/site-routes";
import { getExperienceContent } from "@/i18n/experience-content";
import { getGoodToKnow } from "@/i18n/good-to-know";
import { getHomeContent } from "@/i18n/home-content";
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
  return buildPageMetadata(locale, "home");
}

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const locale = await resolveLocale(params);
  const t = getMessages(locale);
  const home = getHomeContent(locale);
  const experience = getExperienceContent(locale);

  const heroSlides = MAIN_CAROUSEL_IMAGES.map((file, i) => ({
    file,
    alt: t.home.heroSlideAlts[i] ?? t.home.heroImageAlt,
  }));

  const whySpecialImages = [
    HOME_IMAGES.whySpecial.mountain,
    HOME_IMAGES.whySpecial.sea,
    HOME_IMAGES.whySpecial.stars,
  ] as const;

  const editorialImages = [
    HOME_IMAGES.editorial.outdoorKitchen,
    HOME_IMAGES.editorial.interior,
    HOME_IMAGES.editorial.surroundings,
  ] as const;

  return (
    <>
      <HeroSection
        slides={heroSlides}
        kicker={t.home.heroBadge}
        hero={home.hero}
        experiencesHref={localePath(locale, "experiences")}
        carouselPrevLabel={t.home.heroCarouselPrev}
        carouselNextLabel={t.home.heroCarouselNext}
      />

      <WhySpecialSection content={home.whySpecial} images={whySpecialImages} />

      <ExperienceDaySection content={experience.day} />

      <HomeEditorialSection
        content={home.editorial}
        images={editorialImages}
        galleryHref={localePath(locale, "gallery")}
      />

      <AccommodationBriefSection
        content={home.accommodation}
        imageSrc={HOME_IMAGES.accommodation}
        accommodationHref={localePath(locale, "accommodation")}
      />

      <ExperienceMapSection
        content={home.map}
        mountainImage={{
          src: HOME_IMAGES.whySpecial.mountain,
          alt: home.whySpecial.cards[0].imageAlt,
        }}
        seaImage={{
          src: HOME_IMAGES.whySpecial.sea,
          alt: home.whySpecial.cards[1].imageAlt,
        }}
      />

      <GuidesSection
        content={experience.guides}
        blogHref={localePath(locale, "guides")}
      />

      <FaqSection content={getGoodToKnow(locale)} />

      <NewsletterSignupSection
        content={experience.signup}
        locale={locale}
        source="home"
        id="newsletter"
      />

      <FinalCtaSection content={home.finalCta} />
    </>
  );
}
