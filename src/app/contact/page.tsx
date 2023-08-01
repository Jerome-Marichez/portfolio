import type { Metadata } from 'next';
import ContactClient from './pageclient';

export const metadata: Metadata = {
	title: 'Jérôme Marichez - Contact',
	description: 'Web Developer'
}

export default function Projects(): JSX.Element {

	return (
		<ContactClient />
	)

}
