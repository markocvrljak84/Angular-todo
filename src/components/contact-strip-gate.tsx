"use client";

import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";
import { isHomePath } from "@/config/site-routes";
import { ContactStrip } from "@/components/contact-strip";

type Props = {
  t: Messages;
  locale: Locale;
};

export function ContactStripGate({ t, locale }: Props) {
  const pathname = usePathname();

  if (isHomePath(pathname ?? "", locale)) {
    return null;
  }

  return <ContactStrip t={t} locale={locale} />;
}
