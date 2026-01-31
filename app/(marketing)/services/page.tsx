import { Metadata } from "next";
import { ServicesPricingGrid } from "@/components/block/services-pricing-grid";
import { ServicesProcessGrid } from "@/components/block/services-process-grid";
import { CTASection } from "@/components/block/cta-section";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Nos Services - Création de Sites Web sur Mesure",
  description: "Découvrez nos packages de création de sites web : Site Vitrine, Site avec Blog, et E-commerce. Solutions adaptées à votre budget et vos besoins.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 lg:py-32">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="mb-4">Nos Services</Badge>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Un site web <span className="text-primary">adapté à vos besoins</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Que vous lanciez votre activité ou que vous souhaitiez moderniser votre image, 
            nous avons la solution qui vous correspond.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Choisissez votre package</h2>
            <p className="text-muted-foreground">
              Des tarifs transparents, sans surprise. Tout est inclus.
            </p>
          </div>
          
          <ServicesPricingGrid />
          
          <p className="mt-12 text-center text-sm text-muted-foreground">
            Tous nos packages incluent : Responsive mobile, Support 30 jours, Certificat SSL, Sauvegardes automatiques
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-muted/30 px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Notre processus</h2>
            <p className="text-muted-foreground">
              Un suivi clair et transparent, du brief à la mise en ligne
            </p>
          </div>

          <ServicesProcessGrid />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Prêt à démarrer votre projet ?"
        description="Discutons de vos besoins et trouvons ensemble la meilleure solution."
        primaryCta={{ text: "Demander un devis", href: "/contact" }}
      />
    </div>
  );
}
