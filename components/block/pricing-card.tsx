"use client";

import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Feature {
  name: string;
  included: boolean;
}

interface PricingCardProps {
  name: string;
  description: string;
  price: string;
  period?: string;
  features: Feature[];
  cta: string;
  ctaLink: string;
  highlighted?: boolean;
  badge?: string;
}

export function PricingCard({
  name,
  description,
  price,
  period = "projet",
  features,
  cta,
  ctaLink,
  highlighted = false,
  badge,
}: PricingCardProps) {
  return (
    <Card className={`relative flex flex-col ${highlighted ? "border-primary shadow-lg scale-105" : ""}`}>
      {badge && (
        <div className="absolute -top-4 left-0 right-0 flex justify-center">
          <Badge className="bg-primary text-primary-foreground">{badge}</Badge>
        </div>
      )}
      
      <CardHeader>
        <CardTitle className="text-2xl">{name}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="flex-1">
        <div className="mb-8">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold">{price}</span>
            <span className="text-muted-foreground">/{period}</span>
          </div>
        </div>
        
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              {feature.included ? (
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              ) : (
                <X className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
              )}
              <span className={feature.included ? "" : "text-muted-foreground line-through"}>
                {feature.name}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter>
        <Button
          asChild
          className="w-full"
          variant={highlighted ? "default" : "outline"}
          size="lg"
        >
          <Link href={ctaLink}>{cta}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
