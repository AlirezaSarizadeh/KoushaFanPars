// components/CustomerReview.js
import React from 'react';

const CustomerReview = ({ review, reviewerName, date }) => {
  return (

    <div className="p-4 pt-2 pb-0 rounded">
      <div className='d-flex align-items-center justify-content-start'>
        <span className="fw-bold">{reviewerName}</span>
        <span className='small text-muted ms-3'>
          {date && <span className="text-sm ml-2 text-gray-500">{date}</span>}
        </span>
      </div>
      <div className="text-right">
        <p className="mt-lg-3 mt-2">{review}</p>

      </div>
      <hr/>
    </div>


  );
};

export default CustomerReview;