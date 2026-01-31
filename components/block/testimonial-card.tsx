"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  content: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  rating?: number;
}

export function TestimonialCard({ 
  content, 
  author, 
  role, 
  company, 
  avatar,
  rating = 5 
}: TestimonialCardProps) {
  const initials = author
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col gap-4">
        {/* Rating */}
        <div className="flex gap-1">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>

        {/* Content */}
        <p className="text-muted-foreground leading-relaxed italic">
          &ldquo;{content}&rdquo;
        </p>

        {/* Author */}
        <div className="flex items-center gap-3 mt-auto">
          <Avatar className="h-10 w-10">
            <AvatarImage src={avatar} alt={author} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold text-sm">{author}</div>
            <div className="text-xs text-muted-foreground">
              {role} • {company}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
