import type { Locale } from "@/i18n/config";

export type VelebitBrochureAsset = {
  /** Public URL path served from /public */
  pdfPath: string;
  /** Suggested filename when the visitor downloads the brochure */
  downloadName: string;
};

/**
 * Velebit brochure PDFs in /public/brochures — one file per site locale.
 * Generated from velebit-brosura-{locale}.html via `npm run generate:brochure-html-pdf`.
 */
const VELEBIT_BROCHURES: Record<Locale, VelebitBrochureAsset> = {
  hr: {
    pdfPath: "/brochures/velebit-hr.pdf",
    downloadName: "Velebit-brosura-Stars-Peak-HR.pdf",
  },
  en: {
    pdfPath: "/brochures/velebit-en.pdf",
    downloadName: "Velebit-brochure-Stars-Peak-EN.pdf",
  },
  de: {
    pdfPath: "/brochures/velebit-de.pdf",
    downloadName: "Velebit-broschuere-Stars-Peak-DE.pdf",
  },
  fr: {
    pdfPath: "/brochures/velebit-fr.pdf",
    downloadName: "Velebit-brochure-Stars-Peak-FR.pdf",
  },
  it: {
    pdfPath: "/brochures/velebit-it.pdf",
    downloadName: "Velebit-brochure-Stars-Peak-IT.pdf",
  },
};

/** @deprecated Use getVelebitBrochure(locale) */
export const VELEBIT_BROCHURE_PDF = VELEBIT_BROCHURES.hr.pdfPath;

/** @deprecated Use getVelebitBrochure(locale) */
export const VELEBIT_BROCHURE_DOWNLOAD_NAME = VELEBIT_BROCHURES.hr.downloadName;

export function getVelebitBrochure(locale: Locale): VelebitBrochureAsset {
  return VELEBIT_BROCHURES[locale];
}
