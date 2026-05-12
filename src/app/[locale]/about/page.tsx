import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

export const dynamic = "force-static";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: l } = await params;
  if (!isLocale(l)) return {};
  const t = getMessages(l as Locale);
  return { title: t.about.title };
}

export default async function AboutPage({ params }: Props) {
  const { locale: l } = await params;
  if (!isLocale(l)) notFound();
  const t = getMessages(l as Locale);

  return (
    <article className="content-page">
      <h1>{t.about.title}</h1>
      <p className="lead">{t.about.lead}</p>
      <div className="two-col">
        <div className="prose">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <h2>{t.about.highlightsTitle}</h2>
          <ul>
            {t.about.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <aside className="aside-card">
          <h2>{t.about.asideTitle}</h2>
          <p>{t.about.asideBody}</p>
        </aside>
      </div>
    </article>
  );
}
