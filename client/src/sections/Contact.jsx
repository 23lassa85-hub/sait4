import { images } from '../media'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <div className="contact-head">
          <h4 className="contact-eyebrow">Get in touch</h4>
          <h2 className="contact-title">Contact</h2>
        </div>

        <div className="contact-cards">
          <div className="contact-card contact-light">
            <div className="contact-info">
              <img
                src={images.emergency}
                alt=""
                className="contact-icon"
              />
              <h3 className="contact-name">Emergency</h3>
              <p className="contact-line">(237) 681-812-255</p>
              <p className="contact-line">(237) 666-331-894</p>
            </div>
          </div>

          <div className="contact-card contact-dark">
            <div className="contact-info">
              <img
                src={images.location}
                alt=""
                className="contact-icon"
              />
              <h3 className="contact-name">Location</h3>
              <p className="contact-line">0123 Some place</p>
              <p className="contact-line">9876 Some country</p>
            </div>
          </div>

          <div className="contact-card contact-light">
            <div className="contact-info">
              <img
                src={images.mail}
                alt=""
                className="contact-icon"
              />
              <h3 className="contact-name">Email</h3>
              <p className="contact-line">fildineeesoe@gmil.com</p>
              <p className="contact-line">myebstudios@gmail.com</p>
            </div>
          </div>

          <div className="contact-card contact-light">
            <div className="contact-info">
              <img
                src={images.hours}
                alt=""
                className="contact-icon"
              />
              <h3 className="contact-name">Working Hours</h3>
              <p className="contact-line">Mon-Sat 09:00-20:00</p>
              <p className="contact-line">Sunday Emergency only</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}