import { Great_Vibes, Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} ${display.variable} ${serifHero.variable}`}>
        {children}
      </body>
    </html>
  );
}
