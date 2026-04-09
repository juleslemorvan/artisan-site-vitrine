# CLAUDE.md — Template générique site vitrine artisan

# Stack : Next.js + Tailwind + Framer Motion + Vercel + Resend

# ──────────────────────────────────────────────────────────────

# COMMENT UTILISER CE FICHIER :

# 1. Copie ce fichier à la racine de chaque nouveau projet

# 2. Remplis la section "Configuration projet" ci-dessous

# 3. Suis les étapes du workflow dans l'ordre

# 4. Commente ou supprime les sections optionnelles non utilisées

# ──────────────────────────────────────────────────────────────

---

## Configuration projet

| Champ                | Valeur                                     |
| -------------------- | ------------------------------------------ |
| Nom du professionnel | Thomas Renard                              |
| Nom commercial       | Renard Rénovation                          |
| Métier / Activité    | Maçon, Carreleur, Électricien              |
| Ville principale     | Lyon 7e                                    |
| Département          | Rhône (69)                                 |
| Zone d'intervention  | Lyon, Villeurbanne, Bron, Vénissieux, Caluire |
| Téléphone            | 06 47 23 85 91                             |
| Email professionnel  | contact@renard-renovation.fr               |
| Adresse              | 18 rue Garibaldi, 69007 Lyon               |
| Horaires             | Lun–Ven 8h–18h, Sam 9h–12h                |
| SIRET                | 842 156 973 00024                          |
| Certifications       | Qualibat 2111, Artisan de confiance        |

---

## Brief client

### Identité & positionnement

- [x] 3 services principaux : Maçonnerie, Carrelage, Électricité
- [x] Argument différenciant : multi-compétences, un seul interlocuteur pour tout le chantier
- [x] Depuis 2009 (17 ans d'expérience)
- [x] Certifications : Qualibat 2111, Artisan de confiance depuis 2016, Garantie décennale

### Contenu textuel

- [x] Textes rédigés (contenu fictif réaliste)
- [x] 4 avis clients fictifs inclus
- [x] FAQ incluse (6 questions)

---

## Workflow de création — étapes dans l'ordre

### Étape 1 — Initialisation du projet

```bash
npx create-next-app@latest nom-du-projet --typescript --tailwind --app --src-dir=false
cd nom-du-projet
npm install framer-motion resend
```

> **Invoquer le skill `/vitrine-nextjs`** pour générer la structure de base.

### Étape 2 — Configuration Tailwind

```ts
// tailwind.config.ts
colors: {
  accent: { DEFAULT: '#FFA500', hover: '#FF8C00' },
  surface: { DEFAULT: '#131313', elevated: '#1C1C1C' },
}
```

### Étape 3 — Développement des sections

Ordre : Header → Hero → Services → About → Gallery → Testimonials → FAQ → Contact → Footer.

> **Invoquer le skill `/frontend-design`** pour chaque section.
> **Invoquer le skill `/vercel-react-best-practices`** pendant le développement.

### Étape 4 — SEO & métadonnées

> **Invoquer le skill `/seo-nextjs`** pour metadata, sitemap, JSON-LD.

### Étape 5 — Checklist avant livraison

> **Invoquer le skill `/web-design-guidelines`** pour l'audit final.

---

## Stack & Outils

- **Framework** : Next.js (App Router), TypeScript souple (pas de `any` intentionnel)
- **Styling** : Tailwind CSS exclusivement — pas de CSS inline, pas de styled-components
- **Animations** : Framer Motion (scroll, entrées de sections) + Tailwind (micro-interactions hover/focus)
- **Déploiement** : Vercel
- **Formulaires de contact** : Resend (API Route Next.js)
- **Images** : toujours `next/image`, format `.webp` privilégié, jamais de `<img>` nu
- **Polices** : toujours `next/font/google` — jamais d'import CSS externe

---

## Structure de projet standard

```
app/
  layout.tsx              ← metadata globale, fonts, JSON-LD global
  page.tsx                ← home
  maconnerie/page.tsx     ← page service dédiée
  carrelage/page.tsx
  electricite/page.tsx
  mentions-legales/page.tsx
  politique-confidentialite/page.tsx
  api/contact/route.ts    ← API Route Resend
  sitemap.ts
components/
  sections/               ← Hero, Services, About, Gallery, Testimonials, FAQ, ContactForm, Footer
  ui/                     ← Button, SectionWrapper, SectionTitle
  layout/                 ← Header
lib/
  metadata.ts             ← generatePageMetadata helper
  schema.ts               ← JSON-LD LocalBusiness
public/
  images/                 ← assets (logo.png, logo.svg, *.webp)
  robots.txt
```

---

## Conventions de code

- Composants en **PascalCase**, fichiers en **kebab-case**
- Un composant = un fichier, max ~150 lignes (découper si besoin)
- Props toujours typées avec une interface explicite
- Pas de logique métier dans les composants de présentation
- Préférer les **Server Components** par défaut, `'use client'` uniquement si nécessaire
- `next/link` pour toute navigation interne

---

## Animations — patterns Framer Motion

```tsx
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
```

- Toujours `viewport={{ once: true }}` sur les animations au scroll
- Pas d'animation above-the-fold (hero text, CTA)

---

## SEO — priorité absolue

```tsx
export const metadata: Metadata = {
  title: "<Métier> à <Ville> — Renard Rénovation",
  description: "<150-160 caractères, inclure ville + département>",
  openGraph: { ... },
};
```

Fichiers obligatoires : `app/sitemap.ts`, `public/robots.txt`, JSON-LD LocalBusiness dans layout.

---

## Ce qu'il ne faut jamais générer

- `<img>` sans `next/image`
- `any` TypeScript sans commentaire justificatif
- Couleurs hardcodées hors de `tailwind.config.ts`
- Page sans export `metadata`
- Formulaire sans validation côté serveur
- Import de police via CDN CSS externe
- Animation Framer Motion sans `viewport={{ once: true }}`

---

## Checklist avant livraison Vercel

**Contenu & SEO**
- [ ] `metadata` sur toutes les pages
- [ ] `sitemap.ts` accessible sur `/sitemap.xml`
- [ ] `robots.txt` présent
- [ ] JSON-LD LocalBusiness sur la home
- [ ] Un seul `<h1>` par page
- [ ] Toutes les images ont un `alt` descriptif
- [ ] NAP dans le Footer

**Technique**
- [ ] `RESEND_API_KEY` dans Vercel env vars
- [ ] Domaine custom configuré dans Vercel
- [ ] Validation côté serveur sur le formulaire
- [ ] `priority` sur l'image hero

**UX & Responsive**
- [ ] Test mobile (sm / md / lg)
- [ ] CTA visible sans scroll sur mobile
- [ ] Formulaire testé (envoi réel)
- [ ] `prefers-reduced-motion` respecté

**Légal**
- [ ] Page Mentions légales
- [ ] Page Politique de confidentialité
- [ ] Liens dans le Footer
