'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote, Users } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Marcus van der Berg",
    title: "CEO",
    company: "TechFlow B.V.",
    industry: "SaaS",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    rating: 5,
    quote: "AgentBoss heeft ons sales proces volledig getransformeerd. Binnen 3 maanden 340% ROI - precies zoals beloofd.",
    results: {
      roi: "340%",
      timeframe: "3 maanden",
      metric: "Sales conversie +85%"
    },
    featured: true
  },
  {
    id: 2,
    name: "Sarah Janssen",
    title: "Operations Director",
    company: "LogiCorp Nederland",
    industry: "Logistics",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
    rating: 5,
    quote: "De AI-agent voor supply chain optimalisatie bespaart ons €50K per maand. Ongelooflijke impact op onze operaties.",
    results: {
      roi: "280%",
      timeframe: "4 maanden", 
      metric: "€50K/maand besparing"
    },
    featured: false
  },
  {
    id: 3,
    name: "David Chen",
    title: "CTO",
    company: "FinanceFirst",
    industry: "Fintech",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    rating: 5,
    quote: "Compliance was altijd een hoofdpijn. Nu automatiseert onze AI-agent alles - van risk assessment tot rapportage.",
    results: {
      roi: "420%",
      timeframe: "2 maanden",
      metric: "90% minder compliance tijd"
    },
    featured: false
  },
  {
    id: 4,
    name: "Linda Bakker",
    title: "HR Manager",
    company: "TalentHub",
    industry: "Recruitment",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    rating: 5,
    quote: "Onze recruitment AI-agent screent nu 500+ CV's per dag. Kwaliteit van kandidaten is 70% beter geworden.",
    results: {
      roi: "380%",
      timeframe: "6 weken",
      metric: "70% betere kandidaten"
    },
    featured: false
  }
]

const companyLogos = [
  { name: "ASML", logo: "ASML" },
  { name: "ING", logo: "ING" },
  { name: "Philips", logo: "Philips" },
  { name: "KPN", logo: "KPN" },
  { name: "Ahold", logo: "Ahold" },
  { name: "DSM", logo: "DSM" }
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-4">
            <Users className="w-4 h-4 mr-2" />
            Success Stories
          </Badge>
          <h2 className="text-4xl font-bold text-agent-navy">
            156+ bedrijven vertrouwen AgentBoss
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Van startup tot Fortune 500 - onze klanten behalen gemiddeld 
            <strong className="text-agent-green"> 340% ROI binnen 4 maanden</strong>
          </p>
        </div>

        {/* Company Logos */}
        <div className="mb-16">
          <div className="text-center text-sm text-gray-500 mb-8">
            Vertrouwd door toonaangevende bedrijven
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
            {companyLogos.map((company, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-gray-400">{company.logo}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Testimonial */}
        {testimonials.filter(t => t.featured).map((testimonial) => (
          <Card key={testimonial.id} className="mb-12 shadow-2xl border-agent-blue bg-gradient-to-r from-white to-blue-50">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="text-center md:text-left">
                  <Avatar className="w-24 h-24 mx-auto md:mx-0 mb-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.title}</p>
                  <p className="font-semibold text-agent-blue">{testimonial.company}</p>
                  <Badge variant="secondary" className="mt-2">{testimonial.industry}</Badge>
                </div>

                <div className="md:col-span-2">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-agent-blue mr-3" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-xl text-gray-700 mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-white rounded-lg shadow">
                      <div className="text-2xl font-bold text-agent-green">{testimonial.results.roi}</div>
                      <div className="text-sm text-gray-600">ROI</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg shadow">
                      <div className="text-2xl font-bold text-agent-blue">{testimonial.results.timeframe}</div>
                      <div className="text-sm text-gray-600">Payback</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg shadow">
                      <div className="text-lg font-bold text-purple-600">{testimonial.results.metric}</div>
                      <div className="text-sm text-gray-600">Impact</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Other Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.filter(t => !t.featured).map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="w-12 h-12 mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                    <p className="text-sm font-medium text-agent-blue">{testimonial.company}</p>
                  </div>
                </div>

                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-gray-700 mb-4 text-sm">
                  "{testimonial.quote}"
                </blockquote>

                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="bg-green-50 p-2 rounded">
                    <div className="font-bold text-agent-green">{testimonial.results.roi}</div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                  <div className="bg-blue-50 p-2 rounded">
                    <div className="font-bold text-agent-blue">{testimonial.results.timeframe}</div>
                    <div className="text-xs text-gray-600">Payback</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-agent-navy to-agent-blue text-white">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <div className="text-3xl font-bold text-agent-green">340%</div>
                  <div className="text-blue-200">Gemiddelde ROI</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-agent-green">4.9/5</div>
                  <div className="text-blue-200">Klant Rating</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-agent-green">95%</div>
                  <div className="text-blue-200">Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-agent-green">156+</div>
                  <div className="text-blue-200">Tevreden Klanten</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
