import type { Locale } from "@/i18n/config";
import type { SitePageKey } from "@/config/site-routes";
import { getExperiencesPageContent } from "@/i18n/experiences-page";
import { getJournalContent } from "@/i18n/journal-content";
import { getGoodToKnow } from "@/i18n/good-to-know";
import { getHikingRoutes } from "@/i18n/hiking-routes";
import { getMessages } from "@/i18n/messages";
import { getPageSeo } from "@/i18n/page-seo";

export type InnerPageKey = Exclude<SitePageKey, "home">;

export type PageHeaderContent = {
  title: string;
  intro?: string;
};

export function getPageHeaderContent(
  locale: Locale,
  page: InnerPageKey
): PageHeaderContent {
  const t = getMessages(locale);
  const seo = getPageSeo(locale, page);

  switch (page) {
    case "about":
      return { title: t.about.title };
    case "accommodation":
      return { title: t.nav.accommodation, intro: seo.description };
    case "experiences":
      return {
        title: getExperiencesPageContent(locale).title,
        intro: getExperiencesPageContent(locale).intro,
      };
    case "gallery":
      return { title: t.gallery.title, intro: t.gallery.intro };
    case "goodToKnow":
      return { title: getGoodToKnow(locale).title };
    case "hiking":
      return { title: getHikingRoutes(locale).title, intro: seo.description };
    case "nearby":
      return { title: t.home.nearbyTitle, intro: seo.description };
    case "journal":
      return {
        title: getJournalContent(locale).title,
        intro: getJournalContent(locale).intro,
      };
    case "contact":
      return { title: t.contact.title };
  }
}
