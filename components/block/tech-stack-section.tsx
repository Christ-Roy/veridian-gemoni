"use client";

import { Code2, Palette, Server, Smartphone } from "lucide-react";

const techStack = [
  { icon: Code2, name: "Next.js & React", category: "Frontend" },
  { icon: Server, name: "WordPress & Webflow", category: "CMS" },
  { icon: Smartphone, name: "Shopify & WooCommerce", category: "E-commerce" },
  { icon: Palette, name: "Figma & Tailwind", category: "Design" },
];

export function TechStackSection() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {techStack.map((tech) => (
        <div
          key={tech.name}
          className="flex flex-col items-center gap-4 rounded-xl border bg-background p-8 text-center hover:shadow-lg transition-shadow"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <tech.icon className="h-8 w-8 text-primary" />
          </div>
          <div>
            <div className="font-semibold">{tech.name}</div>
            <div className="text-sm text-muted-foreground">{tech.category}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
