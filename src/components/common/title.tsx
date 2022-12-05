import React from "react";
interface Props {
  title: string;
  span?: any;
}
const Title: React.FC<Props> = ({ title, span }) => {
  return (
    <>
      <h2 className="title banner-title fs-35">
        {title}
        <span className="text-danger">{span}</span>
      </h2>
    </>
  );
};

export default Title;
