import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI-Agents Finance & Banking | AgentBoss.nl - Compliance & Loan Processing Automation',
  description: 'Gespecialiseerde AI-agents voor financiële dienstverlening. €2.3M gemiddelde besparing, MiFID II compliant, 340% ROI. Compliance monitoring, loan processing en customer service automation.',
  keywords: 'AI finance banking, MiFID II compliance AI, loan processing automation, financial AI agents, banking AI solutions, compliance monitoring, Nederland finance AI',
  openGraph: {
    title: 'AI-Agents Finance & Banking | AgentBoss.nl',
    description: 'Finance AI-agents: €2.3M besparing, 340% ROI, 85% snellere verwerking. MiFID II, GDPR, Basel III compliant. Nederlandse Hypotheekbank case study.',
    url: 'https://agentboss.nl/industries/finance',
    siteName: 'AgentBoss.nl',
    images: [
      {
        url: 'https://agentboss.nl/og-finance.jpg',
        width: 1200,
        height: 630,
        alt: 'AgentBoss Finance & Banking AI Solutions',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-Agents Finance & Banking | AgentBoss.nl',
    description: 'Finance AI-agents: €2.3M besparing, 340% ROI, MiFID II compliant. Compliance monitoring, loan processing automation.',
    images: ['https://agentboss.nl/og-finance.jpg'],
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

export default function FinanceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
