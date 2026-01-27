"use client";

import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import Link from "next/link";

function Hero() {

  return (
    <div className="w-full relative min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="flex gap-8 items-center justify-center flex-col">
          <div>
            <Button variant="secondary" size="sm" className="gap-4">
              Des réalisation sur mesure <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex gap-16 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular flex flex-col items-center gap-4">
              <LayoutTextFlip
                text="Bienvenue chez Veridian !"
                words={["Site Web", "Google ADS", "SEO", "Suivi de conversion"]}
                duration={2000}
              />
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              Nous créons des Sites Web modernes et adapté a votre secteur d'activité,
              intégré a votre environnement d'entreprise, ou sur nos outils de news letter et de gestion client déja intégré !
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Button size="lg" className="gap-4" variant="outline" asChild>
              <Link href="/">
                Mon audit <PhoneCall className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" className="gap-4" asChild>
              <Link href="/">
                En savoir plus <MoveRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
