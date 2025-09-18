'use client'

import { useState, useEffect } from "react"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Circle } from "lucide-react"

const sections = [
  { id: "hero", name: "Start", description: "Welkom bij AgentBoss" },
  { id: "stats", name: "Cijfers", description: "Live platform statistieken" },
  { id: "solutions", name: "Oplossingen", description: "Onze 4 kernoplossingen" },
  { id: "roi-calculator", name: "ROI", description: "Bereken jouw besparing" },
  { id: "experts", name: "Experts", description: "Top 5% AI specialisten" },
  { id: "marketplace", name: "Marketplace", description: "Kant-en-klare agents" },
  { id: "faq", name: "FAQ", description: "Veelgestelde vragen" }
]

export default function ProgressIndicator() {
  const [currentSection, setCurrentSection] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero
      setIsVisible(window.scrollY > 400)

      // Determine current section
      const sectionElements = sections.map(section => 
        document.getElementById(section.id)
      ).filter(Boolean)

      let current = 0
      sectionElements.forEach((element, index) => {
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= window.innerHeight / 2) {
            current = index
          }
        }
      })
      
      setCurrentSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  const progress = ((currentSection + 1) / sections.length) * 100

  return (
    <div className="fixed top-20 right-4 z-40 hidden lg:block">
      <div className="bg-white rounded-lg shadow-lg border p-4 w-64">
        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-agent-navy">
              Voortgang
            </span>
            <Badge variant="outline" className="text-xs">
              {currentSection + 1}/{sections.length}
            </Badge>
          </div>
          <Progress value={progress} className="h-2" />
          <div className="text-xs text-gray-500 mt-1">
            {Math.round(progress)}% voltooid
          </div>
        </div>

        {/* Section List */}
        <div className="space-y-2">
          {sections.map((section, index) => (
            <div 
              key={section.id}
              className={`flex items-center space-x-3 p-2 rounded cursor-pointer transition-colors ${
                index === currentSection 
                  ? 'bg-agent-blue/10 border-l-2 border-agent-blue' 
                  : index < currentSection 
                    ? 'bg-green-50' 
                    : 'hover:bg-gray-50'
              }`}
              onClick={() => {
                const element = document.getElementById(section.id)
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {index < currentSection ? (
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
              ) : index === currentSection ? (
                <Circle className="w-4 h-4 text-agent-blue flex-shrink-0 fill-current" />
              ) : (
                <Circle className="w-4 h-4 text-gray-300 flex-shrink-0" />
              )}
              
              <div className="flex-1 min-w-0">
                <div className={`text-sm font-medium ${
                  index === currentSection 
                    ? 'text-agent-blue' 
                    : index < currentSection 
                      ? 'text-green-600' 
                      : 'text-gray-600'
                }`}>
                  {section.name}
                </div>
                <div className="text-xs text-gray-500 truncate">
                  {section.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        {currentSection >= sections.length - 2 && (
          <div className="mt-4 pt-4 border-t">
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-2">
                🎉 Bijna klaar!
              </div>
              <button className="w-full bg-agent-green text-white text-sm py-2 px-3 rounded hover:bg-green-600 transition-colors">
                Start je AI Journey
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
