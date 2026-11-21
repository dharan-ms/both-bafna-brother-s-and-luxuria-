import { Play, Leaf, HandHeart, FlaskConical, Plane } from 'lucide-react'
import { trustItems } from '../data'
import './Hero.css'

const trustIcons = {
  leaf: Leaf,
  hands: HandHeart,
  flask: FlaskConical,
  plane: Plane,
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__media" aria-hidden="true">
        <img className="hero__bg" src="/hero.jpg" alt="" />
        <div className="hero__overlay" />
      </div>

      <div className="hero__content">
        <p className="hero__eyebrow">Since 1979 · Grade A Saffron</p>
        <h1 className="hero__title">
          A Precious Gift
          <br />
          of Nature
        </h1>
        <p className="hero__desc">
          Enrich your dishes with natural antioxidants and nutrients for a
          healthier lifestyle — from Bafna Brothers Kesarwala.
        </p>
        <div className="hero__ctas">
          <a href="#shop" className="btn btn--cream">
            View Our Products <span aria-hidden="true">→</span>
          </a>
          <a href="#about" className="btn btn--ghost">
            <span className="btn__play">
              <Play size={12} fill="currentColor" />
            </span>
            Our Story
          </a>
        </div>
      </div>

      <div className="hero__trust">
        <div className="hero__trust-inner">
          {trustItems.map((item) => {
            const Icon = trustIcons[item.icon]
            return (
              <div key={item.label} className="hero__trust-item">
                <Icon size={16} strokeWidth={1.5} />
                <span>{item.label}</span>
              </div>
            )
          })}
        </div>
      </div>

      <div className="hero__tear" aria-hidden="true" />
    </section>
  )
}
