import type { GoodToKnowSection } from "@/i18n/good-to-know";

export function goodToKnowSectionToAnswer(section: GoodToKnowSection): string {
  const parts: string[] = [];

  section.paragraphs?.forEach((p) => parts.push(p));
  if (section.listIntro) parts.push(section.listIntro);
  section.listItems?.forEach((item) => parts.push(item));
  section.paragraphsAfter?.forEach((p) => parts.push(p));

  return parts.join(" ").replace(/\s+/g, " ").trim();
}
