/*
 * Intention : la tasse doit tourner pour que son ANSE vise le curseur, et non pour
 * que son centre ou un autre point le fasse. `angleVersCurseur` calcule l'angle de
 * rotation (degres, repere ecran : 0 = droite, sens horaire positif) a ecrire sur la
 * tasse. L'anse est mesuree a +33 degres du centre du bol dans l'image non tournee
 * (ORIENTATION_ANSE), donc rotation = angle du curseur - 33.
 *
 * Cas couverts :
 * - curseur a droite (angle 0) : rotation -33 ;
 * - curseur en bas (90) : 57 ; a gauche (180) : 147 ; en haut (-90) : -123 ;
 * - passage du curseur derriere la tasse (de +179 a -179) : l'ecart reste <= 180
 *   degres, la tasse ne fait pas un tour complet a l'envers ;
 * - l'angle est accumule et jamais ramene dans [-180, 180] : plusieurs tours dans le
 *   meme sens donnent un angle qui depasse 360.
 * Pas de mock : fonction pure, jeu de valeurs en dur.
 *
 * Test ecrit par l'assistant sur delegation de Jerome MARICHEZ en session,
 * 2026-10-04 (issue #190).
 */
import { angleVersCurseur, ORIENTATION_ANSE } from '@/utils/angle-anse'

const centre = { x: 100, y: 100 }

describe('angleVersCurseur', () => {
  it("mesure l'anse a 33 degres du centre du bol", () => {
    expect(ORIENTATION_ANSE).toBe(33)
  })

  it('curseur a droite : anse a 0 degre, rotation -33', () => {
    const angle = angleVersCurseur({
      centre,
      curseur: { x: 200, y: 100 },
      angleCourant: 0,
      orientationAnse: ORIENTATION_ANSE,
    })
    expect(angle).toBeCloseTo(-33, 5)
  })

  it.each([
    ['en bas', { x: 100, y: 200 }, 57],
    ['a gauche', { x: 0, y: 100 }, 147],
    ['en haut', { x: 100, y: 0 }, -123],
  ])('curseur %s', (_nom, curseur, attendu) => {
    const angle = angleVersCurseur({
      centre,
      curseur,
      angleCourant: attendu,
      orientationAnse: ORIENTATION_ANSE,
    })
    expect(angle).toBeCloseTo(attendu, 5)
  })

  it('prend le chemin le plus court quand le curseur passe derriere la tasse', () => {
    // Angle curseur +179 (a peine au dessus de la gauche, cote bas), tasse deja calee.
    const avant = 179 - ORIENTATION_ANSE
    // Le curseur passe a -179 : ecart reel de 2 degres, pas de -358.
    const curseur = {
      x: centre.x + Math.cos((-179 * Math.PI) / 180) * 100,
      y: centre.y + Math.sin((-179 * Math.PI) / 180) * 100,
    }
    const apres = angleVersCurseur({
      centre,
      curseur,
      angleCourant: avant,
      orientationAnse: ORIENTATION_ANSE,
    })
    expect(Math.abs(apres - avant)).toBeLessThanOrEqual(180)
    expect(apres - avant).toBeCloseTo(2, 5)
  })

  it("accumule l'angle sur plusieurs tours sans le ramener dans [-180, 180]", () => {
    let angle = 0
    // Le curseur fait deux tours complets dans le sens horaire, par pas de 30 degres.
    for (let degres = 0; degres <= 720; degres += 30) {
      const rad = (degres * Math.PI) / 180
      angle = angleVersCurseur({
        centre,
        curseur: { x: centre.x + Math.cos(rad) * 100, y: centre.y + Math.sin(rad) * 100 },
        angleCourant: angle,
        orientationAnse: ORIENTATION_ANSE,
      })
    }
    expect(angle).toBeCloseTo(720 - ORIENTATION_ANSE, 5)
  })
})
