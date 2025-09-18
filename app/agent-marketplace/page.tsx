'use client'

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowLeft, CheckCircle, Clock, Users, Star, 
  Play, Shield, Search, 
  TrendingUp, Phone, Eye, ShoppingCart
} from "lucide-react"
import ContactModal from "@/components/ContactModal"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const agentCategories = [
  { name: "Alle", count: 50, color: "bg-gray-500" },
  { name: "Sales & Marketing", count: 12, color: "bg-blue-500" },
  { name: "Customer Service", count: 8, color: "bg-green-500" },
  { name: "Human Resources", count: 6, color: "bg-purple-500" },
  { name: "Finance & Compliance", count: 9, color: "bg-yellow-500" },
  { name: "Operations", count: 7, color: "bg-red-500" }
]

const featuredAgents = [
  {
    id: 1,
    name: "SalesBot Pro",
    category: "Sales & Marketing",
    description: "AI-agent die leads kwalificeert en follow-up emails automatiseert",
    price: "€15,000",
    monthlyFee: "€500",
    rating: 4.8,
    reviews: 124,
    deployments: 89,
    roi: "340%",
    savings: "€45K/jaar",
    timeframe: "3 maanden",
    features: [
      "Lead scoring & qualification",
      "Automated email sequences", 
      "CRM integratie (Salesforce, HubSpot)",
      "A/B testing van messaging",
      "Real-time analytics dashboard"
    ],
    industries: ["Technology", "SaaS", "E-commerce"],
    compliance: ["GDPR", "SOC2"],
    implementation: "2 weken",
    support: "24/7 Priority",
    demo: true,
    popular: true
  },
  {
    id: 2,
    name: "CustomerCare AI",
    category: "Customer Service", 
    description: "24/7 klantenservice met natuurlijke taalverwerking",
    price: "€25,000",
    monthlyFee: "€750",
    rating: 4.9,
    reviews: 87,
    deployments: 156,
    roi: "280%",
    savings: "€120K/jaar",
    timeframe: "2 maanden",
    features: [
      "Multi-channel support (chat, email, telefoon)",
      "Sentiment analyse & escalatie",
      "Knowledge base integratie",
      "Ticket routing & prioritering",
      "Customer satisfaction tracking"
    ],
    industries: ["Retail", "Banking", "Healthcare"],
    compliance: ["GDPR", "HIPAA", "PCI-DSS"],
    implementation: "3 weken",
    support: "Dedicated Account Manager",
    demo: true,
    popular: false
  },
  {
    id: 3,
    name: "FinanceGuard AI",
    category: "Finance & Compliance",
    description: "Automatische fraud detectie en compliance monitoring",
    price: "€125,000",
    monthlyFee: "€2,500",
    rating: 4.9,
    reviews: 34,
    deployments: 23,
    roi: "650%",
    savings: "€500K/jaar",
    timeframe: "6 maanden",
    features: [
      "Real-time fraud detection",
      "Regulatory compliance automation",
      "Risk assessment & scoring",
      "Automated reporting & alerts",
      "Blockchain transaction analysis"
    ],
    industries: ["Banking", "Insurance", "Fintech"],
    compliance: ["SOX", "Basel III", "MiFID II", "GDPR"],
    implementation: "8 weken",
    support: "Compliance Expert Team",
    demo: false,
    popular: true
  }
]

const marketplaceStats = [
  { metric: "Agents Available", value: "50+", description: "Ready-to-deploy AI agents" },
  { metric: "Avg. Implementation", value: "3 weken", description: "From purchase to production" },
  { metric: "Customer Satisfaction", value: "4.8/5", description: "Average agent rating" },
  { metric: "Total ROI Generated", value: "€12.5M", description: "Across all deployments" }
]

