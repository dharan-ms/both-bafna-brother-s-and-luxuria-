/** Solid gold icons — gold glyph in gold circular frames site-wide */

const GOLD = 'currentColor'

export function PhoneIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={GOLD} aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z" />
    </svg>
  )
}

export function EmailIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={GOLD} aria-hidden="true">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" />
    </svg>
  )
}

export function MapPinIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={GOLD} aria-hidden="true">
      <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
    </svg>
  )
}

export function InstagramIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={GOLD} aria-hidden="true">
      <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2A3.2 3.2 0 1 1 12 8.8a3.2 3.2 0 0 1 0 6.4z" />
      <circle cx="17.5" cy="6.5" r="1.2" />
      <path d="M17.5 2h-11A4.5 4.5 0 0 0 2 6.5v11A4.5 4.5 0 0 0 6.5 22h11a4.5 4.5 0 0 0 4.5-4.5v-11A4.5 4.5 0 0 0 17.5 2zm2.7 15.5a2.7 2.7 0 0 1-2.7 2.7h-11a2.7 2.7 0 0 1-2.7-2.7v-11A2.7 2.7 0 0 1 6.5 3.8h11a2.7 2.7 0 0 1 2.7 2.7v11z" />
    </svg>
  )
}

export function YoutubeIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={GOLD} aria-hidden="true">
      <path d="M23 12.2s0-3.4-.4-5c-.3-1.4-1.4-2.5-2.8-2.8C17.2 4 12 4 12 4s-5.2 0-7.8.4C2.8 4.7 1.7 5.8 1.4 7.2 1 8.8 1 12.2 1 12.2s0 3.4.4 5c.3 1.4 1.4 2.5 2.8 2.8C6.8 20.4 12 20.4 12 20.4s5.2 0 7.8-.4c1.4-.3 2.5-1.4 2.8-2.8.4-1.6.4-5 .4-5zM9.8 15.6V8.8l6.4 3.4-6.4 3.4z" />
    </svg>
  )
}
