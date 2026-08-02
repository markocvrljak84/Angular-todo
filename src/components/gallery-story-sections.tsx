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

function StorySection({
  id,
  label,
  intro,
  rows,
  tint,
}: {
  id: string;
  label: string;
  intro: string;
  rows: readonly (readonly GalleryStoryPair[])[];
  tint?: boolean;
}) {
  const titleId = `gallery-${id}-title`;
  return (
    <section
      className={`flat-section${tint ? " flat-section--tint" : ""}${id === "interior" ? " flat-section--under-header" : ""}`}
      aria-labelledby={titleId}
    >
      <div className="flat-wrap">
        <h2 id={titleId} className="flat-section__title">
          {label}
        </h2>
        <p className="flat-section__intro flat-section__intro--lead">{intro}</p>
        {rows.map((row, rowIndex) => (
          <div key={`${id}-${rowIndex}`} className="gallery-story__row">
            {row.map((pair) => (
              <StoryPair key={pair.image} pair={pair} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export function GalleryStorySections({ content }: Props) {
  return (
    <div className="gallery-story">
      <StorySection
        id="interior"
        label={content.interiorLabel}
        intro={content.interiorIntro}
        rows={[content.interior.slice(0, 2), content.interior.slice(2, 4)]}
      />
      <StorySection
        id="outdoor-kitchen"
        label={content.outdoorKitchenLabel}
        intro={content.outdoorKitchenIntro}
        rows={[
          content.outdoorKitchen.slice(0, 2),
          content.outdoorKitchen.slice(2, 4),
        ]}
        tint
      />
      <StorySection
        id="wellness"
        label={content.wellnessLabel}
        intro={content.wellnessIntro}
        rows={[content.wellness]}
      />
    </div>
  );
}
