import type { Metadata, Viewport } from 'next'
import { EnTete } from '@/components/EnTete'
import { LienEvitement } from '@/components/LienEvitement'
import { PiedDePage } from '@/components/PiedDePage'
import { profil } from '@/contenu/profil'
import { descriptions } from '@/seo/descriptions'
import { titreAccueilSeo } from '@/seo/titres'
import './globals.css'
import { policeCode, policeMain } from './polices'

export const metadata: Metadata = {
  metadataBase: new URL('https://jeromemarichez.fr'),
  title: {
    default: titreAccueilSeo,
    template: `%s · ${profil.nom}`,
  },
  description: descriptions.accueil,
  authors: [{ name: profil.nom, url: 'https://jeromemarichez.fr' }],
  openGraph: {
    type: 'profile',
    locale: 'fr_FR',
    siteName: profil.nom,
    url: 'https://jeromemarichez.fr',
    title: titreAccueilSeo,
    description: descriptions.accueil,
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  // Le fond du navigateur suit celui de la page : sur mobile, la barre d'URL
  // ne doit pas trancher une bande clair au bord d'un site qui se veut nocturne.
  themeColor: '#232020',
  colorScheme: 'dark',
}

export default function GabaritRacine({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${policeCode.variable} ${policeMain.variable}`}>
      <body>
        <LienEvitement />
        <EnTete />
        <main id="contenu" tabIndex={-1}>
          {children}
        </main>
        <PiedDePage />
      </body>
    </html>
  )
}
