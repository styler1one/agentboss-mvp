'use client'

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, X, Star, Zap, Shield, Clock } from "lucide-react"

const solutions = [
  {
    id: "factory",
    name: "Agent Factory",
    subtitle: "Custom Development",
    price: "€25,000+",
    monthly: "€500-€1,500",
    bestFor: "Unieke workflows",
    features: {
      customization: "100%",
      timeToMarket: "4-8 weken",
      support: "24/7 dedicated",
      ownership: "Volledige source code",
      integration: "Unlimited custom",
      updates: "Lifetime gratis",
      guarantee: "Triple guarantee",
      expertise: "Dedicated team"
    },
    pros: [
      "Volledig op maat gemaakt",
      "Eigen source code",
      "Unlimited integraties",
      "Dedicated expert team"
    ],
    cons: [
      "Hogere initiële investering",
      "Langere ontwikkeltijd"
    ],
    popular: false,
    recommended: false
  },
  {
    id: "marketplace",
    name: "Agent Marketplace",
    subtitle: "Ready-made Agents",
    price: "€15,000-€125,000",
    monthly: "€300-€2,000",
    bestFor: "Standaard processen",
    features: {
      customization: "60%",
      timeToMarket: "1-2 weken",
      support: "Business hours",
      ownership: "License gebruik",
      integration: "Pre-built connectors",
      updates: "Automatisch",
      guarantee: "30-dag geld terug",
      expertise: "Community support"
    },
    pros: [
      "Snelle implementatie",
      "Bewezen ROI",
      "Lagere kosten",
      "Instant deployment"
    ],
    cons: [
      "Beperkte customization",
      "Afhankelijk van updates"
    ],
    popular: true,
    recommended: true
  },
  {
    id: "expert",
    name: "Expert Network",
    subtitle: "Consultant Hire",
    price: "€850-€1,200/dag",
    monthly: "Variabel",
    bestFor: "Expertise & advies",
    features: {
      customization: "80%",
      timeToMarket: "2-12 weken",
      support: "Expert afhankelijk",
      ownership: "Afhankelijk van contract",
      integration: "Expert afhankelijk",
      updates: "Handmatig",
      guarantee: "Geen standaard",
      expertise: "Top 5% experts"
    },
    pros: [
      "Hoogste expertise niveau",
      "Flexibele samenwerking",
      "Knowledge transfer",
      "Strategisch advies"
    ],
    cons: [
      "Hogere dagkosten",
      "Beschikbaarheid afhankelijk"
    ],
    popular: false,
    recommended: false
  }
]

const comparisonFeatures = [
  { key: "customization", name: "Customization Level", icon: Zap },
  { key: "timeToMarket", name: "Time to Market", icon: Clock },
  { key: "support", name: "Support Level", icon: Shield },
  { key: "ownership", name: "Code Ownership", icon: Star },
  { key: "integration", name: "Integrations", icon: Zap },
  { key: "updates", name: "Updates", icon: Clock },
  { key: "guarantee", name: "Guarantee", icon: Shield },
  { key: "expertise", name: "Expertise Access", icon: Star }
]

