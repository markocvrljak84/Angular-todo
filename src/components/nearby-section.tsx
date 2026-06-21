import type { Messages } from "@/i18n/messages";
import { NEARBY_GRID_IMAGE_SRCS } from "@/config/site-images";
import { ItineraryImage } from "@/components/itinerary-image";

type Props = {
  t: Messages;
  /** When true, omit the intro line (page banner supplies context). */
  compact?: boolean;
};

export function NearbySection({ t, compact }: Props) {
  if (t.home.itineraryImageAlts.length !== NEARBY_GRID_IMAGE_SRCS.length) {
    throw new Error(
      "home.itineraryImageAlts length must match NEARBY_GRID_IMAGE_SRCS."
    );
  }

  return (
    <section className="itinerary" aria-label={t.home.nearbyTitle}>
      {!compact ? (
        <header className="itinerary__header">
          <p className="itinerary__lead">{t.home.nearbyLead}</p>
        </header>
      ) : null}
      <div className="itinerary__grid">
        <div className="itinerary__cell itinerary__cell--img itinerary__cell--img-1">
          <div className="itinerary__img-wrap">
            <ItineraryImage
              src={NEARBY_GRID_IMAGE_SRCS[0]}
              alt={t.home.itineraryImageAlts[0] ?? ""}
            />
          </div>
          <span className="itinerary__ptr itinerary__ptr--e" aria-hidden />
        </div>

        <div className="itinerary__cell itinerary__cell--txt itinerary__cell--txt-1">
          <p className="itinerary__label">{t.home.itineraryDays[0].label}</p>
          <h3 className="itinerary__headline">
            {t.home.itineraryDays[0].headline}
          </h3>
          <p className="itinerary__body">{t.home.itineraryDays[0].body}</p>
        </div>

        <div className="itinerary__cell itinerary__cell--img itinerary__cell--img-2">
          <div className="itinerary__img-wrap">
            <ItineraryImage
              src={NEARBY_GRID_IMAGE_SRCS[1]}
              alt={t.home.itineraryImageAlts[1] ?? ""}
            />
          </div>
          <span className="itinerary__ptr itinerary__ptr--s" aria-hidden />
        </div>

        <div className="itinerary__cell itinerary__cell--txt itinerary__cell--txt-2">
          <p className="itinerary__label">{t.home.itineraryDays[1].label}</p>
          <h3 className="itinerary__headline">
            {t.home.itineraryDays[1].headline}
          </h3>
          <p className="itinerary__body">{t.home.itineraryDays[1].body}</p>
        </div>

        <div className="itinerary__cell itinerary__cell--img itinerary__cell--img-3">
          <div className="itinerary__img-wrap">
            <ItineraryImage
              src={NEARBY_GRID_IMAGE_SRCS[2]}
              alt={t.home.itineraryImageAlts[2] ?? ""}
            />
          </div>
          <span className="itinerary__ptr itinerary__ptr--w" aria-hidden />
          <span className="itinerary__ptr itinerary__ptr--s" aria-hidden />
        </div>

        <div className="itinerary__cell itinerary__cell--txt itinerary__cell--txt-3">
          <p className="itinerary__label">{t.home.itineraryDays[2].label}</p>
          <h3 className="itinerary__headline">
            {t.home.itineraryDays[2].headline}
          </h3>
          <p className="itinerary__body">{t.home.itineraryDays[2].body}</p>
        </div>

        <div className="itinerary__cell itinerary__cell--img itinerary__cell--img-4">
          <div className="itinerary__img-wrap">
            <ItineraryImage
              src={NEARBY_GRID_IMAGE_SRCS[3]}
              alt={t.home.itineraryImageAlts[3] ?? ""}
            />
          </div>
          <span className="itinerary__ptr itinerary__ptr--e" aria-hidden />
        </div>

        <div className="itinerary__cell itinerary__cell--txt itinerary__cell--txt-4">
          <p className="itinerary__label">{t.home.itineraryDays[3].label}</p>
          <h3 className="itinerary__headline">
            {t.home.itineraryDays[3].headline}
          </h3>
          <p className="itinerary__body">{t.home.itineraryDays[3].body}</p>
        </div>

        <div className="itinerary__cell itinerary__cell--img itinerary__cell--img-5">
          <div className="itinerary__img-wrap">
            <ItineraryImage
              src={NEARBY_GRID_IMAGE_SRCS[4]}
              alt={t.home.itineraryImageAlts[4] ?? ""}
            />
          </div>
          <span className="itinerary__ptr itinerary__ptr--w" aria-hidden />
        </div>

        <div className="itinerary__cell itinerary__cell--img itinerary__cell--img-6">
          <div className="itinerary__img-wrap">
            <ItineraryImage
              src={NEARBY_GRID_IMAGE_SRCS[5]}
              alt={t.home.itineraryImageAlts[5] ?? ""}
            />
          </div>
        </div>

        <div className="itinerary__cell itinerary__cell--img itinerary__cell--img-7">
          <div className="itinerary__img-wrap">
            <ItineraryImage
              src={NEARBY_GRID_IMAGE_SRCS[6]}
              alt={t.home.itineraryImageAlts[6] ?? ""}
            />
          </div>
        </div>

        <div className="itinerary__cell itinerary__cell--img itinerary__cell--img-8">
          <div className="itinerary__img-wrap">
            <ItineraryImage
              src={NEARBY_GRID_IMAGE_SRCS[7]}
              alt={t.home.itineraryImageAlts[7] ?? ""}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
