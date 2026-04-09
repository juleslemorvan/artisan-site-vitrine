"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionTitle } from "@/components/ui/SectionTitle";

const faqs = [
  {
    question: "Dans quelle zone géographique intervenez-vous ?",
    answer:
      "Nous intervenons principalement sur Lyon et sa première couronne : Villeurbanne, Bron, Vénissieux, Caluire-et-Cuire et les communes limitrophes. N'hésitez pas à nous contacter si vous avez un doute sur votre secteur.",
  },
  {
    question: "Proposez-vous des devis gratuits ?",
    answer:
      "Oui, le devis est toujours gratuit et sans engagement. Nous nous déplaçons sur place pour évaluer le chantier et vous remettons un devis détaillé sous 48h ouvrées.",
  },
  {
    question: "Êtes-vous assurés en responsabilité décennale ?",
    answer:
      "Absolument. Renard Rénovation est couvert par une assurance responsabilité civile professionnelle et une garantie décennale sur tous les travaux réalisés. Nous pouvons fournir les attestations sur demande.",
  },
  {
    question: "Pouvez-vous intervenir sur plusieurs corps de métier en même temps ?",
    answer:
      "C'est justement l'avantage de Renard Rénovation. Être maçon, carreleur et électricien permet de coordonner les travaux sans intermédiaire, d'éviter les délais entre entreprises et de garantir une cohérence sur l'ensemble du chantier.",
  },
  {
    question: "Quels sont vos délais d'intervention ?",
    answer:
      "Pour les travaux courants, comptez généralement 2 à 4 semaines entre le devis et le début du chantier selon notre planning. Pour les urgences (ex : panne électrique), nous faisons notre possible pour intervenir rapidement.",
  },
  {
    question: "Acceptez-vous les aides à la rénovation (MaPrimeRénov', etc.) ?",
    answer:
      "Oui, notre certification Qualibat nous permet d'intervenir dans le cadre de certaines aides. Nous pouvons vous orienter selon la nature de vos travaux. Renseignez-vous auprès de l'ANAH pour connaître les dispositifs auxquels vous êtes éligibles.",
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-[#2A2A2A] last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        aria-expanded={isOpen}
      >
        <span
          className={`font-medium text-sm md:text-base transition-colors duration-200 ${
            isOpen ? "text-accent" : "text-white group-hover:text-gray-200"
          }`}
        >
          {question}
        </span>
        <span
          className={`shrink-0 p-1 rounded-sm border transition-all duration-200 ${
            isOpen
              ? "border-accent text-accent"
              : "border-[#3A3A3A] text-gray-400"
          }`}
        >
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-gray-400 text-sm leading-relaxed pb-5">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionWrapper id="faq" className="bg-[#090909]">
      <div className="max-w-3xl mx-auto">
        <SectionTitle
          label="FAQ"
          title="Questions fréquentes"
          subtitle="Tout ce que vous souhaitez savoir avant de nous contacter."
          centered
        />

        <div className="bg-[#131313] border border-[#2A2A2A] rounded-sm px-6 md:px-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
