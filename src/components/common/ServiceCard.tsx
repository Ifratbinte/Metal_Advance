interface Props {
  image: string;
  alt: any;
  title: string;
  description: string;
}

const Card: React.FC<Props> = ({ image, alt, title, description }) => {
  return (
    <>
      <div className="row section-gap service-content">
        <div className="col-lg-6" data-aos="fade-right" data-aos-duration="1000">
          <div className="service-thumb">
            <img src={image} alt={alt} />
          </div>
        </div>
        <div className="col-lg-6" data-aos="fade-left" data-aos-duration="1000">
          <div className="service-inner-text">
            <h1 className="service-title font-Poppins fw-bold pb-3">{title}</h1>
            <p className="font-Poppins fs-16 pt-3">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
