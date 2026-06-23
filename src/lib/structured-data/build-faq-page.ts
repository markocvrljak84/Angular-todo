import type { Locale } from "@/i18n/config";
import { getGoodToKnow } from "@/i18n/good-to-know";
import { localePath } from "@/config/site-routes";
import { getSiteUrl } from "@/lib/site-url";
import { goodToKnowSectionToAnswer } from "./faq-from-good-to-know";

export function buildFaqPageJsonLd(locale: Locale, page: "home" | "goodToKnow") {
  const base = getSiteUrl();
  const pageUrl =
    page === "home"
      ? `${base}/${locale}`
      : `${base}${localePath(locale, "goodToKnow")}`;
  const content = getGoodToKnow(locale);

  return {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    url: pageUrl,
    mainEntity: content.sections.map((section) => ({
      "@type": "Question",
      name: section.title,
      acceptedAnswer: {
        "@type": "Answer",
        text: goodToKnowSectionToAnswer(section),
      },
    })),
  };
}
