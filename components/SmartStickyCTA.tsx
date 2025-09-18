'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowRight, Calculator, Users, ShoppingCart, 
  MessageCircle, Star, X, Phone
} from "lucide-react"
import ContactModal from "@/components/ContactModal"

interface CTAConfig {
  text: string
  icon: React.ComponentType<{ className?: string }>
  variant: "agent" | "secondary" | "outline"
  action: string
  badge?: string
}

const sectionCTAs: Record<string, CTAConfig> = {
  hero: {
    text: "Start je AI Agent",
    icon: ArrowRight,
    variant: "agent",
    action: "start",
    badge: "Gratis consultatie"
  },
  assessment: {
    text: "Start Assessment",
    icon: Calculator,
    variant: "secondary", 
    action: "assessment",
    badge: "2 minuten"
  },
  industry: {
    text: "Bereken jouw ROI",
    icon: Calculator,
    variant: "agent",
    action: "roi",
    badge: "Gratis"
  },
  experts: {
    text: "Boek Expert",
    icon: Users,
    variant: "agent",
    action: "expert",
    badge: "24h match"
  },
  marketplace: {
    text: "Browse Agents",
    icon: ShoppingCart,
    variant: "secondary",
    action: "marketplace",
    badge: "50+ agents"
  },
  social: {
    text: "Claim jouw Success",
    icon: Star,
    variant: "agent",
    action: "success",
    badge: "Gegarandeerd"
  },
  default: {
    text: "Start nu",
    icon: Phone,
    variant: "agent",
    action: "contact",
    badge: "Gratis gesprek"
  }
}

export default function SmartStickyCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSection, setCurrentSection] = useState('default')
  const [isMinimized, setIsMinimized] = useState(false)
  const [showContactModal, setShowContactModal] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      
      // Show CTA after scrolling past hero
      setIsVisible(scrollY > windowHeight * 0.8)
      
      // Determine current section
      const sections = [
        'hero', 'assessment', 'industry', 'social', 
        'experts', 'marketplace', 'comparison', 'faq'
      ]
      
      let activeSection = 'default'
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            activeSection = section
            break
          }
        }
      }
      
      setCurrentSection(activeSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCTAClick = (action: string) => {
    switch (action) {
      case 'assessment':
        document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' })
        break
      case 'roi':
        document.getElementById('industry')?.scrollIntoView({ behavior: 'smooth' })
        break
      case 'marketplace':
        document.getElementById('marketplace')?.scrollIntoView({ behavior: 'smooth' })
        break
      case 'expert':
        document.getElementById('experts')?.scrollIntoView({ behavior: 'smooth' })
        break
      default:
        setShowContactModal(true)
        break
    }
  }

  if (!isVisible) return null

  const cta = sectionCTAs[currentSection] || sectionCTAs.default
  const IconComponent = cta.icon

  if (isMinimized) {
    return (
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          size="lg"
          variant={cta.variant}
          className="rounded-full w-14 h-14 shadow-2xl hover:scale-110 transition-transform"
          onClick={() => setIsMinimized(false)}
        >
          <IconComponent className="w-6 h-6" />
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 max-w-sm w-full mx-4">
      <div className="bg-white rounded-2xl shadow-2xl border-2 border-agent-blue p-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            {cta.badge && (
              <Badge variant="secondary" className="mb-2 text-xs">
                {cta.badge}
              </Badge>
            )}
            <Button
              variant={cta.variant}
              size="lg"
              className="w-full"
              onClick={() => handleCTAClick(cta.action)}
            >
              <IconComponent className="w-5 h-5 mr-2" />
              {cta.text}
            </Button>
          </div>
          
          <div className="ml-3 flex flex-col space-y-1">
            <Button
              variant="ghost"
              size="sm"
              className="w-8 h-8 p-0"
              onClick={() => setIsMinimized(true)}
            >
              <X className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-8 h-8 p-0"
              onClick={() => setShowContactModal(true)}
            >
              <MessageCircle className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <ContactModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
        type="consultation"
        title="Gratis AI Consultatie"
      />
    </div>
  )
}
