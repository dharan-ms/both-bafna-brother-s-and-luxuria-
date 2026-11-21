import BrandLogos from './BrandLogos'
import SocialLinks from './SocialLinks'
import './Founder.css'

export default function Founder() {
  return (
    <section className="founder" id="founder">
      <div className="founder__inner container">
        <div className="founder__portrait">
          <div className="founder__frame">
            <img
              src="/founder.jpg"
              alt="Mr. Jawantraji Bafna, Founder of Bafna Brothers Kesarwala"
            />
          </div>
        </div>

        <div className="founder__content">
          <p className="founder__eyebrow">Our Legacy</p>
          <h2 className="founder__title">Mr. Jawantraji Bafna</h2>
          <p className="founder__role">Founder</p>
          <p className="founder__text">
            Founded by the visionary Mr Jawantraj Bafna &amp; family, Bafna Brothers
            Kesarwala has been synonymous with unparalleled quality and tradition
            since 1979. Integrity, dedication, and customer satisfaction guide
            every step of our operations.
          </p>

          <div className="founder__marks">
            <BrandLogos size="lg" />
            <p className="founder__gifts">Wedding, Festive &amp; Corporate Gifts</p>
          </div>

          <div className="founder__meta">
            <p className="founder__care">
              Customer Care No.{' '}
              <a href="tel:+9122405368">22405368</a>
              {' / '}
              <a href="tel:+9161837037">61837037</a>
            </p>
            <SocialLinks className="founder__social" />
            <a
              className="founder__web"
              href="https://www.bafnabrotherskesarwala.com"
              target="_blank"
              rel="noreferrer"
            >
              www.bafnabrotherskesarwala.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
