'use client'

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle } from "lucide-react"
import ContactModal from "@/components/ContactModal"

const faqs = [
  {
    id: 1,
    category: "Algemeen",
    question: "Wat is de gemiddelde implementatietijd voor een AI-agent?",
    answer: "Onze standaard implementatietijd is 18 werkdagen, met een garantie van maximaal 30 werkdagen. Dit is 70% sneller dan de industrie standaard van 3-6 maanden.",
    popular: true
  },
  {
    id: 2,
    category: "ROI & Pricing",
    question: "Hoe realistisch is de 340% ROI belofte?",
    answer: "Onze 340% ROI is gebaseerd op 500+ implementaties. 95% van onze klanten haalt hun projected ROI binnen 90 dagen. We bieden een geld-terug-garantie als je ROI niet wordt behaald.",
    popular: true
  },
  {
    id: 3,
    category: "Technisch",
    question: "Integreert de AI-agent met onze bestaande systemen?",
    answer: "Ja, onze agents integreren met 200+ populaire business tools zoals Salesforce, SAP, Microsoft 365, en meer. Custom integraties zijn mogelijk binnen 1-2 weken.",
    popular: false
  },
  {
    id: 4,
    category: "Security",
    question: "Hoe zit het met data privacy en security?",
    answer: "We zijn ISO27001 gecertificeerd en GDPR compliant. Alle data wordt encrypted opgeslagen in Nederlandse datacenters. Jouw data blijft 100% eigendom van jouw bedrijf.",
    popular: true
  },
  {
    id: 5,
    category: "Support",
    question: "Welke ondersteuning krijgen we na implementatie?",
    answer: "24/7 technische support, maandelijkse performance reviews, gratis updates, en toegang tot ons expert netwerk. Gemiddelde response tijd: 2 uur.",
    popular: false
  },
  {
    id: 6,
    category: "ROI & Pricing",
    question: "Wat zijn de totale kosten van ownership?",
    answer: "Naast de implementatiekosten (€25K-€250K) zijn er maandelijkse kosten van €500-€3000 voor hosting, onderhoud en support. Geen verborgen kosten.",
    popular: false
  },
  {
    id: 7,
    category: "Algemeen",
    question: "Wat gebeurt er als we niet tevreden zijn?",
    answer: "Triple guarantee: 30 dagen delivery, 90 dagen ROI, of 100% geld terug. Plus 6 maanden gratis support bij elke implementatie.",
    popular: true
  },
  {
    id: 8,
    category: "Technisch",
    question: "Kunnen we de AI-agent zelf aanpassen?",
    answer: "Ja, je krijgt volledige source code ownership. Onze experts trainen jouw team, of we beheren alles voor je. Jouw keuze.",
    popular: false
  }
]

const categories = ["Alle", "Algemeen", "ROI & Pricing", "Technisch", "Security", "Support"]

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("Alle")
  const [showChatModal, setShowChatModal] = useState(false)

  const filteredFAQs = faqs.filter(faq => 
    selectedCategory === "Alle" || faq.category === selectedCategory
  )

  const popularFAQs = faqs.filter(faq => faq.popular)

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-4">
            <HelpCircle className="w-4 h-4 mr-2" />
            Veelgestelde Vragen
          </Badge>
          <h2 className="text-4xl font-bold text-agent-navy">
            Alles wat je wilt weten over AgentBoss
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparante antwoorden op de meest gestelde vragen van onze 156+ klanten.
            Niet gevonden wat je zoekt? <strong className="text-agent-blue">Chat direct met een expert.</strong>
          </p>
        </div>

        {/* Popular FAQs */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-agent-navy mb-8 text-center">
            🔥 Meest Gestelde Vragen
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {popularFAQs.slice(0, 4).map((faq) => (
              <Card 
                key={faq.id} 
                className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-agent-green"
                onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
              >
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg text-agent-navy pr-4">
                      {faq.question}
                    </CardTitle>
                    {openFAQ === faq.id ? (
                      <ChevronUp className="w-5 h-5 text-agent-blue flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </div>
                  <Badge variant="secondary" className="w-fit text-xs">
                    {faq.category}
                  </Badge>
                </CardHeader>
                {openFAQ === faq.id && (
                  <CardContent className="pt-0">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "agent" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
              {category !== "Alle" && (
                <span className="ml-2 text-xs">
                  ({faqs.filter(f => f.category === category).length})
                </span>
              )}
            </Button>
          ))}
        </div>

        {/* All FAQs */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFAQs.map((faq) => (
            <Card 
              key={faq.id} 
              className={`hover:shadow-lg transition-all cursor-pointer ${
                faq.popular ? 'border-l-4 border-l-agent-green' : ''
              }`}
              onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
            >
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div className="flex items-start space-x-3">
                    {faq.popular && (
                      <Badge variant="success" className="text-xs mt-1">
                        Populair
                      </Badge>
                    )}
                    <CardTitle className="text-lg text-agent-navy">
                      {faq.question}
                    </CardTitle>
                  </div>
                  {openFAQ === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-agent-blue flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </div>
                <Badge variant="outline" className="w-fit text-xs">
                  {faq.category}
                </Badge>
              </CardHeader>
              {openFAQ === faq.id && (
                <CardContent className="pt-0">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-agent-blue to-agent-green text-white">
            <CardContent className="p-8">
              <MessageCircle className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Nog vragen?</h3>
              <p className="text-blue-100 mb-6">
                Onze AI-experts staan klaar om al je vragen te beantwoorden. 
                Gemiddelde response tijd: 2 minuten.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={() => setShowChatModal(true)}
                >
                  💬 Chat met Expert
                </Button>
                <Button 
                  variant="outline-white" 
                  size="lg"
                  onClick={() => {
                    // Simulate phone call
                    window.open('tel:+31201234567', '_self')
                  }}
                >
                  📞 Bel ons: +31 20 123 4567
                </Button>
              </div>
              <div className="text-xs text-blue-200 mt-4">
                Ma-Vr 9:00-18:00 | Weekend: Emergency support
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Chat Modal */}
      <ContactModal
        isOpen={showChatModal}
        onClose={() => setShowChatModal(false)}
        type="expert"
        title="Chat met Expert"
      />
    </section>
  )
}
