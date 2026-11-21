import { useEffect, useState } from 'react'
import { Search, Heart, User, ShoppingCart, Menu, X } from 'lucide-react'
import BrandLogos from './BrandLogos'
import './Navbar.css'

const NAV_LINKS = [
  { href: '#home', label: 'Home', id: 'home' },
  { href: '#shop', label: 'Products', id: 'shop' },
  { href: '#about', label: 'About', id: 'about' },
  { href: '#brands', label: 'Brands', id: 'brands' },
  { href: '#luxuria', label: 'Luxuria', id: 'luxuria' },
  { href: '#contact', label: 'Contact', id: 'contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.id)
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!elements.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
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
    const el = document.getElementById(id)
    if (!el) return

    const offset = 88
    const top = el.getBoundingClientRect().top + window.scrollY - offset
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
          <button type="button" aria-label="Search">
            <Search size={18} strokeWidth={1.6} />
          </button>
          <button type="button" aria-label="Favorites">
            <Heart size={18} strokeWidth={1.6} />
          </button>
          <button type="button" aria-label="Account">
            <User size={18} strokeWidth={1.6} />
          </button>
          <button type="button" className="navbar__cart" aria-label="Cart, 0 items">
            <ShoppingCart size={18} strokeWidth={1.6} />
            <span className="navbar__badge">0</span>
          </button>
          <button
            type="button"
            className="navbar__toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
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
