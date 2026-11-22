import './Ritual.css'

export default function Ritual() {
  return (
    <section className="ritual" aria-label="Pooja Tilak">
      <div className="ritual__inner container">
        <div className="ritual__media">
          <img
            src="/pooja-tilak.jpg"
            alt="Saffron paste prepared for Pooja Tilak"
            loading="lazy"
          />
        </div>
        <div className="ritual__copy">
          <h2 className="ritual__title">
            A pinch of kesar in the morning begins with Pooja Tilak
          </h2>
          <p className="ritual__text">
            Saffron has held a sacred place in India worship for as long as
            anyone can remember
          </p>
        </div>
      </div>
    </section>
  )
}
