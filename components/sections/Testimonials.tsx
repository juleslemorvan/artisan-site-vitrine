"use client";

import { motion, type Variants } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionTitle } from "@/components/ui/SectionTitle";

const testimonials = [
  {
    name: "Marie-Claire Fontaine",
    role: "Propriétaire, Lyon 6e",
    text: "Thomas a refait entièrement notre salle de bain : maçonnerie, carrelage et électricité. Un travail remarquable, propre et dans les délais. Je recommande sans hésitation.",
    rating: 5,
    service: "Rénovation complète salle de bain",
  },
  {
    name: "Julien Marchand",
    role: "Gérant d'immeuble, Villeurbanne",
    text: "Sérieux, ponctuel et très professionnel. Le ravalement de façade de notre immeuble a été réalisé dans les règles de l'art. Tarif honnête, devis clair dès le départ.",
    rating: 5,
    service: "Ravalement de façade",
  },
  {
    name: "Sophie & Antoine Berger",
    role: "Couple de particuliers, Bron",
    text: "Mise aux normes électriques + carrelage cuisine — Thomas a tout géré. On apprécie sa communication, il répond toujours. Le résultat est exactement ce qu'on espérait.",
    rating: 5,
    service: "Électricité & carrelage cuisine",
  },
  {
    name: "Patrick Roussel",
    role: "Architecte d'intérieur, Lyon 3e",
    text: "Je fais appel à Thomas depuis 3 ans pour mes chantiers clients. C'est le profil rare : multi-compétences, rigoureux et honnête. Un vrai partenaire de confiance.",
    rating: 5,
    service: "Partenaire chantiers multiples",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Testimonials() {
  return (
    <SectionWrapper id="temoignages" className="bg-[#0D0D0D]">
      <SectionTitle
        label="Avis clients"
        title="Ce que disent nos clients"
        subtitle="La satisfaction de nos clients est notre meilleure carte de visite."
        centered
      />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {testimonials.map((t) => (
          <motion.div
            key={t.name}
            variants={fadeUp}
            className="bg-[#131313] border border-[#2A2A2A] rounded-sm p-7 hover:border-[#3A3A3A] transition-colors duration-300"
          >
            {/* Quote icon */}
            <Quote size={24} className="text-accent/40 mb-4" />

            {/* Texte */}
            <p className="text-gray-300 text-sm leading-relaxed mb-5 italic">
              &ldquo;{t.text}&rdquo;
            </p>

            {/* Service tag */}
            <span className="inline-block text-xs text-accent/80 border border-accent/20 px-2 py-1 rounded-sm mb-4">
              {t.service}
            </span>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-gray-500 text-xs mt-0.5">{t.role}</p>
              </div>
              {/* Étoiles */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={13} className="text-accent fill-accent" />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Score global */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-10 text-center"
      >
        <div className="inline-flex flex-col items-center gap-2 bg-[#131313] border border-[#2A2A2A] rounded-sm px-8 py-5">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={18} className="text-accent fill-accent" />
            ))}
          </div>
          <p className="text-white font-bold text-xl">5 / 5</p>
          <p className="text-gray-500 text-xs">Basé sur 47 avis vérifiés</p>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
