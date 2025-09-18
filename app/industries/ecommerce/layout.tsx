import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI-Agents E-commerce & Retail | AgentBoss.nl - Personalisatie & Inventory Management Automation',
  description: 'E-commerce & Retail AI-agents voor personalisatie en inventory management. €950K besparing, 25% hogere conversie, 33% hogere AOV. GDPR, PCI DSS compliant.',
  keywords: 'AI ecommerce retail, personalisatie AI, inventory management AI, webshop AI agents, conversie optimalisatie AI, PCI DSS compliant, Nederland ecommerce AI',
  openGraph: {
    title: 'AI-Agents E-commerce & Retail | AgentBoss.nl',
    description: 'E-commerce AI-agents: €950K besparing, 25% hogere conversie, 24/7 customer support. GDPR, PCI DSS compliant. Dutch Fashion Retailer case study.',
    url: 'https://agentboss.nl/industries/ecommerce',
    siteName: 'AgentBoss.nl',
    images: [
      {
        url: 'https://agentboss.nl/og-ecommerce.jpg',
        width: 1200,
        height: 630,
        alt: 'AgentBoss E-commerce & Retail AI Solutions',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-Agents E-commerce & Retail | AgentBoss.nl',
    description: 'E-commerce AI-agents: €950K besparing, 25% hogere conversie, personalisatie automation. GDPR, PCI DSS compliant.',
    images: ['https://agentboss.nl/og-ecommerce.jpg'],
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

export default function EcommerceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
