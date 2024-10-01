import Download from './components/Download'
import FAQ from './components/FAQ'
import Features from './components/Features'
import Header from './components/Header'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

const App = () => {
  return (
    <main className='overflow-hidden'>
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <FAQ />
      <Testimonials />
      <Download />
      <Footer />
    </main>
  )
}

export default App