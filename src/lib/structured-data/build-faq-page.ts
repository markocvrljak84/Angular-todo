import type { Locale } from "@/i18n/config";
import { getAccommodationPageContent } from "@/i18n/accommodation-content";
import { getGoodToKnow } from "@/i18n/good-to-know";
import { localePath } from "@/config/site-routes";
import { canonicalAbsoluteUrl } from "@/lib/site-url";
import { goodToKnowSectionToAnswer } from "./faq-from-good-to-know";

export function buildFaqPageJsonLd(
  locale: Locale,
  page: "home" | "goodToKnow" | "accommodation"
) {
  const pageUrl = canonicalAbsoluteUrl(localePath(locale, page === "home" ? "home" : page));
  const content = getGoodToKnow(locale);

  const fromGoodToKnow = content.sections.map((section) => ({
    "@type": "Question" as const,
    name: section.title,
    acceptedAnswer: {
      "@type": "Answer" as const,
      text: goodToKnowSectionToAnswer(section),
    },
  }));

  const fromStaySeo =
    page === "accommodation"
      ? getAccommodationPageContent(locale).seoFaq.items.map((faq) => ({
          "@type": "Question" as const,
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer" as const,
            text: faq.answer,
          },
        }))
      : [];

  return {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    url: pageUrl,
    mainEntity: [...fromStaySeo, ...fromGoodToKnow],
  };
}
