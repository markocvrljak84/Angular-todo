import Image from "next/image";
import { galleryAssetSrc } from "@/config/site-images";
import type {
  GalleryStoryContent,
  GalleryStoryPair,
} from "@/i18n/gallery-story";

type Props = {
  content: GalleryStoryContent;
};

function StoryPair({ pair }: { pair: GalleryStoryPair }) {
  return (
    <figure className="gallery-story__pair">
      <div className="gallery-story__media">
        <Image
          src={galleryAssetSrc(pair.image)}
          alt={pair.imageAlt}
          width={1200}
          height={900}
          className="gallery-story__img"
          sizes="(max-width: 767px) 100vw, 50vw"
        />
      </div>
      <figcaption className="gallery-story__caption">
        <h3 className="gallery-story__title">{pair.title}</h3>
        <p className="gallery-story__body">{pair.body}</p>
      </figcaption>
    </figure>
  );
}

export function GalleryStorySections({ content }: Props) {
  const interiorRows = [
    content.interior.slice(0, 2),
    content.interior.slice(2, 4),
  ] as const;
  const exteriorRow = content.exterior;

  return (
    <div className="gallery-story">
      <section
        className="flat-section flat-section--under-header"
        aria-labelledby="gallery-interior-title"
      >
        <div className="flat-wrap">
          <h2 id="gallery-interior-title" className="flat-section__title">
            {content.interiorLabel}
          </h2>
          <p className="flat-section__intro flat-section__intro--lead">
            {content.interiorIntro}
          </p>
          {interiorRows.map((row, rowIndex) => (
            <div key={`interior-${rowIndex}`} className="gallery-story__row">
              {row.map((pair) => (
                <StoryPair key={pair.image} pair={pair} />
              ))}
            </div>
          ))}
        </div>
      </section>

      <section
        className="flat-section flat-section--tint"
        aria-labelledby="gallery-exterior-title"
      >
        <div className="flat-wrap">
          <h2 id="gallery-exterior-title" className="flat-section__title">
            {content.exteriorLabel}
          </h2>
          <div className="gallery-story__row">
            {exteriorRow.map((pair) => (
              <StoryPair key={pair.image} pair={pair} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
