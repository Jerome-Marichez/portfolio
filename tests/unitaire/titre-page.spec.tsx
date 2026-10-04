/*
 * Intention : le titre de page est un composant unique (issue #40). Les six pages
 * interieures (A propos, Parcours, Projets, Competences, Blog, Contact) doivent
 * rendre leur `h1` par `TitrePage`, afin que la taille et l'espacement ne derivent
 * plus d'une page a l'autre.
 *
 * Cas couverts :
 * - TitrePage rend un seul `h1`, avec le texte donne et sa classe `titre`
 *   (identity-obj-proxy renvoie le nom de classe).
 * - Chacune des six vues rend exactement un `h1`, et ce `h1` porte la classe de
 *   TitrePage.
 * Pas de mock : les vraies donnees de `src/contenu`. Niveau : unitaire.
 *
 * Test ecrit par l'assistant sur delegation de Jerome MARICHEZ en session
 * (2026-10-04, issue #40).
 */
import { render, screen } from '@testing-library/react'
import { TitrePage } from '@/components/TitrePage'
import { AProposView } from '@/views/AProposView'
import { BlogView } from '@/views/BlogView'
import { CompetencesView } from '@/views/CompetencesView'
import { ContactView } from '@/views/ContactView'
import { ParcoursView } from '@/views/ParcoursView'
import { ProjetsView } from '@/views/ProjetsView'

describe('TitrePage', () => {
  it('rend un seul h1, avec le texte et sa classe', () => {
    render(<TitrePage>Un titre</TitrePage>)
    const titres = screen.getAllByRole('heading', { level: 1 })
    expect(titres).toHaveLength(1)
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Un titre')
    expect(screen.getByRole('heading', { level: 1 }).className).toBe('titre')
  })
})

describe('les six pages interieures', () => {
  const vues: ReadonlyArray<readonly [string, () => React.JSX.Element]> = [
    ['AProposView', AProposView],
    ['ParcoursView', ParcoursView],
    ['ProjetsView', ProjetsView],
    ['CompetencesView', CompetencesView],
    ['BlogView', BlogView],
    ['ContactView', ContactView],
  ]

  it.each(vues)('%s rend un seul h1, porte par TitrePage', (_nom, Vue) => {
    render(<Vue />)
    const titres = screen.getAllByRole('heading', { level: 1 })
    expect(titres).toHaveLength(1)
    expect(screen.getByRole('heading', { level: 1 }).className).toBe('titre')
  })
})
