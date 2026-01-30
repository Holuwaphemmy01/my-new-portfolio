import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Terminal from "@/components/Terminal";
import ScrollProgress from "@/components/ScrollProgress";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oluwafemi Victor | World-Class Developer Portfolio",
  description: "Portfolio of Oluwafemi Victor, a world-class full-stack and blockchain developer.",
  keywords: ["Oluwafemi Victor", "Full Stack", "Blockchain", "Next.js", "React", "Solidity", "Portfolio"],
  themeColor: "#06b6d4",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Oluwafemi Victor | World-Class Developer",
    description: "High-impact full-stack and on-chain engineering, shipped fast with polish.",
    url: "https://github.com/Holuwaphemmy01",
    siteName: "Oluwafemi Victor",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "Oluwafemi Victor Portfolio" },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oluwafemi Victor | World-Class Developer",
    description: "High-impact full-stack and on-chain engineering, shipped fast with polish.",
    images: ["/og-image.png"],
    creator: "@FemiWire3",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "World-Class Developer",
              url: "https://example.com",
              jobTitle: "Full-Stack and Blockchain Engineer",
              sameAs: [],
            }),
          }}
        />
        <Preloader />
        <CustomCursor />
        <ScrollProgress />
        <Terminal />
        <Header />
        {children}<Footer />
      </body>
    </html>
  );
}
