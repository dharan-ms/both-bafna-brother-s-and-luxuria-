import { luxuriaCollections, luxuriaHighlights } from '../data/luxuria'
import './Luxuria.css'

export default function Luxuria() {
  return (
    <section className="luxuria" id="luxuria">
      <div className="luxuria__hero">
        <img
          src="/luxuria/luxuria-hero.jpg?v=3"
          alt="Bafna's Luxuria Signature — India & Dubai · Festive, Wedding & Corporate Gifts · A luxury division by BBK"
          className="luxuria__hero-img"
          width={1013}
          height={678}
          decoding="async"
          fetchPriority="high"
        />
      </div>

      <div className="luxuria__intro container">
        <p className="luxuria__eyebrow">Gift like never before...</p>
        <h3 className="luxuria__intro-title">Welcome to Luxuria Signature</h3>
        <p className="luxuria__intro-text">
          Welcome to the luxurious world of Bafna Brothers Kesarwala. Here we
          present Luxuria Signature — 100% pure saffron, luxury syrups, honey
          collections, Ayurvedic wellness, and bespoke gifting crafted for India
          &amp; Dubai.
        </p>
        <div className="luxuria__highlights">
          {luxuriaHighlights.map((item) => (
            <article key={item.title} className="luxuria__highlight">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="luxuria__collections container">
        {luxuriaCollections.map((collection) => (
          <article key={collection.id} className="luxuria__collection">
            <div className="luxuria__collection-media">
              <img
                src={collection.image}
                alt={collection.imageAlt || collection.title || ''}
                loading="lazy"
              />
            </div>
            <div className="luxuria__collection-copy">
              {collection.eyebrow ? (
                <p className="luxuria__eyebrow">{collection.eyebrow}</p>
              ) : null}
              {collection.title ? (
                <h3
                  className={
                    collection.titleGold
                      ? 'luxuria__collection-title--gold'
                      : undefined
                  }
                >
                  {collection.title}
                </h3>
              ) : null}
              {collection.tagline ? (
                <p className="luxuria__collection-tagline">{collection.tagline}</p>
              ) : null}
              {collection.subtitle ? (
                <p className="luxuria__collection-subtitle">{collection.subtitle}</p>
              ) : null}
              {collection.lead ? (
                <p className="luxuria__collection-lead">{collection.lead}</p>
              ) : null}
              {collection.items?.length ? (
                <ul>
                  {collection.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              {collection.ingredients ? (
                <p className="luxuria__ingredients">{collection.ingredients}</p>
              ) : null}
              {collection.note ? (
                <p className="luxuria__note">{collection.note}</p>
              ) : null}
            </div>
          </article>
        ))}
      </div>

      <div className="luxuria__maharaja container">
        <figure className="luxuria__maharaja-media">
          <img
            src="/luxuria/royal-legacy.jpg?v=2"
            alt="Maharaja Collection — Luxuria Signature products"
            loading="lazy"
          />
        </figure>
        <div className="luxuria__maharaja-copy">
          <p className="luxuria__maharaja-eyebrow">Maharaja Collection</p>
          <h3 className="luxuria__maharaja-title">A Royal Legacy in Every Drop</h3>
          <p className="luxuria__maharaja-text">
            Crafted for those who appreciate tradition, sophistication, and
            timeless luxury.
          </p>
        </div>
      </div>
    </section>
  )
}
