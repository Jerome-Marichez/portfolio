import type { Metadata } from 'next';
import ContactClient from './pageclient';

export const metadata: Metadata = {
	title: 'Jérôme Marichez - Web Developer - Contact',
	description: 'Get in touch with me for exciting web solutions. Reach out at jeromemarichez@ik.me to collaborate on innovative projects.',
	openGraph: {
		title: 'Jérôme Marichez - Web Developer - Contact',
		description: 'Get in touch with me for exciting web solutions. Reach out at jeromemarichez@ik.me to collaborate on innovative projects.',
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
		<ContactClient />
	)

}
