'use client'

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  Star, Quote, TrendingUp, 
  CheckCircle, ArrowRight, Building2
} from "lucide-react"
import ContactModal from "@/components/ContactModal"

const testimonials = [
  {
    id: 1,
    name: "Sarah van der Berg",
    role: "CEO",
    company: "TechStart Amsterdam",
    industry: "Technology",
    image: "/api/placeholder/64/64",
    rating: 5,
    quote: "AgentBoss heeft onze customer service volledig getransformeerd. Van 24 uur response naar real-time support. Onze klanttevredenheid is met 40% gestegen.",
    results: {
      metric: "40% hogere klanttevredenheid",
      savings: "€85K/jaar besparing",
      timeframe: "3 maanden"
    },
    agentUsed: "CustomerCare AI"
  },
  {
    id: 2,
    name: "Mark Janssen",
    role: "Operations Director", 
    company: "RetailGiant",
    industry: "E-commerce",
    image: "/api/placeholder/64/64",
    rating: 5,
    quote: "De ROI was zichtbaar binnen 6 weken. Onze sales agent heeft de conversie met 35% verhoogd. Beste investering die we ooit hebben gedaan.",
    results: {
      metric: "35% hogere conversie",
      savings: "€320K extra omzet",
      timeframe: "6 weken"
    },
    agentUsed: "SalesBot Pro"
  },
  {
    id: 3,
    name: "Dr. Lisa Vermeulen",
    role: "CTO",
    company: "FinanceFlow",
    industry: "FinTech",
    image: "/api/placeholder/64/64",
    rating: 5,
    quote: "Compliance was altijd een hoofdpijn. Nu monitort onze AI-agent automatisch alle regelgeving. We zijn altijd up-to-date en audit-ready.",
    results: {
      metric: "100% compliance score",
      savings: "€150K compliance kosten",
      timeframe: "4 maanden"
    },
    agentUsed: "ComplianceGuard"
  }
]

const caseStudies = [
  {
    id: 1,
    company: "Nederlandse Bank",
    industry: "Banking",
    challenge: "Handmatige fraud detectie kostte €2M/jaar",
    solution: "FinanceGuard AI voor real-time fraud monitoring",
    results: [
      "85% minder false positives",
      "€2.3M jaarlijkse besparing", 
      "99.7% fraud detection accuracy"
    ],
    timeframe: "6 maanden",
    roi: "420%"
  },
  {
    id: 2,
    company: "Fashion Retailer",
    industry: "E-commerce",
    challenge: "Lage conversie rates en hoge cart abandonment",
    solution: "SalesBot Pro met personalized recommendations",
    results: [
      "35% hogere conversie rate",
      "€1.8M extra jaaromzet",
      "60% minder cart abandonment"
    ],
    timeframe: "4 maanden", 
    roi: "340%"
  },
  {
    id: 3,
    company: "Ziekenhuis Groep",
    industry: "Healthcare",
    challenge: "Administratieve overhead kostte 40% van tijd",
    solution: "HealthCare Assistant voor patient management",
    results: [
      "60% minder admin tijd",
      "€3.1M kostenbesparing",
      "95% patiënt satisfaction"
    ],
    timeframe: "8 maanden",
    roi: "380%"
  }
]

const stats = [
  { metric: "1,247+", description: "AI Agents Delivered", icon: CheckCircle },
  { metric: "€12.5M", description: "Total ROI Generated", icon: TrendingUp },
  { metric: "156", description: "Happy Companies", icon: Building2 },
  { metric: "4.9/5", description: "Customer Rating", icon: Star }
]

export default function SocialProofSection() {
  const [activeTab, setActiveTab] = useState<'testimonials' | 'cases'>('testimonials')
  const [showContactModal, setShowContactModal] = useState(false)

  return (
    <section className="section-spacing-compact bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Star className="w-4 h-4 mr-2" />
            Social Proof
          </Badge>
          <h2 className="text-4xl font-bold text-agent-navy mb-4">
            Waarom 156+ bedrijven voor ons kiezen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Van startups tot Fortune 500 - ontdek hoe onze klanten 
            hun AI-transformatie hebben gerealiseerd.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <IconComponent className="w-8 h-8 text-agent-blue mx-auto mb-3" />
                  <div className="text-3xl font-bold text-agent-navy mb-2">
                    {stat.metric}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-2 shadow-lg">
            <Button
              variant={activeTab === 'testimonials' ? 'agent' : 'ghost'}
              onClick={() => setActiveTab('testimonials')}
              className="mr-2"
            >
              <Quote className="w-4 h-4 mr-2" />
              Testimonials
            </Button>
            <Button
              variant={activeTab === 'cases' ? 'agent' : 'ghost'}
              onClick={() => setActiveTab('cases')}
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Case Studies
            </Button>
          </div>
        </div>

        {/* Testimonials Tab */}
        {activeTab === 'testimonials' && (
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>
                        {testimonial.role}, {testimonial.company}
                      </CardDescription>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                    <Badge variant="secondary">{testimonial.industry}</Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <blockquote className="text-gray-700 italic">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-green-800">Resultaten:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Impact:</span>
                        <span className="font-semibold text-green-600">
                          {testimonial.results.metric}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Besparing:</span>
                        <span className="font-semibold text-green-600">
                          {testimonial.results.savings}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Timeline:</span>
                        <span className="font-semibold">
                          {testimonial.results.timeframe}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <Badge variant="outline" className="mb-2">
                      Agent: {testimonial.agentUsed}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Case Studies Tab */}
        {activeTab === 'cases' && (
          <div className="space-y-8">
            {caseStudies.map((study) => (
              <Card key={study.id} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div>
                      <h3 className="text-xl font-bold text-agent-navy mb-2">
                        {study.company}
                      </h3>
                      <Badge variant="secondary" className="mb-4">
                        {study.industry}
                      </Badge>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-red-600 mb-2">❌ Challenge:</h4>
                          <p className="text-gray-700 text-sm">{study.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-blue-600 mb-2">🔧 Solution:</h4>
                          <p className="text-gray-700 text-sm">{study.solution}</p>
                        </div>
                      </div>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="font-semibold text-green-600 mb-4">✅ Results:</h4>
                      <ul className="space-y-3">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Metrics */}
                    <div className="bg-gradient-to-br from-agent-blue to-agent-green text-white rounded-lg p-6 text-center">
                      <h4 className="font-semibold mb-4">Key Metrics</h4>
                      <div className="space-y-4">
                        <div>
                          <div className="text-3xl font-bold">{study.roi}</div>
                          <div className="text-sm text-blue-100">ROI na 12 maanden</div>
                        </div>
                        <div>
                          <div className="text-xl font-bold">{study.timeframe}</div>
                          <div className="text-sm text-blue-100">Implementation tijd</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-agent-navy mb-4">
            Klaar om jouw success story te schrijven?
          </h3>
          <Button 
            variant="agent" 
            size="xl"
            onClick={() => setShowContactModal(true)}
          >
            Start jouw AI transformatie
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>

      <ContactModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
        type="consultation"
        title="Start jouw Success Story"
      />
    </section>
  )
}
