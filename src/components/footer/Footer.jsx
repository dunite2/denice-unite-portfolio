import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>DENICE UNITE</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#myprojects">Portfolio</a></li>
        <li><a href="#contacts">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/deniceunite" target="_blank" rel='noreferrer'><FaFacebookF /></a>
        <a href="https://instagram.com/deniceunite" target="_blank" rel='noreferrer'><FiInstagram /></a>
        <a href="https://twitter.com/deniceunite" target="_blank" rel='noreferrer'><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 2025 Denice Unite. All rights reserved. Built with passion and React ⚛️</small>
      </div>
    </footer>
  )
}

export default Footer
