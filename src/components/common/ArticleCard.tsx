import React from "react";
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
      <img src="https://placekitten.com/640/360" alt={alt} className="card-img-top position-relative" />
      <div className="card-body">
        <span className="card-date base position-absolute">{date}</span>
        <h5 className="card-title font-Inter fw-bold fs-22">{title}</h5>
        <p className="card-text fs-18 fw-normal">{description}</p>
        <Link to="#" className="card-link link fw-semibold fs-20">
          {link}
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
