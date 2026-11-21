import { useState } from 'react'
import './Newsletter.css'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setDone(true)
    setEmail('')
  }

  return (
    <section className="newsletter" id="newsletter">
      <div className="newsletter__inner container">
        <div className="newsletter__visual">
          <video
            className="newsletter__video"
            src="/newsletter.mp4"
            controls
            playsInline
            preload="metadata"
            aria-label="Bafna Brothers Kesarwala video"
          />
          <div className="newsletter__visual-fade" aria-hidden="true" />
        </div>

        <div className="newsletter__content">
          <p className="newsletter__eyebrow">Stay Connected</p>
          <h2 className="newsletter__title">Gift Like Never Before</h2>
          <p className="newsletter__desc">
            Get updates on Grade A saffron, edible gold &amp; silver leaf, and
            exclusive offers from Bafna Brothers Kesarwala.
          </p>

          {done ? (
            <p className="newsletter__success">
              Thank you — we look forward to sharing more with you.
            </p>
          ) : (
            <form className="newsletter__form" onSubmit={handleSubmit}>
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn--cream">
                Subscribe <span aria-hidden="true">→</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
