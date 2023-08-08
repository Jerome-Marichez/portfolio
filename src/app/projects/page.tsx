
import { ProjectsClient } from './pageclient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Jérôme Marichez - Web Developer - Projects',
	description: 'Explore my portfolio of cutting-edge web projects, showcasing my expertise in creating dynamic and high-performance projects.',
	openGraph: {
		title: 'Jérôme Marichez - Web Developer - Projects',
		description: 'Explore my portfolio of cutting-edge web projects, showcasing my expertise in creating dynamic and high-performance projects.',
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

export default function Projects(): JSX.Element {

	return (
		<ProjectsClient />
	)

}
