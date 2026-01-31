import { Metadata } from "next";
import { PricingCard } from "@/components/block/pricing-card";
import { CTASection } from "@/components/block/cta-section";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Tarifs - Création de Sites Web Transparents",
  description: "Découvrez nos tarifs transparents pour la création de sites web. Pas de frais cachés, devis gratuit sous 24h.",
};

const packages = [
  {
    name: "Pack Présence",
    description: "Pour lancer votre présence en ligne rapidement et efficacement",
    price: "À partir de 800€",
    period: "",
    features: [
      { name: "Site One-Page responsive", included: true },
      { name: "Design moderne et sur-mesure", included: true },
      { name: "Nom de domaine .fr ou .com (1 an)", included: true },
      { name: "Hébergement performant (1 an)", included: true },
      { name: "Certificat SSL (HTTPS)", included: true },
      { name: "Optimisation SEO de base", included: true },
      { name: "Formulaire de contact", included: true },
      { name: "Google Analytics intégré", included: true },
      { name: "Formation prise en main (1h)", included: true },
      { name: "Support 30 jours", included: true },
      { name: "1 révision incluse", included: true },
      { name: "Blog / système de contenu", included: false },
      { name: "E-commerce", included: false },
    ],
    cta: "Choisir ce pack",
    ctaLink: "/contact",
  },
  {
    name: "Pack Croissance",
    description: "Pour développer votre activité avec du contenu régulier",
    price: "À partir de 2 000€",
    period: "",
    features: [
      { name: "Site multi-pages professionnel", included: true },
      { name: "Design personnalisé premium", included: true },
      { name: "Nom de domaine + hébergement (1 an)", included: true },
      { name: "Blog intégré avec CMS facile", included: true },
      { name: "Optimisation SEO avancée", included: true },
      { name: "Intégration newsletter", included: true },
      { name: "Google Analytics + Search Console", included: true },
      { name: "Formulaire de contact avancé", included: true },
      { name: "Formation complète (2h)", included: true },
      { name: "Support 30 jours", included: true },
      { name: "2 révisions incluses", included: true },
      { name: "Réseaux sociaux intégrés", included: true },
      { name: "E-commerce", included: false },
    ],
    cta: "Choisir ce pack",
    ctaLink: "/contact",
    highlighted: true,
    badge: "Le plus populaire",
  },
  {
    name: "Pack E-commerce",
    description: "Solution complète pour vendre en ligne efficacement",
    price: "À partir de 3 500€",
    period: "",
    features: [
      { name: "Boutique e-commerce complète", included: true },
      { name: "Design sur-mesure et optimisé conversion", included: true },
      { name: "Nom de domaine + hébergement (1 an)", included: true },
      { name: "Catalogue produits illimité", included: true },
      { name: "Paiement sécurisé (Stripe, PayPal)", included: true },
      { name: "Gestion stocks et commandes", included: true },
      { name: "Codes promo et réductions", included: true },
      { name: "SEO e-commerce avancé", included: true },
      { name: "Email automation (abandon panier)", included: true },
      { name: "Formation vendeur (3h)", included: true },
      { name: "Support 30 jours", included: true },
      { name: "3 révisions incluses", included: true },
      { name: "Statistiques ventes détaillées", included: true },
    ],
    cta: "Choisir ce pack",
    ctaLink: "/contact",
  },
];

const additionalServices = [
  "Maintenance mensuelle : 50€/mois",
  "Ajout de fonctionnalités : 75€/heure",
  "Rédaction de contenu SEO : sur devis",
  "Campagne Google Ads : sur devis",
  "Formation supplémentaire : 75€/heure",
];

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 lg:py-32">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Des tarifs <span className="text-primary">transparents</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Pas de frais cachés. Pas de mauvaises surprises. 
            Juste des prix clairs pour un travail de qualité.
          </p>
          <div className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm">
            ✅ Devis gratuit sous 24h • Paiement en 3 fois possible
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg) => (
              <PricingCard key={pkg.name} {...pkg} />
            ))}
          </div>

          <div className="mt-16 rounded-2xl border bg-muted/30 p-8">
            <h3 className="mb-4 text-xl font-bold text-center">
              Tous nos packages incluent :
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
              {[
                "Code source à vous",
                "Responsive mobile",
                "Sauvegardes auto",
                "Certificat SSL",
                "Support 30j inclus",
                "Formation incluse",
                "SEO optimisé",
                "Google Analytics",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-muted/30 px-4 py-20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold text-center">
            Services complémentaires
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {additionalServices.map((service) => (
              <div
                key={service}
                className="flex items-start gap-3 rounded-lg border bg-background p-4"
              >
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-12 text-3xl font-bold text-center">
            Comparez nos packages
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="p-4 text-left font-semibold">Fonctionnalité</th>
                  <th className="p-4 text-center font-semibold">Présence</th>
                  <th className="p-4 text-center font-semibold bg-primary/5">Croissance</th>
                  <th className="p-4 text-center font-semibold">E-commerce</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 text-muted-foreground">Nombre de pages</td>
                  <td className="p-4 text-center">1</td>
                  <td className="p-4 text-center bg-primary/5">5-10</td>
                  <td className="p-4 text-center">Illimité</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 text-muted-foreground">Blog intégré</td>
                  <td className="p-4 text-center">—</td>
                  <td className="p-4 text-center bg-primary/5">✓</td>
                  <td className="p-4 text-center">✓</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 text-muted-foreground">E-commerce</td>
                  <td className="p-4 text-center">—</td>
                  <td className="p-4 text-center bg-primary/5">—</td>
                  <td className="p-4 text-center">✓</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 text-muted-foreground">Délai moyen</td>
                  <td className="p-4 text-center">1-2 sem</td>
                  <td className="p-4 text-center bg-primary/5">2-4 sem</td>
                  <td className="p-4 text-center">4-8 sem</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 text-muted-foreground">Révisions</td>
                  <td className="p-4 text-center">1</td>
                  <td className="p-4 text-center bg-primary/5">2</td>
                  <td className="p-4 text-center">3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Pricing */}
      <section className="bg-muted/30 px-4 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold text-center">
            Questions fréquentes sur les tarifs
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Puis-je payer en plusieurs fois ?",
                a: "Oui ! Nous proposons généralement un paiement en 3 fois : 30% au lancement, 40% à la validation de la maquette, 30% à la mise en ligne.",
              },
              {
                q: "Y a-t-il des frais de maintenance obligatoires ?",
                a: "Non. L'hébergement et le domaine sont inclus la première année. Après, vous êtes libre de gérer vous-même ou souscrire à notre maintenance (50€/mois).",
              },
              {
                q: "Le prix peut-il augmenter en cours de projet ?",
                a: "Non, sauf si vous demandez des ajouts majeurs non prévus au devis initial. Nous vous prévenons toujours avant.",
              },
            ].map((faq, i) => (
              <div key={i} className="rounded-lg border bg-background p-6">
                <h3 className="mb-2 font-semibold">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Quel package vous convient ?"
        description="Pas sûr ? Discutons de votre projet et nous vous conseillerons la meilleure option."
        primaryCta={{ text: "Demander un devis gratuit", href: "/contact" }}
        secondaryCta={{ text: "Voir nos réalisations", href: "/portfolio" }}
      />
    </div>
  );
}
