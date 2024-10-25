import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import GTranslateLoader from "./GTranslateLoader";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Solshare - Decentralized Social Media Platform on Solana Blockchain",
  description:
    "Solshare is a decentralized social media platform where users can create, share, and engage with content while earning tokens based on their interactions. Powered by Solana blockchain for secure transactions.",
  keywords: [
    "Solshare",
    "decentralized social media",
    "Solana blockchain",
    "token rewards",
    "secure transactions",
    "DApp",
    "social media platform",
    "crypto",
    "wallet integration",
  ].join(", "),
  openGraph: {
    title: "Solshare - Decentralized Social Media Platform",
    description:
      "Join Solshare to create, share, and engage with content while earning tokens through blockchain-powered interactions.",
    url: "https://your-solshare-website.com", 
    siteName: "Solshare",
    images: [
      {
        url: "https://your-solshare-website.com/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Solshare Decentralized Social Media",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
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
        <div className="gtranslate_wrapper">
        {children}
        
      </div>

      <GTranslateLoader />

      </body>
    </html>
  );
}
