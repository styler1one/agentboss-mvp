import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AgentBoss.nl - Van AI-chaos naar AI-succes in 30 dagen',
  description: 'Europa\'s eerste gegarandeerde AI-agent delivery platform. Werkende agent binnen 30 werkdagen of geld terug.',
  keywords: 'AI agents, artificial intelligence, business automation, Netherlands, enterprise AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
