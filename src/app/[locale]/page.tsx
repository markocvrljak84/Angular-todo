import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

export const dynamic = "force-static";

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale: l } = await params;
  if (!isLocale(l)) notFound();
  const locale = l as Locale;
  const t = getMessages(locale);
  const base = `/${locale}`;

  return (
    <>
      <section className="hero">
        <p className="hero__badge">{t.home.heroBadge}</p>
        <h1>{t.home.heroTitle}</h1>
        <p className="hero__lead">{t.home.heroLead}</p>
        <div className="hero__actions">
          <Link href={`${base}/gallery`} className="btn btn--primary">
            {t.home.ctaPrimary}
          </Link>
          <Link href={`${base}/contact`} className="btn btn--ghost">
            {t.home.ctaSecondary}
          </Link>
        </div>
      </section>

      <section className="feature-grid" aria-labelledby="features-heading">
        <h2 id="features-heading" className="sr-only">
          {t.home.featuresSectionLabel}
        </h2>
        {t.home.features.map((f) => (
          <article key={f.title} className="feature-card">
            <h3>{f.title}</h3>
            <p>{f.body}</p>
          </article>
        ))}
      </section>

      <blockquote className="pull-quote">{t.home.quote}</blockquote>
    </>
  );
}
