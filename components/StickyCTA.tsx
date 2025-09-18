'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, Zap, Clock, Phone } from "lucide-react"

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past hero section (800px)
      setIsVisible(window.scrollY > 800)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ${
      isMinimized ? 'transform translate-y-16' : ''
    }`}>
      {/* Main CTA Bar */}
      <div className="bg-gradient-to-r from-agent-navy to-agent-blue text-white shadow-2xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-agent-green" />
                <span className="font-semibold">Gratis AI Assessment</span>
              </div>
              <Badge variant="secondary" className="bg-red-500 text-white animate-pulse">
                <Clock className="w-3 h-3 mr-1" />
                Beperkte tijd
              </Badge>
            </div>

            <div className="flex items-center space-x-3">
              <div className="hidden sm:block text-sm text-blue-200">
                Ontdek jouw AI-potentieel in 15 minuten
              </div>
              
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-agent-green hover:bg-green-600 text-white font-semibold"
              >
                <Phone className="w-4 h-4 mr-2" />
                Start Gratis Assessment
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white hover:bg-white/20"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Minimized Tab */}
      {isMinimized && (
        <div 
          className="bg-agent-green text-white px-4 py-2 cursor-pointer hover:bg-green-600 transition-colors"
          onClick={() => setIsMinimized(false)}
        >
          <div className="flex items-center justify-center space-x-2">
            <Zap className="w-4 h-4" />
            <span className="font-medium">Gratis AI Assessment</span>
          </div>
        </div>
      )}
    </div>
  )
}
