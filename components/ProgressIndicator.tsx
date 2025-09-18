'use client'

import { useState, useEffect } from "react"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Circle } from "lucide-react"

const sections = [
  { id: "hero", name: "Start", description: "Welkom bij AgentBoss" },
  { id: "assessment", name: "Assessment", description: "2-min AI assessment" },
  { id: "solutions", name: "Solutions", description: "Onze 4 kernoplossingen" },
  { id: "industry", name: "ROI", description: "Industry-specific ROI" },
  { id: "social", name: "Proof", description: "Success stories" },
  { id: "experts", name: "Products", description: "Experts & Agents" },
  { id: "comparison", name: "Compare", description: "Waarom AgentBoss" },
  { id: "faq", name: "FAQ", description: "Veelgestelde vragen" }
]

export default function ProgressIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [currentSection, setCurrentSection] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const totalHeight = document.documentElement.scrollHeight - windowHeight
      const progress = Math.min((scrollY / totalHeight) * 100, 100)
      
      setScrollProgress(progress)
      setIsVisible(scrollY > windowHeight * 0.3)

      // Determine current section
      let activeIndex = 0
      sections.forEach((section, index) => {
        const element = document.getElementById(section.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= windowHeight / 2) {
            activeIndex = index
          }
        }
      })
      setCurrentSection(activeIndex)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-3 border">
        {/* Progress Bar */}
        <div className="mb-3">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-agent-navy">
              Voortgang
            </span>
            <Badge variant="outline" className="text-xs">
              {currentSection + 1}/{sections.length}
            </Badge>
          </div>
          <Progress value={scrollProgress} className="h-2" />
          <div className="text-xs text-gray-500 mt-1">
            {Math.round(scrollProgress)}% voltooid
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
