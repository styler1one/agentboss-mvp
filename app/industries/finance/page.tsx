'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Building2, 
  Shield, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Users,
  FileText,
  AlertTriangle,
  Zap,
  BarChart3,
  Lock,
  Globe,
  Phone,
  Calendar
} from "lucide-react"

const painPoints = [
  {
    icon: AlertTriangle,
    title: "Regelgeving Compliance",
    description: "Complexe financiële regelgeving (MiFID II, GDPR, PSD2) vereist constante monitoring",
    impact: "€2.3M gemiddelde boete per overtreding"
  },
  {
    icon: Clock,
    title: "Trage Procesverwerking", 
    description: "Handmatige verwerking van leningen, claims en KYC processen",
    impact: "47% van klanten wacht >5 dagen op goedkeuring"
  },
  {
    icon: Users,
    title: "Beperkte 24/7 Service",
    description: "Klanten verwachten instant support, maar personeelskosten zijn hoog",
    impact: "€850K jaarlijkse kosten per FTE customer service"
  },
  {
    icon: FileText,
    title: "Documentverwerking",
    description: "Duizenden documenten handmatig controleren en verwerken",
    impact: "65% van tijd besteed aan administratie"
  }
]

const solutions = [
  {
    title: "Compliance Monitoring Agent",
    description: "Automatische monitoring van alle transacties tegen actuele regelgeving",
    features: [
      "Real-time MiFID II compliance checking",
      "Automatische rapportage aan toezichthouders", 
      "Risk scoring per transactie",
      "Audit trail documentatie"
    ],
    roi: "€1.8M besparing op compliance kosten",
    implementation: "6 weken",
    price: "€45,000"
  },
  {
    title: "Loan Processing Agent",
    description: "End-to-end automatisering van het kredietbeoordelingsproces",
    features: [
      "Automatische documentverificatie",
      "Credit scoring met AI modellen",
      "Risk assessment en goedkeuring",
      "Klantcommunicatie automation"
    ],
    roi: "78% snellere verwerkingstijd",
    implementation: "8 weken", 
    price: "€65,000"
  },
  {
    title: "Customer Service Agent",
    description: "24/7 intelligente klantservice voor banking vragen",
    features: [
      "Natuurlijke taal verwerking",
      "Toegang tot klantgegevens",
      "Transactie ondersteuning",
      "Escalatie naar menselijke agents"
    ],
    roi: "€2.1M besparing op personeelskosten",
    implementation: "4 weken",
    price: "€35,000"
  }
]

const caseStudy = {
  company: "Nederlandse Hypotheekbank",
  logo: "🏦",
  challenge: "Handmatige hypotheekverwerking duurde gemiddeld 21 dagen met hoge foutmarge",
  solution: "AI-agent voor automatische documentverificatie en risicobeoordeling",
  results: [
    { metric: "Verwerkingstijd", before: "21 dagen", after: "3 dagen", improvement: "85% sneller" },
    { metric: "Foutmarge", before: "12%", after: "1.2%", improvement: "90% minder fouten" },
    { metric: "Klanttevredenheid", before: "6.2/10", after: "8.9/10", improvement: "+44%" },
    { metric: "Operationele kosten", before: "€2.1M", after: "€650K", improvement: "€1.45M besparing" }
  ],
  quote: "AgentBoss heeft onze hypotheekverwerking gerevolutioneerd. We kunnen nu binnen 3 dagen goedkeuring geven waar we vroeger 3 weken nodig hadden.",
  author: "Laura van der Berg, COO"
}

const complianceFeatures = [
  { name: "MiFID II", status: "Volledig compliant", icon: CheckCircle },
  { name: "GDPR", status: "Privacy by design", icon: Shield },
  { name: "PSD2", status: "Open banking ready", icon: Globe },
  { name: "Basel III", status: "Risk management", icon: BarChart3 },
  { name: "AML/KYC", status: "Automated screening", icon: Lock },
  { name: "IFRS 9", status: "Financial reporting", icon: FileText }
]

