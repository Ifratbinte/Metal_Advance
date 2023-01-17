import LinkRedirect from "#components/common/LinkRedirect";
import { Link } from "react-router-dom";
interface Props {
  image: string;
  alt: any;
  title: string;
  description: string;
  button?: string;
  date?: string;
  id?: number;
  url?: string;
  link?: string;
  isRelative?: boolean;
  isCenter?: boolean;
  isRedirect?: boolean;
}

const Card: React.FC<Props> = ({ image, alt, title, description, button, date, id, url, link, isRelative, isCenter, isRedirect }) => {
  return (
    <div className="card rounded-0 h-100" data-aos="zoom-in-down" data-aos-duration="1500">
      <img src={image} alt={alt} className={isRelative ? "position-relative card-img-top" : "card-img-top"} />
      <div className={isCenter ? "card-body text-center" : "card-body"}>
        {date && <span className="card-date date-base secondary-bg position-absolute">{date}</span>}
        <h5 className="card-title fw-medium pb-3 fs-20">{title}</h5>
        <p className="card-text fs-16">{description}</p>
        {/* {isRedirect && (
          <LinkRedirect id={id} url={url}>
            <a href={link} className="card-link primary fw-semibold fs-18">
              See full Story
            </a>
          </LinkRedirect>
        )} */}
        {button && (
          <Link to="#" className="btn button-base-secondary card-btn">
            {button}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
