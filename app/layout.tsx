import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ristorante 8/8 — Автентичний італійський ресторан на Оболоні",
  description: "Паста ручної роботи, класична піца на дровах та преміальні італійські інгредієнти. Рейтинг 4.8/5. Бронюйте стіл онлайн.",
  keywords: ["італійський ресторан київ", "піца на дровах оболонь", "паста ручної роботи", "ristorante 8/8", "ресторан оболонь"],
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@500;600;700;800&family=Karla:wght@400;500&family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body text-text-main bg-bg-light antialiased selection:bg-accent selection:text-white">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
