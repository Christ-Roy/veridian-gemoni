"use client";

import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
  isLast?: boolean;
}

export function ProcessStep({ step, title, description, icon: Icon, isLast = false }: ProcessStepProps) {
  return (
    <div className="relative flex gap-6">
      {/* Connector line */}
      {!isLast && (
        <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-border -z-10" />
      )}

      {/* Step number with icon */}
      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background">
        <Icon className="h-5 w-5 text-primary" />
        <div className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
          {step}
        </div>
      </div>

      {/* Content */}
      <Card className="flex-1 mb-8">
        <CardHeader>
          <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
