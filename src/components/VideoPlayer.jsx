import { useEffect, useId, useMemo, useRef, useState } from 'react'
import './VideoPlayer.css'

const PLAY_EVENT = 'bbk:video-play'

/**
 * Mobile-first video: loads only when the user taps play.
 * Shows the starting frame as a poster so there is no black screen.
 */
export default function VideoPlayer({
  src,
  className = '',
  ariaLabel,
  controls = true,
  autoPlay = false,
  muted = false,
  loop = false,
  poster,
}) {
  const id = useId()
  const videoRef = useRef(null)
  const [armed, setArmed] = useState(Boolean(autoPlay))
  const [loading, setLoading] = useState(false)
  const [failed, setFailed] = useState(false)
  const [token, setToken] = useState(0)

  const posterSrc = useMemo(
    () => poster || posterFromSrc(src),
    [poster, src],
  )
  const activeSrc = armed ? withCacheBust(src, token) : ''

  useEffect(() => {
    const video = videoRef.current
    if (!video || !activeSrc) return undefined

    let cancelled = false
    setLoading(true)
    setFailed(false)

    const onPeerPlay = (event) => {
      if (event.detail?.id === id) return
      if (!video.paused) video.pause()
    }

    const onPlay = () => {
      window.dispatchEvent(new CustomEvent(PLAY_EVENT, { detail: { id } }))
    }

    const onReady = async () => {
      if (cancelled) return
      setLoading(false)
      try {
        await video.play()
      } catch {
        /* controls remain available */
      }
    }

    const onError = () => {
      if (cancelled) return
      setLoading(false)
      setFailed(true)
    }

    video.addEventListener('play', onPlay)
    video.addEventListener('loadeddata', onReady)
    video.addEventListener('error', onError)
    window.addEventListener(PLAY_EVENT, onPeerPlay)
    video.load()

    return () => {
      cancelled = true
      video.removeEventListener('play', onPlay)
      video.removeEventListener('loadeddata', onReady)
      video.removeEventListener('error', onError)
      window.removeEventListener(PLAY_EVENT, onPeerPlay)
    }
  }, [activeSrc, id])

  const start = () => {
    if (armed) {
      videoRef.current?.play()?.catch(() => {})
      return
    }
    setArmed(true)
  }

  const retry = () => {
    setFailed(false)
    setArmed(false)
    setToken((n) => n + 1)
    requestAnimationFrame(() => setArmed(true))
  }

  return (
    <div className={`video-player ${className}`.trim()}>
      {!armed && posterSrc ? (
        <img
          className="video-player__poster"
          src={posterSrc}
          alt=""
          decoding="async"
          loading="lazy"
          draggable={false}
        />
      ) : null}

      <video
        key={activeSrc || `idle-${token}`}
        ref={videoRef}
        className="video-player__el"
        controls={controls && armed}
        playsInline
        preload="none"
        muted={muted || autoPlay}
        loop={loop}
        poster={posterSrc}
        aria-label={ariaLabel}
      >
        {activeSrc ? <source src={activeSrc} type="video/mp4" /> : null}
      </video>

      {!armed && !failed ? (
        <button
          type="button"
          className="video-player__start"
          onClick={start}
          aria-label={ariaLabel ? `Play ${ariaLabel}` : 'Play video'}
        >
          <span className="video-player__start-icon" aria-hidden="true" />
          <span className="video-player__start-label">Tap to play</span>
        </button>
      ) : null}

      {armed && loading && !failed ? (
        <div className="video-player__placeholder" aria-hidden="true">
          Loading…
        </div>
      ) : null}

      {failed ? (
        <div className="video-player__error">
          <p>Video couldn’t load.</p>
          <button type="button" onClick={retry}>
            Try again
          </button>
        </div>
      ) : null}
    </div>
  )
}

function posterFromSrc(src) {
  if (!src || typeof src !== 'string') return undefined
  const clean = src.split('?')[0]
  const videosMatch = clean.match(/\/videos\/([^/]+)\.mp4$/i)
  if (videosMatch) return `/videos/posters/${videosMatch[1]}.jpg`
  const rootMatch = clean.match(/\/([^/]+)\.mp4$/i)
  if (rootMatch) return `/videos/posters/${rootMatch[1]}.jpg`
  return undefined
}

function withCacheBust(src, token) {
  if (!token) return src
  const sep = src.includes('?') ? '&' : '?'
  return `${src}${sep}r=${token}`
}
