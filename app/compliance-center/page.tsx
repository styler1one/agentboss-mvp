'use client'

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  ArrowLeft, CheckCircle, Clock, Star, 
  Shield, AlertTriangle, FileText, Search, 
  Eye, Scale, Globe, Zap
} from "lucide-react"
import ContactModal from "@/components/ContactModal"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const complianceFrameworks = [
  {
    id: 1,
    name: "EU AI Act",
    status: "Ready",
    coverage: 100,
    description: "Volledig compliant met de nieuwe EU AI Act wetgeving",
    requirements: [
      "Risk assessment automation",
      "Transparency obligations",
      "Human oversight protocols",
      "Data governance frameworks",
      "Conformity assessment procedures"
    ],
    industries: ["Alle EU sectoren"],
    deadline: "Augustus 2024",
    penalty: "Tot €35M of 7% omzet",
    color: "from-blue-500 to-blue-600",
    icon: "🇪🇺"
  },
  {
    id: 2,
    name: "GDPR",
    status: "Certified",
    coverage: 100,
    description: "GDPR-compliant data protection met Responsible AI principes",
    requirements: [
      "Data minimization principles",
      "Consent management systems",
      "Right to be forgotten automation",
      "Data breach notification protocols",
      "Privacy impact assessments"
    ],
    industries: ["Alle EU bedrijven"],
    deadline: "Al van kracht",
    penalty: "Tot €20M of 4% omzet",
    color: "from-green-500 to-green-600",
    icon: "🔒"
  },
  {
    id: 3,
    name: "Responsible AI",
    status: "Certified",
    coverage: 100,
    description: "Ethische AI ontwikkeling en transparante algoritmes",
    requirements: [
      "AI bias detection en mitigatie",
      "Transparante besluitvorming",
      "Menselijke controle en oversight",
      "Eerlijke en inclusieve AI",
      "Continue ethiek monitoring"
    ],
    industries: ["Alle AI-implementaties"],
    deadline: "Ongoing compliance",
    penalty: "Reputatie en vertrouwensrisico",
    color: "from-purple-500 to-purple-600",
    icon: "🤖"
  },
  {
    id: 4,
    name: "SOC2 Type II",
    status: "Certified",
    coverage: 95,
    description: "Service Organization Control voor cloud security",
    requirements: [
      "Security controls validation",
      "Availability monitoring",
      "Processing integrity checks",
      "Confidentiality protocols",
      "Privacy safeguards"
    ],
    industries: ["SaaS & Cloud providers"],
    deadline: "Annual renewal",
    penalty: "Customer trust & contracts",
    color: "from-orange-500 to-orange-600",
    icon: "☁️"
  },
  {
    id: 5,
    name: "HIPAA",
    status: "Ready",
    coverage: 90,
    description: "Healthcare Information Portability and Accountability Act",
    requirements: [
      "PHI protection protocols",
      "Access logging systems",
      "Encryption standards",
      "Business associate agreements",
      "Breach notification procedures"
    ],
    industries: ["Healthcare & Life Sciences"],
    deadline: "Immediate compliance",
    penalty: "Tot $1.5M per incident",
    color: "from-red-500 to-red-600",
    icon: "🏥"
  },
  {
    id: 6,
    name: "Financial Services",
    status: "Ready",
    coverage: 85,
    description: "Basel III, MiFID II, PCI-DSS compliance automation",
    requirements: [
      "Capital adequacy monitoring",
      "Market risk assessments",
      "Payment card data security",
      "Transaction reporting automation",
      "Regulatory change management"
    ],
    industries: ["Banking & Financial Services"],
    deadline: "Ongoing updates",
    penalty: "Regulatory sanctions",
    color: "from-yellow-500 to-yellow-600",
    icon: "🏦"
  }
]

