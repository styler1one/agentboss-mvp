import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield, Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-agent-navy text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-agent-blue to-agent-green rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AB</span>
              </div>
              <span className="font-bold text-xl">AgentBoss.nl</span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Europa's eerste gegarandeerde AI-agent delivery platform. 
              Van AI-chaos naar AI-succes in 30 dagen.
            </p>
            <div className="flex space-x-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Shield className="w-3 h-3 mr-1" />
                ISO27001
              </Badge>
              <Badge variant="success">
                95% Succes
              </Badge>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Solutions</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><Link href="#" className="hover:text-white transition-colors">Agent Factory</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Expert Network</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Agent Marketplace</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Custom Development</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Compliance Center</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Industries</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><Link href="#" className="hover:text-white transition-colors">Finance & Banking</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Healthcare</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Manufacturing</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Technology & SaaS</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">E-commerce</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <div className="space-y-3 text-sm text-blue-200">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@agentboss.nl</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+31 20 123 4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Amsterdam, Nederland</span>
              </div>
            </div>
            
            <div className="flex space-x-3 pt-2">
              <Button variant="ghost" size="sm" className="text-blue-200 hover:text-white hover:bg-white/10">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-blue-200 hover:text-white hover:bg-white/10">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-blue-200 hover:text-white hover:bg-white/10">
                <Github className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-blue-200">
              © 2024 AgentBoss.nl. Alle rechten voorbehouden.
            </div>
            
            <div className="flex space-x-6 text-sm text-blue-200">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-white transition-colors">GDPR</Link>
              <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
