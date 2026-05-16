import type { FacilityCategory, FacilityIcon } from "@/i18n/facility-categories";

function FacilityIconGlyph({ icon }: { icon: FacilityIcon }) {
  const common = { width: 22, height: 22, "aria-hidden": true as const };

  switch (icon) {
    case "parking":
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <circle cx="12" cy="12" r="9" />
          <text x="12" y="16" textAnchor="middle" fontSize="11" fontWeight="700" fill="currentColor" stroke="none">
            P
          </text>
        </svg>
      );
    case "wifi":
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M5 12.5a11 11 0 0 1 14 0M8 15.5a6.5 6.5 0 0 1 8 0M12 19h.01" strokeLinecap="round" />
        </svg>
      );
    case "kitchen":
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <rect x="4" y="3" width="16" height="18" rx="1" />
          <path d="M8 7v4M12 7v4M16 7v4" strokeLinecap="round" />
        </svg>
      );
    case "bedroom":
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M4 12h16v6H4zM6 12V8h5v4M13 12V9h5v3" strokeLinejoin="round" />
        </svg>
      );
    case "bathroom":
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M7 4v3M12 4v3M17 4v3M5 10h14v8H5z" strokeLinecap="round" />
        </svg>
      );
    case "living":
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M4 10h16v8H4zM7 10V7h4v3M13 10V8h4v2" strokeLinejoin="round" />
        </svg>
      );
    case "media":
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <rect x="3" y="5" width="18" height="12" rx="1.5" />
          <path d="M10 9l5 3-5 3V9z" fill="currentColor" stroke="none" />
        </svg>
      );
    case "room":
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M4 6h16v12H4zM8 18v2M16 18v2" />
        </svg>
      );
    case "pets":
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <circle cx="8" cy="8" r="2" />
          <circle cx="16" cy="8" r="2" />
          <circle cx="6" cy="14" r="2" />
          <circle cx="18" cy="14" r="2" />
          <path d="M12 14c-2 0-3 2-3 4h6c0-2-1-4-3-4z" />
        </svg>
      );
    case "yard":
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M12 20V10M8 14l4-4 4 4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 20h12" />
        </svg>
      );
    case "wellness":
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M12 4c-3 4-6 6-6 10a6 6 0 0 0 12 0c0-4-3-6-6-10z" />
        </svg>
      );
    case "activities":
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <circle cx="12" cy="5" r="2" />
          <path d="M12 7v4l-4 8h3l1-4h4l1 4h3l-4-8V7" strokeLinejoin="round" />
        </svg>
      );
    case "view":
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M3 18h18M6 18l3-6 3 4 3-5 3 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "building":
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M5 20V8l7-4 7 4v12M9 20v-5h6v5" />
        </svg>
      );
    case "family":
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <circle cx="9" cy="8" r="2.5" />
          <circle cx="16" cy="9" r="2" />
          <path d="M4 20c0-3 2.5-5 5-5s5 2 5 5M14 20c0-2 1.5-3.5 3.5-3.5" />
        </svg>
      );
    case "misc":
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M5 12l4 4 10-10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "safety":
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <path d="M9 11h6M9 15h6" strokeLinecap="round" />
        </svg>
      );
    case "languages":
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
        </svg>
      );
  }
}

type Props = {
  title: string;
  categories: FacilityCategory[];
};

export function FacilitiesGrid({ title, categories }: Props) {
  return (
    <section className="facilities" aria-labelledby="facilities-title">
      <h3 id="facilities-title" className="facilities__title">
        {title}
      </h3>
      <div className="facilities__grid">
        {categories.map((cat) => (
          <article key={cat.title} className="facilities__cat">
            <header className="facilities__cat-head">
              <span className="facilities__icon" aria-hidden="true">
                <FacilityIconGlyph icon={cat.icon} />
              </span>
              <h4 className="facilities__cat-title">{cat.title}</h4>
            </header>
            {cat.intro ? <p className="facilities__intro">{cat.intro}</p> : null}
            {cat.items?.length ? (
              <ul className="facilities__list">
                {cat.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
