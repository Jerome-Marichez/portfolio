
import { ProjectsClient } from './pageclient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Jérôme Marichez - Projects',
	description: 'Web Developer',
}

export default function Projects(): JSX.Element {

	return (
		<ProjectsClient />
	)
	
}
