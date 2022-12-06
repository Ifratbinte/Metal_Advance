interface Props {
  image: string;
  alt: any;
  title: string;
  description: string;
  button?: string;
}

const Card: React.FC<Props> = ({ image, alt, title, description, button }) => {
  return (
    <div className="card rounded-0 h-100 custom-card">
      <img src={image} alt={alt} className="card-img-top" />
      <div className="card-body text-center">
        <h5 className="card-title font-Poppins fw-medium pb-3 fs-20">{title}</h5>
        <p className="card-text font-Poppins fs-16">{description}</p>
        {button && (
          <a href="#" className="btn button-base-secondary card-btn">
            {button}
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
