import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>6 years of customer service experience 
                combined with 1.5 years in technical support, software development, and database management.</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Technical Skills</h5>
              <small>React, PHP, JavaScript, Database Management, Python, HTML5, CSS, Tailwind CSS, SQL, Git, Github, Docker, OWASP, ZAP, Metasploit, WINSCP, Putty, MYSQL Manager, Debian, Kali, Mr.Robot, Kioptrix</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Coursework / Academic Projects</h5>
              <small>
                AWS Cloud Foundations - In progress<br />
                Cisco Packet Tracer<br />
                COMPTIA IT Foundations
              </small>
            </article>
          </div>

          <p>
           Hi there! I’m Denice Unite — a Full Stack Web Development student with hands-on experience in technical support, front-end and back-end development, database management, and security tools like OWASP ZAP and Metasploit. 
           I work with technologies such as React, PHP, and modern web stacks to build functional, user-focused applications. My background includes both customer-facing roles and technical problem-solving, giving me the ability to bridge communication between users and technology.
            When I’m not coding, I’m learning new frameworks, exploring cloud development, or refining my skills to create efficient, seamless solutions.
          </p>

          <a href="#contacts" className='btn btn-primary'>Let's Connect</a>
        </div>
      </div>
    </section>
  )
}

export default About
