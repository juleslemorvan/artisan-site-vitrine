import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { localBusinessSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maçon Carreleur Électricien à Lyon — Renard Rénovation",
  description:
    "Thomas Renard, artisan maçon, carreleur et électricien à Lyon depuis 2009. Devis gratuit sous 48h. Zone : Lyon, Villeurbanne, Bron, Vénissieux (Rhône).",
  keywords: [
    "maçon Lyon",
    "carreleur Lyon",
    "électricien Lyon",
    "rénovation Lyon",
    "artisan Lyon 7",
  ],
  authors: [{ name: "Thomas Renard" }],
  openGraph: {
    title: "Maçon Carreleur Électricien à Lyon — Renard Rénovation",
    description:
      "Thomas Renard, artisan maçon, carreleur et électricien à Lyon depuis 2009. Devis gratuit sous 48h.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "fr_FR",
    type: "website",
    siteName: "Renard Rénovation",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${sora.variable}`}>
      <body className="bg-[#090909] text-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema()),
          }}
        />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
