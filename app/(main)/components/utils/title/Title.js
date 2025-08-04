import React from 'react'
import './title.css'

const Title = ({ title, fontSize, className = '', as = 'h2', id }) => {
  const Tag = as;  // 'h1', 'h2', 'h3', ...
  return (
    <Tag id={id} className={`main-title ${className}`} style={{ fontSize }}>
      {title}
      <span className='title-line'></span>
    </Tag>
  );
}


export default Title