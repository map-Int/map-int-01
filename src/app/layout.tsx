import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageContext";
import { AppShell } from "@/components/AppShell";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MAP International Power | Complete Solar Energy Solutions Bangladesh",
  description:
    "Clean Energy | Brighter Future. Leading provider of residential, commercial, and industrial rooftop solar, on-grid net metering, off-grid storage, and solar irrigation pumps in Kurigram, Rangpur, and Dhaka, Bangladesh.",
  keywords: [
    "Solar energy Bangladesh",
    "Solar panel Kurigram",
    "Solar installation Rangpur",
    "Net metering Dhaka",
    "Industrial rooftop solar Bangladesh",
    "Solar irrigation pump Kurigram",
    "MAP International Power",
    "Solar battery LiFePO4",
    "Solar inverter price Bangladesh"
  ],
  authors: [{ name: "MAP International Power" }],
  openGraph: {
    title: "MAP International Power | Clean Energy, Brighter Future",
    description: "Complete solar energy engineering, equipment supply, and technical services in Bangladesh.",
    type: "website",
    locale: "en_BD",
    siteName: "MAP International Power",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#00549A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased font-sans">
        <LanguageProvider>
          <AppShell>{children}</AppShell>
        </LanguageProvider>
      </body>
    </html>
  );
}
