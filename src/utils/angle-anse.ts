import type { IParametresAngle } from '@/interfaces/IParametresAngle'

/**
 * Angle de l'anse depuis le centre du bol, dans `mug.png` non tournee, en degres
 * (repere ecran : 0 = droite, sens horaire positif).
 *
 * Mesure sur l'image (898 x 772) : le bol est un cercle de rayon 365 centre en
 * (395, 380), le centroide de l'anse est en (780, 628). Cela donne
 * atan2(628 - 380, 780 - 395) = +33 degres. Pour que l'anse vise le curseur, la
 * rotation vaut donc `angleCurseur - 33`.
 */
export const ORIENTATION_ANSE = 33

/**
 * Nouvel angle (accumule) a ecrire sur la tasse pour que son anse vise le curseur.
 * Le chemin le plus court est toujours pris : franchir le dos de la tasse ne
 * provoque pas un tour complet a l'envers.
 */
export function angleVersCurseur({
  centre,
  curseur,
  angleCourant,
  orientationAnse,
}: IParametresAngle): number {
  const angleCurseur = (Math.atan2(curseur.y - centre.y, curseur.x - centre.x) * 180) / Math.PI
  const vise = angleCurseur - orientationAnse
  // Ecart ramene dans [-180, 180[.
  const ecart = ((((vise - angleCourant + 180) % 360) + 360) % 360) - 180
  return angleCourant + ecart
}
