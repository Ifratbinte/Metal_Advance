import LinkRedirect from "#components/common/LinkRedirect";
import React from "react";

interface Props {
  image: string;
  alt: string;
  date: string;
  title: string;
  description: string;
  id: number;
  url: string;
  link: string;
}

const ArticleCard: React.FC<Props> = ({ image, alt, date, title, description, id, url, link }) => {
  return (
    <div className="card rounded-0 article-card h-100" data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-sine">
      <img src={image} alt={alt} className="card-img-top position-relative" />
      <div className="card-body">
        <span className="card-date date-base secondary-bg position-absolute">{date}</span>
        <h5 className="card-title font-Inter primary fw-bold fs-20">{title}</h5>
        <p className="card-text fs-16 fw-normal">{description}</p>
        <LinkRedirect id={id} url={url}>
          <a href={link} className="card-link primary fw-semibold fs-18">See full Story</a>
        </LinkRedirect>
      </div>
    </div>
  );
};

export default ArticleCard;
