'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Truck, 
  Shield, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  FileText,
  AlertTriangle,
  Zap,
  Package,
  Calendar,
  Phone
} from "lucide-react"

const painPoints = [
  {
    icon: AlertTriangle,
    title: "Route Inefficiëntie",
    description: "Suboptimale route planning leidt tot hogere brandstofkosten en langere levertijden",
    impact: "€1.8M jaarlijkse extra kosten door inefficiënte routes"
  },
  {
    icon: Truck,
    title: "Fleet Management Complexiteit", 
    description: "Moeilijk om real-time inzicht te krijgen in voertuig status en performance",
    impact: "25% van voertuigen onderbenut door slechte planning"
  },
  {
    icon: Package,
    title: "Warehouse Operatie Uitdagingen",
    description: "Handmatige processen in warehouse leiden tot fouten en vertragingen",
    impact: "€650K verlies door warehouse inefficiënties"
  },
  {
    icon: Clock,
    title: "Delivery Time Variabiliteit",
    description: "Onvoorspelbare levertijden leiden tot ontevreden klanten en claims",
    impact: "15% van leveringen te laat, €400K aan claims"
  }
]

const solutions = [
  {
    title: "Route Optimization Agent",
    description: "AI-powered route planning en real-time traffic optimization",
    features: [
      "Dynamic route optimization",
      "Real-time traffic integration", 
      "Multi-stop delivery planning",
      "Fuel consumption optimization"
    ],
    roi: "€1.2M besparing op brandstofkosten",
    implementation: "8 weken",
    price: "€58,000"
  },
  {
    title: "Fleet Management Agent",
    description: "Intelligente fleet monitoring en predictive maintenance",
    features: [
      "Vehicle performance tracking",
      "Predictive maintenance alerts",
      "Driver behavior analysis",
      "Fleet utilization optimization"
    ],
    roi: "30% reductie in maintenance kosten",
    implementation: "10 weken", 
    price: "€48,000"
  },
  {
    title: "Warehouse Agent",
    description: "Automated warehouse operations en inventory management",
    features: [
      "Automated picking optimization",
      "Inventory level monitoring",
      "Quality control automation",
      "Loading dock scheduling"
    ],
    roi: "€850K besparing op labor kosten",
    implementation: "12 weken",
    price: "€65,000"
  }
]

const caseStudy = {
  company: "TransLog Nederland",
  logo: "🚛",
  challenge: "Stijgende brandstofkosten en inefficiënte routes leidden tot dalende marges",
  solution: "AI-agents voor route optimalisatie, fleet management en warehouse automation",
  results: [
    { metric: "Brandstofkosten", before: "€2.8M", after: "€1.9M", improvement: "32% besparing" },
    { metric: "On-time delivery", before: "78%", after: "94%", improvement: "+21%" },
    { metric: "Fleet utilization", before: "65%", after: "87%", improvement: "+34%" },
    { metric: "Warehouse efficiency", before: "100%", after: "145%", improvement: "+45%" }
  ],
  quote: "De AI-agents hebben onze logistiek gerevolutioneerd. We rijden slimmer, niet harder, en onze klanten zijn veel tevredener.",
  author: "Peter Janssen, Operations Director"
}

const complianceFeatures = [
  { name: "ADR", status: "Dangerous goods transport", icon: Shield },
  { name: "GDPR", status: "Driver & customer data", icon: FileText },
  { name: "Tachograph", status: "Digital tachograph compliance", icon: Clock },
  { name: "CMR", status: "International transport", icon: Truck },
  { name: "ISO 28000", status: "Supply chain security", icon: Package },
  { name: "Green Deal", status: "Environmental compliance", icon: CheckCircle }
]

