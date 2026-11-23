import { products } from '../data'
import './Bestsellers.css'

export default function Bestsellers() {
  return (
    <section className="bestsellers" id="shop">
      <div className="bestsellers__inner container">
        <header className="bestsellers__header">
          <h2 className="bestsellers__eyebrow">Our Products</h2>
          <p className="bestsellers__intro">
            A perfect Combination of Health And Royalty
          </p>
        </header>

        <div className="bestsellers__grid">
          {products.map((product) => (
            <article key={product.id} className="bestsellers__card">
              <div className="bestsellers__image-wrap">
                <img
                  src={product.image}
                  alt={product.name || product.desc}
                  className="bestsellers__image"
                  loading="lazy"
                />
              </div>
              <div className="bestsellers__copy">
                {product.tagline ? (
                  <p className="bestsellers__tagline">{product.tagline}</p>
                ) : null}
                {product.name ? (
                  <h3 className="bestsellers__name">{product.name}</h3>
                ) : null}
                {product.desc ? (
                  <p className="bestsellers__desc">{product.desc}</p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
