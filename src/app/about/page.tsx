import { AboutClient } from './pageclient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jérôme Marichez - About',
  description: 'Web Developer',
}

export default function About(): JSX.Element {
  return (
    <AboutClient />
  )
}
