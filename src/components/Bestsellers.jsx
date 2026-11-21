import { products } from '../data'
import './Bestsellers.css'

export default function Bestsellers() {
  return (
    <section className="bestsellers" id="shop">
      <div className="bestsellers__inner container">
        <header className="bestsellers__header">
          <p className="bestsellers__eyebrow">Our Products</p>
          <h2 className="bestsellers__title">Signature Selection</h2>
          <p className="bestsellers__intro">
            From Kashmiri Mongra saffron to Shahi Kesariya syrup — pure,
            precious, and crafted with care since 1979.
          </p>
        </header>

        <div className="bestsellers__grid">
          {products.map((product) => (
            <article key={product.id} className="bestsellers__card">
              <div className="bestsellers__image-wrap">
                <img
                  src={product.image}
                  alt={product.name}
                  className="bestsellers__image"
                  loading="lazy"
                />
              </div>
              <p className="bestsellers__tagline">{product.tagline}</p>
              <h3 className="bestsellers__name">{product.name}</h3>
              <p className="bestsellers__desc">{product.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
