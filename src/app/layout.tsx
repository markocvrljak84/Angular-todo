import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { HERO_LCP_PRELOAD_SRC, HERO_LCP_SRCSET } from "@/config/site-images";
import { getGeoMetaOther } from "@/config/site-location";
import { getMetadataBase } from "@/lib/site-url";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
  adjustFontFallback: true,
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const geo = getGeoMetaOther();

  return (
    <html lang="en" className={`${sans.variable} ${sans.className}`} suppressHydrationWarning>
      <head>
        <meta name="geo.region" content={geo["geo.region"]} />
        <meta name="geo.placename" content={geo["geo.placename"]} />
        <meta name="geo.position" content={geo["geo.position"]} />
        <meta name="ICBM" content={geo.ICBM} />
        <meta
          name="google-site-verification"
          content="5jWshJpXqMtH8plQA-zwKoMh-BbF435MWnOSE49tV2M"
        />
        <link
          rel="preload"
          as="image"
          href={HERO_LCP_PRELOAD_SRC}
          imageSrcSet={HERO_LCP_SRCSET}
          imageSizes="100vw"
          fetchPriority="high"
        />
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}
