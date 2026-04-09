import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const services = [
  { label: "Maçonnerie", href: "/maconnerie" },
  { label: "Carrelage", href: "/carrelage" },
  { label: "Électricité", href: "/electricite" },
];

const legal = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-confidentialite" },
];

const zones = [
  "Lyon",
  "Villeurbanne",
  "Bron",
  "Vénissieux",
  "Caluire-et-Cuire",
];

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#1E1E1E]">
      <div className="container mx-auto px-4 max-w-6xl py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Colonne 1 — Identité */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5">
              <Image
                src="/images/logo.png"
                alt="Renard Rénovation"
                width={36}
                height={27}
                className="object-contain"
              />
              <span
                className="text-white font-bold text-sm"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                Renard Rénovation
              </span>
            </Link>
            <p className="text-gray-500 text-xs leading-relaxed mb-4">
              Artisan maçon, carreleur et électricien à Lyon depuis 2009.
              Certification Qualibat. Garantie décennale.
            </p>
            <p className="text-gray-600 text-xs">
              SIRET : 842 156 973 00024
            </p>
          </div>

          {/* Colonne 2 — Services */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-5">
              Nos services
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-gray-500 text-sm hover:text-accent transition-colors duration-150"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 — Zone d'intervention */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-5">
              Zone d&apos;intervention
            </h3>
            <ul className="space-y-2.5">
              {zones.map((z) => (
                <li key={z} className="text-gray-500 text-sm flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent/50 shrink-0" />
                  {z}
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4 — Contact NAP */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-5">
              Contact
            </h3>
            <address className="not-italic space-y-3">
              <a
                href="tel:0647238591"
                className="flex items-start gap-2.5 text-gray-500 text-sm hover:text-accent transition-colors duration-150 group"
              >
                <Phone size={14} className="mt-0.5 shrink-0 text-accent/60 group-hover:text-accent" />
                06 47 23 85 91
              </a>
              <a
                href="mailto:contact@renard-renovation.fr"
                className="flex items-start gap-2.5 text-gray-500 text-sm hover:text-accent transition-colors duration-150 group"
              >
                <Mail size={14} className="mt-0.5 shrink-0 text-accent/60 group-hover:text-accent" />
                contact@renard-renovation.fr
              </a>
              <div className="flex items-start gap-2.5 text-gray-500 text-sm">
                <MapPin size={14} className="mt-0.5 shrink-0 text-accent/60" />
                <span>
                  18 rue Garibaldi
                  <br />
                  69007 Lyon
                </span>
              </div>
            </address>
          </div>
        </div>

        {/* Bas de footer */}
        <div className="mt-12 pt-6 border-t border-[#1E1E1E] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Renard Rénovation — Thomas Renard. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            {legal.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-gray-600 text-xs hover:text-gray-400 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
