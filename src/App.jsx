import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Bestsellers from './components/Bestsellers'
import TrustedBrands from './components/TrustedBrands'
import Luxuria from './components/Luxuria'
import Founder from './components/Founder'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Bestsellers />
        <TrustedBrands />
        <Luxuria />
        <Founder />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
