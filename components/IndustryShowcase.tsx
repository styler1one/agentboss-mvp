'use client'

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Building2, ShoppingCart, Heart, GraduationCap, 
  Banknote, Factory, TrendingUp, 
  CheckCircle, Star, Target
} from "lucide-react"
import ContactModal from "@/components/ContactModal"

const industries = [
  {
    id: "fintech",
    name: "FinTech & Banking",
    icon: Banknote,
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50",
    description: "Automatiseer compliance, fraud detectie en klantenservice",
    painPoints: [
      "Complexe regulatory compliance",
      "Handmatige fraud detectie",
      "Trage klantenservice",
      "Hoge operationele kosten"
    ],
    solutions: [
      "Automated compliance monitoring",
      "Real-time fraud detection",
      "24/7 AI customer support",
      "Risk assessment automation"
    ],
    caseStudy: {
      company: "Nederlandse Bank",
      result: "€2.3M besparing",
      metric: "85% minder compliance tijd",
      timeframe: "6 maanden"
    },
    agents: ["FinanceGuard AI", "ComplianceBot", "FraudDetector"],
    roi: "420%"
  },
  {
    id: "ecommerce",
    name: "E-commerce & Retail",
    icon: ShoppingCart,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    description: "Verhoog conversies en automatiseer customer journey",
    painPoints: [
      "Lage conversie rates",
      "Handmatige customer support",
      "Inventory management",
      "Personalisatie uitdagingen"
    ],
    solutions: [
      "AI-powered product recommendations",
      "Intelligent chatbots",
      "Dynamic pricing optimization",
      "Automated inventory management"
    ],
    caseStudy: {
      company: "Fashion Retailer",
      result: "€1.8M extra omzet",
      metric: "35% hogere conversie",
      timeframe: "4 maanden"
    },
    agents: ["SalesBot Pro", "CustomerCare AI", "PricingOptimizer"],
    roi: "340%"
  },
  {
    id: "healthcare",
    name: "Healthcare & Life Sciences",
    icon: Heart,
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-50",
    description: "Verbeter patiëntenzorg en optimaliseer processen",
    painPoints: [
      "Administratieve overhead",
      "Patiënt scheduling complexiteit",
      "Compliance uitdagingen",
      "Beperkte beschikbaarheid"
    ],
    solutions: [
      "Automated patient scheduling",
      "Medical record processing",
      "Compliance monitoring",
      "24/7 patient support"
    ],
    caseStudy: {
      company: "Ziekenhuis Groep",
      result: "€3.1M kostenbesparing",
      metric: "60% minder admin tijd",
      timeframe: "8 maanden"
    },
    agents: ["HealthCare Assistant", "PatientScheduler", "ComplianceGuard"],
    roi: "380%"
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Industry",
    icon: Factory,
    color: "from-gray-600 to-gray-800",
    bgColor: "bg-gray-50",
    description: "Optimaliseer productie en voorspel onderhoud",
    painPoints: [
      "Onverwachte machine downtime",
      "Inefficiënte planning",
      "Kwaliteitscontrole issues",
      "Supply chain complexiteit"
    ],
    solutions: [
      "Predictive maintenance",
      "Production optimization",
      "Quality control automation",
      "Supply chain management"
    ],
    caseStudy: {
      company: "Productie Bedrijf",
      result: "€4.2M kostenbesparing",
      metric: "40% minder downtime",
      timeframe: "10 maanden"
    },
    agents: ["MaintenancePredictor", "QualityController", "SupplyChainAI"],
    roi: "450%"
  },
  {
    id: "education",
    name: "Education & Training",
    icon: GraduationCap,
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-50",
    description: "Personaliseer leren en automatiseer administratie",
    painPoints: [
      "Grote klassen, weinig personalisatie",
      "Administratieve overhead",
      "Student engagement uitdagingen",
      "Assessment complexiteit"
    ],
    solutions: [
      "Personalized learning paths",
      "Automated grading",
      "Student engagement tracking",
      "Administrative automation"
    ],
    caseStudy: {
      company: "Universiteit",
      result: "€1.5M kostenbesparing",
      metric: "50% betere student outcomes",
      timeframe: "12 maanden"
    },
    agents: ["LearningAssistant", "GradingBot", "StudentSupport"],
    roi: "290%"
  },
  {
    id: "professional",
    name: "Professional Services",
    icon: Building2,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    description: "Automatiseer expertise en verhoog efficiency",
    painPoints: [
      "Tijdrovende research",
      "Handmatige rapportage",
      "Client communication overhead",
      "Knowledge management"
    ],
    solutions: [
      "Automated research & analysis",
      "Report generation",
      "Client communication bots",
      "Knowledge base automation"
    ],
    caseStudy: {
      company: "Consultancy Firm",
      result: "€2.7M extra revenue",
      metric: "65% meer billable hours",
      timeframe: "5 maanden"
    },
    agents: ["ResearchBot", "ReportGenerator", "ClientAssistant"],
    roi: "390%"
  }
]