export default function FinanceIndustryPage() {
  const [, setShowContactModal] = useState(false)
  const [, setSelectedSolution] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-agent-navy via-blue-900 to-agent-blue text-white section-spacing">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              <Building2 className="w-4 h-4 mr-2" />
              Finance & Banking Solutions
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transformeer je <span className="gradient-text">Financiële Processen</span> met AI
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Van compliance monitoring tot klantservice - onze AI-agents automatiseren kritieke 
              financiële processen terwijl ze voldoen aan alle regelgeving.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-1">
              <Button 
                size="xl" 
                variant="agent" 
                className="text-lg hover:scale-105 transition-transform duration-200"
                onClick={() => setShowContactModal(true)}
              >
                Gratis Finance Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="xl" 
                variant="outline-white" 
                className="text-lg hover:scale-105 transition-all duration-200"
              >
                Bekijk Case Studies
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-up-delay-2">
              <div className="text-center">
                <div className="text-3xl font-bold text-agent-blue">€2.3M</div>
                <div className="text-sm text-blue-200">Gemiddelde besparing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-agent-green">85%</div>
                <div className="text-sm text-blue-200">Snellere verwerking</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">100%</div>
                <div className="text-sm text-blue-200">Regelgeving compliant</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">24/7</div>
                <div className="text-sm text-blue-200">Beschikbaarheid</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="section-spacing-compact bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-4xl font-bold text-agent-navy mb-4">
              Herken je deze uitdagingen?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Financiële instellingen worstelen met complexe processen, strenge regelgeving 
              en hoge operationele kosten.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 animate-fade-up-delay-1">
            {painPoints.map((pain, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-red-100 rounded-lg">
                      <pain.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {pain.title}
                      </h3>
                      <p className="text-gray-600 mb-3">
                        {pain.description}
                      </p>
                      <div className="bg-red-50 p-3 rounded-lg">
                        <p className="text-sm font-medium text-red-800">
                          💰 Impact: {pain.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="section-spacing-compact bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <Badge variant="outline" className="mb-4">
              <Zap className="w-4 h-4 mr-2" />
              AI-Powered Solutions
            </Badge>
            <h2 className="text-4xl font-bold text-agent-navy mb-4">
              Onze Finance AI-Agents
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gespecialiseerde AI-agents die jouw specifieke financiële processen automatiseren 
              en optimaliseren.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 animate-fade-up-delay-1">
            {solutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-agent-blue/20 to-agent-green/20 rounded-bl-full" />
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-agent-navy mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {solution.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-agent-green" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg mb-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-semibold text-agent-green">ROI Impact</div>
                        <div className="text-gray-700">{solution.roi}</div>
                      </div>
                      <div>
                        <div className="font-semibold text-agent-blue">Implementatie</div>
                        <div className="text-gray-700">{solution.implementation}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-agent-navy">
                      {solution.price}
                    </div>
                    <Button 
                      variant="agent"
                      onClick={() => setSelectedSolution(solution.title)}
                      className="hover:scale-105 transition-transform"
                    >
                      Meer Info
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="section-spacing-compact bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <Badge variant="outline" className="mb-4">
              <Shield className="w-4 h-4 mr-2" />
              Compliance & Security
            </Badge>
            <h2 className="text-4xl font-bold text-agent-navy mb-4">
              100% Compliant met Financiële Regelgeving
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Onze AI-agents zijn ontworpen met compliance in gedachten en voldoen aan 
              alle relevante financiële regelgeving.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-up-delay-1">
            {complianceFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <feature.icon className="w-12 h-12 text-agent-green mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-agent-navy mb-2">
                    {feature.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {feature.status}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="section-spacing-compact bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <Badge variant="outline" className="mb-4">
              <TrendingUp className="w-4 h-4 mr-2" />
              Success Story
            </Badge>
            <h2 className="text-4xl font-bold text-agent-navy mb-4">
              Case Study: {caseStudy.company}
            </h2>
          </div>
          
          <div className="max-w-6xl mx-auto animate-fade-up-delay-1">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-agent-navy to-agent-blue text-white p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="text-4xl">{caseStudy.logo}</div>
                    <div>
                      <h3 className="text-2xl font-bold">{caseStudy.company}</h3>
                      <p className="text-blue-200">Hypotheekverstrekker</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-3">Uitdaging</h4>
                      <p className="text-blue-100">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3">Oplossing</h4>
                      <p className="text-blue-100">{caseStudy.solution}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-agent-navy mb-6 text-center">
                    Resultaten na 6 maanden
                  </h4>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {caseStudy.results.map((result, index) => (
                      <div key={index} className="text-center">
                        <div className="bg-gradient-to-br from-agent-blue/10 to-agent-green/10 p-6 rounded-xl">
                          <h5 className="font-semibold text-agent-navy mb-2">
                            {result.metric}
                          </h5>
                          <div className="space-y-1">
                            <div className="text-sm text-gray-500">
                              Voor: {result.before}
                            </div>
                            <div className="text-sm text-gray-500">
                              Na: {result.after}
                            </div>
                            <div className="text-lg font-bold text-agent-green">
                              {result.improvement}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl text-center">
                    <blockquote className="text-lg italic text-gray-700 mb-4">
                      "{caseStudy.quote}"
                    </blockquote>
                    <cite className="text-agent-navy font-semibold">
                      — {caseStudy.author}
                    </cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing-compact bg-gradient-to-br from-agent-navy to-agent-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-up">
            <h2 className="text-4xl font-bold mb-6">
              Klaar om je financiële processen te transformeren?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Krijg een gratis assessment van je huidige processen en ontdek hoe AI 
              jouw organisatie €2M+ kan besparen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="xl" 
                variant="secondary" 
                className="text-lg hover:scale-105 transition-transform bg-white text-agent-navy"
                onClick={() => setShowContactModal(true)}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Plan Gratis Consultatie
              </Button>
              <Button 
                size="xl" 
                variant="outline-white" 
                className="text-lg hover:scale-105 transition-all duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Bel Direct: +31 20 123 4567
              </Button>
            </div>
            
            <div className="text-sm text-blue-200">
              🔒 Geen verplichtingen • Gratis ROI berekening • 30 minuten expert advies
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
