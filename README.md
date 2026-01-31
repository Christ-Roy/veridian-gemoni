# 🌐 Veridian - Site Agence Web

Site d'agence web professionnel créé avec Next.js 14, Tailwind CSS et shadcn/ui.

## 🚀 Démarrage Rapide

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build pour production
npm run build

# Lancer en production
npm start
```

Le site sera accessible sur http://localhost:3000

## 📁 Structure

```
veridian-gemoni/
├── app/
│   └── (marketing)/          # Pages marketing
│       ├── page.tsx          # Accueil
│       ├── services/         # Page Services
│       ├── about/            # Page À propos
│       ├── portfolio/        # Page Portfolio
│       ├── contact/          # Page Contact
│       ├── pricing/          # Page Tarifs
│       ├── maintenance/      # Page Maintenance
│       ├── faq/              # Page FAQ
│       └── audit/            # Page Audit Gratuit
├── components/
│   ├── block/                # Composants réutilisables
│   └── ui/                   # Composants shadcn/ui
├── hooks/                    # React hooks
├── lib/                      # Utilitaires
└── public/                   # Assets statiques
```

## 📦 Technologies

- **Framework** : Next.js 14 (App Router)
- **Styling** : Tailwind CSS
- **UI Components** : shadcn/ui
- **Icons** : Lucide React
- **Forms** : React Hook Form + Zod
- **Animation** : Framer Motion

## 📄 Pages Disponibles

| Page | URL | Description |
|------|-----|-------------|
| Accueil | `/` | Landing page principale |
| Services | `/services` | Packages et tarifs |
| À propos | `/about` | Histoire et valeurs |
| Portfolio | `/portfolio` | Réalisations clients |
| Contact | `/contact` | Formulaire de contact |
| Tarifs | `/pricing` | Grille tarifaire détaillée |
| Maintenance | `/maintenance` | Offre de maintenance |
| FAQ | `/faq` | Questions fréquentes |
| Audit | `/audit` | Demande d'audit gratuit |

## 🎨 Personnalisation

### Couleurs
Modifier `tailwind.config.js` :
```js
theme: {
  extend: {
    colors: {
      primary: "...",
      // etc.
    }
  }
}
```

### Contenu
1. **Contact** : Mettre à jour email/téléphone dans :
   - `app/(marketing)/contact/page.tsx`
   - `components/block/footer-section-agence.tsx`

2. **À propos** : Personnaliser dans `app/(marketing)/about/page.tsx`

3. **Portfolio** : Remplacer projets fictifs dans `app/(marketing)/portfolio/page.tsx`

## 📋 TODO Avant Mise en Ligne

- [ ] Personnaliser infos de contact
- [ ] Ajouter vraie photo fondateur
- [ ] Configurer backend formulaires
- [ ] Créer pages légales (Mentions, RGPD)
- [ ] Google Analytics
- [ ] Optimiser images

Voir `FINAL-REPORT.md` pour la checklist complète.

## 🚢 Déploiement

### Vercel (Recommandé)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
netlify deploy --prod
```

## 📚 Documentation

- [PLAN-GEMONI.md](./PLAN-GEMONI.md) - Plan de développement
- [RECAPITULATIF-GEMONI.md](./RECAPITULATIF-GEMONI.md) - Récapitulatif complet
- [FINAL-REPORT.md](./FINAL-REPORT.md) - Rapport final et checklist

## 📞 Support

Pour toute question sur le code, consulter :
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Docs](https://ui.shadcn.com)

---

**Version** : 1.0  
**Status** : Production Ready  
**Créé** : 2026-01-30
