import { Link } from 'react-router-dom'
import { images } from '../media'

export default function Header() {
  return (
    <header className="site-header">
      <nav className="header-inner">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">Services</Link>
          </li>
          <li className="nav-item">
            <a href="#doctors" className="nav-link">Doctors</a>
          </li>
          <li className="nav-item">
            <a href="#news" className="nav-link">News</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">Contact</a>
          </li>
        </ul>

        <div className="header-actions">
          <img src={images.search} alt="Search" className="icon-search" />
          <button type="button" className="header-cta">Appointment</button>
        </div>
      </nav>
    </header>
  )
}