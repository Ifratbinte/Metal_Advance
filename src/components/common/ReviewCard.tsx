import React from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

interface Props {
  thumb: string;
  alt: string;
  name: string;
  designation: string;
  review: string;
}

const ReviewCard: React.FC<Props> = ({ thumb, alt, name, designation, review }) => {
  return (
    <div className="swiper-slide" data-aos="zoom-in-right" data-aos-duration="1000">
      <div className="testimonial-item">
        <p className="testimonial-review text-center">
          <ImQuotesLeft className="quote me-2" />
          {review}
          <ImQuotesRight className="quote ms-2" />
        </p>
        <div className="testimonial-author d-flex align-items-center ">
          <img src={thumb} alt={alt} className="testimonial-img" />
          <div className="testimonial-author-info ms-3">
            <h3 className="font-Poppins fw-medium">{name}</h3>
            <h4 className="font-Poppins fw-medium">{designation}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
