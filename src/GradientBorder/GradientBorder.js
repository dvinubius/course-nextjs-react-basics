import React from 'react'

import './GradientBorder.css'
import Title from '../Title/TitleFC'

function GradientBorder() {
  return (
    <div className='gradient-border-wrapper'>
      <div className='gradient-border-cover'>
        <Title message='Happy Bedtime!' />
      </div>
    </div>
  )
}

export default GradientBorder