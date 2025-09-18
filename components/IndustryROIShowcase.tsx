'use client'

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { 
  Building2, ShoppingCart, Heart, 
  Banknote, Factory, TrendingUp, Calculator,
  Star, Euro
} from "lucide-react"
import ContactModal from "@/components/ContactModal"

const industries = [
  {
    id: "fintech",
    name: "FinTech & Banking",
    icon: Banknote,
    color: "from-yellow-500 to-orange-500",
    avgROI: 420,
    avgSavings: 2300000,
    avgTimeframe: 6,
    multipliers: {
      employees: 15000,
      complexity: 1.8,
      urgency: 1.5
    }
  },
  {
    id: "ecommerce", 
    name: "E-commerce & Retail",
    icon: ShoppingCart,
    color: "from-blue-500 to-cyan-500",
    avgROI: 340,
    avgSavings: 1800000,
    avgTimeframe: 4,
    multipliers: {
      employees: 12000,
      complexity: 1.2,
      urgency: 1.8
    }
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: Heart,
    color: "from-red-500 to-pink-500", 
    avgROI: 380,
    avgSavings: 3100000,
    avgTimeframe: 8,
    multipliers: {
      employees: 18000,
      complexity: 2.1,
      urgency: 1.3
    }
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: Factory,
    color: "from-gray-600 to-gray-800",
    avgROI: 450,
    avgSavings: 4200000,
    avgTimeframe: 10,
    multipliers: {
      employees: 20000,
      complexity: 2.5,
      urgency: 1.2
    }
  },
  {
    id: "professional",
    name: "Professional Services",
    icon: Building2,
    color: "from-green-500 to-emerald-500",
    avgROI: 390,
    avgSavings: 2700000,
    avgTimeframe: 5,
    multipliers: {
      employees: 14000,
      complexity: 1.6,
      urgency: 1.4
    }
  }
]

