"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionTitle } from "@/components/ui/SectionTitle";

type Status = "idle" | "loading" | "success" | "error";

const services = [
  "Maçonnerie",
  "Carrelage",
  "Électricité",
  "Plusieurs prestations",
  "Autre",
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-[#1C1C1C] border border-[#2A2A2A] rounded-sm px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-accent transition-colors duration-200";

  return (
    <SectionWrapper id="contact" className="bg-[#0D0D0D]">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Colonne gauche — infos */}
        <div className="lg:col-span-2">
          <SectionTitle
            label="Contact"
            title="Parlons de votre projet"
            subtitle="Devis gratuit sous 48h. Réponse garantie."
          />

          <div className="space-y-6">
            <a
              href="tel:0647238591"
              className="flex items-start gap-4 group"
            >
              <div className="mt-0.5 p-2.5 bg-accent/10 border border-accent/20 rounded-sm text-accent group-hover:bg-accent group-hover:text-black transition-all duration-200">
                <Phone size={16} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">Téléphone</p>
                <p className="text-white font-semibold">06 47 23 85 91</p>
              </div>
            </a>

            <a
              href="mailto:contact@renard-renovation.fr"
              className="flex items-start gap-4 group"
            >
              <div className="mt-0.5 p-2.5 bg-accent/10 border border-accent/20 rounded-sm text-accent group-hover:bg-accent group-hover:text-black transition-all duration-200">
                <Mail size={16} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">Email</p>
                <p className="text-white font-semibold">contact@renard-renovation.fr</p>
              </div>
            </a>

            <div className="flex items-start gap-4">
              <div className="mt-0.5 p-2.5 bg-accent/10 border border-accent/20 rounded-sm text-accent">
                <Clock size={16} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">Horaires</p>
                <p className="text-white font-semibold">Lun–Ven 8h–18h</p>
                <p className="text-gray-500 text-sm">Sam 9h–12h</p>
              </div>
            </div>
          </div>

          {/* Adresse */}
          <div className="mt-10 p-5 bg-[#131313] border border-[#2A2A2A] rounded-sm">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Adresse</p>
            <p className="text-white text-sm">18 rue Garibaldi</p>
            <p className="text-white text-sm">69007 Lyon</p>
            <p className="text-gray-500 text-xs mt-1">SIRET : 842 156 973 00024</p>
          </div>
        </div>

        {/* Colonne droite — formulaire */}
        <div className="lg:col-span-3">
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center h-full min-h-[400px] text-center gap-4"
            >
              <CheckCircle2 size={48} className="text-accent" />
              <h3 className="text-white font-bold text-xl" style={{ fontFamily: "var(--font-sora)" }}>
                Message bien reçu !
              </h3>
              <p className="text-gray-400 max-w-sm">
                Thomas vous répondra sous 48h ouvrées. Pour une urgence, appelez directement le{" "}
                <a href="tel:0647238591" className="text-accent hover:underline">
                  06 47 23 85 91
                </a>.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Ligne nom + téléphone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-wider mb-1.5">
                    Nom *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jean Dupont"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-wider mb-1.5">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="06 XX XX XX XX"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs text-gray-500 uppercase tracking-wider mb-1.5">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jean@exemple.fr"
                  className={inputClass}
                />
              </div>

              {/* Service */}
              <div>
                <label className="block text-xs text-gray-500 uppercase tracking-wider mb-1.5">
                  Type de prestation
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className={`${inputClass} cursor-pointer`}
                >
                  <option value="" className="bg-[#1C1C1C]">Sélectionner...</option>
                  {services.map((s) => (
                    <option key={s} value={s} className="bg-[#1C1C1C]">
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs text-gray-500 uppercase tracking-wider mb-1.5">
                  Description du projet *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Décrivez brièvement votre projet : type de travaux, surface, délai souhaité..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Erreur */}
              {status === "error" && (
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle size={16} />
                  Une erreur est survenue. Réessayez ou appelez le 06 47 23 85 91.
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-2 bg-accent text-black px-6 py-4 rounded-sm font-bold text-sm hover:bg-accent-hover transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed hover:scale-[1.01] hover:shadow-[0_0_20px_rgba(255,165,0,0.25)] active:scale-[0.99]"
              >
                {status === "loading" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer ma demande de devis
                    <Send size={15} />
                  </>
                )}
              </button>

              <p className="text-xs text-gray-600 text-center">
                Vos données sont utilisées uniquement pour traiter votre demande.
              </p>
            </form>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
