/*
 * Intention : la barre d'actions (issue #43) met trois gestes a portee du
 * recruteur, en tete et en fin de page : telecharger le CV, ecrire, appeler. La
 * moitie des visiteurs ne defile pas et un cinquieme seulement va au bout, donc
 * la barre ne peut pas dependre de la position de lecture.
 *
 * Cas couverts :
 * - BarreActions rend trois liens : le PDF (primaire, attribut `download`),
 *   `mailto:` et `tel:` (prefixe international, sans espaces).
 * - La variante `tete` n'a pas de titre ; la variante `fin` rend « Me joindre ».
 * - Chacune des six vues (A propos, Parcours, Projets, Competences, Blog, Article)
 *   rend la barre deux fois, la premiere avant le premier contenu de lecture.
 * - L'accueil rend la barre et garde un lien vers `/parcours/`.
 * - Contact rend le lien PDF.
 * Pas de mock : les vraies donnees de `src/contenu`. Niveau : unitaire.
 *
 * Test ecrit par l'assistant sur delegation de Jerome MARICHEZ en session
 * (2026-10-04, issue #43).
 */
import { render, screen } from '@testing-library/react'
import { BarreActions } from '@/components/BarreActions'
import { articles } from '@/contenu/blog'
import { contact } from '@/contenu/contact'
import type { IArticle } from '@/interfaces/IArticle'
import { AccueilView } from '@/views/AccueilView'
import { AProposView } from '@/views/AProposView'
import { ArticleView } from '@/views/ArticleView'
import { BlogView } from '@/views/BlogView'
import { CompetencesView } from '@/views/CompetencesView'
import { ContactView } from '@/views/ContactView'
import { ParcoursView } from '@/views/ParcoursView'
import { ProjetsView } from '@/views/ProjetsView'

const LIBELLE_CV = 'Télécharger le CV (PDF)'

describe('BarreActions', () => {
  it('rend les trois liens avec leur href', () => {
    render(<BarreActions variante="tete" />)
    const cv = screen.getByRole('link', { name: LIBELLE_CV })
    expect(cv.getAttribute('href')).toBe('/cv-jerome-marichez.pdf')
    expect(cv.getAttribute('download')).toBe('cv-jerome-marichez.pdf')
    expect(screen.getByRole('link', { name: "M'écrire" }).getAttribute('href')).toBe(
      `mailto:${contact.email}`,
    )
    expect(screen.getByRole('link', { name: /07 71 65 15 88/ }).getAttribute('href')).toBe(
      'tel:+33771651588',
    )
  })

  it('la variante tete ne rend aucun titre', () => {
    render(<BarreActions variante="tete" />)
    expect(screen.queryByRole('heading')).toBeNull()
  })

  it('la variante fin rend son titre « Me joindre »', () => {
    render(<BarreActions variante="fin" />)
    expect(screen.getByRole('heading', { level: 2 }).textContent).toContain('Me joindre')
  })
})

describe('placement sur les six vues', () => {
  const vues: ReadonlyArray<readonly [string, () => React.JSX.Element]> = [
    ['AProposView', AProposView],
    ['ParcoursView', ParcoursView],
    ['ProjetsView', ProjetsView],
    ['CompetencesView', CompetencesView],
    ['BlogView', BlogView],
    ['ArticleView', () => <ArticleView article={articles[0] as IArticle} />],
  ]

  it.each(vues)('%s rend la barre deux fois, la premiere avant la lecture', (_nom, Vue) => {
    const { container } = render(<Vue />)
    const liens = screen.getAllByRole('link', { name: LIBELLE_CV })
    expect(liens).toHaveLength(2)

    const titre = container.querySelector('h1') as Element
    expect(
      titre.compareDocumentPosition(liens[0] as Element) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy()

    const contenu = [...container.querySelectorAll('h2')].find(
      (h2) => !(h2.textContent ?? '').includes('Me joindre'),
    )
    if (contenu !== undefined) {
      expect(
        (liens[0] as Element).compareDocumentPosition(contenu) & Node.DOCUMENT_POSITION_FOLLOWING,
      ).toBeTruthy()
    }
  })

  it.each(vues)('%s rend la variante fin avec son titre', (_nom, Vue) => {
    render(<Vue />)
    expect(screen.getAllByRole('heading', { level: 2, name: /Me joindre/ })).toHaveLength(1)
  })
})

describe('accueil et contact', () => {
  // jsdom n'implemente pas matchMedia, que la tasse interroge : polyfill de
  // l'environnement, pas une doublure de module.
  beforeAll(() => {
    window.matchMedia = (requete: string) =>
      ({
        matches: false,
        media: requete,
        addEventListener: () => {},
        removeEventListener: () => {},
      }) as unknown as MediaQueryList
  })

  it("l'accueil rend la barre de tete et garde un lien vers /parcours/", () => {
    render(<AccueilView />)
    expect(screen.getAllByRole('link', { name: LIBELLE_CV })).toHaveLength(1)
    expect(screen.getByRole('link', { name: "M'écrire" })).toBeTruthy()
    const parcours = screen
      .getAllByRole('link')
      .filter((l) => l.getAttribute('href')?.startsWith('/parcours'))
    expect(parcours.length).toBeGreaterThanOrEqual(1)
  })

  it('Contact rend le lien PDF', () => {
    render(<ContactView />)
    const cv = screen.getByRole('link', { name: LIBELLE_CV })
    expect(cv.getAttribute('href')).toBe('/cv-jerome-marichez.pdf')
  })
})
