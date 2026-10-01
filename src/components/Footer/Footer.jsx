
import './footer.css'
import {FaFacebookF} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaXTwitter} from "react-icons/fa6"
function Footer() {
  return (
  <footer>
    <a href="#" className='footer_logo'>Kareem X</a>
    <ul className="permalinks">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#Projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer_socials">
      <a href="#"target='_blank'><FaFacebookF/></a>
      <a href="#"target='_blank'><FaInstagram/></a>
      <a href="#"target='_blank'><FaXTwitter/></a>
    </div>
    <div className="footer_copy_right">
      <small>&copy; <a href="https://www.facebook.com/Kareem.A.Sayd/">KareemA.Sayd</a> All rights reserved </small>
    </div>
  </footer>
  )
}

export default Footer
