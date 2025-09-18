import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI-Agents Manufacturing & Industry | AgentBoss.nl - Productie Optimalisatie & Predictive Maintenance',
  description: 'Manufacturing AI-agents voor productie optimalisatie. €3.1M besparing, 35% productiviteitsverbetering, 92% minder defecten. ISO 9001, ISO 14001 compliant.',
  keywords: 'AI manufacturing industrie, productie optimalisatie AI, predictive maintenance, quality control AI, supply chain AI, ISO compliant, Nederland manufacturing AI',
  openGraph: {
    title: 'AI-Agents Manufacturing & Industry | AgentBoss.nl',
    description: 'Manufacturing AI-agents: €3.1M besparing, 35% productiviteitsverbetering, 94% machine uptime. ISO certified. Philips Manufacturing case study.',
    url: 'https://agentboss.nl/industries/manufacturing',
    siteName: 'AgentBoss.nl',
    images: [
      {
        url: 'https://agentboss.nl/og-manufacturing.jpg',
        width: 1200,
        height: 630,
        alt: 'AgentBoss Manufacturing & Industry AI Solutions',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-Agents Manufacturing & Industry | AgentBoss.nl',
    description: 'Manufacturing AI-agents: €3.1M besparing, 35% productiviteitsverbetering, predictive maintenance. ISO compliant.',
    images: ['https://agentboss.nl/og-manufacturing.jpg'],
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

export default function ManufacturingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
