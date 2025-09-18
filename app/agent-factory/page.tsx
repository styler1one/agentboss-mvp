'use client'

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  ArrowLeft, CheckCircle, Clock, Zap, 
  Code, Brain, Cpu, 
  TrendingUp, Target, Award, Star, Phone, Calendar
} from "lucide-react"
import ContactModal from "@/components/ContactModal"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const developmentProcess = [
  {
    phase: "Discovery & Planning",
    duration: "Week 1-2",
    progress: 100,
    activities: [
      "Uitgebreide requirements analyse",
      "Use case mapping en prioritering", 
      "Technical architecture design",
      "Data flow en integratie planning",
      "Security & compliance assessment"
    ],
    deliverables: [
      "Technical Design Document",
      "Project roadmap & timeline",
      "Risk assessment rapport"
    ]
  },
  {
    phase: "AI Model Development",
    duration: "Week 3-5", 
    progress: 85,
    activities: [
      "Custom AI model training",
      "Natural Language Processing setup",
      "Machine Learning pipeline development",
      "Model testing & validation",
      "Performance optimization"
    ],
    deliverables: [
      "Trained AI model",
      "Model performance metrics",
      "Testing documentation"
    ]
  },
  {
    phase: "Integration & Testing",
    duration: "Week 6-7",
    progress: 60,
    activities: [
      "System integratie development",
      "API endpoints creation", 
      "Database setup & migration",
      "Security implementation",
      "End-to-end testing"
    ],
    deliverables: [
      "Integrated AI agent",
      "API documentation", 
      "Security audit rapport"
    ]
  },
  {
    phase: "Deployment & Training",
    duration: "Week 8",
    progress: 30,
    activities: [
      "Production deployment",
      "User training & onboarding",
      "Performance monitoring setup",
      "Documentation & handover",
      "Go-live support"
    ],
    deliverables: [
      "Live AI agent",
      "User training materials",
      "Monitoring dashboard"
    ]
  }
]

const technologies = [
  { name: "OpenAI GPT-4", category: "LLM", description: "Advanced language understanding" },
  { name: "LangChain", category: "Framework", description: "AI application development" },
  { name: "Python/FastAPI", category: "Backend", description: "High-performance API development" },
  { name: "React/Next.js", category: "Frontend", description: "Modern user interface" },
  { name: "PostgreSQL", category: "Database", description: "Reliable data storage" },
  { name: "Docker/Kubernetes", category: "Infrastructure", description: "Scalable deployment" },
  { name: "AWS/Azure", category: "Cloud", description: "Enterprise cloud hosting" },
  { name: "Elasticsearch", category: "Search", description: "Advanced data retrieval" }
]

const pricingTiers = [
  {
    name: "Starter Agent",
    price: "€25,000",
    monthly: "€500",
    description: "Perfect voor eerste AI implementatie",
    features: [
      "1 custom AI agent",
      "Basic NLP capabilities", 
      "Standard integraties (3)",
      "Email & chat support",
      "Basic analytics dashboard",
      "30-dagen delivery garantie"
    ],
    popular: false
  },
  {
    name: "Professional Agent",
    price: "€75,000", 
    monthly: "€1,200",
    description: "Geavanceerde AI voor groeiende bedrijven",
    features: [
      "1 advanced AI agent",
      "Custom model training",
      "Unlimited integraties", 
      "24/7 priority support",
      "Advanced analytics & reporting",
      "Multi-language support",
      "Custom UI development",
      "90-dagen ROI garantie"
    ],
    popular: true
  },
  {
    name: "Enterprise Agent",
    price: "€150,000+",
    monthly: "€2,500+", 
    description: "Enterprise-grade AI oplossing",
    features: [
      "Multiple AI agents",
      "Custom LLM fine-tuning",
      "Enterprise integraties",
      "Dedicated support team", 
      "Advanced security & compliance",
      "White-label deployment",
      "Custom training & workshops",
      "SLA guarantees"
    ],
    popular: false
  }
]

