import type { Locale } from "./config";

export type OffGridMindfulContent = {
  label: string;
  title: string;
  body: string;
};

const en: OffGridMindfulContent = {
  label: "Important note",
  title: "Living lightly at Stars Peak",
  body: "As Stars Peak is completely off-grid, we kindly ask our guests to use water and electricity thoughtfully. Every little bit helps us preserve this special place and keep it running sustainably. Thank you so much for being mindful and for helping us take care of Stars Peak — we truly appreciate it.",
};

const hr: OffGridMindfulContent = {
  label: "Važna napomena",
  title: "Živjeti lagano na Stars Peaku",
  body: "Budući da je Stars Peak potpuno off-grid, ljubazno molimo goste da vodu i struju koriste promišljeno i štedljivo. Svaki mali gest pomaže nam sačuvati ovo posebno mjesto i održati ga održivim. Hvala vam što ste pažljivi i što nam pomažete čuvati Stars Peak — zaista cijenimo to.",
};

const de: OffGridMindfulContent = {
  label: "Wichtiger Hinweis",
  title: "Leicht leben auf Stars Peak",
  body: "Da Stars Peak vollständig off-grid ist, bitten wir unsere Gäste, Wasser und Strom bewusst und sparsam zu nutzen. Jeder kleine Beitrag hilft uns, diesen besonderen Ort zu bewahren und nachhaltig zu betreiben. Vielen Dank für Ihre Achtsamkeit und dafür, dass Sie uns helfen, Stars Peak zu pflegen — wir schätzen das sehr.",
};

const fr: OffGridMindfulContent = {
  label: "Note importante",
  title: "Vivre légèrement à Stars Peak",
  body: "Comme Stars Peak est entièrement off-grid, nous demandons gentiment à nos hôtes d’utiliser l’eau et l’électricité avec soin et parcimonie. Chaque petit geste nous aide à préserver ce lieu unique et à le faire fonctionner durablement. Merci beaucoup pour votre attention et pour nous aider à prendre soin de Stars Peak — nous l’apprécions sincèrement.",
};

const it: OffGridMindfulContent = {
  label: "Nota importante",
  title: "Vivere con leggerezza a Stars Peak",
  body: "Poiché Stars Peak è completamente off-grid, chiediamo gentilmente agli ospiti di usare acqua ed elettricità con attenzione e parsimonia. Ogni piccolo gesto ci aiuta a preservare questo luogo speciale e a mantenerlo sostenibile. Grazie di cuore per la vostra attenzione e per aiutarci a prenderci cura di Stars Peak — lo apprezziamo davvero.",
};

const byLocale: Record<Locale, OffGridMindfulContent> = { en, hr, de, fr, it };

export function getOffGridMindful(locale: Locale): OffGridMindfulContent {
  return byLocale[locale];
}
