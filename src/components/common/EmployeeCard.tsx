import Output from "editorjs-react-renderer";
import React from "react";
interface Props {
  image: string;
  alt: string;
  name: string;
  designation: string;
  bio: string;
}

const EmployeeCard: React.FC<Props> = ({ image, alt, name, designation, bio }) => {
  return (
    <div className="employee-wrap mt-5 rounded-4">
      <div className="employee-card">
        <div className="employee-info text-center">
          <img src={image} alt={alt} className="employee-thumb" />
          <div className="pt-4">
            <h3 className="fs-22 font-Poppins fw-600 primary">{name}</h3>
            <h5 className="fs-18 font-Poppins">{designation}</h5>
          </div>
        </div>
        <div className="employee-content">
          <Output data={JSON.parse(bio)}/>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