export default function ComparisonTool() {
  const [selectedSolutions, setSelectedSolutions] = useState<string[]>(["marketplace"])
  const [showComparison, setShowComparison] = useState(false)

  const toggleSolution = (solutionId: string) => {
    if (selectedSolutions.includes(solutionId)) {
      setSelectedSolutions(selectedSolutions.filter(id => id !== solutionId))
    } else if (selectedSolutions.length < 3) {
      setSelectedSolutions([...selectedSolutions, solutionId])
    }
  }

  const selectedSolutionData = solutions.filter(s => selectedSolutions.includes(s.id))

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Solution Comparison
          </Badge>
          <h2 className="text-4xl font-bold text-agent-navy">
            Welke oplossing past bij jou?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vergelijk onze oplossingen en vind de perfecte match voor jouw bedrijf. 
            <strong className="text-agent-green">Selecteer maximaal 3 oplossingen</strong> om te vergelijken.
          </p>
        </div>

        {/* Solution Selection */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution) => (
            <Card 
              key={solution.id}
              className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${
                selectedSolutions.includes(solution.id) 
                  ? 'ring-2 ring-agent-blue shadow-xl scale-105' 
                  : 'hover:shadow-lg'
              } ${solution.recommended ? 'border-agent-green border-2' : ''}`}
              onClick={() => toggleSolution(solution.id)}
            >
              <CardHeader className="text-center">
                {solution.recommended && (
                  <Badge variant="success" className="mb-2 mx-auto w-fit">
                    <Star className="w-3 h-3 mr-1" />
                    Aanbevolen
                  </Badge>
                )}
                {solution.popular && (
                  <Badge variant="secondary" className="mb-2 mx-auto w-fit">
                    🔥 Populair
                  </Badge>
                )}
                
                <CardTitle className="text-2xl">{solution.name}</CardTitle>
                <CardDescription className="text-lg">{solution.subtitle}</CardDescription>
                
                <div className="my-4">
                  <div className="text-3xl font-bold text-agent-navy">{solution.price}</div>
                  <div className="text-sm text-gray-500">+ {solution.monthly}/maand</div>
                </div>
                
                <Badge variant="outline" className="text-xs">
                  Best voor: {solution.bestFor}
                </Badge>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Quick Pros */}
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Voordelen:</h4>
                  <ul className="space-y-1">
                    {solution.pros.slice(0, 2).map((pro, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  variant={selectedSolutions.includes(solution.id) ? "agent" : "outline"}
                  className="w-full"
                  disabled={!selectedSolutions.includes(solution.id) && selectedSolutions.length >= 3}
                >
                  {selectedSolutions.includes(solution.id) ? "✓ Geselecteerd" : "Selecteer voor vergelijking"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Compare Button */}
        {selectedSolutions.length >= 2 && (
          <div className="text-center mb-12">
            <Button 
              size="lg" 
              variant="agent"
              onClick={() => setShowComparison(true)}
            >
              Vergelijk {selectedSolutions.length} oplossingen
            </Button>
          </div>
        )}

        {/* Detailed Comparison Table */}
        {showComparison && selectedSolutionData.length >= 2 && (
          <Card className="shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-agent-navy to-agent-blue text-white">
              <CardTitle className="text-2xl text-center">
                Gedetailleerde Vergelijking
              </CardTitle>
              <CardDescription className="text-center text-blue-100">
                Side-by-side vergelijking van jouw geselecteerde oplossingen
              </CardDescription>
            </CardHeader>
            
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left p-4 font-semibold">Feature</th>
                      {selectedSolutionData.map((solution) => (
                        <th key={solution.id} className="text-center p-4 min-w-48">
                          <div className="space-y-2">
                            <div className="font-bold text-agent-navy">{solution.name}</div>
                            <div className="text-sm text-gray-600">{solution.subtitle}</div>
                            {solution.recommended && (
                              <Badge variant="success" className="text-xs">Aanbevolen</Badge>
                            )}
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  
                  <tbody>
                    {/* Pricing */}
                    <tr className="border-b bg-blue-50">
                      <td className="p-4 font-semibold">💰 Pricing</td>
                      {selectedSolutionData.map((solution) => (
                        <td key={solution.id} className="p-4 text-center">
                          <div className="font-bold text-lg">{solution.price}</div>
                          <div className="text-sm text-gray-600">{solution.monthly}/maand</div>
                        </td>
                      ))}
                    </tr>

                    {/* Features */}
                    {comparisonFeatures.map((feature) => {
                      const IconComponent = feature.icon
                      return (
                        <tr key={feature.key} className="border-b hover:bg-gray-50">
                          <td className="p-4">
                            <div className="flex items-center space-x-2">
                              <IconComponent className="w-4 h-4 text-agent-blue" />
                              <span className="font-medium">{feature.name}</span>
                            </div>
                          </td>
                          {selectedSolutionData.map((solution) => (
                            <td key={solution.id} className="p-4 text-center">
                              <span className="font-medium">
                                {solution.features[feature.key as keyof typeof solution.features]}
                              </span>
                            </td>
                          ))}
                        </tr>
                      )
                    })}

                    {/* Best For */}
                    <tr className="border-b bg-green-50">
                      <td className="p-4 font-semibold">🎯 Best For</td>
                      {selectedSolutionData.map((solution) => (
                        <td key={solution.id} className="p-4 text-center">
                          <Badge variant="secondary">{solution.bestFor}</Badge>
                        </td>
                      ))}
                    </tr>

                    {/* Pros & Cons */}
                    <tr className="border-b">
                      <td className="p-4 font-semibold">✅ Voordelen</td>
                      {selectedSolutionData.map((solution) => (
                        <td key={solution.id} className="p-4">
                          <ul className="space-y-1 text-sm">
                            {solution.pros.map((pro, index) => (
                              <li key={index} className="flex items-center">
                                <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                                <span>{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </td>
                      ))}
                    </tr>

                    <tr className="border-b">
                      <td className="p-4 font-semibold">❌ Nadelen</td>
                      {selectedSolutionData.map((solution) => (
                        <td key={solution.id} className="p-4">
                          <ul className="space-y-1 text-sm">
                            {solution.cons.map((con, index) => (
                              <li key={index} className="flex items-center">
                                <X className="w-3 h-3 text-red-500 mr-2 flex-shrink-0" />
                                <span>{con}</span>
                              </li>
                            ))}
                          </ul>
                        </td>
                      ))}
                    </tr>

                    {/* CTA Row */}
                    <tr className="bg-gray-50">
                      <td className="p-4 font-semibold">🚀 Actie</td>
                      {selectedSolutionData.map((solution) => (
                        <td key={solution.id} className="p-4 text-center">
                          <Button 
                            variant={solution.recommended ? "agent" : "outline"}
                            size="sm"
                            className="w-full"
                          >
                            {solution.recommended ? "Start Nu" : "Meer Info"}
                          </Button>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Help Section */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-agent-blue to-agent-green text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Nog steeds twijfels?</h3>
              <p className="text-blue-100 mb-6">
                Onze AI-experts helpen je graag bij het maken van de juiste keuze. 
                Gratis adviesgesprek van 15 minuten.
              </p>
              <Button variant="secondary" size="lg">
                📞 Bel voor gratis advies
              </Button>
              <div className="text-xs text-blue-200 mt-4">
                Gemiddelde response tijd: 2 minuten
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
