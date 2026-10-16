import { images } from '../media'

const specialtyList = [
  { id: 1, title: 'Neurology', active: false },
  { id: 2, title: 'Bones', active: true },
  { id: 3, title: 'Oncology', active: false },
  { id: 4, title: 'Otorhinolaryngology', active: false },
  { id: 5, title: 'Ophthamology', active: false },
  { id: 6, title: 'Cardiovascular', active: false },
  { id: 7, title: 'Pulmonology', active: false },
  { id: 8, title: 'Renal Medicine', active: false },
  { id: 9, title: 'Gastroenterology', active: false },
  { id: 10, title: 'Urology', active: false },
  { id: 11, title: 'Dermatology', active: false },
  { id: 12, title: 'Gynaecology', active: false },
]

export default function Specialties() {
  return (
    <section className="specialties">
      <div className="specialties-inner">
        <div className="specialties-head">
          <h4 className="specialties-eyebrow">Always Caring</h4>
          <h2 className="specialties-title">Our Specialties</h2>
        </div>

        <div className="specialties-grid">
          {specialtyList.map((item) => (
            <div
              key={item.id}
              className={`specialty-card ${item.active ? 'specialty-active' : ''}`}
            >
              <img
                src={images.heart}
                alt=""
                className="specialty-icon"
              />
              <p className="specialty-name">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}