const complianceServices = [
  {
    name: "Compliance Assessment",
    description: "Uitgebreide audit van je huidige compliance status",
    duration: "2-3 weken",
    price: "€15,000",
    features: [
      "Gap analysis tegen alle relevante frameworks",
      "Risk assessment en prioritering",
      "Compliance roadmap met timelines",
      "Regulatory change impact analysis",
      "Executive summary voor board"
    ]
  },
  {
    name: "Compliance Automation",
    description: "Geautomatiseerde compliance monitoring en reporting",
    duration: "4-6 weken",
    price: "€45,000",
    features: [
      "Real-time compliance monitoring",
      "Automated regulatory reporting",
      "Policy enforcement automation",
      "Incident response workflows",
      "Compliance dashboard & analytics"
    ]
  },
  {
    name: "Ongoing Compliance Management",
    description: "Continue compliance support en updates",
    duration: "Ongoing",
    price: "€5,000/maand",
    features: [
      "Regulatory change monitoring",
      "Monthly compliance reports",
      "Policy updates & training",
      "Audit support & preparation",
      "24/7 compliance helpdesk"
    ]
  }
]

const riskCategories = [
  {
    category: "High-Risk AI Systems",
    description: "AI systemen met hoog risico volgens EU AI Act",
    examples: [
      "Biometric identification",
      "Critical infrastructure",
      "Education & training",
      "Employment decisions",
      "Essential services access"
    ],
    requirements: [
      "Conformity assessment",
      "CE marking",
      "Human oversight",
      "Transparency obligations",
      "Accuracy requirements"
    ],
    penalty: "€15M of 3% omzet"
  },
  {
    category: "Limited-Risk AI",
    description: "AI systemen met beperkt risico",
    examples: [
      "Chatbots",
      "Emotion recognition",
      "Biometric categorization",
      "Deep fakes",
      "AI-generated content"
    ],
    requirements: [
      "Transparency obligations",
      "Clear user information",
      "Human-AI interaction clarity",
      "Content labeling",
      "User consent protocols"
    ],
    penalty: "€7.5M of 1.5% omzet"
  },
  {
    category: "Minimal-Risk AI",
    description: "AI systemen met minimaal risico",
    examples: [
      "Recommendation systems",
      "Spam filters",
      "Inventory management",
      "Basic automation",
      "Content moderation"
    ],
    requirements: [
      "Basic transparency",
      "User awareness",
      "Data quality standards",
      "Human oversight option",
      "Regular monitoring"
    ],
    penalty: "Proportionate measures"
  }
]

const complianceStats = [
  { metric: "Compliance Frameworks", value: "25+", description: "Supported regulations" },
  { metric: "Automation Rate", value: "95%", description: "Automated compliance tasks" },
  { metric: "Audit Success", value: "100%", description: "Successful compliance audits" },
  { metric: "Response Time", value: "24h", description: "Regulatory change updates" }
]

