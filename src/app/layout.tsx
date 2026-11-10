import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Instrument_Serif } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const description =
  "Shadraw is the studio of Hamdiya, an artist in Verona, Italy, exploring portraiture and figurative art in oils and pencil. Commissions open.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Shadraw — Portraiture & Figurative Art",
    template: "%s · Shadraw",
  },
  description,
  keywords: [
    "Shadraw",
    "portrait artist",
    "figurative art",
    "oil painting",
    "portrait commission",
    "Verona artist",
  ],
  openGraph: {
    title: "Shadraw — Portraiture & Figurative Art",
    description,
    siteName: "Shadraw",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shadraw — Portraiture & Figurative Art",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#2a1c14",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${hanken.variable} ${instrument.variable} antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
