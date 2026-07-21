
import { ExperiencesClient } from './pageclient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Jérôme Marichez - Ingénieur Logiciel - Parcours & Expériences',
	description: 'Neuf ans d’expérience en ingénierie logicielle : Lead Tech, refonte d’applications web et mobiles, e-commerce haut de gamme, IA et gestion de projet chez Acetelecom, Verhoeven Joaillier et Truffle Capital.',
	openGraph: {
		title: 'Jérôme Marichez - Ingénieur Logiciel - Parcours & Expériences',
		description: 'Neuf ans d’expérience en ingénierie logicielle : Lead Tech, refonte d’applications web et mobiles, e-commerce haut de gamme, IA et gestion de projet.',
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

export default function Experiences(): JSX.Element {
	return <ExperiencesClient />
}
