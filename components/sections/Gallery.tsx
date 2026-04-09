"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionTitle } from "@/components/ui/SectionTitle";

type Category = "Tout" | "Maçonnerie" | "Carrelage" | "Électricité";

interface GalleryItem {
  src: string;
  alt: string;
  category: Category;
}

const items: GalleryItem[] = [
  {
    src: "/images/macon-application-enduit-exterieur-mur.webp",
    alt: "Application d'enduit extérieur sur mur de façade à Lyon",
    category: "Maçonnerie",
  },
  {
    src: "/images/macon-enduit-decoratif-interieur.webp",
    alt: "Enduit décoratif intérieur, finition lisse — rénovation appartement Lyon",
    category: "Maçonnerie",
  },
  {
    src: "/images/macon-renovation-chantier-carrelage.webp",
    alt: "Chantier de rénovation complète : maçonnerie et carrelage",
    category: "Maçonnerie",
  },
  {
    src: "/images/carreleur-pose-carrelage-sol-interieur.webp",
    alt: "Pose de carrelage grand format sol intérieur — Lyon 7e",
    category: "Carrelage",
  },
  {
    src: "/images/carreleur-pose-carrelage-maison-neuf.webp",
    alt: "Carrelage sol maison neuve, joints parfaits — Villeurbanne",
    category: "Carrelage",
  },
  {
    src: "/images/carreleur-nettoyage-joints-carrelage.webp",
    alt: "Finition et nettoyage joints carrelage après pose",
    category: "Carrelage",
  },
  {
    src: "/images/electricien-installation-tableau-electrique-maison.webp",
    alt: "Installation tableau électrique neuf aux normes NF C 15-100 — Lyon",
    category: "Électricité",
  },
  {
    src: "/images/electricien-renovation-electrique-habitation.webp",
    alt: "Rénovation complète installation électrique habitation Lyon",
    category: "Électricité",
  },
  {
    src: "/images/electricien-chantier-installation-electrique.webp",
    alt: "Chantier installation électrique — câblage et raccordements",
    category: "Électricité",
  },
];

const categories: Category[] = ["Tout", "Maçonnerie", "Carrelage", "Électricité"];

export function Gallery() {
  const [active, setActive] = useState<Category>("Tout");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    active === "Tout" ? items : items.filter((i) => i.category === active);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  const next = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, prev, next]);

  // Lock scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  return (
    <SectionWrapper id="realisations" className="bg-[#090909]">
      <SectionTitle
        label="Galerie"
        title="Nos réalisations"
        subtitle="Chaque chantier est une fierté. Parcourez quelques exemples de travaux réalisés dans la région lyonnaise."
        centered
      />

      {/* Filtres */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-sm text-sm font-medium transition-all duration-200 ${
              active === cat
                ? "bg-accent text-black"
                : "border border-[#2A2A2A] text-gray-400 hover:border-accent/50 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grille */}
      <motion.div
        layout
        className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((item, index) => (
            <motion.button
              key={item.src}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={() => openLightbox(index)}
              className="group relative aspect-square overflow-hidden rounded-sm bg-[#131313] cursor-pointer"
              aria-label={`Voir la photo : ${item.alt}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                <ZoomIn size={24} className="text-white" />
                <span className="text-accent text-xs font-semibold tracking-wider uppercase">
                  {item.category}
                </span>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl max-h-[85vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={filtered[lightboxIndex].src}
                  alt={filtered[lightboxIndex].alt}
                  fill
                  sizes="90vw"
                  className="object-contain"
                  priority
                />
              </div>
              <p className="mt-3 text-center text-sm text-gray-400">
                {filtered[lightboxIndex].alt}
              </p>
              <p className="text-center text-xs text-gray-600 mt-1">
                {lightboxIndex + 1} / {filtered.length}
              </p>
            </motion.div>

            {/* Bouton fermer */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Fermer"
            >
              <X size={28} />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-[#131313]/80 border border-[#2A2A2A] rounded-sm text-white hover:border-accent hover:text-accent transition-all duration-200"
              aria-label="Photo précédente"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-[#131313]/80 border border-[#2A2A2A] rounded-sm text-white hover:border-accent hover:text-accent transition-all duration-200"
              aria-label="Photo suivante"
            >
              <ChevronRight size={22} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
