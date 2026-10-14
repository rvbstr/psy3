import Header from './components/Header'
import Hero from './components/Hero'
import Problems from './components/Problems'
import Approach from './components/Approach'
import Process from './components/Process'
import About from './components/About'
import Format from './components/Format'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import MobileBookingBar from './components/MobileBookingBar'

export default function App() {
  return (
    <div className="bg-base min-h-screen">
      <Header />
      <main>
        <Hero />
        <Problems />
        <Approach />
        <Process />
        <About />
        <Format />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileBookingBar />
    </div>
  )
}
