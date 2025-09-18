'use client'

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
  MessageCircle, X, Send, Bot, 
  Clock, CheckCircle, Star
} from "lucide-react"

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
  typing?: boolean
}

const botResponses = [
  {
    triggers: ['hallo', 'hi', 'hey', 'goedemorgen', 'goedemiddag'],
    response: "Hallo! 👋 Ik ben Emma van AgentBoss. Hoe kan ik je helpen met AI-agents? Heb je vragen over pricing, implementatie of wil je een demo?"
  },
  {
    triggers: ['prijs', 'pricing', 'kosten', 'budget'],
    response: "Onze AI-agents starten vanaf €15K voor pre-built agents tot €150K+ voor custom enterprise oplossingen. Wil je een persoonlijke offerte? Dan kan ik je doorverbinden met een expert! 💰"
  },
  {
    triggers: ['demo', 'demonstratie', 'voorbeeld'],
    response: "Geweldig! Ik kan direct een demo voor je inplannen. Onze experts laten je binnen 15 minuten zien hoe AI-agents jouw processen kunnen automatiseren. Zal ik een slot reserveren? 🎯"
  },
  {
    triggers: ['garantie', 'risico', 'zekerheid'],
    response: "We hebben een Triple Guarantee: 30 dagen delivery, 90 dagen ROI, en Responsible AI. Als je niet tevreden bent, krijg je 100% je geld terug! Geen risico voor jou. ✅"
  },
  {
    triggers: ['tijd', 'snel', 'wanneer', 'timeline'],
    response: "Onze snelste agents zijn binnen 2-3 weken live! Custom agents duren 8 weken. We hebben een 95% on-time delivery rate. Heb je haast? Dan kan ik prioriteit regelen! ⚡"
  },
  {
    triggers: ['expert', 'specialist', 'hulp'],
    response: "Perfect! Ik verbind je door met een van onze AI experts. Ze zijn beschikbaar voor een gratis 30-min consultatie. Wanneer schikt het jou? 👨‍💼"
  }
]

const getRandomResponse = () => {
  const responses = [
    "Interessant! Vertel me meer over je situatie, dan kan ik je beter helpen. 🤔",
    "Dat is een goede vraag! Laat me je doorverbinden met een expert die dit perfect kan uitleggen. 💡",
    "Ik begrijp je vraag. Onze specialists kunnen je hier veel beter bij helpen. Zal ik contact regelen? 📞"
  ]
  return responses[Math.floor(Math.random() * responses.length)]
}

export default function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)
  const [contactData, setContactData] = useState({ name: '', email: '', phone: '' })

  // Initialize with welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        setMessages([{
          id: '1',
          text: "👋 Hallo! Ik ben Emma van AgentBoss. Ik help je graag met vragen over AI-agents. Wat kan ik voor je doen?",
          sender: 'bot',
          timestamp: new Date()
        }])
      }, 500)
    }
  }, [isOpen, messages.length])

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(inputValue.toLowerCase())
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)

      // Show contact form after certain keywords
      if (inputValue.toLowerCase().includes('contact') || 
          inputValue.toLowerCase().includes('expert') ||
          inputValue.toLowerCase().includes('demo')) {
        setTimeout(() => setShowContactForm(true), 2000)
      }
    }, 1500)
  }

  const getBotResponse = (input: string): string => {
    for (const response of botResponses) {
      if (response.triggers.some(trigger => input.includes(trigger))) {
        return response.response
      }
    }
    return getRandomResponse()
  }

  const handleContactSubmit = () => {
    const contactMessage: Message = {
      id: Date.now().toString(),
      text: `Bedankt ${contactData.name}! Ik heb je gegevens doorgestuurd naar onze experts. Je krijgt binnen 2 uur contact van ons team! 🎉`,
      sender: 'bot',
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, contactMessage])
    setShowContactForm(false)
    setContactData({ name: '', email: '', phone: '' })
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="rounded-full w-16 h-16 bg-gradient-to-r from-agent-blue to-agent-green hover:scale-110 transition-transform shadow-2xl"
          onClick={() => setIsOpen(true)}
        >
          <MessageCircle className="w-8 h-8" />
        </Button>
        
        {/* Notification Badge */}
        <div className="absolute -top-2 -left-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">1</span>
        </div>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 bg-white rounded-lg shadow-lg p-3 max-w-xs opacity-0 hover:opacity-100 transition-opacity">
          <div className="text-sm font-semibold">💬 Heb je vragen?</div>
          <div className="text-xs text-gray-600">Chat met onze AI expert Emma</div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 h-[500px] max-w-[calc(100vw-2rem)]">
      <Card className="h-full shadow-2xl border-2 border-agent-blue">
        <CardHeader className="bg-gradient-to-r from-agent-blue to-agent-green text-white p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <CardTitle className="text-lg">Emma - AI Expert</CardTitle>
                <div className="flex items-center space-x-2 text-sm text-blue-100">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Online nu</span>
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          
          <div className="flex items-center space-x-4 mt-2 text-sm">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Clock className="w-3 h-3 mr-1" />
              Ø 2 min response
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Star className="w-3 h-3 mr-1" />
              4.9/5 rating
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="p-0 h-full flex flex-col">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === 'user'
                      ? 'bg-agent-blue text-white'
                      : 'bg-white border shadow-sm'
                  }`}
                >
                  <div className="text-sm">{message.text}</div>
                  <div className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString('nl-NL', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border shadow-sm rounded-lg p-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}

            {/* Contact Form */}
            {showContactForm && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold mb-3">🎯 Direct contact met expert</h4>
                <div className="space-y-3">
                  <Input
                    placeholder="Jouw naam"
                    value={contactData.name}
                    onChange={(e) => setContactData(prev => ({ ...prev, name: e.target.value }))}
                  />
                  <Input
                    placeholder="Email adres"
                    type="email"
                    value={contactData.email}
                    onChange={(e) => setContactData(prev => ({ ...prev, email: e.target.value }))}
                  />
                  <Input
                    placeholder="Telefoonnummer"
                    value={contactData.phone}
                    onChange={(e) => setContactData(prev => ({ ...prev, phone: e.target.value }))}
                  />
                  <Button 
                    size="sm" 
                    className="w-full"
                    onClick={handleContactSubmit}
                    disabled={!contactData.name || !contactData.email}
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Verstuur naar expert
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t bg-white">
            <div className="flex space-x-2">
              <Input
                placeholder="Type je vraag..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1"
              />
              <Button 
                size="sm"
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            
            {/* Quick Actions */}
            <div className="flex flex-wrap gap-2 mt-3">
              <Button
                variant="outline"
                size="sm"
                className="text-xs"
                onClick={() => {
                  setInputValue("Wat kosten jullie AI-agents?")
                  setTimeout(handleSendMessage, 100)
                }}
              >
                💰 Pricing
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-xs"
                onClick={() => {
                  setInputValue("Kan ik een demo krijgen?")
                  setTimeout(handleSendMessage, 100)
                }}
              >
                🎯 Demo
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-xs"
                onClick={() => {
                  setInputValue("Hoe snel kunnen jullie starten?")
                  setTimeout(handleSendMessage, 100)
                }}
              >
                ⚡ Timeline
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
