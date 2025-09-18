'use client'

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TrendingUp, ArrowRight, PlayCircle, FileText } from "lucide-react"

const caseStudies = [
  {
    id: 1,
    company: "TechFlow B.V.",
    industry: "SaaS",
    size: "250 medewerkers",
    logo: "TF",
    challenge: "Handmatige lead kwalificatie kostte 40 uur per week",
    solution: "SalesBot Pro met CRM integratie",
    results: {
      roi: "340%",
      timeframe: "3 maanden",
      savings: "€180,000/jaar",
      efficiency: "85% sneller"
    },
    quote: "AgentBoss heeft ons sales proces volledig getransformeerd. ROI was zichtbaar binnen 6 weken.",
    person: {
      name: "Marcus van der Berg",
      title: "CEO",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
    },
    featured: true,
    videoUrl: "#",
    pdfUrl: "#"
  },
  {
    id: 2,
    company: "LogiCorp Nederland",
    industry: "Logistics",
    size: "500+ medewerkers",
    logo: "LC",
    challenge: "Supply chain optimalisatie was volledig manueel",
    solution: "Custom AI-agent voor voorraad optimalisatie",
    results: {
      roi: "280%",
      timeframe: "4 maanden",
      savings: "€600,000/jaar",
      efficiency: "60% minder voorraad"
    },
    quote: "De AI voorspelt nu vraag beter dan onze ervaren planners. Ongelooflijke impact.",
    person: {
      name: "Sarah Janssen",
      title: "Operations Director",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150"
    },
    featured: false,
    videoUrl: "#",
    pdfUrl: "#"
  },
  {
    id: 3,
    company: "FinanceFirst",
    industry: "Fintech",
    size: "150 medewerkers",
    logo: "FF",
    challenge: "Compliance rapportage kostte 2 FTE's fulltime",
    solution: "FinanceGuard AI met automated reporting",
    results: {
      roi: "420%",
      timeframe: "2 maanden",
      savings: "€240,000/jaar",
      efficiency: "90% minder tijd"
    },
    quote: "Van 2 weken rapportage naar 2 uur. Compliance is nu ons concurrentievoordeel.",
    person: {
      name: "David Chen",
      title: "CTO",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
    },
    featured: false,
    videoUrl: "#",
    pdfUrl: "#"
  }
]

const industries = ["Alle", "SaaS", "Logistics", "Fintech", "Manufacturing", "Healthcare"]

