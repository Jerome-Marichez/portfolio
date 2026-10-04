/**
 * @jest-environment node
 *
 * Intention : le plan du site couvre toutes les routes de navigation ET tous les
 * articles du blog (issue #193), avec la barre finale que `trailingSlash` impose.
 * Cas limites : un article ajoute au contenu entre sans autre modification ; la
 * date de l article sert de lastModified. Niveau : unitaire, contenu reel.
 * Test ecrit par l'assistant sur delegation de Jerome MARICHEZ en session,
 * 2026-10-04 (issue #193).
 */
import sitemap from '@/app/sitemap'
import { articles } from '@/contenu/blog'
import { navigation } from '@/contenu/navigation'

const plan = sitemap()
const urls = plan.map((entree) => entree.url)

describe('sitemap', () => {
  it('contient chaque route de navigation', () => {
    for (const entree of navigation) {
      expect(urls).toContain(`https://jeromemarichez.fr${entree.href}`)
    }
  })

  it('contient chaque article du blog', () => {
    for (const article of articles) {
      expect(urls).toContain(`https://jeromemarichez.fr/blog/${article.slug}/`)
    }
  })

  it('termine toutes les URL par une barre', () => {
    for (const url of urls) {
      expect(url.endsWith('/')).toBe(true)
    }
  })

  it('date chaque article par sa date de publication', () => {
    for (const article of articles) {
      const entree = plan.find((e) => e.url.endsWith(`/blog/${article.slug}/`))
      expect(entree?.lastModified).toEqual(new Date(article.datePublication))
    }
  })

  it('ne repete aucune URL', () => {
    expect(new Set(urls).size).toBe(urls.length)
  })
})
