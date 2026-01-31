"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
}

export function CTASection({
  title = "Prêt à lancer votre projet web ?",
  description = "Discutons de votre projet et recevez un devis personnalisé gratuit en 24h.",
  primaryCta = { text: "Démarrer mon projet", href: "/contact" },
  secondaryCta = { text: "Voir nos tarifs", href: "/pricing" },
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5 px-4 py-20 lg:py-32">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">Consultation gratuite</span>
        </div>

        <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h2>

        <p className="mb-10 text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="gap-2 text-base">
            <Link href={primaryCta.href}>
              {primaryCta.text}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="gap-2 text-base">
            <Link href={secondaryCta.href}>
              {secondaryCta.text}
            </Link>
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
    </section>
  );
}
