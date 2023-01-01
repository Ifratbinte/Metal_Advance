import React from "react";
interface Props {
  image: string;
  alt: string;
  name: string;
  designation: string;
  bio: string;
  // button?: string;
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
          <p>
            {bio} <span className="btn primary">view More</span>
          </p>
        </div>
      </div>
      {/* <div className="author-content-top d-flex align-items-center">
        <img src={image} alt={alt} className="author-thumb flex-shrink-0" data-aos="zoom-in" data-aos-duration="1000" />
        <div className="author-info ms-4" data-aos="fade-down" data-aos-duration="1000">
          <h4 className="font-Poppins fw-bold fs-24">{name}</h4>
          <h5 className="font-Poppins font-normal danger fs-20">{designation}</h5>
          <p></p>
        </div>
      </div>
      <div className="author-content-bottom pt-4" data-aos="fade-up" data-aos-duration="1500">
        <p className="font-Poppins fs-16 fw-normal">{bio}</p>
      </div>
      {button && (
        <div className="author-link">
          <Link to="" className="danger font-Poppins fw-medium fs-18 p-0">
            {button}
          </Link>
        </div>
      )} */}
    </div>
  );
};

export default EmployeeCard;
