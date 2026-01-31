import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StatsCard } from "@/components/block/stats-card";
import { FeatureCard } from "@/components/block/feature-card";
import { TestimonialCard } from "@/components/block/testimonial-card";
import { CTASection } from "@/components/block/cta-section";
import { ProjectCard } from "@/components/block/project-card";
import { ArrowRight, PhoneCall, Sparkles, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Agence Web Veridian - Création de Sites Web sur Mesure",
  description: "Nous créons des sites web modernes, rapides et qui convertissent. Sites vitrines, e-commerce, refontes. Deviez gratuit en 24h.",
};

const valueProps = [
  {
    icon: "⚡",
    title: "Résultats rapides",
    description: "Votre site en ligne en 2-4 semaines. Pas d'attente interminable.",
  },
  {
    icon: "🎯",
    title: "Orienté conversion",
    description: "Nous ne créons pas juste de beaux sites. Nous créons des sites qui vous apportent des clients.",
  },
  {
    icon: "💰",
    title: "Tarifs transparents",
    description: "Pas de frais cachés. Vous savez exactement ce que vous payez.",
  },
];

const services = [
  {
    icon: "🌐",
    title: "Site Vitrine",
    description: "Présence en ligne professionnelle pour votre activité",
    href: "/services#pack-présence",
  },
  {
    icon: "📝",
    title: "Site avec Blog",
    description: "Développez votre audience avec du contenu régulier",
    href: "/services#pack-croissance",
  },
  {
    icon: "🛒",
    title: "E-commerce",
    description: "Vendez vos produits en ligne avec une boutique optimisée",
    href: "/services#pack-ecommerce",
  },
  {
    icon: "🔄",
    title: "Refonte de site",
    description: "Modernisez votre site existant pour plus de performance",
    href: "/contact",
  },
];

const advantages = [
  "Réponse en moins de 24h",
  "Code source à 100% à vous",
  "Formation incluse",
  "Support 30 jours",
  "Optimisé pour le SEO",
  "Responsive mobile",
];

const testimonials = [
  {
    content: "En 3 mois, notre nouveau site nous a apporté plus de clients que les 2 années précédentes. L'investissement était largement rentabilisé dès le premier mois.",
    author: "Marie Dupont",
    role: "Gérante",
    company: "Coiffure Élégance",
  },
  {
    content: "J'apprécie vraiment la transparence sur les tarifs et la réactivité. Le site est exactement ce que je voulais, et même mieux !",
    author: "Pierre Martin",
    role: "Fondateur",
    company: "Coach Fitness",
  },
];

const portfolioPreview = [
  {
    title: "La Bella Pizza",
    description: "Site avec commande en ligne",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=600&fit=crop",
    tags: ["Restaurant", "E-commerce"],
    href: "/portfolio",
  },
  {
    title: "Coiffure Élégance",
    description: "Refonte + booking en ligne",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop",
    tags: ["Beauté", "Refonte"],
    href: "/portfolio",
  },
  {
    title: "Coach Paul Fitness",
    description: "Landing page + blog SEO",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop",
    tags: ["Sport", "Blog"],
    href: "/portfolio",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center">
            <Badge variant="outline" className="mb-8 flex gap-2 rounded-lg px-4 py-1.5">
              <Sparkles className="size-4" />
              <span className="text-sm">Création de sites web professionnels</span>
            </Badge>

            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Votre site web{" "}
              <span className="text-primary">qui convertit</span>
              <br />
              en moins d'un mois
            </h1>

            <p className="mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Nous créons des sites web modernes, rapides et optimisés pour vous apporter 
              des <strong className="text-foreground">clients réels</strong>. Pas de jargon, 
              pas de frais cachés. Juste des résultats.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="gap-2 px-8 text-base">
                <Link href="/audit">
                  🎁 Audit gratuit en 48h
                  <ArrowRight className="size-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8 text-base" >
                <Link href="/contact">
                  Demander un devis
                  <PhoneCall className="size-5" />
                </Link>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap gap-6 justify-center text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                Devis gratuit
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                Réponse 24h
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                Sans engagement
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      </section>

      {/* Value Props */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            {valueProps.map((prop) => (
              <div key={prop.title} className="text-center">
                <div className="mb-4 text-5xl">{prop.icon}</div>
                <h3 className="mb-2 text-xl font-bold">{prop.title}</h3>
                <p className="text-muted-foreground">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-muted/30 px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Ce que nous pouvons faire pour vous
            </h2>
            <p className="text-lg text-muted-foreground">
              Des solutions adaptées à chaque besoin et budget
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group rounded-xl border bg-background p-6 transition-all hover:shadow-lg"
              >
                <div className="mb-4 text-4xl">{service.icon}</div>
                <h3 className="mb-2 font-semibold group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/services">
                Voir tous nos services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Us / Advantages */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
                Pourquoi nous choisir ?
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Nous ne sommes pas une grosse agence impersonnelle. Nous sommes une équipe 
                dédiée qui connaît votre projet sur le bout des doigts.
              </p>
              
              <div className="space-y-3">
                {advantages.map((advantage) => (
                  <div key={advantage} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="font-medium">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-square lg:aspect-[4/3]">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5" />
              <div className="relative h-full rounded-2xl border bg-muted flex items-center justify-center">
                <div className="text-center p-12">
                  <div className="mb-6 text-8xl">💻</div>
                  <p className="text-xl font-semibold mb-2">Votre futur site</p>
                  <p className="text-muted-foreground">
                    Moderne, rapide, et qui convertit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-muted/30 px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StatsCard value="50" label="Sites créés" suffix="+" />
            <StatsCard value="98" label="Satisfaction" suffix="%" />
            <StatsCard value="24h" label="Temps de réponse" />
            <StatsCard value="100" label="Propriété" suffix="%" />
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Nos réalisations
            </h2>
            <p className="text-lg text-muted-foreground">
              Découvrez comment nous avons aidé nos clients à réussir
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolioPreview.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/portfolio">
                Voir tout le portfolio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted/30 px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Ce que disent nos clients
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.author} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Votre site mérite d'être vu"
        description="Ne laissez pas vos concurrents prendre votre place en ligne. Discutons de votre projet aujourd'hui."
        primaryCta={{ text: "🎁 Audit gratuit", href: "/audit" }}
        secondaryCta={{ text: "Demander un devis", href: "/contact" }}
      />
    </div>
  );
}
