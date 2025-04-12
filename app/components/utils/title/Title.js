import React from 'react'
import './title.css'

const Title = ({ title, fontSize, className = '' }) => {
  return (
    <div 
      className={`main-title ${className}`} 
      style={{ fontSize: `${fontSize}` }}
    >
      {title}
      <span className='title-line'></span>
    </div>
  )
}

export default Title