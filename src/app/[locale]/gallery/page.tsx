import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

export const dynamic = "force-static";

const SEEDS = [
  "starspeak-exterior",
  "starspeak-living",
  "starspeak-bed",
  "starspeak-kitchen",
  "starspeak-deck",
  "starspeak-view",
];

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: l } = await params;
  if (!isLocale(l)) return {};
  const t = getMessages(l as Locale);
  return { title: t.gallery.title };
}

export default async function GalleryPage({ params }: Props) {
  const { locale: l } = await params;
  if (!isLocale(l)) notFound();
  const t = getMessages(l as Locale);

  return (
    <article className="content-page">
      <h1>{t.gallery.title}</h1>
      <p className="lead">{t.gallery.intro}</p>
      <div className="gallery-grid">
        {t.gallery.images.map((img, i) => {
          const seed = SEEDS[i] ?? `starspeak-${i}`;
          const src = `https://picsum.photos/seed/${seed}/960/640`;
          return (
            <figure key={seed} className="gallery-grid__item">
              <div className="gallery-grid__img-wrap">
                <Image
                  src={src}
                  alt={img.alt}
                  width={960}
                  height={640}
                  sizes="(max-width: 720px) 100vw, 33vw"
                  className="gallery-grid__img"
                />
              </div>
              <figcaption>{img.caption}</figcaption>
            </figure>
          );
        })}
      </div>
    </article>
  );
}
