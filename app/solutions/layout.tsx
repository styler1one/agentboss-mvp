import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Solutions & Services | AgentBoss.nl - Van AI-Chaos naar AI-Succes in 30 Dagen',
  description: 'Ontdek onze 4 bewezen AI-oplossingen: Agent Factory, Expert Ecosystem, Agent Marketplace en Compliance Center. 95% succesratio, Triple Guarantee, vanaf €25K.',
  keywords: 'AI solutions services, AI agent development, AI experts, AI marketplace, AI compliance, custom AI agents, Nederland AI services',
  openGraph: {
    title: 'AI Solutions & Services | AgentBoss.nl',
    description: 'Van AI-chaos naar AI-succes: Agent Factory, Expert Ecosystem, Agent Marketplace, Compliance Center. 95% succesratio, Triple Guarantee.',
    url: 'https://agentboss.nl/solutions',
    siteName: 'AgentBoss.nl',
    images: [
      {
        url: 'https://agentboss.nl/og-solutions.jpg',
        width: 1200,
        height: 630,
        alt: 'AgentBoss AI Solutions & Services',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Solutions & Services | AgentBoss.nl',
    description: 'Van AI-chaos naar AI-succes: 4 bewezen oplossingen, 95% succesratio, Triple Guarantee. Agent Factory, Expert Ecosystem, Marketplace.',
    images: ['https://agentboss.nl/og-solutions.jpg'],
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

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
