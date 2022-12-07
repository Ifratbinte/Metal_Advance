import React from "react";
<<<<<<< HEAD
import { FaQuoteLeft } from "react-icons/fa";
=======
>>>>>>> 2b0cfb7e720e45628a768eb2f211090fbd06bba7

interface Props {
  thumb: string;
  alt: string;
  name: string;
  designation: string;
  review: string;
}

const ReviewCard: React.FC<Props> = ({ thumb, alt, name, designation, review }) => {
  return (
<<<<<<< HEAD
    <div className="testimonial-wrap base-bg-white py-3 px-4 h-100">
      <div className="testimonial-item">
        <div className="testimonial-top d-flex align-items-center justify-content-between pb-4">
          <div className="author d-flex align-items-center">
            <img src={thumb} alt={alt} className="testimonial-thumb border rounded-circle flex-shrink-0" />
            <div className="testimonial-info ms-3">
              <h4 className="font-Poppins fw-medium fs-22">{name}</h4>
              <h5 className="font-Poppins fw-medium fs-14 danger">{designation}</h5>
            </div>
          </div>
          <FaQuoteLeft className="quote quote-icon" />
        </div>
        <div className="testimonial-bottom">
          <span className="review fs-16">{review}</span>
=======
    <div className="testimonial-wrap base-bg-white py-3 px-4">
      <div className="testimonial-item">
        <div className="testimonial-top d-flex align-items-center pb-3">
          <img src={thumb} alt={alt} className="testimonial-thumb border rounded-circle flex-shrink-0" />
          <div className="testimonial-info ms-3">
            <h4 className="font-Poppins fw-medium fs-22">{name}</h4>
            <h5 className="font-Poppins fw-medium fs-14 danger">{designation}</h5>
          </div>
        </div>
        <div className="testimonial-bottom">
          <p>{review}</p>
>>>>>>> 2b0cfb7e720e45628a768eb2f211090fbd06bba7
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
