import React from "react";
interface Props {
  image: string;
  name: string;
  designation: string;
}

const AuthorModalTitle: React.FC<Props> = ({ image, name, designation}) => {
  return (
    <div className="d-flex align-items-center">
      <img src={image} className="img-fluid team-modal-thumb rounded-circle border border-info me-3 p-1 bg-white" alt={name} />
      <div className="team-modal-content">
        <h5 className="fs-22">{name}</h5>
        <span className="d-block fst-italic fs-14 secondary">- {designation}</span>
      </div>
    </div>
  );
};

export default AuthorModalTitle;
