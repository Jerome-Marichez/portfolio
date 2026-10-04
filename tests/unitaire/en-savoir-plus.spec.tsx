/*
 * Intention : la divulgation progressive (issue #44). Le recruteur jauge en trente
 * secondes : les fiches projet montrent le titre, la meta et le Resultat, et replient
 * Contexte, Enjeu, Mon role ; les experiences montrent le contexte et les trois
 * premieres realisations, et replient les suivantes, l'encadrement et la stack.
 * Le repli est un <details> natif : ferme par defaut, mais tout le texte reste dans
 * le DOM (indexation, Ctrl+F, impression). Aucun mot n'est retire ni reecrit, et le
 * statut independant de Truffle (client, jamais employeur) reste visible, hors repli.
 *
 * Cas couverts :
 * - EnSavoirPlus : un details sans attribut open, un summary portant le libelle.
 * - ProjetFiche, pour chaque projet de `src/contenu/projets` : Resultat hors du
 *   details ; Contexte, Enjeu, Mon role dedans, dans cet ordre.
 * - ExperienceBloc, pour chaque experience : exactement 3 realisations hors du
 *   details quand il y en a plus de 3, les autres dedans avec le libelle
 *   « Voir les N autres realisations » (« Voir l'autre realisation » si N = 1) ;
 *   sinon libelle « En savoir plus » ; encadrement et stack toujours dedans ;
 *   statut independant hors du details pour Truffle ; toutes les realisations et
 *   toute la stack presentes dans le DOM.
 * Pas de mock : les vraies donnees de `src/contenu`. Niveau : unitaire.
 *
 * Test ecrit par l'assistant sur delegation de Jerome MARICHEZ en session
 * (2026-10-04, issue #44).
 */
import { render, screen } from '@testing-library/react'
import { EnSavoirPlus } from '@/components/EnSavoirPlus'
import { ExperienceBloc } from '@/components/ExperienceBloc'
import { ProjetFiche } from '@/components/ProjetFiche'
import { experiences } from '@/contenu/experiences'
import { projets } from '@/contenu/projets'

const VISIBLES = 3

const libelleAutres = (n: number) =>
  n === 1 ? "Voir l'autre réalisation" : `Voir les ${n} autres réalisations`

describe('EnSavoirPlus', () => {
  it('rend un details ferme par defaut dont le summary porte le libelle', () => {
    const { container } = render(
      <EnSavoirPlus libelle="En savoir plus">
        <p>Contenu replie</p>
      </EnSavoirPlus>,
    )
    const details = container.querySelector('details')
    expect(details).not.toBeNull()
    expect(details?.hasAttribute('open')).toBe(false)
    expect(details?.querySelector('summary')?.textContent).toContain('En savoir plus')
    expect(screen.getByText('Contenu replie')).not.toBeNull()
  })
})

describe('ProjetFiche', () => {
  it.each(projets.map((p) => [p.titre, p] as const))(
    '%s : Resultat visible, Contexte, Enjeu et Mon role replies',
    (_titre, projet) => {
      const { container } = render(<ProjetFiche projet={projet} />)
      const details = container.querySelector('details') as HTMLDetailsElement
      expect(details.querySelector('summary')?.textContent).toContain('En savoir plus')

      const dansDetails = Array.from(details.querySelectorAll('dt')).map((dt) => dt.textContent)
      expect(dansDetails).toEqual(['Contexte', 'Enjeu', 'Mon rôle'])

      const dehors = Array.from(container.querySelectorAll('dt'))
        .filter((dt) => !details.contains(dt))
        .map((dt) => dt.textContent)
      expect(dehors).toEqual(['Résultat'])

      expect(details.textContent).toContain(projet.contexte)
      expect(details.textContent).toContain(projet.enjeu)
      expect(details.textContent).toContain(projet.monRole)
      expect(details.textContent).not.toContain(projet.resultat)
      expect(container.textContent).toContain(projet.resultat)
    },
  )
})

describe('ExperienceBloc', () => {
  it.each(experiences.map((e) => [e.entreprise, e] as const))(
    '%s : realisations, encadrement et stack repliees comme prevu',
    (_entreprise, experience) => {
      const { container } = render(<ExperienceBloc experience={experience} />)
      const details = container.querySelector('details') as HTMLDetailsElement
      expect(details.hasAttribute('open')).toBe(false)

      const reste = experience.realisations.slice(VISIBLES)
      const visibles = experience.realisations.slice(0, VISIBLES)
      const libelle = reste.length > 0 ? libelleAutres(reste.length) : 'En savoir plus'
      expect(details.querySelector('summary')?.textContent).toContain(libelle)

      const dehors = Array.from(container.querySelectorAll('li')).filter(
        (li) => !details.contains(li),
      )
      expect(dehors.map((li) => li.textContent)).toEqual(visibles)

      for (const realisation of reste) {
        expect(details.textContent).toContain(realisation)
      }
      for (const realisation of experience.realisations) {
        expect(container.textContent).toContain(realisation)
      }
      for (const techno of experience.stackTechnique) {
        expect(details.textContent).toContain(techno)
      }
      if (experience.encadrement !== null) {
        expect(details.textContent).toContain(experience.encadrement)
      }
      for (const texte of experience.contexte) {
        expect(details.textContent).not.toContain(texte)
        expect(container.textContent).toContain(texte)
      }
    },
  )

  it('Truffle : le statut independant reste visible, hors du details', () => {
    const truffle = experiences.find((e) => e.entreprise.includes('Truffle'))
    if (!truffle) throw new Error('Truffle absent de src/contenu/experiences')
    const { container } = render(<ExperienceBloc experience={truffle} />)
    const details = container.querySelector('details') as HTMLDetailsElement
    const statut = screen.getByText(/était un client, pas un employeur/)
    expect(details.contains(statut)).toBe(false)
  })
})
