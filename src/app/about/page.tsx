import { AboutClient } from './pageclient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jérôme Marichez - About',
  description: 'Web Developer creating dynamic interfaces and enhancing user experiences for exceptional web solutions.',
}

export default function About(): JSX.Element {
  return (
    <AboutClient />
  )
}
