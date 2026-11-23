import { Star } from 'lucide-react'
import { feedbackItems } from '../data/feedback'
import './Feedback.css'

function Stars({ className }) {
  return (
    <div className={className} aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, index) => (
        <Star key={index} size={14} strokeWidth={0} fill="currentColor" />
      ))}
    </div>
  )
}

export default function Feedback() {
  return (
    <section className="feedback" id="feedback" aria-labelledby="feedback-title">
      <div className="feedback__inner container">
        <header className="feedback__header">
          <p className="feedback__eyebrow">Loved across India</p>
          <Stars className="feedback__header-stars" />
          <h2 id="feedback-title" className="feedback__title">
            Trusted by generations of families
          </h2>
        </header>

        <div className="feedback__grid">
          {feedbackItems.map((item) => (
            <article key={item.id} className="feedback__card">
              <Stars className="feedback__card-stars" />
              <p className="feedback__quote">“{item.quote}”</p>
              <p className="feedback__author">— {item.author}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
