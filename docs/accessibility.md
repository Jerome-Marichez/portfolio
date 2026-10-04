# Accessibilité

## Objectif

Conformité **WCAG 2.2 AA** sur toutes les pages du site, pas seulement sur les parcours
principaux : les couvrir toutes coûte moins cher que de choisir lesquelles sacrifier.

**Le plancher d'accessibilité est à 95 et ne bouge pas**, là où celui de la performance a
été abaissé à 80. Une performance tolérée à 82 n'excuse aucune régression
d'accessibilité.

> Ces règles **priment sur les défauts d'un template UI importé** : un thème du
> commerce qui désactive des règles a11y ou pose des `div` cliquables doit être
> corrigé, pas suivi.

## Règles pour le front React

- HTML **sémantique** d'abord (`nav`, `main`, `button`…) ; ARIA seulement en complément.
- **Navigation clavier** complète : focus visible, ordre logique, pas de piège de focus.
- **Formulaires** : chaque champ a un `label` associé ; erreurs annoncées (`aria-live`).
- **Contrastes** : ratio ≥ 4.5:1 pour le texte courant. Les valeurs de la palette sont
  mesurées et tabulées dans [`design.md`](./design.md). Un seul jeton y est déclaré
  **non-texte uniquement**, `--cafe-sourd` : il sert aux filets et aux arêtes, jamais à
  un mot.
- **La couleur n'est jamais le seul porteur d'information** (WCAG 1.4.1). Le site n'a
  qu'une teinte d'accent, donc aucune information n'est encodée par une couleur parmi
  plusieurs. L'onglet ouvert de l'en-tête le montre bien : il porte à la fois un filet,
  un changement de fond et `aria-current="page"`, et pas seulement la couleur café.
- **Le menu mobile est une navigation, pas une modale.** Sous `52rem`, le logo est un
  `button` (`aria-expanded`, `aria-controls`). Pas de piège de focus : Échap ferme le
  panneau et rend le focus au logo, un clic sur un lien ou un changement de route le
  ferme aussi. Fermé, le panneau est `hidden` : ni visible ni focusable. Cibles tactiles
  d'au moins 44 px. Le hamburger placé à côté du `JM` est un `svg` `aria-hidden="true"` :
  le nom (« JM, menu », qui commence par le texte visible, WCAG 2.5.3) et l'état (`aria-expanded`) restent portés par le
  bouton, l'icône n'est qu'un indice visuel, jamais le seul porteur d'information.
- **Images** : `alt` pertinent, ou `alt=""` si décorative. Le mug est un `svg`
  décoratif par défaut (`role="presentation"` et `aria-hidden`), et il ne devient une
  image nommée que si on lui passe une description.
- **Un seul thème, sombre.** Ce n'est pas un manquement d'accessibilité mais un choix
  documenté (voir [`design.md`](./design.md)), et il a un revers qui se dit : un visiteur
  qui préfère un fond clair n'a pas de variante. Les contrastes sur fond sombre sont donc
  vérifiés sans indulgence, et ils sont tous au delà du seuil.
- **Le mouvement s'arrête de deux façons.** `prefers-reduced-motion` couvre le visiteur
  qui a réglé son système ; un bouton explicite dans le pied de page couvre celui qui ne
  l'a pas fait. C'est WCAG 2.2.2, et sur un site dont la signature est animée ce n'est
  pas une option.

## Checklist par composant

- [ ] Élément interactif = vrai `button` / `a` (jamais un `div` avec `onClick` seul).
- [ ] Accessible et actionnable au **clavier** (Tab, Entrée/Espace) ; focus visible.
- [ ] Champs de formulaire reliés à un `label` (`htmlFor`/`id`) ; erreur en `aria-live`.
- [ ] Icône seule → `aria-label` ; image décorative → `alt=""`.
- [ ] Contraste texte/fond ≥ 4.5:1 (≥ 3:1 pour le grand texte).
- [ ] État dynamique (chargement, ouverture) annoncé (`aria-busy`, `aria-expanded`).

## Vérification

Trois niveaux, et il est important de ne pas les confondre :

