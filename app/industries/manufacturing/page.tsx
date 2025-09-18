'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Factory, 
  Shield, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Settings,
  FileText,
  AlertTriangle,
  Zap,
  BarChart3,
  Cog,
  Calendar,
  Phone,
  Truck
} from "lucide-react"

const painPoints = [
  {
    icon: AlertTriangle,
    title: "Productie Inefficiëntie",
    description: "Onverwachte stilstand en suboptimale machine performance leiden tot productieverliezen",
    impact: "€2.8M jaarlijkse verliezen door ongeplande stilstand"
  },
  {
    icon: Settings,
    title: "Kwaliteitscontrole Uitdagingen", 
    description: "Handmatige inspectie is traag, inconsistent en vatbaar voor menselijke fouten",
    impact: "8% van producten faalt kwaliteitscontrole"
  },
  {
    icon: Truck,
    title: "Supply Chain Complexiteit",
    description: "Gebrek aan real-time inzicht in voorraad en leveranciers leidt tot vertragingen",
    impact: "€1.2M extra kosten door supply chain inefficiëntie"
  },
  {
    icon: BarChart3,
    title: "Data Silos & Rapportage",
    description: "Gefragmenteerde systemen maken real-time inzicht en besluitvorming moeilijk",
    impact: "35% van beslissingen gebaseerd op verouderde data"
  }
]

const solutions = [
  {
    title: "Production Optimization Agent",
    description: "Predictive maintenance en real-time productie optimalisatie",
    features: [
      "Predictive maintenance algoritmes",
      "Real-time OEE monitoring en optimalisatie", 
      "Automatische productie planning",
      "Machine learning performance analytics"
    ],
    roi: "€2.1M besparing op maintenance kosten",
    implementation: "10 weken",
    price: "€95,000"
  },
  {
    title: "Quality Control Agent",
    description: "AI-powered kwaliteitscontrole en defect detectie",
    features: [
      "Computer vision defect detection",
      "Automatische kwaliteitsrapportage",
      "Statistical process control",
      "Root cause analysis automation"
    ],
    roi: "92% reductie in defecten",
    implementation: "12 weken", 
    price: "€75,000"
  },
  {
    title: "Supply Chain Agent",
    description: "Intelligente supply chain management en optimalisatie",
    features: [
      "Demand forecasting & planning",
      "Supplier performance monitoring",
      "Inventory optimization",
      "Risk assessment & mitigation"
    ],
    roi: "€1.8M besparing op inventory kosten",
    implementation: "8 weken",
    price: "€65,000"
  }
]

const caseStudy = {
  company: "Philips Manufacturing Netherlands",
  logo: "🏭",
  challenge: "Ongeplande machine stilstand en kwaliteitsissues leidden tot 15% productiviteitsverlies",
  solution: "AI-agents voor predictive maintenance, quality control en supply chain optimalisatie",
  results: [
    { metric: "Machine uptime", before: "78%", after: "94%", improvement: "+21%" },
    { metric: "Defect rate", before: "3.2%", after: "0.8%", improvement: "75% reductie" },
    { metric: "Productiviteit", before: "100%", after: "135%", improvement: "+35%" },
    { metric: "Maintenance kosten", before: "€3.2M", after: "€1.8M", improvement: "€1.4M besparing" }
  ],
  quote: "De AI-agents hebben onze productie getransformeerd. We hebben nu voorspelbare processen en ongekende efficiëntie.",
  author: "Jan Vermeulen, Plant Manager"
}

const complianceFeatures = [
  { name: "ISO 9001", status: "Quality management", icon: CheckCircle },
  { name: "ISO 14001", status: "Environmental management", icon: Shield },
  { name: "ISO 45001", status: "Occupational health & safety", icon: Settings },
  { name: "IEC 62443", status: "Industrial cybersecurity", icon: Cog },
  { name: "CE Marking", status: "European conformity", icon: FileText },
  { name: "GDPR", status: "Data protection compliance", icon: Shield }
]

