import { Metadata } from "next";
import { CTASection } from "@/components/block/cta-section";
import { BenefitsGrid } from "@/components/block/benefits-grid";
import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Audit Gratuit - Optimisez votre Site Web en 48h",
  description: "Recevez un audit vidéo gratuit de votre site web en 48h. 3 actions concrètes pour améliorer votre présence en ligne.",
};

const auditChecklist = [
  "Performance de chargement (vitesse)",
  "Optimisation mobile et responsive",
  "Structure SEO (balises, mots-clés)",
  "Expérience utilisateur (UX)",
  "Appels à l'action (conversion)",
  "Contenu et copywriting",
  "Sécurité (HTTPS, failles)",
  "Accessibilité (normes WCAG)",
];

const samples = [
  {
    title: "Performance lente",
    issue: "Temps de chargement 6 secondes",
    fix: "Optimisation images + cache = moins de 2 secondes",
    result: "+40% de visiteurs qui restent",
  },
  {
    title: "Pas de CTA visible",
    issue: "Les visiteurs ne savent pas quoi faire",
    fix: "Bouton 'Contactez-nous' bien visible",
    result: "+25% de demandes de devis",
  },
  {
    title: "SEO non optimisé",
    issue: "Pas de balises, pas de structure",
    fix: "Optimisation on-page complète",
    result: "+150% de trafic organique en 3 mois",
  },
];

export default function AuditPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container mx-auto max-w-5xl text-center">
          <Badge variant="outline" className="mb-6 text-base">
            🎁 Offre limitée • 100% gratuit
          </Badge>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Recevez votre <span className="text-primary">audit vidéo gratuit</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Donnez-nous l'URL de votre site actuel. Nous vous envoyons une vidéo personnalisée 
            avec <strong>3 recommandations concrètes</strong> pour l'améliorer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#audit-form"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg"
            >
              Recevoir mon audit gratuit
            </a>
            <span className="inline-flex items-center justify-center rounded-lg border bg-background px-6 py-4 text-base text-muted-foreground">
              Réponse sous 48h • Aucun engagement
            </span>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Ce que vous recevez
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Un audit complet et personnalisé de votre site web actuel
            </p>
          </div>

          <BenefitsGrid />
        </div>
      </section>

      {/* What we analyze */}
      <section className="bg-muted/30 px-4 py-20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-12 text-3xl font-bold text-center">
            Nous analysons tout
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {auditChecklist.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-lg border bg-background p-4">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample recommendations */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-12 text-3xl font-bold text-center">
            Exemples de recommandations
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {samples.map((sample) => (
              <Card key={sample.title} className="overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="mb-4 font-bold text-lg">{sample.title}</h3>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex gap-2">
                      <span className="text-red-500 font-semibold shrink-0">❌</span>
                      <span className="text-muted-foreground">{sample.issue}</span>
                    </div>
                    
                    <div className="flex gap-2">
                      <span className="text-green-600 font-semibold shrink-0">✓</span>
                      <span className="text-muted-foreground">{sample.fix}</span>
                    </div>
                    
                    <div className="flex gap-2 mt-4 pt-3 border-t">
                      <span className="text-primary font-semibold shrink-0">📈</span>
                      <span className="font-medium">{sample.result}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Form Section */}
      <section id="audit-form" className="bg-gradient-to-br from-primary/10 via-background to-primary/5 px-4 py-20">
        <div className="container mx-auto max-w-2xl">
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <div className="mb-6 text-center">
                <h2 className="mb-3 text-2xl font-bold">Demander votre audit gratuit</h2>
                <p className="text-muted-foreground">
                  Remplissez ce formulaire et recevez votre audit vidéo en moins de 48h
                </p>
              </div>

              <form className="space-y-6">
                {/* Name */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Votre nom *
                  </label>
                  <input
                    type="text"
                    placeholder="Jean Dupont"
                    className="w-full rounded-lg border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Email professionnel *
                  </label>
                  <input
                    type="email"
                    placeholder="jean@entreprise.com"
                    className="w-full rounded-lg border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                {/* Website URL */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    URL de votre site web *
                  </label>
                  <input
                    type="url"
                    placeholder="https://www.monentreprise.fr"
                    className="w-full rounded-lg border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  <p className="mt-1 text-xs text-muted-foreground">
                    Indiquez l'URL complète (avec https://)
                  </p>
                </div>

                {/* Biggest challenge */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Quel est votre plus gros problème avec votre site actuel ?
                  </label>
                  <textarea
                    placeholder="Ex: Pas de visibilité, chargement lent, pas de nouvelles demandes..."
                    className="min-h-[100px] w-full rounded-lg border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Goals */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Que souhaitez-vous accomplir ?
                  </label>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {[
                      "Plus de visibilité (SEO)",
                      "Plus de leads/ventes",
                      "Meilleure image de marque",
                      "Un site plus rapide",
                      "Refonte complète",
                      "Autre",
                    ].map((goal) => (
                      <label key={goal} className="flex items-center gap-2 rounded-lg border bg-background p-3 cursor-pointer hover:bg-muted/50 transition-colors">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="text-sm">{goal}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary px-6 py-4 font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  📧 Recevoir mon audit gratuit
                </button>

                <p className="text-xs text-center text-muted-foreground">
                  En soumettant ce formulaire, vous acceptez d'être recontacté par email. 
                  Vos données ne seront jamais partagées.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Trust Section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="mb-6 text-2xl font-bold">
            Pourquoi offrons-nous cet audit gratuit ?
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            C'est simple : nous pensons qu'une fois que vous verrez la qualité de nos 
            recommandations et notre approche pragmatique, vous voudrez travailler avec nous 
            pour les mettre en œuvre. Mais <strong>aucune pression</strong> — 
            c'est gratuit et vous pouvez utiliser nos conseils comme bon vous semble.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Votre site mérite mieux"
        description="Ne laissez pas votre site actuel vous faire perdre des clients. Recevez votre audit personnalisé dès maintenant."
        primaryCta={{ text: "Recevoir mon audit", href: "#audit-form" }}
        secondaryCta={{ text: "Voir nos services", href: "/services" }}
      />
    </div>
  );
}
