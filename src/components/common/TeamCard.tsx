import React from "react";
import { Link } from "react-router-dom";
import { FaBuffer } from "react-icons/fa";
interface Props {
  image: string;
  alt: string;
  name: string;
  designation: string;
  bio: string;
  bio_2: string;
  button?: string;
}

const EmployeeCard: React.FC<Props> = ({ image, alt, name, designation, bio, bio_2, button }) => {
  return (
    <>
      <div className="our-team">
        <div className="pic">
          <img src="images/img-1.jpg" />
          <ul className="social">
            <li>
              <a href="#"><FaBuffer/></a>
            </li>
            <li>
            <a href="#"><FaBuffer/></a>
            </li>
            <li>
            <a href="#"><FaBuffer/></a>
            </li>
            <li>
            <a href="#"><FaBuffer/></a>
            </li>
          </ul>
        </div>
        <div className="team-content">
          <h3 className="title">Williamson</h3>
          <span className="post">Web Developer</span>
        </div>
      </div>

      <div className="author-wrap rounded-4 h-100">
        <div className="author-content-top d-flex align-items-center">
          <img src={image} alt={alt} className="author-thumb flex-shrink-0" data-aos="zoom-in" data-aos-duration="1000" />
          <div className="author-info ms-4" data-aos="fade-down" data-aos-duration="1000">
            <h4 className="font-Poppins fw-bold fs-24">{name}</h4>
            <h5 className="font-Poppins font-normal danger fs-20">{designation}</h5>
          </div>
        </div>
        <div className="author-content-bottom pt-4" data-aos="fade-up" data-aos-duration="1500">
          <p className="font-Poppins fs-16 fw-normal">{bio}</p>
          {bio_2 && <p className="font-Poppins fs-16 fw-normal">{bio_2}</p>}
        </div>
        {button && (
          <div className="author-link">
            <Link to="" className="danger font-Poppins fw-medium fs-18 p-0">
              {button}
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default EmployeeCard;
