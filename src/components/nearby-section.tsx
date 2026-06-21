import Image from "next/image";
import type { Messages } from "@/i18n/messages";
import { NEARBY_GRID_IMAGE_SRCS } from "@/config/site-images";

type Props = {
  t: Messages;
  /** When true, omit the intro line (page banner supplies context). */
  compact?: boolean;
};

const PLACE_COUNT = 6;

export function NearbySection({ t, compact }: Props) {
  if (t.home.itineraryImageAlts.length !== NEARBY_GRID_IMAGE_SRCS.length) {
    throw new Error(
      "home.itineraryImageAlts length must match NEARBY_GRID_IMAGE_SRCS."
    );
  }

  return (
    <section className="nearby-places" aria-label={t.home.nearbyTitle}>
      <div className="flat-wrap">
        {!compact ? (
          <header className="nearby-places__head">
            <p className="flat-section__intro flat-section__intro--lead">{t.home.nearbyLead}</p>
          </header>
        ) : null}

        <ul className="nearby-places__grid">
          {t.home.itineraryDays.slice(0, PLACE_COUNT).map((place, i) => (
            <li key={place.label} className="nearby-places__item">
              <figure className="nearby-places__figure">
                <div className="nearby-places__media">
                  <Image
                    src={NEARBY_GRID_IMAGE_SRCS[i]}
                    alt={t.home.itineraryImageAlts[i] ?? place.label}
                    width={640}
                    height={480}
                    className="nearby-places__img"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <figcaption className="nearby-places__caption">
                  <h3 className="nearby-places__title">{place.label}</h3>
                  <p className="nearby-places__text">{place.body}</p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
