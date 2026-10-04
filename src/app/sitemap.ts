import type { MetadataRoute } from 'next'
import { articles } from '@/contenu/blog'
import { navigation } from '@/contenu/navigation'

const RACINE = 'https://jeromemarichez.fr'

/**
 * Le plan du site, derive de la navigation : une route ajoutee au menu y entre
 * automatiquement. Une liste tenue a la main finirait par mentir.
 *
 * Les URL portent la barre finale parce que `trailingSlash` est actif dans
 * `next.config.mjs` : le plan du site et la balise canonique doivent designer
 * exactement la meme adresse, sinon le moteur voit deux pages la ou il y en a une.
 */
/**
 * `output: 'export'` exige que cette route se declare statique explicitement :
 * Next refuse de collecter une route de metadonnees sans savoir si elle doit etre
 * rejouee a chaque requete. Sur un site sans donnees changeantes, la reponse est
 * toujours la meme, donc on la fige au build.
 */
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const dateDeSortie = new Date()

  const pages: MetadataRoute.Sitemap = navigation.map((entree) => ({
    url: `${RACINE}${entree.href}`,
    lastModified: dateDeSortie,
    changeFrequency: 'monthly',
    priority: entree.href === '/' ? 1 : 0.7,
  }))

  // Les articles ne sont pas dans la navigation (elle ne pointe que vers la liste) :
  // sans cette boucle, le moteur ne les decouvrirait que par les liens internes.
  const pagesArticles: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${RACINE}/blog/${article.slug}/`,
    lastModified: new Date(article.datePublication),
    changeFrequency: 'yearly',
    priority: 0.6,
  }))

  return [...pages, ...pagesArticles]
}
