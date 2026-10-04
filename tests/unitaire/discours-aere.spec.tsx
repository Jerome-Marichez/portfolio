/*
 * Intention : les textes longs du site (profil, methode, chapo des axes, contexte
 * des experiences) sont rendus en paragraphes distincts, et l'annotation qui porte
 * la phrase distinctive est remontee (issue #36). On DECOUPE, on ne reecrit pas :
 * la jointure par espace des paragraphes doit redonner le texte d'origine, fige ici
 * mot pour mot, et aucune coupe ne tombe ailleurs qu'a un point existant.
 *
 * Cas couverts :
 * - A propos : une seule annotation (aside), situee apres le h1 ; un <p> par entree
 *   de `profil.paragraphes` (5) ; texte d'origine intact ; methode en 2 paragraphes.
 * - Accueil : l'annotation precede dans le DOM le lien « Telecharger le CV » ;
 *   `axesChapo` et `differenciationIaAugmentee` rendent 2 paragraphes chacun.
 * - ExperienceBloc : un <p> par entree de `contexte` (2), texte d'origine intact.
 * Pas de mock : les vraies donnees de `src/contenu`. Niveau : unitaire.
 *
 * Test ecrit par l'assistant sur delegation de Jerome MARICHEZ en session
 * (2026-10-04, issue #36).
 */
import { render, screen } from '@testing-library/react'
import { ExperienceBloc } from '@/components/ExperienceBloc'
import { accroches } from '@/contenu/accroches'
import { experiences } from '@/contenu/experiences'
import { profil } from '@/contenu/profil'
import { AccueilView } from '@/views/AccueilView'
import { AProposView } from '@/views/AProposView'

const PROFIL_ORIGINE =
  "Ingénieur logiciel et chef de projet, dix ans d'expérience, toujours en petite équipe ou en " +
  "autonomie complète. Lead tech sur le produit que j'ai conçu, ingénieur fullstack sur ceux que " +
  "je n'ai pas créés, chef de projet quand il faut aller chercher la décision plutôt que " +
  "l'attendre. " +
  'Je commence par dialoguer pour comprendre les enjeux business, puis je propose la solution ' +
  "technique qui y répond. Je conçois, je livre, je recette puis j'exploite, donc je paie moi-même " +
  "le prix de mes choix d'architecture. La qualité et les chaînes d'intégration continue, je les ai " +
  "définies puis améliorées dans des équipes qui n'en avaient pas. Certifié ISTQB Foundation, et " +
  'développeur autant que testeur. Côté data, des sujets ouverts à ma propre initiative et choisis ' +
  'sur le problème plutôt que sur la mode : règles métier contre la fraude, clustering pour la ' +
  'segmentation, LLM quand il faut du langage.'

const IA_ORIGINE =
  'Ma marque de fabrique, le développement en IA augmentée piloté par les tests. Claude Code et ' +
  'Gemini au quotidien, outillés par des agents, des hooks, des skills et des serveurs MCP internes, ' +
  'et le test qui fait foi avant, pendant et après la génération.'

const CHAPO_ORIGINE =
  "Ces quatre axes ne sont pas quatre métiers mis côte à côte. Ils tiennent ensemble parce que les équipes où j'ai travaillé n'avaient ni QA, ni ops, ni équipe data : ce qui manquait, je l'ai construit."

const CONTEXTES_ORIGINE: Record<string, string> = {
  Acetelecom:
    'Éditeur lillois de campagnes multicanales vendues à des grands comptes de la distribution, de ' +
    "l'assurance et de la banque. Équipe de trois, deux développeurs et un PO, sans QA, sans équipe " +
    "data et sans ops. Lead tech sur Sms En Masse, la plateforme SaaS neuve dont j'ai porté " +
    "l'architecture et la démarche qualité. Ingénieur fullstack sur l'application mobile grand public " +
    'Prézage et sur MailingVox, la plateforme historique en production depuis 2008.',
  Truffle:
    'Fonds de capital-risque parisien, vitrines lues par des investisseurs et par la presse ' +
    "spécialisée. Mission menée en indépendant, de la vente à la livraison, avec l'existant d'une " +
    "agence digitale parisienne d'environ 70 personnes à reprendre.",
  Verhoeven:
    'Maison de joaillerie vendant en boutique et en ligne des pièces souvent uniques, où un stock ' +
    'faux se paie en survente. Site marchand développé sur mesure. Poste unique sur le périmètre ' +
    'digital, en lien direct avec la direction et la boutique.',
}