export default function ManufacturingIndustryPage() {
  const [, setShowContactModal] = useState(false)
  const [, setSelectedSolution] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-700 via-red-600 to-orange-600 text-white section-spacing">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              <Factory className="w-4 h-4 mr-2" />
              Manufacturing & Industry
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Optimaliseer je <span className="gradient-text">Productie</span> met AI
            </h1>
            
            <p className="text-xl text-orange-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Van predictive maintenance tot kwaliteitscontrole - onze AI-agents maximaliseren 
              productie-efficiëntie en minimaliseren downtime.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-1">
              <Button 
                size="xl" 
                variant="agent" 
                className="text-lg hover:scale-105 transition-transform duration-200"
                onClick={() => setShowContactModal(true)}
              >
                Gratis Manufacturing Assessment
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
                <div className="text-3xl font-bold text-orange-300">€3.1M</div>
                <div className="text-sm text-orange-200">Gemiddelde besparing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-300">35%</div>
                <div className="text-sm text-orange-200">Productiviteitsverbetering</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">92%</div>
                <div className="text-sm text-orange-200">Minder defecten</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">94%</div>
                <div className="text-sm text-orange-200">Machine uptime</div>
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
              Herken je deze productie-uitdagingen?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Manufacturing bedrijven worstelen met ongeplande stilstand, kwaliteitsissues 
              en complexe supply chains die de winstgevendheid bedreigen.
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
              Manufacturing AI Solutions
            </Badge>
            <h2 className="text-4xl font-bold text-agent-navy mb-4">
              Onze Manufacturing AI-Agents
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gespecialiseerde AI-agents die productieprocessen optimaliseren en 
              operationele excellentie realiseren.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 animate-fade-up-delay-1">
            {solutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-bl-full" />
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
                  
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg mb-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-semibold text-orange-700">ROI Impact</div>
                        <div className="text-gray-700">{solution.roi}</div>
                      </div>
                      <div>
                        <div className="font-semibold text-red-700">Implementatie</div>
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
      <section className="section-spacing-compact bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <Badge variant="outline" className="mb-4">
              <Shield className="w-4 h-4 mr-2" />
              Manufacturing Compliance
            </Badge>
            <h2 className="text-4xl font-bold text-agent-navy mb-4">
              100% Compliant met Industrie Standaarden
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Onze AI-agents voldoen aan alle relevante manufacturing en 
              kwaliteitsstandaarden voor veilige en betrouwbare productie.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-up-delay-1">
            {complianceFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <feature.icon className="w-12 h-12 text-orange-600 mx-auto mb-4" />
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
              Manufacturing Success Story
            </Badge>
            <h2 className="text-4xl font-bold text-agent-navy mb-4">
              Case Study: {caseStudy.company}
            </h2>
          </div>
          
          <div className="max-w-6xl mx-auto animate-fade-up-delay-1">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-orange-700 to-red-600 text-white p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="text-4xl">{caseStudy.logo}</div>
                    <div>
                      <h3 className="text-2xl font-bold">{caseStudy.company}</h3>
                      <p className="text-orange-200">Medical Equipment Manufacturing</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-3">Uitdaging</h4>
                      <p className="text-orange-100">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3">Oplossing</h4>
                      <p className="text-orange-100">{caseStudy.solution}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-agent-navy mb-6 text-center">
                    Resultaten na 12 maanden
                  </h4>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {caseStudy.results.map((result, index) => (
                      <div key={index} className="text-center">
                        <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 p-6 rounded-xl">
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
                            <div className="text-lg font-bold text-orange-600">
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
      <section className="section-spacing-compact bg-gradient-to-br from-orange-700 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-up">
            <h2 className="text-4xl font-bold mb-6">
              Klaar om je productie te optimaliseren?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Krijg een gratis assessment van je huidige productieprocessen en ontdek hoe AI 
              jouw manufacturing €3.1M+ kan besparen en efficiëntie kan verhogen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="xl" 
                variant="secondary" 
                className="text-lg hover:scale-105 transition-transform bg-white text-orange-700"
                onClick={() => setShowContactModal(true)}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Plan Gratis Manufacturing Consultatie
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
            
            <div className="text-sm text-orange-200">
              🔒 Geen verplichtingen • Gratis ROI berekening • ISO compliant • 30 minuten expert advies
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}
