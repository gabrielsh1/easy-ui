import '@/styles/global.css'

import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: '400' })

import { Header } from '@/components/ui/Header'

export const metadata: Metadata = {
  title: 'Easy UI',
  description: 'A Design System made to be easy and quick to use. With modern, beautiful and accessible components.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />

        <div className="pt-[var(--header-height)]">
          {children}
        </div>
      </body>
    </html>
  )
}
