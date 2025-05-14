import { AboutClient } from './pageclient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jérôme Marichez - Ingénieur Logiciels Web - À propos',
  description: 'Ingénieur logiciels web créant des interfaces dynamiques et améliorant les expériences utilisateur pour des solutions web exceptionnelles.',
  openGraph: {
    title: 'Jérôme Marichez - Ingénieur Logiciels Web - À propos',
    description: 'Ingénieur logiciels web créant des interfaces dynamiques et améliorant les expériences utilisateur pour des solutions web exceptionnelles.',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://jeromemarichez.fr',
    images: [
      {
        url: 'https://jeromemarichez.fr/preview.jpg',
        alt: 'Aperçu du site web',
      },
    ],
  }
}

export default function About(): JSX.Element {
  return <AboutClient />
}
