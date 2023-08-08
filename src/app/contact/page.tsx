import type { Metadata } from 'next';
import ContactClient from './pageclient';

export const metadata: Metadata = {
	title: 'Jérôme Marichez - Contact',
	description: 'Get in touch with me for exciting web solutions. Reach out at jeromemarichez@ik.me to collaborate on innovative projects.'
}

export default function Projects(): JSX.Element {

	return (
		<ContactClient />
	)

}
