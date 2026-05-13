"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, isLocale, type Locale } from "@/i18n/config";

const OPTION_LABELS: Record<Locale, string> = {
  en: "English",
  hr: "Hrvatski",
  de: "Deutsch",
  fr: "Français",
  it: "Italiano",
};

export function LangSwitch({
  currentLocale,
  aria,
}: {
  currentLocale: Locale;
  aria: string;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const parts = pathname.split("/").filter(Boolean);
  const maybeLocale = parts[0];
  const pathAfter =
    parts.length > 0 && isLocale(maybeLocale) ? parts.slice(1).join("/") : parts.join("/");
  const suffix = pathAfter ? `/${pathAfter}` : "";

  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const loc = e.target.value as Locale;
    router.push(`/${loc}${suffix}`);
    e.target.blur();
  }

  return (
    <div className="lang-switch" role="navigation" aria-label={aria}>
      <select
        className="lang-switch__select"
        value={currentLocale}
        onChange={onChange}
        aria-label={aria}
      >
        {locales.map((loc) => (
          <option key={loc} value={loc} lang={loc}>
            {OPTION_LABELS[loc]}
          </option>
        ))}
      </select>
    </div>
  );
}