export default function CaseStudiesSection() {
  const [selectedIndustry, setSelectedIndustry] = useState("Alle")
  // const [selectedCase, setSelectedCase] = useState<number | null>(null)

  const filteredCases = caseStudies.filter(cs => 
    selectedIndustry === "Alle" || cs.industry === selectedIndustry
  )

  return (
    <section id="cases" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-4">
            <TrendingUp className="w-4 h-4 mr-2" />
            Success Stories
          </Badge>
          <h2 className="text-4xl font-bold text-agent-navy">
            Echte resultaten van echte klanten
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Van startup tot enterprise - ontdek hoe bedrijven zoals het jouwe 
            <strong className="text-agent-green"> miljoenen besparen</strong> met AgentBoss AI-agents.
          </p>
        </div>

        {/* Industry Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {industries.map((industry) => (
            <Button
              key={industry}
              variant={selectedIndustry === industry ? "agent" : "outline"}
              size="sm"
              onClick={() => setSelectedIndustry(industry)}
            >
              {industry}
              {industry !== "Alle" && (
                <span className="ml-2 text-xs">
                  ({caseStudies.filter(cs => cs.industry === industry).length})
                </span>
              )}
            </Button>
          ))}
        </div>

        {/* Featured Case Study */}
        {filteredCases.filter(cs => cs.featured).map((caseStudy) => (
          <Card key={caseStudy.id} className="mb-12 shadow-2xl border-agent-blue overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Content */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-agent-blue to-agent-green rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    {caseStudy.logo}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-agent-navy">{caseStudy.company}</h3>
                    <div className="flex items-center space-x-3 text-sm text-gray-600">
                      <Badge variant="secondary">{caseStudy.industry}</Badge>
                      <span>•</span>
                      <span>{caseStudy.size}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">Uitdaging:</h4>
                    <p className="text-gray-600">{caseStudy.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-agent-blue mb-2">Oplossing:</h4>
                    <p className="text-gray-600">{caseStudy.solution}</p>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4">
                    <blockquote className="text-lg italic text-gray-700 mb-4">
                      "{caseStudy.quote}"
                    </blockquote>
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={caseStudy.person.avatar} />
                        <AvatarFallback>{caseStudy.person.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold">{caseStudy.person.name}</div>
                        <div className="text-sm text-gray-600">{caseStudy.person.title}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="bg-gradient-to-br from-agent-navy to-agent-blue text-white p-8 lg:p-12">
                <h4 className="text-xl font-bold mb-6">Resultaten na {caseStudy.results.timeframe}:</h4>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-agent-green mb-2">
                      {caseStudy.results.roi}
                    </div>
                    <div className="text-sm text-blue-200">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-agent-green mb-2">
                      {caseStudy.results.savings}
                    </div>
                    <div className="text-sm text-blue-200">Jaarlijkse besparing</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-agent-green mb-2">
                      {caseStudy.results.timeframe}
                    </div>
                    <div className="text-sm text-blue-200">Payback periode</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-agent-green mb-2">
                      {caseStudy.results.efficiency}
                    </div>
                    <div className="text-sm text-blue-200">Efficiency gain</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button variant="secondary" size="lg" className="w-full">
                    <PlayCircle className="w-5 h-5 mr-2" />
                    Bekijk Video Case Study
                  </Button>
                  <Button variant="outline" size="lg" className="w-full border-white text-white hover:bg-white hover:text-agent-navy">
                    <FileText className="w-5 h-5 mr-2" />
                    Download Volledige Case Study
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}

        {/* Other Case Studies */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredCases.filter(cs => !cs.featured).map((caseStudy) => (
            <Card key={caseStudy.id} className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-agent-blue to-agent-green rounded-lg flex items-center justify-center text-white font-bold">
                    {caseStudy.logo}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{caseStudy.company}</CardTitle>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Badge variant="secondary" className="text-xs">{caseStudy.industry}</Badge>
                      <span>•</span>
                      <span>{caseStudy.size}</span>
                    </div>
                  </div>
                </div>
                <CardDescription>{caseStudy.challenge}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-agent-green">{caseStudy.results.roi}</div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-agent-blue">{caseStudy.results.savings}</div>
                    <div className="text-xs text-gray-600">Besparing/jaar</div>
                  </div>
                </div>

                <blockquote className="text-sm italic text-gray-600 border-l-4 border-agent-green pl-4">
                  "{caseStudy.quote}"
                </blockquote>

                <div className="flex items-center space-x-2 text-sm">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={caseStudy.person.avatar} />
                    <AvatarFallback>{caseStudy.person.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{caseStudy.person.name}</div>
                    <div className="text-gray-500">{caseStudy.person.title}</div>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <PlayCircle className="w-4 h-4 mr-1" />
                    Video
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <FileText className="w-4 h-4 mr-1" />
                    PDF
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-agent-navy to-agent-blue text-white">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-4">
                Jouw success story begint hier
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Sluit je aan bij 156+ bedrijven die al €12.5M+ ROI hebben gerealiseerd. 
                Jouw verhaal kan de volgende zijn.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-agent-green">30 dagen</div>
                  <div className="text-blue-200">Delivery garantie</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-agent-green">340%</div>
                  <div className="text-blue-200">Gemiddelde ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-agent-green">95%</div>
                  <div className="text-blue-200">Success rate</div>
                </div>
              </div>

              <Button variant="secondary" size="lg" className="mr-4">
                <TrendingUp className="w-5 h-5 mr-2" />
                Start jouw Success Story
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-agent-navy">
                Bekijk Alle Case Studies
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
