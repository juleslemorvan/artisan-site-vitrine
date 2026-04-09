import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Renard Rénovation",
  description: "Politique de confidentialité et traitement des données personnelles — Renard Rénovation Lyon.",
  robots: { index: false, follow: false },
};

export default function PolitiqueConfidentialitePage() {
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
            Politique de confidentialité
          </h1>

          <div className="space-y-10 text-gray-400 text-sm leading-relaxed">
            <section>
              <h2 className="text-white font-semibold text-base mb-3">Collecte des données</h2>
              <p>
                Renard Rénovation collecte uniquement les données strictement nécessaires au traitement de
                vos demandes : nom, email, téléphone (facultatif) et message via le formulaire de contact.
              </p>
            </section>

            <section>
              <h2 className="text-white font-semibold text-base mb-3">Utilisation des données</h2>
              <p>
                Les données collectées sont utilisées exclusivement pour répondre à votre demande de devis
                ou d&apos;information. Elles ne sont transmises à aucun tiers et ne font l&apos;objet
                d&apos;aucun traitement commercial.
              </p>
            </section>

            <section>
              <h2 className="text-white font-semibold text-base mb-3">Durée de conservation</h2>
              <p>
                Vos données sont conservées le temps nécessaire au traitement de votre demande, et au
                maximum 3 ans à compter de notre dernier échange.
              </p>
            </section>

            <section>
              <h2 className="text-white font-semibold text-base mb-3">Vos droits (RGPD)</h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des
                droits suivants sur vos données personnelles :
              </p>
              <ul className="mt-3 space-y-1 list-disc list-inside">
                <li>Droit d&apos;accès</li>
                <li>Droit de rectification</li>
                <li>Droit à l&apos;effacement (droit à l&apos;oubli)</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit d&apos;opposition</li>
              </ul>
              <p className="mt-3">
                Pour exercer ces droits, contactez-nous à :{" "}
                <a href="mailto:contact@renard-renovation.fr" className="text-accent hover:underline">
                  contact@renard-renovation.fr
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-white font-semibold text-base mb-3">Cookies</h2>
              <p>
                Ce site n&apos;utilise pas de cookies de tracking ou publicitaires. Les seuls cookies
                susceptibles d&apos;être déposés sont des cookies techniques nécessaires au bon
                fonctionnement du site.
              </p>
            </section>

            <section>
              <h2 className="text-white font-semibold text-base mb-3">Contact</h2>
              <p>
                Pour toute question relative à notre politique de confidentialité :{" "}
                <a href="mailto:contact@renard-renovation.fr" className="text-accent hover:underline">
                  contact@renard-renovation.fr
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
