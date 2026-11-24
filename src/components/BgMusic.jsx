import { useEffect, useState } from 'react'
import { Music, VolumeX } from 'lucide-react'
import './BgMusic.css'

const MUSIC_SRC = '/audio/bg-music-web.mp3?v=2'
const MUSIC_VOLUME = 0.035

let sharedAudio = null

function getAudio() {
  if (typeof window === 'undefined') return null

  if (!sharedAudio) {
    sharedAudio = new Audio(MUSIC_SRC)
    sharedAudio.loop = true
    sharedAudio.preload = 'auto'
    sharedAudio.volume = MUSIC_VOLUME
    sharedAudio.setAttribute('playsinline', 'true')
  }

  sharedAudio.volume = MUSIC_VOLUME
  return sharedAudio
}

async function startMusic() {
  const audio = getAudio()
  if (!audio) return false

  audio.volume = MUSIC_VOLUME
  try {
    await audio.play()
    return !audio.paused
  } catch {
    return false
  }
}

function stopMusic() {
  const audio = getAudio()
  if (!audio) return
  audio.pause()
}

export default function BgMusic() {
  const [playing, setPlaying] = useState(() => Boolean(sharedAudio && !sharedAudio.paused))

  useEffect(() => {
    const audio = getAudio()
    if (!audio) return undefined

    const sync = () => setPlaying(!audio.paused)
    audio.addEventListener('play', sync)
    audio.addEventListener('pause', sync)
    audio.addEventListener('ended', sync)

    startMusic().then((ok) => setPlaying(ok))

    const unlock = async (event) => {
      if (event.target?.closest?.('.bg-music')) return
      if (!audio.paused) {
        cleanup()
        return
      }
      const ok = await startMusic()
      setPlaying(ok)
      if (ok) cleanup()
    }

    const cleanup = () => {
      window.removeEventListener('pointerdown', unlock, true)
      window.removeEventListener('keydown', unlock, true)
      window.removeEventListener('touchstart', unlock, true)
      window.removeEventListener('click', unlock, true)
    }

    window.addEventListener('pointerdown', unlock, true)
    window.addEventListener('keydown', unlock, true)
    window.addEventListener('touchstart', unlock, true)
    window.addEventListener('click', unlock, true)

    return () => {
      audio.removeEventListener('play', sync)
      audio.removeEventListener('pause', sync)
      audio.removeEventListener('ended', sync)
      cleanup()
      // Keep audio playing across React Strict Mode remounts.
    }
  }, [])

  const toggle = async (event) => {
    event.preventDefault()
    event.stopPropagation()

    const audio = getAudio()
    if (!audio) return

    if (!audio.paused) {
      stopMusic()
      setPlaying(false)
      return
    }

    const ok = await startMusic()
    setPlaying(ok)
  }

  return (
    <button
      type="button"
      className={`bg-music${playing ? ' is-playing' : ''}`}
      onClick={toggle}
      onPointerDown={(event) => event.stopPropagation()}
      aria-label={playing ? 'Pause music' : 'Play music'}
      title={playing ? 'Pause music' : 'Play music'}
    >
      {playing ? (
        <Music size={18} strokeWidth={1.8} />
      ) : (
        <VolumeX size={18} strokeWidth={1.8} />
      )}
    </button>
  )
}