const textes = (paragraphes: NodeListOf<Element> | Element[]) =>
  Array.from(paragraphes).map((p) => p.textContent)

describe('profil et accroches, decoupes sans reecriture', () => {
  it("profil.paragraphes : 5 entrees dont la jointure redonne le texte d'origine", () => {
    expect(profil.paragraphes).toHaveLength(5)
    expect(profil.paragraphes.join(' ')).toBe(PROFIL_ORIGINE)
  })

  it("differenciationIaAugmentee : 2 entrees, texte d'origine intact", () => {
    expect(profil.differenciationIaAugmentee).toHaveLength(2)
    expect(profil.differenciationIaAugmentee.join(' ')).toBe(IA_ORIGINE)
  })

  it("axesChapo : 2 entrees, texte d'origine intact", () => {
    expect(accroches.axesChapo).toHaveLength(2)
    expect(accroches.axesChapo.join(' ')).toBe(CHAPO_ORIGINE)
  })
})

describe('AProposView', () => {
  it('rend une seule annotation, apres le titre h1', () => {
    const { container } = render(<AProposView />)
    const asides = container.querySelectorAll('aside')
    expect(asides).toHaveLength(1)
    const aside = asides[0] as Element
    expect(aside.textContent).toBe(accroches.heroAnnotation)
    const h1 = screen.getByRole('heading', { level: 1 })
    expect(h1.compareDocumentPosition(aside) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
  })

  it("rend un <p> par entree du profil, texte d'origine intact", () => {
    render(<AProposView />)
    const rendus = profil.paragraphes.map((texte) => screen.getByText(texte, { selector: 'p' }))
    expect(rendus).toHaveLength(5)
    expect(textes(rendus).join(' ')).toBe(PROFIL_ORIGINE)
  })

  it('rend la methode en 2 paragraphes', () => {
    render(<AProposView />)
    for (const texte of profil.differenciationIaAugmentee) {
      expect(screen.getByText(texte, { selector: 'p' })).toBeTruthy()
    }
  })
})

describe('AccueilView', () => {
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

  it("place l'annotation avant le lien « Telecharger le CV »", () => {
    const { container } = render(<AccueilView />)
    const aside = container.querySelector('aside') as Element
    const lien = screen.getByRole('link', { name: 'Télécharger le CV (PDF)' })
    expect(aside.textContent).toBe(accroches.heroAnnotation)
    expect(aside.compareDocumentPosition(lien) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
  })

  it('rend la methode et le chapo des axes en 2 paragraphes chacun', () => {
    render(<AccueilView />)
    for (const texte of [...profil.differenciationIaAugmentee, ...accroches.axesChapo]) {
      expect(screen.getByText(texte, { selector: 'p' })).toBeTruthy()
    }
    expect(profil.differenciationIaAugmentee).toHaveLength(2)
    expect(accroches.axesChapo).toHaveLength(2)
  })
})

describe('ExperienceBloc', () => {
  it.each(experiences.map((e) => [e.entreprise, e] as const))(
    "%s : un <p> par entree de contexte, texte d'origine intact",
    (entreprise, experience) => {
      render(<ExperienceBloc experience={experience} />)
      expect(experience.contexte).toHaveLength(2)
      const rendus = experience.contexte.map((texte) => screen.getByText(texte, { selector: 'p' }))
      expect(rendus).toHaveLength(2)
      const cle = Object.keys(CONTEXTES_ORIGINE).find((k) => entreprise.includes(k))
      expect(cle).toBeDefined()
      expect(textes(rendus).join(' ')).toBe(CONTEXTES_ORIGINE[cle as string])
    },
  )
})
