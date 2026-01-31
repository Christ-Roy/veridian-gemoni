import { Metadata } from "next";
import { StatsCard } from "@/components/block/stats-card";
import { CTASection } from "@/components/block/cta-section";
import { ValuesSection } from "@/components/block/values-section";
import { TechStackSection } from "@/components/block/tech-stack-section";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "À Propos - L'Agence Web qui Simplifie votre Digital",
  description: "Découvrez notre histoire, notre philosophie et les technologies que nous maîtrisons pour créer votre site web parfait.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 lg:py-32">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Text Content */}
            <div>
              <Badge variant="outline" className="mb-4">Notre histoire</Badge>
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Nous transformons votre expertise en <span className="text-primary">présence digitale</span>
              </h1>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  <strong className="text-foreground">Pourquoi cette agence ?</strong> Parce que trop d'entrepreneurs 
                  brillants n'ont pas le site web qu'ils méritent. Sites lents, complexes à gérer, ou 
                  simplement laids.
                </p>
                <p>
                  Notre mission est simple : créer des sites web <strong className="text-foreground">beaux, 
                  rapides et efficaces</strong>. Sans jargon technique. Sans dépassement de budget. 
                  Sans mois d'attente.
                </p>
                <p>
                  Nous ne sommes pas une grosse agence avec des process interminables. Nous sommes 
                  une équipe de passionnés qui fait du <strong className="text-foreground">sur-mesure 
                  accessible</strong>.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-square lg:aspect-auto lg:h-[500px]">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5" />
              <div className="relative h-full rounded-2xl border bg-muted flex items-center justify-center">
                {/* Placeholder - Remplacer par vraie photo */}
                <div className="text-center p-8">
                  <div className="mb-4 text-6xl">👨‍💻</div>
                  <p className="text-muted-foreground">
                    [Votre photo ici]
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Fondateur & Développeur Web
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted/30 px-4 py-12">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StatsCard value="50" label="Sites créés" suffix="+" />
            <StatsCard value="98" label="Clients satisfaits" suffix="%" />
            <StatsCard value="7" label="Délai moyen (jours)" />
            <StatsCard value="100" label="Propriété du code" suffix="%" />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 py-20 lg:py-32">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Notre philosophie
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Ce qui nous différencie des autres agences web
            </p>
          </div>

          <ValuesSection />

          <div className="mt-16 rounded-2xl border bg-gradient-to-br from-primary/5 to-background p-8 md:p-12">
            <h3 className="mb-4 text-2xl font-bold">
              &ldquo;Je ne fais pas juste du joli, je fais du fonctionnel.&rdquo;
            </h3>
            <p className="text-lg text-muted-foreground">
              Un site web n'est pas une œuvre d'art pour votre mur. C'est un <strong className="text-foreground">outil 
              de travail</strong> qui doit vous apporter des clients, vous faire gagner du temps, et refléter votre 
              professionnalisme. C'est cette approche pragmatique qui guide chacun de nos projets.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="bg-muted/30 px-4 py-20 lg:py-32">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Technologies maîtrisées
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Des outils modernes pour des sites performants
            </p>
          </div>

          <TechStackSection />

          <p className="mt-12 text-center text-muted-foreground">
            Et bien d'autres : Stripe, Supabase, Vercel, Cloudflare, Google Analytics, Mailchimp...
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Envie de travailler ensemble ?"
        description="Discutons de votre projet autour d'un café (virtuel ou réel). Première consultation gratuite."
        primaryCta={{ text: "Prendre rendez-vous", href: "/contact" }}
        secondaryCta={{ text: "Voir nos réalisations", href: "/portfolio" }}
      />
    </div>
  );
}
