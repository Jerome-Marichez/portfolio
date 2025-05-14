
import { SkillsClient } from './pageclient';
import type { Metadata } from 'next';
export const metadata: Metadata = {
	title: 'Jérôme Marichez - Ingénieur Logiciels Web - Compétences',
	description: 'Découvrez mon expertise en solutions web full-stack, applications mobiles et implémentations techniques adaptées aux besoins des entreprises.',
	openGraph: {
		title: 'Jérôme Marichez - Ingénieur Logiciels Web - Compétences',
		description: 'Découvrez mon expertise en solutions web full-stack, applications mobiles et implémentations techniques adaptées aux besoins des entreprises.',
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

export default function Skills(): JSX.Element {
	return <SkillsClient />
}
