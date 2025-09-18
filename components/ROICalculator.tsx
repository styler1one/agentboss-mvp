'use client'

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Calculator, TrendingUp, Clock, Euro, CheckCircle } from "lucide-react"

export default function ROICalculator() {
  const [employees, setEmployees] = useState([50])
  const [avgSalary, setAvgSalary] = useState([60000])
  const [hoursPerWeek, setHoursPerWeek] = useState([10])
  const [showResults, setShowResults] = useState(false)

  // ROI Calculations
  const annualCost = employees[0] * avgSalary[0] * (hoursPerWeek[0] / 40)
  const agentCost = 75000 // Average agent cost
  const efficiency = 0.7 // 70% efficiency gain
  const annualSavings = annualCost * efficiency
  const roi = ((annualSavings - agentCost) / agentCost) * 100
  const paybackMonths = Math.ceil((agentCost / annualSavings) * 12)

  const handleCalculate = () => {
    setShowResults(true)
  }

  return (
    <section id="roi-calculator" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="outline" className="mb-4">
            <Calculator className="w-4 h-4 mr-2" />
            ROI Calculator
          </Badge>
          <h2 className="text-4xl font-bold text-agent-navy">
            Bereken je ROI binnen 90 dagen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ontdek hoeveel je kunt besparen met een AI-agent. Gemiddelde klanten zien 
            <strong className="text-agent-green"> 340% ROI</strong> in het eerste jaar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Calculator Inputs */}
          <Card className="shadow-xl border-0">
            <CardHeader className="bg-gradient-to-r from-agent-blue to-agent-green text-white">
              <CardTitle className="flex items-center">
                <Calculator className="w-6 h-6 mr-2" />
                Jouw Situatie
              </CardTitle>
              <CardDescription className="text-blue-100">
                Vul je huidige situatie in voor een gepersonaliseerde berekening
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              {/* Number of Employees */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-gray-700">
                    Aantal FTE's die baat hebben bij AI
                  </label>
                  <Badge variant="secondary">{employees[0]} FTE's</Badge>
                </div>
                <Slider
                  value={employees}
                  onValueChange={setEmployees}
                  max={500}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>1</span>
                  <span>500+</span>
                </div>
              </div>

              {/* Average Salary */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-gray-700">
                    Gemiddeld jaarsalaris (incl. kosten)
                  </label>
                  <Badge variant="secondary">€{avgSalary[0].toLocaleString()}</Badge>
                </div>
                <Slider
                  value={avgSalary}
                  onValueChange={setAvgSalary}
                  max={150000}
                  min={30000}
                  step={5000}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>€30K</span>
                  <span>€150K+</span>
                </div>
              </div>

              {/* Hours per Week */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-gray-700">
                    Uren per week die AI kan overnemen
                  </label>
                  <Badge variant="secondary">{hoursPerWeek[0]}h/week</Badge>
                </div>
                <Slider
                  value={hoursPerWeek}
                  onValueChange={setHoursPerWeek}
                  max={40}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>1h</span>
                  <span>40h</span>
                </div>
              </div>

              <Button 
                onClick={handleCalculate}
                className="w-full" 
                size="lg"
                variant="agent"
              >
                Bereken mijn ROI
                <TrendingUp className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="space-y-6">
            {showResults ? (
              <>
                {/* ROI Results */}
                <Card className="shadow-xl border-0 bg-gradient-to-br from-green-50 to-blue-50">
                  <CardContent className="p-8">
                    <div className="text-center space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-agent-navy">Jouw ROI Projectie</h3>
                        <p className="text-gray-600">Gebaseerd op 500+ vergelijkbare implementaties</p>
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                          <div className="text-3xl font-bold text-agent-green">
                            {roi > 0 ? '+' : ''}{Math.round(roi)}%
                          </div>
                          <div className="text-sm text-gray-600">ROI Jaar 1</div>
                        </div>
                        <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                          <div className="text-3xl font-bold text-agent-blue">
                            {paybackMonths}
                          </div>
                          <div className="text-sm text-gray-600">Maanden Payback</div>
                        </div>
                        <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                          <div className="text-3xl font-bold text-purple-600">
                            €{Math.round(annualSavings).toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600">Jaarlijkse Besparing</div>
                        </div>
                        <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                          <div className="text-3xl font-bold text-orange-600">
                            €{Math.round(annualSavings * 3 - agentCost).toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600">3-Jaar Netto</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Breakdown */}
                <Card className="shadow-xl border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Euro className="w-5 h-5 mr-2" />
                      Kosten Breakdown
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span>Huidige jaarlijkse kosten</span>
                      <span className="font-semibold">€{Math.round(annualCost).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span>Agent implementatie (eenmalig)</span>
                      <span className="font-semibold text-red-600">€{agentCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span>Agent onderhoud (per jaar)</span>
                      <span className="font-semibold text-red-600">€{Math.round(agentCost * 0.2).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span>Jaarlijkse besparing</span>
                      <span className="font-semibold text-agent-green">€{Math.round(annualSavings).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-t-2 border-agent-blue">
                      <span className="font-bold">Netto jaarlijks voordeel</span>
                      <span className="font-bold text-agent-green text-lg">
                        €{Math.round(annualSavings - (agentCost * 0.2)).toLocaleString()}
                      </span>
                    </div>
                  </CardContent>
                </Card>

                {/* CTA */}
                <Card className="shadow-xl border-0 bg-gradient-to-r from-agent-navy to-agent-blue text-white">
                  <CardContent className="p-8 text-center space-y-4">
                    <h3 className="text-xl font-bold">Klaar om te starten?</h3>
                    <p className="text-blue-100">
                      Book een gratis 30-min consultatie en ontvang een gepersonaliseerd implementatieplan
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button variant="secondary" size="lg">
                        <Clock className="w-5 h-5 mr-2" />
                        Book Gratis Consultatie
                      </Button>
                      <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-agent-navy">
                        Download Business Case
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              /* Placeholder */
              <Card className="shadow-xl border-0 h-full">
                <CardContent className="p-8 h-full flex items-center justify-center">
                  <div className="text-center space-y-4 text-gray-400">
                    <Calculator className="w-16 h-16 mx-auto" />
                    <h3 className="text-xl font-semibold">Vul je gegevens in</h3>
                    <p>Je ROI berekening verschijnt hier</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Gebaseerd op 500+ implementaties</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Gemiddeld 340% ROI in jaar 1</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>95% haalt projected ROI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
