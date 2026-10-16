import { images } from '../media'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const doctorList = [
  { id: 1, photo: images.doctor1, name: "Doctor's Name", specialty: 'Neurology' },
  { id: 2, photo: images.doctor2, name: "Doctor's Name", specialty: 'Neurology' },
  { id: 3, photo: images.doctor3, name: "Doctor's Name", specialty: 'Neurology' },
]

export default function Doctors() {
  return (
    <section className="doctors" id="doctors">
      <div className="doctors-inner">
        <div className="doctors-head">
          <h4 className="doctors-eyebrow">Trusted Care</h4>
          <h2 className="doctors-title">Our Doctors</h2>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          navigation={false}
          modules={[Pagination, Navigation]}
          className="doctors-swiper"
        >
          {[1, 2, 3].map((slideIndex) => (
            <SwiperSlide key={slideIndex}>
              <div className="doctors-row">
                {doctorList.map((doctor) => (
                  <div className="doctor-card" key={doctor.id}>
                    <img src={doctor.photo} alt="" className="doctor-photo" />
                    <div className="doctor-info">
                      <h3 className="doctor-name">{doctor.name}</h3>
                      <p className="doctor-specialty">{doctor.specialty}</p>
                      <div className="doctor-socials">
                        <img src={images.linkedin} alt="" className="doctor-social-icon" />
                        <img src={images.facebook} alt="" className="doctor-social-icon" />
                        <img src={images.instagram} alt="" className="doctor-social-icon" />
                      </div>
                    </div>
                    <button type="button" className="doctor-button">View Profile</button>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <img
          src={images.pager}
          alt=""
          className="doctors-pager"
        />
      </div>
    </section>
  )
}