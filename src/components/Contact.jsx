import { address, contacts, email, mapLink, socialLinks } from '../data'
import {
  EmailIcon,
  InstagramIcon,
  MapPinIcon,
  PhoneIcon,
  YoutubeIcon,
} from './icons'
import './Contact.css'

const mapEmbedSrc =
  'https://maps.google.com/maps?q=18.951669,72.830607&z=15&hl=en&output=embed'

const instagram = socialLinks.find((link) => link.icon === 'instagram')
const youtube = socialLinks.find((link) => link.icon === 'youtube')

export default function Contact() {
  const primaryPhone = contacts[0]

  return (
    <section className="contact" id="contact">
      <div className="contact__inner container">
        <div className="contact__info">
          <p className="contact__eyebrow">Contact Us</p>
          <h2 className="contact__title">You tell us. We listen.</h2>
          <p className="contact__lead">
            Reach Bafna Brothers Kesarwala for saffron, Luxuria Signature, and
            gifting — we are here to help.
          </p>

          <ul className="contact__list">
            <li>
              <span className="contact__icon" aria-hidden="true">
                <PhoneIcon />
              </span>
              <div className="contact__phones">
                {contacts.map((person, index) => (
                  <span key={person.phone} className="contact__phone-item">
                    {index > 0 && (
                      <span className="contact__phone-sep" aria-hidden="true">
                        |
                      </span>
                    )}
                    <a href={`tel:+91${person.phone}`}>
                      {person.display || person.phone}
                    </a>
                  </span>
                ))}
              </div>
            </li>

            <li className="contact__channels-row">
              <div className="contact__channels">
                <a
                  className="contact__icon contact__icon--link"
                  href={`mailto:${email}`}
                  aria-label={`Email ${email}`}
                  title={email}
                >
                  <EmailIcon />
                </a>
                <span className="contact__phone-sep" aria-hidden="true">
                  |
                </span>
                {instagram && (
                  <a
                    className="contact__icon contact__icon--link"
                    href={instagram.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    title="Instagram"
                  >
                    <InstagramIcon />
                  </a>
                )}
                <span className="contact__phone-sep" aria-hidden="true">
                  |
                </span>
                {youtube && (
                  <a
                    className="contact__icon contact__icon--link"
                    href={youtube.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="YouTube"
                    title="YouTube"
                  >
                    <YoutubeIcon />
                  </a>
                )}
                <span className="contact__phone-sep" aria-hidden="true">
                  |
                </span>
                <a
                  className="contact__icon contact__icon--link"
                  href={mapLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open in Google Maps"
                  title="Google Maps"
                >
                  <MapPinIcon />
                </a>
              </div>
            </li>

            <li>
              <span className="contact__icon" aria-hidden="true">
                <MapPinIcon />
              </span>
              <a
                className="contact__address"
                href={mapLink}
                target="_blank"
                rel="noreferrer"
              >
                {address.lines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </a>
            </li>
          </ul>

          <div className="contact__help">
            <p>Need Help? Call Us.</p>
            <a href={`tel:+91${primaryPhone.phone}`}>
              {primaryPhone.display || primaryPhone.phone}
            </a>
          </div>
        </div>

        <div className="contact__map">
          <div className="contact__map-frame">
            <iframe
              title="Bafna Brothers Kesarwala location"
              src={mapEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <a
            className="contact__map-link"
            href={mapLink}
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  )
}
