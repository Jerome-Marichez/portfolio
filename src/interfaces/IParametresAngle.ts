import type { IPoint } from './IPoint'

export interface IParametresAngle {
  /** Centre de rotation de la tasse, dans le repere de la fenetre. */
  readonly centre: IPoint
  readonly curseur: IPoint
  /** Angle actuellement ecrit sur la tasse, accumule (jamais ramene dans [-180, 180]). */
  readonly angleCourant: number
  /** Angle de l'anse depuis le centre du bol, dans l'image non tournee. */
  readonly orientationAnse: number
}
