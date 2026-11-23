import { ArrowLeft } from 'lucide-react'
import { historySections } from '../data/history'
import { useModalLock } from '../hooks/useModalLock'
import BrandLogos from './BrandLogos'
import './History.css'

function FlowerIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="5.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <path
        d="M32 8c5 10 5 18 0 28-5-10-5-18 0-28zm22 24c-10 5-18 5-28 0 10-5 18-5 28 0zM10 32c10 5 18 5 28 0-10-5-18-5-28 0zm22 22c5-10 5-18 0-28-5 10-5 18 0 28z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  )
}

function HandsIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path
        d="M20 34c0-6 4-10 8-10 2 0 3 1 4 2 1-1 2-2 4-2 4 0 8 4 8 10 0 8-8 14-12 18-4-4-12-10-12-18z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M16 30c-3 1-5 4-5 8 0 7 6 12 13 16M48 30c3 1 5 4 5 8 0 7-6 12-13 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path
        d="M32 8c-9 0-16 7-16 16 0 12 16 30 16 30s16-18 16-30c0-9-7-16-16-16z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="32" cy="24" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

const ICONS = {
  flower: FlowerIcon,
  hands: HandsIcon,
  pin: PinIcon,
}

function SectionBlock({ section }) {
  if (section.kind === 'heritage') {
    return (
      <section className="history-page__section history-page__section--heritage">
        <div className="history-page__years-row">
          <span className="history-page__years">{section.years}</span>
          <h2>
            {section.titleLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
        </div>
        <p>{section.text}</p>
        <div className="history-page__points">
          {section.points.map((point) => {
            const Icon = ICONS[point.icon]
            return (
              <div key={point.title} className="history-page__point-wrap">
                <article className="history-page__point">
                  <div className="history-page__icon"><Icon /></div>
                  <div>
                    <h3>{point.title}</h3>
                    <p>{point.text}</p>
                  </div>
                </article>
                {point.image ? (
                  <figure className="history-page__point-figure">
                    <img
                      src={point.image}
                      alt={point.imageAlt || ''}
                      loading="lazy"
                    />
                  </figure>
                ) : null}
              </div>
            )
          })}
        </div>
      </section>
    )
  }

  if (section.kind === 'benefits') {
    return (
      <section className="history-page__section">
        <p className="history-page__lead">{section.lead}</p>
        <p className="history-page__eyebrow">{section.eyebrow}</p>
        <ul className="history-page__bullets">
          {section.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="history-page__details">
          {section.details.map((detail) => (
            <article key={detail.title}>
              <h3>{detail.title}</h3>
              <p>{detail.text}</p>
            </article>
          ))}
        </div>
        {section.image ? (
          <figure className="history-page__figure history-page__figure--wide">
            <img
              src={section.image}
              alt={section.imageAlt || ''}
              loading="lazy"
            />
          </figure>
        ) : null}
      </section>
    )
  }

  if (section.kind === 'gold-silver') {
    return (
      <section className="history-page__section">
        <p className="history-page__eyebrow">{section.eyebrow}</p>
        <p className="history-page__lead">{section.lead}</p>
        {section.accent ? (
          <p className="history-page__accent">{section.accent}</p>
        ) : null}
        <p>{section.text}</p>
        {section.image ? (
          <figure className="history-page__figure history-page__figure--wide">
            <img
              src={section.image}
              alt={section.imageAlt || ''}
              loading="lazy"
            />
          </figure>
        ) : null}
      </section>
    )
  }

  if (section.kind === 'product') {
    return (
      <section className="history-page__section">
        <p className="history-page__eyebrow">{section.eyebrow}</p>
        <p>{section.text}</p>
      </section>
    )
  }

  return (
    <section className="history-page__section">
      <p className="history-page__eyebrow">{section.eyebrow}</p>
      <h2>{section.title}</h2>
      <p>{section.text}</p>
      {section.accent ? (
        <p className="history-page__accent">{section.accent}</p>
      ) : null}
      {section.images?.length ? (
        <div className="history-page__pair">
          {section.images.map((img) => (
            <figure key={img.src} className="history-page__pair-figure">
              <img src={img.src} alt={img.alt || ''} loading="lazy" />
            </figure>
          ))}
        </div>
      ) : section.image ? (
        <figure className="history-page__figure">
          <img
            src={section.image}
            alt={section.imageAlt || ''}
            loading="lazy"
          />
        </figure>
      ) : null}
    </section>
  )
}

export default function History({ open, onClose }) {
  useModalLock(open, onClose)

  if (!open) return null

  return (
    <div className="history-page" role="dialog" aria-modal="true" aria-labelledby="history-title">
      <header className="history-page__nav">
        <div className="history-page__nav-inner">
          <a href="#home" className="history-page__logo" onClick={onClose} aria-label="Bafna Brothers home">
            <BrandLogos />
          </a>
          <button type="button" className="history-page__back" onClick={onClose}>
            <ArrowLeft size={18} strokeWidth={1.8} />
            <span>Back</span>
          </button>
        </div>
      </header>

      <main className="history-page__main">
        <div className="history-page__hero">
          <p className="history-page__brand">Bafna Brothers Kesarwala</p>
          <h1 id="history-title">History</h1>
          <p className="history-page__intro">
            Our story since 1979 — purity, tradition, and a house India has trusted
            for generations.
          </p>
        </div>

        <div className="history-page__content">
          {historySections.map((section) => (
            <SectionBlock key={section.id} section={section} />
          ))}
        </div>
      </main>
    </div>
  )
}
