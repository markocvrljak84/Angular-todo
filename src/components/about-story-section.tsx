import Image from "next/image";
import Link from "next/link";
import type { AboutStoryContent } from "@/i18n/about-story";

type Props = {
  content: AboutStoryContent;
  pressKitHref: string;
};

export function AboutStorySection({ content, pressKitHref }: Props) {
  return (
    <section className="flat-section about-story" aria-label="Hosts story">
      <div className="flat-wrap about-story__layout">
        <div className="about-story__main">
          {content.blocks.map((block) => (
            <article key={block.title} className="about-story__block">
              <h2 className="flat-section__title flat-section__title--start">{block.title}</h2>
              {block.paragraphs.map((p) => (
                <p key={p.slice(0, 48)} className="about-story__p">
                  {p}
                </p>
              ))}
            </article>
          ))}

          <aside className="about-story__press">
            <p className="about-story__press-label">{content.press.label}</p>
            <a
              href={content.press.href}
              className="about-story__press-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {content.press.linkText}
            </a>
            <p className="about-story__press-more">
              <Link href={pressKitHref}>{content.press.kitLabel}</Link>
            </p>
          </aside>
        </div>

        <div className="about-story__motif" aria-hidden="true">
          <Image
            className="about-story__motif-img"
            src="/img/illustrations/header-ladybug.webp"
            alt=""
            width={800}
            height={800}
            sizes="(min-width: 900px) 14rem, 6.5rem"
          />
        </div>
      </div>
    </section>
  );
}
