import VideoPlayer from './VideoPlayer'
import { InstagramIcon } from './icons'
import './About.css'

const INSTAGRAM_HREF =
  'https://www.instagram.com/bafnabrotherskesarwala?utm_source=qr'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__inner container">
        <div className="about__copy">
          <p className="section-eyebrow">About Us</p>
          <h2 className="section-title about__title">
            <span className="about__title-line">Bafna Brothers Kesarwala:</span>
            <span className="about__title-line">
              A Legacy of Excellence Since 1979
            </span>
          </h2>
          <p className="about__text">
            For over four decades, Bafna Brothers Kesarwala has been synonymous
            with unparalleled quality and tradition. Established in 1979, we have
            dedicated ourselves to delivering the finest saffron to our discerning
            customers. Our journey began with a passion for purity and a
            commitment to excellence, which continues to be the cornerstone of
            our business.
          </p>
          <div className="about__actions">
            <a href="#luxuria" className="btn btn--burgundy">
              Explore Luxuria <span aria-hidden="true">→</span>
            </a>
            <a
              className="about__instagram"
              href={INSTAGRAM_HREF}
              target="_blank"
              rel="noreferrer"
              aria-label="Bafna Brothers Kesarwala on Instagram"
            >
              <InstagramIcon size={22} />
            </a>
          </div>
        </div>

        <div className="about__media">
          <div className="about__video-frame">
            <VideoPlayer
              className="about__video"
              src="/about.mp4"
              ariaLabel="About Bafna Brothers Kesarwala"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
