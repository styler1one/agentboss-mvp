'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Building2, 
  Heart, 
  Factory, 
  Laptop, 
  ShoppingCart, 
  Truck,
  ArrowRight,
  TrendingUp,
  CheckCircle
} from "lucide-react"
import Link from "next/link"

const industries = [
  {
    id: "finance",
    title: "Finance & Banking",
    icon: Building2,
    description: "Compliance monitoring, loan processing, en customer service automation",
    painPoints: ["Regelgeving compliance", "Trage procesverwerking", "Hoge operationele kosten"],
    solutions: ["Compliance Monitoring Agent", "Loan Processing Agent", "Customer Service Agent"],
    avgSaving: "€2.3M",
    avgROI: "340%",
    implementationTime: "6-8 weken",
    caseStudy: "Nederlandse Hypotheekbank: 85% snellere verwerking",
    color: "from-blue-600 to-indigo-600"
  },
  {
    id: "healthcare",
    title: "Healthcare & Life Sciences", 
    icon: Heart,
    description: "Patiëntenzorg optimalisatie, diagnostiek ondersteuning, en administratie automatisering",
    painPoints: ["Administratieve last", "Patiënt scheduling", "Diagnostiek ondersteuning"],
    solutions: ["Patient Care Agent", "Diagnostic Support Agent", "Administrative Agent"],
    avgSaving: "€1.8M",
    avgROI: "285%", 
    implementationTime: "8-10 weken",
    caseStudy: "Ziekenhuis Groep: 60% minder administratie",
    color: "from-green-600 to-emerald-600"
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Industry",
    icon: Factory,
    description: "Productie optimalisatie, kwaliteitscontrole, en supply chain management",
    painPoints: ["Productie inefficiëntie", "Kwaliteitscontrole", "Supply chain complexiteit"],
    solutions: ["Production Optimization Agent", "Quality Control Agent", "Supply Chain Agent"],
    avgSaving: "€3.1M",
    avgROI: "420%",
    implementationTime: "10-12 weken", 
    caseStudy: "Philips Manufacturing: 35% productiviteitsverbetering",
    color: "from-orange-600 to-red-600"
  },
  {
    id: "technology",
    title: "Technology & SaaS",
    icon: Laptop,
    description: "Customer success automation, technical support, en product development ondersteuning",
    painPoints: ["Customer churn", "Support scalability", "Product feedback verwerking"],
    solutions: ["Customer Success Agent", "Technical Support Agent", "Product Intelligence Agent"],
    avgSaving: "€1.2M",
    avgROI: "380%",
    implementationTime: "4-6 weken",
    caseStudy: "SaaS Startup: 50% lagere churn rate",
    color: "from-purple-600 to-pink-600"
  },
  {
    id: "ecommerce",
    title: "E-commerce & Retail",
    icon: ShoppingCart,
    description: "Personalisatie, inventory management, en customer experience optimalisatie",
    painPoints: ["Personalisatie schaal", "Inventory management", "Customer experience"],
    solutions: ["Personalization Agent", "Inventory Agent", "Customer Experience Agent"],
    avgSaving: "€950K",
    avgROI: "290%",
    implementationTime: "6-8 weken",
    caseStudy: "Online Retailer: 25% hogere conversie",
    color: "from-teal-600 to-cyan-600"
  },
  {
    id: "logistics",
    title: "Logistics & Transport",
    icon: Truck,
    description: "Route optimalisatie, fleet management, en warehouse automation",
    painPoints: ["Route inefficiëntie", "Fleet management", "Warehouse operaties"],
    solutions: ["Route Optimization Agent", "Fleet Management Agent", "Warehouse Agent"],
    avgSaving: "€2.7M",
    avgROI: "365%",
    implementationTime: "8-10 weken",
    caseStudy: "Transport Bedrijf: 30% brandstofbesparing",
    color: "from-yellow-600 to-orange-600"
  }
]

const stats = {
  totalClients: "156+",
  totalSavings: "€47M+", 
  avgImplementation: "7.2 weken",
  successRate: "95%"
}

export default function IndustriesOverviewPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-agent-navy via-blue-900 to-agent-blue text-white section-spacing">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              <TrendingUp className="w-4 h-4 mr-2" />
              Industry Solutions
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              AI-Agents voor <span className="gradient-text">Elke Industrie</span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Gespecialiseerde AI-oplossingen die de unieke uitdagingen van jouw sector aanpakken. 
              Van finance tot healthcare - wij hebben de expertise.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 animate-fade-up-delay-1">
              <div className="text-center">
                <div className="text-3xl font-bold text-agent-blue">{stats.totalClients}</div>
                <div className="text-sm text-blue-200">Tevreden klanten</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-agent-green">{stats.totalSavings}</div>
                <div className="text-sm text-blue-200">Totale besparingen</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">{stats.avgImplementation}</div>
                <div className="text-sm text-blue-200">Gem. implementatie</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">{stats.successRate}</div>
                <div className="text-sm text-blue-200">Succesratio</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-spacing-compact bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-4xl font-bold text-agent-navy mb-4">
              Kies jouw industrie
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ontdek hoe onze AI-agents specifiek zijn ontworpen voor de uitdagingen 
              en kansen in jouw sector.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 animate-fade-up-delay-1">
            {industries.map((industry) => (
              <Card key={industry.id} className="hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden group">
                <CardContent className="p-0">
                  {/* Header with gradient */}
                  <div className={`bg-gradient-to-r ${industry.color} text-white p-6`}>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-white/20 rounded-lg">
                        <industry.icon className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{industry.title}</h3>
                        <p className="text-white/80">{industry.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold">{industry.avgSaving}</div>
                        <div className="text-xs text-white/80">Gem. besparing</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{industry.avgROI}</div>
                        <div className="text-xs text-white/80">ROI</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{industry.implementationTime}</div>
                        <div className="text-xs text-white/80">Implementatie</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-6">
                      <h4 className="font-semibold text-agent-navy mb-3">Belangrijkste Uitdagingen:</h4>
                      <div className="space-y-2">
                        {industry.painPoints.map((point, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full" />
                            <span className="text-sm text-gray-600">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-agent-navy mb-3">Onze AI-Oplossingen:</h4>
                      <div className="space-y-2">
                        {industry.solutions.map((solution, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-agent-green" />
                            <span className="text-sm text-gray-700">{solution}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                      <h5 className="font-semibold text-agent-navy mb-2">Success Story:</h5>
                      <p className="text-sm text-gray-600">{industry.caseStudy}</p>
                    </div>
                    
                    <Link href={`/industries/${industry.id}`}>
                      <Button 
                        className="w-full hover:scale-105 transition-transform"
                        variant="agent"
                      >
                        Ontdek {industry.title} Oplossingen
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing-compact bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-up">
            <h2 className="text-4xl font-bold text-agent-navy mb-6">
              Zie je jouw industrie niet?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Wij ontwikkelen ook custom AI-agents voor unieke sectoren en specifieke bedrijfsprocessen. 
              Laat ons weten wat jouw uitdagingen zijn.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="xl" 
                variant="agent" 
                className="text-lg hover:scale-105 transition-transform"
              >
                Bespreek Custom Oplossing
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="xl" 
                variant="outline" 
                className="text-lg hover:scale-105 transition-all duration-200"
              >
                Bekijk Alle Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}
