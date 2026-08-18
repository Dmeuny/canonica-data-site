import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://canonicadata.com"),
  title: "Canonica Data | Trusted Data Foundations",
  description:
    "Canonica Data helps organizations build trusted data foundations, reliable analytics, and AI-ready systems.",
  alternates: {
    canonical: "https://canonicadata.com",
  },
  openGraph: {
    title: "Canonica Data | Trusted Data Foundations",
    description:
      "Build the trusted data foundation behind better analytics, reporting, and AI.",
    url: "https://canonicadata.com",
    siteName: "Canonica Data",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
