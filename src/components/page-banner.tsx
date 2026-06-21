import Image from "next/image";
import type { Locale } from "@/i18n/config";
import type { InnerPageKey } from "@/lib/page-banner-content";
import { getPageBannerContent } from "@/lib/page-banner-content";

type Props = {
  locale: Locale;
  page: InnerPageKey;
};

export function PageBanner({ locale, page }: Props) {
  const { title, message, imageSrc, imageAlt } = getPageBannerContent(locale, page);

  return (
    <section className="page-banner" aria-labelledby="page-banner-title">
      <div className="page-banner__media">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="page-banner__img"
        />
        <div className="page-banner__scrim" aria-hidden="true" />
      </div>
      <div className="page-banner__content flat-wrap">
        <h1 id="page-banner-title" className="page-banner__title">
          {title}
        </h1>
        <p className="page-banner__message">{message}</p>
      </div>
    </section>
  );
}
