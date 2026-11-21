import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { videoStories } from '../data/videos'
import { useModalLock } from '../hooks/useModalLock'
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
      <button
        type="button"
        className="videos-modal__backdrop"
        aria-label="Close videos"
        onClick={onClose}
      />

      <div className="videos-modal__panel" ref={panelRef}>
        <header className="videos-modal__top">
          <div>
            <p className="videos-modal__eyebrow">Bafna Brothers Kesarwala</p>
            <h2 id="videos-title" className="videos-modal__title">
              Video
            </h2>
          </div>
          <button
            type="button"
            className="videos-modal__close"
            aria-label="Close"
            onClick={onClose}
          >
            <X size={18} strokeWidth={1.8} />
          </button>
        </header>

        <div className="videos-modal__scroll">
          {videoStories.map((story, index) => (
            <article
              key={story.id}
              className={`video-row${index % 2 === 1 ? ' video-row--reverse' : ''}`}
            >
              <div className="video-row__copy">
                <p className="video-row__eyebrow">{story.eyebrow}</p>
                <h3 className="video-row__title">{story.title}</h3>
                <p className="video-row__text">{story.text}</p>
              </div>

              <div className="video-row__media">
                <video
                  className="video-row__player"
                  src={story.src}
                  controls
                  playsInline
                  preload="metadata"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
