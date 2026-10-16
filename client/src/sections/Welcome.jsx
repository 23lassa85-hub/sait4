import { images } from '../media'

export default function Welcome() {
  return (
    <section className="welcome">
      <div className="welcome-inner">
        <div className="welcome-text">
          <h3 className="welcome-eyebrow">Welcome to Meddical</h3>
          <h2 className="welcome-title">A Great Place to Receive Care</h2>
          <p className="welcome-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare.
            Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.
          </p>
          <div className="welcome-more">
            <span className="welcome-more-text">Learn More</span>
            <span className="welcome-more-arrow">→</span>
          </div>
        </div>

        <div className="welcome-photo-wrap">
          <img
            src={images.doctors}
            alt=""
            className="welcome-photo"
          />
        </div>
      </div>
    </section>
  )
}