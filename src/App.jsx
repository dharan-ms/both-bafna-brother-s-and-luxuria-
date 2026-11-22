import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import History from './components/History'
import Videos from './components/Videos'
import Bestsellers from './components/Bestsellers'
import Luxuria from './components/Luxuria'
import Ritual from './components/Ritual'
import Founder from './components/Founder'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function initialHash(hash) {
  return typeof window !== 'undefined' && window.location.hash === hash
}

export default function App() {
  const [historyOpen, setHistoryOpen] = useState(() => initialHash('#history'))
  const [videosOpen, setVideosOpen] = useState(() => initialHash('#video'))

  const closeHistory = () => {
    setHistoryOpen(false)
    if (window.location.hash === '#history') {
      window.history.replaceState(null, '', window.location.pathname)
    }
  }

  const closeVideos = () => {
    setVideosOpen(false)
    if (window.location.hash === '#video') {
      window.history.replaceState(null, '', window.location.pathname)
    }
  }

  return (
    <div className="app">
      <Navbar
        onOpenHistory={() => setHistoryOpen(true)}
        onOpenVideos={() => setVideosOpen(true)}
      />
      <main>
        <Hero />
        <About />
        <Bestsellers />
        <Luxuria />
        <Ritual />
        <Founder />
        <Newsletter />
      </main>
      <Footer
        onOpenHistory={() => setHistoryOpen(true)}
        onOpenVideos={() => setVideosOpen(true)}
      />
      <History open={historyOpen} onClose={closeHistory} />
      <Videos open={videosOpen} onClose={closeVideos} />
    </div>
  )
}
