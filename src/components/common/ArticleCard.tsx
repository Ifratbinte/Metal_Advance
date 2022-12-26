import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Props {
  image: string;
  alt: string;
  date: string;
  title: string;
  description: string;
  link: string;
}

const ArticleCard: React.FC<Props> = ({ image, alt, date, title, description, link }) => {
  return (
    <div className="card rounded-0 article-card h-100" data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine">
      <img src={image} alt={alt} className="card-img-top position-relative" />
      <div className="card-body">
        <span className="card-date date-base danger-bg position-absolute">{date}</span>
        <h5 className="card-title font-Inter primary fw-bold fs-22">{title}</h5>
        <p className="card-text fs-18 fw-normal">{description}</p>
        <Link to="#" className="card-link primary fw-semibold fs-20">
          {link}
          <span className="long-arrow">
            <FaLongArrowAltRight />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
