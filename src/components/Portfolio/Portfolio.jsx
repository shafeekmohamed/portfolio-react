import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.webp'
import IMG2 from '../../assets/portfolio2.webp'
import IMG3 from '../../assets/portfolio3.webp'
import IMG4 from '../../assets/portfolio4.webp'
import IMG5 from '../../assets/portfolio5.webp'
import IMG6 from '../../assets/portfolio6.webp'

const data = [
  {
  id: 1,
  image: IMG1,
  title: 'crypto zlkmc aalksdnm dsk;oakd lalkdn adsolaisdhn ihsdfo oiahdsioioh',
  github: 'https://github.com',
  demo: 'https://dribbble.com/shots/16673715-Cripto-currency-dashboards-and-financial-data-visualization'
}
 ,
  {
  id: 2,
  image: IMG2,
  title: 'crypto zlkmc aalksdnm dsk;oakd lalkdn adsolaisdhn ihsdfo oiahdsioioh',
  github: 'https://github.com',
  demo: 'https://dribbble.com/shots/16673715-Cripto-currency-dashboards-and-financial-data-visualization'
},
  {
  id: 3,
  image: IMG3,
  title: 'crypto zlkmc aalksdnm dsk;oakd lalkdn adsolaisdhn ihsdfo oiahdsioioh',
  github: 'https://github.com',
  demo: 'https://dribbble.com/shots/16673715-Cripto-currency-dashboards-and-financial-data-visualization'
},
  {
  id: 4,
  image: IMG4,
  title: 'crypto zlkmc aalksdnm dsk;oakd lalkdn adsolaisdhn ihsdfo oiahdsioioh',
  github: 'https://github.com',
  demo: 'https://dribbble.com/shots/16673715-Cripto-currency-dashboards-and-financial-data-visualization'
},
{
  id: 5,
  image: IMG5,
  title: 'crypto zlkmc aalksdnm dsk;oakd lalkdn adsolaisdhn ihsdfo oiahdsioioh',
  github: 'https://github.com',
  demo: 'https://dribbble.com/shots/16673715-Cripto-currency-dashboards-and-financial-data-visualization'
},
  {
  id: 6,
  image: IMG6,
  title: 'crypto zlkmc aalksdnm dsk;oakd lalkdn adsolaisdhn ihsdfo oiahdsioioh',
  github: 'https://github.com',
  demo: 'https://dribbble.com/shots/16673715-Cripto-currency-dashboards-and-financial-data-visualization'
}
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      
      <div className="container potfolio_container">
        {
          data.map(({id, image, title, github, demo}) =>{
            return (
              <article key={id} className='portfolio_items'>
              <div className="portfolio_item_image">
                <img src={image} alt="" />
              </div>
                <h3>{title}</h3>
                <div className="portfolio_item_cta">
                <a href={github} className='btn'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
            </article>
            )
          })
        }
        
     
      </div>
    </section>
  )
}

export default Portfolio