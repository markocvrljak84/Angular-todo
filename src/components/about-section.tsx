import Image from "next/image";
import { ABOUT_US_IMAGE } from "@/config/site-images";
import type { Messages } from "@/i18n/messages";

type Props = {
  t: Messages;
};

export function AboutSection({ t }: Props) {
  return (
    <section className="flat-about-block" aria-label={t.about.title}>
      <div className="flat-about-layout flat-about-layout--content">
        <div className="flat-about-layout__body">
          <div className="flat-about__main">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </div>

          <blockquote className="flat-about__quote">
            <p>{t.about.lead}</p>
          </blockquote>
        </div>

        <aside className="flat-about__side flat-about-layout__media" aria-label={t.about.sideImageAlt}>
          <div className="flat-about__side-media">
            <Image
              src={`/img/about-us/${ABOUT_US_IMAGE}`}
              alt={t.about.sideImageAlt}
              width={1920}
              height={1802}
              className="flat-about__side-img"
              sizes="(max-width: 799px) 100vw, 42vw"
            />
          </div>
          <p className="flat-about__hosts-note">{t.about.hostsNote}</p>
        </aside>
      </div>
    </section>
  );
}
