import { address, contacts, email, mapLink } from '../data'
import BrandLogos from './BrandLogos'
import SocialLinks from './SocialLinks'
import './Footer.css'

const PRODUCT_LINKS = [
  '100% Pure Handpicked Saffron',
  '100% vegetarian, edible Pure Gold & Silver Leaf Making Moments Grand',
  'Luxury Syrups',
  'Luxury Honey Collection',
  'Signature Kesari Gulkand',
  'Signature 24K Gold Shilajit',
  'Kesariya Jivan Chywanprash',
  'Chocolate Spread',
  '24K Gold Mix Nuts Dates',
  'Kashmiri Kahwa Tea - Instant Mix',
  'Luxury Handcrafted Tea',
  'Saffron Dry-fruit Milk Masala',
  'Premium Assorted DryFruits',
  '24K Gold Kesar Kaju Katli',
  '24K Gold Mountain Water',
  'Luxury Bathing Soaps',
  'Attar & Aroma Oils',
  'Bespoke Perfumes',
  'Everyday Wellness Collection',
  'Distilled Pure Rose Water',
  'Solid Pocket Scents',
  'Luxury Candle & Bakhoor',
  '100% Natural Handmade incense sticks',
]

export default function Footer({ onOpenHistory, onOpenVideos }) {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__brand">
          <a href="#home" className="footer__logos" aria-label="Bafna Brothers home">
            <BrandLogos />
          </a>
          <div className="footer__brand-copy">
            <p className="footer__tagline-title">India&apos;s Legacy Saffron House</p>
            <p className="footer__tagline-sub">
              Pure Saffron, Perfected over third generation.
            </p>
            <p className="footer__tagline-body">
              Pure kesar, graded and sealed by hand for food, wellness, rituals
              and gifting from a house India has trusted since 1979.
            </p>
          </div>
          <SocialLinks className="footer__social" />
        </div>

        <div className="footer__products">
          <h4>Products</h4>
          <ul>
            {PRODUCT_LINKS.map((label) => (
              <li key={label}>
                <a href="#shop">{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__meta">
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

          <div className="footer__col">
            <h4>Contact</h4>
            <ul className="footer__phones">
              {contacts.map((person) => (
                <li key={person.phone}>
                  <span className="footer__person">{person.name}</span>
                  <a href={`tel:+91${person.phone}`}>
                    M : {person.display || person.phone}
                  </a>
                </li>
              ))}
            </ul>
            <a className="footer__email" href={`mailto:${email}`}>
              {email}
            </a>
          </div>

          <div className="footer__col">
            <h4>Visit Us</h4>
            <address className="footer__address">
              {address.lines.map((line) => (
                <span key={line}>{line}<br /></span>
              ))}
            </address>
            <p className="footer__tel">Tel : {address.tel}</p>
            <a
              className="footer__map"
              href={mapLink}
              target="_blank"
              rel="noreferrer"
            >
              View on Google Maps
            </a>
          </div>
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
