'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Heart, 
  Shield, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Users,
  FileText,
  AlertTriangle,
  Zap,
  Activity,
  Stethoscope,
  Calendar,
  Phone,
  UserCheck
} from "lucide-react"

const painPoints = [
  {
    icon: AlertTriangle,
    title: "Administratieve Overbelasting",
    description: "Artsen besteden 60% van hun tijd aan administratie in plaats van patiëntenzorg",
    impact: "€180K jaarlijkse kosten per arts aan admin tijd"
  },
  {
    icon: Clock,
    title: "Patiënt Scheduling Complexiteit", 
    description: "Complexe planning van afspraken, behandelingen en follow-ups leidt tot inefficiëntie",
    impact: "25% van afspraken worden gemist door planningsfouten"
  },
  {
    icon: Users,
    title: "Personeelstekort & Werkdruk",
    description: "Chronisch personeelstekort verhoogt werkdruk en burnout risico",
    impact: "€85K kosten per vertrekkende verpleegkundige"
  },
  {
    icon: FileText,
    title: "Diagnostiek & Documentatie",
    description: "Handmatige verwerking van testresultaten en medische dossiers",
    impact: "12% diagnostische fouten door menselijke factoren"
  }
]

const solutions = [
  {
    title: "Patient Care Agent",
    description: "24/7 patiëntenzorg ondersteuning en symptoom monitoring",
    features: [
      "Symptoom assessment en triage",
      "Medicatie herinneringen en monitoring", 
      "Post-operatieve zorg begeleiding",
      "Automatische escalatie bij risico's"
    ],
    roi: "€1.2M besparing op nursing kosten",
    implementation: "6 weken",
    price: "€55,000"
  },
  {
    title: "Diagnostic Support Agent",
    description: "AI-ondersteunde diagnostiek en behandelingsadvies",
    features: [
      "Medische beeldanalyse ondersteuning",
      "Lab resultaten interpretatie",
      "Behandelingsprotocol suggesties",
      "Drug interaction warnings"
    ],
    roi: "40% snellere diagnose tijd",
    implementation: "10 weken", 
    price: "€85,000"
  },
  {
    title: "Administrative Agent",
    description: "Volledige automatisering van medische administratie",
    features: [
      "Automatische EPD documentatie",
      "Insurance claim processing",
      "Appointment scheduling optimization",
      "Regulatory compliance monitoring"
    ],
    roi: "€850K besparing op admin kosten",
    implementation: "8 weken",
    price: "€45,000"
  }
]

const caseStudy = {
  company: "Ziekenhuis Groep Nederland",
  logo: "🏥",
  challenge: "Administratieve overbelasting leidde tot 60% minder tijd voor patiëntenzorg en hoge burnout",
  solution: "AI-agents voor administratie, patiëntmonitoring en diagnostiek ondersteuning",
  results: [
    { metric: "Admin tijd", before: "60%", after: "25%", improvement: "58% reductie" },
    { metric: "Patiënt tevredenheid", before: "7.1/10", after: "8.8/10", improvement: "+24%" },
    { metric: "Diagnostiek snelheid", before: "4.2 dagen", after: "1.8 dagen", improvement: "57% sneller" },
    { metric: "Personeelsretentie", before: "72%", after: "89%", improvement: "+17%" }
  ],
  quote: "Onze artsen kunnen zich eindelijk weer focussen op wat ze het beste doen: patiënten helpen. De AI-agents hebben onze workflow gerevolutioneerd.",
  author: "Dr. Sarah van Dijk, Hoofd Interne Geneeskunde"
}

const complianceFeatures = [
  { name: "GDPR", status: "Privacy by design", icon: Shield },
  { name: "NEN 7510", status: "Healthcare security", icon: UserCheck },
  { name: "HL7 FHIR", status: "Interoperability", icon: Activity },
  { name: "FDA Guidelines", status: "Medical device compliance", icon: CheckCircle },
  { name: "ISO 13485", status: "Medical devices QMS", icon: Stethoscope },
  { name: "MDR", status: "EU Medical Device Regulation", icon: FileText }
]

