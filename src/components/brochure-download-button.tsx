"use client";

import {
  VELEBIT_BROCHURE_DOWNLOAD_NAME,
  VELEBIT_BROCHURE_PDF,
} from "@/config/site-brochure";

type Props = {
  label: string;
};

export function BrochureDownloadButton({ label }: Props) {
  async function handleDownload() {
    try {
      const response = await fetch(VELEBIT_BROCHURE_PDF);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = VELEBIT_BROCHURE_DOWNLOAD_NAME;
      link.click();
      URL.revokeObjectURL(url);
    } catch {
      window.open(VELEBIT_BROCHURE_PDF, "_blank", "noopener,noreferrer");
    }
  }

  return (
    <button type="button" className="newsletter-signup__download" onClick={handleDownload}>
      {label}
    </button>
  );
}
