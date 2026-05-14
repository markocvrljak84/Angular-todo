import type { Metadata } from "next";
import { Great_Vibes, Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import { getMetadataBase } from "@/lib/site-url";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
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

const serifHero = Playfair_Display({
  subsets: ["latin"],
  style: ["italic", "normal"],
  variable: "--font-serif-hero",
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
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />
      </head>
      <body className={`${sans.variable} ${display.variable} ${serifHero.variable}`}>
        {children}
      </body>
    </html>
  );
}
