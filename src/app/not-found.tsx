import type { Metadata } from 'next'
import { PageIntrouvableView } from '@/views/PageIntrouvableView'

export const metadata: Metadata = {
  // Le gabarit du layout ajoute le nom : « Page introuvable · Jérôme Marichez ».
  title: 'Page introuvable',
  // Une 404 n'a pas à être indexée, et son canonical ne doit pas pointer vers
  // l'accueil, que le layout déclare pour tout le site.
  alternates: {},
  robots: { index: false, follow: true },
}

export default function PageIntrouvable() {
  return <PageIntrouvableView />
}
