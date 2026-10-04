import { Fira_Code } from 'next/font/google'

/**
 * Deux voix, et deux seulement.
 *
 * Fira Code porte tout le site. Ce n'est pas le monospace-costume que l'on
 * plaque sur un sujet technique : la mise en page entiere s'aligne sur sa
 * cellule de caractere, donc la police est la grille.
 *
 * La police manuscrite de l'annotation n'est plus chargee par le site : voir
 * `src/components/Annotation/police.ts`.
 */

export const policeCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--police-code',
  display: 'swap',
})
