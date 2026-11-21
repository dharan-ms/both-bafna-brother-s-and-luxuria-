import './TrustedBrands.css'

export default function TrustedBrands() {
  return (
    <section className="brands" id="brands">
      <div className="container">
        <header className="brands__header">
          <p className="brands__eyebrow">Our Clients</p>
          <h2 className="brands__title">Brands that have trusted us</h2>
        </header>

        <div className="brands__frame">
          <img
            src="/brands-trusted.jpg"
            alt="Brands that have trusted Bafna Brothers Kesarwala"
            className="brands__logo-sheet"
          />
        </div>
      </div>
    </section>
  )
}
