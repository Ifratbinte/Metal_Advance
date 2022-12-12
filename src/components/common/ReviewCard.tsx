import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

interface Props {
  thumb: string;
  alt: string;
  name: string;
  designation: string;
  review: string;
}

const ReviewCard: React.FC<Props> = ({ thumb, alt, name, designation, review }) => {
  return (
    <div className="testimonial-wrap slider-gap base-bg-white py-3 px-4 h-100" data-aos="zoom-in-right" data-aos-duration="1000">
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
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
