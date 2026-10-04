import { Shadows_Into_Light } from 'next/font/google'

/**
 * Shadows Into Light ne porte que l'annotation manuscrite. Plus aucune page ne
 * rend `Annotation` (issue #59) : cette police vit donc ici, hors de
 * `src/app/polices.ts`, pour que le site ne la telecharge pas. Seul Storybook
 * l'importe (`.storybook/preview.tsx`), afin que la story s'affiche en manuscrit.
 * Si l'annotation revient sur une page, `layout.tsx` doit importer ce module.
 */
export const policeMain = Shadows_Into_Light({
  subsets: ['latin'],
  weight: '400',
  variable: '--police-main',
  display: 'swap',
})
