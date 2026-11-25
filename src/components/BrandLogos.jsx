import './BrandLogos.css'

export default function BrandLogos({ className = '', size = 'default' }) {
  return (
    <span className={`brand-logos brand-logos--${size} ${className}`.trim()}>
      <img
        src="/brand-logo-bbk.png?v=41"
        width={2680}
        height={800}
        alt="Bafna Brother's Kesarwala · Since 1979"
        className="brand-logos__mark brand-logos__bbk"
        decoding="async"
        fetchPriority="high"
      />
      <span className="brand-logos__divider" aria-hidden="true" />
      <img
        src="/brand-logo-luxuria.png?v=41"
        width={1111}
        height={800}
        alt="Bafna's Luxuria Signature"
        className="brand-logos__mark brand-logos__lux"
        decoding="async"
        fetchPriority="high"
      />
    </span>
  )
}
