# 🚀 FlowHire - Landing Page Moderne

> Landing page professionnelle pour FlowHire, solution RH d'automatisation du recrutement par IA.  
> **Projet académique** - My Digital School - Cours No Code / Vibe Coding

## ✨ Aperçu du Projet

Landing page moderne avec design dark inspiré d'Apple et Discord, featuring :
- ⚡ **Hero dynamique** avec compte à rebours V2 animé
- 🎨 **Dark Mode Premium** avec effets glassmorphism
- 💫 **Animations réseau** et effets néon flashy
- 🔵 **Lignes bleues animées** entre chaque section
- 📱 **100% Responsive** - Mobile-first design
- ⚙️ **Architecture SCSS modulaire** professionnelle

## 🎓 Contexte Académique

**École** : My Digital School  
**Cours** : No Code / Vibe Coding  
**Étudiant** : Maxence Badin Leger  
**Promotion** : 2025

### Objectifs pédagogiques atteints
- ✅ Architecture SCSS professionnelle et scalable
- ✅ Design system avec variables et mixins réutilisables
- ✅ Animations CSS avancées (keyframes, transforms, filters)
- ✅ UX/UI moderne avec glassmorphism et effets visuels
- ✅ JavaScript vanilla pour interactivité (countdown timer)
- ✅ Responsive design mobile-first
- ✅ Versionning Git et documentation complète

## 🎨 Features Design

### Effets Visuels Premium
- ✨ **Section Dividers** - Lignes bleues animées avec points lumineux voyageurs
- 🌐 **Network Patterns** - Motifs réseau pulsants (header & footer)
- 💎 **Glassmorphism** - backdrop-filter avec transparence
- 🔵 **Bleu Moderne** - Couleur primaire #0066ff vibrante
- 🌙 **Dark Theme** - Fond #1a1d29 élégant style Discord
- ⏰ **Countdown Live** - Compte à rebours V2 cliquable
- 💫 **Hover Effects** - Transformations, glow, shine sur interactions

### Sections de la Landing Page
1. **Header** - Navigation avec effets réseau et shimmer
2. **Hero** - Titre + compteur V2 + CTAs
3. **Problem** - Cards problématiques avec effets shine
4. **Solution** - Cartes solutions avec hover 3D
5. **Features V1** - Fonctionnalités disponibles (6 features)
6. **Features V2** - Roadmap future (6 features avancées)
7. **CTA Final** - Call-to-action avec gradient radial
8. **Footer** - Multi-colonnes avec mesh pattern animé

## 📁 Structure du Projet

```
FlowHire/
├── index.html                          # Page HTML principale
├── scripts/
│   └── countdown.js                   # Timer compte à rebours V2
├── styles/                             # Source SCSS modulaire
│   ├── main.scss                      # Point d'entrée SCSS
│   ├── abstracts/                     # Configuration
│   │   ├── variables.module.scss     # Variables (couleurs, spacing, etc.)
│   │   ├── mixins.module.scss        # Mixins réutilisables
│   │   └── functions.module.scss     # Fonctions utilitaires
│   ├── base/                          # Fondations
│   │   ├── reset.module.scss         # Reset CSS
│   │   ├── typography.module.scss    # Typographie
│   │   └── utilities.module.scss     # Classes utilitaires
│   ├── components/                    # Composants
│   │   ├── buttons.module.scss       # Boutons avec variantes
│   │   ├── cards.module.scss         # Cartes de contenu
│   │   ├── icons.module.scss         # Icônes
│   │   └── section-divider.module.scss # Lignes séparation animées
│   └── layout/                        # Structure
│       ├── header.module.scss        # Header avec network pattern
│       ├── hero.module.scss          # Hero + countdown
│       ├── problem.module.scss       # Section problèmes
│       ├── solution.module.scss      # Section solution
│       ├── features.module.scss      # Features V1/V2
│       ├── countdown.module.scss     # Styles countdown (legacy)
│       ├── cta.module.scss           # CTA final
│       ├── footer.module.scss        # Footer avec mesh
│       ├── container.module.scss     # Conteneurs
│       └── section.module.scss       # Sections génériques
├── dist/                              # CSS compilé
│   └── main.css                      # Généré automatiquement
└── README.md                          # Documentation
```

