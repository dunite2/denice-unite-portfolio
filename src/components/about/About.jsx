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
              <small>Security Analyst (Co-op) – Government of Manitoba <br></br>
                During my co-op, I supported enterprise cybersecurity operations by monitoring and investigating alerts across Azure AD, Microsoft Defender, IBM QRadar, Graylog, and Proofpoint. I managed identity security tasks such as MFA troubleshooting, risky user monitoring, and leaked credential response, while also producing executive-level reports in Power BI. My contributions included conducting risk assessments, collaborating with cross-functional teams, and assisting with awareness campaigns, ensuring consistent security coverage and improved organizational resilience.</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Technical Skills</h5>
              <small>Programming & Web Development
- React, PHP, JavaScript, Python, HTML5, CSS, Tailwind CSS, SQL
- Database management, RESTful APIs
Systems & Infrastructure
- Windows Server, Active Directory, Azure AD, Microsoft 365
- Docker, Git/GitHub, WINSCP, PuTTY
- Linux (Debian, Kali), Virtualization concepts, Networking fundamentals
Security & Testing
- OWASP principles, ZAP (penetration testing), Metasploit
- Security lab experience: Mr. Robot, Kioptrix
- Identity management, MFA administration, incident response
Tools & Analytics
- PowerShell, Command Line
- Wireshark (packet capture & analysis), Power BI (reporting & dashboards)
</small>
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
