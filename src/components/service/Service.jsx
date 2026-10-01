
import './service.css'
import { MdDesignServices } from "react-icons/md";
import { FaRocket } from "react-icons/fa";
import {FaCode} from 'react-icons/fa'
function Service() {
  return (
 <section id="services">
  <div className="top_section">
      <h5>What I Offer</h5>
      <h2>Service</h2>
    </div>

    <div className="container container_service">
      <article className='card'>
      <MdDesignServices className='icon'/>
      <h3>Web Design</h3>
      <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fuga ipsam corrupti quibusdam voluptates ad!</p>
      </article>

        <article className='card'>
      <FaRocket className='icon'/>
      <h3>Fast Preformance</h3>
      <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fuga ipsam corrupti quibusdam voluptates ad!</p>
      </article>

        <article className='card'>
      <FaCode className='icon'/>
      <h3>Clean Code</h3>
      <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fuga ipsam corrupti quibusdam voluptates ad!</p>
      </article>
    </div>
 </section>
  )
}

export default Service
