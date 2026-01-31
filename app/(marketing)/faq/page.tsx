import { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CTASection } from "@/components/block/cta-section";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "FAQ - Questions Fréquentes sur nos Services Web",
  description: "Toutes les réponses à vos questions sur la création de sites web, les tarifs, les délais et notre processus de travail.",
};

const faqCategories = [
  {
    category: "Général",
    badge: "🌟",
    questions: [
      {
        question: "Qui êtes-vous et où êtes-vous basés ?",
        answer:
          "Nous sommes une agence web spécialisée dans la création de sites modernes et performants. Basés à Paris, nous travaillons avec des clients partout en France et à l'international. Notre équipe combine expertise technique et sens du design pour créer des sites qui convertissent.",
      },
      {
        question: "Quels types de sites créez-vous ?",
        answer:
          "Nous créons des sites vitrines, sites avec blog, boutiques e-commerce, landing pages et refaisons des sites existants. Nous adaptons chaque projet à vos besoins spécifiques, que vous soyez artisan, commerçant, consultant ou entrepreneur.",
      },
      {
        question: "Travaillez-vous avec des grandes entreprises ou seulement des PME ?",
        answer:
          "Nous travaillons principalement avec des PME, artisans, indépendants et startups. Notre force est l'attention personnalisée et la réactivité. Si vous cherchez une grosse agence avec 50 interlocuteurs, ce n'est pas nous. Si vous voulez une équipe dédiée qui connaît votre projet sur le bout des doigts, vous êtes au bon endroit !",
      },
    ],
  },
  {
    category: "Tarifs & Budget",
    badge: "💰",
    questions: [
      {
        question: "Combien coûte un site web ?",
        answer:
          "Nos tarifs varient selon la complexité : Pack Présence (800-1 500€), Pack Croissance (2 000-3 500€), Pack E-commerce (3 500-6 000€). Nous proposons des devis transparents et sans frais cachés. Consultez notre page Tarifs pour plus de détails.",
      },
      {
        question: "Y a-t-il des frais cachés ?",
        answer:
          "Non, jamais. Le prix annoncé est le prix final. Hébergement et nom de domaine sont inclus la première année. Nous détaillons tout dans le devis : design, développement, formation, support. La seule chose non incluse : les changements majeurs après validation du projet initial.",
      },
      {
        question: "Proposez-vous des paiements échelonnés ?",
        answer:
          "Oui ! Nous proposons généralement : 30% à la signature, 40% à la livraison de la maquette, 30% à la mise en ligne. Pour les projets > 5 000€, nous pouvons étaler davantage. Notre but est de rendre votre projet accessible.",
      },
      {
        question: "Que se passe-t-il si je dépasse mon budget ?",
        answer:
          "Nous fixons le prix dès le début. S'il y a des changements majeurs en cours de route (ajout de fonctionnalités), nous vous prévenons avant. Vous restez toujours maître de votre budget.",
      },
    ],
  },
  {
    category: "Processus & Délais",
    badge: "⏱️",
    questions: [
      {
        question: "Combien de temps pour créer mon site ?",
        answer:
          "En moyenne : Site One-Page (1-2 semaines), Site Vitrine complet (2-4 semaines), E-commerce (4-8 semaines). Cela dépend de la complexité et de votre réactivité pour valider les étapes. Nous vous donnons un planning dès le début.",
      },
      {
        question: "Comment se déroule un projet avec vous ?",
        answer:
          "4 étapes simples : 1) Brief & Découverte (nous comprenons vos besoins), 2) Design (vous validez les maquettes), 3) Développement (nous codons votre site), 4) Lancement & Formation (mise en ligne + vous apprenez à gérer le site).",
      },
      {
        question: "Combien de révisions sont incluses ?",
        answer:
          "Cela dépend du package : Pack Présence (1 révision), Pack Croissance (2 révisions), Pack E-commerce (3 révisions). Au-delà, les modifications sont facturées à l'heure (75€/h). Une révision = changements globaux sur la maquette, pas des ajustements pixel par pixel !",
      },
      {
        question: "Puis-je voir le site avant la mise en ligne ?",
        answer:
          "Absolument ! Nous créons d'abord des maquettes visuelles que vous validez. Ensuite, nous développons une version de test que vous pouvez tester avant la mise en ligne finale. Vous ne payez le solde qu'une fois 100% satisfait.",
      },
    ],
  },
  {
    category: "Technique",
    badge: "⚙️",
    questions: [
      {
        question: "Le site m'appartient-il à 100% ?",
        answer:
          "OUI, à 100%. Code source, contenu, images, nom de domaine... tout est à vous. Vous pouvez partir chez un autre prestataire quand vous voulez. Nous ne vous retenons pas en otage. Votre site, votre propriété.",
      },
      {
        question: "Mon site sera-t-il optimisé pour mobile ?",
        answer:
          "Bien sûr ! Tous nos sites sont responsive (adaptés mobile, tablette, desktop). Aujourd'hui, plus de 60% du trafic web vient du mobile. Ce serait suicidaire de ne pas optimiser !",
      },
      {
        question: "Utilisez-vous WordPress / Wix / autre ?",
        answer:
          "Nous utilisons différentes technologies selon votre besoin : WordPress pour la flexibilité et le SEO, Webflow pour le design avancé, Shopify pour l'e-commerce, Next.js pour les projets custom. On choisit l'outil adapté, pas notre outil préféré.",
      },
      {
        question: "Puis-je modifier mon site moi-même après ?",
        answer:
          "Oui ! Nous créons des sites avec des CMS (système de gestion de contenu) simples. Vous pourrez changer textes, images et ajouter des articles de blog. Nous vous formons à la prise en main. Pour des changements structurels, vous pouvez faire appel à nous ou un autre développeur.",
      },
      {
        question: "Mon site sera-t-il rapide ?",
        answer:
          "C'est notre obsession ! Un site lent = visiteurs qui partent. Nous optimisons images, code et serveur. Objectif : temps de chargement < 3 secondes. Nous testons avec Google Lighthouse pour garantir les performances.",
      },
    ],
  },
  {
    category: "Après la mise en ligne",
    badge: "🚀",
    questions: [
      {
        question: "Que se passe-t-il après le lancement ?",
        answer:
          "Support inclus pendant 30 jours pour corriger les bugs et répondre à vos questions. Ensuite, vous pouvez souscrire à notre offre de maintenance (50€/mois) ou gérer le site vous-même. C'est vous qui choisissez.",
      },
      {
        question: "Et si je veux changer une image ou un texte plus tard ?",
        answer:
          "Si c'est simple : vous le faites vous-même avec le CMS (on vous forme). Si c'est plus complexe : soit contrat de maintenance (50€/mois avec heures incluses), soit facturation ponctuelle à l'heure (75€/h).",
      },
      {
        question: "Proposez-vous de la maintenance ?",
        answer:
          "Oui ! Pour 50€/mois : mises à jour de sécurité, sauvegardes hebdomadaires, 1h de modifications incluse, support prioritaire. Voir notre page Maintenance pour les détails.",
      },
      {
        question: "Que se passe-t-il si mon site tombe en panne ?",
        answer:
          "Avec notre hébergement : uptime garanti à 99,9%. En cas de problème, notre équipe intervient. Si vous êtes en maintenance, nous gérons tout. Sinon, facturation à l'heure d'intervention.",
      },
    ],
  },
  {
    category: "Autres Questions",
    badge: "❓",
    questions: [
      {
        question: "Faites-vous aussi du référencement (SEO) ?",
        answer:
          "Oui ! Tous nos sites incluent un SEO de base (structure, balises, vitesse). Pour du SEO avancé (stratégie de contenu, netlinking), nous proposons des prestations dédiées ou travaillons avec des partenaires spécialisés.",
      },
      {
        question: "Puis-je avoir une démo ou des exemples de vos sites ?",
        answer:
          "Consultez notre page Portfolio pour voir nos réalisations. Nous pouvons aussi créer une maquette spécifique pour votre projet lors de la phase de devis (selon la complexité).",
      },
      {
        question: "Travaillez-vous à l'international ?",
        answer:
          "Oui ! Nous créons des sites multilingues et travaillons avec des clients en Europe et au-delà. La communication se fait en ligne (visio, email), donc la localisation n'est pas un frein.",
      },
      {
        question: "Créez-vous des logos / identités visuelles ?",
        answer:
          "Nous pouvons créer un logo simple ou travailler avec votre charte graphique existante. Pour une identité visuelle complète (logo, couleurs, typographies, supports), nous collaborons avec des graphistes partenaires.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 lg:py-32">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="mb-6">
            Foire aux questions
          </Badge>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Toutes vos <span className="text-primary">questions</span>, nos réponses
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Vous avez des questions sur nos services, nos tarifs ou notre processus ? 
            Vous trouverez sûrement la réponse ici. Sinon, contactez-nous !
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl space-y-16">
          {faqCategories.map((category, catIndex) => (
            <div key={category.category}>
              <h2 className="mb-6 text-2xl font-bold flex items-center gap-3">
                <span className="text-3xl">{category.badge}</span>
                {category.category}
              </h2>

              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq, qIndex) => (
                  <AccordionItem
                    key={`${catIndex}-${qIndex}`}
                    value={`item-${catIndex}-${qIndex}`}
                  >
                    <AccordionTrigger className="text-left font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Still have questions */}
      <section className="bg-muted/30 px-4 py-16">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold">Toujours des questions ?</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Nous sommes là pour vous répondre. Aucune question n'est trop bête !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Nous contacter
            </a>
            <a
              href="mailto:contact@veridian-agency.com"
              className="inline-flex items-center justify-center rounded-lg border px-8 py-3 text-base font-medium hover:bg-muted transition-colors"
            >
              Envoyer un email
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Prêt à démarrer votre projet ?"
        description="Maintenant que vous en savez plus sur nous, passons à l'action !"
        primaryCta={{ text: "Demander un devis", href: "/contact" }}
        secondaryCta={{ text: "Voir nos tarifs", href: "/pricing" }}
      />
    </div>
  );
}
