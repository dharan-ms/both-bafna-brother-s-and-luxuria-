import { useEffect, useId, useRef, useState } from 'react'
import './VideoPlayer.css'

const PLAY_EVENT = 'bbk:video-play'

/**
 * Deployment-safe video: lazy-loads src, recovers from errors, pauses siblings.
 */
export default function VideoPlayer({
  src,
  className = '',
  ariaLabel,
  controls = true,
  autoPlay = false,
  muted = false,
  loop = false,
}) {
  const id = useId()
  const videoRef = useRef(null)
  const wrapRef = useRef(null)
  const [activeSrc, setActiveSrc] = useState('')
  const [failed, setFailed] = useState(false)
  const [token, setToken] = useState(0)

  useEffect(() => {
    const node = wrapRef.current
    if (!node) return undefined

    let cancelled = false
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || cancelled) return
        setActiveSrc(withCacheBust(src, token))
        observer.disconnect()
      },
      { rootMargin: '240px 0px', threshold: 0.01 },
    )

    observer.observe(node)
    return () => {
      cancelled = true
      observer.disconnect()
    }
  }, [src, token])

  useEffect(() => {
    const video = videoRef.current
    if (!video || !activeSrc) return undefined

    const onPlay = () => {
      window.dispatchEvent(new CustomEvent(PLAY_EVENT, { detail: { id } }))
    }

    const onPeerPlay = (event) => {
      if (event.detail?.id === id) return
      if (!video.paused) video.pause()
    }

    const onError = () => setFailed(true)
    const onLoaded = () => setFailed(false)

    video.addEventListener('play', onPlay)
    video.addEventListener('error', onError)
    video.addEventListener('loadeddata', onLoaded)
    window.addEventListener(PLAY_EVENT, onPeerPlay)

    return () => {
      video.removeEventListener('play', onPlay)
      video.removeEventListener('error', onError)
      video.removeEventListener('loadeddata', onLoaded)
      window.removeEventListener(PLAY_EVENT, onPeerPlay)
    }
  }, [activeSrc, id])

  const retry = () => {
    setFailed(false)
    setActiveSrc('')
    setToken((n) => n + 1)
  }

  return (
    <div className={`video-player ${className}`.trim()} ref={wrapRef}>
      <video
        key={activeSrc || `idle-${token}`}
        ref={videoRef}
        className="video-player__el"
        controls={controls}
        playsInline
        preload={activeSrc ? 'metadata' : 'none'}
        autoPlay={autoPlay}
        muted={muted || autoPlay}
        loop={loop}
        aria-label={ariaLabel}
      >
        {activeSrc ? <source src={activeSrc} type="video/mp4" /> : null}
      </video>

      {!activeSrc && !failed ? (
        <div className="video-player__placeholder" aria-hidden="true">
          Loading video…
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

function withCacheBust(src, token) {
  const sep = src.includes('?') ? '&' : '?'
  return `${src}${sep}v=${token}`
}