## 🚀 Installation et compilation

### Option 1 : Sass CLI (recommandé)

```bash
# Installer Sass globalement
npm install -g sass

# Compiler une fois
sass styles/main.scss dist/main.css

# Mode watch (recompile automatiquement)
sass --watch styles/main.scss:dist/main.css

# Mode production (minifié)
sass styles/main.scss dist/main.css --style compressed
```

### Option 2 : VS Code Extension

1. Installer l'extension **Live Sass Compiler**
2. Ouvrir les paramètres de l'extension
3. Configurer :
   ```json
   {
     "liveSassCompile.settings.formats": [
       {
         "format": "expanded",
         "extensionName": ".css",
         "savePath": "/dist"
       }
     ],
     "liveSassCompile.settings.generateMap": false
   }
   ```
4. Cliquer sur "Watch Sass" dans la barre d'état

### Option 3 : NPM Scripts

```bash
# Initialiser package.json
npm init -y

# Installer Sass en dev
npm install --save-dev sass

# Ajouter dans package.json :
{
  "scripts": {
    "sass": "sass styles/main.scss dist/main.css",
    "sass:watch": "sass --watch styles/main.scss:dist/main.css",
    "sass:build": "sass styles/main.scss dist/main.css --style compressed"
  }
}

# Compiler
npm run sass

# Mode watch
npm run sass:watch

# Build production
npm run sass:build
```

## 🎨 Architecture SCSS

### Abstracts
- **Variables** : Couleurs, tailles, espacements, breakpoints
- **Mixins** : Fonctions réutilisables (flex, grid, gradients, animations)
- **Functions** : Utilitaires de calcul (rem, em, spacing)

### Base
- **Reset** : Normalisation CSS
- **Typography** : Styles de texte et titres
- **Utilities** : Classes utilitaires (display, position, width, etc.)

### Components
- **Buttons** : Styles de boutons (primary, secondary, outline, solid)
- **Cards** : Cartes de contenu
- **Icons** : Styles d'icônes

### Layout
- **Container** : Conteneurs de page
- **Section** : Sections génériques
- **Hero** : Section hero
- **Problem** : Section problèmes
- **Solution** : Section solution
- **Features** : Section fonctionnalités
- **CTA** : Call-to-action final

## 🎯 Utilisation

### Modifier les couleurs

Éditez `styles/abstracts/variables.module.scss` :

```scss
$primary: #2563eb;      // Couleur principale
$primary-dark: #1e40af; // Couleur principale foncée
$dark: #0f172a;         // Texte foncé
```

### Ajouter un nouveau composant

1. Créez `styles/components/mon-composant.module.scss`
2. Importez dans `styles/main.scss` :
   ```scss
   @import 'components/mon-composant';
   ```

### Utiliser les mixins

```scss
.ma-classe {
  @include flex-center;
  @include hover-lift;
  @include gradient-bg;
}
```

## 📱 Responsive

Breakpoints disponibles :
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

Utilisation :

```scss
.element {
  font-size: 1rem;
  
  @include respond-to(md) {
    font-size: 1.5rem;
  }
  
  @include mobile-only {
    padding: 1rem;
  }
  
  @include desktop-up {
    padding: 2rem;
  }
}
```

## 🛠️ Maintenance

- **Toujours** modifier les fichiers `.module.scss`, jamais le CSS compilé
- Compiler après chaque modification
- Utiliser le mode `--watch` pendant le développement
- Minifier pour la production (`--style compressed`)
- Tous les modules utilisent le suffix `.module.scss` pour une meilleure organisation

## 📝 Notes

- Le fichier `dist/main.css` est généré automatiquement, ne pas le modifier
- Ajouter `dist/` dans `.gitignore` si vous utilisez un build process
- Convention de nommage : `nomfichier.module.scss` pour tous les modules
- Organiser les nouveaux composants par responsabilité
