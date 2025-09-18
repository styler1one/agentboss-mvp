'use client'

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  CheckCircle, ArrowRight, ArrowLeft, Target, 
  TrendingUp, Clock, Star
} from "lucide-react"
import ContactModal from "@/components/ContactModal"

const assessmentQuestions = [
  {
    id: 1,
    question: "Wat is je grootste uitdaging met AI?",
    options: [
      { id: "a", text: "Weet niet waar te beginnen", weight: { complexity: 3, urgency: 2, budget: 2 } },
      { id: "b", text: "Eerdere AI projecten zijn gefaald", weight: { complexity: 4, urgency: 4, budget: 3 } },
      { id: "c", text: "Te duur en te complex", weight: { complexity: 2, urgency: 3, budget: 4 } },
      { id: "d", text: "Geen technische expertise in huis", weight: { complexity: 4, urgency: 2, budget: 2 } }
    ]
  },
  {
    id: 2,
    question: "Welke processen wil je automatiseren?",
    options: [
      { id: "a", text: "Klantenservice & support", weight: { complexity: 2, urgency: 3, budget: 2 } },
      { id: "b", text: "Sales & lead generation", weight: { complexity: 3, urgency: 4, budget: 3 } },
      { id: "c", text: "HR & recruitment", weight: { complexity: 3, urgency: 2, budget: 3 } },
      { id: "d", text: "Finance & compliance", weight: { complexity: 4, urgency: 3, budget: 4 } }
    ]
  },
  {
    id: 3,
    question: "Wat is je bedrijfsgrootte?",
    options: [
      { id: "a", text: "Startup (1-10 medewerkers)", weight: { complexity: 2, urgency: 3, budget: 2 } },
      { id: "b", text: "Scale-up (11-50 medewerkers)", weight: { complexity: 3, urgency: 4, budget: 3 } },
      { id: "c", text: "Middelgroot (51-250 medewerkers)", weight: { complexity: 3, urgency: 3, budget: 4 } },
      { id: "d", text: "Enterprise (250+ medewerkers)", weight: { complexity: 4, urgency: 2, budget: 4 } }
    ]
  },
  {
    id: 4,
    question: "Wat is je gewenste timeline?",
    options: [
      { id: "a", text: "ASAP - binnen 1 maand", weight: { complexity: 2, urgency: 4, budget: 3 } },
      { id: "b", text: "2-3 maanden", weight: { complexity: 3, urgency: 3, budget: 3 } },
      { id: "c", text: "3-6 maanden", weight: { complexity: 4, urgency: 2, budget: 4 } },
      { id: "d", text: "6+ maanden", weight: { complexity: 4, urgency: 1, budget: 4 } }
    ]
  },
  {
    id: 5,
    question: "Wat is je budget range?",
    options: [
      { id: "a", text: "€10K - €25K", weight: { complexity: 2, urgency: 3, budget: 2 } },
      { id: "b", text: "€25K - €75K", weight: { complexity: 3, urgency: 3, budget: 3 } },
      { id: "c", text: "€75K - €150K", weight: { complexity: 4, urgency: 3, budget: 4 } },
      { id: "d", text: "€150K+", weight: { complexity: 4, urgency: 2, budget: 4 } }
    ]
  }
]

const getRecommendation = (scores: { complexity: number, urgency: number, budget: number }) => {
  const total = scores.complexity + scores.urgency + scores.budget
  
  if (total <= 8) {
    return {
      solution: "Agent Marketplace",
      title: "Pre-built AI Agent",
      price: "€15K - €35K",
      timeline: "2-3 weken",
      description: "Perfect voor snelle wins met bewezen agents",
      features: ["Plug & play oplossing", "Snelle implementatie", "Lage kosten", "Bewezen ROI"],
      roi: "280%",
      savings: "€45K/jaar"
    }
  } else if (total <= 12) {
    return {
      solution: "Expert Ecosystem",
      title: "Expert Consultancy",
      price: "€850 - €1,200/dag",
      timeline: "4-8 weken",
      description: "Ideaal voor maatwerk met expert begeleiding",
      features: ["Dedicated expert", "Custom approach", "Hands-on support", "Knowledge transfer"],
      roi: "340%",
      savings: "€85K/jaar"
    }
  } else {
    return {
      solution: "Agent Factory",
      title: "Custom AI Development",
      price: "€75K - €150K",
      timeline: "8-12 weken",
      description: "Enterprise-grade custom AI agents",
      features: ["Volledig maatwerk", "Enterprise integraties", "Dedicated team", "Ongoing support"],
      roi: "420%",
      savings: "€200K/jaar"
    }
  }
}

