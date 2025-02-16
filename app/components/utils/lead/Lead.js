import React from 'react'
import './lead.css'
const Lead = ({ boldText, lightText }) => {
  return (
    <h2 className='fw-bold d-flex flex-column gap-3 mt-3'>
        {boldText}
      <span className='lead fs-3 fw-normal'>
        {lightText}
      </span>
    </h2>
  )
}

export default Lead
