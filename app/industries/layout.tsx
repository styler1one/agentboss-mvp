import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI-Agents voor Elke Industrie | AgentBoss.nl - Sector-Specifieke AI Oplossingen',
  description: 'Ontdek gespecialiseerde AI-agents voor Finance, Healthcare, Manufacturing, Technology, E-commerce en Logistics. €47M+ besparingen, 95% succesratio, sector-specifieke compliance.',
  keywords: 'AI agents industrie, sector AI oplossingen, finance AI, healthcare AI, manufacturing AI, technology AI, ecommerce AI, logistics AI, Nederland',
  openGraph: {
    title: 'AI-Agents voor Elke Industrie | AgentBoss.nl',
    description: 'Gespecialiseerde AI-oplossingen voor 6 industrieën. Van €950K tot €3.1M besparing per sector. Compliance-ready en 95% succesratio.',
    url: 'https://agentboss.nl/industries',
    siteName: 'AgentBoss.nl',
    images: [
      {
        url: 'https://agentboss.nl/og-industries.jpg',
        width: 1200,
        height: 630,
        alt: 'AgentBoss Industries - AI-Agents voor elke sector',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-Agents voor Elke Industrie | AgentBoss.nl',
    description: 'Gespecialiseerde AI-oplossingen voor Finance, Healthcare, Manufacturing, Technology, E-commerce en Logistics. €47M+ besparingen.',
    images: ['https://agentboss.nl/og-industries.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
