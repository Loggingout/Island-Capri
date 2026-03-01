import Navbar from '../components/heading/navbar'
import Hero from '../components/landingPageComponents/hero'
import AboutUs from '../components/landingPageComponents/aboutUs'
import Footer from '../footer/footer'

export default function LandingPage() {
  return(
    <div className="w-full overflow-x-hidden px-4 sm:px-6 md:px-12 lg:px-26 xl:px-24">
      <Navbar />
      <Hero />
      <AboutUs />
      <Footer />
    </div>
  )
}