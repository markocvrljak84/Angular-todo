"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  activeLocales,
  defaultLocale,
  isLocale,
  localePrefixInUrl,
  type Locale,
} from "@/i18n/config";

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

function pathSuffix(pathname: string): string {
  const parts = pathname.split("/").filter(Boolean);

  if (localePrefixInUrl) {
    const maybeLocale = parts[0];
    const pathAfter =
      parts.length > 0 && isLocale(maybeLocale) ? parts.slice(1).join("/") : parts.join("/");
    return pathAfter ? `/${pathAfter}` : "";
  }

  return pathname === "/" ? "" : pathname;
}

function localeSwitchHref(loc: Locale, suffix: string): string {
  if (!localePrefixInUrl && loc === defaultLocale) {
    return suffix || "/";
  }
  return `/${loc}${suffix}`;
}

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
  const suffix = pathSuffix(pathname);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_LANG_QUERY);
    const sync = () => setCompact(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const loc = e.target.value as Locale;
    router.push(localeSwitchHref(loc, suffix));
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
        {activeLocales.map((loc) => (
          <option key={loc} value={loc} lang={loc}>
            {labels[loc]}
          </option>
        ))}
      </select>
    </div>
  );
}
