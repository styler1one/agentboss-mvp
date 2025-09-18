import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI-Agents Logistics & Transport | AgentBoss.nl - Route Optimalisatie & Fleet Management Automation',
  description: 'Logistics & Transport AI-agents voor route optimalisatie en fleet management. €2.7M besparing, 30% brandstofbesparing, 94% on-time delivery. ADR, CMR compliant.',
  keywords: 'AI logistics transport, route optimalisatie AI, fleet management AI, warehouse automation, transport AI agents, ADR compliant, Nederland logistics AI',
  openGraph: {
    title: 'AI-Agents Logistics & Transport | AgentBoss.nl',
    description: 'Logistics AI-agents: €2.7M besparing, 30% brandstofbesparing, 45% warehouse efficiëntie. ADR, CMR compliant. TransLog Nederland case study.',
    url: 'https://agentboss.nl/industries/logistics',
    siteName: 'AgentBoss.nl',
    images: [
      {
        url: 'https://agentboss.nl/og-logistics.jpg',
        width: 1200,
        height: 630,
        alt: 'AgentBoss Logistics & Transport AI Solutions',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-Agents Logistics & Transport | AgentBoss.nl',
    description: 'Logistics AI-agents: €2.7M besparing, 30% brandstofbesparing, route optimalisatie automation. ADR compliant.',
    images: ['https://agentboss.nl/og-logistics.jpg'],
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

export default function LogisticsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
