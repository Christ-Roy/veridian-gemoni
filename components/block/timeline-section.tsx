"use client";

import { Timeline } from "@/components/block/timeline";
import { Compare } from "@/components/ui/compare";

const timelineData = [
  {
    title: "Audit",
    content: (
      <div>
        <p className="text-foreground text-xs md:text-sm font-normal mb-8">
          Afin de vous proposer les services les plus adapté, nous réalisons un audit complet de votre présence en ligne actuelle, ce qui nous permet de définir dans quel mesure vous béneficiriez de nos service.
          Notre rôle a ce moment là est de vous conseiller, de mettre en évidence des axes d'amélioration et de démystifier les services web que nous proposons et plus largement ceux du marché.
        </p>
        <Compare
          firstImage="/google-measure-good-score.png"
          secondImage="/google-measure-bad-score.png"
          firstImageClassName="object-contain"
          secondImageClassname="object-contain"
          className="w-full h-[250px] md:h-[400px] border-2 border-border rounded-2xl"
          slideMode="hover"
        />
      </div>
    ),
  },
  {
    title: "Le Site Web",
    content: (
      <div>
        <p className="text-foreground text-xs md:text-sm font-normal mb-4">
          Bien souvent la porte d'entrée pour n'importe quel services que ce soit du Google ads, Facebook ads, suivi de conversion etc... Necessite un site web sur lequel s'appuyer
          afin d'avoir le meilleur retour sur inverstissement possible nous recommandons souvent de commencer par la modernisation de son site internet, si vous faite de la pub il nous paret essentiel que le trafic qui arrive
          sur votre site web doient arriver sur un site rassurant qui leur inspire confiance, des images et du text mis en valeurs une proposition de valeur claire.
        </p>
        <p className="text-foreground text-xs md:text-sm font-normal mb-8">
          Voici un exemple de nouveau paragraphe. Vous pouvez modifier ce texte selon vos besoins.
        </p>
        <Compare
          firstImage="/good-website.webm"
          secondImage="/bad-website.png"
          firstIsVideo={true}
          firstImageClassName="object-fill"
          secondImageClassname="object-fill"
          className="w-full h-[250px] md:h-[400px] border-2 border-border rounded-2xl"
          slideMode="hover"
        />
      </div>
    ),
  },
  {
    title: "Augmentation du trafic",
    content: (
      <div>
        <p className="text-foreground text-xs md:text-sm font-normal mb-8">
          Développement de solutions sur mesure avec nos outils de newsletter et de gestion client intégrés. Tout ce dont vous avez besoin, en un seul endroit.
        </p>
        <Compare
          firstImage="/google-search-console-good.png"
          secondImage="/google-search-console-bad.png"
          firstImageClassName="object-cover object-center"
          secondImageClassname="object-cover object-center"
          className="w-full h-[250px] md:h-[400px] border-2 border-border rounded-2xl"
          slideMode="hover"
        />
      </div>
    ),
  },
  {
    title: "Suivi de conversion",
    content: (
      <div>
        <p className="text-foreground text-xs md:text-sm font-normal mb-8">
          Une fois que le trafic commence a affluer, il est maintenant question de "nourrire" votre clientèle avec du contenu qui leur apporte de la valeur, c'est pourquoi
          nous avons des outils de newsletter automatisé, de gestion client (CRM) intégré a nos sites web afin d'avoir un suivi précis et un historique avec chacun de vos prospects, a cette étape le retour sur inverstissement est maximal.
        </p>
      </div>
    ),
  },
];

export function TimelineSection() {
  return <Timeline data={timelineData} />;
}
