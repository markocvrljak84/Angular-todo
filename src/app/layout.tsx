import type { Metadata } from "next";
import { DM_Sans, Great_Vibes } from "next/font/google";
import { getGeoMetaOther } from "@/config/site-location";
import { getMetadataBase } from "@/lib/site-url";
import "./globals.css";

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="geo.region" content={geo["geo.region"]} />
        <meta name="geo.placename" content={geo["geo.placename"]} />
        <meta name="geo.position" content={geo["geo.position"]} />
        <meta name="ICBM" content={geo.ICBM} />
        <meta
          name="google-site-verification"
          content="5jWshJpXqMtH8plQA-zwKoMh-BbF435MWnOSE49tV2M"
        />
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />
      </head>
      <body className={`${sans.variable} ${display.variable}`}>
        {children}
      </body>
    </html>
  );
}
