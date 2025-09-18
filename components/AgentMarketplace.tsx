'use client'

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Star, Download, Play, Shield, Zap, Users, CheckCircle, Eye } from "lucide-react"

const agents = [
  {
    id: 1,
    name: "SalesBot Pro",
    category: "Sales & Marketing",
    description: "AI-agent die leads kwalificeert en follow-up emails automatiseert",
    price: "€15,000",
    monthlyFee: "€500",
    rating: 4.8,
    reviews: 89,
    downloads: 234,
    roi: "340%",
    payback: "3 maanden",
    features: ["Lead Scoring", "Email Automation", "CRM Integration", "Analytics Dashboard"],
    integrations: ["Salesforce", "HubSpot", "Pipedrive", "Mailchimp"],
    industries: ["SaaS", "E-commerce", "B2B Services"],
    demoUrl: "#",
    validated: true,
    securityScore: 95,
    compliance: ["GDPR", "SOC2"],
    successStories: 45,
    avgImplementation: "2 weken"
  },
  {
    id: 2,
    name: "CustomerCare AI",
    category: "Customer Service",
    description: "24/7 klantenservice agent met natuurlijke taalverwerking",
    price: "€25,000",
    monthlyFee: "€750",
    rating: 4.9,
    reviews: 156,
    downloads: 189,
    roi: "280%",
    payback: "4 maanden",
    features: ["Natural Language Processing", "Multi-channel Support", "Escalation Management", "Knowledge Base"],
    integrations: ["Zendesk", "Intercom", "Freshdesk", "Slack"],
    industries: ["E-commerce", "SaaS", "Telecom"],
    demoUrl: "#",
    validated: true,
    securityScore: 98,
    compliance: ["GDPR", "ISO27001"],
    successStories: 67,
    avgImplementation: "3 weken"
  },
  {
    id: 3,
    name: "HR Recruiter Bot",
    category: "Human Resources",
    description: "Automatiseert CV screening en eerste interview ronden",
    price: "€35,000",
    monthlyFee: "€1,200",
    rating: 4.7,
    reviews: 73,
    downloads: 145,
    roi: "420%",
    payback: "2 maanden",
    features: ["CV Parsing", "Candidate Scoring", "Interview Scheduling", "Bias Detection"],
    integrations: ["Workday", "BambooHR", "LinkedIn", "Indeed"],
    industries: ["Technology", "Finance", "Healthcare"],
    demoUrl: "#",
    validated: true,
    securityScore: 92,
    compliance: ["GDPR", "Equal Opportunity"],
    successStories: 38,
    avgImplementation: "4 weken"
  },
  {
    id: 4,
    name: "FinanceGuard AI",
    category: "Finance & Compliance",
    description: "Detecteert fraude en monitort financiële compliance real-time",
    price: "€75,000",
    monthlyFee: "€2,500",
    rating: 4.6,
    reviews: 41,
    downloads: 67,
    roi: "580%",
    payback: "3 maanden",
    features: ["Fraud Detection", "Risk Assessment", "Compliance Monitoring", "Automated Reporting"],
    integrations: ["SAP", "Oracle", "QuickBooks", "Xero"],
    industries: ["Banking", "Insurance", "Fintech"],
    demoUrl: "#",
    validated: true,
    securityScore: 99,
    compliance: ["PCI-DSS", "SOX", "Basel III"],
    successStories: 23,
    avgImplementation: "6 weken"
  },
  {
    id: 5,
    name: "SupplyChain Optimizer",
    category: "Operations",
    description: "Optimaliseert voorraad en voorspelt supply chain verstoringen",
    price: "€125,000",
    monthlyFee: "€3,000",
    rating: 4.5,
    reviews: 28,
    downloads: 34,
    roi: "650%",
    payback: "4 maanden",
    features: ["Demand Forecasting", "Inventory Optimization", "Risk Prediction", "Supplier Analytics"],
    integrations: ["SAP", "Oracle SCM", "Manhattan", "Blue Yonder"],
    industries: ["Manufacturing", "Retail", "Logistics"],
    demoUrl: "#",
    validated: true,
    securityScore: 94,
    compliance: ["ISO9001", "GDPR"],
    successStories: 19,
    avgImplementation: "8 weken"
  },
  {
    id: 6,
    name: "ContentCreator AI",
    category: "Marketing",
    description: "Genereert gepersonaliseerde content voor verschillende kanalen",
    price: "€20,000",
    monthlyFee: "€600",
    rating: 4.4,
    reviews: 92,
    downloads: 178,
    roi: "290%",
    payback: "3 maanden",
    features: ["Content Generation", "Brand Voice Matching", "Multi-channel Publishing", "Performance Analytics"],
    integrations: ["WordPress", "Hootsuite", "Buffer", "Canva"],
    industries: ["Marketing Agencies", "E-commerce", "Media"],
    demoUrl: "#",
    validated: true,
    securityScore: 88,
    compliance: ["GDPR", "Copyright Compliant"],
    successStories: 56,
    avgImplementation: "2 weken"
  }
]

