'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Send, Loader2, AlertCircle } from "lucide-react"

interface ContactFormProps {
  title?: string
  subtitle?: string
  variant?: 'default' | 'assessment' | 'consultation' | 'demo'
  industry?: string
  solution?: string
  className?: string
}

interface FormData {
  name: string
  email: string
  company: string
  phone: string
  industry: string
  solution: string
  budget: string
  message: string
  urgency: string
}

export default function ContactForm({ 
  title = "Start je AI Transformatie",
  subtitle = "Krijg binnen 24 uur een persoonlijk advies van onze AI experts",
  variant = 'default',
  industry = '',
  solution = '',
  className = ''
}: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    industry: industry,
    solution: solution,
    budget: '',
    message: '',
    urgency: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          variant,
          timestamp: new Date().toISOString(),
          source: typeof window !== 'undefined' ? window.location.pathname : ''
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Er ging iets mis bij het versturen van je bericht')
      }

      setIsSubmitted(true)
      
      // Track conversion
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'conversion', {
          send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL',
          value: 1.0,
          currency: 'EUR'
        })
      }

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Er ging iets mis')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className={`w-full max-w-2xl mx-auto ${className}`}>
        <CardContent className="p-8 text-center">
          <div className="mb-6">
            <CheckCircle className="w-16 h-16 text-agent-green mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-agent-navy mb-2">
              Bedankt voor je aanvraag!
            </h3>
            <p className="text-gray-600">
              We hebben je bericht ontvangen en nemen binnen 24 uur contact met je op.
            </p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold text-agent-navy mb-2">Wat gebeurt er nu?</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>✅ Binnen 2 uur: Bevestiging met je contactpersoon</li>
              <li>📞 Binnen 24 uur: Persoonlijk gesprek met een AI-expert</li>
              <li>📊 Binnen 48 uur: Gepersonaliseerd voorstel met ROI</li>
            </ul>
          </div>
          
          <Button 
            onClick={() => setIsSubmitted(false)}
            variant="outline"
          >
            Nieuwe aanvraag
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={`w-full max-w-2xl mx-auto ${className}`}>
      <CardHeader>
        <CardTitle className="text-2xl text-agent-navy">{title}</CardTitle>
        <p className="text-gray-600">{subtitle}</p>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Naam *
              </label>
              <Input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Je volledige naam"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="je@bedrijf.nl"
                required
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Bedrijf *
              </label>
              <Input
                type="text"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                placeholder="Je bedrijfsnaam"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Telefoon
              </label>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="+31 6 12345678"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Industrie
              </label>
              <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecteer je industrie" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="finance">Finance & Banking</SelectItem>
                  <SelectItem value="healthcare">Healthcare & Life Sciences</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing & Industry</SelectItem>
                  <SelectItem value="technology">Technology & SaaS</SelectItem>
                  <SelectItem value="ecommerce">E-commerce & Retail</SelectItem>
                  <SelectItem value="logistics">Logistics & Transport</SelectItem>
                  <SelectItem value="other">Anders</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Interesse in
              </label>
              <Select value={formData.solution} onValueChange={(value) => handleInputChange('solution', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecteer oplossing" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="agent-factory">Agent Factory (Custom)</SelectItem>
                  <SelectItem value="expert-ecosystem">Expert Ecosystem</SelectItem>
                  <SelectItem value="agent-marketplace">Agent Marketplace</SelectItem>
                  <SelectItem value="compliance-center">Compliance Center</SelectItem>
                  <SelectItem value="assessment">Gratis Assessment</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {variant === 'assessment' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Budget indicatie
              </label>
              <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecteer budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="25k-50k">€25K - €50K</SelectItem>
                  <SelectItem value="50k-100k">€50K - €100K</SelectItem>
                  <SelectItem value="100k-250k">€100K - €250K</SelectItem>
                  <SelectItem value="250k+">€250K+</SelectItem>
                  <SelectItem value="unknown">Nog niet bekend</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bericht *
            </label>
            <Textarea
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder="Vertel ons over je AI-uitdaging of wat je wilt bereiken..."
              rows={4}
              required
            />
          </div>
          
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-2">
              <AlertCircle className="w-5 h-5 text-red-600" />
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}
          
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full"
            variant="agent"
            size="lg"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Versturen...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                {variant === 'assessment' ? 'Start Gratis Assessment' : 
                 variant === 'consultation' ? 'Plan Consultatie' :
                 variant === 'demo' ? 'Vraag Demo Aan' : 'Verstuur Bericht'}
              </>
            )}
          </Button>
          
          <p className="text-xs text-gray-500 text-center">
            Door dit formulier in te vullen ga je akkoord met onze{' '}
            <a href="/privacy" className="text-agent-blue hover:underline">privacyverklaring</a>.
            We nemen binnen 24 uur contact met je op.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