1. **Lint** : règles a11y de Biome, à l'écriture. Attrape les fautes de balisage
   évidentes (`div` cliquable, `alt` manquant) avant même le build.
2. **Contrôle automatisé** avec `make budget-a11y` : axe-core (Deque) sur les pages
   représentatives, dans un vrai navigateur. Une violation d'impact `critical` ou
   `serious` fait **échouer** le contrôle, et il tourne sur **chaque PR vers `dev`**
   (`ci-dev-a11y`).
3. **Audit manuel** : clavier et lecteur d'écran sur les parcours critiques. **Rien ne
   le remplace.**

### Ce que le contrôle automatique ne dit pas

axe-core ne détecte que la part **mécanisable** de WCAG : Deque annonce environ 57 % des
problèmes sur ses propres jeux de mesure, la pratique retient plutôt un tiers. Un
`make budget-a11y` vert ne signifie **pas** que le site est conforme RGAA, et le site ne
doit nulle part le laisser entendre : ce serait exactement le genre d'affirmation sans
preuve que le `CLAUDE.md` s'interdit.

Restent hors de portée d'axe, et donc à la charge de l'audit manuel :

- la **pertinence** d'une alternative textuelle, d'un intitulé de lien, d'un titre ;
- l'**ordre de lecture** et la cohérence de la hiérarchie de titres ;
- l'utilisabilité réelle **au clavier** d'un composant riche (piège de focus, raccourci) ;
- le **focus visible** en conditions réelles : axe ne juge pas la visibilité d'un
  contour ;
- `prefers-reduced-motion` : axe ne le teste pas. Le respect de la préférence est vérifié
  à la main sur la scène d'accueil ;
- **WCAG 2.2.2 (Pause, Stop, Hide)** : le mécanisme de mise en pause des animations. Un
  contrôle automatique ne sait pas dire si l'utilisateur peut réellement arrêter le
  mouvement ; c'est un point d'audit manuel explicite sur ce site ;
- les **contrastes** au-delà du cas simple texte sur fond uni : les seize valeurs de la
  palette des pôles sont mesurées à la main dans [`design.md`](./design.md), et
  `--accent-vif` y est déclaré **non-texte uniquement**. axe ne peut pas connaître cette
  intention.

### Les pages contrôlées

**Neuf pages**, sans exception : `/`, `/a-propos/`, `/parcours/`, `/projets/`,
`/competences/`, `/contact/`, `/blog/`, un article du blog, plus la **404**
(`/page-inexistante/`). Les huit premières vivent dans
[`scripts/budgets/pages.mjs`](../scripts/budgets/pages.mjs), partagées avec les budgets de
performance. La 404 (`PAGES_AXE_SEUL`) est contrôlée par axe **seulement** : servie en
statut 404 et en `noindex`, elle échouerait au SEO de Lighthouse pour une raison voulue.
Elle ne contourne aucun seuil, elle garde le contrôle d'accessibilité complet.

