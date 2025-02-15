import React from 'react'
import './title.css'
const Title = ({ title }) => {
  return (
    <div className='main-title'>
      {title}
      <span className='title-line'></span>
    </div>
  )
}

export default Title
