'use client'

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  Users, ShoppingCart, Star, CheckCircle, 
  Brain, Clock, Eye, Play
} from "lucide-react"
import ContactModal from "@/components/ContactModal"

const experts = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "AI Strategy Expert",
    experience: "12+ jaar",
    specialization: "Enterprise AI Implementation",
    rating: 4.9,
    projects: 67,
    hourlyRate: "€450",
    availability: "Beschikbaar",
    image: "/api/placeholder/80/80",
    skills: ["AI Strategy", "Change Management", "ROI Optimization"],
    certifications: ["AgentBoss Master", "AI Ethics Certified"],
    languages: ["Nederlands", "Engels", "Duits"]
  },
  {
    id: 2,
    name: "Prof. Marcus Chen",
    role: "ML Architecture Specialist",
    experience: "15+ jaar",
    specialization: "Machine Learning & Data Science",
    rating: 4.8,
    projects: 89,
    hourlyRate: "€520",
    availability: "Beschikbaar",
    image: "/api/placeholder/80/80",
    skills: ["Machine Learning", "Data Architecture", "MLOps"],
    certifications: ["AgentBoss Master", "Google Cloud ML"],
    languages: ["Engels", "Mandarijn", "Nederlands"]
  },
  {
    id: 3,
    name: "Lisa van der Berg",
    role: "Implementation Specialist",
    experience: "8+ jaar",
    specialization: "Rapid AI Deployment",
    rating: 4.9,
    projects: 134,
    hourlyRate: "€320",
    availability: "Beschikbaar",
    image: "/api/placeholder/80/80",
    skills: ["Project Management", "Integration", "Training"],
    certifications: ["AgentBoss Expert", "Scrum Master"],
    languages: ["Nederlands", "Engels", "Frans"]
  }
]

const featuredAgents = [
  {
    id: 1,
    name: "SalesBot Pro",
    category: "Sales & Marketing",
    price: "€15,000",
    monthlyFee: "€500",
    rating: 4.8,
    deployments: 89,
    roi: "340%",
    description: "AI-agent die leads kwalificeert en follow-up emails automatiseert",
    features: ["Lead scoring", "Email automation", "CRM integratie", "A/B testing"],
    popular: true,
    demoAvailable: true
  },
  {
    id: 2,
    name: "CustomerCare AI", 
    category: "Customer Service",
    price: "€25,000",
    monthlyFee: "€750",
    rating: 4.9,
    deployments: 156,
    roi: "280%",
    description: "24/7 klantenservice met natuurlijke taalverwerking",
    features: ["Multi-channel support", "Sentiment analyse", "Knowledge base", "Escalatie"],
    popular: false,
    demoAvailable: true
  },
  {
    id: 3,
    name: "FinanceGuard AI",
    category: "Finance & Compliance", 
    price: "€125,000",
    monthlyFee: "€2,500",
    rating: 4.9,
    deployments: 23,
    roi: "650%",
    description: "Automatische fraud detectie en compliance monitoring",
    features: ["Fraud detection", "Compliance automation", "Risk assessment", "Reporting"],
    popular: true,
    demoAvailable: false
  }
]

