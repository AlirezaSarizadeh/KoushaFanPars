import React from 'react'
import './title.css'
const Title = ({ title, fontSize }) => {
  return (
    <div className='main-title' style={{ fontSize: `${fontSize}` }}>
      {title}
      <span className='title-line'></span>
    </div>
  )
}

export default Title
