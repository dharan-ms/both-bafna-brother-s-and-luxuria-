import { address, contacts } from '../data'
import BrandLogos from './BrandLogos'
import SocialLinks from './SocialLinks'
import './Footer.css'

export default function Footer({ onOpenHistory, onOpenVideos }) {
  return (
    <footer className="footer" id="contact">
      <div className="footer__inner container">
        <div className="footer__brand">
          <a href="#home" className="footer__logos" aria-label="Bafna Brothers home">
            <BrandLogos />
          </a>
          <p className="footer__tagline">
            A legacy of excellence since 1979 — finest Grade A saffron, edible
            gold &amp; vegetarian silver leaf.
          </p>
          <SocialLinks className="footer__social" />
        </div>

        <div className="footer__col">
          <h4>Products</h4>
          <ul>
            <li><a href="#shop">Bafna Saffron</a></li>
            <li><a href="#shop">Bespoke Perfumes, Attar &amp; Aroma Oils</a></li>
            <li><a href="#shop">Shahi Kesariya Syrup</a></li>
            <li><a href="#shop">Genuine Garden Premium</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li>
              <a
                href="#history"
                onClick={(e) => {
                  e.preventDefault()
                  onOpenHistory?.()
                  window.history.replaceState(null, '', '#history')
                }}
              >
                History
              </a>
            </li>
            <li>
              <a
                href="#video"
                onClick={(e) => {
                  e.preventDefault()
                  onOpenVideos?.()
                  window.history.replaceState(null, '', '#video')
                }}
              >
                Video
              </a>
            </li>
            <li><a href="#founder">Our Founder</a></li>
            <li><a href="#luxuria">Luxuria Signature</a></li>
            <li><a href="#brands">Trusted Brands</a></li>
          </ul>
        </div>

        <div className="footer__col footer__col--contact">
          <h4>Contact</h4>
          <ul className="footer__phones">
            {contacts.map((person) => (
              <li key={person.phone}>
                <span className="footer__person">{person.name}</span>
                <a href={`tel:+91${person.phone}`}>M : {person.phone}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__map">
          <h4>Visit Us</h4>
          <address className="footer__address">
            {address.lines.map((line) => (
              <span key={line}>{line}<br /></span>
            ))}
          </address>
          <p className="footer__tel">Tel : {address.tel}</p>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© 2026 Bafna Brothers Kesarwala. All rights reserved.</p>
          <p className="footer__since">Since 1979 · Mumbai</p>
        </div>
      </div>
    </footer>
  )
}