export default function AgentFactoryPage() {
  const [showContactModal, setShowContactModal] = useState(false)
  const [selectedTier, setSelectedTier] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-agent-navy via-blue-900 to-agent-blue text-white py-20">
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
              <Code className="w-4 h-4 mr-2" />
              Agent Factory
            </Badge>
            
            <h1 className="text-5xl font-bold mb-6">
              Custom AI-Agent Development
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Van concept tot productie in 8 weken. Onze experts bouwen jouw perfecte AI-agent 
              met <strong className="text-agent-green">Triple Guarantee</strong>: 
              30 dagen delivery, 90 dagen ROI, ISO27001 security.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="xl" 
                variant="secondary" 
                className="text-lg"
                onClick={() => setShowContactModal(true)}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Start jouw Agent Project
              </Button>
              <Button 
                size="xl" 
                variant="outline-white" 
                className="text-lg"
                onClick={() => {
                  document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Bekijk Development Process
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-agent-green">156+</div>
                <div className="text-sm text-blue-200">Agents Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-agent-green">8 weken</div>
                <div className="text-sm text-blue-200">Avg. Development</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-agent-green">340%</div>
                <div className="text-sm text-blue-200">Avg. ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-agent-green">95%</div>
                <div className="text-sm text-blue-200">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section id="process" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Clock className="w-4 h-4 mr-2" />
              8-Week Development Process
            </Badge>
            <h2 className="text-4xl font-bold text-agent-navy mb-4">
              Van Idee naar Live Agent
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Onze bewezen methodologie zorgt voor snelle, betrouwbare delivery 
              met volledige transparantie en controle.
            </p>
          </div>

          <div className="space-y-8">
            {developmentProcess.map((phase, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gradient-to-r from-agent-blue to-blue-600 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">
                        Phase {index + 1}: {phase.phase}
                      </CardTitle>
                      <CardDescription className="text-blue-100">
                        {phase.duration}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      {phase.progress}% Complete
                    </Badge>
                  </div>
                  <Progress value={phase.progress} className="mt-4" />
                </CardHeader>

                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-lg mb-4 flex items-center">
                        <Zap className="w-5 h-5 mr-2 text-agent-blue" />
                        Activiteiten
                      </h4>
                      <ul className="space-y-2">
                        {phase.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg mb-4 flex items-center">
                        <Target className="w-5 h-5 mr-2 text-agent-green" />
                        Deliverables
                      </h4>
                      <ul className="space-y-2">
                        {phase.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="flex items-start">
                            <Award className="w-4 h-4 text-agent-green mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Cpu className="w-4 h-4 mr-2" />
              Technology Stack
            </Badge>
            <h2 className="text-4xl font-bold text-agent-navy mb-4">
              Enterprise-Grade Technologie
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We gebruiken alleen de beste, meest betrouwbare technologieën 
              voor maximale performance en schaalbaarheid.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-agent-blue to-agent-green rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{tech.name}</h3>
                  <Badge variant="secondary" className="mb-3">{tech.category}</Badge>
                  <p className="text-sm text-gray-600">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <TrendingUp className="w-4 h-4 mr-2" />
              Transparent Pricing
            </Badge>
            <h2 className="text-4xl font-bold text-agent-navy mb-4">
              Investeer in jouw AI Toekomst
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kies het pakket dat past bij jouw ambities. Alle pakketten includeren 
              onze Triple Guarantee en volledige source code ownership.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card 
                key={index} 
                className={`relative hover:shadow-xl transition-all duration-300 ${
                  tier.popular ? 'ring-2 ring-agent-green scale-105' : ''
                }`}
              >
                {tier.popular && (
                  <Badge 
                    variant="success" 
                    className="absolute -top-3 left-1/2 transform -translate-x-1/2"
                  >
                    <Star className="w-3 h-3 mr-1" />
                    Meest Populair
                  </Badge>
                )}

                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <CardDescription className="text-lg">{tier.description}</CardDescription>
                  
                  <div className="my-6">
                    <div className="text-4xl font-bold text-agent-navy">{tier.price}</div>
                    <div className="text-sm text-gray-500">+ {tier.monthly}/maand</div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant={tier.popular ? "agent" : "outline"}
                    size="lg"
                    className="w-full"
                    onClick={() => {
                      setSelectedTier(tier.name)
                      setShowContactModal(true)
                    }}
                  >
                    Start {tier.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-agent-navy to-agent-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Klaar om jouw AI-Agent te bouwen?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start vandaag nog met een gratis consultatie. Onze experts helpen je 
            de perfecte AI-oplossing voor jouw bedrijf te ontwerpen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              variant="secondary" 
              size="xl"
              onClick={() => setShowContactModal(true)}
            >
              <Phone className="w-5 h-5 mr-2" />
              Gratis Consultatie Boeken
            </Button>
            <Button 
              variant="outline-white" 
              size="xl"
              onClick={() => {
                document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Download Development Guide
            </Button>
          </div>

          <div className="text-sm text-blue-200">
            🔒 Geen verplichtingen • 30-min expert gesprek • Direct advies
          </div>
        </div>
      </section>

      <Footer />

      {/* Contact Modal */}
      <ContactModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
        type="consultation"
        title={selectedTier ? `Start ${selectedTier}` : "Agent Factory Consultatie"}
      />
    </div>
  )
}
