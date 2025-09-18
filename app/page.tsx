'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import StatsSection from '@/components/StatsSection'
import InteractiveAssessment from '@/components/InteractiveAssessment'
import SolutionsSection from '@/components/SolutionsSection'
import IndustryROIShowcase from '@/components/IndustryROIShowcase'
import SocialProofSection from '@/components/SocialProofSection'
import ProductDeepDive from '@/components/ProductDeepDive'
import ComparisonTool from '@/components/ComparisonTool'
import FAQSection from '@/components/FAQSection'
import Footer from '@/components/Footer'
import SmartStickyCTA from '@/components/SmartStickyCTA'
import ExitIntentPopup from '@/components/ExitIntentPopup'
import LiveChatWidget from '@/components/LiveChatWidget'
// import ProgressIndicator from '@/components/ProgressIndicator'

export default function Home() {
  // Handle hash navigation from other pages
  useEffect(() => {
    const hash = window.location.hash.substring(1)
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [])
  return (
    <main className="min-h-screen">
      <Header />
      <div id="hero"><HeroSection /></div>
      <StatsSection />
      <div id="assessment"><InteractiveAssessment /></div>
      <div id="solutions"><SolutionsSection /></div>
      <div id="industry"><IndustryROIShowcase /></div>
      <div id="social"><SocialProofSection /></div>
      <div id="experts"><ProductDeepDive /></div>
      <div id="comparison"><ComparisonTool /></div>
      <div id="faq"><FAQSection /></div>
      <Footer />
      
      {/* UX Enhancement Components */}
      <SmartStickyCTA />
      <ExitIntentPopup />
      <LiveChatWidget />
      {/* <ProgressIndicator /> */}
    </main>
  )
}
