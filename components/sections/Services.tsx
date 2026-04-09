"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Layers, Zap, ArrowRight } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionTitle } from "@/components/ui/SectionTitle";

const services = [
  {
    icon: <Layers size={28} />,
    title: "Maçonnerie",
    href: "/maconnerie",
    description:
      "Construction, rénovation, enduit décoratif, ravalement de façade. Du gros œuvre à la finition, avec un soin du détail irréprochable.",
    items: [
      "Enduit intérieur & extérieur",
      "Ravalement de façade",
      "Pose de briques & parpaings",
      "Rénovation complète de murs",
    ],
    color: "from-orange-500/10 to-transparent",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={28}
        height={28}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: "Carrelage",
    href: "/carrelage",
    description:
      "Pose de carrelage sol et mur en intérieur et extérieur. Grandes dalles, mosaïques, joints soignés — pour un rendu impeccable et durable.",
    items: [
      "Carrelage sol & mur",
      "Faïence salle de bain",
      "Terrasse & extérieur",
      "Ragréage & préparation sols",
    ],
    color: "from-stone-500/10 to-transparent",
  },
  {
    icon: <Zap size={28} />,
    title: "Électricité",
    href: "/electricite",
    description:
      "Mise aux normes, rénovation complète d'installation, tableau électrique, éclairage. Travail propre, certifié, conforme à la NF C 15-100.",
    items: [
      "Mise aux normes NF C 15-100",
      "Tableau électrique",
      "Éclairage intérieur LED",
      "Installation prises & interrupteurs",
    ],
    color: "from-yellow-500/10 to-transparent",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Services() {
  return (
    <SectionWrapper id="services" className="bg-[#090909]">
      <SectionTitle
        label="Nos prestations"
        title="Trois métiers, une seule adresse"
        subtitle="Maçonnerie, carrelage et électricité sous un même toit pour simplifier votre projet de rénovation."
      />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {services.map((service) => (
          <motion.div key={service.title} variants={cardVariants}>
            <Link
              href={service.href}
              className="group relative block h-full bg-[#131313] border border-[#2A2A2A] rounded-sm p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,165,0,0.08)]"
            >
              {/* Gradient de fond subtil */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm`}
              />

              <div className="relative">
                <div className="text-accent mb-5">{service.icon}</div>
                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-gray-400"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <span className="inline-flex items-center gap-2 text-accent text-sm font-semibold group-hover:gap-3 transition-all duration-200">
                  En savoir plus <ArrowRight size={15} />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
