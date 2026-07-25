import type { Metadata, Viewport } from "next";
import {
  Barlow_Condensed,
  Cormorant_Garamond,
  Plus_Jakarta_Sans,
} from "next/font/google";
import { HERO_LCP_PRELOAD_SRC, HERO_LCP_SRCSET } from "@/config/site-images";
import { getGeoMetaOther } from "@/config/site-location";
import { SITE_SOCIAL_PROFILES } from "@/config/site-social";
import { getMetadataBase } from "@/lib/site-url";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
  adjustFontFallback: true,
  preload: true,
});

const condensed = Barlow_Condensed({
  subsets: ["latin", "latin-ext"],
  variable: "--font-condensed-face",
  display: "swap",
  weight: ["400", "500", "600"],
});

const serif = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1c1917",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const geo = getGeoMetaOther();

  return (
    <html
      lang="en"
      className={`${sans.variable} ${condensed.variable} ${serif.variable} ${sans.className}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="geo.region" content={geo["geo.region"]} />
        <meta name="geo.placename" content={geo["geo.placename"]} />
        <meta name="geo.position" content={geo["geo.position"]} />
        <meta name="ICBM" content={geo.ICBM} />
        <meta
          name="google-site-verification"
          content="5jWshJpXqMtH8plQA-zwKoMh-BbF435MWnOSE49tV2M"
        />
        <meta
          name="p:domain_verify"
          content="c4e33cac45e978de95e0b9986bf8bf03"
        />
        <link
          rel="preload"
          as="image"
          href={HERO_LCP_PRELOAD_SRC}
          imageSrcSet={HERO_LCP_SRCSET}
          imageSizes="100vw"
          fetchPriority="high"
        />
        <link rel="preconnect" href="https://www.google.com" />
        {SITE_SOCIAL_PROFILES.map((profile) => (
          <link key={profile.id} rel="me" href={profile.href} />
        ))}
      </head>
      <body>{children}</body>
    </html>
  );
}
