import Header from '../components/Header'
import HeroSection from '../sections/HeroSection'
import ManifestoSection from '../sections/ManifestoSection'
import CoreOperationsSection from '../sections/CoreOperationsSection'
import InfrastructureSection from '../sections/InfrastructureSection'
import CTASection from '../sections/CTASection'
import Footer from '../sections/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ManifestoSection />
        <CoreOperationsSection />
        <InfrastructureSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
