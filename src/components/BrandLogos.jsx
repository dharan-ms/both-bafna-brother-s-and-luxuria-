import { useId } from 'react'
import './BrandLogos.css'

function CrownMark() {
  const gradientId = useId().replace(/:/g, '')

  return (
    <svg className="brand-luxuria__crown" viewBox="0 0 120 72" aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f0d78c" />
          <stop offset="45%" stopColor="#c29b40" />
          <stop offset="100%" stopColor="#8a6a1f" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${gradientId})`}
        d="M10 52 L22 18 L40 42 L60 8 L80 42 L98 18 L110 52 Z"
      />
      <rect x="12" y="52" width="96" height="10" rx="2" fill={`url(#${gradientId})`} />
      <circle cx="22" cy="18" r="4" fill={`url(#${gradientId})`} />
      <circle cx="60" cy="8" r="5" fill={`url(#${gradientId})`} />
      <circle cx="98" cy="18" r="4" fill={`url(#${gradientId})`} />
    </svg>
  )
}

export function BafnaBrothersLogo({ href = '#home' }) {
  return (
    <a href={href} className="brand-bafna" aria-label="Bafna Brother's Kesarwala">
      <span className="brand-bafna__name">
        Bafna Brother&apos;s<sup>®</sup>
      </span>
      <span className="brand-bafna__kesar">Kesarwala</span>
      <span className="brand-bafna__since">Since 1979</span>
    </a>
  )
}

export function LuxuriaLogo({ href = '#luxuria' }) {
  return (
    <a href={href} className="brand-luxuria" aria-label="Bafna's Luxuria Signature">
      <CrownMark />
      <span className="brand-luxuria__bafnas">
        <i /><span>BAFNA&apos;S</span><i />
      </span>
      <span className="brand-luxuria__name">
        LUXURIA<sup>TM</sup>
      </span>
      <span className="brand-luxuria__sig-row">
        <i /><span className="brand-luxuria__sig">Signature</span><i />
      </span>
    </a>
  )
}

export default function BrandLogos() {
  return (
    <div className="brand-logos">
      <BafnaBrothersLogo />
      <span className="brand-logos__divider" aria-hidden="true" />
      <LuxuriaLogo />
    </div>
  )
}
