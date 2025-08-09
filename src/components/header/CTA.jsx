import React from 'react'
import CV from '../../assets/Denice CV.png'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download="Denice CV.png" className='btn'>Download CV</a>
        <a href="#contacts" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
