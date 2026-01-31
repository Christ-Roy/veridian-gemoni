"use client";

import { FeatureCard } from "@/components/block/feature-card";
import { CheckCircle2, Video, Clock, TrendingUp, Shield, Search } from "lucide-react";

const benefits = [
  {
    icon: Video,
    title: "Vidéo personnalisée",
    description: "Une vidéo de 5-10 minutes avec commentaire écran de votre site actuel. Pas de PDF générique, un vrai audit à vous.",
  },
  {
    icon: CheckCircle2,
    title: "3 actions concrètes",
    description: "Pas de jargon technique. 3 actions prioritaires que vous pouvez mettre en place dès cette semaine pour améliorer votre site.",
  },
  {
    icon: Clock,
    title: "Réponse en 48h",
    description: "Vous recevez votre audit par email en moins de 48 heures ouvrées. Rapide et efficace.",
  },
  {
    icon: TrendingUp,
    title: "ROI mesurable",
    description: "Nos recommandations sont basées sur des données : vitesse, SEO, conversion. Vous verrez la différence.",
  },
  {
    icon: Shield,
    title: "100% gratuit",
    description: "Aucune carte de crédit requise. Pas d'engagement. Juste un moyen de vous prouver notre expertise.",
  },
  {
    icon: Search,
    title: "Audit approfondi",
    description: "Nous analysons : performance, SEO, expérience utilisateur, mobile, contenu, et opportunités de conversion.",
  },
];

export function BenefitsGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {benefits.map((benefit) => (
        <FeatureCard key={benefit.title} {...benefit} gradient />
      ))}
    </div>
  );
}
