"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";

const labels: Record<Locale, string> = {
  en: "EN",
  hr: "HR",
  de: "DE",
};

export function LangSwitch({
  currentLocale,
  aria,
}: {
  currentLocale: Locale;
  aria: string;
}) {
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);
  const maybeLocale = parts[0];
  const pathAfter =
    parts.length > 0 && (maybeLocale === "en" || maybeLocale === "hr" || maybeLocale === "de")
      ? parts.slice(1).join("/")
      : parts.join("/");
  const suffix = pathAfter ? `/${pathAfter}` : "";

  return (
    <div className="lang-switch" role="navigation" aria-label={aria}>
      {locales.map((loc) => (
        <Link
          key={loc}
          href={`/${loc}${suffix}`}
          className={`lang-switch__link${loc === currentLocale ? " lang-switch__link--active" : ""}`}
          hrefLang={loc}
          lang={loc}
        >
          {labels[loc]}
        </Link>
      ))}
    </div>
  );
}
