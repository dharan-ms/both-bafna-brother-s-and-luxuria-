import { useEffect, useRef, useState } from 'react'
import { Music, VolumeX } from 'lucide-react'
import './BgMusic.css'

const MUSIC_SRC = '/audio/bg-music.mp3'

export default function BgMusic() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return undefined

    audio.loop = true
    audio.volume = 0.55

    const markPlaying = () => setPlaying(true)
    const markPaused = () => setPlaying(false)

    audio.addEventListener('play', markPlaying)
    audio.addEventListener('pause', markPaused)

    const tryPlay = () => {
      const playPromise = audio.play()
      if (playPromise?.then) {
        playPromise.catch(() => {
          setPlaying(false)
        })
      }
    }

    tryPlay()

    const unlock = () => {
      if (audio.paused) tryPlay()
      window.removeEventListener('pointerdown', unlock)
      window.removeEventListener('keydown', unlock)
      window.removeEventListener('touchstart', unlock)
    }

    window.addEventListener('pointerdown', unlock, { passive: true })
    window.addEventListener('keydown', unlock)
    window.addEventListener('touchstart', unlock, { passive: true })

    return () => {
      audio.removeEventListener('play', markPlaying)
      audio.removeEventListener('pause', markPaused)
      window.removeEventListener('pointerdown', unlock)
      window.removeEventListener('keydown', unlock)
      window.removeEventListener('touchstart', unlock)
      audio.pause()
    }
  }, [])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused) {
      audio.play().catch(() => setPlaying(false))
    } else {
      audio.pause()
    }
  }

  return (
    <>
      <audio ref={audioRef} src={MUSIC_SRC} preload="auto" playsInline />
      <button
        type="button"
        className={`bg-music${playing ? ' is-playing' : ''}`}
        onClick={toggle}
        aria-label={playing ? 'Pause music' : 'Play music'}
        title={playing ? 'Pause music' : 'Play music'}
      >
        {playing ? (
          <Music size={18} strokeWidth={1.8} />
        ) : (
          <VolumeX size={18} strokeWidth={1.8} />
        )}
      </button>
    </>
  )
}
