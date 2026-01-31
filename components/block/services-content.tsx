"use client";

import { PricingCard } from "@/components/block/pricing-card";
import { ProcessStep } from "@/components/block/process-step";
import { FileText, Palette, Code, Rocket } from "lucide-react";

const packages = [
  {
    name: "Pack Présence",
    description: "Idéal pour lancer votre présence en ligne rapidement",
    price: "800-1 500€",
    features: [
      { name: "Site One-Page moderne et responsive", included: true },
      { name: "Nom de domaine inclus (1 an)", included: true },
      { name: "Hébergement performant", included: true },
      { name: "Optimisation SEO de base", included: true },
      { name: "Formulaire de contact", included: true },
      { name: "Formation à la prise en main", included: true },
      { name: "Blog intégré", included: false },
      { name: "E-commerce", included: false },
    ],
    cta: "Choisir ce pack",
    ctaLink: "/contact",
  },
  {
    name: "Pack Croissance",
    description: "Pour développer votre activité avec du contenu régulier",
    price: "2 000-3 500€",
    features: [
      { name: "Site multi-pages professionnel", included: true },
      { name: "Nom de domaine + hébergement (1 an)", included: true },
      { name: "Blog intégré avec CMS", included: true },
      { name: "Optimisation SEO avancée", included: true },
      { name: "Intégrations (newsletter, analytics)", included: true },
      { name: "Formation complète", included: true },
      { name: "2 révisions incluses", included: true },
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
    price: "3 500-6 000€",
    features: [
      { name: "Site e-commerce sur mesure", included: true },
      { name: "Nom de domaine + hébergement (1 an)", included: true },
      { name: "Catalogue produits illimité", included: true },
      { name: "Paiement sécurisé (Stripe, PayPal)", included: true },
      { name: "Gestion des stocks", included: true },
      { name: "SEO + Marketing automation", included: true },
      { name: "Formation vendeur complète", included: true },
      { name: "3 révisions incluses", included: true },
    ],
    cta: "Choisir ce pack",
    ctaLink: "/contact",
  },
];

const processSteps = [
  {
    step: 1,
    icon: FileText,
    title: "Brief initial",
    description: "On discute de votre projet, vos objectifs et vos besoins. À la fin, on vous envoie un devis détaillé.",
  },
  {
    step: 2,
    icon: Palette,
    title: "Design et Maquette",
    description: "On crée la maquette visuelle de votre site. Vous donnez votre feedback et on ajuste jusqu'à ce que ce soit parfait.",
  },
  {
    step: 3,
    icon: Code,
    title: "Développement",
    description: "On code votre site avec les meilleures pratiques. Optimisé pour la performance, le SEO et les conversions.",
  },
  {
    step: 4,
    icon: Rocket,
    title: "Mise en ligne",
    description: "On lance votre site, on vérifie que tout fonctionne et on vous forme à la gestion. Vous êtes prêt ! 🚀",
  },
];

export function ServicesContent() {
  return (
    <>
      {/* Pricing Section */}
      <div className="grid gap-8 lg:grid-cols-3">
        {packages.map((pkg) => (
          <PricingCard key={pkg.name} {...pkg} />
        ))}
      </div>

      {/* Process Section */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step) => (
          <ProcessStep key={step.step} {...step} />
        ))}
      </div>
    </>
  );
}