export default function IndustryROIShowcase() {
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0])
  const [employees, setEmployees] = useState([100])
  const [currentRevenue, setCurrentRevenue] = useState([5000000])
  const [showContactModal, setShowContactModal] = useState(false)
  const [calculatedROI, setCalculatedROI] = useState({
    investment: 75000,
    monthlySavings: 15000,
    yearlyROI: 340,
    paybackMonths: 5,
    threeYearValue: 540000
  })

  // Calculate ROI based on industry and company size
  useEffect(() => {
    const employeeCount = employees[0]
    // const revenue = currentRevenue[0] // Future use for revenue-based calculations
    
    // Base calculation
    const baseInvestment = Math.min(Math.max(employeeCount * 500, 25000), 200000)
    const industryMultiplier = selectedIndustry.multipliers.complexity
    const investment = Math.round(baseInvestment * industryMultiplier)
    
    // Monthly savings calculation
    const baseSavingsPerEmployee = selectedIndustry.multipliers.employees / 100
    const monthlySavings = Math.round(employeeCount * baseSavingsPerEmployee)
    
    // ROI calculations
    const yearlyROI = Math.round((monthlySavings * 12 / investment) * 100)
    const paybackMonths = Math.round(investment / monthlySavings)
    const threeYearValue = (monthlySavings * 36) - investment
    
    setCalculatedROI({
      investment,
      monthlySavings,
      yearlyROI,
      paybackMonths,
      threeYearValue
    })
  }, [selectedIndustry, employees, currentRevenue])

  const formatCurrency = (amount: number) => {
    if (amount >= 1000000) {
      return `€${(amount / 1000000).toFixed(1)}M`
    } else if (amount >= 1000) {
      return `€${(amount / 1000).toFixed(0)}K`
    } else {
      return `€${amount.toLocaleString()}`
    }
  }

  return (
    <section className="section-spacing-compact bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Calculator className="w-4 h-4 mr-2" />
            Industry ROI Calculator
          </Badge>
          <h2 className="text-4xl font-bold text-agent-navy mb-4">
            Bereken jouw ROI per industrie
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ontdek wat AI-agents kunnen opleveren voor jouw specifieke sector en bedrijfsgrootte. 
            Gebaseerd op data van 156+ succesvolle implementaties.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Industry Selection & Inputs */}
            <div className="space-y-8">
              {/* Industry Selector */}
              <div>
                <h3 className="text-xl font-bold text-agent-navy mb-6">
                  1. Selecteer jouw industrie
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {industries.map((industry) => {
                    const IconComponent = industry.icon
                    return (
                      <Button
                        key={industry.id}
                        variant={selectedIndustry.id === industry.id ? "agent" : "outline"}
                        className="h-auto p-4 flex flex-col items-center space-y-2"
                        onClick={() => setSelectedIndustry(industry)}
                      >
                        <IconComponent className="w-6 h-6" />
                        <span className="text-sm text-center">{industry.name}</span>
                      </Button>
                    )
                  })}
                </div>
              </div>

              {/* Company Size */}
              <div>
                <h3 className="text-xl font-bold text-agent-navy mb-4">
                  2. Aantal medewerkers
                </h3>
                <div className="space-y-4">
                  <Slider
                    value={employees}
                    onValueChange={setEmployees}
                    max={1000}
                    min={10}
                    step={10}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>10</span>
                    <span className="font-semibold text-agent-navy">
                      {employees[0]} medewerkers
                    </span>
                    <span>1000+</span>
                  </div>
                </div>
              </div>

              {/* Current Revenue */}
              <div>
                <h3 className="text-xl font-bold text-agent-navy mb-4">
                  3. Huidige jaaromzet
                </h3>
                <div className="space-y-4">
                  <Slider
                    value={currentRevenue}
                    onValueChange={setCurrentRevenue}
                    max={100000000}
                    min={500000}
                    step={500000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>€500K</span>
                    <span className="font-semibold text-agent-navy">
                      {formatCurrency(currentRevenue[0])}
                    </span>
                    <span>€100M+</span>
                  </div>
                </div>
              </div>

              {/* Industry Insights */}
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <selectedIndustry.icon className="w-5 h-5 mr-2" />
                    {selectedIndustry.name} Insights
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span>Gemiddelde ROI:</span>
                    <span className="font-bold text-green-600">{selectedIndustry.avgROI}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Typische besparingen:</span>
                    <span className="font-bold">{formatCurrency(selectedIndustry.avgSavings)}/jaar</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Implementatie tijd:</span>
                    <span className="font-bold">{selectedIndustry.avgTimeframe} maanden</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* ROI Results */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-agent-navy">
                Jouw gepersonaliseerde ROI
              </h3>

              {/* Investment Card */}
              <Card className="bg-gradient-to-br from-agent-blue to-agent-green text-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Euro className="w-5 h-5 mr-2" />
                    Geschatte Investering
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-2">
                    {formatCurrency(calculatedROI.investment)}
                  </div>
                  <p className="text-blue-100">
                    Eenmalige implementatie kosten voor {employees[0]} medewerkers
                  </p>
                </CardContent>
              </Card>

              {/* ROI Metrics Grid */}
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">
                      {formatCurrency(calculatedROI.monthlySavings)}
                    </div>
                    <div className="text-sm text-gray-600">Maandelijkse besparing</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-agent-navy mb-2">
                      {calculatedROI.yearlyROI}%
                    </div>
                    <div className="text-sm text-gray-600">Jaarlijkse ROI</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-2">
                      {calculatedROI.paybackMonths}
                    </div>
                    <div className="text-sm text-gray-600">Maanden payback</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-orange-600 mb-2">
                      {formatCurrency(calculatedROI.threeYearValue)}
                    </div>
                    <div className="text-sm text-gray-600">3-jaar waarde</div>
                  </CardContent>
                </Card>
              </div>

              {/* Breakdown */}
              <Card className="bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-800">
                    <TrendingUp className="w-5 h-5 mr-2 inline" />
                    ROI Breakdown
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span>Jaar 1 besparing:</span>
                    <span className="font-bold text-green-600">
                      {formatCurrency(calculatedROI.monthlySavings * 12)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Minus investering:</span>
                    <span className="font-bold text-red-600">
                      -{formatCurrency(calculatedROI.investment)}
                    </span>
                  </div>
                  <hr />
                  <div className="flex justify-between">
                    <span className="font-bold">Netto jaar 1:</span>
                    <span className="font-bold text-green-600">
                      {formatCurrency((calculatedROI.monthlySavings * 12) - calculatedROI.investment)}
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <Button 
                variant="agent" 
                size="xl" 
                className="w-full"
                onClick={() => setShowContactModal(true)}
              >
                <Star className="w-5 h-5 mr-2" />
                Claim jouw {calculatedROI.yearlyROI}% ROI
              </Button>

              <p className="text-sm text-gray-600 text-center">
                🔒 Gratis consultatie • Geen verplichtingen • 24h response
              </p>
            </div>
          </div>
        </div>

        {/* Success Stories Preview */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-agent-navy text-center mb-8">
            Vergelijkbare bedrijven behaalden:
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">€2.3M</div>
                <div className="text-sm text-gray-600 mb-2">Nederlandse Bank</div>
                <div className="text-xs text-gray-500">420% ROI • 6 maanden</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">€1.8M</div>
                <div className="text-sm text-gray-600 mb-2">Fashion Retailer</div>
                <div className="text-xs text-gray-500">340% ROI • 4 maanden</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">€4.2M</div>
                <div className="text-sm text-gray-600 mb-2">Productie Bedrijf</div>
                <div className="text-xs text-gray-500">450% ROI • 10 maanden</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <ContactModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
        type="consultation"
        title={`${selectedIndustry.name} ROI Consultatie`}
      />
    </section>
  )
}
