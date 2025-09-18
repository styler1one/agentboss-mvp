'use client'

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  ArrowLeft, CheckCircle, Clock, Users, Star, 
  Award, Brain, Target, Search, MapPin, 
  TrendingUp, Phone, Eye
} from "lucide-react"
import ContactModal from "@/components/ContactModal"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const expertTiers = [
  {
    level: "AgentBoss Certified",
    color: "from-blue-500 to-blue-600",
    badge: "🥉",
    requirements: ["2+ jaar AI ervaring", "5+ projecten", "Basic certificering"],
    experts: 89,
    hourlyRate: "€150-250",
    description: "Ervaren AI specialisten voor standaard implementaties"
  },
  {
    level: "AgentBoss Expert", 
    color: "from-purple-500 to-purple-600",
    badge: "🥈",
    requirements: ["5+ jaar AI ervaring", "15+ projecten", "Advanced certificering"],
    experts: 42,
    hourlyRate: "€250-400",
    description: "Senior experts voor complexe AI oplossingen"
  },
  {
    level: "AgentBoss Master",
    color: "from-yellow-500 to-yellow-600", 
    badge: "🥇",
    requirements: ["10+ jaar AI ervaring", "50+ projecten", "Master certificering"],
    experts: 12,
    hourlyRate: "€400-600",
    description: "Top 1% AI experts voor enterprise projecten"
  }
]

const topExperts = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "AI Strategy Expert",
    specialization: "Enterprise AI",
    location: "Amsterdam",
    rating: 4.9,
    projects: 67,
    certification: "AgentBoss Master",
    hourlyRate: 450,
    avatar: "/api/placeholder/100/100",
    skills: ["Strategic AI Planning", "Enterprise Architecture", "Change Management"],
    experience: "12 jaar",
    languages: ["Nederlands", "English", "Deutsch"],
    availability: "Deze week",
    bio: "Voormalig AI Director bij Philips. Specialist in enterprise AI transformaties voor Fortune 500 bedrijven."
  },
  {
    id: 2,
    name: "Prof. Marcus Chen",
    title: "Machine Learning Architect", 
    specialization: "Deep Learning",
    location: "Eindhoven",
    rating: 4.8,
    projects: 89,
    certification: "AgentBoss Master",
    hourlyRate: 520,
    avatar: "/api/placeholder/100/100",
    skills: ["Neural Networks", "Computer Vision", "NLP"],
    experience: "15 jaar",
    languages: ["English", "Mandarin", "Nederlands"],
    availability: "Volgende week",
    bio: "AI Research Professor TU/e. Pioneer in computer vision en deep learning architectures."
  },
  {
    id: 3,
    name: "Lisa van der Berg",
    title: "AI Implementation Specialist",
    specialization: "Process Automation",
    location: "Rotterdam", 
    rating: 4.9,
    projects: 134,
    certification: "AgentBoss Expert",
    hourlyRate: 320,
    avatar: "/api/placeholder/100/100",
    skills: ["Process Mining", "RPA", "Workflow Optimization"],
    experience: "8 jaar",
    languages: ["Nederlands", "English", "Français"],
    availability: "Deze week",
    bio: "Ex-McKinsey consultant gespecialiseerd in AI-gedreven proces optimalisatie."
  }
]

const matchingProcess = [
  {
    step: 1,
    title: "Project Intake",
    duration: "15 min",
    description: "Vertel ons over je project, doelen en requirements",
    activities: [
      "Project scope definitie",
      "Budget en timeline bepaling", 
      "Technical requirements analyse",
      "Team en stakeholder mapping"
    ]
  },
  {
    step: 2, 
    title: "Expert Matching",
    duration: "2-4 uur",
    description: "Onze AI matcht je met de perfecte experts",
    activities: [
      "Skill-based matching algoritme",
      "Availability cross-check",
      "Cultural fit assessment", 
      "Budget optimalisatie"
    ]
  },
  {
    step: 3,
    title: "Expert Interviews", 
    duration: "1-2 dagen",
    description: "Ontmoet je top 3 expert kandidaten",
    activities: [
      "30-min video calls per expert",
      "Technical competency check",
      "Project approach discussie",
      "Chemistry en fit beoordeling"
    ]
  },
  {
    step: 4,
    title: "Project Kickoff",
    duration: "1 week",
    description: "Start je project met je gekozen expert",
    activities: [
      "Contract en SLA setup",
      "Project planning sessie",
      "Team introductions",
      "First milestone definitie"
    ]
  }
]

