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
    <div className="testimonial-wrap slider-gap bg-light h-100" data-aos="zoom-in-right" data-aos-duration="1000">
      <div className="testimonial-item">
        <div className="testimonial-top d-flex align-items-center justify-content-between">
          <div className="author d-sm-flex align-items-sm-center">
            <img src={thumb} alt={alt} className="testimonial-thumb border rounded-circle flex-shrink-0" />
            <div className="testimonial-info">
              <h4 className="testimonial-title font-Poppins fw-medium">{name}</h4>
              <h5 className="testimonial-desc font-Poppins fw-medium fs-16 primary">{designation}</h5>
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
