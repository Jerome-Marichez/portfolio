
import { SkillsClient } from './pageclient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Jérôme Marichez - Skills',
	description: 'Web Developer',
}

export default function Skills(): JSX.Element {

	return (
		<SkillsClient />
	)
	
}
