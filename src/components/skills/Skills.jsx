
import './skills.css'
import HTML from '../../assets/html-icon.webp'
import CSS from '../../assets/css3.svg'
import  Javascript from '../../assets/javascript.svg'
import React from '../../assets/react.svg'
import Bootstrap from '../../assets/Bootstrap_logo.svg.webp'


const SkillsData= [
 { id:1,
  image:HTML,
  title:"HTML",
    disc: "build and structure web pages",
},
{
  id:2,
  image:CSS,
  title:"CSS",
  disc: "User Interface",
},
{
  id:3,
  image:Javascript,
  title:"Javascript",
  disc: "Interaction",
},
{
  id:4,
  image:React,
  title:"React",
  disc: "Framework",
},
{
  id:5,
  image:Bootstrap,
  title:"Bootstrap",
  disc: "User Interface",
},
]



function Skills() {
  return (
   <section className='skills'>
    <div className="top_section">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
    </div>

    <div className="container container_skills" id='skills'>

      {SkillsData.map(({id , image , title , disc})=>(
         <article className='card_skill' key={id}>
      <div className="icon">
        <img src={image} alt="" />
      </div>
      <div className="content">
        <h4>{title}</h4>
        <p className='text-light'>{disc}</p>
      </div>
    </article>
      )
      
      )}
   
    </div>
   </section>
  )
}

export default Skills