**Chaque page est mesurée à deux tailles**, 800 x 600 et 1440 x 900. À 800 px la barre
d'onglets de l'en-tête est masquée au profit du menu mobile : un contraste défaillant dans
cette barre échappait au contrôle (issue #56).

### Corrigé après l'audit du train 1.4.0 (issue #56)

Audit mené dans Chromium avec axe-core, à 1440 x 900 et 390 x 844. Aucun défaut bloquant,
cinq majeurs et trois mineurs, tous corrigés.

| Réf. | Défaut | Correction |
|------|--------|------------|
| M1 | Nom de fichier de l'en-tête à 4,45:1 sur `--fond-releve` | `--encre-douce` (au moins 7:1), en-tête et panneau mobile ; contrôle axe élargi à 1440 x 900 |
| M2 | Le menu mobile ouvrait la page défilée vers le bas | `scroll-padding-top` égal à la hauteur réelle de l'en-tête sous `52rem` |
| M3 | Titre et intitulé de l'accueil coupés par l'espacement WCAG 1.4.12 | Retour à la ligne permis entre les mots, une ligne sans cet espacement |
| M4 | Nom accessible du logo sans « JM » (WCAG 2.5.3) | « JM, menu » et « JM, Jérôme Marichez, accueil » |
| M5 | 404 par défaut de Next, en anglais | `not-found.tsx` en français, `noindex`, contrôlée par axe |
| m1 | Pause du mouvement : libellé et `aria-pressed` encodaient l'état deux fois | Libellé fixe, `aria-pressed` seul |
| m3 | Logo Prézage annoncé « Voir le site » | « Voir l'application Prézage sur Google Play » |
| m6 | `main#contenu` sans `tabindex` | `tabIndex={-1}`, sans contour sur `main` |

### Le relevé du 2026-09-20

Première exécution sur le site CV, après la table rase.

| Page | axe-core (bloquantes) | axe-core (mineures et modérées) | Lighthouse a11y |
|------|----------------------|--------------------------------|-----------------|
| `/` | 0 | 0 | 100 |
| `/a-propos/` | 0 | 0 | 100 |
| `/parcours/` | 0 | 0 | 100 |
| `/projets/` | 0 | 0 | 100 |
| `/competences/` | 0 | 0 | 100 |
| `/contact/` | 0 | 0 | 100 |

**Ce relevé n'a pas été vert du premier coup, et c'est l'information utile.** Le test de
fumée e2e, réécrit le même jour, a trouvé deux pages sans aucun `h1` : `/projets/` et
`/contact/` utilisaient `TitreSection`, qui rend un `h2`. Elles s'affichaient
normalement, et étaient pourtant cassées pour un lecteur d'écran comme pour un moteur.

La correction en a produit une seconde : en posant le `h1`, les entrées restées en `h3`
faisaient sauter le niveau `h2`, ce qu'axe a signalé en `moderate` sur deux pages
(`heading-order`). Les noms d'entreprise et les titres de fiche sont donc passés en `h2`.

Deux enseignements, notés parce qu'ils se reproduiront :

1. **Un composant de titre de section n'est pas un titre de page.** `TitreSection` rend un
   `h2` ou un `h3` et porte un marqueur `//` pensé pour une sous-section. Une page a
   besoin d'un `h1`, et aucun composant ne le fournit : il s'écrit dans la vue.
2. **Un défaut de hiérarchie de titres ne se voit pas à l'écran.** C'est exactement la
   classe de défaut qu'un contrôle automatique attrape et qu'une relecture visuelle
   laisse passer.

### Ce qui reste à faire à la main

Le vert d'axe-core ne dispense d'aucune de ces vérifications, et aucune n'a encore été
menée sur le site CV :

| Vérification | État |
|--------------|------|
| Clavier complet sur toutes les pages, de l'évitement au pied de page | à réaliser |
| Lecteur d'écran sur toutes les pages | à réaliser |
| WCAG 2.2.2 : le bouton de pause arrête réellement le café qui tourne dans la tasse | à réaliser |
| `prefers-reduced-motion` : les trois composants animés respectent la préférence | à réaliser |
| Pertinence des intitulés de liens, notamment ceux du pied de page | à réaliser |
| La densité du mur de stack reste lisible en zoom 200 % | à réaliser |

**Le site ne doit nulle part laisser entendre qu'il est conforme RGAA.** Un audit RGAA
est une démarche formelle, et ce dépôt n'en porte pas. Ce qu'il porte est un contrôle
automatisé bloquant sur chaque PR, plus cette liste honnête de ce qu'il ne couvre pas.

## Divulgation progressive

Le composant `EnSavoirPlus` s'appuie sur `<details>` et `<summary>` natifs : l'état ouvert
ou fermé, le clavier (Entrée et Espace) et l'annonce par les lecteurs d'écran viennent du
navigateur, sans `aria-expanded` ni gestionnaire à maintenir. Le contenu replié reste dans
le DOM : il est indexé, trouvable par Ctrl+F (le navigateur ouvre le repli), imprimé et
lisible sans JavaScript. Le résumé offre une cible d'au moins 44 px et le focus visible
global du site. Le chevron est un SVG `aria-hidden` : le libellé porte seul le sens. La
rotation est coupée sous `prefers-reduced-motion` et `data-mouvement="pause"`.
