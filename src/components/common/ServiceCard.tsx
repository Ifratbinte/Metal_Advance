import Output from "editorjs-react-renderer";
interface Props {
  image: string;
  alt: any;
  title: string;
  description: string;
}

const Card: React.FC<Props> = ({ image, alt, title, description }) => {
  return (
    <>
      <div className="col-lg-5">
        <div className="service-thumb">
          <img src={image} alt={alt} className="img-fluid" />
        </div>
      </div>
      <div className="col-lg-7">
        <div className="service-inner-text pt-4 pt-md-0">
          <h1 className="service-title font-Poppins fw-bold pb-3">{title}</h1>
          <div className="service-inner-list">
            <Output data={JSON.parse(description)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
