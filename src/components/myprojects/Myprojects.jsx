import React from 'react'
import './myprojects.css'

const data = [
  {
    id: 1,
    image: '/placeholder-project1.jpg',
    title: 'Component Library Portfolio',
    github: 'https://github.com/deniceunite',
    demo: 'https://github.com/deniceunite'
  },
  {
    id: 2,
    image: '/placeholder-project2.jpg',
    title: 'React Storybook Design System',
    github: 'https://github.com/deniceunite',
    demo: 'https://github.com/deniceunite'
  },
  {
    id: 3,
    image: '/placeholder-project3.jpg',
    title: 'Business Systems Dashboard',
    github: 'https://github.com/deniceunite',
    demo: 'https://github.com/deniceunite'
  },
  {
    id: 4,
    image: '/placeholder-project4.jpg',
    title: 'Responsive E-Learning Platform',
    github: 'https://github.com/deniceunite',
    demo: 'https://github.com/deniceunite'
  },
  {
    id: 5,
    image: '/placeholder-project5.jpg',
    title: 'Modern Landing Page Collection',
    github: 'https://github.com/deniceunite',
    demo: 'https://github.com/deniceunite'
  },
  {
    id: 6,
    image: '/placeholder-project6.jpg',
    title: 'Full-Stack Web Application',
    github: 'https://github.com/deniceunite',
    demo: 'https://github.com/deniceunite'
  }
]

const Myprojects = () => {
  return (
    <section id='myprojects'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
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
