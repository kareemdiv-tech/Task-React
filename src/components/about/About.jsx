
import './about.css'
import IMageMe from '../../assets/my.jpeg'
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
function About() {
  return (
   <section className="about" id="about">
    <div className="top_section">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
    </div>
    
    <div className="container about_container">
      <div className="about_me">
        <div className="about_me_image">
      <img src={IMageMe} alt="" />
        </div>
      </div>

      <div className="about_content">

        <div className="about_cards"> 
          <div className="about_card">
            <FaAward className='about_icon' /> 
            <h5>Experience</h5>
            <small>3+years working</small>
          </div>
    
 <div className="about_card">
            <FaUsers className='about_icon' />
            <h5>Clients</h5>
            <small>200+ worldwide</small>
          </div>
        

      

          <div className="about_card">
          
            <VscFolderLibrary className='about_icon' /> 
            <h5>Projects</h5>
            <small>80+ Completed</small>
          </div>
        

  </div>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, consequuntur, eveniet quisquam at nisi neque soluta, temporibus odit rerum cupiditate harum aspernatur dolor ipsam repudiandae accusamus quia possimus voluptatibus nihil!</p>

<a href="#contact" className='btn btn-primary'>Let's Talk</a>
 </div>
    </div>
   </section>
  )
}

export default About
