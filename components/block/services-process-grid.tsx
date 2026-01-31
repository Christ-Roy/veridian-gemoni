"use client";

import { ProcessStep } from "@/components/block/process-step";
import { FileText, Palette, Code, Rocket } from "lucide-react";

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

export function ServicesProcessGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {processSteps.map((step) => (
        <ProcessStep key={step.step} {...step} />
      ))}
    </div>
  );
}
