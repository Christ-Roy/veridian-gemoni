"use client";

import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ logos }: LogoCloudProps) {
  return (
    <div className="relative w-full py-6">
      <InfiniteSlider gap={42} reverse speed={60} speedOnHover={20}>
        {logos.map((logo) => (
          <img
            alt={logo.alt}
            className="pointer-events-none h-8 select-none md:h-10 dark:brightness-0 dark:invert"
            height="auto"
            key={`logo-${logo.alt}`}
            loading="lazy"
            src={logo.src}
            width="auto"
          />
        ))}
      </InfiniteSlider>

    </div>
  );
}
