"use client";

import { cn } from "@/lib/utils";
import { LogoCarouselWrapper } from "@/components/block/logo-carousel-wrapper";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoSectionProps = {
  logos: Logo[];
};

export function LogoSection({ logos }: LogoSectionProps) {
  return (
    <div className="w-full py-32 md:py-48 px-4 relative">
      <div
        aria-hidden="true"
        className={cn(
          "-top-1/2 -translate-x-1/2 pointer-events-none absolute left-1/2 h-[120vmin] w-[120vmin] rounded-b-full",
          "bg-[radial-gradient(ellipse_at_center,var(--color-foreground)/.1,transparent_50%)]",
          "blur-[30px]"
        )}
      />
      <div className="w-full relative z-10">
        <h2 className="mb-8 text-center">
          <span className="block font-medium text-2xl text-muted-foreground">
            Un joli site,
          </span>
          <span className="font-black text-2xl text-primary tracking-tight md:text-3xl">
            Intégré aux outils indispensables.
          </span>
        </h2>

        <LogoCarouselWrapper logos={logos} columnCount={6} />
      </div>
    </div>
  );
}
