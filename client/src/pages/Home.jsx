import Hero from '../sections/Hero'
import Welcome from '../sections/Welcome'
import Services from '../sections/Services'
import Specialties from '../sections/Specialties'
import Booking from '../sections/Booking'
import Doctors from '../sections/Doctors'
import News from '../sections/News'
import Contact from '../sections/Contact'

export default function Home() {
  return (
    <main className="page">
      <Hero />
      <Welcome />
      <Services />
      <Specialties />
      <Booking />
      <Doctors />
      <News />
      <Contact />
    </main>
  )
}