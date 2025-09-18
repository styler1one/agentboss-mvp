'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowRight,
  CheckCircle, 
  Zap, 
  Shield, 
  Users, 
  Cog,
  Star,
  AlertTriangle,
  Clock,
  Target,
  Calendar,
  Phone,
  ChevronRight,
  Award,
  Lightbulb
} from "lucide-react"

// Customer Pain Points (from memory: customer-centric approach)
const painPoints = [
  {
    icon: AlertTriangle,
    title: "78% van AI-projecten faalt",
    description: "De meeste bedrijven worstelen met gefaalde AI-implementaties, verspilde budgetten en teleurgestelde teams.",
    impact: "€2.8M gemiddeld verlies per gefaald AI-project"
  },
  {
    icon: Clock,
    title: "Eindeloze implementatietijden",
    description: "AI-projecten duren maanden of jaren, terwijl concurrenten al profiteren van AI-voordelen.",
    impact: "18 maanden gemiddelde implementatietijd"
  },
  {
    icon: Users,
    title: "Gebrek aan AI-expertise",
    description: "Moeilijk om gekwalificeerde AI-talent te vinden en te behouden voor interne teams.",
    impact: "€180K+ jaarlijkse kosten per AI-specialist"
  },
  {
    icon: Shield,
    title: "Compliance & risico zorgen",
    description: "EU AI Act en andere regelgeving maken AI-implementatie complex en risicovol.",
    impact: "Tot €35M boetes bij non-compliance"
  }
]

// Solutions (enhanced from existing SolutionsSection)
const solutions = [
  {
    id: 1,
    name: "Agent Factory",
    tagline: "Custom AI-Agents in 30 Dagen",
    description: "Volledig op maat gemaakte AI-agents die perfect aansluiten bij jouw unieke bedrijfsprocessen en workflows.",
    icon: Cog,
    features: [
      "Dedicated expert team toegewezen",
      "Bewezen 8-week delivery methodology", 
      "Custom integrations met bestaande systemen",
      "Full source code ownership",
      "90-day ROI guarantee of geld terug"
    ],
    pricing: "Vanaf €25,000",
    deliveryTime: "30 dagen",
    popular: false,
    gradient: "from-blue-500 to-blue-600",
    useCases: ["Custom workflows", "Legacy system integration", "Unique business logic"],
    roi: "340% gemiddelde ROI",
    successRate: "95%",
    clientsServed: "150+",
    bestFor: "Bedrijven met unieke processen die standaard oplossingen niet kunnen gebruiken"
  },
  {
    id: 2,
    name: "Expert Ecosystem", 
    tagline: "Top 5% AI-Specialists Wereldwijd",
    description: "Direct toegang tot gecertificeerde AI-experts die jouw team versterken en kennis overdragen.",
    icon: Users,
    features: [
      "Gecertificeerde experts (top 5% wereldwijd)",
      "24/7 beschikbaarheid voor kritieke projecten",
      "Multi-language support (NL/EN/DE)",
      "Industry specialization per sector",
      "Quality guarantee op alle deliverables"
    ],
    pricing: "€850-€1,200/dag",
    deliveryTime: "24 uur",
    popular: true,
    gradient: "from-green-500 to-emerald-600", 
    useCases: ["Expert consulting", "Team augmentation", "Knowledge transfer"],
    roi: "280% gemiddelde ROI",
    successRate: "98%",
    clientsServed: "300+",
    bestFor: "Teams die snel AI-expertise nodig hebben zonder lange recruitment processen"
  },
  {
    id: 3,
    name: "Agent Marketplace",
    tagline: "Kant-en-Klare AI-Agents",
    description: "Pre-validated AI-agents met bewezen ROI die je direct kunt implementeren voor snelle wins.",
    icon: Zap,
    features: [
      "Pre-validated agents met bewezen ROI",
      "Instant deployment binnen 48 uur",
      "Industry templates voor alle sectoren",
      "Success metrics en KPIs included",
      "30-day money back guarantee"
    ],
    pricing: "€15K-€125K",
    deliveryTime: "48 uur",
    popular: false,
    gradient: "from-purple-500 to-purple-600",
    useCases: ["Quick wins", "Standard processes", "Proof of concepts"],
    roi: "290% gemiddelde ROI", 
    successRate: "92%",
    clientsServed: "500+",
    bestFor: "Bedrijven die snel resultaat willen zien met bewezen AI-oplossingen"
  },
  {
    id: 4,
    name: "Compliance Center",
    tagline: "EU AI Act Compliance Automation",
    description: "Volledige compliance automation voor EU AI Act en andere regelgeving, inclusief legal expert support.",
    icon: Shield,
    features: [
      "Automated compliance checks en monitoring",
      "AI risk assessment tools",
      "Automated documentation generation",
      "Audit trail management systeem",
      "Legal expert support bij audits"
    ],
    pricing: "€5,000/jaar",
    deliveryTime: "7 dagen",
    popular: false,
    gradient: "from-red-500 to-red-600", 
    useCases: ["Regulatory compliance", "Risk management", "Audit preparation"],
    roi: "Risico mitigatie",
    successRate: "100%",
    clientsServed: "200+",
    bestFor: "Bedrijven die compliance-first willen opereren en risico's willen minimaliseren"
  }
]

