import { Metadata } from "next";
import HomeClient from "./pageclient";

export const metadata: Metadata = {
  title: 'Jérôme Marichez - Web Developer - Home',
  description: 'Welcome to my world of web development! Crafting dynamic interfaces and innovative solutions for a captivating user experience',
  openGraph: {
    title: 'Jérôme Marichez - Web Developer - Home',
    description: 'Welcome to my world of web development! Crafting dynamic interfaces and innovative solutions for a captivating user experience',
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
