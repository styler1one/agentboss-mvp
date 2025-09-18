'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ShoppingCart, 
  Shield, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Users,
  FileText,
  AlertTriangle,
  Zap,
  Package,
  Calendar,
  Phone,
  Target
} from "lucide-react"

const painPoints = [
  {
    icon: AlertTriangle,
    title: "Personalisatie op Schaal",
    description: "Moeilijk om relevante product aanbevelingen te geven aan duizenden klanten",
    impact: "€2.1M gemiste revenue door slechte personalisatie"
  },
  {
    icon: Package,
    title: "Inventory Management Chaos", 
    description: "Overstock en stockouts door inaccurate demand forecasting",
    impact: "€850K verlies door inventory inefficiënties"
  },
  {
    icon: Users,
    title: "Customer Experience Gaps",
    description: "Inconsistente customer journey en support over verschillende kanalen",
    impact: "35% cart abandonment door slechte UX"
  },
  {
    icon: Target,
    title: "Marketing ROI Onduidelijkheid",
    description: "Moeilijk om attribution en effectiviteit van marketing campaigns te meten",
    impact: "40% marketing budget inefficiënt besteed"
  }
]

const solutions = [
  {
    title: "Personalization Agent",
    description: "AI-powered product recommendations en customer journey personalisatie",
    features: [
      "Real-time product recommendations",
      "Dynamic pricing optimization", 
      "Personalized email campaigns",
      "Behavioral segmentation"
    ],
    roi: "€1.8M revenue lift door betere conversie",
    implementation: "6 weken",
    price: "€42,000"
  },
  {
    title: "Inventory Agent",
    description: "Intelligente voorraad management en demand forecasting",
    features: [
      "Demand forecasting algorithms",
      "Automated reorder points",
      "Seasonal trend analysis",
      "Supplier performance tracking"
    ],
    roi: "€650K besparing op inventory kosten",
    implementation: "8 weken", 
    price: "€38,000"
  },
  {
    title: "Customer Experience Agent",
    description: "Omnichannel customer support en experience optimization",
    features: [
      "24/7 chatbot customer support",
      "Order tracking automation",
      "Return process optimization",
      "Customer satisfaction monitoring"
    ],
    roi: "25% hogere customer retention",
    implementation: "4 weken",
    price: "€28,000"
  }
]

const caseStudy = {
  company: "Dutch Fashion Retailer",
  logo: "🛍️",
  challenge: "Lage conversie rates en hoge inventory kosten leidden tot dalende marges",
  solution: "AI-agents voor personalisatie, inventory management en customer experience",
  results: [
    { metric: "Conversie rate", before: "2.1%", after: "3.8%", improvement: "+81%" },
    { metric: "Average order value", before: "€67", after: "€89", improvement: "+33%" },
    { metric: "Inventory turnover", before: "4.2x", after: "6.8x", improvement: "+62%" },
    { metric: "Customer satisfaction", before: "7.2/10", after: "8.9/10", improvement: "+24%" }
  ],
  quote: "De AI-agents hebben onze e-commerce getransformeerd. Klanten krijgen nu precies wat ze willen, wanneer ze het willen.",
  author: "Mark de Vries, E-commerce Director"
}

const complianceFeatures = [
  { name: "GDPR", status: "Privacy & data protection", icon: Shield },
  { name: "PCI DSS", status: "Payment security", icon: CheckCircle },
  { name: "eIDAS", status: "Electronic identification", icon: FileText },
  { name: "Consumer Rights", status: "EU consumer protection", icon: Users },
  { name: "Cookie Law", status: "EU cookie compliance", icon: Target },
  { name: "Distance Selling", status: "EU distance selling rules", icon: Package }
]

