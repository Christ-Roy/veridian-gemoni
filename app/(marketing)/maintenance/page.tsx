import { Metadata } from "next";
import { PricingCard } from "@/components/block/pricing-card";
import { MaintenanceFeaturesGrid } from "@/components/block/maintenance-features-grid";
import { CTASection } from "@/components/block/cta-section";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Maintenance Web - Tranquillité d'esprit pour 50€/mois",
  description: "Notre service de maintenance web inclut : mises à jour, sauvegardes, modifications, support prioritaire. Dormez tranquille, on s'occupe de tout.",
};

const comparisonData = [
  {
    category: "En cas de problème",
    withMaintenance: "On s'en occupe immédiatement",
    withoutMaintenance: "Vous devez trouver un dev + facturation urgence",
  },
  {
    category: "Mises à jour",
    withMaintenance: "Automatiques et testées",
    withoutMaintenance: "Vous devez les faire vous-même (risque de casse)",
  },
  {
    category: "Sauvegardes",
    withMaintenance: "Hebdomadaires + stockage sécurisé",
    withoutMaintenance: "À votre charge (si oubli = données perdues)",
  },
  {
    category: "Petites modifications",
    withMaintenance: "1h/mois incluse",
    withoutMaintenance: "75€/heure à chaque fois",
  },
  {
    category: "Support technique",
    withMaintenance: "Illimité (réponse <24h)",
    withoutMaintenance: "Facturation à l'heure",
  },
];

const maintenancePackage = {
  name: "Pack Maintenance",
  description: "Tranquillité d'esprit totale pour votre site web",
  price: "50€",
  period: "mois",
  features: [
    { name: "Mises à jour de sécurité (WordPress, plugins, thèmes)", included: true },
    { name: "Sauvegardes hebdomadaires automatiques", included: true },
    { name: "1h de modifications incluse par mois", included: true },
    { name: "Support prioritaire (réponse <24h)", included: true },
    { name: "Monitoring de disponibilité", included: true },
    { name: "Optimisation des performances", included: true },
    { name: "Rapport mensuel d'activité", included: true },
    { name: "Intervention d'urgence incluse", included: true },
    { name: "Conseil et recommandations", included: true },
  ],
  cta: "Souscrire à la maintenance",
  ctaLink: "/contact",
  highlighted: true,
};

export default function MaintenancePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 lg:py-32">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Votre site web <span className="text-primary">toujours au top</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Ne vendez pas juste un site, vendez la tranquillité. Notre service de maintenance 
            garantit que votre site reste rapide, sécurisé et à jour.
          </p>
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2">
              ✅ Sans engagement • Résiliable à tout moment
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-2xl">
          <PricingCard {...maintenancePackage} />
          <p className="mt-6 text-center text-sm text-muted-foreground">
            💡 Les heures non utilisées dans le mois <strong>ne sont pas reportées</strong>. 
            Si vous avez besoin de plus d'1h, facturation complémentaire à 75€/h.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-muted/30 px-4 py-20 lg:py-32">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Ce qui est inclus
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Un service complet pour garder votre site en parfait état
            </p>
          </div>

          <MaintenanceFeaturesGrid />
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-12 text-3xl font-bold text-center">
            Avec ou sans maintenance ?
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="p-4 text-left font-semibold">Situation</th>
                  <th className="p-4 text-center font-semibold bg-primary/5">Avec Maintenance</th>
                  <th className="p-4 text-center font-semibold text-muted-foreground">Sans Maintenance</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i} className="border-b">
                    <td className="p-4 font-medium">{row.category}</td>
                    <td className="p-4 text-center bg-primary/5 text-primary font-medium">
                      {row.withMaintenance}
                    </td>
                    <td className="p-4 text-center text-muted-foreground">
                      {row.withoutMaintenance}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 rounded-lg border bg-gradient-to-br from-primary/5 to-background p-6 text-center">
            <p className="text-lg font-medium">
              💰 <strong>Calcul simple</strong> : Une seule intervention d'urgence (75€/h) coûte déjà 
              plus qu'un mois de maintenance. Et ça inclut tout le reste !
            </p>
          </div>
        </div>
      </section>

      {/* Real-world scenarios */}
      <section className="bg-muted/30 px-4 py-20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-12 text-3xl font-bold text-center">
            Des exemples concrets
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <div className="mb-3 text-3xl">🛡️</div>
                <h3 className="mb-2 font-semibold">Faille de sécurité détectée</h3>
                <p className="text-sm text-muted-foreground">
                  Un plugin a une faille. Sans maintenance : votre site peut être piraté. 
                  Avec maintenance : nous mettons à jour en quelques heures.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-3 text-3xl">💥</div>
                <h3 className="mb-2 font-semibold">Site planté après une mise à jour</h3>
                <p className="text-sm text-muted-foreground">
                  Sans maintenance : panique, recherche d'un dev disponible, facturation urgence. 
                  Avec maintenance : on restaure la sauvegarde en 15 minutes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-3 text-3xl">📝</div>
                <h3 className="mb-2 font-semibold">Besoin de changer un texte</h3>
                <p className="text-sm text-muted-foreground">
                  Sans maintenance : vous appelez votre dev, 75€/h minimum. 
                  Avec maintenance : inclus dans votre heure mensuelle.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-3 text-3xl">🐌</div>
                <h3 className="mb-2 font-semibold">Site qui ralentit</h3>
                <p className="text-sm text-muted-foreground">
                  Sans maintenance : vous ne le remarquez peut-être pas (mais vos visiteurs, oui). 
                  Avec maintenance : on surveille et optimise proactivement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Prêt à dormir tranquille ?"
        description="Souscrivez à notre service de maintenance et concentrez-vous sur votre business, pas sur votre site web."
        primaryCta={{ text: "Souscrire maintenant", href: "/contact" }}
        secondaryCta={{ text: "Poser une question", href: "/faq" }}
      />
    </div>
  );
}
