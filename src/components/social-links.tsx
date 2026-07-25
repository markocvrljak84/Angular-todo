import { SITE_SOCIAL_PROFILES } from "@/config/site-social";

type Props = {
  /** Accessible name for the nav landmark */
  ariaLabel: string;
  className?: string;
};

export function SocialLinks({ ariaLabel, className }: Props) {
  return (
    <nav
      className={className ? `social-links ${className}` : "social-links"}
      aria-label={ariaLabel}
    >
      <ul className="social-links__list">
        {SITE_SOCIAL_PROFILES.map((profile) => (
          <li key={profile.id}>
            <a
              href={profile.href}
              target="_blank"
              rel="noopener noreferrer me"
              className="social-links__link"
            >
              {profile.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
