import { Suspense } from 'react'
import SEO from './components/SEO'
import Header from './components/Header'
import Hero from './components/Hero'
import MiniDescription from './components/MiniDescription'
import LoremSection from './components/LoremSection'
import Gallery from './components/Gallery'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import './App.css'

function App() {
  return (
    <div className="App">
      <SEO />
      
      <Header />
      
      <main id="main" role="main">
        <Hero />
        <MiniDescription />
        <LoremSection />
        <Suspense fallback={
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-safari-600"></div>
          </div>
        }>
          <Gallery />
        </Suspense>
        <AboutUs />
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App