export default function InteractiveAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)
  const [showContactModal, setShowContactModal] = useState(false)
  const [isStarted, setIsStarted] = useState(false)

  const handleAnswer = (questionId: number, optionId: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: optionId }))
    
    if (currentQuestion < assessmentQuestions.length - 1) {
      setTimeout(() => setCurrentQuestion(prev => prev + 1), 300)
    } else {
      setTimeout(() => setShowResults(true), 300)
    }
  }

  const calculateScores = () => {
    const scores = { complexity: 0, urgency: 0, budget: 0 }
    
    Object.entries(answers).forEach(([questionId, optionId]) => {
      const question = assessmentQuestions.find(q => q.id === parseInt(questionId))
      const option = question?.options.find(o => o.id === optionId)
      
      if (option) {
        scores.complexity += option.weight.complexity
        scores.urgency += option.weight.urgency
        scores.budget += option.weight.budget
      }
    })
    
    return scores
  }

  const recommendation = showResults ? getRecommendation(calculateScores()) : null
  const progress = ((currentQuestion + 1) / assessmentQuestions.length) * 100

  if (!isStarted) {
    return (
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              <Target className="w-4 h-4 mr-2" />
              Gratis AI Assessment
            </Badge>
            
            <h2 className="text-4xl font-bold text-agent-navy mb-6">
              Ontdek jouw perfecte AI oplossing in 2 minuten
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Beantwoord 5 snelle vragen en krijg een persoonlijk advies met concrete pricing, 
              timeline en ROI berekening voor jouw situatie.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">2 minuten</h3>
                <p className="text-sm text-gray-600">Snelle assessment</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Persoonlijk</h3>
                <p className="text-sm text-gray-600">Op maat gemaakt advies</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Concrete ROI</h3>
                <p className="text-sm text-gray-600">Exacte besparingen</p>
              </div>
            </div>

            <Button 
              size="xl" 
              variant="agent" 
              className="text-lg"
              onClick={() => setIsStarted(true)}
            >
              Start Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            <p className="text-sm text-gray-500 mt-4">
              🔒 Geen spam • Direct resultaat • Gratis expert advies
            </p>
          </div>
        </div>
      </section>
    )
  }

  if (showResults && recommendation) {
    return (
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12 animate-fade-up">
              <Badge variant="success" className="mb-4">
                <CheckCircle className="w-4 h-4 mr-2" />
                Assessment Compleet
              </Badge>
              <h2 className="text-4xl font-bold text-agent-navy mb-4">
                Jouw perfecte AI oplossing
              </h2>
              <p className="text-xl text-gray-600">
                Gebaseerd op jouw antwoorden adviseren wij:
              </p>
            </div>

            <Card className="shadow-2xl border-2 border-agent-green">
              <CardHeader className="bg-gradient-to-r from-agent-blue to-agent-green text-white text-center">
                <CardTitle className="text-2xl">{recommendation.title}</CardTitle>
                <CardDescription className="text-blue-100 text-lg">
                  {recommendation.description}
                </CardDescription>
                <div className="flex justify-center items-center space-x-8 mt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">{recommendation.price}</div>
                    <div className="text-sm text-blue-200">Investering</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">{recommendation.timeline}</div>
                    <div className="text-sm text-blue-200">Timeline</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">{recommendation.roi}</div>
                    <div className="text-sm text-blue-200">ROI</div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-lg mb-4">Waarom dit perfect voor jou is:</h4>
                    <ul className="space-y-3">
                      {recommendation.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="font-semibold text-lg mb-4 text-green-800">
                      Verwachte resultaten:
                    </h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Jaarlijkse besparing:</span>
                        <span className="font-bold text-green-600">{recommendation.savings}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>ROI na 12 maanden:</span>
                        <span className="font-bold text-green-600">{recommendation.roi}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Payback periode:</span>
                        <span className="font-bold text-green-600">4-6 maanden</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button 
                    variant="agent" 
                    size="lg" 
                    className="flex-1"
                    onClick={() => setShowContactModal(true)}
                  >
                    <Star className="w-5 h-5 mr-2" />
                    Claim jouw {recommendation.title}
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="flex-1"
                    onClick={() => {
                      setIsStarted(false)
                      setCurrentQuestion(0)
                      setAnswers({})
                      setShowResults(false)
                    }}
                  >
                    Opnieuw beginnen
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <ContactModal
          isOpen={showContactModal}
          onClose={() => setShowContactModal(false)}
          type="consultation"
          title={`${recommendation.title} - Gratis Consultatie`}
        />
      </section>
    )
  }

  const question = assessmentQuestions[currentQuestion]

  return (
    <section className="section-spacing-compact bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">
                Vraag {currentQuestion + 1} van {assessmentQuestions.length}
              </span>
              <span className="text-sm text-gray-600">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                {question.question}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              {question.options.map((option) => (
                <Button
                  key={option.id}
                  variant="outline"
                  size="lg"
                  className="w-full text-left justify-start h-auto p-4 hover:border-agent-blue hover:bg-blue-50"
                  onClick={() => handleAnswer(question.id, option.id)}
                >
                  <span className="text-base">{option.text}</span>
                  <ArrowRight className="w-5 h-5 ml-auto" />
                </Button>
              ))}

              {currentQuestion > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-4"
                  onClick={() => setCurrentQuestion(prev => prev - 1)}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Vorige vraag
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
