/**
 * Intention : la lecture longue suit Baymard (50 a 75 caracteres par ligne,
 * interligne d'au moins 1,5, ecart d'environ 2em entre paragraphes) et
 * WCAG 1.4.8 (80 caracteres au plus). Les valeurs CSS ne sont pas testables
 * sous Jest (CSS Modules = identity-obj-proxy) : on lit donc les fichiers.
 * (a) chaque regle d'ecart entre paragraphes consecutifs utilise var(--e4),
 * (b) --colonne reste entre 50ch et 75ch, (c) --lh-lecture vaut au moins 1.5.
 * Test ecrit par l'assistant sur delegation de Jerome MARICHEZ en session
 * (2026-10-04, issue #45).
 */
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

const lire = (chemin: string): string => readFileSync(join(process.cwd(), chemin), 'utf8')

const ecarts = [
  ['src/views/AProposView/a-propos-view.module.css', '.paragraphe + .paragraphe'],
  ['src/views/AccueilView/accueil-view.module.css', '.paragraphe + .paragraphe'],
  ['src/components/ExperienceBloc/experience-bloc.module.css', '.contexte + .contexte'],
  ['src/views/ArticleView/article-view.module.css', '.corps p'],
] as const

const echapper = (s: string): string => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

describe('mesure de lecture (Baymard, WCAG 1.4.8)', () => {
  it.each(ecarts)('%s : %s separe les paragraphes de 2em (--e4)', (fichier, selecteur) => {
    const regle = lire(fichier).match(new RegExp(`${echapper(selecteur)}\\s*\\{([^}]*)\\}`))
    expect(regle).not.toBeNull()
    expect(regle?.[1]).toMatch(/margin-top:\s*var\(--e4\)/)
  })

  it('--colonne reste entre 50ch et 75ch', () => {
    const valeur = lire('src/app/jetons.css').match(/--colonne:\s*(\d+(?:\.\d+)?)ch/)
    expect(valeur).not.toBeNull()
    const ch = Number(valeur?.[1])
    expect(ch).toBeGreaterThanOrEqual(50)
    expect(ch).toBeLessThanOrEqual(75)
  })

  it('--lh-lecture vaut au moins 1.5', () => {
    const valeur = lire('src/app/jetons.css').match(/--lh-lecture:\s*(\d+(?:\.\d+)?)/)
    expect(valeur).not.toBeNull()
    expect(Number(valeur?.[1])).toBeGreaterThanOrEqual(1.5)
  })
})
