# Pratiques frontend

Principes transverses appliqués par l'agent `opus-frontend` (voir
[`model-routing.md`](./model-routing.md)). Neutres vis-à-vis de la stack : ils
valent que le projet soit sous Vite ou Next, avec ou sans Storybook. Un encart
« Exemple réel » en fin de page illustre une implémentation concrète, à titre
indicatif, **pas** normatif.

## État : serveur vs client

La décision frontend la plus structurante. Deux natures de données à ne jamais
confondre :

- **État serveur** : données distantes (listes, entités, réponses d'API). Géré par
  une couche de **cache/fetching** (SWR, React Query…) : dédup des requêtes,
  revalidation, invalidation. **Jamais recopié** dans un store global : la source
  de vérité reste le cache.
- **État client** : état d'interface (formulaire en cours, onglet actif, modale
  ouverte). État **local** au composant par défaut ; remonté dans un store partagé
  (Redux Toolkit, Zustand…) seulement s'il est réellement partagé entre plusieurs
  vues.

Règle : ne pas dupliquer une donnée serveur dans le state global « pour l'avoir
sous la main ». Toute mise en place ou refonte d'**architecture d'état global** est
une décision structurante → `ESCALATE` vers `opus-architect`.

## Logging

Pas de `console.*` dans le code applicatif : passer par un **service de log** dédié
(niveau, contexte, redirection possible). La règle Biome `noConsole` fait échouer le
lint ailleurs que dans ce service (voir [`tooling.md`](./tooling.md)).

## Style

Une **seule** stratégie de style par projet, décidée dans [`design.md`](./design.md)
(CSS Modules, styled/emotion, ou utilitaire type Tailwind), pas de mélange. Style
**co-localisé** avec le composant, approche **mobile-first**, valeurs tirées des
**tokens** de design (couleurs, espacements, typo) plutôt qu'en dur.

## Performance

- **Virtualiser** les longues listes et tableaux (ne pas monter 10 000 lignes).
- `memo` / `useMemo` / `useCallback` sur des rendus coûteux **mesurés**, jamais par
  réflexe.
- **Code-splitting / lazy-load** des vues et dépendances lourdes (éditeurs, graphes,
  export PDF…).
- Pas de micro-optimisation prématurée : mesurer (Profiler, Lighthouse) avant.

### LCP mobile de l'accueil (issue #192, 2026-10-04)

Mesure locale sur l'export, profil mobile du harnais `make budgets`, médiane de 5 passes.
Référence : performance 92, FCP 913 ms, LCP 3 313 ms.

- **Gardé : la tasse n'est plus `priority`.** Son PNG de 124 Kio était préchargé en haute
  priorité alors que l'élément LCP est un paragraphe : il disputait la bande passante au
  contenu. LCP 3 313 ms vers 3 157 ms (environ 150 à 300 ms selon la série), score 93.
- **Gardé : Fira Code sans la graisse 300**, qu'aucune règle CSS n'utilise (seules 400,
  500 et 600 servent). Neutre sur la mesure, un fichier de moins possible.
- **Écarté : `experimental.inlineCss`.** Compatible avec l'export statique, il ramène le
  FCP de 910 à 780 ms mais ne bouge pas le LCP (3 157 ms) : option expérimentale, HTML
  plus lourd à chaque page, gain non retenu.
- **Écarté : `display: 'optional'` sur Fira Code.** LCP inchangé (3 456 ms contre 3 307 ms
  en bruit de mesure) : le basculement de police n'est pas la cause. Aucun compromis
  visuel n'est donc pris.
- **Écarté : cible navigateur.** Next 16 cible déjà Chrome 111, Edge 111, Firefox 111 et
  Safari 16.4 par défaut. Le chunk de polyfills signalé est le script `noModule` de Next,
  jamais exécuté par un navigateur moderne.
- En conditions réelles sans bridage, le LCP est de 138 ms : l'écart de PageSpeed vient de
  la simulation du réseau, pas d'un blocage du rendu.

## Structure et nommage

- **Un dossier par composant** réutilisable : `Composant/index.tsx`, style
  co-localisé (`index.module.css` ou équivalent), et la story si Storybook est en
  place.
- Composants en `PascalCase` ; fonctions en anglais `camelCase`, verbe + nom
  (ex. `displayArrayData`, `formatPhoneNumber`).
- Logique métier hors des composants : dans `hooks/` (état/effets réutilisables) ou
  `services/` (appels, transformations pures).

## SVG : une largeur CSS ne dimensionne pas un `<svg>` imbriqué

Piège relevé en conditions réelles sur ce site (issue #102), à connaître avant de
construire le prochain visuel en SVG.

Un `<svg>` **racine dans du HTML** se dimensionne très bien en CSS : `width` et `height`
s'appliquent comme sur n'importe quelle boîte, et un jeton (`--taille-glyphe`) suffit à
tenir toute une série de marques.

Le même composant **imbriqué dans un autre `<svg>`** ignore cette largeur. L'élément
interne retombe sur sa valeur par défaut `100 %` du viewport parent, et son `viewBox` est
mis à l'échelle de la scène entière : mesuré ici **271 px de tracé au lieu de 33**, six
fois trop grand, dans une scène large de 457 px.

Règles :

- Dans un contexte imbriqué, la taille passe par les **attributs** `width` / `height`,
  seuls fiables, jamais par le CSS.
- Ne pas poser les deux « pour être sûr » : une règle CSS l'emporte sur un attribut de
  présentation, donc la taille demandée serait perdue précisément là où elle est la seule
  à fonctionner. Un composant servant dans les deux contextes expose une prop de taille
  optionnelle et **n'applique sa classe de dimensionnement CSS que lorsqu'elle est
  absente** (voir `PoleGlyph` et `SlabScene`).
- Une règle CSS rendue morte par ce choix (un `--taille-…` posé sur le parent imbriqué)
  se supprime : laissée en place, elle se lit comme la source de la taille et fera perdre
  une heure au prochain lecteur.

## Accessibilité et tests

L'a11y (WCAG 2.1 AA) est traitée dans [`accessibility.md`](./accessibility.md) et
**prime sur les défauts d'un template UI importé**. Chaque composant a des tests
unitaires (RTL) couvrant ses états significatifs ; en l'absence de Storybook, ces
tests tiennent lieu de catalogue d'états.

---

## Exemple réel : SmsEnMasse-FrontEnd

Illustration d'une stack de production appliquant ces principes (indicatif) :

| Principe | Implémentation |
|----------|----------------|
| État serveur | **SWR** (cache/revalidation des données d'API) |
| État client partagé | **Redux Toolkit** + `redux-state-sync` (multi-onglets) |
| Logging | `no-console` ESLint + **`LoggerService`** dédié |
| Tableaux virtualisés | **material-react-table** |
| Style | CSS Modules (`index.module.css`) + BEM, thème MUI |
| Structure | `src/@core/components/<Composant>/index.tsx` |
| Tests | **Jest + RTL** (unitaire) + **Cypress** (e2e) |

Ces choix sont propres à ce projet : sur un nouveau projet, retenir les **principes**
ci-dessus, pas nécessairement les mêmes bibliothèques.
