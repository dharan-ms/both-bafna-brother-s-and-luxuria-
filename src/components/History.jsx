import { X } from 'lucide-react'
import { historySections } from '../data/history'
import { useModalLock } from '../hooks/useModalLock'
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

function SectionCard({ section }) {
  if (section.kind === 'heritage') {
    return (
      <article className="hcard hcard--heritage">
        <header className="hcard__heritage-head">
          <span className="hcard__years">{section.years}</span>
          <h3>
            {section.titleLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h3>
        </header>
        <p className="hcard__text">{section.text}</p>
        <div className="hcard__points">
          {section.points.map((point) => {
            const Icon = ICONS[point.icon]
            return (
              <div key={point.title} className="hcard__point">
                <div className="hcard__icon"><Icon /></div>
                <div>
                  <h4>{point.title}</h4>
                  <p>{point.text}</p>
                </div>
              </div>
            )
          })}
        </div>
        <img className="hcard__image" src={section.image} alt={section.imageAlt} />
      </article>
    )
  }

  if (section.kind === 'benefits') {
    return (
      <article className="hcard hcard--benefits">
        <p className="hcard__lead">{section.lead}</p>
        <h3 className="hcard__eyebrow">{section.eyebrow}</h3>
        <ul className="hcard__bullets">
          {section.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {section.details.map((detail) => (
          <p key={detail.title} className="hcard__detail">
            <strong>{detail.title}</strong> {detail.text}
          </p>
        ))}
        <img className="hcard__image" src={section.image} alt={section.imageAlt} />
      </article>
    )
  }

  if (section.kind === 'gold-silver') {
    return (
      <article className="hcard">
        <h3 className="hcard__eyebrow">{section.eyebrow}</h3>
        <p className="hcard__lead hcard__lead--center">{section.lead}</p>
        <p className="hcard__script">{section.accent}</p>
        <p className="hcard__text">{section.text}</p>
        <img className="hcard__image" src={section.image} alt={section.imageAlt} />
      </article>
    )
  }

  if (section.kind === 'product') {
    return (
      <article className="hcard">
        <h3 className="hcard__eyebrow">{section.eyebrow}</h3>
        <p className="hcard__text hcard__text--center">{section.text}</p>
        <img className="hcard__image" src={section.image} alt={section.imageAlt} />
      </article>
    )
  }

  return (
    <article className="hcard">
      <h3 className="hcard__eyebrow">{section.eyebrow}</h3>
      <h4 className="hcard__title">{section.title}</h4>
      <p className="hcard__text">{section.text}</p>
      {section.accent ? <p className="hcard__script">{section.accent}</p> : null}
      <img className="hcard__image" src={section.image} alt={section.imageAlt} />
    </article>
  )
}

export default function History({ open, onClose }) {
  useModalLock(open, onClose)

  if (!open) return null

  return (
    <div
      className="history-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="history-title"
    >
      <button
        type="button"
        className="history-modal__backdrop"
        aria-label="Close history"
        onClick={onClose}
      />

      <div className="history-modal__panel">
        <header className="history-modal__top">
          <div>
            <p className="history-modal__eyebrow">Bafna Brothers Kesarwala</p>
            <h2 id="history-title" className="history-modal__title">
              History
            </h2>
          </div>
          <button
            type="button"
            className="history-modal__close"
            aria-label="Close"
            onClick={onClose}
          >
            <X size={18} strokeWidth={1.8} />
          </button>
        </header>

        <div className="history-modal__scroll">
          {historySections.map((section) => (
            <SectionCard key={section.id} section={section} />
          ))}
        </div>
      </div>
    </div>
  )
}