export default function LogisticsIndustryPage() {
  const [, setShowContactModal] = useState(false)
  const [, setSelectedSolution] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-700 via-orange-600 to-yellow-600 text-white section-spacing">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              <Truck className="w-4 h-4 mr-2" />
              Logistics & Transport
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Optimaliseer je <span className="gradient-text">Logistiek</span> met AI
            </h1>
            
            <p className="text-xl text-yellow-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Van route optimalisatie tot warehouse automation - onze AI-agents maximaliseren 
              efficiëntie en minimaliseren kosten in je hele supply chain.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-1">
              <Button 
                size="xl" 
                variant="agent" 
                className="text-lg hover:scale-105 transition-transform duration-200"
                onClick={() => setShowContactModal(true)}
              >
                Gratis Logistics Assessment
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
                <div className="text-3xl font-bold text-yellow-300">€2.7M</div>
                <div className="text-sm text-yellow-200">Gemiddelde besparing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-300">30%</div>
                <div className="text-sm text-yellow-200">Brandstofbesparing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-300">94%</div>
                <div className="text-sm text-yellow-200">On-time delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">45%</div>
                <div className="text-sm text-yellow-200">Warehouse efficiëntie</div>
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
              Herken je deze logistieke uitdagingen?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transport bedrijven worstelen met stijgende brandstofkosten, inefficiënte routes 
              en complexe warehouse operaties die de winstgevendheid bedreigen.
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
              Logistics AI Solutions
            </Badge>
            <h2 className="text-4xl font-bold text-agent-navy mb-4">
              Onze Logistics AI-Agents
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gespecialiseerde AI-agents die transport bedrijven helpen kosten 
              te besparen en operationele excellentie te realiseren.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 animate-fade-up-delay-1">
            {solutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-bl-full" />
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
                  
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg mb-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-semibold text-yellow-700">ROI Impact</div>
                        <div className="text-gray-700">{solution.roi}</div>
                      </div>
                      <div>
                        <div className="font-semibold text-orange-700">Implementatie</div>
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
      <section className="section-spacing-compact bg-gradient-to-br from-gray-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <Badge variant="outline" className="mb-4">
              <Shield className="w-4 h-4 mr-2" />
              Transport Compliance
            </Badge>
            <h2 className="text-4xl font-bold text-agent-navy mb-4">
              100% Compliant met Transport Regelgeving
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Onze AI-agents voldoen aan alle relevante transport en 
              logistieke regelgeving voor veilige en legale operaties.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-up-delay-1">
            {complianceFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <feature.icon className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
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
              Logistics Success Story
            </Badge>
            <h2 className="text-4xl font-bold text-agent-navy mb-4">
              Case Study: {caseStudy.company}
            </h2>
          </div>
          
          <div className="max-w-6xl mx-auto animate-fade-up-delay-1">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-yellow-700 to-orange-600 text-white p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="text-4xl">{caseStudy.logo}</div>
                    <div>
                      <h3 className="text-2xl font-bold">{caseStudy.company}</h3>
                      <p className="text-yellow-200">Transport & Logistics - 250 voertuigen</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-3">Uitdaging</h4>
                      <p className="text-yellow-100">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3">Oplossing</h4>
                      <p className="text-yellow-100">{caseStudy.solution}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-agent-navy mb-6 text-center">
                    Resultaten na 10 maanden
                  </h4>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {caseStudy.results.map((result, index) => (
                      <div key={index} className="text-center">
                        <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 p-6 rounded-xl">
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
                            <div className="text-lg font-bold text-yellow-600">
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
      <section className="section-spacing-compact bg-gradient-to-br from-yellow-700 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-up">
            <h2 className="text-4xl font-bold mb-6">
              Klaar om je logistiek te optimaliseren?
            </h2>
            <p className="text-xl text-yellow-100 mb-8">
              Krijg een gratis assessment van je huidige transport operaties en ontdek hoe AI 
              jouw logistiek €2.7M+ kan besparen en efficiëntie kan verhogen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="xl" 
                variant="secondary" 
                className="text-lg hover:scale-105 transition-transform bg-white text-yellow-700"
                onClick={() => setShowContactModal(true)}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Plan Gratis Logistics Consultatie
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
            
            <div className="text-sm text-yellow-200">
              🔒 Geen verplichtingen • Gratis ROI berekening • ADR compliant • 30 minuten expert advies
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}
