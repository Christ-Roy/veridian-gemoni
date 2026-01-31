"use client";

import { FeatureCard } from "@/components/block/feature-card";
import { Heart, Zap, Shield, Target } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Passion du détail",
    description: "Chaque pixel compte. Nous créons des sites qui ne sont pas juste beaux, mais vraiment efficaces.",
  },
  {
    icon: Zap,
    title: "Réactivité maximale",
    description: "Réponse en moins de 24h. Livraison rapide. Pas de mois d'attente pour votre site.",
  },
  {
    icon: Shield,
    title: "Transparence totale",
    description: "Tarifs clairs, pas de frais cachés. Vous êtes propriétaire de votre site à 100%.",
  },
  {
    icon: Target,
    title: "Résultats business",
    description: "Un beau site c'est bien. Un site qui vous apporte des clients, c'est mieux.",
  },
];

export function ValuesSection() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {values.map((value) => (
        <FeatureCard key={value.title} {...value} gradient />
      ))}
    </div>
  );
}
