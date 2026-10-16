import { images } from '../media'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="footer-logo">Meddical</h2>
            <p className="footer-desc">
              Leading the Way in Medical Execellence, Trusted Care.
            </p>
          </div>

          <div className="footer-nav">
            <h3 className="footer-heading">Important Links</h3>
            <div className="footer-links">
              <span className="footer-link">Appointment</span>
              <span className="footer-link">Doctors</span>
              <span className="footer-link">Services</span>
              <span className="footer-link">About Us</span>
            </div>
          </div>

          <div className="footer-contacts-col">
            <h3 className="footer-heading">Contact Us</h3>
            <div className="footer-contacts">
              <span className="footer-contact">Call: (237) 681-812-255</span>
              <span className="footer-contact">Email: fildineesoe@gmail.com</span>
              <span className="footer-contact">Address: 0123 Some place</span>
              <span className="footer-contact">Some country</span>
            </div>
          </div>

          <div className="footer-newsletter">
            <h3 className="footer-heading">Newsletter</h3>
            <button type="button" className="newsletter-button">
              <span>Enter your email address</span>
              <img
                src={images.arrow}
                alt=""
                className="newsletter-arrow"
              />
            </button>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copy">
            © 2021 Hospital’s name All Rights Reserved by PNTEC-LTD
          </p>
          <div className="footer-socials">
            <img
              src={images.socialLinkedin}
              alt=""
              className="footer-social-icon"
            />
            <img
              src={images.socialFacebook}
              alt=""
              className="footer-social-icon"
            />
            <img
              src={images.socialInstagram}
              alt=""
              className="footer-social-icon"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}