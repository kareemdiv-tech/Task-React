
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

const ContactData = [
  {
    id:1,
    icon:<MdOutlineEmail/>,
    title:'Email',
    info:'kareem.div@gmail.com',
    link:'mailto:kareem.div@gmail.com'
  },
  {
    id:2,
    icon:<RiMessengerLine/>,
    title:'Messenger',
    info:'Kareem.A.Sayd',
    link:'https://m.me/Kareem.A.Sayd/'
  },
  {
    id:3,
    icon:<BsWhatsapp/>,
    title:'WhatsApp',
    info:'+201032565688',
    link:'https://api.whatsapp.com/send?phone=201032565688'
  },
]


function Contact() {
  const form = useRef();

   const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_t31xv6r', 'template_n8alxg9', form.current,  'Ynsv9sr0r9oLGj8UW',)
    e.target.reset()
  };

  
  return (
    
    <section className="contact" id="contact">
      <div className="top_section">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
    </div>

    <div className="container contact_container">
      <div className="contact_options">

        {ContactData.map(({id , icon , title , info , link})=>(
          <article key={id} className='contact_option'>
            {icon}
            <h4>{title}</h4>
            <h5>{info}</h5>
            <a href={link} target='_blank'>Send Message</a>
          </article>
        ))}

      </div>
      
      <form ref={form} onSubmit={sendEmail} >
        <input type="text" placeholder='Full Name' name='name' />
        <input type="email" placeholder='Your Email'  name='email'/>
        <textarea rows={10} name="message" id="" placeholder='Enter Your Massage'></textarea>
        <button className='btn btn-primary'> Send Message</button>
      </form>
    </div>
    </section>
  )
}

export default Contact