export default function HealthcareIndustryPage() {
  const [, setShowContactModal] = useState(false)
  const [, setSelectedSolution] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-800 via-emerald-700 to-green-600 text-white section-spacing">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              <Heart className="w-4 h-4 mr-2" />
              Healthcare & Life Sciences
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Revolutioneer je <span className="gradient-text">Patiëntenzorg</span> met AI
            </h1>
            
            <p className="text-xl text-green-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Van administratie tot diagnostiek - onze AI-agents ondersteunen zorgverleners 
              zodat zij zich kunnen focussen op wat het belangrijkst is: patiëntenzorg.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-1">
              <Button 
                size="xl" 
                variant="agent" 
                className="text-lg hover:scale-105 transition-transform duration-200"
                onClick={() => setShowContactModal(true)}
              >
                Gratis Healthcare Assessment
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
                <div className="text-3xl font-bold text-green-300">€1.8M</div>
                <div className="text-sm text-green-200">Gemiddelde besparing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-300">60%</div>
                <div className="text-sm text-green-200">Minder administratie</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">40%</div>
                <div className="text-sm text-green-200">Snellere diagnostiek</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">24/7</div>
                <div className="text-sm text-green-200">Patiënt monitoring</div>
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
              Herken je deze zorguitdagingen?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Healthcare professionals worstelen met toenemende administratieve last, 
              personeelstekort en complexe patiëntenzorg processen.
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
              Healthcare AI Solutions
            </Badge>
            <h2 className="text-4xl font-bold text-agent-navy mb-4">
              Onze Healthcare AI-Agents
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gespecialiseerde AI-agents die zorgverleners ondersteunen en 
              patiëntenzorg optimaliseren.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 animate-fade-up-delay-1">
            {solutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-bl-full" />
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
                  
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg mb-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-semibold text-green-700">ROI Impact</div>
                        <div className="text-gray-700">{solution.roi}</div>
                      </div>
                      <div>
                        <div className="font-semibold text-emerald-700">Implementatie</div>
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
      <section className="section-spacing-compact bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <Badge variant="outline" className="mb-4">
              <Shield className="w-4 h-4 mr-2" />
              Healthcare Compliance
            </Badge>
            <h2 className="text-4xl font-bold text-agent-navy mb-4">
              100% Compliant met Healthcare Regelgeving
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Onze AI-agents voldoen aan alle relevante healthcare en medische 
              device regelgeving voor veilige patiëntenzorg.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-up-delay-1">
            {complianceFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <feature.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
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
              Healthcare Success Story
            </Badge>
            <h2 className="text-4xl font-bold text-agent-navy mb-4">
              Case Study: {caseStudy.company}
            </h2>
          </div>
          
          <div className="max-w-6xl mx-auto animate-fade-up-delay-1">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-green-700 to-emerald-600 text-white p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="text-4xl">{caseStudy.logo}</div>
                    <div>
                      <h3 className="text-2xl font-bold">{caseStudy.company}</h3>
                      <p className="text-green-200">Algemeen Ziekenhuis - 850 bedden</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-3">Uitdaging</h4>
                      <p className="text-green-100">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3">Oplossing</h4>
                      <p className="text-green-100">{caseStudy.solution}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-agent-navy mb-6 text-center">
                    Resultaten na 8 maanden
                  </h4>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {caseStudy.results.map((result, index) => (
                      <div key={index} className="text-center">
                        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-6 rounded-xl">
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
                            <div className="text-lg font-bold text-green-600">
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
      <section className="section-spacing-compact bg-gradient-to-br from-green-700 to-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-up">
            <h2 className="text-4xl font-bold mb-6">
              Klaar om je patiëntenzorg te transformeren?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Krijg een gratis assessment van je huidige zorgprocessen en ontdek hoe AI 
              jouw zorgverleners €1.8M+ kan besparen en patiëntenzorg kan verbeteren.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="xl" 
                variant="secondary" 
                className="text-lg hover:scale-105 transition-transform bg-white text-green-700"
                onClick={() => setShowContactModal(true)}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Plan Gratis Healthcare Consultatie
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
            
            <div className="text-sm text-green-200">
              🔒 Geen verplichtingen • Gratis ROI berekening • GDPR compliant • 30 minuten expert advies
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}