export default function ComplianceCenterPage() {
  const [showContactModal, setShowContactModal] = useState(false)
  const [selectedFramework, setSelectedFramework] = useState<typeof complianceFrameworks[0] | null>(null)
  const [showFrameworkModal, setShowFrameworkModal] = useState(false)
  const [selectedService, setSelectedService] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-agent-navy via-red-900 to-purple-900 text-white py-20">
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
              <Shield className="w-4 h-4 mr-2" />
              Compliance Center
            </Badge>
            
            <h1 className="text-5xl font-bold mb-6">
              EU AI Act Ready Compliance Automation
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Blijf <strong className="text-agent-green">100% compliant</strong> met alle relevante regelgeving. 
              Onze <strong className="text-agent-green">geautomatiseerde compliance platform</strong> 
              zorgt voor continue monitoring, rapportage en updates voor EU AI Act, GDPR, Responsible AI en meer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="xl" 
                variant="secondary" 
                className="text-lg"
                onClick={() => setShowContactModal(true)}
              >
                <Search className="w-5 h-5 mr-2" />
                Compliance Assessment
              </Button>
              <Button 
                size="xl" 
                variant="outline-white" 
                className="text-lg"
                onClick={() => {
                  document.getElementById('frameworks')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Bekijk Frameworks
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {complianceStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-agent-green">{stat.value}</div>
                  <div className="text-sm text-blue-200">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Alert Banner */}
        <div className="absolute bottom-0 left-0 right-0 bg-red-600/90 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-center text-center">
              <AlertTriangle className="w-5 h-5 mr-2 text-yellow-300" />
              <span className="text-sm font-medium">
                EU AI Act deadline: Augustus 2024 • Boetes tot €35M • 
                <strong className="ml-2">Start nu je compliance journey</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section id="frameworks" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Scale className="w-4 h-4 mr-2" />
              Compliance Frameworks
            </Badge>
            <h2 className="text-4xl font-bold text-agent-navy mb-4">
              25+ Ondersteunde Regelgevingen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Van EU AI Act tot GDPR, Responsible AI tot HIPAA - wij zorgen ervoor 
              dat je AI-systemen compliant blijven met alle relevante wetgeving.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceFrameworks.map((framework) => (
              <Card 
                key={framework.id} 
                className="hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => {
                  setSelectedFramework(framework)
                  setShowFrameworkModal(true)
                }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{framework.icon}</div>
                    <Badge 
                      variant={framework.status === "Ready" ? "success" : "secondary"}
                      className={framework.status === "Certified" ? "bg-green-100 text-green-800" : ""}
                    >
                      {framework.status}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl">{framework.name}</CardTitle>
                  <CardDescription>{framework.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Coverage Progress */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Coverage</span>
                      <span className="text-sm text-gray-600">{framework.coverage}%</span>
                    </div>
                    <Progress value={framework.coverage} className="h-2" />
                  </div>

                  {/* Key Info */}
                  <div className="grid grid-cols-1 gap-3 text-sm">
                    <div className="flex items-center">
                      <Globe className="w-4 h-4 text-gray-500 mr-2" />
                      <span>{framework.industries.join(", ")}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-gray-500 mr-2" />
                      <span>{framework.deadline}</span>
                    </div>
                    <div className="flex items-center">
                      <AlertTriangle className="w-4 h-4 text-red-500 mr-2" />
                      <span className="text-red-600 font-medium">{framework.penalty}</span>
                    </div>
                  </div>

                  {/* Requirements Preview */}
                  <div>
                    <h4 className="font-semibold mb-2">Key Requirements:</h4>
                    <ul className="space-y-1">
                      {framework.requirements.slice(0, 3).map((req, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">{req}</span>
                        </li>
                      ))}
                      {framework.requirements.length > 3 && (
                        <li className="text-sm text-agent-blue font-medium">
                          +{framework.requirements.length - 3} meer requirements
                        </li>
                      )}
                    </ul>
                  </div>

                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedFramework(framework)
                      setShowContactModal(true)
                    }}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Compliance Check
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* EU AI Act Risk Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <AlertTriangle className="w-4 h-4 mr-2" />
              EU AI Act Risk Assessment
            </Badge>
            <h2 className="text-4xl font-bold text-agent-navy mb-4">
              AI Risk Categorisatie & Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De EU AI Act categoriseert AI-systemen op basis van risico. 
              Wij helpen je bepalen in welke categorie jouw AI valt en wat de verplichtingen zijn.
            </p>
          </div>

          <div className="space-y-8">
            {riskCategories.map((category, index) => (
              <Card key={index} className="shadow-lg">
                <CardHeader className={`bg-gradient-to-r ${
                  index === 0 ? 'from-red-500 to-red-600' :
                  index === 1 ? 'from-yellow-500 to-yellow-600' :
                  'from-green-500 to-green-600'
                } text-white`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">{category.category}</CardTitle>
                      <CardDescription className="text-blue-100">
                        {category.description}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      {category.penalty}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <h4 className="font-semibold text-lg mb-4">Voorbeelden</h4>
                      <ul className="space-y-2">
                        {category.examples.map((example, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className={`w-2 h-2 rounded-full mt-2 mr-3 ${
                              index === 0 ? 'bg-red-500' :
                              index === 1 ? 'bg-yellow-500' :
                              'bg-green-500'
                            }`}></div>
                            <span className="text-gray-700">{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="md:col-span-2">
                      <h4 className="font-semibold text-lg mb-4">Compliance Vereisten</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {category.requirements.map((requirement, idx) => (
                          <div key={idx} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{requirement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Zap className="w-4 h-4 mr-2" />
              Compliance Services
            </Badge>
            <h2 className="text-4xl font-bold text-agent-navy mb-4">
              End-to-End Compliance Ondersteuning
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Van initiële assessment tot continue monitoring - 
              wij zorgen voor complete compliance automation en support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {complianceServices.map((service, index) => (
              <Card 
                key={index} 
                className={`hover:shadow-xl transition-all duration-300 ${
                  index === 1 ? 'ring-2 ring-agent-blue scale-105' : ''
                }`}
              >
                {index === 1 && (
                  <Badge 
                    variant="success" 
                    className="absolute -top-3 left-1/2 transform -translate-x-1/2"
                  >
                    <Star className="w-3 h-3 mr-1" />
                    Meest Populair
                  </Badge>
                )}

                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <CardDescription className="text-lg">{service.description}</CardDescription>
                  
                  <div className="my-6">
                    <div className="text-3xl font-bold text-agent-navy">{service.price}</div>
                    <div className="text-sm text-gray-500">{service.duration}</div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant={index === 1 ? "agent" : "outline"}
                    size="lg"
                    className="w-full"
                    onClick={() => {
                      setSelectedService(service.name)
                      setShowContactModal(true)
                    }}
                  >
                    Start {service.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-agent-navy to-red-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Klaar voor 100% Compliance?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start vandaag nog met een gratis compliance assessment. 
            Onze experts analyseren je huidige status en maken een roadmap naar volledige compliance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              variant="secondary" 
              size="xl"
              onClick={() => setShowContactModal(true)}
            >
              <Search className="w-5 h-5 mr-2" />
              Gratis Compliance Assessment
            </Button>
            <Button 
              variant="outline-white" 
              size="xl"
              onClick={() => {
                // Simulate compliance guide download
                const link = document.createElement('a')
                link.href = '#'
                link.download = 'AgentBoss-EU-AI-Act-Guide.pdf'
                link.click()
              }}
            >
              <FileText className="w-5 h-5 mr-2" />
              Download EU AI Act Guide
            </Button>
          </div>

          <div className="text-sm text-blue-200">
            🔒 Gratis assessment • Expert guidance • 24-uur response
          </div>
        </div>
      </section>

      <Footer />

      {/* Contact Modal */}
      <ContactModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
        type="consultation"
        title={selectedService ? `Start ${selectedService}` : selectedFramework ? `${selectedFramework.name} Compliance` : "Compliance Assessment"}
      />

      {/* Framework Detail Modal */}
      {selectedFramework && showFrameworkModal && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
          <Card className="max-w-4xl w-full max-h-[90vh] shadow-2xl animate-in zoom-in-95 duration-300">
            <CardHeader className={`relative bg-gradient-to-r ${selectedFramework.color} text-white`}>
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-2 right-2 text-white hover:bg-white/20"
                onClick={() => setShowFrameworkModal(false)}
              >
                ✕
              </Button>
              
              <div className="flex items-center space-x-4 pr-12">
                <div className="text-4xl">{selectedFramework.icon}</div>
                <div>
                  <CardTitle className="text-2xl">{selectedFramework.name}</CardTitle>
                  <CardDescription className="text-blue-100 text-lg">
                    {selectedFramework.description}
                  </CardDescription>
                  <Badge variant="secondary" className="mt-2 bg-white/20 text-white border-white/30">
                    {selectedFramework.status} • {selectedFramework.coverage}% Coverage
                  </Badge>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-8 max-h-[60vh] overflow-y-auto space-y-6">
              {/* Key Information */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Globe className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold">Industries</div>
                  <div className="text-sm text-gray-600">{selectedFramework.industries.join(", ")}</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <Clock className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                  <div className="font-semibold">Deadline</div>
                  <div className="text-sm text-gray-600">{selectedFramework.deadline}</div>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <AlertTriangle className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <div className="font-semibold">Max Penalty</div>
                  <div className="text-sm text-red-600 font-medium">{selectedFramework.penalty}</div>
                </div>
              </div>

              {/* Requirements */}
              <div>
                <h4 className="font-semibold text-lg mb-4">Compliance Requirements</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedFramework.requirements.map((requirement, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{requirement}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <Button 
                  variant="agent" 
                  size="lg" 
                  className="flex-1"
                  onClick={() => {
                    setShowFrameworkModal(false)
                    setShowContactModal(true)
                  }}
                >
                  <Search className="w-4 h-4 mr-2" />
                  Start Compliance Check
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => setShowFrameworkModal(false)}
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
