import './globals.css'
import Nav from '../src/components/nav/Nav'
import Footer from '../src/components/footer/Footer'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Little Lemon Restaurant',
  description: 'A Mediterranean restaurant offering authentic cuisine and exceptional dining experiences',
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps): React.JSX.Element {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