export default function IndustryShowcase() {
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0])
  const [showContactModal, setShowContactModal] = useState(false)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Target className="w-4 h-4 mr-2" />
            Industry Solutions
          </Badge>
          <h2 className="text-4xl font-bold text-agent-navy mb-4">
            AI-agents voor elke industrie
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ontdek hoe bedrijven in jouw sector AI gebruiken om processen te automatiseren, 
            kosten te besparen en groei te realiseren.
          </p>
        </div>

        {/* Industry Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {industries.map((industry) => {
            const IconComponent = industry.icon
            return (
              <Button
                key={industry.id}
                variant={selectedIndustry.id === industry.id ? "agent" : "outline"}
                size="lg"
                className="flex items-center space-x-2"
                onClick={() => setSelectedIndustry(industry)}
              >
                <IconComponent className="w-5 h-5" />
                <span>{industry.name}</span>
              </Button>
            )
          })}
        </div>

        {/* Selected Industry Detail */}
        <div className="max-w-6xl mx-auto">
          <Card className="shadow-2xl overflow-hidden">
            <CardHeader className={`bg-gradient-to-r ${selectedIndustry.color} text-white p-8`}>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                  <selectedIndustry.icon className="w-8 h-8" />
                </div>
                <div>
                  <CardTitle className="text-3xl">{selectedIndustry.name}</CardTitle>
                  <CardDescription className="text-blue-100 text-lg">
                    {selectedIndustry.description}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Pain Points & Solutions */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-4 text-red-600">
                      ❌ Typische uitdagingen:
                    </h4>
                    <ul className="space-y-2">
                      {selectedIndustry.painPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          <span className="text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-4 text-green-600">
                      ✅ Onze AI oplossingen:
                    </h4>
                    <ul className="space-y-2">
                      {selectedIndustry.solutions.map((solution, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-4">Beschikbare Agents:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedIndustry.agents.map((agent, idx) => (
                        <Badge key={idx} variant="secondary" className="text-sm">
                          {agent}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Case Study */}
                <div className={`${selectedIndustry.bgColor} rounded-lg p-6`}>
                  <div className="flex items-center space-x-2 mb-4">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <h4 className="font-semibold text-lg">Success Story</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold">{selectedIndustry.caseStudy.company}</h5>
                      <p className="text-sm text-gray-600">
                        Implementatie van AI-agents voor proces automatisering
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-white rounded-lg">
                        <div className="text-2xl font-bold text-green-600">
                          {selectedIndustry.caseStudy.result}
                        </div>
                        <div className="text-sm text-gray-600">Jaarlijkse besparing</div>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">
                          {selectedIndustry.roi}
                        </div>
                        <div className="text-sm text-gray-600">ROI na 12 maanden</div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">Key Result:</span>
                        <span className="text-green-600 font-bold">
                          {selectedIndustry.caseStudy.metric}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Timeline:</span>
                        <span className="text-blue-600 font-bold">
                          {selectedIndustry.caseStudy.timeframe}
                        </span>
                      </div>
                    </div>

                    <Button 
                      variant="agent" 
                      size="lg" 
                      className="w-full"
                      onClick={() => setShowContactModal(true)}
                    >
                      <TrendingUp className="w-5 h-5 mr-2" />
                      Start jouw {selectedIndustry.name} transformatie
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-agent-navy">6</div>
            <div className="text-sm text-gray-600">Industrieën</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-agent-navy">150+</div>
            <div className="text-sm text-gray-600">Sector experts</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-agent-navy">89%</div>
            <div className="text-sm text-gray-600">Success rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-agent-navy">€12.5M</div>
            <div className="text-sm text-gray-600">Totale besparingen</div>
          </div>
        </div>
      </div>

      <ContactModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
        type="consultation"
        title={`${selectedIndustry.name} AI Consultatie`}
      />
    </section>
  )
}
