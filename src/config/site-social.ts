/**
 * Official social profiles — used in footer, contact, JSON-LD sameAs, and rel="me".
 */
export const SITE_SOCIAL = {
  instagram: {
    id: "instagram",
    href: "https://www.instagram.com/stars.peak/",
    label: "Instagram",
  },
  facebook: {
    id: "facebook",
    href: "https://www.facebook.com/profile.php?id=61560656405912",
    label: "Facebook",
  },
  pinterest: {
    id: "pinterest",
    href: "https://www.pinterest.com/velebitstarspeak/",
    label: "Pinterest",
  },
} as const;

export type SiteSocialId = keyof typeof SITE_SOCIAL;

export const SITE_SOCIAL_PROFILES = [
  SITE_SOCIAL.instagram,
  SITE_SOCIAL.facebook,
  SITE_SOCIAL.pinterest,
] as const;

/** Absolute profile URLs for schema.org sameAs and identity links. */
export function getSocialSameAsUrls(): string[] {
  return SITE_SOCIAL_PROFILES.map((profile) => profile.href);
}
