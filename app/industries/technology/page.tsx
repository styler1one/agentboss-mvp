'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Laptop, 
  Shield, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Users,
  FileText,
  AlertTriangle,
  Zap,
  Code,
  Calendar,
  Phone,
  Target
} from "lucide-react"

const painPoints = [
  {
    icon: AlertTriangle,
    title: "Customer Churn & Retention",
    description: "Hoge churn rates door gebrek aan proactieve customer success en onboarding",
    impact: "€450K jaarlijkse revenue verlies per 1% churn"
  },
  {
    icon: Clock,
    title: "Support Scalability Issues", 
    description: "Support team kan niet meeschalen met groeiende klantbase en complexiteit",
    impact: "65% van tickets duurt >24 uur om op te lossen"
  },
  {
    icon: Users,
    title: "Product Feedback Chaos",
    description: "Gefragmenteerde feedback van klanten leidt tot verkeerde product prioriteiten",
    impact: "40% van features wordt niet gebruikt door klanten"
  },
  {
    icon: Code,
    title: "Development Inefficiëntie",
    description: "Repetitieve taken en handmatige processen vertragen product development",
    impact: "30% van development tijd besteed aan repetitieve taken"
  }
]

const solutions = [
  {
    title: "Customer Success Agent",
    description: "Proactieve customer success en churn preventie automation",
    features: [
      "Churn risk prediction en alerting",
      "Automated onboarding journeys", 
      "Usage analytics en health scoring",
      "Proactive customer outreach"
    ],
    roi: "€1.8M revenue retention verbetering",
    implementation: "4 weken",
    price: "€35,000"
  },
  {
    title: "Technical Support Agent",
    description: "24/7 intelligente technical support en issue resolution",
    features: [
      "Automated ticket classification",
      "Knowledge base integration",
      "Code debugging assistance",
      "Escalation management"
    ],
    roi: "70% snellere resolution time",
    implementation: "6 weken", 
    price: "€45,000"
  },
  {
    title: "Product Intelligence Agent",
    description: "Data-driven product development en feature prioritization",
    features: [
      "User behavior analytics",
      "Feature usage tracking",
      "Feedback sentiment analysis",
      "Product roadmap optimization"
    ],
    roi: "€850K besparing op development kosten",
    implementation: "8 weken",
    price: "€55,000"
  }
]

const caseStudy = {
  company: "TechScale SaaS Platform",
  logo: "💻",
  challenge: "50% churn rate en overweldigde support team leidden tot stagnerende groei",
  solution: "AI-agents voor customer success, technical support en product intelligence",
  results: [
    { metric: "Churn rate", before: "12%", after: "6%", improvement: "50% reductie" },
    { metric: "Support resolution", before: "48 uur", after: "8 uur", improvement: "83% sneller" },
    { metric: "Feature adoption", before: "35%", after: "68%", improvement: "+94%" },
    { metric: "Customer LTV", before: "€18K", after: "€31K", improvement: "+72%" }
  ],
  quote: "De AI-agents hebben onze customer success getransformeerd. We kunnen nu proactief handelen in plaats van reactief.",
  author: "Lisa Chen, VP Customer Success"
}

const complianceFeatures = [
  { name: "GDPR", status: "Data protection compliance", icon: Shield },
  { name: "SOC 2", status: "Security & availability", icon: CheckCircle },
  { name: "ISO 27001", status: "Information security", icon: Shield },
  { name: "CCPA", status: "California privacy compliance", icon: FileText },
  { name: "PCI DSS", status: "Payment card security", icon: Target },
  { name: "HIPAA", status: "Healthcare data protection", icon: Users }
]

export default function TechnologyIndustryPage() {
  const [, setShowContactModal] = useState(false)
  const [, setSelectedSolution] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-700 via-pink-600 to-purple-600 text-white section-spacing">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              <Laptop className="w-4 h-4 mr-2" />
              Technology & SaaS
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Scale je <span className="gradient-text">SaaS Business</span> met AI
            </h1>
            
            <p className="text-xl text-purple-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Van customer success tot product development - onze AI-agents helpen tech bedrijven 
              schalen zonder de complexiteit en kosten.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-1">
              <Button 
                size="xl" 
                variant="agent" 
                className="text-lg hover:scale-105 transition-transform duration-200"
                onClick={() => setShowContactModal(true)}
              >
                Gratis SaaS Growth Assessment
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
                <div className="text-3xl font-bold text-purple-300">€1.2M</div>
                <div className="text-sm text-purple-200">Gemiddelde besparing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-300">50%</div>
                <div className="text-sm text-purple-200">Lagere churn rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">70%</div>
                <div className="text-sm text-purple-200">Snellere support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">24/7</div>
                <div className="text-sm text-purple-200">Customer success</div>
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
              Herken je deze SaaS uitdagingen?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tech bedrijven worstelen met customer churn, support scalability 
              en product development inefficiënties die groei belemmeren.
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
              SaaS AI Solutions
            </Badge>
            <h2 className="text-4xl font-bold text-agent-navy mb-4">
              Onze Technology AI-Agents
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gespecialiseerde AI-agents die tech bedrijven helpen schalen 
              met focus op customer success en product excellence.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 animate-fade-up-delay-1">
            {solutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-bl-full" />
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
                  
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg mb-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-semibold text-purple-700">ROI Impact</div>
                        <div className="text-gray-700">{solution.roi}</div>
                      </div>
                      <div>
                        <div className="font-semibold text-pink-700">Implementatie</div>
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
      <section className="section-spacing-compact bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <Badge variant="outline" className="mb-4">
              <Shield className="w-4 h-4 mr-2" />
              Technology Compliance
            </Badge>
            <h2 className="text-4xl font-bold text-agent-navy mb-4">
              100% Compliant met Tech & Privacy Standaarden
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Onze AI-agents voldoen aan alle relevante technologie en 
              privacy regelgeving voor veilige en betrouwbare SaaS operaties.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-up-delay-1">
            {complianceFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <feature.icon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
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
              SaaS Success Story
            </Badge>
            <h2 className="text-4xl font-bold text-agent-navy mb-4">
              Case Study: {caseStudy.company}
            </h2>
          </div>
          
          <div className="max-w-6xl mx-auto animate-fade-up-delay-1">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-purple-700 to-pink-600 text-white p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="text-4xl">{caseStudy.logo}</div>
                    <div>
                      <h3 className="text-2xl font-bold">{caseStudy.company}</h3>
                      <p className="text-purple-200">B2B SaaS - 15,000+ users</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-3">Uitdaging</h4>
                      <p className="text-purple-100">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3">Oplossing</h4>
                      <p className="text-purple-100">{caseStudy.solution}</p>
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
                        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 rounded-xl">
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
                            <div className="text-lg font-bold text-purple-600">
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
      <section className="section-spacing-compact bg-gradient-to-br from-purple-700 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-up">
            <h2 className="text-4xl font-bold mb-6">
              Klaar om je SaaS business te schalen?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Krijg een gratis assessment van je huidige customer success en product processen. 
              Ontdek hoe AI jouw tech bedrijf €1.2M+ kan besparen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="xl" 
                variant="secondary" 
                className="text-lg hover:scale-105 transition-transform bg-white text-purple-700"
                onClick={() => setShowContactModal(true)}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Plan Gratis SaaS Growth Consultatie
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
            
            <div className="text-sm text-purple-200">
              🔒 Geen verplichtingen • Gratis ROI berekening • SOC 2 compliant • 30 minuten expert advies
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}
