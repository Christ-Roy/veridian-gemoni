import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-bold text-xl">
              <span className="text-primary">Veridian</span>
              <span className="text-sm font-normal text-muted-foreground ml-2">Agence Web</span>
            </h3>
            <p className="text-sm text-muted-foreground">
              Création de sites web modernes, rapides et qui convertissent. 
              Devis gratuit en 24h.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/services#pack-présence" className="hover:text-primary transition-colors">
                  Site Vitrine
                </Link>
              </li>
              <li>
                <Link href="/services#pack-croissance" className="hover:text-primary transition-colors">
                  Site avec Blog
                </Link>
              </li>
              <li>
                <Link href="/services#pack-ecommerce" className="hover:text-primary transition-colors">
                  E-commerce
                </Link>
              </li>
              <li>
                <Link href="/maintenance" className="hover:text-primary transition-colors">
                  Maintenance Web
                </Link>
              </li>
            </ul>
          </div>

          {/* Entreprise */}
          <div className="space-y-4">
            <h4 className="font-semibold">Entreprise</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-primary transition-colors">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:contact@veridian-agency.com" className="hover:text-primary transition-colors">
                  contact@veridian-agency.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+33600000000" className="hover:text-primary transition-colors">
                  +33 6 XX XX XX XX
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Paris & Île-de-France</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Github"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            © {currentYear} Veridian Agence Web. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link href="/legal" className="hover:text-primary transition-colors">
              Mentions légales
            </Link>
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Confidentialité
            </Link>
            <Link href="/cgv" className="hover:text-primary transition-colors">
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
