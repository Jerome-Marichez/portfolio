/**
 * Intention : sur mobile, le logo JM ouvre le menu, mais rien ne le disait (issue #41).
 * Icone SVG decorative : trois traits menu ferme, une croix menu ouvert. Nom accessible
 * stable, etat porte par aria-expanded. Unitaire, vrai MenuMobile, aucun mock.
 * Pose par Jerome MARICHEZ (2026-10-04).
 */
import { fireEvent, render, screen } from '@testing-library/react'
import { MenuMobile } from '@/components/MenuMobile'

const bouton = () => screen.getByRole('button', { name: /menu/i })
function icone() {
  const svg = bouton().querySelector('svg')
  if (!svg) throw new Error('Aucune icone SVG dans le bouton du menu')
  return svg
}

describe("Indice d'ouverture du menu mobile", () => {
  it('porte une icone SVG decorative', () => {
    render(<MenuMobile />)
    expect(icone().getAttribute('aria-hidden')).toBe('true')
  })
  it('a un nom accessible explicite', () => {
    render(<MenuMobile />)
    expect(bouton().getAttribute('aria-label')).toMatch(/menu/i)
  })
  it('ferme : trois traits', () => {
    render(<MenuMobile />)
    expect(bouton().getAttribute('aria-expanded')).toBe('false')
    expect(icone().getAttribute('data-etat')).toBe('traits')
  })
  it('ouvert : croix', () => {
    render(<MenuMobile />)
    fireEvent.click(bouton())
    expect(bouton().getAttribute('aria-expanded')).toBe('true')
    expect(icone().getAttribute('data-etat')).toBe('croix')
  })
  it('un second clic ramene les trois traits', () => {
    render(<MenuMobile />)
    fireEvent.click(bouton())
    fireEvent.click(bouton())
    expect(icone().getAttribute('data-etat')).toBe('traits')
  })
})
