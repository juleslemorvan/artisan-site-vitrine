import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowLeft, ArrowRight } from "lucide-react";
import { Footer } from "@/components/sections/Footer";
import { ContactForm } from "@/components/sections/ContactForm";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Maçon à Lyon — Renard Rénovation",
  description:
    "Maçonnerie à Lyon : enduit intérieur et extérieur, ravalement de façade, pose de briques. Thomas Renard, maçon Qualibat depuis 2009. Devis gratuit (Rhône).",
  path: "/maconnerie",
});

const prestations = [
  "Enduit intérieur décoratif (béton ciré, tadelakt, enduit chaux)",
  "Enduit de façade et ravalement extérieur",
  "Pose de briques, parpaings et blocs béton",
  "Rénovation et réparation de murs fissurés",
  "Création d'ouvertures (portes, fenêtres)",
  "Reprise en sous-œuvre et fondations",
  "Isolation thermique par l'extérieur (ITE)",
  "Maçonnerie paysagère (murets, escaliers, allées)",
];

const photos = [
  {
    src: "/images/macon-application-enduit-exterieur-mur.webp",
    alt: "Application d'enduit extérieur sur mur de façade — Lyon",
  },
  {
    src: "/images/macon-enduit-decoratif-interieur.webp",
    alt: "Enduit décoratif intérieur finition lisse — rénovation Lyon",
  },
  {
    src: "/images/macon-renovation-chantier-carrelage.webp",
    alt: "Chantier de rénovation maçonnerie à Lyon",
  },
];

export default function MaconneriePage() {
  return (
    <>
      {/* Hero section */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <Image
          src="/images/macon-application-enduit-exterieur-mur.webp"
          alt="Maçon à Lyon appliquant un enduit de façade"
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
            Maçonnerie
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            Maçon à Lyon
          </h1>
          <p className="mt-4 text-gray-300 text-lg max-w-xl">
            Du gros œuvre à la finition décorative, Thomas Renard intervient
            sur tous types de chantiers dans le Rhône depuis 2009.
          </p>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-20 md:py-28 bg-[#090909]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Prestations */}
            <div>
              <h2
                className="text-2xl font-bold text-white mb-8"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                Nos prestations maçonnerie
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
                <p className="text-accent font-semibold text-sm mb-2">Certification Qualibat 2111</p>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Thomas Renard est certifié Qualibat pour les travaux de
                  maçonnerie générale. Cette certification est reconnue par les
                  assureurs et maîtres d&apos;ouvrage — gage de qualité et de
                  sérieux sur vos chantiers.
                </p>
              </div>
            </div>

            {/* Photos */}
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

          {/* Autres services */}
          <div className="mt-20 pt-12 border-t border-[#1E1E1E]">
            <h2
              className="text-xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              Découvrez aussi nos autres services
            </h2>
            <div className="flex flex-wrap gap-4">
              {[
                { label: "Carrelage", href: "/carrelage" },
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
