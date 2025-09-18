import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import StatsSection from '@/components/StatsSection'
import ROICalculator from '@/components/ROICalculator'
import ExpertNetwork from '@/components/ExpertNetwork'
import AgentMarketplace from '@/components/AgentMarketplace'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <ROICalculator />
      <ExpertNetwork />
      <AgentMarketplace />
      <Footer />
    </main>
  )
}
