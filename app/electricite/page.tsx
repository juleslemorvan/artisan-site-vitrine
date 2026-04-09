import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowLeft, ArrowRight } from "lucide-react";
import { Footer } from "@/components/sections/Footer";
import { ContactForm } from "@/components/sections/ContactForm";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Électricien à Lyon — Renard Rénovation",
  description:
    "Électricien à Lyon : mise aux normes NF C 15-100, tableau électrique, éclairage LED, rénovation complète. Thomas Renard, artisan certifié. Devis gratuit (Rhône).",
  path: "/electricite",
});

const prestations = [
  "Mise aux normes NF C 15-100 (diagnostic et travaux)",
  "Remplacement et installation de tableau électrique",
  "Rénovation complète d'installation électrique",
  "Création de circuits (prises, interrupteurs, éclairages)",
  "Éclairage intérieur LED (spots, rails, dimmers)",
  "Câblage RJ45 et multimédia",
  "Installation de bornes de recharge véhicule électrique (IRVE)",
  "Dépannage et remise en état",
];

const photos = [
  {
    src: "/images/electricien-installation-tableau-electrique-maison.webp",
    alt: "Installation tableau électrique neuf aux normes — Lyon",
  },
  {
    src: "/images/electricien-renovation-electrique-habitation.webp",
    alt: "Rénovation complète installation électrique habitation Lyon",
  },
  {
    src: "/images/electricien-chantier-installation-electrique.webp",
    alt: "Chantier installation électrique — câblage et raccordements",
  },
];

export default function ElectricitePage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <Image
          src="/images/electricien-chantier-installation-electrique.webp"
          alt="Électricien à Lyon réalisant une installation électrique"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/60 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 max-w-6xl pb-16 pt-32">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-accent text-sm mb-6 transition-colors"
          >
            <ArrowLeft size={15} /> Retour à l&apos;accueil
          </Link>
          <span className="block text-accent text-xs font-bold tracking-[0.2em] uppercase mb-3">
            Électricité
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            Électricien à Lyon
          </h1>
          <p className="mt-4 text-gray-300 text-lg max-w-xl">
            Mise aux normes, rénovation complète, tableau électrique et
            éclairage. Travail propre, certifié NF C 15-100, dans tout le Rhône.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#090909]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2
                className="text-2xl font-bold text-white mb-8"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                Nos prestations électricité
              </h2>
              <ul className="space-y-3">
                {prestations.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-gray-300 text-sm">
                    <CheckCircle size={16} className="text-accent mt-0.5 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-10 p-6 bg-[#131313] border border-[#2A2A2A] rounded-sm">
                <p className="text-accent font-semibold text-sm mb-2">
                  Conformité NF C 15-100
                </p>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Toutes les installations électriques réalisées par Thomas Renard
                  respectent la norme NF C 15-100 en vigueur. Un rapport de
                  conformité peut être fourni à l&apos;issue des travaux, utile pour
                  la vente de votre bien ou votre assurance habitation.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {photos.map((photo, i) => (
                <div
                  key={photo.src}
                  className={`relative overflow-hidden rounded-sm bg-[#131313] ${
                    i === 0 ? "sm:col-span-2 aspect-video" : "aspect-square"
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 pt-12 border-t border-[#1E1E1E]">
            <h2
              className="text-xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              Découvrez aussi nos autres services
            </h2>
            <div className="flex flex-wrap gap-4">
              {[
                { label: "Maçonnerie", href: "/maconnerie" },
                { label: "Carrelage", href: "/carrelage" },
              ].map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="inline-flex items-center gap-2 border border-[#2A2A2A] text-gray-400 px-5 py-3 rounded-sm text-sm hover:border-accent hover:text-accent transition-all duration-200"
                >
                  {s.label} <ArrowRight size={14} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </>
  );
}
