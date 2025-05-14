import type { Metadata } from 'next';
import ContactClient from './pageclient';

export const metadata: Metadata = {
	title: 'Jérôme Marichez - Développeur Web - Contact',
	description: 'Contactez-moi pour des solutions web passionnantes. Écrivez à jeromemarichez@ik.me pour collaborer sur des projets innovants.',
	openGraph: {
		title: 'Jérôme Marichez - Développeur Web - Contact',
		description: 'Contactez-moi pour des solutions web passionnantes. Écrivez à jeromemarichez@ik.me pour collaborer sur des projets innovants.',
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

export default function Projects(): JSX.Element {
	return <ContactClient />
}

