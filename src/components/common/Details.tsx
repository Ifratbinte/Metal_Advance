import Output from "editorjs-react-renderer";
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
        <h2 className="article-title font-Inter mb-4">{title}</h2>
        <h5 className="article-subtitle fs-18 font-Inter mb-3">{sub_title && <Output data= {JSON.parse(sub_title)}/>}</h5>
        <p className="fw-medium">
          Published : <span className="text-primary">{date}</span>
        </p>
      </div>
      <div className="article-details-thumb d-flex justify-content-center mb-4">
        <img src={image} alt={title} className="img-fluid" />
      </div>
      <div className="article-details-content ">{content && <Output data={JSON.parse(content)} />}</div>
    </div>
  );
};

export default Details;
