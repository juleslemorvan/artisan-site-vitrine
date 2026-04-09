import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowLeft, ArrowRight } from "lucide-react";
import { Footer } from "@/components/sections/Footer";
import { ContactForm } from "@/components/sections/ContactForm";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Carreleur à Lyon — Renard Rénovation",
  description:
    "Pose de carrelage à Lyon : sol, mur, faïence salle de bain, terrasse. Thomas Renard, carreleur professionnel depuis 2009. Devis gratuit (Rhône, 69).",
  path: "/carrelage",
});

const prestations = [
  "Carrelage sol intérieur (grès cérame, pierre naturelle, grand format)",
  "Faïence murale salle de bain et cuisine",
  "Ragréage et préparation des supports",
  "Pose de carrelage extérieur (terrasse, allée, piscine)",
  "Mosaïque et carrelage décoratif",
  "Joints époxy haute résistance",
  "Dépose et remplacement de carrelage existant",
  "Pose de parquet stratifié et vinyle (LVT)",
];

const photos = [
  {
    src: "/images/carreleur-pose-carrelage-sol-interieur.webp",
    alt: "Pose de carrelage grand format sol intérieur — Lyon 7e",
  },
  {
    src: "/images/carreleur-pose-carrelage-maison-neuf.webp",
    alt: "Carrelage sol maison neuve, joints parfaits — Villeurbanne",
  },
  {
    src: "/images/carreleur-nettoyage-joints-carrelage.webp",
    alt: "Finition joints carrelage — chantier Lyon",
  },
];

export default function CarrelagePage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <Image
          src="/images/carreleur-pose-carrelage-sol-interieur.webp"
          alt="Carreleur à Lyon posant du carrelage grand format"
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
            Carrelage
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            Carreleur à Lyon
          </h1>
          <p className="mt-4 text-gray-300 text-lg max-w-xl">
            Pose de carrelage sol et mur en intérieur comme en extérieur.
            Finitions soignées, joints impeccables, résultat durable.
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
                Nos prestations carrelage
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
                  Matériaux & grandes dalles
                </p>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Thomas maîtrise la pose de grands formats (60×60, 80×80,
                  120×60) qui demandent une préparation minutieuse du support.
                  Il travaille avec les principaux distributeurs de carrelage
                  lyonnais et peut vous conseiller dans le choix des matériaux.
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
                { label: "Électricité", href: "/electricite" },
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
