"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { locales, isLocale, type Locale } from "@/i18n/config";

const MOBILE_LANG_QUERY = "(max-width: 1189px)";

const OPTION_LABELS: Record<Locale, string> = {
  en: "English",
  hr: "Hrvatski",
  de: "Deutsch",
  fr: "Français",
  it: "Italiano",
};

const SHORT_LABELS: Record<Locale, string> = {
  en: "EN",
  hr: "HR",
  de: "DE",
  fr: "FR",
  it: "IT",
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
  const [compact, setCompact] = useState(false);
  const parts = pathname.split("/").filter(Boolean);
  const maybeLocale = parts[0];
  const pathAfter =
    parts.length > 0 && isLocale(maybeLocale) ? parts.slice(1).join("/") : parts.join("/");
  const suffix = pathAfter ? `/${pathAfter}` : "";

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_LANG_QUERY);
    const sync = () => setCompact(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const loc = e.target.value as Locale;
    router.push(`/${loc}${suffix}`);
    e.target.blur();
  }

  const labels = compact ? SHORT_LABELS : OPTION_LABELS;

  return (
    <div className={`lang-switch${compact ? " lang-switch--compact" : ""}`} role="navigation" aria-label={aria}>
      <select
        className="lang-switch__select"
        value={currentLocale}
        onChange={onChange}
        aria-label={aria}
      >
        {locales.map((loc) => (
          <option key={loc} value={loc} lang={loc}>
            {labels[loc]}
          </option>
        ))}
      </select>
    </div>
  );
}
