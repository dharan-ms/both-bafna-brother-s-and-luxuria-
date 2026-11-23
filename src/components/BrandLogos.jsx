import './BrandLogos.css'

export default function BrandLogos({ className = '', size = 'default' }) {
  return (
    <span className={`brand-logos brand-logos--${size} ${className}`.trim()}>
      <img
        src="/brand-logo.png?v=38"
        srcSet="/brand-logo.png?v=38 4287w, /brand-logo-8k.png?v=38 7680w"
        sizes="(max-width: 720px) 82vw, (max-width: 1100px) 58vw, min(640px, 62vw)"
        width={4287}
        height={1202}
        alt="Bafna Brother's Kesarwala · Luxuria Signature · Since 1979"
        className="brand-logos__img"
        decoding="async"
        fetchPriority="high"
      />
    </span>
  )
}
