import { socialLinks } from '../data'
import './SocialLinks.css'

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23 7.5a3 3 0 0 0-2.1-2.1C19.2 5 12 5 12 5s-7.2 0-8.9.4A3 3 0 0 0 1 7.5 31.5 31.5 0 0 0 1 12a31.5 31.5 0 0 0 .1 4.5 3 3 0 0 0 2.1 2.1C4.8 19 12 19 12 19s7.2 0 8.9-.4a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 23 12a31.5 31.5 0 0 0 0-4.5zM9.8 15.2V8.8L15.7 12z" />
    </svg>
  )
}

const icons = {
  instagram: InstagramIcon,
  youtube: YouTubeIcon,
}

export default function SocialLinks({ className = '' }) {
  return (
    <div className={`social-links ${className}`.trim()}>
      <span className="social-links__label">Follow us</span>
      <div className="social-links__row">
        {socialLinks.map((link) => {
          const Icon = icons[link.icon]
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              className="social-links__item"
            >
              <Icon />
            </a>
          )
        })}
      </div>
    </div>
  )
}
