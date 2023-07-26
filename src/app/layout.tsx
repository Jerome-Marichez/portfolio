import './_globals.scss'
import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import { LayoutNavProvider } from './layoutNavProvider'
import { Header } from './components/Header/Header'

const firaCode = Fira_Code({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jérôme Marichez - Web Developer React - Home',
  description: 'Web Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={firaCode.className}>
        <Header />
        <LayoutNavProvider>
          {children}
        </LayoutNavProvider>
      </body>
    </html>
  )
}
