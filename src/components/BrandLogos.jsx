import './BrandLogos.css'

export default function BrandLogos({ className = '', size = 'default' }) {
  return (
    <span className={`brand-logos brand-logos--${size} ${className}`.trim()}>
      <img
        src="/brand-logo.png?v=34"
        srcSet="/brand-logo.png?v=34 6909w, /brand-logo-8k.png?v=34 7680w"
        sizes="(max-width: 720px) 82vw, (max-width: 1100px) 58vw, min(640px, 62vw)"
        width={6909}
        height={1344}
        alt="Bafna Brother's Kesarwala · Luxuria Signature · Since 1979"
        className="brand-logos__img"
        decoding="async"
        fetchPriority="high"
      />
    </span>
  )
}
