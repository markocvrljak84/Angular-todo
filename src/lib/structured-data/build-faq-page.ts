import type { Locale } from "@/i18n/config";
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
