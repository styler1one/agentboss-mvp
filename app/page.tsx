'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import StatsSection from '@/components/StatsSection'
import SolutionsSection from '@/components/SolutionsSection'
import InteractiveAssessment from '@/components/InteractiveAssessment'
import ROICalculator from '@/components/ROICalculator'
import IndustryShowcase from '@/components/IndustryShowcase'
import TestimonialsSection from '@/components/TestimonialsSection'
import ExpertNetwork from '@/components/ExpertNetwork'
import AgentMarketplace from '@/components/AgentMarketplace'
import CaseStudiesSection from '@/components/CaseStudiesSection'
import ComparisonTool from '@/components/ComparisonTool'
import FAQSection from '@/components/FAQSection'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'
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
      <HeroSection />
      <StatsSection />
      <InteractiveAssessment />
      <SolutionsSection />
      <IndustryShowcase />
      <ROICalculator />
      <TestimonialsSection />
      <ExpertNetwork />
      <AgentMarketplace />
      <CaseStudiesSection />
      <ComparisonTool />
      <FAQSection />
      <Footer />
      
      {/* UX Enhancement Components */}
      <StickyCTA />
      <ExitIntentPopup />
      <LiveChatWidget />
      {/* <ProgressIndicator /> */}
    </main>
  )
}
