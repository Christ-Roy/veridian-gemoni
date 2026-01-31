"use client";

import { FeatureCard } from "@/components/block/feature-card";
import { Mail, Phone, Clock, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    description: "contact@veridian-agency.com",
  },
  {
    icon: Phone,
    title: "Téléphone",
    description: "+33 6 XX XX XX XX",
  },
  {
    icon: Clock,
    title: "Horaires",
    description: "Lun-Ven : 9h-18h",
  },
  {
    icon: MapPin,
    title: "Localisation",
    description: "Paris & Île-de-France",
  },
];

export function ContactInfoGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {contactInfo.map((info) => (
        <FeatureCard key={info.title} {...info} />
      ))}
    </div>
  );
}
