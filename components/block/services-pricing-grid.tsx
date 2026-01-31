"use client";

import { PricingCard } from "@/components/block/pricing-card";

const pricingCards = [
  {
    name: "Pack Présence",
    description: "Idéal pour lancer votre présence en ligne rapidement",
    price: "800-1 500€",
    ctaLink: "/contact",
    popular: false,
    features: [
      { name: "Site vitrine 1-5 pages", included: true },
      { name: "Design responsive (mobile + desktop)", included: true },
      { name: "Formulaire de contact fonctionnel", included: true },
      { name: "Optimisation SEO de base", included: true },
      { name: "Hébergement 1ère année incluse", included: true },
      { name: "Nom de domaine (.fr) inclus", included: true },
      { name: "Statistiques Google Analytics", included: true },
      { name: "1 révision incluse", included: true },
    ],
    cta: "Demander un devis",
  },
  {
    name: "Pack Croissance",
    description: "Pour développer votre activité avec du contenu régulier",
    price: "2 000-3 500€",
    ctaLink: "/contact",
    popular: true,
    badge: "Le plus populaire",
    features: [
      { name: "Tout du Pack Présence", included: true },
      { name: "Pages illimitées", included: true },
      { name: "Blog intégré (5 articles)", included: true },
      { name: "Capture de leads (newsletter, lead magnet)", included: true },
      { name: "Optimisation SEO avancée", included: true },
      { name: "Intégration réseaux sociaux", included: true },
      { name: "Performance + score Google 90+", included: true },
      { name: "2 révisions incluses", included: true },
      { name: "Formation à la gestion du site", included: true },
    ],
    cta: "En savoir plus",
  },
  {
    name: "Pack E-commerce",
    description: "Solution complète pour vendre en ligne efficacement",
    price: "3 500-6 000€",
    ctaLink: "/contact",
    popular: false,
    features: [
      { name: "Tout du Pack Croissance", included: true },
      { name: "Boutique en ligne complète", included: true },
      { name: "Jusqu'à 50 produits", included: true },
      { name: "Paiement sécurisé (Stripe/PayPal)", included: true },
      { name: "Gestion des stocks", included: true },
      { name: "Facturation automatique", included: true },
      { name: "Notifications de commande", included: true },
      { name: "Zone membre (optionnel)", included: true },
      { name: "3 révisions incluses", included: true },
    ],
    cta: "Demander un devis",
  },
];

export function ServicesPricingGrid() {
  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {pricingCards.map((card) => (
        <PricingCard key={card.name} {...card} />
      ))}
    </div>
  );
}
