import { Metadata } from "next";
import { ContactForm } from "@/components/block/contact-form";
import { ContactInfoGrid } from "@/components/block/contact-info-grid";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact - Parlons de votre Projet Web",
  description: "Contactez-nous pour discuter de votre projet de site web. Devis gratuit en 24h. Consultation téléphonique offerte.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 lg:py-32">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Parlons de votre <span className="text-primary">projet</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Que vous ayez une idée précise ou que vous cherchiez des conseils, 
            nous sommes là pour vous aider. Réponse garantie sous 24h.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left Column - Form */}
            <div>
              <div className="mb-8">
                <h2 className="mb-3 text-2xl font-bold">Formulaire de contact</h2>
                <p className="text-muted-foreground">
                  Remplissez ce formulaire et nous vous répondrons rapidement avec 
                  un devis personnalisé.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Démarrons votre projet</CardTitle>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Info */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div>
                <h2 className="mb-6 text-2xl font-bold">Autres moyens de contact</h2>
                <ContactInfoGrid />
              </div>

              {/* Calendly Embed Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle>Réserver un appel de découverte</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video rounded-lg border bg-muted flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="mb-4 text-5xl">📅</div>
                      <p className="text-muted-foreground mb-4">
                        Intégration Calendly à venir
                      </p>
                      <p className="text-sm text-muted-foreground">
                        En attendant, utilisez le formulaire ou contactez-nous par email
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    💡 <strong>Gratuit et sans engagement</strong> - Discutons de votre projet 
                    pendant 15 minutes pour voir si nous pouvons vous aider.
                  </p>
                </CardContent>
              </Card>

              {/* FAQ Quick */}
              <Card className="bg-gradient-to-br from-primary/5 to-background">
                <CardHeader>
                  <CardTitle>Questions fréquentes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-1">Combien de temps pour un devis ?</h3>
                    <p className="text-sm text-muted-foreground">
                      Nous vous répondons sous 24h avec un devis détaillé.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">C'est vraiment gratuit ?</h3>
                    <p className="text-sm text-muted-foreground">
                      Oui ! La consultation et le devis sont 100% gratuits et sans engagement.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Combien de temps pour créer un site ?</h3>
                    <p className="text-sm text-muted-foreground">
                      En moyenne 2-4 semaines selon la complexité. Voir notre{" "}
                      <a href="/faq" className="text-primary hover:underline">FAQ complète</a>.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-muted/30 px-4 py-16">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-2xl font-bold">Pourquoi nous faire confiance ?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <div className="mb-2 text-3xl font-bold text-primary">24h</div>
              <p className="text-sm text-muted-foreground">Temps de réponse garanti</p>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-primary">100%</div>
              <p className="text-sm text-muted-foreground">Transparence sur les tarifs</p>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-primary">0€</div>
              <p className="text-sm text-muted-foreground">Devis et consultation offerts</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