export default function AgentMarketplacePage() {
  const [showContactModal, setShowContactModal] = useState(false)
  const [selectedAgent, setSelectedAgent] = useState<typeof featuredAgents[0] | null>(null)
  const [showAgentModal, setShowAgentModal] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("Alle")

  const filteredAgents = featuredAgents.filter(agent => 
    selectedCategory === "Alle" || agent.category === selectedCategory
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-agent-navy via-green-900 to-agent-green text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Link href="/" className="inline-flex items-center text-blue-200 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Terug naar home
              </Link>
            </div>

            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Agent Marketplace
            </Badge>
            
            <h1 className="text-5xl font-bold mb-6">
              50+ Ready-to-Deploy AI Agents
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Kies uit onze <strong className="text-agent-green">pre-built AI agents</strong> en 
              ga binnen <strong className="text-agent-green">3 weken live</strong>. 
              Alle agents zijn getest, gecertificeerd en komen met onze Triple Guarantee.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="xl" 
                variant="secondary" 
                className="text-lg"
                onClick={() => {
                  document.getElementById('agents')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <Search className="w-5 h-5 mr-2" />
                Browse Agents
              </Button>
              <Button 
                size="xl" 
                variant="outline-white" 
                className="text-lg"
                onClick={() => setShowContactModal(true)}
              >
                Custom Agent Aanvragen
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {marketplaceStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-agent-green">{stat.value}</div>
                  <div className="text-sm text-blue-200">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-agent-navy mb-4">
              Browse by Category
            </h2>
            <p className="text-gray-600">
              Vind de perfecte agent voor jouw specifieke use case
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {agentCategories.map((category) => (
              <Button
                key={category.name}
                variant={selectedCategory === category.name ? "agent" : "outline"}
                onClick={() => setSelectedCategory(category.name)}
                className="flex items-center space-x-2"
              >
                <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                <span>{category.name}</span>
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Agents */}
      <section id="agents" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Star className="w-4 h-4 mr-2" />
              Featured Agents
            </Badge>
            <h2 className="text-4xl font-bold text-agent-navy mb-4">
              Meest Populaire AI Agents
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bewezen agents met hoge ROI en uitstekende reviews. 
              Klaar voor implementatie binnen 3 weken.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAgents.map((agent) => (
              <Card 
                key={agent.id} 
                className={`hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  agent.popular ? 'ring-2 ring-agent-green' : ''
                }`}
                onClick={() => {
                  setSelectedAgent(agent)
                  setShowAgentModal(true)
                }}
              >
                {agent.popular && (
                  <Badge 
                    variant="success" 
                    className="absolute -top-3 left-4 z-10"
                  >
                    <Star className="w-3 h-3 mr-1" />
                    Populair
                  </Badge>
                )}

                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{agent.category}</Badge>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="text-sm font-semibold">{agent.rating}</span>
                      <span className="text-xs text-gray-500 ml-1">({agent.reviews})</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl">{agent.name}</CardTitle>
                  <CardDescription className="text-sm">{agent.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Pricing */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-2xl font-bold text-agent-navy">{agent.price}</div>
                        <div className="text-sm text-gray-500">+ {agent.monthlyFee}/maand</div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">{agent.roi}</div>
                        <div className="text-xs text-gray-500">Avg. ROI</div>
                      </div>
                    </div>
                  </div>

                  {/* Key Stats */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 text-gray-500 mr-2" />
                      <span>{agent.deployments} deployments</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-gray-500 mr-2" />
                      <span>{agent.implementation}</span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="w-4 h-4 text-gray-500 mr-2" />
                      <span>{agent.savings}</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 text-gray-500 mr-2" />
                      <span>{agent.compliance.length} compliance</span>
                    </div>
                  </div>

                  {/* Features Preview */}
                  <div>
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {agent.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                      {agent.features.length > 3 && (
                        <li className="text-sm text-agent-blue font-medium">
                          +{agent.features.length - 3} meer features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-2 pt-4">
                    {agent.demo && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        onClick={(e) => {
                          e.stopPropagation()
                        }}
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    )}
                    <Button 
                      variant="agent" 
                      size="sm" 
                      className="flex-1"
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedAgent(agent)
                        setShowContactModal(true)
                      }}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-agent-navy to-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Klaar om je AI Agent te Implementeren?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Browse onze complete marketplace of vraag een custom agent aan. 
            Binnen 3 weken ben je live met je AI oplossing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              variant="secondary" 
              size="xl"
              onClick={() => {
                document.getElementById('agents')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <Search className="w-5 h-5 mr-2" />
              Browse Alle Agents
            </Button>
            <Button 
              variant="outline-white" 
              size="xl"
              onClick={() => setShowContactModal(true)}
            >
              <Phone className="w-5 h-5 mr-2" />
              Custom Agent Aanvragen
            </Button>
          </div>

          <div className="text-sm text-blue-200">
            🔒 Triple Guarantee • 3 weken implementatie • 24/7 support
          </div>
        </div>
      </section>

      <Footer />

      {/* Contact Modal */}
      <ContactModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
        type="consultation"
        title={selectedAgent ? `Implementeer ${selectedAgent.name}` : "Agent Marketplace Consultatie"}
      />

      {/* Agent Detail Modal */}
      {selectedAgent && showAgentModal && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
          <Card className="max-w-4xl w-full max-h-[90vh] shadow-2xl animate-in zoom-in-95 duration-300">
            <CardHeader className="relative bg-gradient-to-r from-agent-navy to-green-900 text-white">
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-2 right-2 text-white hover:bg-white/20"
                onClick={() => setShowAgentModal(false)}
              >
                ✕
              </Button>
              
              <div className="flex items-center justify-between pr-12">
                <div>
                  <CardTitle className="text-2xl">{selectedAgent.name}</CardTitle>
                  <CardDescription className="text-blue-100 text-lg">
                    {selectedAgent.description}
                  </CardDescription>
                  <Badge variant="secondary" className="mt-2 bg-white/20 text-white border-white/30">
                    {selectedAgent.category}
                  </Badge>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">{selectedAgent.price}</div>
                  <div className="text-blue-200">+ {selectedAgent.monthlyFee}/maand</div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-8 max-h-[60vh] overflow-y-auto space-y-6">
              {/* Key Metrics */}
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-agent-green">{selectedAgent.roi}</div>
                  <div className="text-sm text-gray-600">ROI</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-agent-blue">{selectedAgent.savings}</div>
                  <div className="text-sm text-gray-600">Savings</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">{selectedAgent.timeframe}</div>
                  <div className="text-sm text-gray-600">Payback</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">{selectedAgent.deployments}</div>
                  <div className="text-sm text-gray-600">Deployments</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Features */}
                <div>
                  <h4 className="font-semibold text-lg mb-4">Functionaliteiten</h4>
                  <ul className="space-y-3">
                    {selectedAgent.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Details */}
                <div>
                  <h4 className="font-semibold text-lg mb-4">Implementation</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Implementation:</span>
                      <span className="font-semibold">{selectedAgent.implementation}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Support:</span>
                      <span className="font-semibold">{selectedAgent.support}</span>
                    </div>
                  </div>

                  <h4 className="font-semibold text-lg mb-3 mt-6">Industries</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedAgent.industries.map((industry, idx) => (
                      <Badge key={idx} variant="secondary">{industry}</Badge>
                    ))}
                  </div>

                  <h4 className="font-semibold text-lg mb-3 mt-6">Compliance</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedAgent.compliance.map((comp, idx) => (
                      <Badge key={idx} variant="outline" className="border-green-500 text-green-700">
                        <Shield className="w-3 h-3 mr-1" />
                        {comp}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <Button 
                  variant="agent" 
                  size="lg" 
                  className="flex-1"
                  onClick={() => {
                    setShowAgentModal(false)
                    setShowContactModal(true)
                  }}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Implementeer Agent
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => setShowAgentModal(false)}
                >
                  Sluiten
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
