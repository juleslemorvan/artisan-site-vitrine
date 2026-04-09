"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";

const badges = [
  "Qualibat certifié",
  "Devis gratuit 48h",
  "17 ans d'expérience",
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Image de fond */}
      <Image
        src="/images/macon-application-enduit-exterieur-mur.webp"
        alt="Thomas Renard, maçon à Lyon, applique un enduit extérieur"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />

      {/* Overlay gradient sombre */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#090909]/95 via-[#090909]/75 to-[#090909]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-transparent" />
      {/* Gradient haut pour lisibilité du header */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#090909]/80 to-transparent" />

      {/* Contenu */}
      <div className="relative z-10 container mx-auto px-4 max-w-6xl pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          {/* Label */}
          <span className="inline-block text-accent text-xs font-bold tracking-[0.25em] uppercase mb-5 border border-accent/30 px-3 py-1.5 rounded-sm">
            Artisan du bâtiment — Lyon Rhône
          </span>

          {/* H1 */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            Maçonnerie, <span className="text-accent">carrelage</span> &amp;
            électricité
            <br />à Lyon
          </h1>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
            Thomas Renard, artisan indépendant depuis 2009. Travaux soignés,
            délais respectés, devis transparent — dans tout le Rhône.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 mb-10">
            {badges.map((badge) => (
              <span
                key={badge}
                className="flex items-center gap-1.5 text-sm text-gray-300"
              >
                <CheckCircle size={15} className="text-accent shrink-0" />
                {badge}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center border border-white/30 gap-2 bg-accent text-white px-7 py-4 rounded-sm font-bold text-sm tracking-wide hover:bg-accent-hover hover:scale-105 hover:shadow-[0_0_25px_rgba(255,165,0,0.35)] transition-all duration-200 active:scale-95"
            >
              Demander un devis gratuit
              <ArrowRight size={16} />
            </a>
            <a
              href="tel:0647238591"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-7 py-4 rounded-sm font-semibold text-sm hover:border-accent hover:text-accent transition-all duration-200"
            >
              <Phone size={15} />
              06 47 23 85 91
            </a>
          </div>
        </motion.div>
      </div>

      {/* Décoratif bas de page */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#090909] to-transparent" />
    </section>
  );
}
