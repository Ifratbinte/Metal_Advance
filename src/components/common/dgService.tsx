import Output from "editorjs-react-renderer";
import React from "react";
interface Props {
  image: string;
  title: string;
  content: string;
  index: number;
}

const dgService: React.FC<Props> = ({ index, image, title, content }) => {
  return (
    <>
      <div
        className={
          index % 2 === 0
            ? "dg-service-inner border-gray border-opacity-10 rounded-2 p-4 OnChangeHover even"
            : "dg-service-inner border-gray border-opacity-10 rounded-2 p-4 OnChangeHover odd"
        }
      >
        <div className="dg-service-inner-content">
          <div className="dg-service-icon">
            <img src={image} alt={title} className="rounded-circle p-3 mb-4" />
          </div>
          <div className="dg-service-content">
            <h5 className="dg-service-title">{title}</h5>
            <Output data={JSON.parse(content)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default dgService;
