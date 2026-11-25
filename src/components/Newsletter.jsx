import { useState } from 'react'
import VideoPlayer from './VideoPlayer'
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
          <VideoPlayer
            className="newsletter__video"
            src="/videos/saffron.mp4"
            ariaLabel="Bafna Brothers Kesarwala video"
          />
          <div className="newsletter__visual-fade" aria-hidden="true" />
        </div>

        <div className="newsletter__content">
          <p className="newsletter__eyebrow">Premium Kesar powder</p>
          <h2 className="newsletter__title">High-Impact Morning Rituals</h2>
          <p className="newsletter__desc">
            From morning glass to festive table the way a pinch of kesar quietly
            runs through an Indian day.
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
