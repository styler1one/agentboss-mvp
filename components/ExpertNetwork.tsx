'use client'

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, MapPin, Clock, Award, Users, Filter, Search } from "lucide-react"

const experts = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "AI Strategy Expert",
    specialization: "Enterprise AI",
    location: "Amsterdam",
    rate: 1200,
    rating: 4.9,
    reviews: 127,
    certification: "AgentBoss Master",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
    experience: "8 jaar",
    completedProjects: 45,
    successRate: 98,
    nextAvailable: "Deze week",
    skills: ["Machine Learning", "NLP", "Computer Vision", "MLOps"],
    bio: "Voormalig AI Director bij Google. Specialist in enterprise AI transformaties voor Fortune 500 bedrijven."
  },
  {
    id: 2,
    name: "Mark van der Berg",
    title: "AI Implementation Lead",
    specialization: "Process Automation",
    location: "Rotterdam",
    rate: 950,
    rating: 4.8,
    reviews: 89,
    certification: "AgentBoss Expert",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    experience: "6 jaar",
    completedProjects: 32,
    successRate: 96,
    nextAvailable: "Volgende week",
    skills: ["RPA", "Process Mining", "Workflow Automation", "Integration"],
    bio: "Ex-McKinsey consultant gespecialiseerd in business process automation en digitale transformatie."
  },
  {
    id: 3,
    name: "Lisa Chen",
    title: "Conversational AI Expert",
    specialization: "Chatbots & NLP",
    location: "Utrecht",
    rate: 850,
    rating: 4.9,
    reviews: 156,
    certification: "AgentBoss Expert",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    experience: "5 jaar",
    completedProjects: 67,
    successRate: 97,
    nextAvailable: "Deze week",
    skills: ["Conversational AI", "NLP", "Voice Assistants", "Sentiment Analysis"],
    bio: "AI researcher met focus op conversational AI. Heeft 50+ chatbots gebouwd voor verschillende sectoren."
  },
  {
    id: 4,
    name: "Thomas Mueller",
    title: "Computer Vision Specialist",
    specialization: "Visual AI",
    location: "Eindhoven",
    rate: 1100,
    rating: 4.7,
    reviews: 73,
    certification: "AgentBoss Expert",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    experience: "7 jaar",
    completedProjects: 28,
    successRate: 94,
    nextAvailable: "Over 2 weken",
    skills: ["Computer Vision", "Image Recognition", "Video Analytics", "Edge AI"],
    bio: "Voormalig ASML engineer. Expert in computer vision voor manufacturing en quality control."
  },
  {
    id: 5,
    name: "Emma Janssen",
    title: "AI Ethics & Compliance",
    specialization: "AI Governance",
    location: "Den Haag",
    rate: 1050,
    rating: 4.8,
    reviews: 94,
    certification: "AgentBoss Master",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150",
    experience: "9 jaar",
    completedProjects: 38,
    successRate: 99,
    nextAvailable: "Deze week",
    skills: ["AI Ethics", "GDPR Compliance", "Risk Management", "AI Governance"],
    bio: "Juridisch expert in AI compliance. Helpt bedrijven navigeren door EU AI Act en GDPR vereisten."
  },
  {
    id: 6,
    name: "Raj Patel",
    title: "MLOps Engineer",
    specialization: "AI Infrastructure",
    location: "Amsterdam",
    rate: 900,
    rating: 4.6,
    reviews: 61,
    certification: "AgentBoss Certified",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150",
    experience: "4 jaar",
    completedProjects: 52,
    successRate: 95,
    nextAvailable: "Volgende week",
    skills: ["MLOps", "Kubernetes", "Cloud Architecture", "Model Deployment"],
    bio: "DevOps engineer gespecialiseerd in ML infrastructure. Expert in schaalbare AI deployments."
  }
]

