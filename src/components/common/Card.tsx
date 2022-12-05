interface Props {
  image: string;
  alt: any;
  title: string;
  description: string;
  button?: string;
}

const Card: React.FC<Props> = ({ image, alt, title, description, button }) => {
  return (
    <div className="card h-100">
      <img src={image} alt={alt} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        {button && (
          <a href="#" className="btn button-base-primary">
            {button}
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;