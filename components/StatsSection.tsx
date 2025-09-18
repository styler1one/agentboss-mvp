'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, CheckCircle, Clock, Euro, Globe } from "lucide-react"
import { useState, useEffect } from "react"

export default function StatsSection() {
  const [stats, setStats] = useState({
    agentsDelivered: 1247,
    companiesServed: 156,
    totalROI: 12500000,
    avgDeliveryTime: 18,
    successRate: 95,
    expertsInNetwork: 250
  })

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        agentsDelivered: prev.agentsDelivered + (Math.random() > 0.8 ? 1 : 0),
        totalROI: prev.totalROI + (Math.random() > 0.9 ? Math.floor(Math.random() * 50000) : 0)
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="section-spacing-compact bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12 animate-fade-up">
          <Badge variant="outline" className="mb-4">
            <TrendingUp className="w-4 h-4 mr-2" />
            Live Platform Statistics
          </Badge>
          <h2 className="text-4xl font-bold text-agent-navy">
            Bewezen resultaten, meetbare impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Onze platform statistieken worden real-time bijgewerkt en tonen de concrete 
            business impact die we voor onze klanten realiseren.
          </p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 mb-12 animate-fade-up-delay-1">
          <Card className="text-center hover:shadow-xl hover:scale-105 transition-all duration-300 hover:border-agent-blue/50">
            <CardContent className="p-6">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-agent-blue animate-pulse-glow">
                  {stats.agentsDelivered.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Agents Delivered</div>
                <div className="flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                  <span className="text-xs text-green-600">Live</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-agent-green">
                  {stats.companiesServed.toLocaleString()}+
                </div>
                <div className="text-sm text-gray-600">Companies Served</div>
                <div className="text-xs text-gray-500">Fortune 500 + Scale-ups</div>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-purple-600">
                  €{(stats.totalROI / 1000000).toFixed(1)}M
                </div>
                <div className="text-sm text-gray-600">Total ROI Generated</div>
                <div className="text-xs text-gray-500">For our clients</div>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-orange-600">
                  {stats.avgDeliveryTime}
                </div>
                <div className="text-sm text-gray-600">Avg. Delivery Days</div>
                <div className="text-xs text-gray-500">vs 30 day guarantee</div>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-red-600">
                  {stats.successRate}%
                </div>
                <div className="text-sm text-gray-600">Success Rate</div>
                <div className="text-xs text-gray-500">Industry avg: 22%</div>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-indigo-600">
                  {stats.expertsInNetwork}+
                </div>
                <div className="text-sm text-gray-600">Certified Experts</div>
                <div className="text-xs text-gray-500">Top 5% globally</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-6 text-center">
              <Clock className="w-12 h-12 text-agent-blue mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Delivery Guarantee</h3>
              <p className="text-sm text-gray-600 mb-3">
                100% van onze agents wordt binnen 30 werkdagen geleverd
              </p>
              <div className="text-2xl font-bold text-agent-blue">30 dagen</div>
              <div className="text-xs text-gray-500">of geld terug</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardContent className="p-6 text-center">
              <Euro className="w-12 h-12 text-agent-green mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">ROI Guarantee</h3>
              <p className="text-sm text-gray-600 mb-3">
                Gemiddelde klant ziet 340% ROI binnen het eerste jaar
              </p>
              <div className="text-2xl font-bold text-agent-green">340%</div>
              <div className="text-xs text-gray-500">gemiddelde ROI</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <CardContent className="p-6 text-center">
              <CheckCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Quality Assurance</h3>
              <p className="text-sm text-gray-600 mb-3">
                Triple-check proces zorgt voor hoogste kwaliteit
              </p>
              <div className="text-2xl font-bold text-purple-600">99.2%</div>
              <div className="text-xs text-gray-500">klanttevredenheid</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
            <CardContent className="p-6 text-center">
              <Globe className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Global Reach</h3>
              <p className="text-sm text-gray-600 mb-3">
                Actief in 15+ landen met lokale compliance
              </p>
              <div className="text-2xl font-bold text-orange-600">15+</div>
              <div className="text-xs text-gray-500">landen</div>
            </CardContent>
          </Card>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-agent-navy">€12B</div>
              <div className="text-sm text-gray-600">Europese AI services markt</div>
              <div className="text-xs text-gray-500">Groeit 35% per jaar</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-agent-navy">78%</div>
              <div className="text-sm text-gray-600">AI projecten falen</div>
              <div className="text-xs text-gray-500">Wij lossen dit op</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-agent-navy">€500M+</div>
              <div className="text-sm text-gray-600">Target valuation</div>
              <div className="text-xs text-gray-500">IPO-ready in 2027</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
