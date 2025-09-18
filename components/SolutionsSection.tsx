'use client'

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Zap, Shield, Users, Cog, Star } from "lucide-react"
import ContactModal from "@/components/ContactModal"

const solutions = [
  {
    id: 1,
    name: "Agent Factory",
    description: "Custom AI-agent development binnen 30 dagen",
    icon: Cog,
    features: [
      "Dedicated expert team",
      "8-week delivery methodology", 
      "Custom integrations",
      "Full source code ownership",
      "90-day ROI guarantee"
    ],
    pricing: "Vanaf €25,000",
    popular: false,
    gradient: "from-blue-500 to-blue-600",
    useCases: ["Custom workflows", "Legacy system integration", "Unique business logic"]
  },
  {
    id: 2,
    name: "Expert Ecosystem",
    description: "Access tot top 5% AI-specialists wereldwijd",
    icon: Users,
    features: [
      "Gecertificeerde experts",
      "24/7 beschikbaarheid",
      "Multi-language support",
      "Industry specialization",
      "Quality guarantee"
    ],
    pricing: "€850-€1,200/dag",
    popular: true,
    gradient: "from-green-500 to-emerald-600",
    useCases: ["Expert consulting", "Team augmentation", "Knowledge transfer"]
  },
  {
    id: 3,
    name: "Agent Marketplace",
    description: "Kant-en-klare AI-agents met bewezen ROI",
    icon: Zap,
    features: [
      "Pre-validated agents",
      "Instant deployment",
      "Industry templates",
      "Success metrics included",
      "30-day money back"
    ],
    pricing: "€15K-€125K",
    popular: false,
    gradient: "from-purple-500 to-purple-600",
    useCases: ["Quick wins", "Standard processes", "Proof of concepts"]
  },
  {
    id: 4,
    name: "Compliance Center",
    description: "EU AI Act compliance automation",
    icon: Shield,
    features: [
      "Automated compliance checks",
      "Risk assessment tools",
      "Documentation generation",
      "Audit trail management",
      "Legal expert support"
    ],
    pricing: "€5,000/jaar",
    popular: false,
    gradient: "from-red-500 to-red-600",
    useCases: ["Regulatory compliance", "Risk management", "Audit preparation"]
  }
]

const pricingTiers = [
  {
    name: "Starter",
    price: "€25,000",
    description: "Perfect voor eerste AI-agent",
    features: [
      "1 custom agent",
      "Basic integrations",
      "Email support",
      "30-day delivery",
      "90-day ROI guarantee"
    ],
    popular: false
  },
  {
    name: "Professional", 
    price: "€75,000",
    description: "Voor bedrijven met meerdere use cases",
    features: [
      "3 custom agents",
      "Advanced integrations",
      "Priority support",
      "Expert consultation",
      "Compliance included"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "€250,000+",
    description: "Volledige AI transformatie",
    features: [
      "Unlimited agents",
      "White-label platform",
      "Dedicated team",
      "SLA guarantees",
      "Custom compliance"
    ],
    popular: false
  }
]

export default function SolutionsSection() {
  const [showConsultationModal, setShowConsultationModal] = useState(false)
  return (
    <section id="solutions" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Solutions Overview
          </Badge>
          <h2 className="text-4xl font-bold text-agent-navy">
            Van AI-chaos naar AI-succes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vier bewezen oplossingen die de 78% faalratio van AI-projecten elimineren. 
            Kies jouw pad naar <strong className="text-agent-green">gegarandeerd AI-succes</strong>.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {solutions.map((solution) => {
            const IconComponent = solution.icon
            return (
              <Card 
                key={solution.id} 
                className={`relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                  solution.popular ? 'ring-2 ring-agent-green shadow-xl' : ''
                }`}
              >
                {solution.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="success" className="text-xs">
                      <Star className="w-3 h-3 mr-1" />
                      Populair
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${solution.gradient} flex items-center justify-center`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{solution.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {solution.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Features */}
                  <div className="space-y-2">
                    {solution.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Use Cases */}
                  <div>
                    <div className="text-xs font-medium text-gray-500 mb-2">Use Cases:</div>
                    <div className="flex flex-wrap gap-1">
                      {solution.useCases.map((useCase, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {useCase}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="border-t pt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-agent-navy mb-2">
                        {solution.pricing}
                      </div>
                      <Link href={
                        solution.id === 1 ? "/agent-factory" : 
                        solution.id === 2 ? "/expert-ecosystem" : 
                        solution.id === 3 ? "/agent-marketplace" : 
                        solution.id === 4 ? "/compliance-center" :
                        "#solutions"
                      }>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full"
                        >
                          Meer Info
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Pricing Tiers */}
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-agent-navy mb-4">
              Kies jouw AI-transformatie pakket
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transparante pricing zonder verborgen kosten. Alle pakketten inclusief 
              onze triple guarantee: 30 dagen delivery, 90 dagen ROI, ISO27001 security.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card 
                key={index} 
                className={`relative ${
                  tier.popular 
                    ? 'ring-2 ring-agent-green shadow-2xl scale-105' 
                    : 'hover:shadow-lg'
                } transition-all duration-300`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge variant="success" className="px-4 py-1">
                      <Star className="w-4 h-4 mr-1" />
                      Meest Gekozen
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <div className="text-3xl font-bold text-agent-navy my-4">
                    {tier.price}
                  </div>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant={tier.popular ? "agent" : "outline"} 
                    size="lg" 
                    className="w-full mt-6"
                  >
                    {tier.popular ? "Start Nu" : "Meer Info"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-agent-navy to-agent-blue text-white">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-4">
                Ready voor jouw AI-transformatie?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Sluit je aan bij 156+ bedrijven die al €12.5M+ ROI hebben gerealiseerd 
                met onze gegarandeerde AI-oplossingen.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-agent-green">30 dagen</div>
                  <div className="text-blue-200">Delivery Garantie</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-agent-green">340%</div>
                  <div className="text-blue-200">Gemiddelde ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-agent-green">95%</div>
                  <div className="text-blue-200">Success Rate</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="text-agent-navy"
                  onClick={() => setShowConsultationModal(true)}
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Start Gratis Consultatie
                </Button>
                <Button 
                  variant="outline-white" 
                  size="lg"
                  onClick={() => {
                    // Simulate business case download
                    const link = document.createElement('a')
                    link.href = '#'
                    link.download = 'AgentBoss-Business-Case.pdf'
                    link.click()
                  }}
                >
                  Download Business Case
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Consultation Modal */}
      <ContactModal
        isOpen={showConsultationModal}
        onClose={() => setShowConsultationModal(false)}
        type="consultation"
        title="Start Gratis Consultatie"
      />
    </section>
  )
}
