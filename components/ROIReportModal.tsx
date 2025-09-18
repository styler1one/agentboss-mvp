'use client'

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X, Download, FileText, CheckCircle, TrendingUp, BarChart3, Target } from "lucide-react"

interface ROIReportModalProps {
  isOpen: boolean
  onClose: () => void
  roiData: {
    roi: number
    paybackMonths: number
    annualSavings: number
    employees: number
    salary: number
    hours: number
  }
}

export default function ROIReportModal({ isOpen, onClose, roiData }: ROIReportModalProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: ''
  })

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 1) {
      setStep(2)
    } else {
      // Simulate download
      setStep(3)
      // In real app, trigger PDF download here
      setTimeout(() => {
        onClose()
        setStep(1)
      }, 3000)
    }
  }

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <FileText className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-agent-navy mb-2">
          Jouw Persoonlijke ROI Report
        </h3>
        <p className="text-gray-600">
          Ontvang een gedetailleerd 12-pagina rapport met jouw specifieke ROI berekening
        </p>
      </div>

      {/* Preview of ROI Data */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4">
        <h4 className="font-semibold mb-3">Preview van jouw rapport:</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-white rounded-lg">
            <div className="text-2xl font-bold text-agent-green">{Math.round(roiData.roi)}%</div>
            <div className="text-sm text-gray-600">Projected ROI</div>
          </div>
          <div className="text-center p-3 bg-white rounded-lg">
            <div className="text-2xl font-bold text-agent-blue">{roiData.paybackMonths}</div>
            <div className="text-sm text-gray-600">Maanden payback</div>
          </div>
          <div className="text-center p-3 bg-white rounded-lg">
            <div className="text-2xl font-bold text-purple-600">€{Math.round(roiData.annualSavings).toLocaleString()}</div>
            <div className="text-sm text-gray-600">Jaarlijkse besparing</div>
          </div>
          <div className="text-center p-3 bg-white rounded-lg">
            <div className="text-2xl font-bold text-orange-600">{roiData.employees}</div>
            <div className="text-sm text-gray-600">FTE's geanalyseerd</div>
          </div>
        </div>
      </div>

      {/* What's Included */}
      <div className="space-y-3">
        <h4 className="font-semibold">Wat zit er in jouw rapport:</h4>
        <div className="space-y-2">
          <div className="flex items-center">
            <TrendingUp className="w-4 h-4 text-green-500 mr-3" />
            <span className="text-sm">Gedetailleerde ROI analyse gebaseerd op jouw input</span>
          </div>
          <div className="flex items-center">
            <BarChart3 className="w-4 h-4 text-green-500 mr-3" />
            <span className="text-sm">Industry benchmarks en vergelijkingen</span>
          </div>
          <div className="flex items-center">
            <Target className="w-4 h-4 text-green-500 mr-3" />
            <span className="text-sm">Implementatie roadmap voor jouw bedrijf</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
            <span className="text-sm">Risk assessment en mitigation strategies</span>
          </div>
          <div className="flex items-center">
            <FileText className="w-4 h-4 text-green-500 mr-3" />
            <span className="text-sm">Business case template voor management</span>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">Volledige naam *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="Jan van der Berg"
              required
            />
          </div>
          <div>
            <Label htmlFor="email">Email adres *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="jan@bedrijf.nl"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="company">Bedrijfsnaam *</Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
              placeholder="Jouw Bedrijf B.V."
              required
            />
          </div>
          <div>
            <Label htmlFor="role">Functie</Label>
            <Input
              id="role"
              value={formData.role}
              onChange={(e) => setFormData({...formData, role: e.target.value})}
              placeholder="CEO, CTO, Operations Manager"
            />
          </div>
        </div>
      </div>

      <div className="text-xs text-gray-500 text-center">
        🔒 Jouw gegevens worden veilig behandeld conform GDPR. Geen spam, alleen waardevolle content.
      </div>
    </div>
  )

  const renderStep2 = () => (
    <div className="text-center space-y-6 py-8">
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto animate-pulse">
        <Download className="w-8 h-8 text-agent-blue" />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-agent-navy mb-2">Rapport wordt gegenereerd...</h3>
        <p className="text-gray-600">
          We maken jouw persoonlijke ROI rapport klaar. Dit duurt ongeveer 10 seconden.
        </p>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="space-y-2 text-sm text-left">
          <div className="flex items-center">
            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
            <span>ROI berekening voltooid</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
            <span>Industry benchmarks toegevoegd</span>
          </div>
          <div className="flex items-center animate-pulse">
            <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
            <span>Implementatie roadmap wordt gegenereerd...</span>
          </div>
        </div>
      </div>
    </div>
  )

  const renderStep3 = () => (
    <div className="text-center space-y-6 py-8">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
        <CheckCircle className="w-8 h-8 text-green-600" />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-agent-navy mb-2">Download gestart!</h3>
        <p className="text-gray-600">
          Jouw persoonlijke ROI rapport is klaar en wordt gedownload. 
          Check ook je email voor een kopie.
        </p>
      </div>
      
      <div className="bg-green-50 rounded-lg p-4">
        <h4 className="font-semibold text-green-800 mb-2">Volgende stappen:</h4>
        <div className="space-y-2 text-sm text-green-700">
          <div>📧 Bevestiging email verzonden naar {formData.email}</div>
          <div>📊 Rapport bevat jouw {Math.round(roiData.roi)}% ROI analyse</div>
          <div>🚀 Klaar om te implementeren? Book een gratis consultatie</div>
        </div>
      </div>

      <Button variant="agent" size="lg" onClick={onClose}>
        Sluiten
      </Button>
    </div>
  )

  return (
    <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full shadow-2xl animate-in zoom-in-95 duration-300">
        <CardHeader className="relative bg-gradient-to-r from-green-500 to-emerald-600 text-white">
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-2 right-2 text-white hover:bg-white/20"
            onClick={onClose}
          >
            <X className="w-4 h-4" />
          </Button>
          
          <div className="flex items-center space-x-4 pr-12">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">ROI Report Download</CardTitle>
              <CardDescription className="text-green-100">
                Gedetailleerde analyse van jouw AI potentieel
              </CardDescription>
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-4">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              €2,500 waarde - Nu gratis
            </Badge>
            <div className="text-sm text-green-200">
              2,847+ downloads deze maand
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6">
          {step === 1 && (
            <form onSubmit={handleSubmit} className="space-y-6">
              {renderStep1()}
              <Button 
                type="submit" 
                variant="agent" 
                size="lg"
                className="w-full"
                disabled={!formData.name || !formData.email || !formData.company}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Gratis ROI Report
              </Button>
            </form>
          )}
          
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}
        </CardContent>
      </Card>
    </div>
  )
}
