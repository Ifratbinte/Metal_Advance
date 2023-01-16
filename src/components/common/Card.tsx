import { Link } from "react-router-dom";

interface Props {
  image: string;
  alt: any;
  title: string;
  description: string;
  button?: string;
}

const Card: React.FC<Props> = ({ image, alt, title, description, button }) => {
  return (
    <div className="card cursor-pointer shadow-sm p-2 bg-light border border-0 rounded overflow-hidden rounded-0 h-100" data-aos="zoom-in-down" data-aos-duration="1500">
      <img src={image} alt={alt} className="card-img-top" />
      <div className="card-body text-center px-4">
        <h5 className="card-title overflow-hidden fw-medium py-3 fs-20 m-0">{title}</h5>
        <p className="card-text overflow-hidden pt-1 fs-16">{description}</p>
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