const categories = ["Alle", "Sales & Marketing", "Customer Service", "Human Resources", "Finance & Compliance", "Operations", "Marketing"]

export default function AgentMarketplace() {
  const [selectedCategory, setSelectedCategory] = useState("Alle")
  const [selectedAgent, setSelectedAgent] = useState<number | null>(null)

  const filteredAgents = agents.filter(agent => 
    selectedCategory === "Alle" || agent.category === selectedCategory
  )

  return (
    <section id="marketplace" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="outline" className="mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Agent Marketplace
          </Badge>
          <h2 className="text-4xl font-bold text-agent-navy">
            Kant-en-klare AI Agents
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bewezen AI-agents met gegarandeerde ROI. Elke agent is getest in minimaal 
            <strong className="text-agent-green"> 3 vergelijkbare bedrijven</strong> met aantoonbare resultaten.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "agent" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
              {category !== "Alle" && (
                <span className="ml-2 text-xs">
                  ({agents.filter(a => a.category === category).length})
                </span>
              )}
            </Button>
          ))}
        </div>

        {/* Agent Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredAgents.map((agent) => (
            <Card 
              key={agent.id} 
              className={`cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                selectedAgent === agent.id ? 'ring-2 ring-agent-blue shadow-xl' : ''
              }`}
              onClick={() => setSelectedAgent(selectedAgent === agent.id ? null : agent.id)}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {agent.category}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    {agent.validated && (
                      <Badge variant="success" className="text-xs">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Validated
                      </Badge>
                    )}
                  </div>
                </div>
                
                <CardTitle className="text-xl">{agent.name}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {agent.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Rating & Social Proof */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${
                            i < Math.floor(agent.rating) 
                              ? 'fill-yellow-400 text-yellow-400' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium">{agent.rating}</span>
                    <span className="text-sm text-gray-500">({agent.reviews})</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Download className="w-4 h-4" />
                    <span>{agent.downloads}</span>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-lg font-bold text-agent-green">{agent.roi}</div>
                    <div className="text-xs text-gray-600">Gem. ROI</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-lg font-bold text-agent-blue">{agent.payback}</div>
                    <div className="text-xs text-gray-600">Payback</div>
                  </div>
                </div>

                {/* Security Score */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="flex items-center">
                      <Shield className="w-4 h-4 mr-1" />
                      Security Score
                    </span>
                    <span className="font-medium">{agent.securityScore}/100</span>
                  </div>
                  <Progress value={agent.securityScore} className="h-2" />
                </div>

                {/* Pricing */}
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Implementatie</span>
                    <span className="font-bold text-lg">{agent.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Maandelijks</span>
                    <span className="font-medium">{agent.monthlyFee}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                  >
                    <Play className="w-4 h-4 mr-1" />
                    Demo
                  </Button>
                  <Button 
                    variant={selectedAgent === agent.id ? "agent" : "outline"}
                    size="sm" 
                    className="flex-1"
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    {selectedAgent === agent.id ? "Bekijk" : "Details"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Selected Agent Details */}
        {selectedAgent && (
          <Card className="max-w-6xl mx-auto shadow-2xl border-agent-blue">
            <CardHeader className="bg-gradient-to-r from-agent-blue to-agent-green text-white">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-3xl mb-2">
                    {agents.find(a => a.id === selectedAgent)?.name}
                  </CardTitle>
                  <CardDescription className="text-blue-100 text-lg">
                    {agents.find(a => a.id === selectedAgent)?.description}
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  {agents.find(a => a.id === selectedAgent)?.category}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="p-8">
              {(() => {
                const agent = agents.find(a => a.id === selectedAgent)!
                return (
                  <div className="space-y-8">
                    {/* Key Metrics Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-3xl font-bold text-agent-green">{agent.roi}</div>
                        <div className="text-sm text-gray-600">Gemiddelde ROI</div>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-3xl font-bold text-agent-blue">{agent.payback}</div>
                        <div className="text-sm text-gray-600">Payback Periode</div>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <div className="text-3xl font-bold text-purple-600">{agent.successStories}</div>
                        <div className="text-sm text-gray-600">Success Stories</div>
                      </div>
                      <div className="text-center p-4 bg-orange-50 rounded-lg">
                        <div className="text-3xl font-bold text-orange-600">{agent.avgImplementation}</div>
                        <div className="text-sm text-gray-600">Implementatie</div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Features */}
                      <div>
                        <h4 className="font-semibold text-lg mb-4">Functionaliteiten</h4>
                        <div className="space-y-2">
                          {agent.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Integrations */}
                      <div>
                        <h4 className="font-semibold text-lg mb-4">Integraties</h4>
                        <div className="flex flex-wrap gap-2">
                          {agent.integrations.map((integration, index) => (
                            <Badge key={index} variant="outline">{integration}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Industries & Compliance */}
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-lg mb-4">Geschikt voor sectoren</h4>
                        <div className="flex flex-wrap gap-2">
                          {agent.industries.map((industry, index) => (
                            <Badge key={index} variant="secondary">{industry}</Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg mb-4">Compliance & Security</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span>Security Score</span>
                            <span className="font-bold">{agent.securityScore}/100</span>
                          </div>
                          <Progress value={agent.securityScore} />
                          <div className="flex flex-wrap gap-2">
                            {agent.compliance.map((comp, index) => (
                              <Badge key={index} variant="success">{comp}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Pricing & CTA */}
                    <div className="border-t pt-8">
                      <div className="grid md:grid-cols-3 gap-8 items-center">
                        <div className="text-center">
                          <div className="text-sm text-gray-600 mb-1">Implementatie kosten</div>
                          <div className="text-3xl font-bold text-agent-navy">{agent.price}</div>
                          <div className="text-sm text-gray-500">Eenmalig</div>
                        </div>
                        
                        <div className="text-center">
                          <div className="text-sm text-gray-600 mb-1">Maandelijkse kosten</div>
                          <div className="text-3xl font-bold text-agent-blue">{agent.monthlyFee}</div>
                          <div className="text-sm text-gray-500">Per maand</div>
                        </div>

                        <div className="space-y-3">
                          <Button size="lg" variant="agent" className="w-full">
                            <Download className="w-5 h-5 mr-2" />
                            Start Implementatie
                          </Button>
                          <Button size="lg" variant="outline" className="w-full">
                            <Play className="w-5 h-5 mr-2" />
                            Bekijk Live Demo
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })()}
            </CardContent>
          </Card>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-agent-navy to-agent-blue text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Eigen Agent Nodig?</h3>
              <p className="text-blue-100 mb-6">
                Zie je niet wat je zoekt? Onze experts bouwen binnen 30 dagen een custom agent voor jouw specifieke use case.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg">
                  <Users className="w-5 h-5 mr-2" />
                  Custom Agent Aanvragen
                </Button>
                <Button variant="outline-white" size="lg">
                  Bekijk Alle 50+ Agents
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
