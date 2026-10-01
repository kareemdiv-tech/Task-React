
import './projects.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
    const portfolioData = [
      {
        id: 1,
        image:IMG1,
        title:"portfolio Item 1",
        github:'https://git.com.project1',
        demo:'https://demo1.com'
      },
      {
        id: 2,
        image:IMG2,
        title:"portfolio Item 2",
        github:'https://git.com.project2',
        demo:'https://demo1.com'
      },
  
      {
        id: 3,
        image:IMG3,
        title:"portfolio Item 3",
        github:'https://git.com.project3',
        demo:'https://demo3.com'
      },
      {
        id: 4,
        image:IMG4,
        title:"portfolio Item 4",
        github:'https://git.com.project4',
        demo:'https://demo4.com'
      },
      {
        id: 5,
        image:IMG5,
        title:"portfolio Item 5",
        github:'https://git.com.project5',
        demo:'https://demo5.com'
      },
      {
        id: 6,
        image:IMG6,
        title:"portfolio Item 6",
        github:'https://git.com.project6',
        demo:'https://demo6.com'
      },
    ]
function Projects() {
  return (
   <section className='Projects'  id="Projects">



 <div className="top_section">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
    </div>


    <div className="container projects_container">

      {portfolioData.map(({id , image , title , github , demo}) => (
        <article key={id} className='portfolio_item'>
      <div className="protfolio_item_img">
        <img src={image} alt="" />
      </div>

      <h3>{title}</h3>

      <div className="portfolio_item_btns">
        <a href={github} className='btn' target='_blank'>Github</a>
        <a href={demo} className='btn btn-primary' target=''>Live Demo</a>
      </div>
    </article>
      ))}
    
    </div>
   </section>
  )
}

export default Projects
