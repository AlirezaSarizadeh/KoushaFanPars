// components/CustomerReview.js
import React from 'react';

const CustomerReview = ({ review, reviewerName, date }) => {
  return (
    <div className="border p-4 mb-4 rounded">
      <p className="mb-2">{review}</p>
      <div className="text-right">
        <span className="font-bold">{reviewerName}</span>
        {date && <span className="text-sm ml-2 text-gray-500">- {date}</span>}
      </div>
    </div>
  );
};

export default CustomerReview;