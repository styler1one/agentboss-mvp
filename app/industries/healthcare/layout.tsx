import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI-Agents Healthcare & Life Sciences | AgentBoss.nl - Patiëntenzorg & Diagnostiek Automation',
  description: 'Healthcare AI-agents voor patiëntenzorg optimalisatie. €1.8M besparing, 60% minder administratie, 40% snellere diagnostiek. GDPR, NEN 7510, HL7 FHIR compliant.',
  keywords: 'AI healthcare zorg, patiëntenzorg AI, diagnostiek AI, healthcare automation, medical AI agents, NEN 7510 compliant, ziekenhuis AI, Nederland healthcare AI',
  openGraph: {
    title: 'AI-Agents Healthcare & Life Sciences | AgentBoss.nl',
    description: 'Healthcare AI-agents: €1.8M besparing, 60% minder admin, 24/7 patiëntmonitoring. GDPR, NEN 7510 compliant. Ziekenhuis Groep Nederland case study.',
    url: 'https://agentboss.nl/industries/healthcare',
    siteName: 'AgentBoss.nl',
    images: [
      {
        url: 'https://agentboss.nl/og-healthcare.jpg',
        width: 1200,
        height: 630,
        alt: 'AgentBoss Healthcare & Life Sciences AI Solutions',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-Agents Healthcare & Life Sciences | AgentBoss.nl',
    description: 'Healthcare AI-agents: €1.8M besparing, 60% minder administratie, 40% snellere diagnostiek. GDPR, NEN 7510 compliant.',
    images: ['https://agentboss.nl/og-healthcare.jpg'],
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

export default function HealthcareLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
