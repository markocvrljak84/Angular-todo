type Props = {
  src: string;
  alt: string;
};

/** Plain static img — no Next optimizer, no Unicode path issues. */
export function ItineraryImage({ src, alt }: Props) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} className="itinerary__img" loading="lazy" decoding="async" />
  );
}
