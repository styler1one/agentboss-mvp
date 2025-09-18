'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, Shield, FileText, Cookie, Eye } from "lucide-react"

interface LegalModalProps {
  isOpen: boolean
  onClose: () => void
  type: 'privacy' | 'terms' | 'gdpr' | 'cookies'
}

export default function LegalModal({ isOpen, onClose, type }: LegalModalProps) {
  if (!isOpen) return null

  const getContent = () => {
    switch (type) {
      case 'privacy':
        return {
          title: 'Privacy Policy',
          icon: Shield,
          content: `
            **Privacy Policy - AgentBoss B.V.**
            
            **Laatst bijgewerkt: December 2024**
            
            **1. Gegevensverzameling**
            Wij verzamelen alleen gegevens die noodzakelijk zijn voor onze dienstverlening:
            • Contactgegevens (naam, email, telefoon)
            • Bedrijfsinformatie voor ROI berekeningen
            • Technische gegevens voor agent implementatie
            
            **2. Gebruik van gegevens**
            • Dienstverlening en support
            • ROI rapportage en analytics
            • Communicatie over projecten
            
            **3. Gegevensbeveiliging**
            • ISO27001 gecertificeerde infrastructuur
            • End-to-end encryptie
            • Regelmatige security audits
            
            **4. Uw rechten**
            • Inzage in uw gegevens
            • Correctie van onjuiste gegevens
            • Verwijdering van gegevens
            • Dataportabiliteit
            
            **5. Contact**
            Voor vragen over privacy: privacy@agentboss.nl
          `
        }
      case 'terms':
        return {
          title: 'Terms of Service',
          icon: FileText,
          content: `
            **Algemene Voorwaarden - AgentBoss B.V.**
            
            **Laatst bijgewerkt: December 2024**
            
            **1. Dienstverlening**
            AgentBoss levert AI-agent ontwikkeling en implementatie diensten volgens onze Triple Guarantee:
            • 30 dagen delivery garantie
            • 90 dagen ROI garantie  
            • ISO27001 security garantie
            
            **2. Prijzen en betaling**
            • Prijzen zoals vermeld in offerte
            • 50% vooruitbetaling bij start
            • 50% bij oplevering
            • Maandelijkse management fees
            
            **3. Intellectueel eigendom**
            • Klant behoudt eigendom van eigen data
            • Custom agents worden eigendom van klant
            • AgentBoss behoudt eigendom van platform
            
            **4. Garanties**
            • 30 dagen delivery of geld terug
            • 90 dagen ROI garantie
            • 99.9% uptime garantie
            
            **5. Aansprakelijkheid**
            Beperkt tot gefactureerde bedrag per project.
            
            **6. Toepasselijk recht**
            Nederlands recht is van toepassing.
          `
        }
      case 'gdpr':
        return {
          title: 'GDPR Compliance',
          icon: Eye,
          content: `
            **GDPR Compliance - AgentBoss B.V.**
            
            **AVG/GDPR Naleving**
            
            **1. Rechtsgrondslag verwerking**
            • Uitvoering overeenkomst (Art. 6.1.b AVG)
            • Gerechtvaardigd belang (Art. 6.1.f AVG)
            • Toestemming waar vereist (Art. 6.1.a AVG)
            
            **2. Uw rechten onder AVG**
            • Recht op inzage (Art. 15)
            • Recht op rectificatie (Art. 16)
            • Recht op verwijdering (Art. 17)
            • Recht op beperking (Art. 18)
            • Recht op dataportabiliteit (Art. 20)
            • Recht van bezwaar (Art. 21)
            
            **3. Gegevensbescherming**
            • Privacy by Design implementatie
            • Data Protection Impact Assessments
            • Regelmatige compliance audits
            • Functionaris Gegevensbescherming aangesteld
            
            **4. Internationale overdrachten**
            • Alleen naar landen met adequaat beschermingsniveau
            • Standard Contractual Clauses waar nodig
            
            **5. Datalek procedures**
            • 72-uur melding aan AP
            • Direct contact met betrokkenen bij hoog risico
            
            **6. Contact DPO**
            dpo@agentboss.nl
          `
        }
      case 'cookies':
        return {
          title: 'Cookie Policy',
          icon: Cookie,
          content: `
            **Cookie Policy - AgentBoss B.V.**
            
            **Laatst bijgewerkt: December 2024**
            
            **1. Wat zijn cookies**
            Cookies zijn kleine tekstbestanden die op uw apparaat worden opgeslagen.
            
            **2. Welke cookies gebruiken wij**
            
            **Noodzakelijke cookies:**
            • Sessie cookies voor website functionaliteit
            • Security cookies voor beveiliging
            
            **Analytische cookies:**
            • Google Analytics (geanonimiseerd)
            • Heatmap tracking voor UX verbetering
            
            **Marketing cookies:**
            • LinkedIn Insight Tag
            • Google Ads conversie tracking
            
            **3. Cookie beheer**
            U kunt cookies beheren via uw browser instellingen:
            • Chrome: Settings > Privacy > Cookies
            • Firefox: Options > Privacy > Cookies  
            • Safari: Preferences > Privacy > Cookies
            
            **4. Opt-out opties**
            • Google Analytics: tools.google.com/dlpage/gaoptout
            • LinkedIn: linkedin.com/psettings/guest-controls
            
            **5. Cookie overzicht**
            Bekijk alle cookies: agentboss.nl/cookies-overzicht
            
            **6. Contact**
            Voor vragen over cookies: cookies@agentboss.nl
          `
        }
      default:
        return { title: 'Legal Document', icon: FileText, content: 'Document not found.' }
    }
  }

  const { title, icon: IconComponent, content } = getContent()

  return (
    <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
      <Card className="max-w-4xl w-full max-h-[90vh] shadow-2xl animate-in zoom-in-95 duration-300">
        <CardHeader className="relative bg-gradient-to-r from-agent-navy to-agent-blue text-white">
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
              <IconComponent className="w-6 h-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">{title}</CardTitle>
              <p className="text-blue-100">AgentBoss B.V. - Officieel document</p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          <div className="max-h-[60vh] overflow-y-auto p-8">
            <div className="prose prose-sm max-w-none">
              {content.split('\n').map((line, index) => {
                if (line.trim() === '') return <br key={index} />
                if (line.startsWith('**') && line.endsWith('**')) {
                  return <h3 key={index} className="font-bold text-agent-navy mt-6 mb-3">{line.slice(2, -2)}</h3>
                }
                if (line.startsWith('• ')) {
                  return <li key={index} className="ml-4 mb-1">{line.slice(2)}</li>
                }
                return <p key={index} className="mb-3 text-gray-700">{line}</p>
              })}
            </div>
          </div>
          
          <div className="border-t p-6 bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                <strong>AgentBoss B.V.</strong> • KvK: 12345678 • BTW: NL123456789B01
              </div>
              <div className="flex gap-3">
                <Button variant="outline" onClick={onClose}>
                  Sluiten
                </Button>
                <Button 
                  variant="agent"
                  onClick={() => {
                    // Simulate PDF download
                    const link = document.createElement('a')
                    link.href = '#'
                    link.download = `AgentBoss-${type}-policy.pdf`
                    link.click()
                  }}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
