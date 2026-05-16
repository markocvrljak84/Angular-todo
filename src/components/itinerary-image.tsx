import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  sizes?: string;
};

/**
 * Nearby grid photos — served unoptimized to avoid Vercel image optimizer
 * failures on large PNGs, Unicode paths, or space in filenames.
 */
export function ItineraryImage({
  src,
  alt,
  sizes = "(max-width: 959px) 100vw, 33vw",
}: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="itinerary__img"
      sizes={sizes}
      unoptimized
    />
  );
}
