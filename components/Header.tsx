'use client'

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Menu, X, Shield, Zap, TrendingUp } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const handleNavigation = (section: string) => {
    if (pathname === '/') {
      // On homepage, scroll to section
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      // On other pages, navigate to homepage with hash
      router.push(`/#${section}`)
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-agent-blue to-agent-green rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AB</span>
            </div>
            <span className="font-bold text-xl text-agent-navy">AgentBoss.nl</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              <Link
                href="/solutions"
                className="text-gray-600 hover:text-agent-navy transition-colors"
              >
                Solutions
              </Link>
              <Link
                href="/industries"
                className="text-gray-600 hover:text-agent-navy transition-colors"
              >
                Industries
              </Link>
              <button
                onClick={() => handleNavigation('experts')}
                className="text-gray-600 hover:text-agent-navy transition-colors"
              >
                Experts
              </button>
              <button 
                onClick={() => handleNavigation('marketplace')}
                className="text-gray-600 hover:text-agent-navy transition-colors"
              >
                Marketplace
              </button>
              <button 
                onClick={() => handleNavigation('cases')}
                className="text-gray-600 hover:text-agent-navy transition-colors"
              >
                Cases
              </button>
              <button 
                onClick={() => handleNavigation('faq')}
                className="text-gray-600 hover:text-agent-navy transition-colors"
              >
                FAQ
              </button>
            </div>
          </nav>

          {/* Trust Indicators */}
          <div className="hidden lg:flex items-center space-x-4">
            <Badge variant="outline" className="text-xs">
              <Shield className="w-3 h-3 mr-1" />
              Responsible AI
            </Badge>
            <Badge variant="outline" className="text-xs">
              <Zap className="w-3 h-3 mr-1" />
              30 dagen garantie
            </Badge>
            <Badge variant="success" className="text-xs">
              <TrendingUp className="w-3 h-3 mr-1" />
              95% succes
            </Badge>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" size="sm">
              Login
            </Button>
            <Button variant="agent" size="sm">
              Start je Agent
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => handleNavigation('solutions')}
                className="text-gray-600 hover:text-agent-navy text-left"
              >
                Solutions
              </button>
              <button 
                onClick={() => handleNavigation('experts')}
                className="text-gray-600 hover:text-agent-navy text-left"
              >
                Experts
              </button>
              <button 
                onClick={() => handleNavigation('marketplace')}
                className="text-gray-600 hover:text-agent-navy text-left"
              >
                Marketplace
              </button>
              <button 
                onClick={() => handleNavigation('cases')}
                className="text-gray-600 hover:text-agent-navy text-left"
              >
                Cases
              </button>
              <button 
                onClick={() => handleNavigation('faq')}
                className="text-gray-600 hover:text-agent-navy text-left"
              >
                FAQ
              </button>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" size="sm">
                  Login
                </Button>
                <Button variant="agent" size="sm">
                  Start je Agent
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
