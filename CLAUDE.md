⚠️ Règle Design Stricte : Utilise UNIQUEMENT les variables sémantiques de Shadcn (bg-primary, bg-muted, text-card-foreground, border-input, etc.). N'utilise JAMAIS de couleurs Tailwind 'en dur' (comme slate-900, blue-600, gray-500) ni de codes Hex. Le design doit être entièrement contrôlable via le fichier globals.css.

📁 Organisation des Composants :
- `components/ui/` : Composants atomiques réutilisables (button, input, card, etc.)
- `components/block/` : Sections complètes de site (hero, footer, navbar, features, etc.)