export default function ProductDeepDive() {
  const [activeTab, setActiveTab] = useState<'experts' | 'agents'>('experts')
  const [selectedExpert, setSelectedExpert] = useState<typeof experts[0] | null>(null)
  const [selectedAgent, setSelectedAgent] = useState<typeof featuredAgents[0] | null>(null)
  const [showContactModal, setShowContactModal] = useState(false)
  const [showExpertModal, setShowExpertModal] = useState(false)
  const [showAgentModal, setShowAgentModal] = useState(false)

  return (
    <section className="section-spacing-compact bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Brain className="w-4 h-4 mr-2" />
            Product Deep Dive
          </Badge>
          <h2 className="text-4xl font-bold text-agent-navy mb-4">
            Kies jouw perfecte AI-oplossing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert begeleiding of ready-to-deploy agents - 
            wij hebben de perfecte oplossing voor elke situatie.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-lg p-2">
            <Button
              variant={activeTab === 'experts' ? 'agent' : 'ghost'}
              onClick={() => setActiveTab('experts')}
              className="mr-2"
            >
              <Users className="w-4 h-4 mr-2" />
              Expert Network
            </Button>
            <Button
              variant={activeTab === 'agents' ? 'agent' : 'ghost'}
              onClick={() => setActiveTab('agents')}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Agent Marketplace
            </Button>
          </div>
        </div>

        {/* Expert Network Tab */}
        {activeTab === 'experts' && (
          <div>
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-agent-navy mb-4">
                Top 1% AI Experts op Aanvraag
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Onze gecertificeerde experts helpen je van strategie tot implementatie. 
                Gemiddelde match tijd: 24 uur.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {experts.map((expert) => (
                <Card 
                  key={expert.id} 
                  className="hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => {
                    setSelectedExpert(expert)
                    setShowExpertModal(true)
                  }}
                >
                  <CardHeader className="text-center">
                    <Avatar className="w-20 h-20 mx-auto mb-4">
                      <AvatarImage src={expert.image} />
                      <AvatarFallback>
                        {expert.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <CardTitle className="text-xl">{expert.name}</CardTitle>
                    <CardDescription className="text-lg font-semibold">
                      {expert.role}
                    </CardDescription>
                    
                    <div className="flex items-center justify-center space-x-2 mt-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="font-semibold">{expert.rating}</span>
                      <span className="text-gray-500">({expert.projects} projecten)</span>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-agent-navy">{expert.hourlyRate}/uur</div>
                      <Badge variant="success" className="mt-2">
                        <Clock className="w-3 h-3 mr-1" />
                        {expert.availability}
                      </Badge>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Specialisatie:</h4>
                      <p className="text-sm text-gray-600">{expert.specialization}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Top Skills:</h4>
                      <div className="flex flex-wrap gap-1">
                        {expert.skills.slice(0, 2).map((skill, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {expert.skills.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{expert.skills.length - 2}
                          </Badge>
                        )}
                      </div>
                    </div>

                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedExpert(expert)
                        setShowContactModal(true)
                      }}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Boek Consultatie
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Agent Marketplace Tab */}
        {activeTab === 'agents' && (
          <div>
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-agent-navy mb-4">
                Ready-to-Deploy AI Agents
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Pre-built, geteste agents die binnen 2-3 weken live kunnen. 
                Alle agents komen met onze Triple Guarantee.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredAgents.map((agent) => (
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
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl">{agent.name}</CardTitle>
                    <CardDescription>{agent.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
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

                    <div>
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {agent.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-2 pt-4">
                      {agent.demoAvailable && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1"
                          onClick={(e) => e.stopPropagation()}
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
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Implementeer
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-16 text-center">
          <div>
            <div className="text-3xl font-bold text-agent-navy">250+</div>
            <div className="text-sm text-gray-600">Certified Experts</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-agent-navy">50+</div>
            <div className="text-sm text-gray-600">Ready Agents</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-agent-navy">24h</div>
            <div className="text-sm text-gray-600">Avg Match Time</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-agent-navy">96%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
        type="consultation"
        title={
          selectedExpert ? `Boek ${selectedExpert.name}` :
          selectedAgent ? `Implementeer ${selectedAgent.name}` :
          "Product Consultatie"
        }
      />

      {/* Expert Detail Modal */}
      {selectedExpert && showExpertModal && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
          <Card className="max-w-2xl w-full max-h-[90vh] shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-agent-blue to-agent-green text-white">
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-2 right-2 text-white hover:bg-white/20"
                onClick={() => setShowExpertModal(false)}
              >
                ✕
              </Button>
              
              <div className="flex items-center space-x-4 pr-12">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={selectedExpert.image} />
                  <AvatarFallback>
                    {selectedExpert.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-xl">{selectedExpert.name}</CardTitle>
                  <CardDescription className="text-blue-100">
                    {selectedExpert.role}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedExpert.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Certificeringen</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedExpert.certifications.map((cert, idx) => (
                      <Badge key={idx} variant="outline">{cert}</Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button 
                  variant="agent" 
                  className="flex-1"
                  onClick={() => {
                    setShowExpertModal(false)
                    setShowContactModal(true)
                  }}
                >
                  Boek Consultatie - {selectedExpert.hourlyRate}/uur
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => setShowExpertModal(false)}
                >
                  Sluiten
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Agent Detail Modal */}
      {selectedAgent && showAgentModal && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
          <Card className="max-w-2xl w-full max-h-[90vh] shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-agent-navy to-green-900 text-white">
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-2 right-2 text-white hover:bg-white/20"
                onClick={() => setShowAgentModal(false)}
              >
                ✕
              </Button>
              
              <CardTitle className="text-xl pr-12">{selectedAgent.name}</CardTitle>
              <CardDescription className="text-blue-100">
                {selectedAgent.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Features</h4>
                  <ul className="space-y-2">
                    {selectedAgent.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-3">Pricing & ROI</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Setup:</span>
                      <span className="font-semibold">{selectedAgent.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monthly:</span>
                      <span className="font-semibold">{selectedAgent.monthlyFee}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Avg ROI:</span>
                      <span className="font-semibold text-green-600">{selectedAgent.roi}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button 
                  variant="agent" 
                  className="flex-1"
                  onClick={() => {
                    setShowAgentModal(false)
                    setShowContactModal(true)
                  }}
                >
                  Implementeer Agent - {selectedAgent.price}
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => setShowAgentModal(false)}
                >
                  Sluiten
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </section>
  )
}
