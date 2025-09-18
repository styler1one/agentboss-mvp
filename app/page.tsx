import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import StatsSection from '@/components/StatsSection'
import SolutionsSection from '@/components/SolutionsSection'
import ROICalculator from '@/components/ROICalculator'
import TestimonialsSection from '@/components/TestimonialsSection'
import ExpertNetwork from '@/components/ExpertNetwork'
import AgentMarketplace from '@/components/AgentMarketplace'
import CaseStudiesSection from '@/components/CaseStudiesSection'
import ComparisonTool from '@/components/ComparisonTool'
import FAQSection from '@/components/FAQSection'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'
import ExitIntentPopup from '@/components/ExitIntentPopup'
import ProgressIndicator from '@/components/ProgressIndicator'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <SolutionsSection />
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
      <ProgressIndicator />
    </main>
  )
}
