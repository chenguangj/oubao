import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Sans } from "next/font/google";
import { Courier_Prime } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { FlyingCardsBg } from "@/components/flying-cards-bg";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _courierPrime = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const _ibmPlexSans = IBM_Plex_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OUBAOGAME — AI-Powered Smart Card Gaming",
  description:
    "Win Big · Landlord — AI-powered smart card gaming platform. Battle AI with Tokens, or summon AI analysis for optimal plays in PvP matches.",
  keywords: [
    "Win Big",
    "Landlord",
    "AI card games",
    "poker game",
    "Token gaming",
    "smart card games",
    "OUBAOGAME",
  ],
  authors: [{ name: "OUBAOGAME" }],
  openGraph: {
    title: "OUBAOGAME — AI-Powered Smart Card Gaming",
    description: "Win Big · Landlord — AI-powered smart card gaming platform",
    type: "website",
    siteName: "OUBAOGAME",
  },
  twitter: {
    card: "summary_large_image",
    title: "OUBAOGAME — AI-Powered Smart Card Gaming",
    description: "Win Big · Landlord — AI-powered smart card gaming platform",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-[#0f0f1e] text-[#f0e6d3]">
        <FlyingCardsBg />
        <div className="relative z-10">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
