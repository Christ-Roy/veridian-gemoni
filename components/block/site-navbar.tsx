"use client";

import { Home, Info, Briefcase, Mail } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

const navItems = [
  {
    name: "Home",
    url: "/",
    icon: Home,
  },
  {
    name: "About",
    url: "#about",
    icon: Info,
  },
  {
    name: "Projects",
    url: "#projects",
    icon: Briefcase,
  },
  {
    name: "Contact",
    url: "#contact",
    icon: Mail,
  },
];

export function SiteNavbar() {
  return (
    <>
      <NavBar items={navItems} />
      <div className="fixed top-6 right-6 z-50 pointer-events-auto">
        <AnimatedThemeToggler className="p-2 rounded-full bg-background/5 border border-border backdrop-blur-lg hover:bg-muted transition-colors pointer-events-auto" />
      </div>
    </>
  );
}
