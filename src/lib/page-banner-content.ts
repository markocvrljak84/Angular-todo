import type { Locale } from "@/i18n/config";
import type { SitePageKey } from "@/config/site-routes";
import { PAGE_BANNER_IMAGES } from "@/config/site-images";
import { getExperienceContent } from "@/i18n/experience-content";
import { getGoodToKnow } from "@/i18n/good-to-know";
import { getHikingRoutes } from "@/i18n/hiking-routes";
import { getMessages } from "@/i18n/messages";
import { getPageSeo } from "@/i18n/page-seo";

export type InnerPageKey = Exclude<SitePageKey, "home">;

export type PageBannerContent = {
  title: string;
  message: string;
  imageSrc: string;
  imageAlt: string;
};

function getPageTitle(locale: Locale, page: InnerPageKey): string {
  const t = getMessages(locale);

  switch (page) {
    case "about":
      return t.about.title;
    case "gallery":
      return t.gallery.title;
    case "goodToKnow":
      return getGoodToKnow(locale).title;
    case "hiking":
      return getHikingRoutes(locale).title;
    case "nearby":
      return t.home.nearbyTitle;
    case "guides":
      return getExperienceContent(locale).guides.title;
    case "contact":
      return t.contact.title;
  }
}

function getPageImageAlt(locale: Locale, page: InnerPageKey): string {
  const t = getMessages(locale);

  switch (page) {
    case "about":
      return t.about.sideImageAlt;
    case "gallery":
      return t.gallery.images[0]?.alt ?? t.gallery.title;
    case "goodToKnow":
      return getGoodToKnow(locale).title;
    case "hiking":
      return getHikingRoutes(locale).routes[0]?.title ?? t.nav.hiking;
    case "nearby":
      return t.home.itineraryImageAlts[0] ?? t.home.nearbyTitle;
    case "guides":
      return getExperienceContent(locale).guides.title;
    case "contact":
      return t.contact.mapIframeTitle;
  }
}

export function getPageBannerContent(
  locale: Locale,
  page: InnerPageKey
): PageBannerContent {
  const seo = getPageSeo(locale, page);
  const { src } = PAGE_BANNER_IMAGES[page];

  return {
    title: getPageTitle(locale, page),
    message: seo.description,
    imageSrc: src,
    imageAlt: getPageImageAlt(locale, page),
  };
}
