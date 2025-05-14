
import { ProjectsClient } from './pageclient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Jérôme Marichez - Développeur Web - Projets et Solutions Techniques',
	description: 'Explorez mon portfolio de projets web et solutions techniques, mettant en avant mon expertise dans la conception, l’optimisation de systèmes web complets et la mise en œuvre de solutions dynamiques et performantes.',
	openGraph: {
		title: 'Jérôme Marichez - Développeur Web - Projets et Solutions Techniques',
		description: 'Explorez mon portfolio de projets web et solutions techniques, mettant en avant mon expertise dans la conception, l’optimisation de systèmes web complets et la mise en œuvre de solutions dynamiques et performantes.',
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
	return <ProjectsClient />
}
