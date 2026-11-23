import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { videoStories } from '../data/videos'
import { useModalLock } from '../hooks/useModalLock'
import VideoPlayer from './VideoPlayer'
import './Videos.css'

export default function Videos({ open, onClose }) {
  const panelRef = useRef(null)

  useModalLock(open, onClose)

  useEffect(() => {
    if (!open) return undefined

    const panel = panelRef.current

    return () => {
      panel?.querySelectorAll('video').forEach((video) => {
        video.pause()
      })
    }
  }, [open])

  if (!open) return null

  return (
    <div
      className="videos-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="videos-title"
    >
      <div className="videos-modal__panel" ref={panelRef}>
        <header className="videos-modal__top">
          <div className="videos-modal__brand">
            <p className="videos-modal__eyebrow">Bafna Brothers Kesarwala</p>
            <h2 id="videos-title" className="videos-modal__title">
              Our Stories in Motion
            </h2>
          </div>
          <button
            type="button"
            className="videos-modal__close"
            aria-label="Close"
            onClick={onClose}
          >
            <X size={18} strokeWidth={1.8} />
            <span>Close</span>
          </button>
        </header>

        <div className="videos-modal__scroll">
          <p className="videos-modal__intro">
            Watch how saffron, fragrance and craft come alive — scroll and play
            each film.
          </p>

          {videoStories.map((story, index) => (
            <article
              key={story.id}
              className={`video-row${index % 2 === 1 ? ' video-row--reverse' : ''}`}
            >
              <div className="video-row__media">
                <VideoPlayer
                  className="video-row__player"
                  src={story.src}
                  ariaLabel={story.title}
                />
              </div>

              <div className="video-row__copy">
                {story.eyebrow ? (
                  <p className="video-row__eyebrow">{story.eyebrow}</p>
                ) : null}
                <h3 className="video-row__title">{story.title}</h3>
                {story.text ? (
                  <p className="video-row__text">{story.text}</p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
