import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/config/site-routes";

type Props = {
  locale: Locale;
  experiencesLabel: string;
  journalLabel: string;
};

export function HomeExploreLinks({ locale, experiencesLabel, journalLabel }: Props) {
  return (
    <nav
      className="flat-section home-explore-links"
      aria-label="Explore Stars Peak"
    >
      <div className="flat-wrap home-explore-links__inner">
        <Link href={localePath(locale, "experiences")} className="home-explore-links__link">
          {experiencesLabel}
        </Link>
        <span className="home-explore-links__sep" aria-hidden="true">
          ·
        </span>
        <Link href={localePath(locale, "journal")} className="home-explore-links__link">
          {journalLabel}
        </Link>
      </div>
    </nav>
  );
}
