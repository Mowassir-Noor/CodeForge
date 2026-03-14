import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Tracks from './components/Tracks'
import Schedule from './components/Schedule'
import Prizes from './components/Prizes'
import Judges from './components/Judges'
import Sponsors from './components/Sponsors'
import FAQ from './components/FAQ'
import Register from './components/Register'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-charcoal-900 flex justify-center w-full">
      <div className="w-full max-w-[1400px] mx-auto overflow-hidden">
        <Navbar />
        <Hero />
        <About />
        <Tracks />
        <Schedule />
        <Prizes />
        <Judges />
        <Sponsors />
        <FAQ />
        <Register />
        <Footer />
      </div>
    </div>
  )
}
