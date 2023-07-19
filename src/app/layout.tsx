import './globals.scss'
import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import { Navbar } from './components'

const FiraCode = Fira_Code({ subsets: ['latin'] })

const linksData = [
  { text: 'about me', href: '/about' },
  { text: 'projects', href: '#', style: { paddingLeft: '25px' } },
  { text: 'skills', href: '#', style: { paddingLeft: '50px' } },
  { text: 'contact me', href: '#', style: { paddingLeft: '25px' } },
  { text: 'home', href: '#' },
];

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
      <body className={FiraCode.className}>
        <div className='padding-200'></div>
        <Navbar links={linksData} />
        {children}
      </body>
    </html>
  )
}
