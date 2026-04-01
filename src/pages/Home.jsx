import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import Metrics from '../components/sections/Metrics'
import Testimonials from '../components/sections/Testimonials'
import Process from '../components/sections/Process'
import Portfolio from '../components/sections/Portfolio'
import Pricing from '../components/sections/Pricing'
import ContactCTA from '../components/sections/ContactCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Metrics />
      <Testimonials />
      <Process />
      <Portfolio />
      <Pricing />
      <ContactCTA />
    </>
  )
}
