"use client";

import { FeatureCard } from "@/components/block/feature-card";
import { Shield, Zap, HeartHandshake, TrendingUp, Clock, CheckCircle2 } from "lucide-react";

const maintenanceFeatures = [
  {
    icon: Shield,
    title: "Sécurité & Mises à jour",
    description: "Nous mettons à jour WordPress, plugins et thèmes pour protéger votre site des failles de sécurité.",
  },
  {
    icon: Zap,
    title: "Sauvegardes automatiques",
    description: "Sauvegarde hebdomadaire de votre site + base de données. En cas de problème, on restaure tout en quelques clics.",
  },
  {
    icon: HeartHandshake,
    title: "1h de modifications/mois",
    description: "Changement de textes, ajout d'images, modification du menu... 1h de modifications incluse chaque mois.",
  },
  {
    icon: Clock,
    title: "Support prioritaire",
    description: "Réponse en moins de 24h. Intervention rapide en cas de problème technique.",
  },
  {
    icon: TrendingUp,
    title: "Monitoring & Performance",
    description: "Surveillance du temps de chargement et de la disponibilité. On optimise si le site ralentit.",
  },
  {
    icon: CheckCircle2,
    title: "Rapports mensuels",
    description: "Rapport mensuel : ce qui a été fait, statistiques de trafic, recommandations d'amélioration.",
  },
];

export function MaintenanceFeaturesGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {maintenanceFeatures.map((feature) => (
        <FeatureCard key={feature.title} {...feature} gradient />
      ))}
    </div>
  );
}
