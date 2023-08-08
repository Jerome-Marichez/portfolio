import './styles/_globals.scss';
import { Fira_Code } from 'next/font/google';
import { LayoutNavProvider } from './layoutNavProvider';
const firaCode = Fira_Code({ subsets: ['latin'] })

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
