
import { SkillsClient } from './pageclient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Jérôme Marichez - Web Developer - Skills',
	description: 'Discover my skillset in web development, including React expertise, dynamic interface design, and efficient back-end management.',
	openGraph: {
		title: 'Jérôme Marichez - Web Developer - Skills',
		description: 'Discover my skillset in web development, including React expertise, dynamic interface design, and efficient back-end management.',
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

export default function Skills(): JSX.Element {

	return (
		<SkillsClient />
	)

}