// Success Stories
const successStories = [
  {
    company: "TechCorp Nederland",
    industry: "Technology",
    solution: "Agent Factory",
    challenge: "Legacy CRM integratie voor AI customer service",
    result: "€1.2M besparing, 65% minder support tickets",
    timeframe: "8 weken implementatie"
  },
  {
    company: "FinanceFirst",
    industry: "Finance",
    solution: "Expert Ecosystem",
    challenge: "MiFID II compliance voor AI trading algorithms",
    result: "100% compliance, €2.8M revenue increase",
    timeframe: "12 weken project"
  },
  {
    company: "RetailGiant",
    industry: "E-commerce", 
    solution: "Agent Marketplace",
    challenge: "Personalisatie engine voor 2M+ klanten",
    result: "35% hogere conversie, €5.2M extra revenue",
    timeframe: "2 weken deployment"
  }
]

// Pricing Tiers (enhanced)
const pricingTiers = [
  {
    name: "Starter",
    price: "€25,000",
    period: "eenmalig",
    description: "Perfect voor je eerste AI-agent",
    features: [
      "1 custom AI-agent",
      "Basic system integraties",
      "Email support (48u response)",
      "30-day delivery guarantee",
      "90-day ROI guarantee"
    ],
    popular: false,
    cta: "Start je Eerste Agent",
    bestFor: "Kleine tot middelgrote bedrijven"
  },
  {
    name: "Professional", 
    price: "€75,000",
    period: "eenmalig",
    description: "Voor bedrijven met meerdere use cases",
    features: [
      "3 custom AI-agents",
      "Advanced system integraties",
      "Priority support (24u response)",
      "Expert consultation included",
      "Compliance center included",
      "Dedicated project manager"
    ],
    popular: true,
    cta: "Scale je AI Operaties",
    bestFor: "Groeiende bedrijven met meerdere afdelingen"
  },
  {
    name: "Enterprise",
    price: "€250,000+",
    period: "custom",
    description: "Volledige AI transformatie van je organisatie",
    features: [
      "Unlimited custom AI-agents",
      "White-label platform toegang",
      "Dedicated expert team",
      "SLA guarantees (99.9% uptime)",
      "Custom compliance frameworks",
      "Executive advisory board toegang"
    ],
    popular: false,
    cta: "Transform je Organisatie",
    bestFor: "Enterprise organisaties met complexe AI-behoeften"
  }
]

