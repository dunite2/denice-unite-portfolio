import React from 'react'
import './myprojects.css'
import portfolioImg from '../../assets/portfolio.png'
import ecommerceImg from '../../assets/e-commerce.png'
import flaskImg from '../../assets/python flask.png'
import qrGeneratorImg from '../../assets/flask qrgenerator.png'
import cmsImg from '../../assets/background.jpg'
import webgoatImg from '../../assets/webgoat.png'
import reactImg from '../../assets/react.png'
import githubImg from '../../assets/github.png'
import jsImg from '../../assets/javascript.jpg'

const data = [
  {
    id: 6,
    image: webgoatImg,
    title: 'OWASP WebGoat Coursework',
    description: 'Completed hands-on security labs using OWASP WebGoat. Explored real-world vulnerabilities (XSS, SQL Injection, etc.) and earned a report card for successful completion.',
    github: 'https://owasp.org/www-project-webgoat/'
  },
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

const resources = [

  {
    title: 'React Documentation',
    image: reactImg,
    summary: 'React is a JavaScript library for building fast, reusable, and dynamic user interfaces, especially single-page applications.',
    link: 'https://react.dev/'
  },
  {
    title: 'JavaScript Info',
    image: jsImg,
    summary: 'JavaScript is a versatile, lightweight programming language used to make web pages interactive, dynamic, and functional on both the client and server side.',
    link: 'https://javascript.info/'
  },
  {
    title: 'GitHub',
    image: githubImg,
    summary: 'GitHub is a cloud-based platform for version control and collaboration that lets developers store, manage, and share code using Git.',
    link: 'https://github.com/'
  }
];

const Myprojects = () => {
  return (
    <>
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
                    {github && (
                      <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
                    )}
                    {demo && id === 1 && (
                      <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
                    )}
                  </div>
                </article>
              )
            })
          }
        </div>
      </section>

      <section id='resources'>
        <h2>Resources</h2>
        <div className="container resources__container">
          {
            resources.map(({title, image, summary, link}, idx) => (
              <article key={idx} className='resource__item'>
                <div className="resource__item-image">
                  <img src={image} alt={title} style={{width: '60px', height: '60px', objectFit: 'contain'}} />
                </div>
                <h3>{title}</h3>
                <p className="resource__summary">{summary}</p>
                <a href={link} className='btn' target='_blank' rel='noreferrer'>Visit</a>
              </article>
            ))
          }
        </div>
      </section>
    </>
  )
}

export default Myprojects