const successMetrics = [
  { metric: "Expert Satisfaction", value: "4.8/5", description: "Gemiddelde expert rating" },
  { metric: "Client Retention", value: "94%", description: "Klanten die terugkomen" },
  { metric: "Project Success", value: "96%", description: "On-time, on-budget delivery" },
  { metric: "Matching Accuracy", value: "91%", description: "Eerste match succesvol" }
]

export default function ExpertEcosystemPage() {
  const [showContactModal, setShowContactModal] = useState(false)
  const [selectedExpert, setSelectedExpert] = useState<typeof topExperts[0] | null>(null)
  const [showExpertModal, setShowExpertModal] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-agent-navy via-purple-900 to-agent-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Link href="/" className="inline-flex items-center text-blue-200 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Terug naar home
              </Link>
            </div>

            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              <Users className="w-4 h-4 mr-2" />
              Expert Ecosystem
            </Badge>
            
            <h1 className="text-5xl font-bold mb-6">
              Top 1% AI Experts op Aanvraag
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Toegang tot <strong className="text-agent-green">250+ gecertificeerde AI experts</strong> 
              met bewezen track record. Van strategie tot implementatie - 
              we matchen je binnen <strong className="text-agent-green">24 uur</strong> met de perfecte specialist.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="xl" 
                variant="secondary" 
                className="text-lg"
                onClick={() => setShowContactModal(true)}
              >
                <Search className="w-5 h-5 mr-2" />
                Start Expert Matching
              </Button>
              <Button 
                size="xl" 
                variant="outline-white" 
                className="text-lg"
                onClick={() => {
                  document.getElementById('experts')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Bekijk Top Experts
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-agent-green">250+</div>
                <div className="text-sm text-blue-200">Certified Experts</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-agent-green">24u</div>
                <div className="text-sm text-blue-200">Avg. Match Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-agent-green">4.8★</div>
                <div className="text-sm text-blue-200">Expert Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-agent-green">96%</div>
                <div className="text-sm text-blue-200">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Certification Levels */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Award className="w-4 h-4 mr-2" />
              Certification Levels
            </Badge>
            <h2 className="text-4xl font-bold text-agent-navy mb-4">
              Gegarandeerde Kwaliteit op Elk Niveau
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ons rigoureuze certificatie proces zorgt ervoor dat je alleen werkt 
              met de beste AI experts in hun vakgebied.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {expertTiers.map((tier, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${tier.color}`}></div>
                
                <CardHeader className="text-center pt-8">
                  <div className="text-4xl mb-4">{tier.badge}</div>
                  <CardTitle className="text-xl">{tier.level}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-agent-navy">
                    {tier.hourlyRate}/uur
                  </CardDescription>
                  <Badge variant="secondary" className="mt-2">
                    {tier.experts} experts beschikbaar
                  </Badge>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-gray-600 text-center">{tier.description}</p>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Vereisten:</h4>
                    <ul className="space-y-2">
                      {tier.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full"
                    onClick={() => setShowContactModal(true)}
                  >
                    Vind {tier.level}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Experts Showcase */}
      <section id="experts" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Star className="w-4 h-4 mr-2" />
              Featured Experts
            </Badge>
            <h2 className="text-4xl font-bold text-agent-navy mb-4">
              Ontmoet Onze Top Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Een selectie van onze best presterende experts met bewezen track records 
              in enterprise AI implementaties.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {topExperts.map((expert) => (
              <Card 
                key={expert.id} 
                className="hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => {
                  setSelectedExpert(expert)
                  setShowExpertModal(true)
                }}
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <Avatar className="w-20 h-20">
                      <AvatarImage src={expert.avatar} alt={expert.name} />
                      <AvatarFallback className="text-lg font-bold bg-gradient-to-br from-agent-blue to-agent-green text-white">
                        {expert.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  
                  <CardTitle className="text-xl">{expert.name}</CardTitle>
                  <CardDescription className="text-lg">{expert.title}</CardDescription>
                  
                  <div className="flex items-center justify-center space-x-4 mt-4">
                    <Badge variant="success">{expert.certification}</Badge>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="font-semibold">{expert.rating}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 text-gray-500 mr-2" />
                      <span>{expert.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-gray-500 mr-2" />
                      <span>{expert.availability}</span>
                    </div>
                    <div className="flex items-center">
                      <Target className="w-4 h-4 text-gray-500 mr-2" />
                      <span>{expert.projects} projecten</span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="w-4 h-4 text-gray-500 mr-2" />
                      <span>€{expert.hourlyRate}/uur</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Specialisaties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {expert.skills.slice(0, 2).map((skill, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {expert.skills.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{expert.skills.length - 2} meer
                        </Badge>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 line-clamp-2">{expert.bio}</p>

                  <Button 
                    variant="agent" 
                    size="sm" 
                    className="w-full"
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedExpert(expert)
                      setShowContactModal(true)
                    }}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Bekijk Profiel
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Matching Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Matching
            </Badge>
            <h2 className="text-4xl font-bold text-agent-navy mb-4">
              Van Project naar Perfect Match
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ons geavanceerde matching algoritme analyseert je project requirements 
              en vindt binnen 24 uur de ideale expert combinatie.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {matchingProcess.map((step, index) => (
              <Card key={index} className="relative">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-agent-blue to-agent-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                  <CardDescription className="text-agent-green font-semibold">
                    {step.duration}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{step.description}</p>
                  
                  <ul className="space-y-2">
                    {step.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-xs text-gray-600">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                {index < matchingProcess.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-agent-blue to-agent-green"></div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <TrendingUp className="w-4 h-4 mr-2" />
              Proven Results
            </Badge>
            <h2 className="text-4xl font-bold text-agent-navy mb-4">
              Meetbare Resultaten
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Onze experts leveren consistent uitstekende resultaten voor klanten 
              in alle industrieën en project groottes.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-agent-navy mb-2">
                    {metric.value}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{metric.metric}</h3>
                  <p className="text-sm text-gray-600">{metric.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-agent-navy to-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Klaar om je Perfect Expert te Vinden?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start vandaag nog met een gratis expert matching sessie. 
            Binnen 24 uur introduceren we je aan je ideale AI specialist.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              variant="secondary" 
              size="xl"
              onClick={() => setShowContactModal(true)}
            >
              <Search className="w-5 h-5 mr-2" />
              Start Expert Matching
            </Button>
            <Button 
              variant="outline-white" 
              size="xl"
              onClick={() => {
                // Simulate expert guide download
                const link = document.createElement('a')
                link.href = '#'
                link.download = 'AgentBoss-Expert-Guide.pdf'
                link.click()
              }}
            >
              Download Expert Guide
            </Button>
          </div>

          <div className="text-sm text-blue-200">
            🔒 Geen verplichtingen • Gratis matching • 24-uur response
          </div>
        </div>
      </section>

      <Footer />

      {/* Contact Modal */}
      <ContactModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
        type="expert"
        title={selectedExpert ? `Match met ${selectedExpert.name}` : "Expert Matching"}
      />

      {/* Expert Detail Modal */}
      {selectedExpert && (
        <div 
          className={`fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4 ${
            showExpertModal ? 'block' : 'hidden'
          }`}
        >
          <Card className="max-w-2xl w-full shadow-2xl animate-in zoom-in-95 duration-300">
            <CardHeader className="relative bg-gradient-to-r from-agent-navy to-purple-900 text-white">
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-2 right-2 text-white hover:bg-white/20"
                onClick={() => setShowExpertModal(false)}
              >
                ✕
              </Button>
              
              <div className="flex items-center space-x-4 pr-12">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={selectedExpert.avatar} alt={selectedExpert.name} />
                  <AvatarFallback className="text-lg font-bold bg-white/20">
                    {selectedExpert.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-2xl">{selectedExpert.name}</CardTitle>
                  <CardDescription className="text-blue-100 text-lg">
                    {selectedExpert.title}
                  </CardDescription>
                  <Badge variant="secondary" className="mt-2 bg-white/20 text-white border-white/30">
                    {selectedExpert.certification}
                  </Badge>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Expert Details</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Rating:</span>
                      <span className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        {selectedExpert.rating}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Projecten:</span>
                      <span>{selectedExpert.projects}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Ervaring:</span>
                      <span>{selectedExpert.experience}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tarief:</span>
                      <span>€{selectedExpert.hourlyRate}/uur</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Beschikbaar:</span>
                      <span className="text-green-600">{selectedExpert.availability}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Specialisaties</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedExpert.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <h4 className="font-semibold mb-3 mt-4">Talen</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedExpert.languages.map((lang, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Bio</h4>
                <p className="text-gray-600">{selectedExpert.bio}</p>
              </div>

              <div className="flex gap-4">
                <Button 
                  variant="agent" 
                  size="lg" 
                  className="flex-1"
                  onClick={() => {
                    setShowExpertModal(false)
                    setShowContactModal(true)
                  }}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Book Consultatie
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="flex-1"
                  onClick={() => setShowExpertModal(false)}
                >
                  Sluiten
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
