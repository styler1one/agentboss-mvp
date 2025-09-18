'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import ContactForm from "@/components/ContactForm"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Calendar, Phone, Send, Zap, Users, Building } from "lucide-react"

interface CTAButtonProps {
  variant?: 'assessment' | 'consultation' | 'demo' | 'contact' | 'phone'
  size?: 'sm' | 'default' | 'lg' | 'xl'
  className?: string
  industry?: string
  solution?: string
  children?: React.ReactNode
}

export default function CTAButton({
  variant = 'contact',
  size = 'default',
  className = '',
  industry = '',
  solution = '',
  children
}: CTAButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  // Phone CTA - direct action
  if (variant === 'phone') {
    return (
      <Button
        asChild
        variant="agent"
        size={size}
        className={className}
      >
        <a href="tel:+31201234567" className="inline-flex items-center">
          <Phone className="w-4 h-4 mr-2" />
          {children || 'Bel Direct: +31 20 123 4567'}
        </a>
      </Button>
    )
  }

  // Get button config based on variant
  const getButtonConfig = () => {
    switch (variant) {
      case 'assessment':
        return {
          icon: <Zap className="w-4 h-4 mr-2" />,
          text: children || 'Gratis AI Assessment',
          formTitle: 'Start je Gratis AI Assessment',
          formSubtitle: 'Ontdek in 2 minuten welke AI-oplossing perfect past bij jouw bedrijf'
        }
      case 'consultation':
        return {
          icon: <Calendar className="w-4 h-4 mr-2" />,
          text: children || 'Plan Gratis Consultatie',
          formTitle: 'Plan je Gratis Consultatie',
          formSubtitle: 'Krijg binnen 24 uur een persoonlijk gesprek met een van onze AI-experts'
        }
      case 'demo':
        return {
          icon: <Users className="w-4 h-4 mr-2" />,
          text: children || 'Vraag Demo Aan',
          formTitle: 'Vraag een Persoonlijke Demo Aan',
          formSubtitle: 'Zie hoe onze AI-agents jouw specifieke processen kunnen automatiseren'
        }
      default:
        return {
          icon: <Send className="w-4 h-4 mr-2" />,
          text: children || 'Neem Contact Op',
          formTitle: 'Start je AI Transformatie',
          formSubtitle: 'Krijg binnen 24 uur een persoonlijk advies van onze AI experts'
        }
    }
  }

  const config = getButtonConfig()

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="agent"
          size={size}
          className={className}
        >
          {config.icon}
          {config.text}
        </Button>
      </DialogTrigger>
      
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <ContactForm
          title={config.formTitle}
          subtitle={config.formSubtitle}
          variant={variant === 'contact' ? 'default' : variant}
          industry={industry}
          solution={solution}
        />
      </DialogContent>
    </Dialog>
  )
}
