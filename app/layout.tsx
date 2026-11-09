import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
});

const sans = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Set NEXT_PUBLIC_SITE_URL to the live domain so social previews resolve
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Tempo School of Performing Arts · Castle Rock, Colorado",
  description:
    "Ballet, pointe, jazz, tap, lyrical, hip hop and competition dance in Castle Rock, Colorado. At Tempo, everyone can dance.",
  icons: { icon: "/images/tempo-logo.png", apple: "/images/tempo-logo.png" },
  openGraph: {
    title: "Tempo School of Performing Arts",
    description: "Everyone can dance. A performing arts studio in Castle Rock, Colorado.",
    images: ["/images/stage/stage-1.jpg"],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0809",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
