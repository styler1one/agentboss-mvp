'use client'

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Clock, TrendingUp, Users, CheckCircle, Star } from "lucide-react"
import { useState, useEffect } from "react"
import ContactModal from "@/components/ContactModal"

export default function HeroSection() {
  const [agentsDelivered, setAgentsDelivered] = useState(1247)
  const [companiesServed, setCompaniesServed] = useState(156)
  const [showDemoModal, setShowDemoModal] = useState(false)
  const [showStartModal, setShowStartModal] = useState(false)

  // Simulate real-time counter
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setAgentsDelivered(prev => prev + 1)
      }
      if (Math.random() > 0.9) {
        setCompaniesServed(prev => prev + 1)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[85vh] bg-gradient-to-br from-agent-navy via-blue-900 to-agent-blue overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-4 py-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Content */}
          <div className="text-white space-y-8">
            {/* Trust Badge */}
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                🇪🇺 Europa's #1 AI Agent Platform
              </Badge>
              <Badge variant="success">
                <Star className="w-3 h-3 mr-1" />
                4.9/5 (500+ reviews)
              </Badge>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Van AI-chaos naar{" "}
                <span className="gradient-text">AI-succes</span>{" "}
                in 30 dagen
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Europa's eerste <strong>gegarandeerde AI-agent delivery platform</strong>. 
                Werkende agent binnen 30 werkdagen of 100% geld terug.
              </p>
            </div>

            {/* Pain Points */}
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-4 text-yellow-300">❌ Herken je dit?</h3>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-red-400">•</span>
                  <span>AI projecten die maanden duren en niets opleveren</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-red-400">•</span>
                  <span>Dure consultants zonder concrete resultaten</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-red-400">•</span>
                  <span>Technische complexiteit die niemand begrijpt</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-red-400">•</span>
                  <span>Budgetoverschrijdingen en gemiste deadlines</span>
                </div>
              </div>
              <div className="mt-4 text-agent-green font-semibold">
                ✅ Wij lossen dit op met onze Triple Guarantee
              </div>
            </div>

            {/* Triple Guarantee */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <Clock className="w-8 h-8 text-agent-blue" />
                <div>
                  <div className="font-semibold">30 Dagen</div>
                  <div className="text-sm text-blue-200">Delivery Garantie</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <TrendingUp className="w-8 h-8 text-agent-green" />
                <div>
                  <div className="font-semibold">90 Dagen</div>
                  <div className="text-sm text-blue-200">ROI Garantie</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <Shield className="w-8 h-8 text-yellow-400" />
                <div>
                  <div className="font-semibold">Responsible AI</div>
                  <div className="text-sm text-blue-200">Ethische AI Garantie</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="xl" 
                variant="agent" 
                className="text-lg"
                onClick={() => setShowStartModal(true)}
              >
                Start je AI Agent
                <CheckCircle className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="xl" 
                variant="outline-white" 
                className="text-lg"
                onClick={() => setShowDemoModal(true)}
              >
                Bekijk Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-8 text-sm text-blue-200">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>{companiesServed.toLocaleString()}+ bedrijven</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4" />
                <span>{agentsDelivered.toLocaleString()}+ agents geleverd</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>95% succesratio</span>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Demo */}
          <div className="space-y-6">
            {/* Live Metrics Dashboard */}
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-semibold text-agent-navy">Live Platform Metrics</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-agent-blue">{agentsDelivered.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">Agents Delivered</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-agent-green">€12.5M</div>
                      <div className="text-sm text-gray-600">ROI Generated</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600">95%</div>
                      <div className="text-sm text-gray-600">Success Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600">18</div>
                      <div className="text-sm text-gray-600">Avg. Days</div>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Live data - Updated every 5 seconds</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Customer Logos */}
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <h4 className="text-sm font-medium text-gray-600">Vertrouwd door 500+ bedrijven</h4>
                  <div className="grid grid-cols-3 gap-4 items-center opacity-60">
                    <div className="text-center font-bold text-gray-400">ASML</div>
                    <div className="text-center font-bold text-gray-400">ING</div>
                    <div className="text-center font-bold text-gray-400">Philips</div>
                    <div className="text-center font-bold text-gray-400">KPN</div>
                    <div className="text-center font-bold text-gray-400">ABN</div>
                    <div className="text-center font-bold text-gray-400">DSM</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Modals */}
      <ContactModal
        isOpen={showDemoModal}
        onClose={() => setShowDemoModal(false)}
        type="demo"
        title="Live Platform Demo"
      />

      <ContactModal
        isOpen={showStartModal}
        onClose={() => setShowStartModal(false)}
        type="consultation"
        title="Start je AI Agent"
      />

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-agent-green/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 bg-agent-blue/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
    </section>
  )
}
