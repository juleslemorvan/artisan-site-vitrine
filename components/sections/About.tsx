"use client";

import { motion, type Variants } from "framer-motion";
import { ShieldCheck, MapPin, Clock, Award } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionTitle } from "@/components/ui/SectionTitle";

const stats = [
  { value: "17", unit: "ans", label: "d'expérience" },
  { value: "400+", unit: "", label: "chantiers réalisés" },
  { value: "5", unit: "villes", label: "d'intervention" },
  { value: "48h", unit: "", label: "délai de réponse" },
];

const atouts = [
  {
    icon: <ShieldCheck size={20} />,
    title: "Qualibat certifié",
    desc: "Certification Qualibat 2111 — gage de professionnalisme reconnu par les assurances et maîtres d'ouvrage.",
  },
  {
    icon: <MapPin size={20} />,
    title: "Lyon & alentours",
    desc: "Intervention dans tout le Rhône : Lyon, Villeurbanne, Bron, Vénissieux, Caluire-et-Cuire.",
  },
  {
    icon: <Clock size={20} />,
    title: "Délais respectés",
    desc: "Planification rigoureuse et communication transparente tout au long du chantier.",
  },
  {
    icon: <Award size={20} />,
    title: "Artisan de confiance",
    desc: "Label Artisan de confiance depuis 2016. Garantie décennale incluse sur tous les travaux.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export function About() {
  return (
    <SectionWrapper id="apropos" className="bg-[#0D0D0D]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Colonne gauche — texte */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionTitle
            label="À propos"
            title={`Thomas Renard,\nartisan depuis 2009`}
          />
          <p className="text-gray-400 leading-relaxed mb-6">
            Né à Lyon, formé sur les chantiers du Rhône, Thomas Renard a fondé
            Renard Rénovation avec une conviction simple : un bon artisan ne
            cache rien, ne bâcle rien, et respecte ce qui lui est confié.
          </p>
          <p className="text-gray-400 leading-relaxed mb-10">
            Maçon de formation, il a élargi son expertise au carrelage puis à
            l'électricité pour offrir à ses clients un interlocuteur unique sur
            leurs projets de rénovation, du sol au plafond.
          </p>

          {/* Chiffres clés */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-3xl font-bold text-accent"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  {stat.value}
                  <span className="text-lg">{stat.unit}</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-accent text-black px-6 py-3 rounded-sm font-bold text-sm hover:bg-accent-hover hover:scale-105 transition-all duration-200"
          >
            Discuter de votre projet
          </a>
        </motion.div>

        {/* Colonne droite — atouts */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {atouts.map((atout) => (
            <motion.div
              key={atout.title}
              variants={fadeUp}
              className="bg-[#131313] border border-[#2A2A2A] rounded-sm p-6 hover:border-accent/30 transition-colors duration-300"
            >
              <div className="text-accent mb-3">{atout.icon}</div>
              <h3 className="text-white font-semibold text-sm mb-2">
                {atout.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">{atout.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
