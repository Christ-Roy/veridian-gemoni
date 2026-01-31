import { Metadata } from "next";
import { ProjectCard } from "@/components/block/project-card";
import { CTASection } from "@/components/block/cta-section";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Portfolio - Nos Réalisations Web",
  description: "Découvrez nos projets de création de sites web : vitrines, e-commerce, refontes. Des résultats concrets pour nos clients.",
};

const projects = [
  {
    title: "La Bella Pizza",
    description: "Site web avec système de commande en ligne pour une pizzeria familiale. Interface moderne et processus de réservation simplifié.",
    image: "/portfolio/bella-pizza.jpg", // Placeholder
    tags: ["Restaurant", "E-commerce", "Réservation"],
    stats: [
      { label: "Commandes en ligne", value: "+40%" },
      { label: "Temps réservation", value: "-60%" },
    ],
  },
  {
    title: "Coiffure Élégance",
    description: "Refonte complète d'un site obsolète. Design moderne, optimisé mobile et système de prise de rendez-vous intégré.",
    image: "/portfolio/coiffure-elegance.jpg", // Placeholder
    tags: ["Beauté", "Refonte", "Booking"],
    stats: [
      { label: "Prises de RDV", value: "+60%" },
      { label: "Taux de rebond", value: "-45%" },
    ],
  },
  {
    title: "Coach Paul Fitness",
    description: "Landing page avec blog pour un coach sportif. SEO optimisé pour attirer des clients locaux via Google.",
    image: "/portfolio/coach-fitness.jpg", // Placeholder
    tags: ["Sport", "Blog", "SEO"],
    stats: [
      { label: "Leads générés", value: "200+" },
      { label: "Trafic organique", value: "+150%" },
    ],
  },
  {
    title: "Immobilier Prestige",
    description: "Plateforme de gestion d'annonces immobilières avec CMS personnalisé. Gain de temps considérable pour l'agence.",
    image: "/portfolio/immobilier-prestige.jpg", // Placeholder
    tags: ["Immobilier", "CMS", "Dashboard"],
    stats: [
      { label: "Temps de gestion", value: "-70%" },
      { label: "Annonces actives", value: "500+" },
    ],
  },
];

// Placeholder images will be handled in next step
const placeholderImages = {
  restaurant: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=600&fit=crop",
  beauty: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop",
  fitness: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop",
  realestate: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
};

// Update projects with placeholder images
const projectsWithImages = projects.map((project, index) => ({
  ...project,
  image: [
    placeholderImages.restaurant,
    placeholderImages.beauty,
    placeholderImages.fitness,
    placeholderImages.realestate,
  ][index],
}));

export default function PortfolioPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 lg:py-32">
        <div className="container mx-auto max-w-6xl text-center">
          <Badge variant="outline" className="mb-6">Nos réalisations</Badge>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Des projets qui <span className="text-primary">performent</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Découvrez comment nous avons aidé nos clients à développer leur activité 
            grâce à un site web professionnel et efficace.
          </p>
          <p className="text-sm text-muted-foreground">
            💡 <strong>Astuce</strong> : Ces projets sont des études de cas de nos réalisations. 
            Votre projet sera unique et adapté à vos besoins.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            {projectsWithImages.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Highlight */}
      <section className="bg-muted/30 px-4 py-20 lg:py-32">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Notre approche pour chaque projet
            </h2>
            <p className="text-lg text-muted-foreground">
              Des résultats mesurables, pas juste du design
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary">
                1
              </div>
              <h3 className="mb-2 text-xl font-semibold">Le défi</h3>
              <p className="text-muted-foreground">
                Nous identifions le problème principal qui freine votre activité
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary">
                2
              </div>
              <h3 className="mb-2 text-xl font-semibold">La solution</h3>
              <p className="text-muted-foreground">
                Nous créons une solution web sur-mesure et optimisée
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary">
                3
              </div>
              <h3 className="mb-2 text-xl font-semibold">Les résultats</h3>
              <p className="text-muted-foreground">
                Nous mesurons l'impact réel sur votre business (trafic, leads, ventes)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-4xl">
          <div className="rounded-2xl border bg-gradient-to-br from-primary/5 to-background p-8 md:p-12 text-center">
            <div className="mb-6 text-5xl">⭐⭐⭐⭐⭐</div>
            <blockquote className="mb-6 text-xl md:text-2xl font-medium">
              &ldquo;En 3 mois, notre nouveau site nous a apporté plus de clients 
              que les 2 années précédentes. L'investissement était largement rentabilisé 
              dès le premier mois.&rdquo;
            </blockquote>
            <div className="text-muted-foreground">
              — Marie D., Gérante • Coiffure Élégance
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Votre projet sera le prochain ?"
        description="Transformez votre activité avec un site web professionnel. Demandez un devis gratuit et détaillé."
        primaryCta={{ text: "Démarrer mon projet", href: "/contact" }}
        secondaryCta={{ text: "Voir nos services", href: "/services" }}
      />
    </div>
  );
}
