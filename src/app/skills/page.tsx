
import { SkillsClient } from './pageclient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Jérôme Marichez - Skills',
	description: 'Discover my skillset in web development, including React expertise, dynamic interface design, and efficient back-end management',
}

export default function Skills(): JSX.Element {

	return (
		<SkillsClient />
	)
	
}
