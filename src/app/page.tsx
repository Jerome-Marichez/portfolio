import type { Metadata } from 'next';
import HomeClient from './pageclient';

export const metadata: Metadata = {
  title: 'Jérôme Marichez - About',
  description: 'Web Developer creating dynamic interfaces and enhancing user experiences for exceptional web solutions.',
  openGraph: {
    title: 'Jérôme Marichez - About',
    description: 'Web Developer creating dynamic interfaces and enhancing user experiences for exceptional web solutions.',
    type: 'website',
    locale: 'en_US',
    url: 'https://jeromemarichez.fr',
    images: [
      {
        url: 'https://jeromemarichez.fr/preview.jpg',
        alt: 'Preview of website',
      },
    ],
  }
}

export default function Home() {
  <HomeClient />
}
