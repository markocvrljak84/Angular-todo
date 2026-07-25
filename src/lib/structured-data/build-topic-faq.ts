import type { TopicFaq } from "@/i18n/topic-pages";

export function buildTopicFaqJsonLd(pageUrl: string, faqs: TopicFaq[]) {
  return {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    url: pageUrl,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
