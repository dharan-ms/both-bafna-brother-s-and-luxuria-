import { contacts, email, mapLink, socialLinks } from '../data'
import './SocialLinks.css'

function CallAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 28 28" aria-hidden="true">
      <circle cx="14" cy="14" r="14" fill="#34C759" />
      <path
        fill="#fff"
        d="M19.8 17.35c-.3-.15-1.75-.85-2.02-.95-.27-.1-.47-.15-.67.15-.2.3-.77.95-.95 1.15-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-1-.9-.95-1.17-1.15-1.47-.2-.3-.02-.42.13-.57.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.12 3.23 5.12 4.53 2.15.93 2.57.8 3.03.75.46-.05 1.52-.62 1.73-1.22.22-.6.22-1.12.15-1.22-.07-.1-.27-.17-.57-.32z"
      />
    </svg>
  )
}

function EmailAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 28 28" aria-hidden="true">
      <rect width="28" height="28" rx="6" fill="#EA4335" />
      <path
        fill="#fff"
        d="M22.2 8.4H5.8c-.55 0-1 .45-1 1v9.2c0 .55.45 1 1 1h16.4c.55 0 1-.45 1-1V9.4c0-.55-.45-1-1-1zm-.35 1.55-7.45 5.05a.7.7 0 0 1-.8 0L6.15 9.95h15.7zM6.3 18.05V10.7l6.85 4.65c.25.17.55.25.85.25s.6-.08.85-.25l6.85-4.65v7.35H6.3z"
      />
    </svg>
  )
}

function InstagramAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 28 28" aria-hidden="true">
      <defs>
        <radialGradient id="socialIgGrad" cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect width="28" height="28" rx="7" fill="url(#socialIgGrad)" />
      <rect
        x="7"
        y="7"
        width="14"
        height="14"
        rx="4"
        stroke="#fff"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="14" cy="14" r="3.6" stroke="#fff" strokeWidth="2" fill="none" />
      <circle cx="19.2" cy="8.9" r="1.25" fill="#fff" />
    </svg>
  )
}

function YoutubeAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 28 28" aria-hidden="true">
      <rect width="28" height="28" rx="7" fill="#FF0000" />
      <path fill="#fff" d="M11.2 9.4v9.2L19.6 14 11.2 9.4z" />
    </svg>
  )
}

function MapsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 28 28" aria-hidden="true">
      <rect width="28" height="28" rx="7" fill="#fff" />
      <path
        fill="#EA4335"
        d="M14 3.8c-3.4 0-6.2 2.75-6.2 6.15 0 4.6 6.2 11.25 6.2 11.25s6.2-6.65 6.2-11.25c0-3.4-2.8-6.15-6.2-6.15zm0 8.35a2.2 2.2 0 1 1 0-4.4 2.2 2.2 0 0 1 0 4.4z"
      />
      <path fill="#FBBC04" d="M8.2 21.4 11.5 14l2.5 4.3-5.8 3.1z" />
      <path fill="#34A853" d="M19.8 21.4 14 18.3l1.6-2.75 4.2 5.85z" />
      <path fill="#4285F4" d="M14 18.3 8.2 21.4h11.6L14 18.3z" opacity=".9" />
    </svg>
  )
}

export default function SocialLinks({ className = '' }) {
  const primaryPhone = contacts[0]
  const instagram = socialLinks.find((link) => link.icon === 'instagram')
  const youtube = socialLinks.find((link) => link.icon === 'youtube')

  const items = [
    {
      label: 'Call',
      href: `tel:+91${primaryPhone.phone}`,
      Icon: CallAppIcon,
      external: false,
    },
    {
      label: 'Email',
      href: `mailto:${email}`,
      Icon: EmailAppIcon,
      external: false,
    },
    instagram && {
      label: 'Instagram',
      href: instagram.href,
      Icon: InstagramAppIcon,
      external: true,
    },
    youtube && {
      label: 'YouTube',
      href: youtube.href,
      Icon: YoutubeAppIcon,
      external: true,
    },
    {
      label: 'Google Maps',
      href: mapLink,
      Icon: MapsAppIcon,
      external: true,
    },
  ].filter(Boolean)

  return (
    <div className={`social-links ${className}`.trim()}>
      <span className="social-links__label">Follow us</span>
      <div className="social-links__row">
        {items.map(({ label, href, Icon, external }) => (
          <a
            key={label}
            href={href}
            {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
            aria-label={label}
            title={label}
            className="social-links__item social-links__item--app"
          >
            <Icon />
          </a>
        ))}
      </div>
    </div>
  )
}
