import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/ME.jpg'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Denice Unite</h1>
        <h5 className="text-light">Full Stack Web Development Graduate with Honours</h5>
        <CTA />

        <div className="me">
          <img src={ME} alt="me" />
        </div>
      </div>
    </header>
  )
}

export default Header
