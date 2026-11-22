import './BrandLogos.css'

export default function BrandLogos({ className = '', size = 'default' }) {
  return (
    <span className={`brand-logos brand-logos--${size} ${className}`.trim()}>
      <img
        src="/brand-logo.png?v=5"
        alt="Bafna Brother's Kesarwala · Luxuria Signature · Since 1979"
        className="brand-logos__img"
      />
    </span>
  )
}
