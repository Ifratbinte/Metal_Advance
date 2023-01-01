interface Props {
  title: string;
  sub_title: string;
  date: string;
  image: string;
  content: string;
}

const Details: React.FC<Props> = ({ title, sub_title, date, image, content }) => {
  return (
    <div className="article-details-inner">
      <div className="article-details-heading">
        <h1 className="article-title font-Inter mb-4">{title}</h1>
        <h5 className="article-subtitle font-Inter mb-3">{sub_title}</h5>
        <p className="fw-medium">
          Published : <span className="text-primary">{date}</span>
        </p>
      </div>
      <div className="article-details-thumb mb-4">
        <img src={image} alt={title} className="img-fluid" />
      </div>
      <div className="article-details-content ">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Details;
