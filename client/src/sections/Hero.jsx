import { images } from '../media'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-eyebrow">Caring for Life</h2>
            <h1 className="hero-title">Leading the Way in Medical Excellence</h1>
          </div>
          <button type="button" className="hero-button">Our Services</button>
        </div>
      </div>

      <div className="hero-cards">
        <div className="hero-card hero-card-dark">
          <span className="hero-card-title">Book an Appointment</span>
          <img src={images.calendar} alt="" className="hero-card-icon" />
        </div>

        <div className="hero-card hero-card-light">
          <span className="hero-card-title">Book an Appointment</span>
          <img src={images.team} alt="" className="hero-card-icon" />
        </div>

        <div className="hero-card hero-card-accent">
          <span className="hero-card-title">Book an Appointment</span>
          <img src={images.cash} alt="" className="hero-card-icon" />
        </div>
      </div>
    </section>
  )
}