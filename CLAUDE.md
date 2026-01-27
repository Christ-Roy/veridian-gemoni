# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 🎨 Règle Design Stricte

**CRITIQUE : Utilise UNIQUEMENT les variables CSS sémantiques de Shadcn/UI.**

- ✅ Utilise : `bg-primary`, `bg-muted`, `text-card-foreground`, `border-input`, `text-primary-foreground`, etc.
- ❌ N'utilise JAMAIS : couleurs Tailwind "en dur" comme `slate-900`, `blue-600`, `gray-500`, codes Hex, ou `rgb()`
- Le design complet doit être contrôlable via `app/globals.css` uniquement
- Toutes les variables de couleur sont définies dans `:root` et `.dark` avec le format `oklch()`

## 📋 Commandes Essentielles

```bash
# Développement
npm run dev          # Lance le serveur de développement sur localhost:3000

# Production
npm run build        # Compile l'application pour la production
npm start           # Lance le serveur de production

# Qualité du code
npm run lint        # Exécute ESLint
```

## 🏗️ Architecture

### Stack Technique
- **Framework** : Next.js 16 (App Router) avec React 19
- **Styling** : Tailwind CSS 4 + Shadcn/UI
- **Animations** : Framer Motion + tw-animate-css
- **3D** : Three.js pour les effets visuels
- **Typographie** : Geist (sans) et Geist Mono
- **Icons** : Lucide React

### Structure des Composants

```
components/
├── ui/              # Composants atomiques réutilisables (boutons, inputs, etc.)
│   ├── button.tsx
│   ├── animated-theme-toggler.tsx
│   ├── tubelight-navbar.tsx
│   ├── background-dots.tsx
│   ├── hero-highlight.tsx
│   ├── logo-carousel.tsx
│   └── ...
└── block/           # Sections complètes de site
    ├── site-navbar.tsx
    ├── animated-hero.tsx
    ├── hero-parallax.tsx
    ├── logo-section.tsx
    ├── timeline-section.tsx
    └── ...
```

**Règle d'organisation :**
- `components/ui/` : Composants de base, réutilisables dans plusieurs contextes
- `components/block/` : Sections métier spécifiques à l'application

### Système de Thème

Le projet utilise un système de thème dual (light/dark) basé sur des variables CSS :

- Thème clair : vert Veridian (`oklch(0.8348 0.1302 160.9080)`) + accents menthe
- Thème sombre : vert plus profond (`oklch(0.4365 0.1044 156.7556)`)
- Gestion du thème : `AnimatedThemeToggler` avec transitions fluides
- Variables disponibles : `--primary`, `--background`, `--foreground`, `--muted`, `--accent`, `--card`, `--border`, etc.

### Utilitaires

- **`lib/utils.ts`** : Fonction `cn()` pour fusionner les classes Tailwind (via `clsx` + `twMerge`)
- **Path alias** : `@/*` pointe vers la racine du projet (configuré dans `tsconfig.json`)

### Layout Global

`app/layout.tsx` contient :
- Polices Geist (sans + mono) avec variables CSS
- `<BackgroundDots>` : Arrière-plan avec effet de points animés
- `<SiteNavbar>` : Navigation principale avec toggle de thème

### Page d'Accueil

`app/page.tsx` compose les sections :
1. `<Hero>` : Hero animé avec effet highlight
2. `<LogoSection>` : Carrousel de logos clients/partenaires
3. `<HeroParallax>` : Section parallax avec grille de produits
4. `<TimelineSection>` : Timeline des événements/étapes

## 🎯 Patterns Communs

### Composant UI avec CVA

Les composants UI utilisent `class-variance-authority` pour les variants :

```tsx
const buttonVariants = cva(
  "base-classes",
  {
    variants: {
      variant: { default: "bg-primary text-primary-foreground", ... },
      size: { default: "h-10 px-4", ... }
    }
  }
)
```

### Composants Client vs Server

- Composants avec animations/interactivité : `"use client"` en haut du fichier
- Sections statiques : Server Components par défaut

### Import des Icônes

```tsx
import { IconName } from "lucide-react";
```

## 🚀 Développement

- Le serveur de développement recharge automatiquement à chaque modification
- Les variables de thème sont en hot-reload via `globals.css`
- TypeScript en mode strict activé
- Path aliases : `@/components`, `@/lib`, `@/app`

## 🎨 Shadcn/UI Variables de Couleur

Toujours utiliser ces classes sémantiques :
- **Backgrounds** : `bg-background`, `bg-card`, `bg-muted`, `bg-accent`, `bg-primary`, `bg-secondary`
- **Foregrounds** : `text-foreground`, `text-card-foreground`, `text-muted-foreground`, `text-primary-foreground`
- **Borders** : `border-border`, `border-input`
- **Special** : `ring-ring`, `bg-destructive`, `text-destructive-foreground`
