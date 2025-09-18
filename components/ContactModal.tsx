'use client'

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X, Calendar, Phone, Mail, CheckCircle, Clock, Users } from "lucide-react"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  type: 'consultation' | 'assessment' | 'expert' | 'demo'
  title?: string
}

export default function ContactModal({ isOpen, onClose, type, title }: ContactModalProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    employees: '',
    industry: '',
    challenge: '',
    budget: '',
    timeline: ''
  })

  if (!isOpen) return null

  const getModalConfig = () => {
    switch (type) {
      case 'consultation':
        return {
          title: 'Gratis 30-min Consultatie',
          subtitle: 'Ontdek hoe AI jouw bedrijf kan transformeren',
          icon: Calendar,
          value: '€2,500 waarde',
          color: 'from-agent-blue to-blue-600'
        }
      case 'assessment':
        return {
          title: 'Gratis AI Assessment',
          subtitle: 'Complete AI opportunity analyse voor jouw bedrijf',
          icon: CheckCircle,
          value: '€5,000 waarde',
          color: 'from-agent-green to-emerald-600'
        }
      case 'expert':
        return {
          title: 'Expert Matching',
          subtitle: 'Match met de perfecte AI specialist binnen 24 uur',
          icon: Users,
          value: 'Gratis matching',
          color: 'from-purple-500 to-purple-600'
        }
      case 'demo':
        return {
          title: 'Live Platform Demo',
          subtitle: 'Persoonlijke demonstratie van onze AI agents',
          icon: Phone,
          value: '€1,500 waarde',
          color: 'from-orange-500 to-red-500'
        }
      default:
        return {
          title: 'Contact AgentBoss',
          subtitle: 'Laten we jouw AI journey starten',
          icon: Mail,
          value: 'Gratis',
          color: 'from-agent-navy to-agent-blue'
        }
    }
  }

  const config = getModalConfig()
  const IconComponent = config.icon

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      // Simulate form submission
      setStep(4)
    }
  }

  const renderStep1 = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Volledige naam *</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            placeholder="Jan van der Berg"
            required
          />
        </div>
        <div>
          <Label htmlFor="email">Email adres *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            placeholder="jan@bedrijf.nl"
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="company">Bedrijfsnaam *</Label>
          <Input
            id="company"
            value={formData.company}
            onChange={(e) => setFormData({...formData, company: e.target.value})}
            placeholder="Jouw Bedrijf B.V."
            required
          />
        </div>
        <div>
          <Label htmlFor="phone">Telefoonnummer</Label>
          <Input
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            placeholder="+31 6 12345678"
          />
        </div>
      </div>
    </div>
  )

  const renderStep2 = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="employees">Aantal medewerkers</Label>
          <select 
            id="employees"
            className="w-full h-10 px-3 py-2 border border-input rounded-md text-sm"
            value={formData.employees}
            onChange={(e) => setFormData({...formData, employees: e.target.value})}
          >
            <option value="">Selecteer...</option>
            <option value="1-10">1-10 medewerkers</option>
            <option value="11-50">11-50 medewerkers</option>
            <option value="51-200">51-200 medewerkers</option>
            <option value="201-1000">201-1000 medewerkers</option>
            <option value="1000+">1000+ medewerkers</option>
          </select>
        </div>
        <div>
          <Label htmlFor="industry">Industrie</Label>
          <select 
            id="industry"
            className="w-full h-10 px-3 py-2 border border-input rounded-md text-sm"
            value={formData.industry}
            onChange={(e) => setFormData({...formData, industry: e.target.value})}
          >
            <option value="">Selecteer...</option>
            <option value="saas">SaaS/Technology</option>
            <option value="finance">Finance/Banking</option>
            <option value="healthcare">Healthcare</option>
            <option value="manufacturing">Manufacturing</option>
            <option value="retail">Retail/E-commerce</option>
            <option value="logistics">Logistics</option>
            <option value="other">Anders</option>
          </select>
        </div>
      </div>
      <div>
        <Label htmlFor="challenge">Grootste uitdaging met AI</Label>
        <select 
          id="challenge"
          className="w-full h-10 px-3 py-2 border border-input rounded-md text-sm"
          value={formData.challenge}
          onChange={(e) => setFormData({...formData, challenge: e.target.value})}
        >
          <option value="">Selecteer...</option>
          <option value="getting-started">Weet niet waar te beginnen</option>
          <option value="failed-projects">Eerdere AI projecten gefaald</option>
          <option value="roi-unclear">ROI onduidelijk</option>
          <option value="technical-expertise">Gebrek aan technische expertise</option>
          <option value="integration">Integratie met bestaande systemen</option>
          <option value="compliance">Compliance en security zorgen</option>
        </select>
      </div>
    </div>
  )

  const renderStep3 = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="budget">Budget indicatie</Label>
          <select 
            id="budget"
            className="w-full h-10 px-3 py-2 border border-input rounded-md text-sm"
            value={formData.budget}
            onChange={(e) => setFormData({...formData, budget: e.target.value})}
          >
            <option value="">Selecteer...</option>
            <option value="25k-50k">€25K - €50K</option>
            <option value="50k-100k">€50K - €100K</option>
            <option value="100k-250k">€100K - €250K</option>
            <option value="250k+">€250K+</option>
            <option value="unknown">Nog niet bepaald</option>
          </select>
        </div>
        <div>
          <Label htmlFor="timeline">Gewenste timeline</Label>
          <select 
            id="timeline"
            className="w-full h-10 px-3 py-2 border border-input rounded-md text-sm"
            value={formData.timeline}
            onChange={(e) => setFormData({...formData, timeline: e.target.value})}
          >
            <option value="">Selecteer...</option>
            <option value="asap">Zo snel mogelijk</option>
            <option value="1-3months">1-3 maanden</option>
            <option value="3-6months">3-6 maanden</option>
            <option value="6-12months">6-12 maanden</option>
            <option value="exploring">Nog aan het verkennen</option>
          </select>
        </div>
      </div>
      
      <div className="bg-blue-50 rounded-lg p-4">
        <h4 className="font-semibold text-agent-navy mb-2">Wat je krijgt:</h4>
        <div className="space-y-2 text-sm">
          <div className="flex items-center">
            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
            <span>Persoonlijke ROI berekening</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
            <span>AI opportunity mapping</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
            <span>Implementatie roadmap</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
            <span>Direct contact met expert</span>
          </div>
        </div>
      </div>
    </div>
  )

  const renderSuccess = () => (
    <div className="text-center space-y-6 py-8">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
        <CheckCircle className="w-8 h-8 text-green-600" />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-agent-navy mb-2">Bedankt {formData.name}!</h3>
        <p className="text-gray-600">
          Je aanvraag is ontvangen. Een van onze AI-experts neemt binnen 2 uur contact met je op.
        </p>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-4 text-left">
        <h4 className="font-semibold mb-2">Volgende stappen:</h4>
        <div className="space-y-2 text-sm">
          <div className="flex items-center">
            <Clock className="w-4 h-4 text-agent-blue mr-2" />
            <span>Binnen 2 uur: Expert neemt contact op</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 text-agent-blue mr-2" />
            <span>Binnen 24 uur: Consultatie ingepland</span>
          </div>
          <div className="flex items-center">
            <Mail className="w-4 h-4 text-agent-blue mr-2" />
            <span>Bevestiging email verzonden naar {formData.email}</span>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <Button variant="agent" size="lg" className="flex-1" onClick={onClose}>
          Sluiten
        </Button>
        <Button 
          variant="outline" 
          size="lg" 
          className="flex-1"
          onClick={() => {
            // Generate calendar event
            const startDate = new Date()
            startDate.setDate(startDate.getDate() + 1) // Tomorrow
            startDate.setHours(14, 0, 0, 0) // 2 PM
            
            const endDate = new Date(startDate)
            endDate.setMinutes(endDate.getMinutes() + 30) // 30 min meeting
            
            const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=AgentBoss%20Consultatie&dates=${startDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z/${endDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z&details=Consultatie%20met%20AgentBoss%20AI%20expert&location=Online%20(Teams)`
            
            window.open(calendarUrl, '_blank')
          }}
        >
          Voeg toe aan agenda
        </Button>
      </div>
    </div>
  )

  return (
    <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full shadow-2xl animate-in zoom-in-95 duration-300">
        <CardHeader className={`relative bg-gradient-to-r ${config.color} text-white`}>
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-2 right-2 text-white hover:bg-white/20"
            onClick={onClose}
          >
            <X className="w-4 h-4" />
          </Button>
          
          <div className="flex items-center space-x-4 pr-12">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <IconComponent className="w-6 h-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">{title || config.title}</CardTitle>
              <CardDescription className="text-blue-100">
                {config.subtitle}
              </CardDescription>
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-4">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              {config.value}
            </Badge>
            {step < 4 && (
              <div className="text-sm text-blue-200">
                Stap {step} van 3
              </div>
            )}
          </div>
        </CardHeader>

        <CardContent className="p-6">
          {step < 4 && (
            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 1 && renderStep1()}
              {step === 2 && renderStep2()}
              {step === 3 && renderStep3()}
              
              <div className="flex gap-4 pt-4">
                {step > 1 && (
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setStep(step - 1)}
                    className="flex-1"
                  >
                    Vorige
                  </Button>
                )}
                <Button 
                  type="submit" 
                  variant="agent" 
                  className="flex-1"
                  disabled={!formData.name || !formData.email || !formData.company}
                >
                  {step === 3 ? 'Verstuur Aanvraag' : 'Volgende'}
                </Button>
              </div>
            </form>
          )}
          
          {step === 4 && renderSuccess()}
        </CardContent>
      </Card>
    </div>
  )
}
