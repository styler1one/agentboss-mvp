import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI-Agents Technology & SaaS | AgentBoss.nl - Customer Success & Technical Support Automation',
  description: 'Technology & SaaS AI-agents voor customer success en support. €1.2M besparing, 50% lagere churn, 70% snellere support. SOC 2, GDPR compliant.',
  keywords: 'AI technology SaaS, customer success AI, technical support automation, SaaS AI agents, churn reduction AI, SOC 2 compliant, Nederland tech AI',
  openGraph: {
    title: 'AI-Agents Technology & SaaS | AgentBoss.nl',
    description: 'Technology AI-agents: €1.2M besparing, 50% lagere churn, 24/7 customer success. SOC 2 compliant. TechScale SaaS Platform case study.',
    url: 'https://agentboss.nl/industries/technology',
    siteName: 'AgentBoss.nl',
    images: [
      {
        url: 'https://agentboss.nl/og-technology.jpg',
        width: 1200,
        height: 630,
        alt: 'AgentBoss Technology & SaaS AI Solutions',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-Agents Technology & SaaS | AgentBoss.nl',
    description: 'Technology AI-agents: €1.2M besparing, 50% lagere churn, customer success automation. SOC 2 compliant.',
    images: ['https://agentboss.nl/og-technology.jpg'],
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

export default function TechnologyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
