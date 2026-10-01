
import './home.css'
import me from '../../assets/me.jpeg'
import cv from '../../assets/cv.pdf'
import HomeSocials from './HomeSocials'


function home() {
  return (
    <div className='home'>
     <div className="container home_container">
      <h4>Hello I'm</h4>
      <h1>Kareem Abdelnaby</h1>
      <h4 className='text-light'>Frontend Developer</h4>

      <div className="btns">
        <a href={cv} className='btn' download>Download CV</a>
        <a href="#contact" className='btn btn-primary' >Let's Talk</a>
      </div>
      <div className="me">
        <img src={me} alt="" />
      </div>
      <a href="#about" className='scroll_down'>Scroll Down</a>
    <HomeSocials />
     </div>
    </div>
  )
}

export default home
