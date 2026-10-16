import { images } from '../media'

export default function Services() {
  return (
    <section className="services">
      <div className="services-inner">
        <div className="services-head">
          <h4 className="services-eyebrow">Care you can believe in</h4>
          <h2 className="services-title">Our Services</h2>
        </div>

        <div className="services-layout">
          <aside className="services-tabs">
            <div className="services-tab tab-light">
              <img src={images.checkup} alt="" className="tab-icon" />
              <span className="tab-label">Free Checkup</span>
            </div>

            <div className="services-tab tab-dark">
              <img src={images.cardiogram} alt="" className="tab-icon" />
              <span className="tab-label">Cardiogram</span>
            </div>

            <div className="services-tab tab-light">
              <img src={images.dna} alt="" className="tab-icon" />
              <span className="tab-label">Dna Testing</span>
            </div>

            <div className="services-tab tab-light">
              <img src={images.blood} alt="" className="tab-icon" />
              <span className="tab-label">Blood Bank</span>
            </div>

            <div className="tabs-all">
              <span className="tabs-all-text">View All</span>
            </div>
          </aside>

          <article className="services-info">
            <h3 className="services-info-title">A passion for putting patients first.</h3>
            <div className="services-benefits">
              <ul className="benefits-grid">
                <li className="benefit-item"><span>A Passion for Healing</span></li>
                <li className="benefit-item"><span>5-Star Care</span></li>
                <li className="benefit-item"><span>All our best</span></li>
                <li className="benefit-item"><span>Believe in Us</span></li>
                <li className="benefit-item"><span>A Legacy of Excellence</span></li>
                <li className="benefit-item"><span>Always Caring</span></li>
              </ul>
            </div>
            <p className="services-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare.
              Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.
            </p>
            <p className="services-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque. Convallis felis
              vitae tortor augue. Velit nascetur proin massa in.
            </p>
          </article>

          <div className="services-photos">
            <img
              src={images.consultation}
              alt=""
              className="services-photo"
            />
            <img
              src={images.staff}
              alt=""
              className="services-photo"
            />
          </div>
        </div>
      </div>
    </section>
  )
}