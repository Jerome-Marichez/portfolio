import { contact } from '@/contenu/contact'
import { profil } from '@/contenu/profil'

const RACINE = 'https://jeromemarichez.fr'

/**
 * Sujets declares dans `knowsAbout`. Limites a la stack revendiquee dans le
 * `README.md` (axes Full Stack, IA, QA, Data-Driven) : rien qui figure dans la
 * table des interdits de CLAUDE.md.
 */
const SUJETS = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Express',
  'OpenAPI',
  'Développement en IA augmentée piloté par les tests',
  'Tests de mutation',
  'ISTQB Foundation',
] as const

/** Un numéro national à dix chiffres devient « +33 » suivi de neuf chiffres, le format que lit un moteur. */
function versFormatInternational(telephone: string): string {
  return `+33${telephone.replace(/\s/g, '').replace(/^0/, '')}`
}

function versUrlAbsolue(adresse: string): string {
  return encodeURI(`https://${adresse}`)
}

/**
 * Le JSON-LD de l'accueil : un `ProfilePage` dont l'entite principale est la
 * personne. Chaque valeur est lue depuis `src/contenu/`, rien n'est recopie.
 */
export function construireProfilePage() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: profil.nom,
      jobTitle: profil.titre,
      url: RACINE,
      email: contact.email,
      telephone: versFormatInternational(contact.telephone),
      address: {
        '@type': 'PostalAddress',
        addressLocality: contact.localisation,
        addressRegion: 'Hauts-de-France',
        addressCountry: 'FR',
      },
      sameAs: [versUrlAbsolue(contact.linkedin), versUrlAbsolue(contact.github)],
      knowsAbout: [...SUJETS],
    },
  }
}

/**
 * Serialise pour l'injecter dans une balise `<script>` : `<` est echappe pour
 * qu'aucune valeur ne puisse fermer la balise ni en ouvrir une autre.
 */
export function serialiserJsonLd(donnees: unknown): string {
  return JSON.stringify(donnees).replace(/</g, '\\u003c')
}
