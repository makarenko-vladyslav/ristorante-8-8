import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lumina — Premium Architecture & Interior Design",
  description: "Biophilic design integrating natural light and sustainable materials with zero-compromise luxury. Based in Kyiv.",
  keywords: ["architecture", "interior design", "luxury", "biophilic", "Kyiv"],
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "Lumina — Premium Architecture & Interior Design",
    description: "Zero-compromise luxury architecture and interior design.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Manrope:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}