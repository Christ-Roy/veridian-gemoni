# Plan de Développement - Site Agence Web Gemoni

## 🎯 Objectif
Transformer le site en une vitrine d'agence web professionnelle selon les recommandations de `todogemoni.md`

## 📦 Composants à créer/utiliser

### 1. Page d'Accueil (`/`)
**Composants existants à adapter** :
- ✅ Hero animé (animated-hero.tsx)
- ✅ Logo section
- ✅ Timeline

**Nouveaux composants** :
- [ ] Stats cards (clients, projets, satisfaction)
- [ ] CTA Section moderne
- [ ] Témoignages carousel

### 2. Page Services (`/services`)
**Composants à créer** :
- [ ] Pricing cards (3 packages : Présence, Croissance, E-commerce)
- [ ] Process timeline (Brief → Design → Dev → Launch)
- [ ] Features comparison table
- [ ] CTA "Demander un devis"

**Inspiration** :
- Aceternity UI pricing
- shadcn/ui cards
- Vertical timeline avec icons

### 3. Page À Propos (`/about`)
**Composants à créer** :
- [ ] Hero personnel avec photo
- [ ] Story section (Pourquoi cette agence ?)
- [ ] Philosophie/Valeurs cards
- [ ] Tech stack grid (WordPress, Webflow, Shopify, etc.)
- [ ] Stats/achievements

### 4. Page Portfolio (`/portfolio`)
**Composants à créer** :
- [ ] Project grid avec hover effects
- [ ] Case study cards (détaillées)
- [ ] Before/After slider
- [ ] Tags filtres (E-commerce, Vitrine, Refonte)
- [ ] Modal pour détails projet

**Projets fictifs** :
1. Pizzeria locale
2. Coiffeur
3. Coach sportif
4. Agent immobilier

### 5. Page Contact (`/contact`)
**Composants à créer** :
- [ ] Contact form (Nom, Email, Type projet, Budget, Message)
- [ ] Calendly embed (placeholder)
- [ ] Contact info cards
- [ ] Map (optionnel)

**shadcn utilisé** :
- ✅ form
- ✅ input
- ✅ textarea

### 6. Page Tarifs (`/pricing`)
**Composants à créer** :
- [ ] Pricing table détaillée (3 colonnes)
- [ ] Features comparison
- [ ] FAQ pricing
- [ ] CTA custom quote

**Transparence** :
- Pack Présence : 800-1500€
- Pack Croissance : 2000-3500€
- Pack E-commerce : 3500-6000€

### 7. Page Maintenance (`/maintenance`)
**Composants à créer** :
- [ ] Subscription pricing card
- [ ] Features list avec icons
- [ ] Comparison (Avec/Sans maintenance)
- [ ] CTA abonnement

**Offre** :
- 50€/mois : Mises à jour + sauvegardes + petits changements

### 8. Page FAQ (`/faq`)
**Composants utilisés** :
- ✅ Accordion (déjà installé)

**Composants à créer** :
- [ ] Search bar pour FAQ
- [ ] Catégories (Général, Technique, Tarifs, Maintenance)
- [ ] CTA "Toujours des questions ?"

**Questions clés** :
- Le site m'appartient-il à 100% ?
- Combien de temps ça prend ?
- Et si je veux changer une image plus tard ?
- Pourquoi pas WordPress/Wix ?

### 9. Page Audit (`/audit`)
**Composants à créer** :
- [ ] Lead capture form (URL site)
- [ ] Benefits list
- [ ] Trust badges
- [ ] Samples d'audits

**CTA** : "Audit vidéo gratuit en 48h"

## 🎨 Composants UI à rechercher/créer

### Priorité 1 (Essentiel)
- [ ] Pricing card component (réutilisable)
- [ ] Feature card avec icon
- [ ] Testimonial card
- [ ] Process step component
- [ ] Project card (portfolio)

### Priorité 2 (Nice to have)
- [ ] Stats counter animé
- [ ] Bento grid
- [ ] Marquee logos
- [ ] Animated gradient background
- [ ] Hover cards

### Priorité 3 (Bonus)
- [ ] Before/After slider
- [ ] Video embed
- [ ] Lightbox gallery
- [ ] Parallax sections

## 📝 Contenu à rédiger

### Copy général
- [ ] Value proposition principale
- [ ] Unfair advantage (réactivité, prix, attention)
- [ ] Process en 4 étapes
- [ ] Témoignages (fictifs au début)

### Projets Portfolio (Fictifs)
1. **La Bella Pizza**
   - Problème : Pas de commande en ligne
   - Solution : Site avec réservation intégrée
   - Résultats : +40% de commandes

2. **Coiffure Élégance**
   - Problème : Site obsolète, pas mobile
   - Solution : Refonte moderne + booking
   - Résultats : +60% de prises RDV

3. **Coach Paul Fitness**
   - Problème : Pas de présence en ligne
   - Solution : Landing page + blog
   - Résultats : 200 leads en 3 mois

4. **Immobilier Prestige**
   - Problème : Gestion manuelle annonces
   - Solution : Site avec CMS custom
   - Résultats : -70% temps de gestion

## 🚀 Ordre d'implémentation

### Phase 1 : Fondations (Aujourd'hui)
1. ✅ Installer composants shadcn (accordion, form)
2. [ ] Créer composants réutilisables (pricing-card, feature-card)
3. [ ] Adapter page d'accueil

### Phase 2 : Pages Core
4. [ ] Page Services
5. [ ] Page À propos
6. [ ] Page Portfolio
7. [ ] Page Contact

### Phase 3 : Pages Support
8. [ ] Page Tarifs
9. [ ] Page FAQ
10. [ ] Page Maintenance
11. [ ] Page Audit

### Phase 4 : Polish
12. [ ] Animations
13. [ ] SEO metadata
14. [ ] Images optimisées
15. [ ] Mobile responsive check

## 🎨 Resources pour composants

### Sites à explorer
- https://ui.aceternity.com/components
- https://ui.shadcn.com/blocks
- https://magicui.design/docs
- https://ui.ibelick.com/
- https://craft.mxkaske.dev/

### Commandes npx utiles
```bash
npx shadcn@latest add <component>
```

### Composants Aceternity à reproduire
- Hero Parallax (déjà présent)
- Timeline (déjà présent)
- Bento Grid
- 3D Card Effect
- Text Reveal

## ✅ Checklist finale

### Technique
- [ ] Mobile responsive sur toutes les pages
- [ ] Dark mode support
- [ ] Performance (Lighthouse > 90)
- [ ] SEO metadata complet
- [ ] Forms avec validation
- [ ] Loading states

### Contenu
- [ ] Tous les textes en français
- [ ] Calls-to-action clairs
- [ ] Images optimisées (WebP)
- [ ] Alt text sur images

### Legal
- [ ] Mentions légales
- [ ] Politique confidentialité (RGPD)
- [ ] CGV si e-commerce

---

**Note** : Ce plan suit strictement les recommandations de `/home/ubuntu/clawd/veridian/todogemoni.md`
