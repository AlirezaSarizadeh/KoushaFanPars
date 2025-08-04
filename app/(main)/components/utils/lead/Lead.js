import React from 'react'
import './lead.css'

const Lead = ({ boldText, lightText, as: Tag = 'h2' }) => {
  return (
    <Tag className="fw-bold d-flex flex-column gap-3 mt-3">
      {boldText}
      <span className="lead fs-3 fw-normal">{lightText}</span>
    </Tag>
  )
}

export default Lead
