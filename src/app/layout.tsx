import './styles/_globals.scss';
import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import { LayoutNavProvider } from './layoutNavProvider';
const firaCode = Fira_Code({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jérôme Marichez - Web Developer - Home',
  description: 'Welcome to my world of web development! Crafting dynamic interfaces and innovative solutions for a captivating user experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={firaCode.className}>
        <LayoutNavProvider>
          {children}
        </LayoutNavProvider>
      </body>
    </html>
  )
}
