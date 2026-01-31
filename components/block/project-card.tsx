"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  href?: string;
  stats?: {
    label: string;
    value: string;
  }[];
}

export function ProjectCard({ 
  title, 
  description, 
  image, 
  tags, 
  href = "#",
  stats 
}: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* Image with overlay */}
      <div className="relative aspect-video overflow-hidden bg-muted">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <Button variant="secondary" size="sm" asChild>
            <Link href={href} className="gap-2">
              Voir le projet <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <CardHeader>
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base line-clamp-2">{description}</CardDescription>
      </CardHeader>

      {stats && stats.length > 0 && (
        <CardContent>
          <div className="grid grid-cols-2 gap-4 pt-4 border-t">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </CardContent>
      )}
    </Card>
  );
}
