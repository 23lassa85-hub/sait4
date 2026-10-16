import { images } from '../media'

const formFields = [
  { name: 'Name', has_arrow: false },
  { name: 'Gender', has_arrow: true },
  { name: 'Email', has_arrow: false },
  { name: 'Phone', has_arrow: false },
  { name: 'Date', has_arrow: true },
  { name: 'Time', has_arrow: true },
  { name: 'Doctor', has_arrow: true },
  { name: 'Department', has_arrow: true },
]

export default function Booking() {
  return (
    <section className="booking">
      <div className="booking-inner">
        <div className="booking-info">
          <h2 className="booking-title">Book an Appointment</h2>
          <p className="booking-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare.
            Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.
          </p>
        </div>

        <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
          <div className="booking-fields">
            {formFields.map((field, index) => (
              <div
                key={index}
                className={`field ${index % 2 === 0 ? 'field-left' : 'field-right'}`}
              >
                <span className="field-label">{field.name}</span>
                {field.has_arrow && (
                  <img
                    src={images.chevron}
                    alt=""
                    className="field-arrow"
                  />
                )}
              </div>
            ))}
          </div>

          <div className="field-message">
            <span className="message-label">Message</span>
          </div>

          <button type="submit" className="booking-submit">
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  )
}