export default function ExpertNetwork() {
  const [selectedExpert, setSelectedExpert] = useState<number | null>(null)
  const [filter, setFilter] = useState("all")

  const filteredExperts = experts.filter(expert => {
    if (filter === "all") return true
    if (filter === "master") return expert.certification === "AgentBoss Master"
    if (filter === "available") return expert.nextAvailable === "Deze week"
    return true
  })

  return (
    <section id="experts" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="outline" className="mb-4">
            <Users className="w-4 h-4 mr-2" />
            Expert Network
          </Badge>
          <h2 className="text-4xl font-bold text-agent-navy">
            Top 5% AI-experts ter wereld
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ons gecureerde netwerk bestaat uit alleen de beste AI-experts met bewezen track record. 
            Gemiddelde expert rating: <strong className="text-agent-green">4.8/5.0</strong>
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button 
            variant={filter === "all" ? "agent" : "outline"} 
            onClick={() => setFilter("all")}
            size="sm"
          >
            Alle Experts ({experts.length})
          </Button>
          <Button 
            variant={filter === "master" ? "agent" : "outline"} 
            onClick={() => setFilter("master")}
            size="sm"
          >
            <Award className="w-4 h-4 mr-2" />
            Masters (2)
          </Button>
          <Button 
            variant={filter === "available" ? "agent" : "outline"} 
            onClick={() => setFilter("available")}
            size="sm"
          >
            <Clock className="w-4 h-4 mr-2" />
            Deze Week (3)
          </Button>
        </div>

        {/* Expert Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredExperts.map((expert) => (
            <Card 
              key={expert.id} 
              className={`cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                selectedExpert === expert.id ? 'ring-2 ring-agent-blue shadow-xl' : ''
              }`}
              onClick={() => setSelectedExpert(selectedExpert === expert.id ? null : expert.id)}
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src={expert.avatar} alt={expert.name} />
                    <AvatarFallback>{expert.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                </div>
                
                <CardTitle className="text-lg">{expert.name}</CardTitle>
                <CardDescription>{expert.title}</CardDescription>
                
                <div className="flex justify-center">
                  <Badge 
                    variant={expert.certification === "AgentBoss Master" ? "certified" : "secondary"}
                    className="text-xs"
                  >
                    {expert.certification}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Rating & Reviews */}
                <div className="flex items-center justify-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${
                          i < Math.floor(expert.rating) 
                            ? 'fill-yellow-400 text-yellow-400' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">{expert.rating}</span>
                  <span className="text-sm text-gray-500">({expert.reviews} reviews)</span>
                </div>

                {/* Key Stats */}
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-agent-blue">{expert.completedProjects}</div>
                    <div className="text-xs text-gray-500">Projecten</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-agent-green">{expert.successRate}%</div>
                    <div className="text-xs text-gray-500">Succes</div>
                  </div>
                </div>

                {/* Location & Rate */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span>{expert.location}</span>
                    </div>
                    <Badge variant="outline">€{expert.rate}/dag</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span>Beschikbaar</span>
                    </div>
                    <span className={`text-sm font-medium ${
                      expert.nextAvailable === "Deze week" ? "text-green-600" : "text-orange-600"
                    }`}>
                      {expert.nextAvailable}
                    </span>
                  </div>
                </div>

                {/* Specialization */}
                <div className="text-center">
                  <Badge variant="outline" className="text-xs">
                    {expert.specialization}
                  </Badge>
                </div>

                {/* CTA */}
                <Button 
                  className="w-full" 
                  variant={selectedExpert === expert.id ? "agent" : "outline"}
                  size="sm"
                >
                  {selectedExpert === expert.id ? "Geselecteerd" : "Selecteer Expert"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Selected Expert Details */}
        {selectedExpert && (
          <Card className="max-w-4xl mx-auto shadow-2xl border-agent-blue">
            <CardHeader className="bg-gradient-to-r from-agent-blue to-agent-green text-white">
              <div className="flex items-center space-x-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={experts.find(e => e.id === selectedExpert)?.avatar} />
                  <AvatarFallback>
                    {experts.find(e => e.id === selectedExpert)?.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-2xl">
                    {experts.find(e => e.id === selectedExpert)?.name}
                  </CardTitle>
                  <CardDescription className="text-blue-100">
                    {experts.find(e => e.id === selectedExpert)?.title}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-8">
              {(() => {
                const expert = experts.find(e => e.id === selectedExpert)!
                return (
                  <div className="space-y-6">
                    {/* Bio */}
                    <div>
                      <h4 className="font-semibold mb-2">Over {expert.name.split(' ')[0]}</h4>
                      <p className="text-gray-600">{expert.bio}</p>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="font-semibold mb-3">Specialisaties</h4>
                      <div className="flex flex-wrap gap-2">
                        {expert.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary">{skill}</Badge>
                        ))}
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-agent-blue">{expert.experience}</div>
                        <div className="text-sm text-gray-600">Ervaring</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-agent-green">{expert.completedProjects}</div>
                        <div className="text-sm text-gray-600">Projecten</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">{expert.successRate}%</div>
                        <div className="text-sm text-gray-600">Succes Rate</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-orange-600">{expert.rating}</div>
                        <div className="text-sm text-gray-600">Rating</div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Button size="lg" variant="agent" className="flex-1">
                        <Clock className="w-5 h-5 mr-2" />
                        Book Consultatie (€{expert.rate}/dag)
                      </Button>
                      <Button size="lg" variant="outline" className="flex-1">
                        Bekijk Portfolio
                      </Button>
                      <Button size="lg" variant="outline">
                        <Star className="w-5 h-5 mr-2" />
                        Reviews ({expert.reviews})
                      </Button>
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
              <h3 className="text-2xl font-bold mb-4">Klaar om te matchen?</h3>
              <p className="text-blue-100 mb-6">
                Vertel ons over je project en we matchen je binnen 24 uur met de perfecte expert
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg">
                  <Search className="w-5 h-5 mr-2" />
                  Start Expert Matching
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-agent-navy">
                  Bekijk Alle 250+ Experts
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