export default function EcommerceIndustryPage() {
  const [, setShowContactModal] = useState(false)
  const [, setSelectedSolution] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-700 via-cyan-600 to-teal-600 text-white section-spacing">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              <ShoppingCart className="w-4 h-4 mr-2" />
              E-commerce & Retail
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Boost je <span className="gradient-text">E-commerce</span> met AI
            </h1>
            
            <p className="text-xl text-teal-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Van personalisatie tot inventory management - onze AI-agents optimaliseren 
              elke stap van de customer journey voor maximale conversie.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-1">
              <Button 
                size="xl" 
                variant="agent" 
                className="text-lg hover:scale-105 transition-transform duration-200"
                onClick={() => setShowContactModal(true)}
              >
                Gratis E-commerce Assessment
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
                <div className="text-3xl font-bold text-teal-300">€950K</div>
                <div className="text-sm text-teal-200">Gemiddelde besparing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-300">25%</div>
                <div className="text-sm text-teal-200">Hogere conversie</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">33%</div>
                <div className="text-sm text-teal-200">Hogere AOV</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">24/7</div>
                <div className="text-sm text-teal-200">Customer support</div>
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
              Herken je deze e-commerce uitdagingen?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Online retailers worstelen met personalisatie op schaal, inventory management 
              en het leveren van consistente customer experiences.
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
              E-commerce AI Solutions
            </Badge>
            <h2 className="text-4xl font-bold text-agent-navy mb-4">
              Onze E-commerce AI-Agents
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gespecialiseerde AI-agents die online retailers helpen conversies 
              te verhogen en operationele efficiëntie te verbeteren.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 animate-fade-up-delay-1">
            {solutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-bl-full" />
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
                  
                  <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-4 rounded-lg mb-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-semibold text-teal-700">ROI Impact</div>
                        <div className="text-gray-700">{solution.roi}</div>
                      </div>
                      <div>
                        <div className="font-semibold text-cyan-700">Implementatie</div>
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
      <section className="section-spacing-compact bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <Badge variant="outline" className="mb-4">
              <Shield className="w-4 h-4 mr-2" />
              E-commerce Compliance
            </Badge>
            <h2 className="text-4xl font-bold text-agent-navy mb-4">
              100% Compliant met E-commerce Regelgeving
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Onze AI-agents voldoen aan alle relevante e-commerce en 
              consumer protection regelgeving voor veilige online handel.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-up-delay-1">
            {complianceFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <feature.icon className="w-12 h-12 text-teal-600 mx-auto mb-4" />
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
              E-commerce Success Story
            </Badge>
            <h2 className="text-4xl font-bold text-agent-navy mb-4">
              Case Study: {caseStudy.company}
            </h2>
          </div>
          
          <div className="max-w-6xl mx-auto animate-fade-up-delay-1">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-teal-700 to-cyan-600 text-white p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="text-4xl">{caseStudy.logo}</div>
                    <div>
                      <h3 className="text-2xl font-bold">{caseStudy.company}</h3>
                      <p className="text-teal-200">Online Fashion - €25M omzet</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-3">Uitdaging</h4>
                      <p className="text-teal-100">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3">Oplossing</h4>
                      <p className="text-teal-100">{caseStudy.solution}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-agent-navy mb-6 text-center">
                    Resultaten na 4 maanden
                  </h4>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {caseStudy.results.map((result, index) => (
                      <div key={index} className="text-center">
                        <div className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 p-6 rounded-xl">
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
                            <div className="text-lg font-bold text-teal-600">
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
      <section className="section-spacing-compact bg-gradient-to-br from-teal-700 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-up">
            <h2 className="text-4xl font-bold mb-6">
              Klaar om je e-commerce te optimaliseren?
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Krijg een gratis assessment van je huidige online store en ontdek hoe AI 
              jouw e-commerce €950K+ kan besparen en conversies kan verhogen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="xl" 
                variant="secondary" 
                className="text-lg hover:scale-105 transition-transform bg-white text-teal-700"
                onClick={() => setShowContactModal(true)}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Plan Gratis E-commerce Consultatie
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
            
            <div className="text-sm text-teal-200">
              🔒 Geen verplichtingen • Gratis ROI berekening • GDPR compliant • 30 minuten expert advies
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}
