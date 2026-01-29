import React from 'react'
import CV from '../../assets/Denice_Unite_CV_Updated.png'

const CTA = () => {
  return (
    <div className='cta'>
  <a href={CV} download="Denice_Unite_CV_Updated.png" className='btn'>Download CV</a>
        <a href="#contacts" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
