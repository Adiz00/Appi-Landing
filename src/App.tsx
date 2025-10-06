import Hero from './sections/Hero'
import Service from './sections/Service'
import PortfolioSection from './sections/PortfolioSection'
import WhyChooseUsSection from './sections/WhyChooseUsSection'
import TestimonialsSection from './sections/TestimonialsSection'
import IndustriesSection from './sections/IndustriesSection'
import TechnologiesSection from './sections/TechnologiesSection'
import ProductsSection from './sections/ProductsSection'
import ContactSection from './sections/ContactSection'
import FooterSection from './sections/FooterSection'
import AwardsSection from './sections/AwardSection'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <Service />
        <PortfolioSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <IndustriesSection />
        {/* <TechnologiesSection /> */}
        <ProductsSection />
        <AwardsSection />
        <ContactSection />
        <FooterSection />
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default App
