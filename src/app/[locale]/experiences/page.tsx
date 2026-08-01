import type { Metadata } from "next";
import Image from "next/image";
import { BookCta } from "@/components/book-cta";
import { ClimbingRoutesSection } from "@/components/climbing-routes-section";
import { ExperienceMapSection } from "@/components/experience-map-section";
import { HikingRoutesSection } from "@/components/hiking-routes-section";
import { JournalTeaserSection } from "@/components/journal-teaser-section";
import { NearbySection } from "@/components/nearby-section";
import { NewsletterSignupSection } from "@/components/newsletter-signup-section";
import { ExperiencesAgroSection } from "@/components/taste-of-velebit-section";
import { getClimbingRoutes } from "@/i18n/climbing-routes";
import { getExperienceContent } from "@/i18n/experience-content";
import { getExperiencesPageContent } from "@/i18n/experiences-page";
import { getJournalContent } from "@/i18n/journal-content";
import { getHomeContent } from "@/i18n/home-content";
import { getHikingRoutes } from "@/i18n/hiking-routes";
import { getMessages } from "@/i18n/messages";
import { HOME_IMAGES } from "@/config/site-images";
import { localePath } from "@/config/site-routes";
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
  return buildPageMetadata(locale, "experiences");
}

type Props = { params: Promise<{ locale: string }> };

export default async function ExperiencesPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const t = getMessages(locale);
  const page = getExperiencesPageContent(locale);
  const experience = getExperienceContent(locale);
  const journal = getJournalContent(locale);
  const home = getHomeContent(locale);
  const [hiking, sea, food, agro] = page.categories;

  return (
    <>
      <PageJsonLd locale={locale} messages={t} page="experiences" />

      {/* LCP: mountain zone image — do not compete with Google Maps embeds. */}
      <link
        rel="preload"
        as="image"
        type="image/webp"
        href={HOME_IMAGES.experienceMap.mountain}
        fetchPriority="high"
      />

      <ExperienceMapSection
        id="exp-mountain-sea"
        content={home.map}
        mountainImage={{
          src: HOME_IMAGES.experienceMap.mountain,
          alt: home.whySpecial.cards[0].imageAlt,
        }}
        seaImage={{
          src: HOME_IMAGES.experienceMap.sea,
          alt: home.whySpecial.cards[1].imageAlt,
        }}
      />

      <section id={hiking.id} className="flat-section flat-section--tint" aria-labelledby="exp-hiking">
        <div className="flat-wrap experiences-hiking__head">
          <div className="experiences-hiking__copy">
            <h2 id="exp-hiking" className="flat-section__title">
              {hiking.title}
            </h2>
            <p className="flat-section__intro">{hiking.intro}</p>
          </div>
          <div className="experiences-hiking__motif" aria-hidden="true">
            <Image
              className="experiences-hiking__motif-img"
              src="/img/illustrations/header-hare.webp"
              alt=""
              width={800}
              height={800}
              sizes="(min-width: 768px) 8.5rem, 7.5rem"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        <HikingRoutesSection
          content={getHikingRoutes(locale)}
          compact
          initialOpenId={null}
        />
        <ClimbingRoutesSection content={getClimbingRoutes(locale)} />
      </section>

      <section id={sea.id} className="flat-section" aria-labelledby="exp-sea">
        <div className="flat-wrap">
          <h2 id="exp-sea" className="flat-section__title">{sea.title}</h2>
          <p className="flat-section__intro">{sea.intro}</p>
        </div>
        <NearbySection t={t} compact />
      </section>

      <section id={food.id} className="flat-section flat-section--tint" aria-labelledby="exp-food">
        <div className="flat-wrap flat-wrap--narrow">
          <h2 id="exp-food" className="flat-section__title">{food.title}</h2>
          <p className="flat-section__intro">{food.intro}</p>
          <ul className="experiences-food__list">
            {t.home.itineraryDays.map((day) => (
              <li key={day.label} className="experiences-food__item">
                <strong>{day.label}</strong>
                <span>{day.headline}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ExperiencesAgroSection
        title={agro.title}
        intro={agro.intro}
        taste={experience.taste}
      />

      <JournalTeaserSection
        content={journal}
        locale={locale}
        experiencesHref={localePath(locale, "experiences")}
        compact
      />

      <NewsletterSignupSection
        content={experience.signup}
        locale={locale}
        source="experiences"
      />

      <BookCta variant="banner" label={t.header.bookCta} lead={t.cta.hikingLead} />
    </>
  );
}
