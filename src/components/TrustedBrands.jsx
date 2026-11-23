import { trustedBrandsRowA, trustedBrandsRowB } from '../data/brands'
import './TrustedBrands.css'

function MarqueeRow({ brands, direction = 'left', duration = 48 }) {
  const loop = [...brands, ...brands]

  return (
    <div className="brands__track-wrap">
      <div
        className={`brands__track brands__track--${direction}`}
        style={{ '--marquee-duration': `${duration}s` }}
      >
        {loop.map((brand, index) => (
          <span
            key={`${brand.name}-${index}`}
            className="brands__chip"
            aria-hidden={index >= brands.length ? true : undefined}
          >
            <img
              src={brand.logo}
              alt={index >= brands.length ? '' : brand.name}
              className="brands__logo"
              loading="lazy"
              draggable="false"
            />
          </span>
        ))}
      </div>
    </div>
  )
}

export default function TrustedBrands() {
  return (
    <section className="brands" id="brands" aria-labelledby="brands-title">
      <div className="brands__header container">
        <p className="brands__eyebrow">Our Clients</p>
        <h2 id="brands-title" className="brands__title">
          Brands that have trusted us
        </h2>
        <p className="brands__subtitle">
          Houses of hospitality, wellness, confectionery and industry who choose
          Bafna Brothers Kesarwala.
        </p>
      </div>

      <div className="brands__marquee" role="presentation">
        <MarqueeRow brands={trustedBrandsRowA} direction="left" duration={55} />
        <MarqueeRow brands={trustedBrandsRowB} direction="right" duration={62} />
      </div>
    </section>
  )
}
