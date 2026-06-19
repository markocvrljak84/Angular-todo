import { BOOKING_URL } from "@/config/site-contact";

type Props = {
  label: string;
  lead?: string;
  variant?: "default" | "hero" | "compact" | "banner";
};

export function BookCta({ label, lead, variant = "default" }: Props) {
  if (variant === "banner") {
    return (
      <aside className="book-banner" aria-label={label}>
        <div className="book-banner__inner">
          {lead ? <p className="book-banner__text">{lead}</p> : null}
          <a
            href={BOOKING_URL}
            className="book-banner__btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            {label}
          </a>
        </div>
      </aside>
    );
  }

  return (
    <div className={`book-cta book-cta--${variant}`}>
      {lead ? <p className="book-cta__lead">{lead}</p> : null}
      <a
        href={BOOKING_URL}
        className="book-cta__btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
    </div>
  );
}
