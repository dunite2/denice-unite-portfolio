import React from 'react'
import './myprojects.css'
import portfolioImg from '../../assets/portfolio.png'
import ecommerceImg from '../../assets/e-commerce.png'
import flaskImg from '../../assets/python flask.png'
import qrGeneratorImg from '../../assets/flask qrgenerator.png'
import cmsImg from '../../assets/background.jpg'

const data = [
  {
    id: 1,
    image: portfolioImg,
    title: 'Personal Portfolio Website',
    description: 'React-based portfolio showcasing my skills and projects',
    github: 'https://github.com/dunite2/finalproj',
    demo: 'https://dunite2.github.io/finalproj'
  },
  {
    id: 2,
    image: ecommerceImg,
    title: 'E-Commerce Application',
    description: 'Full-stack e-commerce platform with modern design and functionality',
    github: 'https://github.com/dunite2/ecommerce_app',
  },
  {
    id: 3,
    image: flaskImg,
    title: 'Winnipeg Lane Closures App',
    description: 'Flask web application for tracking Winnipeg lane closures and traffic information',
    github: 'https://github.com/dunite2/dash_assignment',
  },
  {
    id: 4,
    image: qrGeneratorImg,
    title: 'Flask Image Generator and QR Generator',
    description: 'Python Flask application for generating images and QR codes with custom functionality'
  },
  {
    id: 5,
    image: cmsImg,
    title: 'Content Management System (CMS)',
    description: 'Full-featured CMS for managing and publishing web content with admin dashboard',
    github: 'https://github.com/dunite2/CMS-final-project'
  }
]

const Myprojects = () => {
  return (
    <section id='myprojects'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, description, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <p className="portfolio__description">{description}</p>
                <div className="portfolio__item-cta">
                  {id === 1 ? (
                    <>
                      <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
                      <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
                    </>
                  ) : id === 2 ? (
                    <>
                      <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
                    </>
                  ) : id === 3 ? (
                    <>
                      <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
                    </>
                  ) : id === 5 ? (
                    <>
                      <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
                    </>
                  ) : null}
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Myprojects
