import { Metadata } from "next";
import { HomeClient } from "./pageclient";

export const metadata: Metadata = {
  title: 'Jérôme Marichez - Ingénieur Logiciel Web - Accueil',
  description: 'Bienvenue dans mon univers de développement web ! Création d’interfaces dynamiques et de solutions innovantes pour une expérience utilisateur captivante',
  openGraph: {
    title: 'Jérôme Marichez - Ingénieur Logiciel Web - Accueil',
    description: 'Bienvenue dans mon univers de développement web ! Création d’interfaces dynamiques et de solutions innovantes pour une expérience utilisateur captivante',
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

export default function Home() {
  return <HomeClient />;
}
