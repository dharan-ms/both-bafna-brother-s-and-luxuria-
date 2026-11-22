import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import BrandLogos from './BrandLogos'
import './Navbar.css'

const NAV_LINKS = [
  { href: '#home', label: 'Home', id: 'home' },
  { href: '#about', label: 'About', id: 'about' },
  { href: '#shop', label: 'Products', id: 'shop' },
  { href: '#luxuria', label: 'Luxuria', id: 'luxuria' },
  { href: '#history', label: 'History', id: 'history' },
  { href: '#video', label: 'Video', id: 'video' },
  { href: '#contact', label: 'Contact', id: 'contact' },
]

const SECTION_IDS = NAV_LINKS.filter(
  (link) => link.id !== 'history' && link.id !== 'video',
).map((link) => link.id)

export default function Navbar({ onOpenHistory, onOpenVideos }) {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(
    () => typeof window !== 'undefined' && window.scrollY > 40,
  )
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean,
    )
    if (!elements.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id)
        }
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const goTo = (event, id) => {
    event.preventDefault()

    if (id === 'history') {
      onOpenHistory?.()
      setActive('history')
      setOpen(false)
      window.history.replaceState(null, '', '#history')
      return
    }

    if (id === 'video') {
      onOpenVideos?.()
      setActive('video')
      setOpen(false)
      window.history.replaceState(null, '', '#video')
      return
    }

    const el = document.getElementById(id)
    if (!el) return

    const top = el.getBoundingClientRect().top + window.scrollY - 88
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
    setActive(id)
    setOpen(false)
    window.history.replaceState(null, '', `#${id}`)
  }

  return (
    <header className={`navbar${scrolled || open ? ' is-scrolled' : ''}`}>
      <div className="navbar__inner">
        <a
          href="#home"
          className="navbar__brand"
          onClick={(e) => goTo(e, 'home')}
          aria-label="Bafna Brothers home"
        >
          <BrandLogos />
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={active === link.id ? 'is-active' : undefined}
              onClick={(e) => goTo(e, link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <button
            type="button"
            className="navbar__toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} strokeWidth={1.6} /> : <Menu size={20} strokeWidth={1.6} />}
          </button>
        </div>
      </div>

      <div
        className={`navbar__drawer${open ? ' is-open' : ''}`}
        aria-hidden={!open}
      >
        <nav className="navbar__drawer-links" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={active === link.id ? 'is-active' : undefined}
              onClick={(e) => goTo(e, link.id)}
              tabIndex={open ? 0 : -1}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
