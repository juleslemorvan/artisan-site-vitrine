import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Mentions légales — Renard Rénovation",
  description: "Mentions légales du site Renard Rénovation, artisan maçon carreleur électricien à Lyon.",
  robots: { index: false, follow: false },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <main className="bg-[#090909] min-h-screen pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-accent text-sm mb-10 transition-colors"
          >
            <ArrowLeft size={15} /> Retour à l&apos;accueil
          </Link>

          <h1
            className="text-3xl md:text-4xl font-bold text-white mb-12"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            Mentions légales
          </h1>

          <div className="space-y-10 text-gray-400 text-sm leading-relaxed">
            <section>
              <h2 className="text-white font-semibold text-base mb-3">Éditeur du site</h2>
              <p>
                <strong className="text-gray-300">Renard Rénovation</strong> — Entreprise individuelle
                <br />Nom du responsable : Thomas Renard
                <br />Adresse : 18 rue Garibaldi, 69007 Lyon
                <br />Téléphone : 06 47 23 85 91
                <br />Email : contact@renard-renovation.fr
                <br />SIRET : 842 156 973 00024
              </p>
            </section>

            <section>
              <h2 className="text-white font-semibold text-base mb-3">Hébergement</h2>
              <p>
                Ce site est hébergé par Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis.
              </p>
            </section>

            <section>
              <h2 className="text-white font-semibold text-base mb-3">Propriété intellectuelle</h2>
              <p>
                L&apos;ensemble des contenus présents sur ce site (textes, images, logos) sont la propriété
                exclusive de Renard Rénovation. Toute reproduction, même partielle, est interdite sans
                autorisation préalable écrite.
              </p>
            </section>

            <section>
              <h2 className="text-white font-semibold text-base mb-3">Responsabilité</h2>
              <p>
                Renard Rénovation s&apos;efforce d&apos;assurer l&apos;exactitude des informations publiées
                sur ce site. Toutefois, nous ne pouvons garantir l&apos;exhaustivité de ces informations et
                déclinons toute responsabilité pour tout dommage résultant de l&apos;utilisation de ce site.
              </p>
            </section>

            <section>
              <h2 className="text-white font-semibold text-base mb-3">Données personnelles</h2>
              <p>
                Les informations collectées via le formulaire de contact sont uniquement utilisées pour
                répondre à votre demande. Elles ne sont ni vendues ni transmises à des tiers.
                Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de
                suppression de vos données. Pour exercer ce droit, contactez-nous à l&apos;adresse email
                indiquée ci-dessus.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
