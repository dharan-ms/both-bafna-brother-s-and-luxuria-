import { contacts, email, mapLink, socialLinks } from '../data'
import {
  EmailIcon,
  InstagramIcon,
  MapPinIcon,
  PhoneIcon,
  YoutubeIcon,
} from './icons'
import './SocialLinks.css'

export default function SocialLinks({ className = '' }) {
  const primaryPhone = contacts[0]
  const instagram = socialLinks.find((link) => link.icon === 'instagram')
  const youtube = socialLinks.find((link) => link.icon === 'youtube')

  const items = [
    {
      label: 'Call',
      href: `tel:+91${primaryPhone.phone}`,
      Icon: PhoneIcon,
      external: false,
    },
    {
      label: 'Email',
      href: `mailto:${email}`,
      Icon: EmailIcon,
      external: false,
    },
    instagram && {
      label: 'Instagram',
      href: instagram.href,
      Icon: InstagramIcon,
      external: true,
    },
    youtube && {
      label: 'YouTube',
      href: youtube.href,
      Icon: YoutubeIcon,
      external: true,
    },
    {
      label: 'Google Maps',
      href: mapLink,
      Icon: MapPinIcon,
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
            className="social-links__item"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </div>
  )
}