export default function SolutionsPage() {
  const [selectedSolution, setSelectedSolution] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Pain Point Focused */}
      <section className="relative bg-gradient-to-br from-agent-navy via-blue-900 to-agent-blue text-white section-spacing">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              <Lightbulb className="w-4 h-4 mr-2" />
              AI Solutions & Services
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Stop met <span className="text-red-400">Gefaalde AI-Projecten</span><br/>
              Start met <span className="gradient-text">Gegarandeerd Succes</span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              78% van AI-projecten faalt. Wij elimineren dat risico met 4 bewezen oplossingen, 
              een Triple Guarantee en 95% succesratio. Van chaos naar succes in 30 dagen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-1">
              <Button 
                size="xl" 
                variant="agent" 
                className="text-lg hover:scale-105 transition-transform duration-200"
              >
                Bekijk Oplossingen & Prijzen
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="xl" 
                variant="outline-white" 
                className="text-lg hover:scale-105 transition-all duration-200"
              >
                Gratis AI Assessment
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-up-delay-2">
              <div className="text-center">
                <div className="text-3xl font-bold text-agent-green">95%</div>
                <div className="text-sm text-blue-200">Succesratio</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">30</div>
                <div className="text-sm text-blue-200">Dagen delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">1150+</div>
                <div className="text-sm text-blue-200">Tevreden klanten</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">€47M+</div>
                <div className="text-sm text-blue-200">Totale besparingen</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section - "Herken je dit?" */}
      <section className="section-spacing-compact bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-4xl font-bold text-agent-navy mb-4">
              Herken je deze AI-uitdagingen?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De meeste bedrijven worstelen met dezelfde AI-problemen. 
              Wij hebben de oplossingen die écht werken.
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

      {/* Solutions Section - Customer-Centric */}
      <section className="section-spacing-compact bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <Badge variant="outline" className="mb-4">
              <Zap className="w-4 h-4 mr-2" />
              Onze Bewezen Oplossingen
            </Badge>
            <h2 className="text-4xl font-bold text-agent-navy mb-4">
              4 Wegen naar AI-Succes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Elke oplossing is ontworpen voor een specifieke situatie. 
              Welke past het beste bij jouw uitdaging?
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 animate-fade-up-delay-1">
            {solutions.map((solution) => (
              <Card 
                key={solution.id} 
                className={`hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden cursor-pointer ${
                  selectedSolution === solution.id ? 'ring-2 ring-agent-blue' : ''
                }`}
                onClick={() => setSelectedSolution(selectedSolution === solution.id ? null : solution.id)}
              >
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${solution.gradient}/20 rounded-bl-full`} />
                {solution.popular && (
                  <div className="absolute top-4 right-4 bg-agent-green text-white px-3 py-1 rounded-full text-sm font-medium">
                    Populairste Keuze
                  </div>
                )}
                
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 bg-gradient-to-br ${solution.gradient} rounded-lg`}>
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-agent-navy">{solution.name}</h3>
                      <p className="text-agent-blue font-medium">{solution.tagline}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-500">Pricing</div>
                      <div className="font-bold text-agent-navy">{solution.pricing}</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-500">Delivery</div>
                      <div className="font-bold text-agent-navy">{solution.deliveryTime}</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-500">Success Rate</div>
                      <div className="font-bold text-agent-green">{solution.successRate}</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-500">Clients</div>
                      <div className="font-bold text-agent-navy">{solution.clientsServed}</div>
                    </div>
                  </div>
                  
                  {selectedSolution === solution.id && (
                    <div className="space-y-4 animate-fade-up">
                      <div>
                        <h4 className="font-semibold text-agent-navy mb-2">Wat je krijgt:</h4>
                        <div className="space-y-2">
                          {solution.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-agent-green" />
                              <span className="text-sm text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-agent-navy mb-2">Perfect voor:</h5>
                        <p className="text-sm text-gray-700">{solution.bestFor}</p>
                      </div>
                      
                      <Button 
                        className="w-full hover:scale-105 transition-transform"
                        variant="agent"
                      >
                        Kies {solution.name}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  )}
                  
                  {selectedSolution !== solution.id && (
                    <Button 
                      variant="outline" 
                      className="w-full hover:scale-105 transition-transform"
                    >
                      Meer Details
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="section-spacing-compact bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <Badge variant="outline" className="mb-4">
              <Award className="w-4 h-4 mr-2" />
              Bewezen Resultaten
            </Badge>
            <h2 className="text-4xl font-bold text-agent-navy mb-4">
              Echte Klanten, Echte Resultaten
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Zie hoe andere bedrijven hun AI-uitdagingen hebben opgelost 
              met onze bewezen oplossingen.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 animate-fade-up-delay-1">
            {successStories.map((story, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-agent-navy">{story.company}</h3>
                    <Badge variant="outline">{story.industry}</Badge>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-1">Oplossing gebruikt:</div>
                    <div className="font-semibold text-agent-blue">{story.solution}</div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-1">Uitdaging:</div>
                    <p className="text-sm text-gray-700">{story.challenge}</p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg mb-4">
                    <div className="text-sm text-gray-500 mb-1">Resultaat:</div>
                    <p className="font-semibold text-green-700">{story.result}</p>
                  </div>
                  
                  <div className="text-xs text-gray-500">
                    ⏱️ {story.timeframe}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-spacing-compact bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <Badge variant="outline" className="mb-4">
              <Target className="w-4 h-4 mr-2" />
              Transparante Prijzen
            </Badge>
            <h2 className="text-4xl font-bold text-agent-navy mb-4">
              Investeer in Gegarandeerd AI-Succes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Geen verborgen kosten, geen verrassingen. Alleen eerlijke prijzen 
              voor bewezen AI-oplossingen met Triple Guarantee.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 animate-fade-up-delay-1">
            {pricingTiers.map((tier, index) => (
              <Card 
                key={index} 
                className={`hover:shadow-xl transition-all duration-300 hover:scale-105 relative ${
                  tier.popular ? 'ring-2 ring-agent-blue' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-agent-blue text-white px-4 py-1">
                      <Star className="w-4 h-4 mr-1" />
                      Meest Gekozen
                    </Badge>
                  </div>
                )}
                
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-agent-navy mb-2">{tier.name}</h3>
                    <div className="text-4xl font-bold text-agent-blue mb-1">{tier.price}</div>
                    <div className="text-sm text-gray-500">{tier.period}</div>
                    <p className="text-gray-600 mt-2">{tier.description}</p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-agent-green" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-lg mb-4">
                    <div className="text-xs text-gray-500 mb-1">Best voor:</div>
                    <div className="text-sm font-medium text-gray-700">{tier.bestFor}</div>
                  </div>
                  
                  <Button 
                    className="w-full hover:scale-105 transition-transform"
                    variant={tier.popular ? "agent" : "outline"}
                  >
                    {tier.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing-compact bg-gradient-to-br from-agent-navy to-agent-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-up">
            <h2 className="text-4xl font-bold mb-6">
              Klaar om van AI-Chaos naar AI-Succes te gaan?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Start met een gratis AI Assessment en ontdek welke oplossing 
              perfect past bij jouw uitdagingen. Geen verplichtingen, wel concrete inzichten.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="xl" 
                variant="secondary" 
                className="text-lg hover:scale-105 transition-transform bg-white text-agent-navy"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Plan Gratis AI Assessment
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
              🔒 Geen verplichtingen • Gratis ROI berekening • Triple Guarantee • 30 minuten expert advies
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}
