"use client";

import { Home, Briefcase, FileText, User, Mail, DollarSign, HelpCircle, Shield, Search, LayoutGrid } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    name: "Accueil",
    url: "/",
    icon: Home,
  },
  {
    name: "Services",
    url: "/services",
    icon: Briefcase,
  },
  {
    name: "Portfolio",
    url: "/portfolio",
    icon: LayoutGrid,
  },
  {
    name: "À propos",
    url: "/about",
    icon: User,
  },
  {
    name: "Tarifs",
    url: "/pricing",
    icon: DollarSign,
  },
  {
    name: "FAQ",
    url: "/faq",
    icon: HelpCircle,
  },
  {
    name: "Contact",
    url: "/contact",
    icon: Mail,
    highlight: true,
  },
];

export function SiteNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="text-primary">Veridian</span>
            <Badge variant="secondary" className="hidden sm:inline-flex">
              Agence Web
            </Badge>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.url}
                href={item.url}
                className={`text-sm font-medium transition-colors hover:text-primary flex items-center gap-1 ${
                  pathname === item.url ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/audit">
              <Button size="sm" className="gap-2">
                🎁 Audit gratuit
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-foreground transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 w-6 bg-foreground transition-all ${isOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-foreground transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.url}
                  href={item.url}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-primary flex items-center gap-2 px-2 py-2 rounded-lg ${
                    pathname === item.url ? "bg-primary/10 text-primary" : "text-muted-foreground"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              ))}
              <Link href="/audit" onClick={() => setIsOpen(false)} className="px-2">
                <Button size="sm" className="w-full gap-2">
                  🎁 Audit gratuit
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
