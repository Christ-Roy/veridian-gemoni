"use client";

import { Card, CardContent } from "@/components/ui/card";

interface StatsCardProps {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

export function StatsCard({ value, label, prefix = "", suffix = "" }: StatsCardProps) {
  return (
    <Card className="border bg-gradient-to-t from-primary/5 to-card hover:shadow-lg transition-shadow">
      <CardContent className="p-6 text-center">
        <div className="text-3xl md:text-4xl font-bold tabular-nums text-foreground">
          {prefix}{value}{suffix}
        </div>
        <div className="mt-2 text-sm text-muted-foreground">{label}</div>
      </CardContent>
    </Card>
  );
}
