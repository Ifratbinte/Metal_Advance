import { DirectorInterface } from "#interfaces/index";
import React from "react";
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
interface Props {
  index: number;
  image: string;
  name: string;
  designation: string;
  content: string;
  handleShow: (data: DirectorInterface) => void;
  director: DirectorInterface;
}

const EmployeeCard: React.FC<Props> = ({ index, image, name, designation, content, handleShow, director }) => {
  return (
    <div
      className={`${index === 0 || index === 1 ? "custom-team-card" : "col-md-4"} ${index === 0 && "d-xl-flex justify-content-xl-end"} ${
        index === 1 && "d-xl-flex justify-content-xl-start"
      } col-sm-6`}
      onClick={() => handleShow(director)}
    >
      <div className={`${index === 0 || index === 1 ? "w-xl-70" : "w-sm-100"} member text-center position-relative base-bg-white rounded`}>
        <div className="pic">
          <img src={image} className="img-fluid team-thumb" alt={name} />
        </div>
        <div className="member-info">
          <h4>{name}</h4>
          <span>{designation}</span>
          <div className="social">
            <a href="">
              <FiTwitter className="member-social-icon" />
            </a>
            <a href="">
              <FiFacebook className="member-social-icon" />
            </a>
            <a href="">
              <FiInstagram className="member-social-icon" />
            </a>
            <a href="">
              <FiLinkedin className="member-social-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
