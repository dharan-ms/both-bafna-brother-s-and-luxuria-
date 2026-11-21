import { useId } from 'react'
import { luxuriaCollections, luxuriaHighlights } from '../data/luxuria'
import './Luxuria.css'

function CrownIcon() {
  const gradientId = useId().replace(/:/g, '')

  return (
    <svg className="luxuria__crown" viewBox="0 0 120 72" aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f0d78c" />
          <stop offset="45%" stopColor="#c29b40" />
          <stop offset="100%" stopColor="#8a6a1f" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${gradientId})`}
        d="M10 52 L22 18 L40 42 L60 8 L80 42 L98 18 L110 52 Z"
      />
      <rect x="12" y="52" width="96" height="10" rx="2" fill={`url(#${gradientId})`} />
      <circle cx="22" cy="18" r="4" fill={`url(#${gradientId})`} />
      <circle cx="60" cy="8" r="5" fill={`url(#${gradientId})`} />
      <circle cx="98" cy="18" r="4" fill={`url(#${gradientId})`} />
      <path
        fill="none"
        stroke="#8a6a1f"
        strokeWidth="1.2"
        d="M20 56 Q60 66 100 56"
        opacity="0.55"
      />
    </svg>
  )
}

export default function Luxuria() {
  return (
    <section className="luxuria" id="luxuria">
      <div className="luxuria__hero">
        <div className="luxuria__pattern" aria-hidden="true" />
        <div className="luxuria__brand">
          <CrownIcon />
          <p className="luxuria__bafnas">
            <span className="luxuria__arrow" aria-hidden="true">‹</span>
            BAFNA&apos;S
            <span className="luxuria__arrow" aria-hidden="true">›</span>
          </p>
          <h2 className="luxuria__name">
            LUXURIA<sup>TM</sup>
          </h2>
          <div className="luxuria__divider" aria-hidden="true">
            <span />
            <i />
            <span />
          </div>
          <p className="luxuria__signature">Signature</p>
        </div>

        <div className="luxuria__info">
          <div className="luxuria__locations">
            <span className="luxuria__rule" />
            <strong>INDIA &amp; DUBAI</strong>
            <span className="luxuria__rule" />
          </div>
          <p className="luxuria__gifts">
            Festive Gifts | Wedding Gifts | Corporate Gifts
          </p>
          <p className="luxuria__division">A luxury division by BBK</p>
        </div>
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
              <img src={collection.image} alt={collection.title} loading="lazy" />
            </div>
            <div className="luxuria__collection-copy">
              <p className="luxuria__eyebrow">Luxuria Signature</p>
              <h3>{collection.title}</h3>
              <p className="luxuria__collection-lead">{collection.lead}</p>
              <ul>
                {collection.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {collection.note ? (
                <p className="luxuria__note">{collection.note}</p>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
