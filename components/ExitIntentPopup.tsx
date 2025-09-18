'use client'

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, Zap, Clock, Gift, TrendingUp } from "lucide-react"
import ContactModal from "@/components/ContactModal"

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)
  const [showAssessmentModal, setShowAssessmentModal] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true)
        setHasShown(true)
      }
    }

    // Show after 30 seconds if not shown yet
    const timer = setTimeout(() => {
      if (!hasShown) {
        setIsVisible(true)
        setHasShown(true)
      }
    }, 30000)

    document.addEventListener('mouseleave', handleMouseLeave)
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      clearTimeout(timer)
    }
  }, [hasShown])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
      <Card className="max-w-lg w-full shadow-2xl animate-in zoom-in-95 duration-300">
        <CardHeader className="relative bg-gradient-to-r from-red-500 to-orange-500 text-white">
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-2 right-2 text-white hover:bg-white/20"
            onClick={() => setIsVisible(false)}
          >
            <X className="w-4 h-4" />
          </Button>
          
          <div className="text-center">
            <div className="text-4xl mb-2">⏰</div>
            <CardTitle className="text-2xl">Wacht! Laatste kans...</CardTitle>
            <CardDescription className="text-orange-100">
              Voordat je weggaat, claim je gratis AI Assessment
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="p-8 space-y-6">
          {/* Urgency */}
          <div className="text-center">
            <Badge variant="destructive" className="animate-pulse mb-4">
              <Clock className="w-3 h-3 mr-1" />
              Beperkte tijd aanbieding
            </Badge>
            <h3 className="text-xl font-bold text-agent-navy mb-2">
              Gratis €2,500 AI Assessment
            </h3>
            <p className="text-gray-600">
              Ontdek precies hoeveel jouw bedrijf kan besparen met AI. 
              Normaal €2,500, nu <strong className="text-red-500">100% gratis</strong>.
            </p>
          </div>

          {/* What's Included */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold mb-3 flex items-center">
              <Gift className="w-4 h-4 mr-2 text-agent-green" />
              Wat je krijgt (t.w.v. €2,500):
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <TrendingUp className="w-4 h-4 text-green-500 mr-2" />
                <span>Persoonlijke ROI berekening</span>
              </div>
              <div className="flex items-center">
                <Zap className="w-4 h-4 text-green-500 mr-2" />
                <span>AI opportunity mapping</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-green-500 mr-2" />
                <span>30-min expert consultatie</span>
              </div>
              <div className="flex items-center">
                <Gift className="w-4 h-4 text-green-500 mr-2" />
                <span>Implementatie roadmap</span>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="text-center text-sm text-gray-500">
            <div className="flex justify-center items-center space-x-4 mb-2">
              <span>⭐⭐⭐⭐⭐ 4.9/5</span>
              <span>•</span>
              <span>156+ bedrijven</span>
              <span>•</span>
              <span>€12.5M+ ROI</span>
            </div>
            <p>"Beste investering die we ooit hebben gedaan" - Marcus, TechFlow B.V.</p>
          </div>

          {/* CTA */}
          <div className="space-y-3">
            <Button 
              size="lg" 
              className="w-full bg-gradient-to-r from-agent-green to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold"
              onClick={() => {
                setIsVisible(false)
                setShowAssessmentModal(true)
              }}
            >
              🎁 Claim Gratis Assessment (€2,500 waarde)
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="w-full text-gray-500"
              onClick={() => setIsVisible(false)}
            >
              Nee bedankt, ik sla €2,500 waarde over
            </Button>
          </div>

          {/* Trust */}
          <div className="text-center text-xs text-gray-400">
            🔒 Geen spam • Direct contact • 2 minuten setup
          </div>
        </CardContent>
      </Card>

      {/* Assessment Modal */}
      <ContactModal
        isOpen={showAssessmentModal}
        onClose={() => setShowAssessmentModal(false)}
        type="assessment"
        title="Gratis AI Assessment"
      />
    </div>
  )
}
