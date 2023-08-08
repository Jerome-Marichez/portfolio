
import { ProjectsClient } from './pageclient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Jérôme Marichez - Projects',
	description: 'Explore my portfolio of cutting-edge web projects, showcasing my expertise in creating dynamic and high-performance projects.',
}

export default function Projects(): JSX.Element {

	return (
		<ProjectsClient />
	)
	
}
